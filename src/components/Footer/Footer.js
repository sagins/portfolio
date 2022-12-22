import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
        <LinkTitle>Call</LinkTitle>
        <LinkItem href='tel:+1-226-507-6456'>+1-226-507-6456</LinkItem>
        </LinkColumn>
        <LinkColumn>
        <LinkTitle>Email</LinkTitle>
        <LinkItem href='mailto:iamemrehansagin@hotmail.com'>iamemrehansagin@hotmail.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>"We must all suffer one of two things: the pain of discipline, or the pain of regret or dissapointment."                           ~ Jim Rohn
          </Slogan>
        </CompanyContainer>
        <SocialContainer>
        <SocialIcons href='https://github.com/sagins'>
          <AiFillGithub size="3rem" />
        </SocialIcons>

        <SocialIcons href='https://www.linkedin.com/in/emrehan-sagin-440b21206/'>
          <AiFillLinkedin size="3rem" />
        </SocialIcons>

        <SocialIcons href='https://www.instagram.com/emrehansagin/'>
          <AiFillInstagram size="3rem" />
        </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
