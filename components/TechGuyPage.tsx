export const TechGuyPage = () => {
  return (
    <div className="w-full flex flex-col items-center py-8">
      <div className="w-[min(800px,100%)] p-3 gap-3 rounded-xl bg-white flex flex-col ">
        <p className="w-full text-[28px] font-semibold text-zinc-900 ">
          We got a job for you!
        </p>
        <div className="w-full flex flex-col">
          <p className="w-full text-[22px] font-medium text-zinc-900 ">
            Destination
          </p>
          <p className="w-full text-[18px] font-medium text-zinc-700 ">
            Oran, hay el senia N 130
          </p>
        </div>
        <div className="w-full flex flex-col">
          <p className="w-full text-[22px] font-medium text-zinc-900 ">
            Client Name
          </p>
          <p className="w-full text-[18px] font-medium text-zinc-700 ">
            Ihab nouidjem
          </p>
        </div>
        <div className="w-full flex flex-col">
          <p className="w-full text-[22px] font-medium text-zinc-900 ">
            Client Email
          </p>
          <p className="w-full text-[18px] font-medium text-zinc-700 ">
            ihab.nouidjem01@gmail.com
          </p>
        </div>
        <div className="w-full flex flex-col">
          <p className="w-full text-[22px] font-medium text-zinc-900 ">
            Client Problem
          </p>
          <p className="w-full text-[18px] font-medium text-zinc-700 ">
            problem problem problem problem problem proeblem problem problem
            problem problem problem proeblem problem problem problem problem
            problem proeblem problem problem problem problem problem proeblem
            problem problem problem problem problem proeblem
          </p>
        </div>
        <div className="w-full flex flex-row justify-end">
          <button className="py-2 px-8 rounded-lg bg-blue-500 border-none outline-none">
            <p className="text-[18px] font-bold text-zinc-50 ">done</p>
          </button>
        </div>
      </div>
    </div>
  );
};
