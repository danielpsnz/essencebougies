// React y Librerías Externas
import React from "react";
import { Navbar, Container } from "react-bootstrap";
import { IoLogoInstagram, IoLogoTiktok } from "react-icons/io5";

// Recursos y Archivos Locales
import { Logo, MainNav, SocialNav, ThemeToggle } from "./index.js";
import LogoImage from "../../assets/images/Logo_empresa_principal.png";

const mainNavItems = [
    { url: "/", label: "Home", mobileOnly: true },
    { url: "/products", label: "Productos" },
    { url: "/the_essence", label: "The Essence" },
    { url: "/sobre_nosotros", label: "Sobre nosotros" }
];

const socialNavItems = [
    { url: "https://www.instagram.com/essence.bougies", icon: <IoLogoInstagram />, label: "Instagram" },
    { url: "https://www.tiktok.com/essencebougies", icon: <IoLogoTiktok />, label: "TikTok" }
];

const Navigation = () => {
    return (
        <Navbar expand="lg" className="py-3">
            <Container>
                <Logo src={LogoImage} alt="Logo de la empresa" />
                <Navbar.Toggle aria-controls="navbar-nav" />
                <Navbar.Collapse id="navbar-nav">
                    <MainNav items={mainNavItems} />
                    <SocialNav items={socialNavItems} />
                    <ThemeToggle />
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navigation;