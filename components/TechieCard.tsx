import axios from "@/../node_modules/axios/index";
import { useEffect, useState } from "react";

export const TechieCard = ({ tid }: { tid: string | number }) => {
  const [techie, setTechie] = useState<any>(null);
  const fetchUser = () => {
    axios
      .get(`http://localhost:3000/api/users/${tid}`)
      .then((res) => {
        if (res.data) setTechie(res.data);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    fetchUser();
  }, []);
  return (
    <p className="text-[16px] font-medium text-zinc-700 bg-zinc-200 px-3 rounded-full ">
      {techie && techie.name}
    </p>
  );
};
