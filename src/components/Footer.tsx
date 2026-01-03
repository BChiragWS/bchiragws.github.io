import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Footer.scss';

function Footer() {
  return (
    <footer>
      <div>
        <a
          href="https://github.com/BChiragWS"
          target="_blank"
          rel="noreferrer"
        >
          <GitHubIcon />
        </a>
        <a
          href="https://www.linkedin.com/in/chirag-bhardwaj-aa68b41b3/"
          target="_blank"
          rel="noreferrer"
        >
          <LinkedInIcon />
        </a>
      </div>

      <p>
        Portfolio built by Chirag Bhardwaj · Based on{" "}
        <a
          href="https://github.com/yujisatojr/react-portfolio-template"
          target="_blank"
          rel="noreferrer"
        >
          React Portfolio Template
        </a>
      </p>
    </footer>
  );
}

export default Footer;
