import InfoBox from 'components/InfoBox';
import validateEmail from 'functional/validateEmail';
import { useState } from 'react';
import ProfilePage from './ProfilePage';

const WelcomePage = () => {
  const [email, setEmail] = useState('');
  const [emailValidationError, setEmailValidationError] = useState(false);
  const [password, setPassword] = useState('');
  const [showGreeting, setShowGreeting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateEmail(email)) {
      let userConfirmation = window.confirm(
        'Are you sure you want to create an account?'
      );

      if (userConfirmation) {
        setShowGreeting(true);
      }
    } else {
      setEmailValidationError(true);
    }
  };

  const handleEmail = (e) => {
    setEmailValidationError(false);
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <>
      <div className="welcome-page">
        <InfoBox />
        {!showGreeting && (
          <div className="form-wrapper animate__animated animate__fadeInRight animate__slow">
            <form className="form">
              <h2 className="form-greeting">Hi guest, want you register?</h2>
              <input
                type="text"
                className={
                  emailValidationError
                    ? 'input-custom button-custom-error'
                    : 'input-custom'
                }
                onChange={handleEmail}
                value={email}
                placeholder="Email"
                required
              />
              <input
                type="password"
                className="input-custom"
                onChange={handlePassword}
                value={password}
                placeholder="Password"
                required
              />
              <button
                type="submit"
                className="button-custom"
                onClick={handleSubmit}
                disabled={!password || !email}
              >
                Create Account
              </button>
            </form>
          </div>
        )}
      </div>
      {showGreeting && <ProfilePage guestName={email} />}
    </>
  );
};

export default WelcomePage;
