import { useState, useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import PhonebookForm from './components/phonebookForm';
import ContactsList from './components/contacts/contactsList';
import ContactsFilter from './components/contacts/contactsFilter';
import ThemeSwitch from './components/themeSwitch';
import {
  Wrapper,
  Title,
  ContactsContainer,
  ContactsTitle,
  PartsOfWord,
  PhonebookFormWrapper,
} from './App.styled';
import { GlobalStyle } from './GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { theme } from './constantStyles/theme';

export default function App() {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');
  const [themeStyle, setThemeStyle] = useState(
    () => localStorage.getItem('themeStyle') || 'light',
  );

  useEffect(() => {
    try {
      const contacts = localStorage.getItem('contacts');
      const parsedContacts = JSON.parse(contacts);

      if (parsedContacts) {
        setContacts(parsedContacts);
      }
    } catch {
      toast.error('Something is wrong', {
        style: {
          border: '1px solid #E8301C',
          color: '#E8301C',
        },
      });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
    localStorage.setItem('themeStyle', themeStyle);
  }, [contacts, themeStyle]);

  const ThemeChange = checked => {
    checked ? setThemeStyle('dark') : setThemeStyle('light');
  };
  const compareNames = name => {
    const normalizeName = name.toLowerCase();
    return contacts.some(
      contact => contact.name.toLowerCase() === normalizeName,
    );
  };
  const addContact = contact => {
    if (compareNames(contact.name)) {
      toast.error(`${contact.name} is already in contacts`, {
        style: {
          border: '1px solid #E8301C',
          color: '#E8301C',
        },
      });
      return;
    }
    setContacts(state => [contact, ...state]);

    toast.success(`Contact ${contact.name} added!`, {
      style: {
        border: '1px solid #49FF71',
      },
    });
  };

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const findContacs = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };

  const deleteContact = id => {
    setContacts(state => state.filter(contact => contact.id !== id));
    toast.success(`Contact deleted!`, {
      style: {
        border: '1px solid #49FF71',
      },
    });
  };

  return (
    <>
      <ThemeProvider theme={theme[themeStyle]}>
        <GlobalStyle />
        <Wrapper>
          <PhonebookFormWrapper>
            <ThemeSwitch themeChange={ThemeChange} />
            <Title>
              Phone
              <PartsOfWord>book</PartsOfWord>
            </Title>
            <PhonebookForm onSubmit={addContact} />
          </PhonebookFormWrapper>
          <ContactsContainer>
            <ContactsTitle>Contacts</ContactsTitle>
            <ContactsFilter value={filter} onChange={changeFilter} />
            <ContactsList
              filteredContacts={findContacs()}
              deleteContact={deleteContact}
            />
          </ContactsContainer>
          <Toaster position="bottom-center" reverseOrder={false} />
        </Wrapper>
      </ThemeProvider>
    </>
  );
}
