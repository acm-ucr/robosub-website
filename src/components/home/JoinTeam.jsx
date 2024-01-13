import React from "react";
import Button from "../Button";

const JoinTeam = ({ icon, title, text }) => {
  return (
    <div className=" flex bg-robosub-black w-[30%] items-start">
      <div className="bg-black-500 font-sans text-8xl aspect-square w-96 rounded-full flex justify-center items-center bg-gradient-to-tr from-robosub-black to-robosub-dark-gray">
        {icon}
      </div>

      <div
        className=" flex flex-col items-center text-1xl font-sans"
        style={{ paddingTop: "20px" }}
      >
        <p
          style={{
            fontWeight: "600",
            fontSize: "23px",
            marginBottom: "10px",
            marginLeft: "-10px",
          }}
        >
          {title}
        </p>

        <p
          style={{
            fontWeight: "145",
            fontSize: "15px",
            marginLeft: "20px",
            marginTop: "8px",
          }}
        >
          {text}
        </p>
        <div
          style={{
            marginLeft: "auto",
            width: "100%",
            display: "flex",
            justifyContent: "flex-end",
            marginBottom: "30px",
            marginTop: "0px",
          }}
        >
          <Button link="/join" text="TEAM" />
        </div>
      </div>
    </div>
  );
};

export default JoinTeam;
