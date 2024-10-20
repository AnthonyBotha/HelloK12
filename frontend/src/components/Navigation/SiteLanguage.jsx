import { useState, useEffect, useRef } from "react";
import { MdLanguage } from "react-icons/md";
import "./SiteLanguageSelection.css"


function SiteLangaugeSelectionMenu() {
    const languageArray = [
        { language: 'English', languageInEnglish: 'English' },
        { language: 'हिन्दी', languageInEnglish: 'Hindi' }, // Hindi
        { language: 'Português', languageInEnglish: 'Portuguese' }, // Portuguese
        { language: '中文', languageInEnglish: 'Chinese' }, // Chinese
        { language: 'Español', languageInEnglish: 'Spanish' }, // Spanish
        { language: 'Français', languageInEnglish: 'French' }, // French
        { language: 'Deutsch', languageInEnglish: 'German' }, // German
        { language: '日本語', languageInEnglish: 'Japanese' }, // Japanese
        { language: 'العربية', languageInEnglish: 'Arabic' }, // Arabic
        { language: 'Русский', languageInEnglish: 'Russian' }, // Russian
        { language: '한국어', languageInEnglish: 'Korean' }, // Korean
        { language: 'Bahasa Indonesia', languageInEnglish: 'Indonesian' }, // Indonesian
        { language: 'Italiano', languageInEnglish: 'Italian' }, // Italian
        { language: 'Nederlands', languageInEnglish: 'Dutch' }, // Dutch
        { language: 'Türkçe', languageInEnglish: 'Turkish' }, // Turkish
        { language: 'Polski', languageInEnglish: 'Polish' }, // Polish
        { language: 'Svenska', languageInEnglish: 'Swedish' }, // Swedish
        { language: 'Norsk', languageInEnglish: 'Norwegian' }, // Norwegian
        { language: 'Filipino', languageInEnglish: 'Filipino' }, // Filipino
        { language: 'Bahasa Melayu', languageInEnglish: 'Malay' }, // Malay
        { language: 'Română', languageInEnglish: 'Romanian' }, // Romanian
        { language: 'Magyar', languageInEnglish: 'Hungarian' }, // Hungarian
        { language: 'Українська', languageInEnglish: 'Ukrainian' }, // Ukrainian
        { language: 'Ελληνικά', languageInEnglish: 'Greek' }, // Greek
        { language: 'Čeština', languageInEnglish: 'Czech' }, // Czech
        { language: 'Dansk', languageInEnglish: 'Danish' }, // Danish
        { language: 'Suomi', languageInEnglish: 'Finnish' }, // Finnish
        { language: 'Български', languageInEnglish: 'Bulgarian' }, // Bulgarian
        { language: 'Hrvatski', languageInEnglish: 'Croatian' }, // Croatian
        { language: 'Slovenčina', languageInEnglish: 'Slovak' }, // Slovak
        { language: 'தமிழ்', languageInEnglish: 'Tamil' }, // Tamil
        { language: 'Tiếng Việt', languageInEnglish: 'Vietnamese' } // Vietnamese
    ];

    const [showMenu, setShowMenu] = useState(false);
    const ulRef = useRef();

    const toggleMenu = (e) => {
        e.stopPropagation();
        setShowMenu(!showMenu)
    };

    const closeMenu = () => setShowMenu(false);

    useEffect(() => {
        if (!showMenu) return;

        const closeMenu = (e) => {
            if (ulRef.current && !ulRef.current.contains(e.target)) {
                setShowMenu(false);
            }
        };

        document.addEventListener("click", closeMenu);

        return () => document.removeEventListener("click", closeMenu);
    }, [showMenu]);


    return (
        <span className="site-language-selection-container">
            <span
                className="language-text"
                onClick={toggleMenu}
            >
                <MdLanguage className="site-language-icon" />
            </span>
            {showMenu && (
                <ul className="site-language-dropdown" ref={ulRef}>
                    <>
                        {languageArray.map((lang, index) => (
                            <li key={index} onClick={closeMenu}>
                                {lang.language}
                            </li>)
                        )}
                    </>
                </ul>
            )}
        </span>
    );
}

export default SiteLangaugeSelectionMenu;
