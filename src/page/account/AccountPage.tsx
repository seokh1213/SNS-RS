import React from "react";
import { Redirect } from "react-router";
import { Link } from "react-router-dom";

interface IProps {
  alter?: boolean;
  setPath?: any;
}
const AccountPage = ({ alter = false, setPath }: IProps) => {
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [isJoinSuccess, setSuccess] = React.useState(false);
  const [error, setError] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  const BASE_URL =
    process.env.NODE_ENV === "production" ? process.env.REACT_APP_BASE_URL : "";

  setPath && setPath();

  const joinHandler = () => {
    if (phoneNumber === "" && !loading) return;
    setLoading(true);
    fetch(process.env.REACT_APP_API_URL + "/join", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: phoneNumber }),
    })
      .then((res) => res.json())
      .then((json) => {
        if (json.ok) {
          setSuccess(true);
        } else {
          setError("아이디가 이미 존재합니다.");
        }
      })
      .catch((error) => setError("서버와의 연결 문제가 있습니다."))
      .finally(() => setLoading(false));
  };
  return isJoinSuccess ? (
    <Redirect to={BASE_URL + "/"} />
  ) : (
    <div className="flex h-full items-center justify-center">
      <div className=" h-60 w-1/3 max-w-sm mb-56 border border-gray-300 bg-white flex flex-col p-10">
        <div className=" w-full pb-1 mb-2 text-gray-500 text-sm">
          {alter ? "수정" : "회원가입"}
        </div>
        <form className="flex flex-col">
          <input
            className=" w-full h-10 border border-gray-300 rounded-lg p-2"
            type="text"
            placeholder="전화번호"
            value={phoneNumber}
            onChange={(e) => {
              setPhoneNumber(e.target.value);
            }}
          />
          {error !== "" && <div className=" text-red-500 text-sm">{error}</div>}
          <button
            className="w-full h-10 my-4 bg-blue-500 text-white border rounded-lg p-2 active:bg-blue-400"
            onClick={(event) => {
              event.preventDefault();
              joinHandler();
            }}
          >
            {loading ? "..." : alter ? "수정" : "회원가입"}
          </button>
        </form>
        {!alter && (
          <div className="text-sm">
            로그인 페이지로{" "}
            <Link to={BASE_URL + "/login"} className=" text-blue-500 font-bold">
              이동
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default AccountPage;
