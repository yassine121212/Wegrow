import React from "react";
import Footer from '../components/Footer'


export function FooterContainer(){
    return(
        <Footer>
            <Footer.Wrapper>
                <Footer.Row>
                <Footer.Column>
                    <Footer.Title>About Us</Footer.Title>
                    <Footer.Link href="a"> Story </Footer.Link>
                    <Footer.Link href="a"> Clients </Footer.Link>
                    <Footer.Link href="a"> Testimonials</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                    <Footer.Title>Services</Footer.Title>
                    <Footer.Link href="a"> Marketing </Footer.Link>
                    <Footer.Link href="a"> Consulting </Footer.Link>
                    <Footer.Link href="a"> Design</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                    <Footer.Title>Contact Us</Footer.Title>
                    <Footer.Link href="a"> social </Footer.Link>
                    <Footer.Link href="a"> Facebook </Footer.Link>
                    <Footer.Link href="a"> Instagram</Footer.Link>
                    <Footer.Link href="a"> Youtube</Footer.Link>
                    <Footer.Link href="a"> Twitter</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                    <Footer.Title>Contact Us</Footer.Title>
                    <Footer.Link href="#"> social </Footer.Link>
                    <Footer.Link href="a"> Facebook </Footer.Link>
                    <Footer.Link href="a"> Instagram</Footer.Link>
                    <Footer.Link href="a"> Youtube</Footer.Link>
                    <Footer.Link href="a"> Twitter</Footer.Link>
                </Footer.Column>
            </Footer.Row>
        </Footer.Wrapper>
           
        </Footer>
    )
}