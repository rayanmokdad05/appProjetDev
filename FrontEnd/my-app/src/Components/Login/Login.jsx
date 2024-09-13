import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import { USERS } from "../../Data/Utilisateur";

export default function Connexion({ onLogin }) {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const navigate = useNavigate();

  const authSubmitHandler = (event) => {
    event.preventDefault();
    if (!enteredEmail.includes("@")) {
      setEmailError("Le courriel doit contenir '@'");
      return;
    }
    setEmailError("");

    const user = USERS.find(
      (user) =>
        user.email === enteredEmail && user.mot_de_passe === enteredPassword
    );

    if (user) {
      onLogin(user);
      navigate(`/profile/${user.id_utilisateur}`, { state: { user } });
    }
  };

  return (
    <div className="container">
      <div className="screen">
        <div className="screen__background">
          <div className="screen__background__shape screen__background__shape1"></div>
          <div className="screen__background__shape screen__background__shape2"></div>
          <div className="screen__background__shape screen__background__shape3"></div>
          <div className="screen__background__shape screen__background__shape4"></div>
        </div>

        <div className="screen__content">
          <form onSubmit={authSubmitHandler} className="login">
            <h2 className="active">Connexion</h2>

            <div className="control-row">
              <div className="control no-margin login__field">
                <label htmlFor="couriel">Courriel</label>
                <input
                  id="couriel"
                  type="text"
                  name="couriel"
                  className="login__input"
                  required
                  value={enteredEmail}
                  onChange={(e) => setEnteredEmail(e.target.value)}
                />
                {emailError && <p className="error-message">{emailError}</p>}
              </div>

              <div className="control no-margin login__field">
                <label htmlFor="MotDePasse">Mot de passe</label>
                <input
                  id="MotDePasse"
                  type="password"
                  name="MotDePasse"
                  className="login__input"
                  value={enteredPassword}
                  onChange={(e) => setEnteredPassword(e.target.value)}
                  required
                />
              </div>
            </div>

            <p className="form-actions">
              <button className="button login__submit" type="submit">
                Se connecter
              </button>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
