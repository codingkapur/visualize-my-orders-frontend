import "./SignInModal.css";

const SignInModal = () => {
  return (
    <div className="modal sign-in-modal">
      <i className="ion-ios-close close-modal-x"></i>
      <div className="modal-form">
        <h1>Sign In</h1>
        <form className="modal-form">
          <div className="modal-form-text-field modal-username">
            <input
              type="text"
              placeholder=""
              className="modal-form-input modal-form-input-username"
              required
            />
            <span></span>
            <label className="modal-form-label">Username:</label>
          </div>
          <div className="modal-form-text-field modal-username">
            <input
              type="text"
              placeholder=""
              className="modal-form-input modal-form-input-password"
              required
            />
            <span></span>
            <label className="modal-form-label">Password:</label>
          </div>
          <div className="error-message">Username or Password Incorrect!</div>
          <div className="modal-forgot-password">
            <p>Forgot Password?</p>
          </div>
          <div className="btn-sign-in-container">
            <button className="btn-sign-in btn-form" value="Sign In">
              Sign In
            </button>
            <div className="sign-up-form-text-container">
              <p className="sign-up-form-text">
                Don't have an account? Sign up
                <strong className="send-to-sign-up"> here.</strong>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignInModal;
