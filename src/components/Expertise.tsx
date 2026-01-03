import React from "react";
import '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicrochip, faRobot, faCogs } from '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
  "C / C++",
  "Python",
  "MATLAB / Simulink",
  "ROS (Noetic)",
  "Gazebo",
  "RViz",
  "URDF / Xacro"
];

const labelsSecond = [
  "STM32",
  "Nucleo",
  "Raspberry Pi",
  "PlatformIO",
  "STM32CubeIDE",
  "CAN",
  "SPI",
  "I2C",
  "UART",
  "PWM"
];

const labelsThird = [
  "PID Control",
  "Control System Design",
  "Sensor Integration",
  "Real-Time Systems",
  "CAD (SolidWorks)",
  "Onshape",
  "PCB Design",
  "Schematic Design"
];

function Expertise() {
  return (
    <div className="container" id="skills">
      <div className="skills-container">
        <h1>Skills & Expertise</h1>

        <div className="skills-grid">

          {/* Robotics & Software */}
          <div className="skill">
            <FontAwesomeIcon icon={faRobot} size="3x" />
            <h3>Robotics & Software Systems</h3>
            <p>
              Experience in developing robotic systems using ROS with integrated
              simulation and hardware workflows. Worked on digital twins, autonomous
              systems, and real-time robot control using C++, Python, and MATLAB.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Technologies:</span>
              {labelsFirst.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          {/* Embedded Systems */}
          <div className="skill">
            <FontAwesomeIcon icon={faMicrochip} size="3x" />
            <h3>Embedded Systems & Hardware</h3>
            <p>
              Hands-on experience with embedded platforms including STM32 and Raspberry
              Pi. Developed real-time firmware, integrated sensors and actuators, and
              worked with low-level communication protocols.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Technologies:</span>
              {labelsSecond.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          {/* Control & Design */}
          <div className="skill">
            <FontAwesomeIcon icon={faCogs} size="3x" />
            <h3>Control Systems & Mechanical Design</h3>
            <p>
              Designed and tuned control algorithms for electromechanical systems,
              including PID-based controllers and sensor feedback loops. Experienced in
              CAD-based mechanical design and hardware–software co-design.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Technologies:</span>
              {labelsThird.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Expertise;
