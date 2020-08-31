import React from "react";
import "./AuthOptions.scss";
import { Button } from "semantic-ui-react";
export default function AuthOptions(props) {
  const { setSelectedForm } = props;
  return (
    <div className="auth-options">
      <h2>Milhões de canções, gratis no Musicfy</h2>
      <Button className="register" onClick={() => setSelectedForm("register")}>
        Registrar-se grátis
      </Button>
      <Button className="login" onClick={() => setSelectedForm("login")}>
        Iniciar sessão
      </Button>
    </div>
  );
}
