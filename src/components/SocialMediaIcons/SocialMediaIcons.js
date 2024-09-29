import React from "react";
import { FaTwitter, FaFacebook, FaGlobe, FaLinkedin } from "react-icons/fa";

function SocialMediaIcons() {
  return (
    <div className="flex items-center justify-center">
      <a
        href="https://www.grey-box.ca/"
        target="_blank"
        className="mx-2 text-2xl text-white no-underline"
      >
        <FaGlobe />
      </a>
      <a
        href="https://twitter.com/greyboxproject"
        target="_blank"
        className="mx-2 text-2xl text-white no-underline"
      >
        <FaTwitter />
      </a>
      <a
        href="https://www.facebook.com/greyboxORG/"
        target="_blank"
        className="mx-2 text-2xl text-white no-underline"
      >
        <FaFacebook />
      </a>
      <a
        href="https://www.linkedin.com/company/greyboxproject/"
        target="_blank"
        className="mx-2 text-2xl text-white no-underline"
      >
        <FaLinkedin />
      </a>
    </div>
  );
}

export default SocialMediaIcons;
