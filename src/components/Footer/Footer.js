import React from 'react';
import { AiFillGithub, AiOutlineWhatsApp, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
  <FooterWrapper>
    <LinkList>
      <LinkColumn>
        <LinkTitle>Phone</LinkTitle>
        <LinkItem href="tel:+972 54-665-4361">+972 54-665-4361</LinkItem>
      </LinkColumn>
      <LinkColumn>
        <LinkTitle>Email</LinkTitle>
        <LinkItem href="mailto:tomashoffer96@gmail.com">tomashoffer96@gmail.com</LinkItem>
      </LinkColumn>
      <LinkColumn>
        <LinkTitle>Location</LinkTitle>
        <LinkItem>Tel Aviv, Israel</LinkItem>
      </LinkColumn>
      <LinkColumn>
        <LinkTitle>Languages</LinkTitle>
        <LinkItem>Spanish (native) <br />
                  English (fluent) <br />
                  Portuguese (basic)
         </LinkItem>
      </LinkColumn>
    </LinkList>
    
    <SocialIconsContainer>
      {/* <CompanyContainer>
        <Slogan>Si quiero poner un slogan</Slogan>
      </CompanyContainer> */}
      <SocialContainer>
        <SocialIcons href="https://github.com/tomashoffer" target='_blank'>
        <AiFillGithub size='3rem'/>
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/tomashoffer/" target='_blank'>
        <AiFillLinkedin size='3rem'/>
      </SocialIcons>
      <SocialIcons href='https://wa.me/+972546654361' target='_blank'>
        <AiOutlineWhatsApp size='3rem'/>
      </SocialIcons>
    </SocialContainer>
    </SocialIconsContainer>
  </FooterWrapper>
  );
};

export default Footer;
