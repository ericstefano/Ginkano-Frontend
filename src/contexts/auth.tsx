import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useMemo,
} from 'react';
import {
  UseMutateAsyncFunction,
  useMutation,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query';
import { useLocalStorage } from 'usehooks-ts';
import { User } from '@/types/User';
import { AuthResponseDto, getAuth, GetAuthParams, getUser } from '@/api/auth';
import { SplashLoader } from '@/components/SplashLoader';

type AuthContextValue = {
  user: User | undefined;
  login: UseMutateAsyncFunction<
    AuthResponseDto,
    unknown,
    GetAuthParams,
    unknown
  >;
  logout: () => void;
};

const AuthContext = createContext<AuthContextValue | null>(null);

type AuthProviderProps = { children: ReactNode };
export const AuthProvider = ({ children }: AuthProviderProps) => {
  const queryClient = useQueryClient();

  const [localToken, setToken] = useLocalStorage<string | undefined>(
    'token',
    undefined,
  );

  const {
    data: auth,
    reset,
    mutateAsync,
  } = useMutation({
    mutationFn: getAuth,
    onSuccess: (data) => {
      setToken(data.token);
    },
  });

  const queryToken = auth?.token;
  const hasAnyToken = !!localToken || !!queryToken;

  const { data: user, isFetching } = useQuery({
    retry: 1, // dando erro de cors, funciona após uma retry no firefox
    queryKey: ['user', localToken, queryToken],
    queryFn: () =>
      getUser({ token: (localToken as string) || (queryToken as string) }), // adicionar tiny-invariant ou type assertion, token nunca será undefined aqui
    enabled: hasAnyToken,
  });

  const logout = useCallback(() => {
    setToken(undefined);
    queryClient.clear();
    reset();
  }, [queryClient, reset, setToken]);

  const value = useMemo(
    () => ({
      user,
      login: mutateAsync,
      logout,
    }),
    [logout, mutateAsync, user],
  );

  if (isFetching) {
    return <SplashLoader />;
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuthContext must be used within an AuthProvider');
  }
  return context;
};
