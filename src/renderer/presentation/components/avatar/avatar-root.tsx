import { ImgHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

interface AvatarRootProps extends ImgHTMLAttributes<HTMLImageElement> {
  name: string;
}

export const AvatarRoot: React.FC<AvatarRootProps> = ({
  name,
  src,
  ...rest
}) => {
  return src ? (
    <div
      className={twMerge('w-10 h-10 rounded-lg overflow-hidden cursor-pointer')}
    >
      <img className="w-full h-full" src={src} {...rest} />
    </div>
  ) : (
    <div
      className={twMerge(
        'w-10 h-10 rounded-lg overflow-hidden bg-accent cursor-pointer flex items-center justify-center'
      )}
    >
      <span className="text-white font-semibold">{name.substring(0, 1)}</span>
    </div>
  );
};
