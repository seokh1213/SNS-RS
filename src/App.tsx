import React from "react";
import { BrowserRouter, Route, Switch, Redirect, Link } from "react-router-dom";
import AccountPage from "./page/account/AccountPage";
import LoginPage from "./page/account/LoginPage";
import FriendListPage from "./page/friend/FriendListPage";

function App() {
  const [isLogin, setLogin] = React.useState(
    Boolean(localStorage.getItem("token"))
  );
  const [path, setPath] = React.useState(0);

  const BASE_URL =
    process.env.NODE_ENV === "production" ? process.env.REACT_APP_BASE_URL : "";

  return (
    <div className="h-screen flex flex-col">
      <BrowserRouter>
        <Switch>
          {isLogin ? (
            <>
              <div className="w-screen h-12 flex justify-end items-center px-12 border-b border-gray-300 bg-white">
                <Link
                  to={BASE_URL + "/friends"}
                  className={`text-gray-700 mr-4 ${
                    path === 0 && "text-blue-500"
                  }`}
                >
                  친구들
                </Link>
                <Link
                  to={BASE_URL + "/update"}
                  className={`text-gray-700 mr-4 ${
                    path === 1 && "text-blue-500"
                  }`}
                >
                  정보수정
                </Link>
                <span
                  className="text-gray-700 cursor-pointer"
                  onClick={() => {
                    localStorage.removeItem("token");
                    setLogin(false);
                  }}
                >
                  로그아웃
                </span>
              </div>
              <Route path={BASE_URL + "/friends"}>
                <FriendListPage setPath={() => setPath(0)} />
              </Route>
              <Route path={BASE_URL + "/update"}>
                <AccountPage alter={true} setPath={() => setPath(1)} />
              </Route>
              <Route path="*">
                <Redirect to={BASE_URL + "/friends"} />
              </Route>
            </>
          ) : (
            <>
              <Route path={BASE_URL + "/login"}>
                <LoginPage setLogin={setLogin} />
              </Route>
              <Route path={BASE_URL + "/join"}>
                <AccountPage />
              </Route>
              <Route path="*">
                <Redirect to={BASE_URL + "/login"} />
              </Route>
            </>
          )}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
