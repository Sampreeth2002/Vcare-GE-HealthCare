# VCare

## About Project

## PROBLEM STATEMENT
The Problem we are trying to solve is remote consultation of health issues and instant consultation with a doctor in the case of emergency.
Currently, if multiple people visit the hospital at the same time there is a higher chance that many would get Covid if one of them visits the hospital for a covid test and there exists no filtering system for this.<BR>
Patients need to visit the hospital for minor health problems that can be avoided with a simple online appointment with a doctor. 
In the case of an emergency situation, patients must wait till the ambulance arrives to the place and missing crucial minutes of care.
Also after pandemic, many hospitals must start working in a hybrid model i.e. both offline and online consultations.
As we all know, doctors work long hours and without rest, so when hospitals adopt a hybrid model, they will be able to take a break from their rigorous schedule.

## SOLUTION
The theme we are choosing for the challenge is “Points of care”. 
We're developing software for an online health-care management system for check-ups and scheduling appointments, with features to help doctors and patients work more efficiently together.<BR>
We will create video-conference software that can notify doctors about upcoming visits and build a proper workflow from one patient to the next with little to no intervention and patient can consult doctors online easily.
Current solutions for video conferencing for an appointment for a patient include using external software’s such as whatsapp or zoom meetings which are not properly organised.
This model can not implemented for large scale hospitals.
The existing software doesn’t have immediate consultation in case of emergency.
<BR>


## Tech Stack

The application uses

[JWT Token](https://jwt.io/), [MongoDB](https://www.mongodb.com/cloud/atlas) in server side for authentication.

[Bycrypt.js](https://www.npmjs.com/package/bcrypt) to hash password before saving in database.

[Twilio API](https://www.twilio.com) for Video Calling Room feature.

[Firebase](https://firebase.google.com) for real time data base for Chat feature.

## Getting Started

Change Directory into the Server and Client Folder and run _npm install_ to install all the npm dependencies

```bash

npm install
cd client && npm install

```

## Server Terminal

In the server terminal run _npm run start_ to start the server on PORT 3001

```bash

npm run start

```

Open [http://localhost:3001](http://localhost:3001) with your browser to see the result.

## Client Terminal

In the client terminal run _npm run build_ to build the project and compile into the _.next_ folder. Then run _npm run start_ to start the production mode server on PORT 3000

```bash

npm run start

```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
