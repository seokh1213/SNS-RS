import React from "react";
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect,
  Link,
  useRouteMatch,
} from "react-router-dom";
import AccountPage from "./page/account/AccountPage";
import LoginPage from "./page/account/LoginPage";
import FriendListPage from "./page/friend/FriendListPage";

function App() {
  const [isLogin, setLogin] = React.useState(
    Boolean(localStorage.getItem("token"))
  );
  const [path, setPath] = React.useState(0);

  return (
    <div className="h-screen flex flex-col">
      <BrowserRouter>
        <Switch>
          {isLogin ? (
            <>
              <div className="w-screen h-12 flex justify-end items-center px-12 border-b border-gray-300 bg-white">
                <Link
                  to="/friends"
                  className={`text-gray-700 mr-4 ${
                    path === 0 && "text-blue-500"
                  }`}
                >
                  친구들
                </Link>
                <Link
                  to="/update"
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
              <Route path="/friends">
                <FriendListPage setPath={() => setPath(0)} />
              </Route>
              <Route path="/update">
                <AccountPage alter={true} setPath={() => setPath(1)} />
              </Route>
              <Route path="*">
                <Redirect to="/friends" />
              </Route>
            </>
          ) : (
            <>
              <Route path="/login">
                <LoginPage setLogin={setLogin} />
              </Route>
              <Route path="/join">
                <AccountPage />
              </Route>
              <Route path="*">
                <Redirect to="/login" />
              </Route>
            </>
          )}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
