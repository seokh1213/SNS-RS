import React from "react";
import { Link } from "react-router-dom";

interface IProps {
  setLogin: (isLogin: boolean) => void;
}

const LoginPage = ({ setLogin }: IProps) => {
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const loginHandler = () => {
    if (phoneNumber === "") return;

    // dev
    localStorage.setItem("token", "token");
    setLogin(true);
    return;

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
        }
      });
  };
  return (
    <div className="bg-color">
      <form>
        <input
          type="text"
          placeholder="전화번호"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <button
          type="button"
          onClick={(event) => {
            event.preventDefault();
            loginHandler();
          }}
        >
          로그인
        </button>
      </form>
      <div>
        <span>
          처음이시라면 <Link to="/join">회원가입</Link> 하세요
        </span>
      </div>
    </div>
  );
};

export default LoginPage;
