import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getContacts } from 'redux/selectors';
import { addContact } from 'redux/operations';
import { Button } from 'components/Button/Button';
import css from 'components/ContactsForm/ContactsForm.module.css';

export const ContactsForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const contacts = useSelector(getContacts);

  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'phone':
        setPhone(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    const checkedContact = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (checkedContact) {
      // alert(`${name} is already in contacts`);
      toast.error(`Name: ${name} or Phone: ${phone} is already in contacts`);
    } else {
      dispatch(addContact({ name, phone }));
      reset();
    }
  };

  const reset = () => {
    setName('');
    setPhone('');
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label className={css.field}>
        <span className={css.label}>{'Name'}</span>

        <input
          className={css.input}
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label className={css.field}>
        <span className={css.label}>{'Phone'}</span>

        <input
          className={css.input}
          type="tel"
          name="phone"
          value={phone}
          onChange={handleChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <Button type="submit">Add contact</Button>
    </form>
  );
};
