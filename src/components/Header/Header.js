import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiOutlineWhatsApp, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () =>  (
<Container>
  <Div1>
    <Link href='/'>
      <a style={{ display: 'flex', alignItems: 'center', color: 'white', marginBottom: '20px' }}>
        <DiCssdeck size="3rem"/><Span>Tomas Hoffer</Span>
      </a>
    </Link>
  </Div1>
  <Div2>
    <li>
    <Link href="#projects">
        <NavLink>Projects</NavLink>
      </Link>
    </li>      
    <li>
    <Link href="#tech">
        <NavLink>Technologies</NavLink>
      </Link>
    </li>      
    <li>
    <Link href="#about">
        <NavLink>About</NavLink>
      </Link>
    </li>      
    <li>
    <Link href="#">
       <a href="../doc/resume.pdf" download>Download CV</a>
      </Link>
    </li>      
  </Div2>
  <Div3>
    <SocialIcons href="https://github.com/tomashoffer" target='_blank'>
      <AiFillGithub size='3rem'/>
    </SocialIcons>
    <SocialIcons href="https://www.linkedin.com/in/tomashoffer/" target='_blank'>
      <AiFillLinkedin size='3rem'/>
    </SocialIcons>
    <SocialIcons href='https://wa.me/+972546654361' target='_blank'>
      <AiOutlineWhatsApp size='3rem'/>
    </SocialIcons>
  </Div3>
</Container>

);

export default Header;
