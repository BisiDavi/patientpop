import Link from "next/link";
import footerContent from "@json/menu.json";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-links">
          {footerContent.footer.map((item, index) => (
            <div key={index} className="column">
              <h4>{item.title}</h4>
              <ul>
                {item.links.map((link, index) => (
                  <li key={index} className="link">
                    <Link href={link.link} passHref>
                      <a>{link.name}</a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="social-links"></div>
        <div className="bottom-links">
          <p>Copyright 2021 PatientPop, Inc.</p>
          <div className="page-links">
            {footerContent.bottomLinks.map((link, index) => (
              <Link key={index} href={link.link} passHref>
                <a>{link.name}</a>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
