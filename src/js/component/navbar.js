import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
export const Navbar = () => {
  const { store, actions } = useContext(Context);
    const handleClick = (uid) => {
        actions.removeFavorite(uid);
    }
  return (
    <nav className="navbar navbar-light bg-light fixed-top mb-3">
      <Link to="/" className="navbar-brand ms-5">
        <img
          src="https://seeklogo.com/images/S/Star_Wars-logo-97DD55947B-seeklogo.com.png"
          alt="Logo"
          className="img-fluid"
          style={{ maxWidth: '100px' }}
        />
      </Link>
      <div className="ml-auto">
        <div className="btn-group me-5" role="group">
          <button type="button" className="btn btn-primary dropdown-toggle btn-lg" data-bs-toggle="dropdown" aria-expanded="false">
            Favorites <span className="badge bg-secondary">{store.favorites.length}</span>
          </button>
          <ul className="dropdown-menu dropdown-menu-end">
            {store.favorites && store.favorites.length > 0 ? (
              store.favorites.map((favorite) => (
                <li key={favorite.uid} className="dropdown-item d-flex justify-content-between align-items-center">
                  {favorite.category === "people" && (
                  <Link to={`/character/${favorite.uid}`}>
                    {favorite.name}
                  </Link>
                )}
                {favorite.category === "starships" && (
                  <Link to={`/starship/${favorite.uid}`}>
                    {favorite.name}
                  </Link>
                )}
                {favorite.category === "planets" && (
                  <Link to={`/planet/${favorite.uid}`}>
                    {favorite.name}
                  </Link>
                )}
                  <i className="fas fa-trash-alt ms-2" onClick={() => handleClick(favorite.uid)} style={{ cursor: 'pointer' }}></i>
                </li>
              ))
            ) : (
              <li><span className="dropdown-item text-center">(empty)</span></li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
