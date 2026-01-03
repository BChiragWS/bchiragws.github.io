import React from "react";
import '../assets/styles/Education.scss';

function Education() {
  return (
    <div id="education">
      <div className="items-container">
        <h1>Education</h1>

        <div className="education-item">
          <h3>Master of Science in Electrical Engineering (Smart Systems)</h3>
          <h4>University of Stuttgart · Stuttgart, Germany</h4>
          <p className="education-duration">Apr 2023 – Present</p>
          <p>
            Focus on robotics, embedded systems, and intelligent sensors.
            Coursework includes Hardware Platforms and Programming of Embedded Systems,
            Software Engineering for Real-Time Systems, Risk Assessment for Robotic
            Systems, and Intelligent Sensors and Actuators.
          </p>
        </div>

        <div className="education-item">
          <h3>Bachelor of Science in Electronics</h3>
          <h4>University of Delhi · Delhi, India</h4>
          <p className="education-duration">Jul 2019 – Jul 2022</p>
          <p>
            Studied fundamentals of electronics, microcontrollers, control theory,
            communication systems, and C/C++ programming.
          </p>
        </div>

      </div>
    </div>
  );
}

export default Education;
