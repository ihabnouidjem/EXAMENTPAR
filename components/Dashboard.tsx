import axios from "@/../node_modules/axios/index";
import { useEffect, useState } from "react";
import { Demand } from "./Demand";

export const Dashboard = () => {
  const [demands, setDemands] = useState({ status: "loading", demands: [] });
  const [users, setUsers] = useState({ status: "loading", users: [] });
  const fetchDemands = () => {
    axios
      .get(`http://localhost:3000/api/demands`)
      .then((res) => {
        if (res.data) {
          setDemands({ ...demands, status: "fetched", demands: res.data });
        } else {
          setDemands({ ...demands, status: "fetched", demands: [] });
        }
      })
      .catch((err) => {
        setDemands({ ...demands, status: "fetched", demands: [] });
      });
  };
  const fetchTechies = () => {
    axios
      .get(`http://localhost:3000/api/users/techguys`)
      .then((res) => {
        if (res.data) {
          setUsers({ ...users, status: "fetched", users: res.data });
        } else {
          setUsers({ ...users, status: "fetched", users: [] });
        }
      })
      .catch((err) => {
        setUsers({ ...users, status: "fetched", users: [] });
      });
  };
  useEffect(() => {
    fetchDemands();
    fetchTechies();
  }, []);
  return (
    <div className="w-full flex flex-col gap-6 items-center py-8">
      <div className="w-[min(800px,100%)] ">
        <p className="w-full text-[28px] font-semibold text-zinc-900 ">
          demands
        </p>
      </div>
      {demands.status === "loading" && (
        <div className="w-[min(800px,100%)] ">
          <p className="w-full text-[21px] font-medium text-zinc-900 ">
            Loading...
          </p>
        </div>
      )}
      {demands.status === "fetched" && demands.demands?.length === 0 && (
        <div className="w-[min(800px,100%)] ">
          <p className="w-full text-[21px] font-medium text-zinc-900 ">
            No demands available
          </p>
        </div>
      )}
      <div className="w-full flex flex-col-reverse gap-6 items-center"></div>
      {demands.status === "fetched" &&
        demands.demands?.length > 0 &&
        demands.demands.map((demand, index) => {
          return <Demand key={index} demand={demand} />;
        })}
    </div>
  );
};
