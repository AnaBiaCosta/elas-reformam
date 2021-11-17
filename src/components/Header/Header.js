import React from 'react'
import { Link } from 'react-router-dom'
import { brandMini, headerAvatar } from '../../assets/images'
import {
  Wrapper,
  Nav,
  Avatar
} from './Header.styled'

const Header = () => (
  <Wrapper>
    <img src={brandMini} alt="Elas Reformam" />

    <Nav>
      <Link to="/buscar">Buscar profissional</Link>
      <Avatar src={headerAvatar} alt="Avatar" />
    </Nav>
  </Wrapper>
)

export { Header }
