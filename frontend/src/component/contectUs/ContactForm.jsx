import { MdMessage } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import Button from "./Button";
import styles from "./ContactForm.module.css";
import image1 from "../../assets/image2.png";
import { useState } from "react";
import emailjs from "emailjs-com";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    text: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();

    emailjs
      .sendForm(
        "service_3n4xrd7",
        "template_69xoc6f",
        event.target,
        "65K9U1YH9sH3iwgaK"
      )
      .then(
        (result) => {
          console.log(result.text);
          setForm({
            name: "",
            email: "",
            text: "",
          });
          toast.success("Message sent successfully!");
        },
        (error) => {
          console.log(error.text);
          toast.error("Failed to send message, please try again.");
        }
      );
  };

  return (
    <section className={styles.form_section}>
      <div>
        <div className={styles.contact_form}>
          <div className={styles.top_btn}>
            <Button
              text="VIA SUPPORT CHAT"
              icon={<MdMessage fontSize="20px" />}
            />
            <Button text="VIA CALL" icon={<FaPhoneAlt fontSize="20px" />} />
          </div>
          <Button
            isOutline="true"
            text="VIA EMAIL FROM"
            icon={<HiMail fontSize="20px" />}
          />
        </div>
        <form onSubmit={onSubmit} className={styles.form}>
          <div className={styles.form_control}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Abc"
              value={form.name}
              onChange={handleChange}
            />
          </div>

          <div className={styles.form_control}>
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              placeholder="abc@example.com"
              value={form.email}
              onChange={handleChange}
            />
          </div>

          <div className={styles.form_control}>
            <label htmlFor="text">Text</label>
            <textarea
              name="text"
              placeholder="Description"
              value={form.text}
              onChange={handleChange}
            />
          </div>
          <div className={styles.submit}>
            <Button text="SUBMIT" />
          </div>
        </form>
      </div>
      <div className={styles.contact_image}>
        <img src={image1} alt="" />
      </div>
      <ToastContainer />
    </section>
  );
};

export default ContactForm;
