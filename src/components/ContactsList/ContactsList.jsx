import { useSelector } from 'react-redux';
import { ContactsItem } from 'components/ContactsItem/ContactsItem';
import { getContacts, getFilterQuery } from 'redux/selectors';
import css from 'components/ContactsList/ContactsList.module.css';

export const ContactsList = () => {
  const contacts = useSelector(getContacts);
  const filterValue = useSelector(getFilterQuery);

  const getVisibleContacts = () => {
    const normalizedFilter = filterValue.toLowerCase();

    return contacts.filter(
      contact =>
        contact.name.toLowerCase().includes(normalizedFilter) ||
        contact.phone.includes(normalizedFilter)
    );
  };

  return (
    <ul className={css.contacts__list}>
      {getVisibleContacts().map(({ id, name, phone }) => (
        <ContactsItem key={id} id={id} name={name} phone={phone} />
      ))}
    </ul>
  );
};
