import React from "react";
import img1 from "../../Images/4457.jpg";
import "./Home.css";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

//Returns Home Component along with login and signup buttons
const Home = () => {
  return (
    <div style={{ paddingTop: "20vh" }}>
      <div className="home_container">
        <div className="home_text">
          <span className="vcare">VCare</span>
          <p>One stop solution for online doctor consultation</p>
          <div className="home_buttons">
            <div className="home_login">
              <Link to="/login" style={{ textDecoration: "none" }}>
                <Button
                  variant="outlined"
                  size="large"
                  color="primary"
                  style={{ padding: "2vh 4vw" }}
                >
                  Login
                </Button>
              </Link>
            </div>
            <div className="home_register">
              <Link style={{ textDecoration: "none" }} to="/register">
                <Button
                  variant="contained"
                  style={{
                    padding: "2vh 4vw",
                    backgroundColor: "#878ecd",
                    color: "white",
                  }}
                >
                  Sign up
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <div className="home_image">
          <img src={img1} alt="home_image" />
        </div>
      </div>
    </div>
  );
};

export default Home;
