import { SendIcon } from 'lucide-react';
import { HTMLAttributes, ReactNode } from 'react';

interface RequestPanelRootProps extends HTMLAttributes<HTMLDivElement> {}

export const HttpRequestPanel: React.FC<RequestPanelRootProps> = ({
  ...rest
}) => {
  return (
    <div className="flex flex-1 flex-col" {...rest}>
      <div className="w-full h-14 px-3 flex flex-row justify-between items-center border-b-[1px] border-primary">
        <select className="h-10 bg-transparent text-white">
          <option>GET</option>
          <option>POST</option>
          <option>CREATE</option>
          <option>PUT</option>
          <option>PATCH</option>
          <option>DELETE</option>
          <option>OPTIONS</option>
          <option>HEAD</option>
          <option>CUSTOM</option>
        </select>
        <input
          className="px-3 flex flex-1 bg-transparent outline-none text-white .placeholder-red-700::placeholder"
          placeholder="https://api.myservice.com/v1/users"
        />
        <button className="min-w-[100px] py-1.5 px-4 bg-accent text-white flex flex-row gap-3 items-center">
          <SendIcon size={20} />
          <span>SEND</span>
        </button>
      </div>
    </div>
  );
};
