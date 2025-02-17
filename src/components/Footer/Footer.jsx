import "../assets/styles/footer.scss"; // Style du footer
import Logo from "../Logo/Logo";

export default function Footer() {
  return (
    <footer className="footer">
      <Logo color="currentColor" />
      <p className="footer__credit">© 2025 Kasa - All rights reserved</p>
    </footer>
  );
}
