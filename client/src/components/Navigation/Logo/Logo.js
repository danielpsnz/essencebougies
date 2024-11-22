import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./Logo.module.css";

const Logo = ({ src, alt, width }) => (
    <Link to="/" className={styles.logo}>
        <img src={src} alt={alt} width={width} />
    </Link>
);

Logo.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    width: PropTypes.number,
};

Logo.defaultProps = {
    width: 150,
};

export default Logo;
