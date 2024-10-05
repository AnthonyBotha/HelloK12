// frontend/src/components/Navigation/Navigation.jsx

import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';

function Navigation({ isLoaded }) {
  const sessionUser = useSelector(state => state.session.user);

  return (
    <div className="navigation-bar">
      <div className="logo">
        <NavLink to="/"><img src={"https://res.cloudinary.com/dmg8yuivs/image/upload/v1722723783/ant_mneaqz.png"} alt="Home"/></NavLink>
      </div>
      {isLoaded && (
        <div className="profile-container">
          <ProfileButton user={sessionUser} />
        </div>
      )}
    </div>
  );
}

export default Navigation;