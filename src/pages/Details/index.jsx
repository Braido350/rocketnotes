import { Container, Links, Content } from "./styles";
import { Header } from "../../components/header";
import { Button } from "../../components/button";
import { Section } from "../../components/Section";
import { Tag } from "../../components/Tag"
import { ButtonText } from "../../components/ButtonText";

export function Details() {

  return (
    <Container>
      <Header/>

      <main>
        <Content>
        <ButtonText title="Excuir nota"/>

        <h1>Introdução ao React</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque, rerum hic porro quae architecto voluptate amet possimus! Ad exercitationem impedit magnam veritatis eum, rem mollitia laborum iste. Eligendi, expedita porro. Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus atque consequatur expedita totam doloremque, cupiditate sequi? Ipsam nam, natus itaque architecto laboriosam provident, et praesentium iste excepturi, a laborum temporibus!</p>

        <Section title="Links Úteis">
          <Links>
          <li><a href="#">https://www.rocketseat.com.br</a></li>
          <li><a href="#">https://www.rocketseat.com.br</a></li>
          </Links>
        </Section>

        <Section title= "Marcadores">
          <Tag title="express" />
          <Tag title="nodeJs" />
        </Section>

        <Button title="Voltar"/>
      </Content>
      </main>
    </Container>
  )
};
