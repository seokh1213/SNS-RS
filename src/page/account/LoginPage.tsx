import React from "react";
import { Link } from "react-router-dom";

interface IProps {
  setLogin: (isLogin: boolean) => void;
}

const LoginPage = ({ setLogin }: IProps) => {
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [error, setError] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  const BASE_URL =
    process.env.NODE_ENV === "production" ? process.env.REACT_APP_BASE_URL : "";

  const loginHandler = () => {
    if (phoneNumber === "" && !loading) return;
    setLoading(true);

    fetch(process.env.REACT_APP_API_URL + "/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: phoneNumber }),
    })
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        if (json.ok) {
          localStorage.setItem("token", json.token);
          setLogin(true);
        } else {
          setError("아이디가 틀렸습니다.");
        }
      })
      .catch(() => setError("서버와의 연결 문제가 있습니다."))
      .finally(() => setLoading(false));
  };
  return (
    <div className="flex h-full items-center justify-center">
      <div className=" h-60 w-1/3 max-w-sm mb-56 border border-gray-300 bg-white flex flex-col p-10">
        <div className=" w-full pb-1 mb-2 text-gray-500 text-sm">로그인</div>
        <form className="flex flex-col">
          <input
            className=" w-full h-10 border border-gray-300 rounded-lg p-2"
            type="text"
            placeholder="전화번호"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          {error !== "" && <div className=" text-red-500 text-sm">{error}</div>}
          <button
            className="w-full h-10 my-4 bg-blue-500 text-white border rounded-lg p-2 active:bg-blue-400"
            type="button"
            onClick={(event) => {
              event.preventDefault();
              loginHandler();
            }}
          >
            {loading ? "..." : "로그인"}
          </button>
        </form>
        <div className="text-sm">
          계정이 없으신가요?{" "}
          <Link to={BASE_URL + "/join"} className=" text-blue-500 font-bold">
            가입하기
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
