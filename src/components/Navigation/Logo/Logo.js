import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Logo = ({ src, alt, className }) => (
    <Link to="/">
        <img src={src} alt={alt} className={className}/>
    </Link>
);

Logo.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired,
};

export default Logo;