import React, { useState } from "react";
import { InputTextarea } from "primereact/inputtextarea";
import { InputText } from 'primereact/inputtext';
import LogoWhite from "../assets/images/technocrats-logos/technocrats-logos_stroke.png";
import { GitHub, LinkedIn, Facebook } from "../components/Icons";
import { handleClickScroll, navItems } from "../components/CommonFuns";
import axios from "axios"

function Footer() {

  const [value, setValue] = useState({
    sendersName: '',
    email: '',
    textArea: '',
    tel: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValue(prevValue => ({
      ...prevValue,
      [name]: value,
    }))
  };

  const SubmitButtonClick = () => {
    //  Validate the form
    let isFalse = false;

    if (value.sendersName.length === 0 || value.email.length === 0 || value.textArea.length === 0) {
      console.log('Please fill out this field ');
      isFalse = true;
    }

    if (!value.email.includes('@')) {
      console.log('Invalid email format');
      isFalse = true;
    }

    if (!isFalse) {
      // console.log(value)
      axios.post('https://formspree.io/f/xrgngrrw', value)
        .then(res => {
          console.log(res.data)
          if (res.data.ok) {
            console.log("Message has been sent successfully");
            // TODO: display a modal showing message has been sent successfully. 
          }
        })
        .catch(error => {
          console.error('Error:', error);
        });
    }
    else {
      console.log("Failed! The form is not completely filled.")
    }
  };

  return (
    <section className="mt-24 pt-12 pb-8" id="footer">
      <div className="container mb-12 text-center sm:text-left lg:flex justify-between">
        <div className="mx-auto sm:ml-0 lg:w-1/3 lg:mr-8 mb-8">
          <div onClick={() => handleClickScroll("home", 150)}>
            <img
              className="cursor-pointer"
              src={LogoWhite}
              alt="logo"
            />
          </div>
          <div className="mt-4 flex justify-around">
            <div className="icon-button">
              <GitHub />
            </div>
            <div className="icon-button">
              <LinkedIn />
            </div>
            <div className="icon-button">
              <Facebook />
            </div>
          </div>
        </div>

        <div className="lg:w-1/3 mb-12">
          <h6 className="font-medium text-xl mb-4">Resources</h6>
          {navItems.map(navItem => (
            <div onClick={() => handleClickScroll(navItem.nav, 150)} className="cursor-pointer mt-2">{navItem.label}</div>
          ))}
        </div>

        <div className="mb-2" >
          <h6 className="font-medium text-xl mb-4 ml-1">Contact Us</h6>
          <div className="flex justify-content-between align-content-center flex-wrap items-center">
            <InputText
              value={value.sendersName} name="sendersName" type="name" placeholder="Sender's Name"
              onChange={handleChange} className="mb-2 w-full p-2 bg-transparent outline-none border border-[#BCD0E5] rounded-md text-left "
            />
            <InputText
              value={value.email} name="email" type="email" placeholder="Sender's Email"
              onChange={handleChange} className="mb-2 w-full p-2 bg-transparent outline-none border border-[#BCD0E5] rounded-md text-left"
            />
            <InputTextarea
              value={value.textArea} name="textArea" onChange={handleChange} rows={3} cols={30} placeholder="message"
              className="mb-2 w-full p-2 bg-transparent outline-none border border-[#BCD0E5] rounded-md text-left card flex justify-content-center"
            />
            {/*Wondering why we're taking phone number */}
            {/* <InputText
              value={value.tel} name="tel" maxLength={13} onChange={handleChange}
              className="mb-2 w-full p-2 bg-transparent outline-none border border-[#BCD0E5] rounded-md text-left"
              type="tel" pattern="[0-9]{10}" placeholder="Enter your phone Number" 
            /> */}

            <button className="primary-button mt-6" onClick={SubmitButtonClick}>Submit</button>

          </div>

        </div>

      </div>

      <p className="text-center mt-12">
        Technocrats: All Rights Reserved
      </p>
    </section>
  );
}

export default Footer;

export function Link({ text }) {
  return <p className="cursor-pointer mt-2">{text}</p>;
}