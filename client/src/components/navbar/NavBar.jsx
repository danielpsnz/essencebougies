import * as React from "react";
// import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
//import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import MenuComponent from "@mui/material/Menu";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

//import AdbIcon from "@mui/icons-material/Adb";
//import MenuIcon from "@mui/icons-material/Menu";

import logo from "../images/Logo_empresa_principal.png";

import useHoverButtons from "../hooks/useHoverButtons";

// import { CardContext } from "../../context/CardContext";

import SwitchBtn from "../shoppingCart/SwitchBtn";

//const pages = ["NOSOTROS", "MATS", "ELEMENTOS YOGA", "ELEMENTOS MEDITACION"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

//const objectPages = Object.assign({}, pages);
//console.log(objectPages[0]);

function NavBar({ setDarkMode, darkMode }) {
  //const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const { isHover, handleMouseEnter, handleMouseLeave, buttonLogo } = useHoverButtons(false);

  //const { onProductAdded } = useContext(CardContext);

  // const handleOpenNavMenu = (event) => {
  //   setAnchorElNav(event.currentTarget);
  // };

  // const handleCloseNavMenu = () => {
  //   setAnchorElNav(null);
  // };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const styles = {
    imagenLogo: {
        width: "100px",
        backgroundColor: isHover ? "#EDF67D" : "#564592",
    },
  };

  return (
    <AppBar
        position="static"
        style={{
            backgroundColor: "#564592",
        }}
    >
        <Container maxWidth="xl">
            <Toolbar disableGutters>
                <Link
                    title="Página Principal"
                    to="/"
                    style={buttonLogo}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                <img
                    src={logo}
                    alt="Logo principal de Essence Bougies"
                    sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
                    style={styles.imagenLogo}
                />
                </Link>

                <Typography
                    variant="h6"
                    noWrap
                    component="a"
                    href="/"
                    sx={{
                        mr: 2,
                        display: { xs: "none", md: "flex" },
                        fontFamily: "Montserrat",
                        fontWeight: 700,
                        letterSpacing: ".3rem",
                        color: "inherit",
                        textDecoration: "none",
                    }}
                ></Typography>

                <Box
                    style={{
                        display: "flex",
                        justifyContent: "start",
                        //width: "100%",
                    }}
                >
                    <Button
                        style={{
                            backgroundColor: "#564592",
                            marginLeft: "10Px",
                            fontFamily: "Montserrat",
                        }}
                        variant="text"
                    >
                        <Link
                            title="Todos nuestros productos"
                            to={"/productos"}
                            variant="contained"
                            style={{
                                textDecoration: "none",
                                color: "white",
                                backgroundColor: "#564592",
                                marginLeft: "10Px",
                                fontFamily: "Montserrat",
                            }}
                        >
                            Productos
                        </Link>
                    </Button>

                    <Button
                        style={{
                            backgroundColor: "#564592",
                            marginLeft: "10Px",
                            fontFamily: "Montserrat",
                        }}
                        variant="text"
                    >
                        <Link
                            title="Nuestro blog"
                            to={"/the_essence"}
                            style={{ 
                                textDecoration: "none", 
                                color: "white" 
                            }}
                        >     
                            The Essence
                        </Link>
                    </Button>

                    <Button
                        style={{
                            backgroundColor: "#564592",
                            marginLeft: "10Px",
                            fontFamily: "Montserrat",
                        }}
                        variant="text"
                    >
                        <Link
                            title="Sobre nosotros"
                            to={"/sobre_nosotros"}
                            variant="contained"
                            style={{ 
                                textDecoration: "none", 
                                color: "white" 
                            }}
                        >
                            Sobre nosotros
                        </Link>
                    </Button>
                </Box>

                <Box
                    style={{
                        display: "flex",
                        justifyContent: "end",
                        textAlign: "center",
                        width: "40%",
                    }}
                >
                    <NavLink
                        title="Carrito de compras"
                        to={"/shoppingCart"}
                        style={{
                            backgroundColor: "#564592",
                            color: "white",
                            marginLeft: "10Px",
                            marginTop: "20px",
                            fontFamily: "Montserrat",
                            textDecoration: "none",
                        }}
                    >
                        <ShoppingCartOutlinedIcon />
                    </NavLink>

                    <Button
                        style={{
                            backgroundColor: "#564592",
                            marginLeft: "10Px",
                            fontFamily: "Montserrat",
                        }}
                        variant="text"
                    >
                        <NavLink
                            to={"/register"}
                            style={{
                                backgroundColor: "#564592",
                                color: "white",
                                marginLeft: "10Px",
                                fontFamily: "Montserrat",
                                textDecoration: "none",
                                //ration: "none",
                            }}
                        >
                            Registrarse
                        </NavLink>
                    </Button>

                    <Button
                        style={{
                            backgroundColor: "#564592",
                            marginLeft: "10Px",
                            fontFamily: "Montserrat",
                        }}
                        variant="text"
                        //onClick={}
                    >
                        <Link
                            title="LogIn"
                            to={"/login"}
                            style={{
                                backgroundColor: "#564592",
                                color: "white",
                                marginLeft: "10Px",
                                fontFamily: "Montserrat",
                                textDecoration: "none",
                            }}
                        >
                            Iniciar sesión
                        </Link>
                    </Button>

                    <Button
                        style={{
                            backgroundColor: "#564592",
                            marginLeft: "10Px",
                            fontFamily: "Montserrat",
                        }}
                        variant="text"
                    >
                        <SwitchBtn setDarkMode={setDarkMode} darkMode={darkMode} />
                    </Button>

                    <MenuComponent
                        sx={{ mt: "45px" }}
                        id="menu-appbar"
                        anchorEl={anchorElUser}
                        anchorOrigin={{
                            vertical: "top",
                            horizontal: "right",
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: "top",
                            horizontal: "right",
                        }}
                        open={Boolean(anchorElUser)}
                        onClose={handleCloseUserMenu}
                    >
                        {settings.map((setting) => (
                        <MenuItem key={setting} onClick={handleCloseUserMenu}>
                            <Typography textAlign="center">{setting}</Typography>
                        </MenuItem>
                        ))}
                    </MenuComponent>
                </Box>
            </Toolbar>
        </Container>
    </AppBar>
  );
}

export default NavBar;