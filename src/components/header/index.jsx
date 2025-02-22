import { RiShutDownLine } from 'react-icons/ri';

import { Container, Profile, Logout } from "./styles";

export function Header(){
  return(
    <Container>
      <Profile to="/profile">
        <img
          src="https://github.com/Braido350.png"
          alt="Foto do Usuário"
        />

        <div>
          <span>Bem-Vindo</span>
          <strong>Paulo Gabriel</strong>
        </div>
      </Profile>

      <Logout>
        <RiShutDownLine/>
      </Logout>
    </Container>
  )
}
