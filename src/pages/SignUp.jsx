import passwwordIcon from "../assets/icons/password.svg";
import phoneIcon from "../assets/icons/phone.svg";
import userRegIcon from "../assets/icons/userreg.svg";
import { IMaskInput } from "react-imask";
const SignUp = () => {
  const onSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={onSubmit} className="signin" autoComplete="off">
      <h3>Registratsiya</h3>
      <div className="input">
        <img src={userRegIcon} alt="user" />
        <input
          name="name"
          maxLength={50}
          minLength={2}
          placeholder="Ism, familiya"
          type="text"
          className="sign__tel"
          required
        />
      </div>
      <div className="input">
        <img src={phoneIcon} alt="phone" />
        <IMaskInput
          value={"+998"}
          mask={"+{998}000000000"}
          name="tel"
          maxLength={13}
          placeholder="Telefon raqam"
          type="tel"
          className="sign__tel"
          autoComplete="off"
          required
        />
      </div>
      <div className="input">
        <img src={passwwordIcon} alt="password" />
        <input
          name="password"
          placeholder="Password"
          maxLength={50}
          minLength={3}
          type="password"
          autoComplete="off"
          className="sign__password"
          required
        />
      </div>
      <button type="submit">Kirish</button>
    </form>
  );
};

export default SignUp;
