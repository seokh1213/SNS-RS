import React from "react";
import { BrowserRouter, Route, Switch, Redirect, Link } from "react-router-dom";
import AccountPage from "./page/account/AccountPage";
import LoginPage from "./page/account/LoginPage";
import FriendListPage from "./page/friend/FriendListPage";

function App() {
  const [isLogin, setLogin] = React.useState(
    Boolean(localStorage.getItem("token"))
  );

  return (
    <BrowserRouter>
      <Switch>
        <div className="flex items-center justify-center h-screen bg-gray-100">
          {isLogin ? (
            <>
              <div>
                <Link to="/friends">친구들</Link>
                <Link to="/update">정보 수정</Link>
                <span
                  onClick={() => {
                    localStorage.removeItem("token");
                    setLogin(false);
                  }}
                >
                  로그아웃
                </span>
              </div>
              <Route path="/friends">
                <FriendListPage />
              </Route>
              <Route path="/update">
                <AccountPage alter={true} />
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
        </div>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
