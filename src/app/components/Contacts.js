import { FiFacebook } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";
import { FiTwitter } from "react-icons/fi";
import { FiGithub } from "react-icons/fi";
import { SiGmail } from "react-icons/si";
import { FaViber } from "react-icons/fa";
const Contacts = () => {
  return (
    <div>
      <div
        style={{ background: "#6F5D83" }}
        className="md:flex hidden min-h-full flex-col items-center justify-center pt-5 pb-8"
      >
        {/* logo below */}
        <p className="text-2xl mb-8 font-semibold text-white">
          🥫&nbsp;Foodstock
        </p>
        {/* logo above */}
        {/* links */}
        <div className="flex flex-row items-center justify-between w-3/12 text-white">
          <a href="/">
            <FiFacebook className="w-6 h-6 hover:text-gray-100 hover:opacity-80" />
          </a>
          <a href="/">
            <FiInstagram className="w-6 h-6 hover:text-gray-100 hover:opacity-80" />
          </a>
          <a href="/">
            <FiTwitter className="w-6 h-6 hover:text-gray-100 hover:opacity-80" />
          </a>
          <a href="/">
            <FiGithub className="w-6 h-6 hover:text-gray-100 hover:opacity-80" />
          </a>
          <a href="/">
            <FaViber className="w-6 h-6 hover:text-gray-100 hover:opacity-80" />
          </a>
          <a href="/">
            <SiGmail className="w-6 h-6 hover:text-gray-100 hover:opacity-80" />
          </a>
        </div>
        {/* links above */}
        {/* desc below */}
        <div className="flex flex-col items-center justify-center">
          <p className="text-white text-lg mt-8 font-semibold">Ko smo mi?</p>
          <p className="text-white text-md text-center w-10/12 mt-5 font-regular">
            Mi smo grupa studenata sa Prirodno-Matematičkog fakulteta - UCG.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="text-white text-lg mt-8 font-semibold">
            Zašto ovaj website postoji?
          </p>
          <p className="text-white text-center text-md mt-5 font-regular w-6/12">
            Ovaj website je nastao kao proizvod našeg učešća na OpenUp
            takmičenju, koje je organizovano od strane DevClub-a.
          </p>
        </div>
        {/* desc above */}
      </div>
      {/* above big */}
      {/* below smoll */}
      <div
        style={{ background: "#6F5D83" }}
        className="md:hidden xs:pt-64 flex flex-col items-center justify-center pt-5 pb-8"
      >
        {/* logo below */}
        <p className="text-2xl mb-8 font-semibold text-white">
          🥫&nbsp;Foodstock
        </p>
        {/* logo above */}
        {/* links below */}
        <div className="flex flex-row items-center justify-center w-3/12 text-white">
          <a href="/">
            <FiFacebook className="w-7 h-7 hover:text-gray-100 hover:opacity-80" />
          </a>
          <a href="/">
            <FiInstagram className="w-7 h-7 mx-4 hover:text-gray-100 hover:opacity-80" />
          </a>
          <a href="/">
            <FiTwitter className="w-7 h-7 hover:text-gray-100 hover:opacity-80" />
          </a>
          <a href="/">
            <FiGithub className="w-7 h-7 mx-4 hover:text-gray-100 hover:opacity-80" />
          </a>
          <a href="/">
            <FaViber className="w-7 h-7 mr-4 hover:text-gray-100 hover:opacity-80" />
          </a>
          <a href="/">
            <SiGmail className="w-7 h-7 hover:text-gray-100 hover:opacity-80" />
          </a>
        </div>
        {/* links above */}
        {/* desc below */}
        <div className="flex flex-col items-center justify-center">
          <p className="text-white text-xl mt-8 font-semibold">Ko smo mi?</p>
          <p className="text-white text-md text-center w-10/12 mt-5 font-regular">
            Mi smo grupa studenata sa Prirodno-Matematičkog fakulteta - UCG.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="text-white text-xl mt-8 font-semibold">
            Zašto postoji ovaj website?
          </p>
          <p className="text-white text-center text-md mt-5 font-regular w-9/12">
            Ovaj website je nastao kao proizvod našeg učešća na OpenUp
            takmičenju, koje je organizovano od strane DevClub-a.
          </p>
        </div>
        {/* desc above */}
      </div>
    </div>
  );
};

export default Contacts;
{
  /* <div className="h-40 w-full flex flex-col justify-center items-center md:flex-row md:items-center md:justify-start px-4 space-y-5 md:space-x-20">
        <div className="space-y-10 w-60 text-center">
          <p className="text-white font-karla">Logo</p>
          <div className="flex flex-row justify-between text-white">
            <a href="/">
              <FiFacebook className="w-6 h-6"></FiFacebook>
            </a>
            <a href="/">
              <FiInstagram className="w-6 h-6"></FiInstagram>
            </a>
            <a href="/">
              <FiTwitter className="w-6 h-6"></FiTwitter>
            </a>
            <a href="/">
              <FiGithub className="w-6 h-6"></FiGithub>
            </a>
          </div>
          <div className="flex flex-col space-y-3">
            <h1 className="text-xl text-white text-center font-karla">
              Kontaktriraj nas:
            </h1>
            <div className="flex flex-row items-center space-x-3 text-white font-karla">
              <SiGmail className="w-6 h-6"></SiGmail>
              <h1>foodstock@gmail.com</h1>
            </div>

            <div className="flex flex-row items-center space-x-3 text-white font-karla">
              <FaViber className="w-6 h-6"></FaViber>
              <h1>333-555</h1>
            </div>
            <div></div>
          </div>
        </div>
        <div className="w-60 text-center flex flex-col text-white font-karla">
          <p>
            Grupa studenata sa Prirodno-matematičkog fakulteta je kreirala ovaj
            sajt pod okriljem OpenUp takmičenja koje je organizovao DevClub
          </p>
        </div>
      </div> */
}
