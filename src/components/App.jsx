import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { fetchContacts } from 'redux/operations';
import { getError, getIsLoading } from 'redux/selectors';
import { Layout } from './Layout/Layout';
import { ContactsForm } from './ContactsForm/ContactsForm';
import { Filter } from './Filter/Filter';
import { ContactsList } from './ContactsList/ContactsList';
import { SubTitle, Title } from './Title/Title';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Layout>
        <Title>Phone Book</Title>
        <ContactsForm />
        <SubTitle>Contacts</SubTitle>
        <Filter />
        {isLoading && !error && <p>Loading ...</p>}
        {/* {error && !isLoading && <p>{error}</p>} */}
        <ContactsList />
      </Layout>
      <ToastContainer />
    </>
  );
};
