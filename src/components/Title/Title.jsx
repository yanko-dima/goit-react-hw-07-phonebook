import css from './Title.module.css';

export const Title = ({ children }) => {
  return <h1 className={css.title}>{children}</h1>;
};

export const SubTitle = ({ children }) => {
  return <h2 className={css.subTitle}>{children}</h2>;
};
