import styles from "./Footer.module.css";
import Modal from "../../utils/Modal/Modal.jsx";
import { useState } from "react";

const Footer = (props) => {
  const { creator } = props;
  const [openModal, setIsOpen] = useState(false);

  function showModal() {
    setIsOpen(true);
  }

  function hideModal() {
    setIsOpen(false);
  }

  return (
    <div className={styles.footerContainer}>
      <span className={styles.footerCreatorSpan}>
        @2024 Created by {creator}
      </span>
      <button onClick={showModal} className={styles.contactBtn}>
        Contact
      </button>
      <Modal show={openModal} handleClose={hideModal}></Modal>
    </div>
  );
};

export default Footer;
