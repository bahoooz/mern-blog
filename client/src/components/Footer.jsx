/* eslint-disable react/no-unescaped-entities */
import { Footer } from "flowbite-react";
import { Link } from "react-router-dom";
import { BsLinkedin, BsGithub, BsDiscord } from "react-icons/bs";
import { IoLibrary } from "react-icons/io5";

export default function FooterCom() {
  return (
    <Footer container className="border border-t-8 border-teal-500">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid w-full justify-between sm:flex md:grid-cols-1">
          <div className="mt-5">
            <Link
              to="/"
              className="self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white"
            >
              <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-violet-800 rounded-lg text-white">
                Bahoz's
              </span>
              Blog
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="Follow us" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="https://github.com/bahoooz"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </Footer.Link>
                <Footer.Link
                  href="https://bahoz-dev.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Portfolio
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Follow us" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="https://www.linkedin.com/in/julien-brault-ch%C3%A9rif-aa276226b/"
                  target="_blank"
                >
                  Linkedin
                </Footer.Link>
                <Footer.Link
                  href="https://discord.gg/rvzyZVqdDs"
                  target="_blank"
                >
                  Discord
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Legal" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Privacy Policy</Footer.Link>
                <Footer.Link href="/about">Terms Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright
            href="#"
            by="Bahoz's Blog"
            year={new Date().getFullYear()}
          />
          <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
            <Footer.Icon href="https://bahoz-dev.com/" target="_blank" icon={IoLibrary} />
            <Footer.Icon href="https://github.com/bahoooz" target="_blank" icon={BsGithub} />
            <Footer.Icon href="https://discord.gg/rvzyZVqdDs" target="_blank" icon={BsDiscord} />
            <Footer.Icon href="https://www.linkedin.com/in/julien-brault-ch%C3%A9rif-aa276226b/" target="_blank" icon={BsLinkedin} />
          </div>
        </div>
      </div>
    </Footer>
  );
}
