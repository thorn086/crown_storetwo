import { Outlet, Link } from "react-router-dom";
import {ReactComponent as CrownLogo} from '../../assets/crown.svg'
import './navigationbar.styles.scss'

const NavigationBar = () => {
  return (
    <>
      <div className="navigation-container">
        <Link className="logo-container" to="/">
          <CrownLogo className="logo"></CrownLogo>
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          <Link className="nav-link" to="/sign-in">
            SIGNIN
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default NavigationBar;
