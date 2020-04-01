import React from "react";

const FooterContainer = ({
    text
}) => {

    const getCurrentYear = () => {
        var date = new Date();
        var currentYear = date.getFullYear();
        return currentYear; 
    }

    return (
        <footer>
            &copy; {getCurrentYear()} {text}
        </footer>
    )
}

export default FooterContainer;