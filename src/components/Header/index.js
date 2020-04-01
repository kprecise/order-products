import React from "react";
import { SiteLogo, TextForScreenReader } from './styledComponent.js';

const Header = ({
    src
}) => {
    return (
        <header>
            <SiteLogo backgroundImage={src}>
                <TextForScreenReader>
                    Site Name
                </TextForScreenReader>
            </SiteLogo>
        </header>
    )
}

export default Header;