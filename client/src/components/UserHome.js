import React, { useContext, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import "./UserHome.css";
const Home = () => {
  const authContext = useContext(AuthContext);
  const [user, setUser] = useState(authContext.user);
  const [code, setCode] = useState("");
  return (
    <div className="userhome_container">
      <div className="userhome">
        {/* Gets username of the user */}
        <h1 style={{ color: "#b9bbdf" }}>Welcome back {user.username}</h1>
        <h1 style={{ marginTop: "15px", color: "#00485C" }}>
          Our Medical Experts are on online to help you out!
        </h1>

        <div className="your_teams">
          <Link to={`/teams`} style={{ textDecoration: "none" }}>
            <Button
              variant="contained"
              style={{
                padding: "1vw",
                backgroundColor: "#b9bbdf",
                marginRight: "25px",
              }}
            >
              General Consultation
              <i class="fas fa-users" style={{ marginLeft: "5px" }}></i>
            </Button>
          </Link>
          <Link
            to="/videoChat/join/a80ac80a-224a-4729-8b37-582400049b76"
            style={{ textDecoration: "none" }}
          >
            <Button
              variant="contained"
              className="instant_meeting"
              style={{ padding: "1vw", backgroundColor: "#b9bbdf" }}
            >
              Immediate Consultation{" "}
              <i class="fas fa-video" style={{ marginLeft: "5px" }}></i>
            </Button>
          </Link>
        </div>

        <div className="join_meeting">
          {/* <TextField
            id="outlined-search"
            label="Meeting Code"
            type="Meeting Code"
            variant="outlined"
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />

          <Link
            to={`/VideoChat/join/${code}`}
            style={{ textDecoration: "none" }}
          >
            Join
          </Link> */}
        </div>
      </div>
    </div>
  );
};

export default Home;
