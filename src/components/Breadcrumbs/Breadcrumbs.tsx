import { useLocation, useNavigate } from 'react-router-dom';
import { ArrowLeft } from '../icons';

export const Breadcrumbs = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const atHome = location.pathname === '/';
  return (
    <div className='h-8 w-full bg-neutral-100 justify-center flex sticky top-14 z-20'>
      <div className='max-w-6xl w-full h-full flex px-6 lg:px-12 items-center text-xs justify-end'>
        {atHome ? null : (
          <button
            onClick={() => navigate(-1)}
            className='flex gap0.5 items-center'
          >
            <ArrowLeft className='h-3 w-3' />
            Voltar
          </button>
        )}
      </div>
    </div>
  );
};
