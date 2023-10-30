import clsx from 'clsx';
import LogoIcon from './icons/logo';

export default function LogoSquare({ size }: { size?: 'sm' | undefined }) {
  return (
    <div className={clsx('flex flex-none items-center justify-center')}>
      <LogoIcon />
    </div>
  );
}
