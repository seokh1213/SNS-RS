import React from "react";
import { Redirect } from "react-router";

interface IProps {
  alter?: boolean;
}
const AccountPage = ({ alter = false }: IProps) => {
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [canUseId, setUseId] = React.useState(false);
  const [isJoinSuccess, setSuccess] = React.useState(false);

  const checkHandler = () => {
    if (phoneNumber === "") return;

    fetch(process.env.REACT_APP_API_URL + "/check", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: phoneNumber }),
    })
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setUseId(json.ok);
        if (json.error) {
          alert("이미 있는 아이디입니다.");
        }
      });
  };
  const joinHandler = () => {
    if (phoneNumber === "") return;
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
          alert(json.error);
        }
      });
  };
  return isJoinSuccess ? (
    <Redirect to="/" />
  ) : (
    <div>
      <form>
        <input
          type="text"
          placeholder="전화번호"
          value={phoneNumber}
          onChange={(e) => {
            setUseId(false);
            setPhoneNumber(e.target.value);
          }}
        />
        <button
          onClick={(event) => {
            event.preventDefault();
            checkHandler();
          }}
        >
          중복확인
        </button>
        {phoneNumber !== "" && !canUseId && <div>중복확인해주세요</div>}
        <br />
        <button
          onClick={(event) => {
            event.preventDefault();
            joinHandler();
          }}
          disabled={!canUseId}
        >
          {alter ? "수정" : "회원가입"}
        </button>
      </form>
    </div>
  );
};

export default AccountPage;
