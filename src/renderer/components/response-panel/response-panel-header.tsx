export const ResponsePanelHeader = () => {
  return (
    <div className="w-full h-14 px-5 border-b-[1px] border-primary flex flex-row items-center">
      <div className="flex flex-row gap-3 items-center">
        <div className="min-w-[100px] py-1.5 border-[1px] border-primary text-white flex items-center justify-center">
          Cancelled
        </div>
        <div className="min-w-[100px] py-1.5 border-[1px] border-primary text-white flex items-center justify-center">
          0 ms
        </div>
        <div className="min-w-[100px] py-1.5 border-[1px] border-primary text-white flex items-center justify-center">
          0 Bytes
        </div>
      </div>
    </div>
  );
};
