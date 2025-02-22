import { Container, Form, Background } from "./styles";

import { Input } from '../../components/Input'
import { Button } from '../../components/button'
import { Link } from "react-router-dom";


import {FiUser, FiMail, FiLock} from 'react-icons/fi'

export function SignUp(){
  return(
    <Container>
      <Background/>
        <Form>
          <h1>Rocket Notes</h1>
          <p>Aplicação para salvar e gerenciar seus links úteis.</p>

          <h2>Crie sua conta</h2>
            <Input
              placeholder= "Name"
              type="text"
              icon={ FiUser }
            />
            <Input
              placeholder= "E-mail"
              type="text"
              icon={ FiMail }
            />
            <Input
              placeholder= "Senha"
              type="password"
              icon={ FiLock }
            />

            <Button title='Cadastrar'/>

            <Link to="/">
              Voltar para o login
            </Link>
            </Form>
    </Container>
  );
};