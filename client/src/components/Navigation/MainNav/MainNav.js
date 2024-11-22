import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./MainNav.module.css";

const MainNav = ({ items }) => (
    <Nav className={styles.mainNav}>
        {items.map((item) => (
            <Nav.Link
                as={Link}
                to={item.url}
                key={item.label}
                className={item.mobileOnly ? styles.mobileOnly : ""}
            >
                {item.label}
            </Nav.Link>
        ))}
    </Nav>
);

MainNav.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            url: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            mobileOnly: PropTypes.bool,
        })
    ).isRequired,
};

export default MainNav;