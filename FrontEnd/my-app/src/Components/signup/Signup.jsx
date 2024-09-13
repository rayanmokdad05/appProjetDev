import React, { useState } from "react";
import "./Signup.css";
import { USERS } from "../../Data/Utilisateur";

export default function Inscrire() {
  const [prenom, setPrenom] = useState("");
  const [courriel, setCourriel] = useState("");
  const [motDePasse, setMotDePasse] = useState("");
  const [emailError, setEmailError] = useState("");

  const authSubmitHandler = (event) => {
    event.preventDefault();

    if (!courriel.includes("@")) {
      setEmailError("Le courriel doit contenir '@'");
      return;
    }
    setEmailError("");

    const newUser = {
      id_utilisateur: USERS.length + 1,
      prenom: prenom,
      email: courriel,
      mot_de_passe: motDePasse,
    };

    USERS.push(newUser);
    alert("Compte créé avec succès !");
  };

  const handleCourrielChange = (event) => {
    const { value } = event.target;
    setCourriel(value);
    if (!value.includes("@")) {
      setEmailError("Le courriel doit contenir '@'");
    } else {
      setEmailError("");
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

        <div className="screen__content signup">
          <form onSubmit={authSubmitHandler} className="login">
            <h2>Page d'inscription</h2>

            <div className="control-row">
              <div className="control">
                <label htmlFor="Prenom">Prenom</label>
                <input
                  type="text"
                  id="Prenom"
                  name="Prenom"
                  className="login__input"
                  value={prenom}
                  onChange={(e) => setPrenom(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="control">
              <label htmlFor="courriel">Courriel</label>
              <input
                id="courriel"
                type="text"
                name="courriel"
                className="login__input"
                required
                value={courriel}
                onChange={handleCourrielChange}
              />
              {emailError && <p className="error">{emailError}</p>}
            </div>

            <div className="control-row">
              <div className="control">
                <label htmlFor="MotDePasse">Mot de passe</label>
                <input
                  id="MotDePasse"
                  type="password"
                  name="MotDePasse"
                  className="login__input"
                  value={motDePasse}
                  onChange={(e) => setMotDePasse(e.target.value)}
                  required
                />
              </div>
            </div>

            <p className="form-actions">
              <button type="submit" className="button login__submit">
                Inscrire
              </button>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
