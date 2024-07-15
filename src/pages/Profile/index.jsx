import { Container, Form, Avatar } from "./styled";
import { FiArrowLeft, FiMail, FiUser, FiLock, FiCamera} from "react-icons/fi";
import { Input } from "../../components/Input";
import { Button } from "../../components/button";

import { Link } from "react-router-dom";


export function Profile(){
  return(
    <Container>
      <header>
        <Link to="/">
          <FiArrowLeft/>
        </Link>
      </header>
      <Form>
        <Avatar>
          <img src="https://github.com/Braido350.png" alt="Foto do usuário" />
          <label htmlFor="avatar">
            <FiCamera/>
            <input
             id= "avatar" type="file"
            />
          </label>

        </Avatar>
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
          placeholder= "Senha Atual"
          type="password"
          icon={ FiLock }
        />
        <Input
          placeholder= "Nova Senha"
          type="password"
          icon={ FiLock }
        />

        <Button title="Salvar"/>

      </Form>
    </Container>
  );
}