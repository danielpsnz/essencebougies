import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import Home from "../../../pages/Home";

const Logo = ({ src, alt, className }) => (
    <Link to={Home}>
        <img src={src} alt={alt} className={className}/>
    </Link>
);

Logo.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired,
};

export default Logo;