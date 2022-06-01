import React from 'react'
import { 
    FooterContainer,
    FooterWrap, 
    FooterLinksContainer, 
    FooterLinksWrapper,  
    FooterLinkItems, 
    FooterLinkTitle, 
    FooterLink ,
    SocialMedia,
    SocialMediaWrap,
    SocialIcons,
    SocialIconLink,
    WebsiteRights    
} from './FooterElements';
import {
    FaFacebook,
    FaInstagram,
    FaTwitter,
    FaLinkedin
} from 'react-icons/fa'
import Feedback from "../Home/feedback/feedback";

const Footer = () => {
  return (
      <div>
    <FooterContainer>
        <FooterWrap>
            <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle> À propos</FooterLinkTitle>
                            <FooterLink to="/signin"> Comment ça marche? </FooterLink>
                            <FooterLink to="/signin"> Témoignage </FooterLink>
                            <FooterLink to="/signin"> Devenir jobber </FooterLink>
                            <FooterLink to="/signin">Trouver un Job </FooterLink>
                            <FooterLink to="/signin">Damander un service</FooterLink>
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTitle> Nos Services</FooterLinkTitle>
                            <FooterLink to="/signin"> Jardinage </FooterLink>
                            <FooterLink to="/signin"> Bricolage</FooterLink>
                            <FooterLink to="/signin"> Déménagement </FooterLink>
                            <FooterLink to="/signin">Ménage </FooterLink>
                            <FooterLink to="/signin">Peinture</FooterLink>
                            <FooterLink to="/signin">Accompagnement animaux</FooterLink>
                            <FooterLink to="/signin">Informatique</FooterLink>
                            <FooterLink to="/signin">Revêtement sol</FooterLink>
                    </FooterLinkItems>
             </FooterLinksWrapper>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle> Informations utiles </FooterLinkTitle>
                            <FooterLink to="/signin"> Contactez-nous </FooterLink>
                            <FooterLink to="/signin"> Centre d'aide</FooterLink>
                            <Feedback/>


                    </FooterLinkItems>
                    <FooterLinkItems>
                        
                        <FooterLinkTitle> Réseaux sociaux </FooterLinkTitle>
                          <FooterLink to="/signin"> Facebook </FooterLink>
                            
                            <FooterLink to="/signin"> Instagram </FooterLink>
                            
                            <FooterLink to="/signin"> Twitter </FooterLink>
                            
                            <FooterLink to="/signin"> LinkedIn </FooterLink>
                    </FooterLinkItems>
                </FooterLinksWrapper>
            </FooterLinksContainer>
        <SocialMedia>
             <SocialMediaWrap>
                 <WebsiteRights>
                     dolla © {new Date().getFullYear()} all rights reserved.
                 </WebsiteRights>
                <SocialIcons>
                    <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                        <FaFacebook /> 
                    </SocialIconLink>
                    <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                        <FaInstagram /> 
                    </SocialIconLink>
                    <SocialIconLink href="/" target="_blank" aria-label="Twitter">
                        <FaTwitter /> 
                    </SocialIconLink>
                    <SocialIconLink href="/" target="_blank" aria-label="Linkedin">
                        <FaLinkedin /> 
                    </SocialIconLink>
                </SocialIcons>
             </SocialMediaWrap>
        </SocialMedia>   
        </FooterWrap>   
    </FooterContainer>
    </div>
  )
}

export default Footer
