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
} from '@tanstack/react-query';
import { User } from '@/types';
import { AuthResponseDto, getAuth, GetAuthParams, getUser } from '@/api/user';
import { SplashLoader } from '@/components/SplashLoader';
import { getItem, removeItem, setItem } from '@/services/localStorage';
import { LOCALSTORAGE_TOKEN_KEY } from '@/constants/keys';
import { queryClient } from '@/providers';

export const USER_QUERY_KEY = 'user';

type AuthContextValue = {
  user: User | undefined;
  login: UseMutateAsyncFunction<
    AuthResponseDto,
    unknown,
    GetAuthParams,
    unknown
  >;
  logout: () => void;
  isAuthLoading: boolean;
};

const AuthContext = createContext<AuthContextValue | null>(null);

type AuthProviderProps = { children: ReactNode };
export const AuthProvider = ({ children }: AuthProviderProps) => {
  const localToken = getItem(LOCALSTORAGE_TOKEN_KEY);

  const {
    data: auth,
    reset: resetGetAuth,
    mutateAsync: login,
    isLoading: isAuthLoading,
  } = useMutation({
    mutationFn: getAuth,
    onSuccess: (data) => {
      setItem(LOCALSTORAGE_TOKEN_KEY, data.jwtToken);
    },
  });

  const hasLocalToken = !!localToken;
  const hasRemoteToken = !!auth?.jwtToken;

  const { data: user, isFetching } = useQuery({
    retry: 1,
    queryKey: [USER_QUERY_KEY, localToken],
    queryFn: getUser,
    enabled: hasLocalToken && !hasRemoteToken,
  });

  const logout = useCallback(() => {
    removeItem(LOCALSTORAGE_TOKEN_KEY);
    queryClient.clear();
    resetGetAuth();
  }, [resetGetAuth]);

  const value = useMemo(
    () => ({
      user: auth?.data || user?.data,
      isAuthLoading,
      login,
      logout,
    }),
    [auth?.data, user?.data, isAuthLoading, login, logout],
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
