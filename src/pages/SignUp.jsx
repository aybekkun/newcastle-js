import passwwordIcon from "../assets/icons/password.svg";
import phoneIcon from "../assets/icons/phone.svg";
import userRegIcon from "../assets/icons/userreg.svg";

const SignUp = () => {
  return (
    <form className="signin">
      <h3>Registratsiya</h3>
      <div className="input">
        <img src={userRegIcon} />
        <input name="name" placeholder="Ism, familiya" type="tel" className="sign__tel" />
      </div>
      <div className="input">
        <img src={phoneIcon} />
        <input name="tel" placeholder="Telefon raqam" type="tel" className="sign__tel" />
      </div>
      <div className="input">
        <img src={passwwordIcon} />
        <input name="password" placeholder="Password" type="password" className="sign__password" />
      </div>
      <button type="submit">Kirish</button>
    </form>
  );
};

export default SignUp;
