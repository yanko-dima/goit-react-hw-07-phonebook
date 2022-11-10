import PropTypes from 'prop-types';
import css from 'components/Layout/Layout.module.css';

export const Layout = ({ children }) => {
  return <section className={css.container}>{children}</section>;
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
