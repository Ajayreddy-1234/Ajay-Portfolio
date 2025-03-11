import React from "react";
import {
  FaWhatsapp,
  FaInstagram,
  FaEnvelope,
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";
import {SiLeetcode} from "react-icons/si";
const ProfileIcons = () => {
  return (
    <ul className="icons-list">
      <li>
        <a
          href="https://github.com/Ajayreddy-1234"
          target="__blank"
          className="icon-button github"
        >
          <FaGithub />
        </a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/in/ajay-reddy-gajulapally/"
          target="__blank"
          className="icon-button linkedin"
        >
          <FaLinkedinIn />
        </a>
      </li>
      <li>
        <a href="mailto:gajulapallyajay@gmail.com" className="icon-button email">
          <FaEnvelope />
        </a>
      </li>
      <li>
        <a
          href="https://www.instagram.com/ajay_v_0107/"
          target="__blank"
          className="icon-button instagram"
        >
          <FaInstagram />
        </a>
      </li>
      <li>
        <a
          href="https://wa.me/+18128377943"
          target="__blank"
          className="icon-button whatsapp"
        >
          <FaWhatsapp />
        </a>
      </li>
      <li>
        <a
          href="https://leetcode.com/u/Spyder_ab/"
          target="__blank"
          className="icon-button leetcode"
        >
          <SiLeetcode />
        </a>
      </li>
      
    </ul>
  );
};

export default ProfileIcons;
