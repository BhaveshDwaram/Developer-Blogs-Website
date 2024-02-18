import React from "react";
import "./Techstack.css";
import { FcGoogle } from "react-icons/fc";
import { FaMeta } from "react-icons/fa6";
import { FaAmazon } from "react-icons/fa";
import { FaMicrosoft } from "react-icons/fa6";
import {
  DiMongodb,
  DiPython,
  DiGit,
} from "react-icons/di";
import {
  SiRedis,
  SiFirebase,
  SiNextdotjs,
} from "react-icons/si";

function Techstack() {
  return (
    <div className="techstack-container">
      <h2 className="techstack-heading">The go-to platform for top developers from leading companies.</h2>
      <div className="techstack-row">
        <div className="techstack-icon"><FaMeta /> </div>
        <div className="techstack-icon"><FcGoogle /></div>
        <div className="techstack-icon"><FaAmazon /></div>
        <div className="techstack-icon"><FaMicrosoft /></div>
        <div className="techstack-icon"><DiMongodb /></div>
        <div className="techstack-icon"><SiNextdotjs /></div>
        <div className="techstack-icon"><DiGit /></div>
        <div className="techstack-icon"><SiFirebase /></div>
        <div className="techstack-icon"><SiRedis /></div>
        <div className="techstack-icon"><DiPython /></div>
      </div>
    </div>
  );
}

export default Techstack;
