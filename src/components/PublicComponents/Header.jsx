import React from "react";
import cls from "classnames";
import logo from "../../assets/logo.png";
import useActive from "../../hooks/useActive.hook";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/auth/slice";
const Header = () => {
  const { active, handleChangeActive } = useActive();
  const dispatch = useDispatch();
  const { isAuth } = useSelector((state) => state.auth);

  const onLogout = () => {
    if (window.confirm("Logout")) {
      dispatch(logout());
    }
  };
  React.useEffect(() => {
    if (active) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "scroll";
    }
    return () => {
      document.body.style.overflowY = "scroll";
    };
  }, [active]);
  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <Link to="/" className="logo">
            <img className="logo__img" src={logo} alt="NewCastle" />
          </Link>
          <nav className={cls("nav", { active: active })}>
            <ul className="nav__list">
              <li className="nav__list-item">
                <Link to="/" className="nav__list-link nav__list-link--active">
                  Homepage
                </Link>
              </li>
              <li className="nav__list-item">
                <Link to="/" className="nav__list-link">
                  About
                </Link>
              </li>
              <li className="nav__list-item">
                <Link to="/courses" className="nav__list-link">
                  Courses
                </Link>
              </li>
              <li className="nav__list-item">
                <Link to="/admin" className="nav__list-link">
                  Contact
                </Link>
              </li>
              <li className="nav__list-item">
                <Link to="/" className="nav__list-link">
                  Pages
                </Link>
              </li>
            </ul>
            <div className="header__buttons">
              {!isAuth ? (
                <>
                  <Link to="/signin" className="header__login">
                    Logn in
                  </Link>
                  <Link to="/signup" className="header__signup">
                    Sign up
                  </Link>
                </>
              ) : (
                <button onClick={onLogout} className="header__signup">
                  Logout
                </button>
              )}
            </div>
          </nav>
          <div onClick={handleChangeActive} className="nav__overlay"></div>
          <button onClick={handleChangeActive} className={cls("header__btn menu", { active: active })}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
