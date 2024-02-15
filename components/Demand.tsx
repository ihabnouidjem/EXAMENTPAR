export const Demand = ({ demand }: { demand: any }) => {
  return (
    <div className="w-[min(800px,100%)] bg-white p-3 gap-3 rounded-xl flex flex-col">
      <div className="w-full flex flex-col">
        <p className="w-full text-[22px] font-medium text-zinc-900 ">ID</p>
        <p className="w-full text-[18px] font-medium text-zinc-700 ">
          1fv5d1v65s4rvv6155vdfv89+
        </p>
      </div>
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
      <div className="w-full flex flex-col">
        <p className="w-full text-[22px] font-medium text-zinc-900 ">
          Tech Team
        </p>
        <div className="w-full flex flex-row flex-wrap gap-3">
          {[1, 2, 3, 4, 5].map((client, index) => {
            return (
              <p
                key={index}
                className="text-[16px] font-medium text-zinc-700 bg-zinc-200 px-3 rounded-full "
              >
                INTECH
              </p>
            );
          })}
        </div>
      </div>
      <div className="w-full flex flex-row justify-end">
        <button className="py-2 px-8 rounded-lg bg-blue-500 border-none outline-none">
          <p className="text-[18px] font-bold text-zinc-50 ">Modify team</p>
        </button>
      </div>
    </div>
  );
};
