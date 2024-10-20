// frontend/src/components/Navigation/Navigation.jsx

import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import LangaugeSelectionMenu from './LanguageCourse';
import SiteLangaugeSelectionMenu from './SiteLanguage';
import ProfileButton from './ProfileButton';
import './Navigation.css';

function Navigation({ isLoaded }) {
  const sessionUser = useSelector(state => state.session.user);

  return (
    <div className="navigation-bar">
      <div className="left-section">
        <div className="logo">
          <NavLink to="/"><img src={"https://res.cloudinary.com/dmg8yuivs/image/upload/v1729371584/Logo_maker_project-6_vrboua.png"} alt="Home" /></NavLink>
        </div>
        <div className="menu-options-one">
          <div>Curriculum</div>
          <div>Progress</div>
          <div>
            <span>Learn</span>
            <span className="flag-icon"><LangaugeSelectionMenu /></span>
          </div>
        </div>
      </div>
      {isLoaded && (
        <div className="right-section">

          <SiteLangaugeSelectionMenu />

          <div className="profile-container">
            <ProfileButton user={sessionUser} />
          </div>

        </div>
      )}
    </div>
  );
}

export default Navigation;