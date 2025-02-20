/* Footer - Render the site's footer
 Return: the React footer component
*/

import { NavLink } from "react-router-dom";
import Logo from "../../assets/logo/KASA_LOGO_white.svg";

/* The Footer component returns a footer element containing:
   - A NavLink to navigate back to the homepage.
   - An image logo.
   - A short copyright message.
*/
function Footer() {
  /* The .footer__container class wraps the entire footer
	   and applies styling (flex layout, center alignment, etc.). */
  return (
    <footer className="footer__container">
      {/* NavLink redirects user to homepage when clicked */}
      <NavLink to="/" className="footer__container--logo">
        {/* Logo of the Kasa application */}
        <img src={Logo} alt="Logo Kasa" />
      </NavLink>
      {/* Footer text with copyright */}
      <span className="footer__container--title">
        © 2020 Kasa. All rights reserved
      </span>
    </footer>
  );
}

export default Footer;
