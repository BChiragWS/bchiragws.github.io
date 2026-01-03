import React from "react";
import '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss';

function Timeline() {
  return (
    <div id="experience">
      <div className="items-container">
        <h1>Experience</h1>

        <VerticalTimeline>

          {/* University of Stuttgart – Student Research Assistant */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Aug 2025 – Dec 2025"
            iconStyle={{ background: '#5000ca', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Student Research Assistant
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              University of Stuttgart · Stuttgart, Germany
            </h4>
            <p>
              Worked on real-time magnetic control systems using C++ with TLE493D sensors
              and H-bridge drivers. Designed parametric CAD fixtures, analyzed system
              response data, and improved control linearity through software compensation
              and PID tuning.
            </p>
          </VerticalTimelineElement>

          {/* Fraunhofer IPA */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Jul 2023 – Sep 2025"
            iconStyle={{ background: '#5000ca', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Scientific Research Assistant
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Fraunhofer IPA · Stuttgart, Germany
            </h4>
            <p>
              Analyzed energy consumption of KUKA robotic cells and identified usage
              patterns to improve performance. Deployed machine learning models for
              robotic arm energy prediction and conducted fuel cell simulations using
              MATLAB/Simulink. Worked with ROS for robot control and real-time
              communication.
            </p>
          </VerticalTimelineElement>

          {/* University of Stuttgart – Autonomous Driving */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Nov 2024 – Apr 2025"
            iconStyle={{ background: '#5000ca', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Student Research Assistant
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              University of Stuttgart · Stuttgart, Germany
            </h4>
            <p>
              Developed and tested autonomous driving agents in the CARLA simulator.
              Fine-tuned perception and planning modules and validated agent behavior
              using Scenario Runner under diverse traffic and weather conditions.
            </p>
          </VerticalTimelineElement>

          {/* ZF */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Sep 2023 – Sep 2024"
            iconStyle={{ background: '#5000ca', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Working Student – Algorithm Development
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              ZF Friedrichshafen AG · Alfdorf, Germany
            </h4>
            <p>
              Performed ECU testing and CAN bus simulations using Vector CANoe.
              Conducted validation for heating, peripherals, and regenerative braking
              systems. Supported CI/CD pipelines using Jenkins for automated builds,
              testing, and deployment.
            </p>
          </VerticalTimelineElement>

        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
