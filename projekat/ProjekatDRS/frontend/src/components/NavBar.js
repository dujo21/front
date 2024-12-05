import React from "react";
import "../styles/NavBar.css"; 
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const NavBar = ({ isAuthenticated, onLogout }) => {
    const [showLoginModal, setShowLoginModal] = useState(false);
    const navigate = useNavigate(); // Hook za navigaciju

    const handleLogout = () => {
        onLogout(); // Funkcija za odjavu prosleđena kroz props
      };

    const handleRegisterRedirect = () => {
        navigate("/register"); // Preusmeravanje na /register
    };

    return (
        <nav className="navbar">
          <div className="navbar-container">
            <div className="navbar-logo" onClick={() => navigate("/")}>
              Crypto Portfolio
            </div>
            <div className="navbar-links">
              {isAuthenticated ? (
                <>
                  <button onClick={handleLogout} className="btn btn-logout">
                    Odjavi se
                  </button>
                </>
              ) : (
                <>
                  <button
                    onClick={() => setShowLoginModal(true)}
                    className="btn btn-login"
                  >
                    Prijavi se
                  </button>
                </>
              )}
            </div>
          </div>
    
          {/* Modal za prijavu */}
          {showLoginModal && (
            <div className="modal">
              <div className="modal-content">
                <span
                  className="close"
                  onClick={() => setShowLoginModal(false)}
                >
                  &times;
                </span>
                <h2>Prijava</h2>
                <input type="email" placeholder="Email" id="loginEmail" />
                <input
                  type="password"
                  placeholder="Lozinka"
                  id="loginPassword"
                />
                <button
                  className="btn btn-submit"
                  onClick={() => {
                    // Dodaj logiku prijave
                    setShowLoginModal(false);
                  }}
                >
                  Prijavi se
                </button>
                <button
                  className="btn btn-secondary"
                  onClick={handleRegisterRedirect} // Preusmeravanje na stranicu za registraciju
                >
                  Registruj se
                </button>
              </div>
            </div>
          )}
        </nav>
      );


};
 
export default NavBar;