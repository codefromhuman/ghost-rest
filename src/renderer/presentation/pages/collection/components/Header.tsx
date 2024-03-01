import { ArrowLeftIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import IconImage from '../../../../../../assets/icon.png';

export const Header = () => {
  const navigate = useNavigate();

  const handleBack = () => navigate('/');

  return (
    <div className="w-full h-16 px-5 bg-secondary border-b-[1px] border-primary flex flex-row items-center gap-5">
      <button onClick={handleBack}>
        <ArrowLeftIcon className="text-white" />
      </button>
      <div className="w-px h-[40%] bg-primary" />
      <img src={IconImage} className="w-10 h-10 object-contain" />
    </div>
  );
};
