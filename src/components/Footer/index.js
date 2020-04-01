import React from "react";

const Footer = ({
    currentYear,
    text
}) => {

    return (
        <footer>
            &copy; {currentYear} {text}
        </footer>
    )
}

export default Footer;