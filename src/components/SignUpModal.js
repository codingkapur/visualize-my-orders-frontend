import { FiX } from "react-icons/fi";

const SignUpModal = ({ handleOverlayClick, onSignInClick }) => {


  return (
    <div className="modal sign-up-modal">
      <FiX className="close-modal-x" onClick={()=> handleOverlayClick()} />
      <div className="modal-form">
        <h1>Sign Up</h1>
        <form className="modal-form">
          <div className="modal-form-text-field modal-first-name">
            <input
              type="text"
              placeholder=""
              className="modal-form-input form__sign-up--firstname"
              required
            />
            <span></span>

            <label className="modal-form-label">First Name:</label>
          </div>
          <div className="modal-form-text-field modal-last-name">
            <input
              type="text"
              placeholder=""
              className="modal-form-input form__sign-up--lastname"
              required
            />
            <span></span>

            <label className="modal-form-label">Last Name:</label>
          </div>
          <div className="modal-form-text-field modal-d-o-b">
            <input
              type="text"
              placeholder=""
              className="modal-form-input modal__form--pin"
              required
            />
            <span></span>

            <label className="modal-form-label ">Enter a Pin</label>
          </div>
          <button
            type="submit"
            className="btn-sign-up btn-form"
            value="Sign Up"
          >
            Sign Up
          </button>
          <div className="sign-up-form-text-container">
            <p className="sign-up-form-text">
              Already have an account? Sign in
              <strong className="send-to-sign-in" onClick = {()=>onSignInClick()}> here</strong>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpModal;
