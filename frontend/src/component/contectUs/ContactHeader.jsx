import styles from "./ContactHeader.module.css"
const ContactHeader = () => {
  return (
      <div className={styles.contact_section}>
        <h1>CONTACT US</h1>
        <p>
            LET'S CONNECT:We’re here to assist you and would love to hear from you. Whether you have questions, comments, or just want to chat about your real estate needs, don’t hesitate to reach out.
        </p>
      </div>
  )
};

export default ContactHeader;