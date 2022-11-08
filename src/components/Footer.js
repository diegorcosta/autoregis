import { RiInstagramFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";

import "../styles/Footer.scss";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className="main-footer">
      <div className="social-media">
        <div className="container">
          <ul>
            <li>
              <a href="mailto:autoregiscg@hotmail.com">
                <MdEmail />
                autoregiscg@hotmail.com
              </a>
            </li>
            <li>
              <a
                href="http://instagram.com/autoregiscg"
                target="_blank"
                rel="noreferrer"
              >
                <RiInstagramFill />
                autoregiscg
              </a>
            </li>
            <li>
              <a
                href="http://instagram.com/autoregisparts"
                target="_blank"
                rel="noreferrer"
              >
                <RiInstagramFill />
                autoregisparts
              </a>
            </li>
            {/* <li>
              <a
                href="https://api.whatsapp.com/send?phone=558399355058"
                target="_blank"
                rel="noreferrer"
              >
                <RiWhatsappFill />
                (83) 9 9935-5058
              </a>
            </li> */}
          </ul>
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          <div>© {year} - autoRÉGIS.</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
