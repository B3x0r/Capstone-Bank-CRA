import React from 'react';
import { UserContext } from './context';

function NavBar() {
  const [navTab, setTab] = React.useState("home");
  const { isLoggedin, user } = React.useContext(UserContext);

  React.useEffect(() => {
    if (window.location.hash.indexOf("Login") > -1) {
      setTab("login/")
    } else if(window.location.hash.indexOf("Create") > -1) {
      setTab("createAccount/")
    } else if(window.location.hash.indexOf("Home") > -1) {
        setTab("#")
    } else if(window.location.hash.indexOf("deposit") > -1) {
      setTab("deposit/")
    } else if(window.location.hash.indexOf("withdraw") > -1) {
      setTab("withdraw/")
    } else if(window.location.hash.indexOf("alldata") > -1) {
      setTab("alldata/")
    } else if(window.location.hash.indexOf("Logout") > -1) {
      setTab("Logout/")
    }
  })
  

  function activePage(page) {
    if (navTab === page) {
      return "active";
    } else {
      return "";
    }
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light info" style={{padding: "20px"}}>
        <a
          className={"navbar-brand " + activePage("home")}
          data-toggle="tooltip"
          data-placement="bottom"
          title="Home Page"
          href="#"
          onClick={() => setTab("home")}
        >
          Capstone Bank
        </a>
        <button
          className="navbar-toggler"
          onClick={() => setTab("home")}
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {!isLoggedin ?
            <>
          <li className="nav-item ">
              <a
                className={"nav-link " + activePage("Login/")}
                onClick={() => setTab("Login/")}
                data-toggle="tooltip"
                data-placement="bottom"
                title="Log in here"
                href="#/Login/"
              >
                Login<span className="tooltiptext"></span>
              </a>
            </li>
            <li className="nav-item ">
              <a
                className={"nav-link " + activePage("CreateAccount/")}
                onClick={() => setTab("CreateAccount/")}
                data-toggle="tooltip"
                data-placement="bottom"
                title="Create account here"
                href="#/CreateAccount/"
              >
                Create Account<span className="tooltiptext"></span>
              </a>
            </li>
            </>
            :
            <>
            <li className="nav-item">
              <a
                className={"nav-link " + activePage("deposit/")}
                onClick={() => setTab("deposit/")}
                data-toggle="tooltip"
                data-placement="bottom"
                title="Make Deposit Here"
                href="#/deposit/"
              >
                Deposit<span className="tooltiptext"></span>
              </a>
            </li>
            <li className="nav-item">
              <a
                className={"nav-link " + activePage("withdraw/")}
                onClick={() => setTab("withdraw/")}
                data-toggle="tooltip"
                data-placement="bottom"
                title="Make Withdraw Here"
                href="#/withdraw/"
              >
                Withdraw<span className="tooltiptext"></span>
              </a>
            </li>
            <li className="nav-item">
              <a
                className={"nav-link " + activePage("alldata/")}
                onClick={() => setTab("alldata/")}
                data-toggle="tooltip"
                data-placement="bottom"
                title="All Stored Information"
                href="#/alldata/"
              >
                AllData<span className="tooltiptext"></span>
              </a>
            </li>            
          <li className="nav-item ">
              <a
                className={"nav-link " + activePage("Logout/")}
                onClick={() => setTab("Logout/")}
                data-toggle="tooltip"
                data-placement="bottom"
                title="Log Out here"
                href="#/Logout/"
              >
                Log Out<span className="tooltiptext"></span>
              </a>
            </li>
            </>
            }
          </ul>
        </div>
            {isLoggedin ?
              <>
                <span className="navbar-text">
                  Welcome {user.name}!
                </span>
              </>
              :
              <>
                <span className="navbar-text">
                  Welcome Visitor!
                </span>
              </>
            }
      </nav>
    </>
  );
}

export default NavBar;
