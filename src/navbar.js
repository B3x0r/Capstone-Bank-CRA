import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";

function NavBar() {
  const [navTab, setTab] = React.useState("home");

  React.useEffect(() => {
    if (window.location.hash.indexOf("Create") > -1) {
      setTab("CreateAccount/")
    } else if(window.location.hash.indexOf("deposit") > -1) {
      setTab("deposit/")
    } else if(window.location.hash.indexOf("withdraw") > -1) {
      setTab("withdraw/")
    } else if(window.location.hash.indexOf("alldata") > -1) {
      setTab("alldata/")
    }
  }, [])
  

  function activePage(page) {
    if (navTab === page) {
      return "active";
    } else {
      return "";
    }
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light info">
        <Link
          className={"navbar-brand " + activePage("home")}
          data-toggle="tooltip"
          data-placement="bottom"
          title="Home Page"
          to="/"
          onClick={() => setTab("home")}
        >
          Capstone Bank
        </Link>
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
            <li className="nav-item ">
              <Link
                className={"nav-link " + activePage("CreateAccount/")}
                onClick={() => setTab("CreateAccount/")}
                data-toggle="tooltip"
                data-placement="bottom"
                title="Enter your info here"
                to="/CreateAccount/"
              >
                Create Account<span className="tooltiptext"></span>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={"nav-link " + activePage("deposit/")}
                onClick={() => setTab("deposit/")}
                data-toggle="tooltip"
                data-placement="bottom"
                title="Make Deposit Here"
                to="/deposit/"
              >
                Deposit<span className="tooltiptext"></span>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={"nav-link " + activePage("withdraw/")}
                onClick={() => setTab("withdraw/")}
                data-toggle="tooltip"
                data-placement="bottom"
                title="Make Withdraw Here"
                to="/withdraw/"
              >
                Withdraw<span className="tooltiptext"></span>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={"nav-link " + activePage("alldata/")}
                onClick={() => setTab("alldata/")}
                data-toggle="tooltip"
                data-placement="bottom"
                title="All Stored Information"
                to="/alldata/"
              >
                AllData<span className="tooltiptext"></span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
