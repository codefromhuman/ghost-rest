import IconImage from '../../../../../../assets/icon.png';

export const HeaderRoot = () => {
  return (
    <div className="w-full h-16 px-5 bg-secondary border-b-[1px] border-primary flex flex-row items-center">
      <img src={IconImage} className="w-10 h-10 object-contain" />
    </div>
  );
};
