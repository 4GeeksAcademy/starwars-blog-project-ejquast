import React from "react";
import { Link } from "react-router-dom";
import { useFavorites } from "../component/FavoritesContext";

export const Navbar = () => {
  const { favorites } = useFavorites();

  return (
    <nav className="navbar navbar-light bg-light mb-3">
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
          <button
            type="button"
            className="btn btn-primary dropdown-toggle btn-lg"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Favorites <span className="badge bg-secondary">{favorites.length}</span>
          </button>
          <ul className="dropdown-menu">
            {favorites.length > 0 ? (
              favorites.map((item, index) => (
                <li key={index}>
                  <Link to={`/details/${item}`} className="dropdown-item">{item}</Link>
                </li>
              ))
            ) : (
              <li>
                <span className="dropdown-item">No favorites selected</span>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

