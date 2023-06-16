/// Menu
import MetisMenu from "metismenujs";
import React, { Component } from "react";
/// Scroll
import PerfectScrollbar from "react-perfect-scrollbar";
/// Link
import { Link } from "react-router-dom";

class MM extends Component {
  componentDidMount() {
    this.$el = this.el;
    this.mm = new MetisMenu(this.$el);
  }
  componentWillUnmount() {
  }
    render() {
        return (
            <div className="mm-wrapper">
                <ul className="metismenu" ref={(el) => (this.el = el)}>
                    {this.props.children}
                </ul>
            </div>
        );
    }
}

class SideBar extends Component {
  /// Open menu
  componentDidMount() {
    // sidebar open/close
    var btn = document.querySelector(".nav-control");
    var aaa = document.querySelector("#main-wrapper");
    function toggleFunc() {
      return aaa.classList.toggle("menu-toggle");
    }
    btn.addEventListener("click", toggleFunc);
  }
  state = {
    loveEmoji: false,
  };
  render() {
    /// Path
    let path = window.location.pathname;
    path = path.split("/");
    path = path[path.length - 1];
    
    /// Active menu
    let dashBoard = [
       "",
        "search-job",
		"appication",
		"profile",
		"companies",
		"statistics",
      ],
      app = [
        "app-profile",
        "app-calender",
        "email-compose",
        "email-inbox",
        "email-read",
        "ecom-product-grid",
        "ecom-product-list",
        "ecom-product-list",
        "ecom-product-order",
        "ecom-checkout",
        "ecom-invoice",
        "ecom-customers",
        "post-details",
        "ecom-product-detail",
      ],
      charts = [
        "chart-rechart",
        "chart-flot",
        "chart-chartjs",
        "chart-chartist",
        "chart-sparkline",
        "chart-apexchart",
      ]

    return (
      <div className="deznav">
        <PerfectScrollbar className="deznav-scroll">
          <MM className="metismenu" id="menu">
            <li className={`${dashBoard.includes(path) ? "mm-active" : ""}`}>
              <Link className="has-arrow ai-icon" to="#" >
                <i className="flaticon-381-networking"></i>
                <span className="nav-text">Dashboard</span>
              </Link>
				<ul >
					<li>
						<Link className={`${path === "" ? "mm-active" : ""}`} to="/" onClick={() => this.props.onClick3()}>Dashboard</Link>
					</li>
					<li>
						<Link className={`${path === "search-job" ? "mm-active" : ""}`} onClick={() => this.props.onClick()} to="/search-job">Search Job</Link>
					</li>
					<li>
						<Link className={`${path === "application" ? "mm-active" : ""}`} onClick={() => this.props.onClick()} to="/application">Application</Link>
					</li>					
					<li>
						<Link className={`${path === "profile" ? "mm-active" : ""}`} onClick={() => this.props.onClick()} to="/profile">Profile</Link>
						
					</li>
					<li>	
						<Link className={`${path === "companies" ? "mm-active" : ""}`} onClick={() => this.props.onClick()} to="/companies">Companies</Link>
					</li>
					<li>
						<Link className={`${path === "statistics" ? "mm-active" : ""}`} onClick={() => this.props.onClick()} to="/statistics">Statistics</Link>
					</li>
					<li>
						<Link className={`${path === "task" ? "mm-active" : ""}`} onClick={() => this.props.onClick()} to="/task">Task</Link>
					</li>						
				</ul>
            </li>
            <li className={`${app.includes(path) ? "mm-active" : ""}`}>
              <Link className="has-arrow ai-icon" to="#" >
                <i className="flaticon-381-television"></i>
                <span className="nav-text">Trunks</span>
              </Link>
              <ul >
                <li>
					<Link className={`${path === "trunks" ? "mm-active" : ""}`} onClick={() => this.props.onClick()} to="/trunks">List</Link>
                </li>
				<li>
					<Link className={`${path === "trunks/create" ? "mm-active" : ""}`} onClick={() => this.props.onClick()} to="/trunks/create">Create New</Link>
           </li>
              </ul>
            </li>
            <li className={`${charts.includes(path) ? "mm-active" : ""}`}>
              <Link className="has-arrow ai-icon" 
              onClick={() => this.props.onClick()}
                    to="/settings">
                <i className="flaticon-381-controls-3"></i>
                <span className="nav-text">Settings</span>
              </Link>
            </li>
          </MM>
			<div className="copyright">
				<p>
				  <strong>Trunkz Dashboard</strong> <br/>© 2021 All
				  Rights Reserved
				</p>
				<p>
				  Made with{" "}
				  <span
					className={`${
					  this.state.loveEmoji ? "heart heart-blast" : "heart"
					}`}
					onClick={() =>
					  this.setState({ loveEmoji: !this.state.loveEmoji })
					}
				  ></span>{" "}
				  by DexignZone
				</p>
			  </div>
			</PerfectScrollbar>
      </div>
    );
  }
}

export default SideBar;
