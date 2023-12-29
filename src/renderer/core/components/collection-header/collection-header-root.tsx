export function CollectionHeaderRoot() {
  return (
    <div className="w-full h-14 px-5 bg-secondary border-b-[1px] flex flex-row items-center">
      {/* Logo faker */}
      <div className="flex flex-row gap-3 items-center">
        <div className="w-8 h-8 bg-green-500 rounded-full" />
        <span className="text-white text-lg">Ghosty</span>
      </div>
    </div>
  );
}
