import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright Moses Wai-Ming Wong ⓒ {year}</p>
    </footer>
  );
}

export default Footer;
