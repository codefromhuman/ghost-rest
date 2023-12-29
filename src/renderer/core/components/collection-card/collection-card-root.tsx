import { faker } from '@faker-js/faker';
import {
  ClockIcon,
  ContainerIcon,
  GitBranchIcon,
  GithubIcon,
  MoreVerticalIcon,
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const CollectionCardRoot = () => {
  const navigate = useNavigate();

  function handleGotoCollection() {
    navigate('/collection/1234');
  }

  return (
    <div
      className="rounded-lg border-[1px] p-3 flex flex-col justify-between"
      onClick={handleGotoCollection}
    >
      {/* Header */}
      <div className="w-full flex flex-row justify-between">
        {/* Profile */}
        <div className="flex flex-row gap-2 items-center">
          {/* Avatar */}
          <div className="w-10 h-10 rounded-full overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src={faker.image.urlPicsumPhotos()}
            />
          </div>
          <div className="flex flex-col">
            <p className="text-md text-white font-bold">
              {faker.person.jobArea()} API
            </p>
            <span className="text-sm text-white">collection</span>
          </div>
        </div>
        {/* More Options */}
        <button>
          <MoreVerticalIcon className="text-white" size={20} />
        </button>
      </div>
      {/* Content */}
      <div className="flex flex-row gap-2 justify-between">
        <div className="flex flex-row items-center gap-2">
          <ClockIcon className="text-white" size={16} />
          <span className="text-sm text-white">4 months ago</span>
        </div>
        <div className="flex flex-row items-center gap-2">
          <GithubIcon className="text-white" size={16} />
          <GitBranchIcon className="text-white" size={16} />
          <ContainerIcon className="text-white" size={16} />
        </div>
      </div>
    </div>
  );
};
