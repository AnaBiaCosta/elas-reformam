import React from 'react'
import { Link } from 'react-router-dom'
import {
  stars,
  toolsIcon
} from '../../assets/images'
import {
  Wrapper,
  Container,
  InfoContainer,
  Avatar,
  Name,
  Where,
  Paragraph,
  Value,
  Stars
} from './Card.style'

const Card = ({
  id,
  avatar,
  name,
  state,
  city,
  services,
  jobs,
  value
}) => {
  return (
    <Wrapper>
      <InfoContainer>
        <Avatar src={avatar} alt="Avatar" />

        <Container notCenter>
          <div>
            <Name>{name}</Name>
            <Where>
              Atende em:
              {state}
              ,
              {city}
            </Where>
            <Stars>
              <img src={stars} alt="Estrelas" />
            </Stars>
          </div>

          <Paragraph>
            <img src={toolsIcon} alt="Ícone de ferramentas" />
            {services}
          </Paragraph>
        </Container>
      </InfoContainer>

      <Container>
        <Paragraph>
          {jobs}
          trabalhos realizados
        </Paragraph>
        <Value>
          R$
          {value}
          / h
        </Value>
        <Link to={`/perfil/${id}`}>Entrar em contato</Link>
      </Container>
    </Wrapper>
  )
}

export { Card }
