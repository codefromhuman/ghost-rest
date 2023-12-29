export const RequestPanelHeader: React.FC = ({}) => {
  return (
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
        className="px-3 flex flex-1 bg-transparent outline-none text-white"
        placeholder="https://api.myservice.com/v1/users"
      />
      <button className="min-w-[100px] py-1.5 bg-accent text-white">
        SEND
      </button>
    </div>
  );
};
