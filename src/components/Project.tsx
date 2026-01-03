import React from "react";
import mock from '../assets/images/mock.jpg';
import maglev_system_illustration from '../assets/images/maglev_system_illustration.jpg';
import kuka from '../assets/images/kuka.png';
import arm from '../assets/images/arm.png';
import '../assets/styles/Project.scss';

function Project() {
  return (
    <div className="projects-container" id="projects">
      <h1>Projects</h1>

      <div className="projects-grid">

        {/* Thesis Project */}
        <div className="project">
          <div className="project-image-wrapper">
            <img src={arm} alt="Reaction-free robot setup" />
          </div>

          <h2>Master’s Thesis – Reaction-Free Robot with Haptic Feedback</h2>
          <p>
            Designed a real-time reaction-free robotic system for capsule endoscopic
            examination. Developed a ROS–Gazebo digital twin integrated with STM32
            hardware for real-time torque feedback, dynamic motion control, and haptic
            interaction.
          </p>
        </div>

        {/* Magnetic Levitation */}
        <div className="project">
          <div className="project-images">
            <div className="project-image-wrapper">
              <img src={mock} alt="Magnetic levitation setup" />
            </div>
            <div className="project-image-wrapper">
              <img src={maglev_system_illustration} alt="Magnetic control response" />
            </div>
          </div>

          <h2>Magnetic Levitation Control System</h2>
          <p>
            Developed and validated a real-time magnetic control framework using C++,
            integrating TLE493D magnetic sensors with H-bridge drivers. Characterized
            hardware dead zones and implemented software compensation to improve control
            linearity and tracking stability through PID tuning.
          </p>
        </div>

        {/* Energy Analysis */}
        <div className="project">
          <div className="project-image-wrapper">
            <img src={kuka} alt="KUKA robotic cell energy analysis" />
          </div>

          <h2>Energy Analysis of Robotic Systems – Fraunhofer IPA</h2>
          <p>
            Analyzed energy consumption patterns of KUKA robotic cells and deployed
            machine learning models to predict robotic arm energy usage. Conducted fuel
            cell simulations and energy analysis using MATLAB/Simulink.
          </p>
        </div>

      </div>
    </div>
  );
}

export default Project;
