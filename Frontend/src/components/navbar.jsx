import React from "react";
import { NavLink, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faClapperboard } from "@fortawesome/free-solid-svg-icons";
import "../css/navbar.css";

const NavBar = ({ user }) => {
  library.add(faClapperboard);
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand mb-0 h1 " to="/">
          <FontAwesomeIcon
            icon={faClapperboard}
            className="d-inline-block align-top"
            width="30"
            height="30"
          />
          Vidly
        </Link>
        {/* <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="nabar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link active" to="/movies">
            Movies
          </NavLink>
        </li>
      </ul>
    </div>
  </div> */}
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-between"
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav">
            <NavLink className="nav-item nav-link" to="/movies">
              Movies
            </NavLink>
            <NavLink className="nav-item nav-link" to="/customers">
              Watchlist
            </NavLink>
            <NavLink className="nav-item nav-link" to="/rentals">
              Top
            </NavLink>
          </div>
          <div className="navbar-nav">
            {user && <span className="navbar-text">Welcome,</span>}
            {!user && (
              <>
                <NavLink className="nav-item nav-link" to="/login">
                  Login
                </NavLink>
                <NavLink className="nav-item nav-link" to="/register">
                  Register
                </NavLink>
              </>
            )}
            {user && (
              <>
                <NavLink className="nav-item nav-link" to="/profile">
                  {user.name}
                </NavLink>
                <NavLink className="nav-item nav-link" to="/logout">
                  Logout
                </NavLink>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

// class NavBar extends Component {
//   state = {};
//   render() {
//     library.add(faClapperboard);
//     const { user } = this.props;
//     return (
//       <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
//         <div className="container-fluid">
//           <Link className="navbar-brand mb-0 h1 " to="/">
//             <FontAwesomeIcon
//               icon={faClapperboard}
//               className="d-inline-block align-top"
//               width="30"
//               height="30"
//             />
//             Vidly
//           </Link>
//           {/* <div className="collapse navbar-collapse" id="navbarSupportedContent">
//             <ul className="nabar-nav me-auto mb-2 mb-lg-0">
//               <li className="nav-item">
//                 <NavLink className="nav-link active" to="/movies">
//                   Movies
//                 </NavLink>
//               </li>
//             </ul>
//           </div>
//         </div> */}
//           <button
//             className="navbar-toggler"
//             type="button"
//             data-toggle="collapse"
//             data-target="#navbarNavAltMarkup"
//             aria-controls="navbarNavAltMarkup"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div
//             className="collapse navbar-collapse justify-content-between"
//             id="navbarNavAltMarkup"
//           >
//             <div className="navbar-nav">
//               <NavLink className="nav-item nav-link" to="/movies">
//                 Movies
//               </NavLink>
//               <NavLink className="nav-item nav-link" to="/customers">
//                 Watchlist
//               </NavLink>
//               <NavLink className="nav-item nav-link" to="/rentals">
//                 Top
//               </NavLink>
//             </div>
//             <div className="navbar-nav">
//               {user && <span className="navbar-text">Welcome,</span>}
//               {!user && (
//                 <>
//                   <NavLink className="nav-item nav-link" to="/login">
//                     Login
//                   </NavLink>
//                   <NavLink className="nav-item nav-link" to="/register">
//                     Register
//                   </NavLink>
//                 </>
//               )}
//               {user && (
//                 <>
//                   <NavLink className="nav-item nav-link" to="/profile">
//                     {user.name}
//                   </NavLink>
//                   <NavLink className="nav-item nav-link" to="/logout">
//                     Logout
//                   </NavLink>
//                 </>
//               )}
//             </div>
//           </div>
//         </div>
//       </nav>
//     );
//   }
// }

// export default NavBar;
