import "./Modal.css";
import { IoMdContact } from "react-icons/io";
import { contactDetails } from "../../../db-books.js";

function Modal(props) {
  const { show, handleClose, children } = props;

  function handleOverlayClose(e) {
    if (e.target.className != "modal") {
      handleClose();
    }
  }

  const showHideModal = show ? "modal display-block" : "modal display-none";
  return (
    <div className={showHideModal} onClick={handleOverlayClose}>
      <section className="modal-main">
        {children}
        <button onClick={handleClose} className="close-modal-btn">
          x
        </button>
        <h1 className="modal-title">
          {<IoMdContact className="contact-icon" />}Contact
        </h1>

        <ul className="modal-detail-container">
          {contactDetails.map((detail) => {
            return (
              <li key={detail.id}>
                {detail.name}: {detail.url}
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
}

export default Modal;
