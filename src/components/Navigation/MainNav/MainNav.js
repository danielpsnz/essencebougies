import PropTypes from "prop-types";

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const MainNav = ({ items, classNameDiv }) => (
    <div className={classNameDiv}>
        {items.map((item) => (
            <a
                key={item.label}
                href={item.url}
                aria-current={item.current ? 'page' : undefined}
                className={classNames(
                item.current ? 'bg-gray-300 dark:bg-gray-900 text-black dark:text-white' : 'text-gray-900 dark:text-gray-100 hover:bg-gray-300 dark:hover:bg-slate-600 hover:text-black dark:hover:text-white',
                'rounded-md px-3 py-2 text-sm font-medium',
                )}
            >
                {item.label}
            </a>
        ))}
    </div>
);

MainNav.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            url: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            current: PropTypes.bool,
        })
    ).isRequired,
    classNameDiv: PropTypes.string.isRequired,
};

export default MainNav;