import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { useHttpClient } from "../../hooks/http-hook";
import { AuthContext } from "../../context/AuthContext";

export default function Login() {
  const auth = useContext(AuthContext);
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [enteredValues, setEnteredValues] = useState({
    courriel: "",
    motDePasse: "",
  });

  // Gestion de la modification des champs
  const handleInputChange = (identifier, value) => {
    clearError();
    setEnteredValues((prevValue) => ({
      ...prevValue,
      [identifier]: value,
    }));
  };

  // Gestion de la soumission du formulaire de connexion
  const authSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      const response = await sendRequest(
        process.env.REACT_APP_BACKEND_API_URL + "/api/utilisateur/connexion", // Adapter l'URL selon tes routes
        "POST",
        JSON.stringify(enteredValues),
        {
          "Content-Type": "application/json",
        }
      );
      // Connexion et stockage du token
      auth.login(response.userId, response.token);
      localStorage.setItem("token", response.token);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={authSubmitHandler}>
      <h2>Formulaire de connexion</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="courriel">Adresse courriel :</label>
          <input
            id="courriel"
            type="text"
            name="courriel"
            onChange={(event) =>
              handleInputChange("courriel", event.target.value)
            }
            value={enteredValues.courriel}
            required
          />
        </div>

        <div className="control no-margin">
          <label htmlFor="motDePasse">Mot de passe :</label>
          <input
            id="motDePasse"
            type="password"
            name="motDePasse"
            onChange={(event) =>
              handleInputChange("motDePasse", event.target.value)
            }
            value={enteredValues.motDePasse}
            required
          />
        </div>
      </div>

      <p className="form-actions">
        <Link to="/signup">
          <button className="button button-flat">S'inscrire</button>
        </Link>
        <button className="button" type="submit">
          Se connecter
        </button>
      </p>
    </form>
  );
}
