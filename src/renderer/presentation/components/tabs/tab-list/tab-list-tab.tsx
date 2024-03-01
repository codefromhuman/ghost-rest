import { isNil } from '../../../../main/utils/is-nil';
import { CustomTabProps } from '../tabs-root';

interface TabListTabProps extends CustomTabProps {
  children: string | number;
}

export function TabListTab({
  children,
  handleChangeTabIndex,
  currentIndex,
}: TabListTabProps) {
  const handleChangeTab = () => {
    if (!handleChangeTabIndex || isNil(currentIndex)) return;
    handleChangeTabIndex(currentIndex!);
  };

  return (
    <div
      className="px-6 h-full text-white flex items-center justify-center hover:bg-white/20 cursor-pointer"
      onClick={handleChangeTab}
    >
      {children}
    </div>
  );
}
