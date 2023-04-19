const React = require('react');

function Footer() {

const currentYear = new Date().getFullYear();

  return (
    <footer>
      <p>
        &copy;Devtown @ {currentYear}
      </p>
    </footer>
  );
}
export default Footer;
