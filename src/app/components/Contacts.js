import { FiFacebook } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";
import { FiTwitter } from "react-icons/fi";
import { FiGithub } from "react-icons/fi";
import { SiGmail } from "react-icons/si";
import { FaViber } from "react-icons/fa";
const Contacts = () => {
  return (
    <div className=" bg-purple-600 rounded-t-md py-5 h-full w-full flex flex-col justify-center items-center md:flex-row md:items-center md:justify-start px-4 space-y-5 md:space-x-20">
      <div className="space-y-10 w-60 text-center">
        <p className="text-white font-karla">Logo</p>
        <div className="flex flex-row justify-between text-white">
          <a href="/">
            <FiFacebook className="w-7 h-7"></FiFacebook>
          </a>
          <a href="/">
            <FiInstagram className="w-7 h-7"></FiInstagram>
          </a>
          <a href="/">
            <FiTwitter className="w-7 h-7"></FiTwitter>
          </a>
          <a href="/">
            <FiGithub className="w-7 h-7"></FiGithub>
          </a>
        </div>
        <div className="flex flex-col space-y-3">
          <h1 className="text-xl text-white text-center font-karla">
            Kontaktriraj nas:
          </h1>
          <div className="flex flex-row items-center space-x-3 text-white font-karla">
            <SiGmail className="w-7 h-7"></SiGmail>
            <h1>foodstock@gmail.com</h1>
          </div>

          <div className="flex flex-row items-center space-x-3 text-white font-karla">
            <FaViber className="w-7 h-7"></FaViber>
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
    </div>
  );
};

export default Contacts;
