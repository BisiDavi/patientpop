import Link from "next/link";
import footerContent from "@json/menu.json";

export default function Footer() {
  return (
    <footer className="bg-gray-700 text-white border-t py-20 border-gray-600">
      <div className="container m-auto px-20">
        <div className="footer-links flex justify-between">
          {footerContent.footer.map((item, index) => (
            <div key={index} className="column">
              <h4 className="text-xl my-8">{item.title}</h4>
              <ul className="grid grid-cols-2">
                {item.links.map((link, index) => (
                  <li key={index} className="link text-gray-300 my-2">
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
        <div className="bottom-links flex items-center justify-between mt-10 text-gray-400">
          <p>Copyright 2021 PatientPop, Inc.</p>
          <div className="page-links">
            {footerContent.bottomLinks.map((link, index) => (
              <Link key={index} href={link.link} passHref>
                <a className="m-4">{link.name}</a>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
