import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Signup.css";
import { USERS } from "../../Data/Utilisateur";

export default function Inscrire() {
  const [prenom, setPrenom] = useState("");
  const [courriel, setCourriel] = useState("");
  const [motDePasse, setMotDePasse] = useState("");
  const [typeUtilisateur, setTypeUtilisateur] = useState("Candidat"); // Par défaut, "Candidat"
  const [emailError, setEmailError] = useState("");
  const navigate = useNavigate();

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
      type: typeUtilisateur,
    };

    USERS.push(newUser);
    alert("Compte créé avec succès !");
    navigate("/dashboard");
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
        <div className="screen__content signup">
          <form onSubmit={authSubmitHandler} className="login">
            <h2>Page d'inscription</h2>

            {/* Champs pour le prénom */}
            <div className="control-row">
              <label htmlFor="Prenom">Prenom</label>
              <input
                type="text"
                id="Prenom"
                name="Prenom"
                value={prenom}
                onChange={(e) => setPrenom(e.target.value)}
                required
              />
            </div>

            {/* Champs pour le courriel */}
            <div className="control-row">
              <label htmlFor="courriel">Courriel</label>
              <input
                id="courriel"
                type="text"
                name="courriel"
                value={courriel}
                onChange={handleCourrielChange}
                required
              />
              {emailError && <p className="error">{emailError}</p>}
            </div>

            {/* Champs pour le mot de passe */}
            <div className="control-row">
              <label htmlFor="MotDePasse">Mot de passe</label>
              <input
                id="MotDePasse"
                type="password"
                name="MotDePasse"
                value={motDePasse}
                onChange={(e) => setMotDePasse(e.target.value)}
                required
              />
            </div>

            {/* Choix entre Entreprise et Candidat */}
            <div className="control-row">
              <label>Type d'utilisateur</label>
              <div className="control">
                <input
                  type="radio"
                  id="Candidat"
                  name="typeUtilisateur"
                  value="Candidat"
                  checked={typeUtilisateur === "Candidat"}
                  onChange={(e) => setTypeUtilisateur(e.target.value)}
                />
                <label htmlFor="Candidat">Candidat</label>
              </div>
              <div className="control">
                <input
                  type="radio"
                  id="Entreprise"
                  name="typeUtilisateur"
                  value="Entreprise"
                  checked={typeUtilisateur === "Entreprise"}
                  onChange={(e) => setTypeUtilisateur(e.target.value)}
                />
                <label htmlFor="Entreprise">Entreprise</label>
              </div>
            </div>

            {/* Champs supplémentaires pour Entreprise */}
            {typeUtilisateur === "Entreprise" && (
              <div className="control-row">
                <label htmlFor="NomEntreprise">Nom de l'Entreprise</label>
                <input
                  type="text"
                  id="NomEntreprise"
                  name="NomEntreprise"
                  required
                />
              </div>
            )}

            <div className="form-actions">
              <button type="submit" className="button login__submit">
                Inscrire
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
