import PropTypes from "prop-types";

const SocialNav = ({ items }) => (
    <nav className="flex space-x-4">
        {items.map(({ url, icon, label }) => (
            <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                key={label}
                className="flex items-center space-x-2"
            >
                {icon}
                <span className="hidden lg:inline">{label}</span>
            </a>
        ))}
    </nav>
);

SocialNav.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            url: PropTypes.string.isRequired,
            icon: PropTypes.node.isRequired,
            label: PropTypes.string.isRequired
        })
    ).isRequired
};

export default SocialNav;