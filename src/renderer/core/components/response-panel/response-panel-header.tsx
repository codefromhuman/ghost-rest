export const ResponsePanelHeader = () => {
  return (
    <div className="w-full h-14 px-5 border-b-[1px] flex flex-row items-center">
      <div className="flex flex-row gap-3 items-center">
        <div className="min-w-[100px] py-1 bg-red-400 text-white flex items-center justify-center">
          Cancelled
        </div>
        <div>0 ms</div>
        <div>0 Bytes</div>
      </div>
    </div>
  );
};
