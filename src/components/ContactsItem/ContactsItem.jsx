import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { MdClose } from 'react-icons/md';
import css from 'components/ContactsItem/ContactsItem.module.css';

export const ContactsItem = ({ id, name, phone }) => {
  const dispatch = useDispatch();
  const normaliseName = `${name[0].toUpperCase()}${name.slice(1)}`;

  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <li className={css.contacts__item}>
      <div className={css.wrapper}>
        <p className={css.text}>
          {normaliseName} | {phone}
        </p>
        <button className={css.btn} onClick={handleDelete}>
          <MdClose size={24} />
        </button>
      </div>
    </li>
  );
};

ContactsItem.propTypes = {
  name: PropTypes.string,
  phone: PropTypes.string,
  id: PropTypes.string,
};
