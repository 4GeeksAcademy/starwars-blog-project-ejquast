import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/" className="navbar-brand ms-5">
          		<img src="https://seeklogo.com/images/S/Star_Wars-logo-97DD55947B-seeklogo.com.png" alt="Logo" className="img-fluid" style={{ maxWidth: '100px' }} />
        	</Link>
			<div className="ml-auto">
				<Link to="/demo">
					<div class="btn-group me-5" role="group">
						<button type="button" class="btn btn-primary dropdown-toggle btn-lg" data-bs-toggle="dropdown" aria-expanded="false">Favorites</button>
						<ul class="dropdown-menu">
							<li><a class="dropdown-item" href="#">Favorite</a></li>
						</ul>
					</div>
				</Link>
			</div>
		</nav>
	);
};
