import React, { useState, useEffect } from "react";
import Video from "twilio-video";
import Participant from "../Participant/Participant";
import "./Room.css";
import { Button } from "@material-ui/core";
import CustomizedDialogs from "./dialog";
import Chat from "../VideoCallChat/VideoCallChat";
import Notes from "../VideoCallNotes/VideoCallNotes";
import { db } from "../../../Services/firebase";
import { CopyToClipboard } from "react-copy-to-clipboard";

const Room = ({ roomName, token, handleLogout }) => {
  const [room, setRoom] = useState(null);
  const [participants, setParticipants] = useState([]);
  const [toggleAudio, setToggleAudio] = useState(true);
  const [toggleVideo, setToggleVideo] = useState(true);
  const [roomNa, setroomNa] = useState("Immediate Consultation");

  useEffect(() => {
    const participantConnected = (participant) => {
      setParticipants((prevParticipants) => [...prevParticipants, participant]);
    };
    db.collection("rooms")
      .doc(roomName)
      .onSnapshot((snapshot) => {
        setroomNa(snapshot.data()?.name);
      });

    const participantDisconnected = (participant) => {
      setParticipants((prevParticipants) =>
        prevParticipants.filter((p) => p !== participant)
      );
    };

    Video.connect(token, {
      name: roomName,
    }).then((room) => {
      setRoom(room);
      room.on("participantConnected", participantConnected);
      room.on("participantDisconnected", participantDisconnected);
      room.participants.forEach(participantConnected);
    });

    return () => {
      setRoom((currentRoom) => {
        if (currentRoom && currentRoom.localParticipant.state === "connected") {
          currentRoom.localParticipant.tracks.forEach(function (
            trackPublication
          ) {
            trackPublication.track.stop();
          });
          currentRoom.disconnect();
          return null;
        } else {
          return currentRoom;
        }
      });
    };
  }, [roomName, token]);

  const handleCallDisconnect = () => {
    room.disconnect();
  };

  const handleAudioToggle = () => {
    room.localParticipant.audioTracks.forEach((track) => {
      if (track.track.isEnabled) {
        track.track.disable();
      } else {
        track.track.enable();
      }
      setToggleAudio(track.track.isEnabled);
    });
  };

  const handleVideoToggle = () => {
    room.localParticipant.videoTracks.forEach((track) => {
      // console.log(track);
      if (track.track.isEnabled) {
        track.track.disable();
      } else {
        track.track.enable();
      }
      setToggleVideo(track.track.isEnabled);
    });
  };

  const remoteParticipants = participants.map((participant) => (
    <Participant
      key={participant.sid}
      participant={participant}
      isLocal={false}
    />
  ));

  return (
    <div className="room">
      <CustomizedDialogs title="Chat Room">
        <Chat roomId={roomName} />
      </CustomizedDialogs>

      <div className="btn_btn">
        <Button variant="contained" color="primary" onClick={handleLogout}>
          END
        </Button>
        {roomNa !== undefined ? <Notes roomId={roomName} /> : ""}
      </div>
      <div className="allParticiapants">
        <div className="local-participant">
          {room ? (
            <Participant
              key={room.localParticipant.sid}
              participant={room.localParticipant}
              handleAudioToggle={handleAudioToggle}
              handleVideoToggle={handleVideoToggle}
              handleCallDisconnect={handleCallDisconnect}
              toggleAudio={toggleAudio}
              toggleVideo={toggleVideo}
              isLocal={true}
            />
          ) : (
            ""
          )}
        </div>
        <div className="remote-participants">{remoteParticipants}</div>
      </div>
    </div>
  );
};

export default Room;
