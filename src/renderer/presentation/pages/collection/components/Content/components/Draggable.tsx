import { FC, HTMLAttributes, useState } from 'react';
import { twJoin, twMerge } from 'tailwind-merge';

interface DraggableProps extends HTMLAttributes<HTMLDivElement> {
  isActive: boolean;
}

export const Draggable: FC<DraggableProps> = ({ isActive, ...rest }) => {
  const [isEnable, setIsEnable] = useState<boolean>(false);

  const handleEnable = () => setIsEnable(true);
  const handleDisable = () => setIsEnable(false);

  return (
    <div
      className={twJoin(
        'w-2 h-full cursor-ew-resize flex flex-row justify-center'
      )}
      onMouseEnter={handleEnable}
      onMouseLeave={handleDisable}
      {...rest}
    >
      <div
        className={twMerge(
          'w-px h-full cursor-ew-resize bg-primary',
          isEnable && !isActive && 'bg-accent',
          isActive && 'bg-accent'
        )}
        {...rest}
      />
    </div>
  );
};
