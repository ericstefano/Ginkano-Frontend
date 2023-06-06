import * as RadixDropdownMenu from '@radix-ui/react-dropdown-menu';
import { Link } from 'react-router-dom';
import { AvatarButton } from '../AvatarButton';
import { Logout } from '../icons/Logout';
import { FileText } from '../icons/FileText';
import { User as UserIcon } from '../icons/User';
import { User } from '@/types';
import { useAuthContext } from '@/contexts/auth';

const DropdownItem = ({
  children,
  ...props
}: RadixDropdownMenu.DropdownMenuItemProps) => {
  return (
    <RadixDropdownMenu.Item
      className='hover:(bg-violet-400 text-white font-500) focus:(bg-violet-400 text-white font-500) px-2 py-1.5 rounded-md outline-none flex gap-2 items-center cursor-pointer'
      {...props}
    >
      {children}
    </RadixDropdownMenu.Item>
  );
};

export const DropdownMenu = () => {
  const { logout, user } = useAuthContext();

  return (
    <RadixDropdownMenu.Root>
      <RadixDropdownMenu.Trigger asChild>
        <AvatarButton user={user as User} />
      </RadixDropdownMenu.Trigger>
      <RadixDropdownMenu.Portal>
        <RadixDropdownMenu.Content
          className='bg-white mx-3 drop-shadow-md px-1.5 py-1 rounded-lg select-none border-1  animate-fade-in animate-duration-150 ease-in-out min-w-55 z-30'
          sideOffset={16}
        >
          <DropdownItem asChild>
            <Link to='/profile' draggable='false'>
              <UserIcon className='h-4.5 w-4.5' />
              Perfil
            </Link>
          </DropdownItem>
          <DropdownItem asChild>
            <Link to='/terms' draggable='false'>
              <FileText className='h-4.5 w-4.5' />
              Termos e condições
            </Link>
          </DropdownItem>
          <RadixDropdownMenu.Separator className='bg-gray-300 h-px my-1.5' />
          <DropdownItem onClick={() => logout()}>
            <Logout className='h-4.5 w-4.5' />
            Logout
          </DropdownItem>
        </RadixDropdownMenu.Content>
      </RadixDropdownMenu.Portal>
    </RadixDropdownMenu.Root>
  );
};
