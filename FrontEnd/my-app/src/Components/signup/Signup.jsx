import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Signup.css";

export default function Inscrire() {
  const [prenom, setPrenom] = useState("");
  const [courriel, setCourriel] = useState("");
  const [motDePasse, setMotDePasse] = useState("");
  const [typeUtilisateur, setTypeUtilisateur] = useState("Candidat");
  const [emailError, setEmailError] = useState("");
  const navigate = useNavigate();

  const authSubmitHandler = async (event) => {
    event.preventDefault();
    if (!courriel.includes("@")) {
      setEmailError("Le courriel doit contenir '@'");
      return;
    }
    setEmailError("");

    const newUser = {
      nom: prenom,
      email: courriel,
      password: motDePasse,
      type: typeUtilisateur,
    };

    try {
      const response = await fetch("http://localhost:5000/api/utilisateur/inscription", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      });

      if (!response.ok) {
        throw new Error("Erreur lors de l'inscription");
      }

      const data = await response.json();
      alert("Compte créé avec succès !");
      navigate("/login");
    } catch (error) {
      console.error("Erreur lors de l'inscription :", error);
      alert("Erreur lors de l'inscription");
    }
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
