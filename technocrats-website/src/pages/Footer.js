import React, { useState } from "react";
import { InputTextarea } from "primereact/inputtextarea";
import { InputText } from 'primereact/inputtext';
import LogoWhite from "../assets/images/technocrats-logos/technocrats-logos_stroke.png"

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
  }

  const SubmitButtonClick = () => {
    console.log(value)
  }

  return (
    <div className="mt-24 pt-12 pb-8">
      <div className="container mb-12 text-center sm:text-left grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-5">
        <div className="mx-auto sm:ml-0">
          <img
            className="cursor-pointer"
            src={LogoWhite}
            alt="logo"
          />

          <div className="mt-4 flex justify-around">
            <img className="icon-button" src="./images/insta-icon.svg" alt="" />
            <img className="icon-button" src="./images/fb-icon.svg" alt="" />
            <img
              className="icon-button"
              src="./images/twitter-icon.svg"
              alt=""
            />
          </div>
        </div>

        <div>
          <h6 className="font-medium text-xl mb-4">Resources</h6>
          <Link text="About Us"/>
          <Link text="Blog"/>
          <Link text="Contact"/>
          <Link text="FAQ"/>
        </div>

        <div className="mb-2 " style={{ width: "600px" }}>
          <h6 className="font-medium text-xl mb-4 ml-1">Contact Us</h6>
          <div className="flex justify-content-between align-content-center flex-wrap">

            <InputText value={value.sendersName} name="sendersName" type="name" placeholder="Sender's Name" onChange={handleChange} className="mb-2 w-full p-2 bg-transparent outline-none border border-[#BCD0E5] rounded-md text-left " />

            <InputText value={value.email} name="email" type="email" placeholder="Sender's Email" onChange={handleChange} className="mb-2 w-full p-2 bg-transparent outline-none border border-[#BCD0E5] rounded-md text-left" />


            <InputTextarea value={value.textArea} name="textArea" onChange={handleChange} rows={3} cols={30} placeholder="message" className="mb-2 w-full p-2 bg-transparent outline-none border border-[#BCD0E5] rounded-md text-left card flex justify-content-center" />


            <InputText value={value.tel} name="tel" className="mb-2 w-full p-2 bg-transparent outline-none border border-[#BCD0E5] rounded-md text-left" type="tel" pattern="[0-9]{10}" placeholder="Enter your phone Number" maxLength={13} onChange={handleChange}
            />

            <button className="primary-button mt-6" onClick={SubmitButtonClick}>Submit</button>

          </div>

        </div>

      </div>

      <p className="text-center mt-12">
        Made With Love By Product All Right Reserved
      </p>
    </div>
  );
}

export default Footer;

export function Link({text}) {
  return <p className="cursor-pointer mt-2">{text}</p>;
}
