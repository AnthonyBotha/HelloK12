import { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { IoMdAddCircleOutline } from "react-icons/io";
import "./LanguageCourse.css"


function LangaugeSelectionMenu() {
    // const languageArray = [
    //     { language: 'English', flag: "https://res.cloudinary.com/dmg8yuivs/image/upload/v1729380065/English_ljz0so.png"  },
    //     { language: 'Hindi', flag: "https://res.cloudinary.com/dmg8yuivs/image/upload/v1729380074/Hindi_pjoet2.png" },
    //     { language: 'Portuguese', flag: "https://res.cloudinary.com/dmg8yuivs/image/upload/v1729380089/Portuguese_ek7mb9.png" },
    //     { language: 'Chinese', flag: "https://res.cloudinary.com/dmg8yuivs/image/upload/v1729380058/chinese_phwu0z.png" },
    //     { language: 'Spanish', flag: "https://res.cloudinary.com/dmg8yuivs/image/upload/v1729380095/spain_zyzi2a.png" },
    //     { language: 'French', flag: "https://res.cloudinary.com/dmg8yuivs/image/upload/v1729380069/france_sctphq.png" },
    //     { language: 'German', flag: "https://res.cloudinary.com/dmg8yuivs/image/upload/v1729380071/germany_mg6wwj.png" },
    //     { language: 'Japanese', flag: "https://res.cloudinary.com/dmg8yuivs/image/upload/v1729380080/Japanese_ulv4gt.png" },
    //     { language: 'Arabic', flag: "https://res.cloudinary.com/dmg8yuivs/image/upload/v1729380463/united-arab-emirates_nydgqd.png" },
    //     { language: 'Russian', flag: "https://res.cloudinary.com/dmg8yuivs/image/upload/v1729380092/russia_axiabg.png" },
    //     { language: 'Korean', flag: "https://res.cloudinary.com/dmg8yuivs/image/upload/v1729380081/Korea_ouys4f.png" },
    //     { language: 'Indonesian', flag: "https://res.cloudinary.com/dmg8yuivs/image/upload/v1729380077/indonesia_gfen6a.png" },
    //     { language: 'Italian', flag: "https://res.cloudinary.com/dmg8yuivs/image/upload/v1729380078/italy_vr9rya.png" },
    //     { language: 'Dutch', flag: "https://res.cloudinary.com/dmg8yuivs/image/upload/v1729380063/Dutch_wtsc3v.png" },
    //     { language: 'Turkish', flag: "https://res.cloudinary.com/dmg8yuivs/image/upload/v1729380459/turkey_idvfld.png" },
    //     { language: 'Polish', flag: "https://res.cloudinary.com/dmg8yuivs/image/upload/v1729380086/Poland_pmmlmd.png" },
    //     { language: 'Swedish', flag: "https://res.cloudinary.com/dmg8yuivs/image/upload/v1729380096/Sweden_vxqlfj.png" },
    //     { language: 'Norwegian', flag: "https://res.cloudinary.com/dmg8yuivs/image/upload/v1729380084/norway_acezrc.png" },
    //     { language: 'Filipino', flag: "https://res.cloudinary.com/dmg8yuivs/image/upload/v1729380066/Filipino_erkh5o.png" },
    //     { language: 'Malay', flag: "https://res.cloudinary.com/dmg8yuivs/image/upload/v1729380083/Malaysian_csiere.png" },
    //     { language: 'Romanian', flag: "https://res.cloudinary.com/dmg8yuivs/image/upload/v1729380090/romania_tu9nxc.png" },
    //     { language: 'Hungarian', flag: "https://res.cloudinary.com/dmg8yuivs/image/upload/v1729380075/hungary_ebctxu.png" },
    //     { language: 'Ukrainian', flag: "https://res.cloudinary.com/dmg8yuivs/image/upload/v1729380461/ukraine_axbmtv.png" },
    //     { language: 'Greek', flag: "https://res.cloudinary.com/dmg8yuivs/image/upload/v1729380072/greece_njy02h.png" },
    //     { language: 'Czech', flag: "https://res.cloudinary.com/dmg8yuivs/image/upload/v1729380061/czech-republic_dh2b92.png" },
    //     { language: 'Danish', flag: "https://res.cloudinary.com/dmg8yuivs/image/upload/v1729380062/Danish_cb2eqk.png" },
    //     { language: 'Finnish', flag: "https://res.cloudinary.com/dmg8yuivs/image/upload/v1729380068/finland_ne2o7t.png" },
    //     { language: 'Bulgarian', flag: "https://res.cloudinary.com/dmg8yuivs/image/upload/v1729380057/bulgaria_gnjmb6.png" },
    //     { language: 'Croatian', flag: "https://res.cloudinary.com/dmg8yuivs/image/upload/v1729380059/croatia_i5numx.png" },
    //     { language: 'Slovak', flag: "https://res.cloudinary.com/dmg8yuivs/image/upload/v1729380093/slovakia_di810i.png" },
    //     { language: 'Tamil', flag: "https://res.cloudinary.com/dmg8yuivs/image/upload/v1729380319/Tamil_bce97r.png" },
    //     { language: 'Vietnamese', flag: "https://res.cloudinary.com/dmg8yuivs/image/upload/v1729380465/vietnam_br3mjw.png" }
    //   ]

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
        <span className="language-selection-container">
            <span
                className="language-text"
                onClick={toggleMenu}
            >
                Flag
            </span>
            {showMenu && (
                <ul className="language-dropdown" ref={ulRef}>
                    <>
                        <li onClick={closeMenu}>Flag and Language</li>
                        <NavLink 
                            to="/languages"
                            className="language-navlink"
                            onClick={closeMenu}
                        >
                            <IoMdAddCircleOutline className="add-language-icon"/> Learn a new language
                        </NavLink>
                    </>
                </ul>

            )}
        </span>
    );
}

export default LangaugeSelectionMenu;
