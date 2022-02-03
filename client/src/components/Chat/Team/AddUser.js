import React, { useState } from "react";
import { db } from "../../../Services/firebase";
import { Input } from "@material-ui/core";
import { Button } from "@material-ui/core";

//Adduser into the roomId in firebase
function AddUser({ roomId, roomname }) {
  const [newUser, setNewUser] = useState("");

  async function sendMessage(e) {
    e.preventDefault();

    // if(new)
    await db.collection("rooms").doc(roomId).collection("users").add({
      username: newUser,
      admin: false,
    });

    await db.collection("userRooms").add({
      roomId: roomId,
      roomname: roomname,
      username: newUser,
    });

    setNewUser("");
  }

  return (
    <div style={{ paddingLeft: "4vw", paddingTop: "3vh" }}>
      <form onSubmit={sendMessage}>
        <Input value={newUser} onChange={(e) => setNewUser(e.target.value)} />
        <br />
        <Button
          style={{ marginTop: "2vh", backgroundColor: "#878ECD" }}
          variant="contained"
          color="primary"
          type="submit"
        >
          Add Patient
        </Button>
      </form>
    </div>
  );
}

export default AddUser;
