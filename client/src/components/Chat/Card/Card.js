import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";

//Returns Card with styling

var a = 0;
var doctorType = [
  "GENERAL PHYSICIAN",
  "GENERAL PHYSICIAN",
  "DERMATOLOGY ",
  "PEDIATRICIANS",
  "BARIATRICS ",
  "SURGICAL GASTROENTEROLOGY",
  "CARDIOLOGY",
  "DIABETOLOGY ",
];
var education = [
  "MBBS,MD(Gen Med)",
  "MD (Pulmonary Medicine), IDCCM",
  "MBBS,MD(Dermatology)",
  "MBBS, MD ( Pediatrics )",
  "MBBS, MS, MMAS, FICS (Gastro)",
  "MS, DNB, FRCS",
  "MBBS, MD, DM (Cardio)",
  "MBBS,PG (Diabetology)",
];
function Card(props) {
  return (
    <div className="card" key={props.id}>
      <p>{}</p>
      <div className="card__body">
        <h2 className="card__title">{props.name}</h2>
        <h6 style={{ color: "#4D5280" }}>
          {doctorType[props.id[0].charCodeAt(a) % 8]}
        </h6>
        <p style={{ fontSize: "13px" }}>
          {education[props.id[0].charCodeAt(a) % 8]}
        </p>
      </div>
      <Link to={`/teams/${props.id}`}>
        <button className="card__btn">Consult Doctor</button>
      </Link>
    </div>
  );
}

export default Card;
