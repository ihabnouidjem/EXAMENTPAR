import axios from "@/../node_modules/axios/index";
import { appContext } from "@/app/page";
import { useContext, useState } from "react";

export const Login = () => {
  const [loginState, setLoginState] = useState<any>({ email: "", err: "" });

  const { user, setUser } = useContext(appContext);

  const fetchUser = () => {
    if (loginState.email && loginState.email !== "")
      axios
        .get(`http://localhost:3000/api/users/${loginState.email}`)
        .then((res) => {
          if (res.data) {
            setUser(res.data);
            setLoginState({ ...loginState, err: "" });
          } else {
            setLoginState({
              ...loginState,
              err: "You entered the wrong email",
            });
          }
        })
        .catch((err) => {
          setLoginState({ ...loginState, err: "Couldn't fetch data" });
        });
  };
  return (
    <div className="w-full flex flex-col gap-6 items-center py-8">
      <div className="w-[min(800px,100%)] bg-white p-3 gap-3 rounded-xl flex flex-col">
        {loginState.err && loginState.err !== "" && (
          <p className="w-full text-[16px] font-bold text-red-400">
            {loginState.err}
          </p>
        )}
        <div className="w-full h-12 rounded-lg border-[0.5px] border-zinc-700">
          <input
            // ref={emailRef}
            className="w-full h-full px-4 text-[21px] text-zinc-800 font-normal border-none outline-none bg-transparent "
            type={`email`}
            placeholder="Email"
            onChange={(e) => {
              setLoginState({ ...loginState, email: e.target.value });
            }}
          />
        </div>
        <div className="w-full flex flex-row justify-end">
          <button
            className="py-2 px-8 rounded-lg bg-blue-500 border-none outline-none"
            onClick={() => {
              fetchUser();
            }}
          >
            <p className="text-[18px] font-bold text-zinc-50 ">Login</p>
          </button>
        </div>
      </div>
    </div>
  );
};
