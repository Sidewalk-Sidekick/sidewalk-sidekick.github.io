import FooterNav from "./FooterNav"
import { FaArrowUp } from "react-icons/fa"
import '../ui/Footer.css';

const Footer = () => {
  return (
  <footer className="footer">
      <div>
        <p><b>Sidewalk Sidekick LLC</b></p>
        <p>© 2023 All Rights Reserved</p>
        <FooterNav />
      </div>
      <div>
        <ul>
          <li>
            <a href="hero">Back to Top <FaArrowUp /></a>
          </li>
        </ul>
      </div>
  </footer>
  );
};

export default Footer