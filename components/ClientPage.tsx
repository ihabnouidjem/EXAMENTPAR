export const ClientPage = () => {
  return (
    <div className="w-full flex flex-col items-center py-8">
      <div className="w-[min(800px,100%)] flex flex-col gap-2 p-3 rounded-xl border-[0.5px] border-zinc-700">
        <div className="w-full h-12 rounded-lg border-[0.5px] border-zinc-700">
          <input
            className="w-full h-full px-4 text-[21px] text-zinc-800 font-normal border-none outline-none bg-transparent "
            type={`text`}
            placeholder="username"
          />
        </div>
        <div className="w-full h-12 rounded-lg border-[0.5px] border-zinc-700">
          <input
            className="w-full h-full px-4 text-[21px] text-zinc-800 font-normal border-none outline-none bg-transparent "
            type={`email`}
            placeholder="email"
          />
        </div>
        <div className="w-full h-12 rounded-lg border-[0.5px] border-zinc-700">
          <input
            className="w-full h-full px-4 text-[21px] text-zinc-800 font-normal border-none outline-none bg-transparent "
            type={`text`}
            placeholder="location"
          />
        </div>
        <div className="w-full h-32 rounded-lg border-[0.5px] border-zinc-700">
          <textarea
            className="w-full h-full px-4 text-[21px] text-zinc-800 font-normal border-none outline-none bg-transparent "
            placeholder="Describe your problem here!"
          ></textarea>
        </div>
        <div className="w-full flex flex-row justify-end">
          <button className="py-2 px-8 rounded-lg bg-blue-500 border-none outline-none">
            <p className="text-[18px] font-bold text-zinc-50 ">submit</p>
          </button>
        </div>
      </div>
    </div>
  );
};
