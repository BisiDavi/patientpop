import Link from "next/link";
import footerContent from "@json/menu.json";
import { theme } from "@styles/colors";

export default function Footer() {
  return (
    <>
      <footer className="footer text-white border-t py-20 pb-28 border-gray-600">
        <div className="container m-auto lg:px-20 px-4">
          <div className="footer-links flex justify-between flex-col lg:flex-row">
            {footerContent.footer.map((item, index) => (
              <div key={index} className={`column-${index}`}>
                <h4 className="text-xl my-8 font-bold">{item.title}</h4>
                <ul className="">
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
          <div className="social-links flex items-center justify-between my-8">
            <div className="icons"></div>
            <div className="social-icons flex items-center">
              {footerContent.socialLinks.map((link, index) => (
                <Link key={index} href={link.link} passHref>
                  <i className={`${link.icon} mx-4 text-white`} />
                </Link>
              ))}
            </div>
          </div>
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
      <style jsx>
        {`
          .footer {
            background-image: url("/footer-logo.svg");
            background-position-y: bottom;
            background-position-x: right;
            background-repeat: no-repeat;
            background-color: ${theme.colors.gray};
          }
          .column-0 ul {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
          }
        `}
      </style>
    </>
  );
}
