import React from "react";
import ResumeItem from "../ResumeItem";
import * as C from "./styles";

const Resume = () => {
  return (
    <C.Container>
      <ResumeItem>Resume</ResumeItem>
      <ResumeItem>Resume</ResumeItem>
      <ResumeItem>Resume</ResumeItem>
    </C.Container>
  );
};

export default Resume;
