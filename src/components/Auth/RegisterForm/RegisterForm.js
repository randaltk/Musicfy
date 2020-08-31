import React from "react";
import { Button, Icon, Form, Input } from "semantic-ui-react";
import firebase from "./../../../utils/firebase";
import "firebase/auth";
import "./RegisterForm.scss";

export default function RegisterForm() {
  const { setSelectedForm } = props;

  const onSubmit = () => {
    console.log("Formulario enviado !");
  };

  return (
    <div className="register-form">
      <h1>Comece a escutar com uma conta Muscify gratis !</h1>
      <Form onSubmit={onSubmit}>
        <Form.Field>
          <Input
            type="text"
            name="email"
            placeholder="Correio eletronico"
            icon="mail outline"
            // onChange= ''
            //error = ''
          />
        </Form.Field>
        <Form.Field>
          <Input
            type="password"
            name="password"
            placeholder="Contrasenha"
            icon="eye"
            // onChange= ''
            //error = ''
          />
        </Form.Field>
        <Form.Field>
          <Input
            type="text"
            name="username"
            placeholder="Como devemos te chamar?"
            icon="user circle outline"
            // onChange= ''
            //error = ''
          />
        </Form.Field>
        <Button type="submit">Continuar</Button>
      </Form>

      <div className="register-form_options">
        <p>Voltar</p>
        <p>
          Ja tem Muscify? <span>Iniciar Sessão</span>
        </p>
      </div>
    </div>
  );
}
