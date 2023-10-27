import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { RiTwitterXFill } from "react-icons/ri";

const Contacts = () => {
  return (
    <div className="bg-[#252530] flex xl:h-[60px] xl:mt-[85px] items-center text-white text-2xl justify-evenly">
      <a
        href="https://github.com/RusuDarius"
        className="hover:text-black duration-100 hover:-translate-y-1"
        target="_blank"
      >
        <AiFillGithub />
      </a>
      <a
        href="https://www.linkedin.com/in/darius-rusu-82211327b/"
        className="hover:text-blue-500 duration-100 hover:-translate-y-1"
        target="_blank"
      >
        <FaLinkedinIn />
      </a>
      <a
        href="https://instagram.com/darius_rusu19?igshid=MzRlODBiNWFlZA=="
        className="hover:text-pink-600 duration-100 hover:-translate-y-1"
        target="_blank"
      >
        <BsInstagram />
      </a>
      <a
        href="https://x.com/d0pasec?s=11&t=srq8qmJZfnuPt0y0PqRMVw"
        className="hover:text-black duration-100 hover:-translate-y-1"
        target="_blank"
      >
        <RiTwitterXFill />
      </a>
    </div>
  );
};

export default Contacts;
