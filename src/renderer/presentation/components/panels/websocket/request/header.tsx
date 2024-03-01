import { WifiIcon } from 'lucide-react';

export const RequestHeader: React.FC = ({}) => {
  return (
    <div className="w-full h-14 px-3 flex flex-row justify-between items-center border-b-[1px] border-primary">
      <select className="h-10 bg-transparent text-white">
        <option>v2</option>
        <option>v3</option>
        <option>v4</option>
      </select>
      <input
        className="px-3 flex flex-1 bg-transparent outline-none text-white .placeholder-red-700::placeholder"
        placeholder="https://api.myservice.com/v1/users"
      />
      <button className="min-w-[100px] py-1.5 px-4 bg-accent text-white flex flex-row gap-3 items-center">
        <WifiIcon size={20} />
        <span>CONNECT</span>
      </button>
    </div>
  );
};
