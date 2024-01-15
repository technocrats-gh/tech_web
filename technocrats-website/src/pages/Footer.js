import React, { useRef } from "react";
import axios from "axios";
import validator from "validator";
import { useFormik } from 'formik';
import { InputTextarea } from "primereact/inputtextarea";
import { InputText } from 'primereact/inputtext';
import { Toast } from 'primereact/toast';
import LogoWhite from "../assets/images/technocrats-logos/technocrats-logos_stroke.png";
import { GitHub, LinkedIn, Facebook } from "../components/Icons";
import { handleClickScroll, navItems } from "../components/CommonFuns";
import "../styles/footer.css"

function Footer() {
  const toast = useRef(null);

  const showToast = (severity, summary, detail) => {
    toast.current.show({ severity, summary, detail, life: 3000 });
  }

  const formik = useFormik({
    initialValues: {
      sendersName: '',
      email: '',
      textArea: '',
    },
    onSubmit: values => {
      axios.post('https://formspree.io/f/xrgngrrw', values)
        .then(res => {
          if (res.data.ok) {
            showToast('success', "Success", "Message has been sent successfully");
          }
        })
        .catch(error => {
          showToast('error', "Error", error)
        });
    },
    validate: values => {
      const errors = {};

      if (!validator.isEmail(values.email)) {
        errors.email = "Invalid email address"
      } else if (!values.email) {
        errors.email = "Required"
      }

      if (!values.sendersName || values.sendersName === "") {
        errors.sendersName = "Required"
      }

      if (!values.textArea || values.textArea === "") {
        errors.textArea = "Required"
      }

      return errors;
    }
  });

  return (
    <section className="mt-24 pt-12 pb-8" id="footer">
      <Toast ref={toast} position="bottom-right" />
      <div className="container mb-12 text-center sm:text-left lg:flex justify-between">
        <div className="mx-auto sm:ml-0 lg:w-2/6 lg:mr-8 mb-8">
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

        <div className="lg:w-1/6 mb-12 lg:mr-10">
          <h6 className="font-medium text-xl mb-4">Resources</h6>
          {navItems.map(navItem => (
            <div onClick={() => handleClickScroll(navItem.nav, 150)} className="cursor-pointer mt-2">{navItem.label}</div>
          ))}
        </div>

        <div className="mb-2 lg:w-3/6" >
          <h6 className="font-medium text-xl mb-4 ml-1">Contact Us</h6>
          <div className="">
            <form onSubmit={formik.handleSubmit}>
              <InputText
                name="sendersName" type="name" placeholder="Sender's Name" onChange={formik.handleChange} value={formik.values.sendersName}
                className={formik.errors.sendersName
                  ? "mb-1 w-full p-2 bg-transparent outline-none border border-[red] rounded-md text-left"
                  : "mb-2 w-full p-2 bg-transparent outline-none border border-[#BCD0E5] rounded-md text-left"}
              />
              {formik.errors.sendersName && formik.touched.sendersName &&
                <div className=" text-red-600 text-left mb-3 ">{formik.errors.sendersName}</div>
              }
              <InputText
                onChange={formik.handleChange} value={formik.values.email} name="email" type="email" placeholder="Sender's Email"
                className={formik.errors.email
                  ? "mb-1 w-full p-2 bg-transparent outline-none border border-[red] rounded-md text-left"
                  : "mb-2 w-full p-2 bg-transparent outline-none border border-[#BCD0E5] rounded-md text-left"}
              />
              {formik.errors.email && formik.touched.email &&
                <div className=" text-red-600 text-left mb-3 ">{formik.errors.sendersName}</div>
              }
              <InputTextarea
                onChange={formik.handleChange} value={formik.values.textArea} name="textArea" rows={3} cols={30} placeholder="message"
                className={formik.errors.textArea
                  ? "w-full p-2 bg-transparent outline-none border border-[red] rounded-md text-left"
                  : "mb-2 w-full p-2 bg-transparent outline-none border border-[#BCD0E5] rounded-md text-left"}
              />
              {formik.errors.textArea && formik.touched.textArea &&
                <div className=" text-red-600 text-left mb-3 ">{formik.errors.sendersName}</div>
              }
              <button type="submit" className="primary-button mt-6">Submit</button>
            </form>
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