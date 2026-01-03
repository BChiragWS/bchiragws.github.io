import React, { useRef, useState } from 'react';
import '../assets/styles/Contact.scss';
// import emailjs from '@emailjs/browser';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';

function Contact() {

  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const [nameError, setNameError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [messageError, setMessageError] = useState<boolean>(false);

  const form = useRef();

  const sendEmail = (e: any) => {
    e.preventDefault();

    setNameError(name === '');
    setEmailError(email === '');
    setMessageError(message === '');

    /* Uncomment below if you want to enable the emailJS */

    // if (name !== '' && email !== '' && message !== '') {
    //   var templateParams = {
    //     name: name,
    //     email: email,
    //     message: message
    //   };

    //   console.log(templateParams);
    //   emailjs.send('service_id', 'template_id', templateParams, 'api_key').then(
    //     (response) => {
    //       console.log('SUCCESS!', response.status, response.text);
    //     },
    //     (error) => {
    //       console.log('FAILED...', error);
    //     },
    //   );
    //   setName('');
    //   setEmail('');
    //   setMessage('');
    // }
  };

 return (
  <div id="contact">
    <div className="items-container">
      <div className="contact_wrapper">
        <h1>Contact</h1>

        <p>
          Interested in robotics, embedded systems, or system design roles.
          Open to research positions and engineering opportunities.
        </p>

        <p>
          <strong>Email:</strong>{" "}
          <a href="mailto:bchirag886@gmail.com">
            bchirag886@gmail.com
          </a>
        </p>

        <p>
          <strong>Location:</strong> Stuttgart, Germany
        </p>

        <p>
          <strong>LinkedIn:</strong>{" "}
          <a
            href="https://www.linkedin.com/in/chirag-bhardwaj-aa68b41b3/"
            target="_blank"
            rel="noreferrer"
          >
            chirag-bhardwaj
          </a>
        </p>

        <p>
          <strong>GitHub:</strong>{" "}
          <a
            href="https://github.com/BChiragWS"
            target="_blank"
            rel="noreferrer"
          >
            github.com/BChiragWS
          </a>
        </p>
      </div>
    </div>
  </div>
);
}

export default Contact;