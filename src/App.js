import React, { Component } from 'react';
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

class App extends Component {
  state = {
    contacts: [],
    filter: '',
    themeStyle: 'light',
  };
  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

    const themeStyle = localStorage.getItem('themeStyle');

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
    if (themeStyle) {
      this.setState({ themeStyle: themeStyle });
    }
  }
  componentDidUpdate(prevProps, prevState) {
    const nextContacts = this.state.contacts;
    const prevContacts = prevState.contacts;
    const nextThemeStyle = this.state.themeStyle;
    const prevThemeStyle = prevState.themeStyle;
    if (nextContacts !== prevContacts) {
      localStorage.setItem('contacts', JSON.stringify(nextContacts));
    }
    if (nextThemeStyle !== prevThemeStyle) {
      localStorage.setItem('themeStyle', nextThemeStyle);
    }
  }
  ThemeChange = checked => {
    checked
      ? this.setState({ themeStyle: 'dark' })
      : this.setState({ themeStyle: 'light' });
  };

  compareNames = name => {
    const normalizeName = name.toLowerCase();
    return this.state.contacts.some(
      contact => contact.name.toLowerCase() === normalizeName,
    );
  };

  addContact = contact => {
    if (this.compareNames(contact.name)) {
      toast.error(`${contact.name} is already in contacts`, {
        style: {
          border: '1px solid #E8301C',
          color: '#E8301C',
        },
      });
      return;
    }

    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));

    toast.success(`Contact ${contact.name} added!`, {
      style: {
        border: '1px solid #49FF71',
      },
    });
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  findContacs = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
    toast.success(`Contact deleted!`, {
      style: {
        border: '1px solid #49FF71',
      },
    });
  };

  render() {
    const { filter, themeStyle } = this.state;

    return (
      <>
        <ThemeProvider theme={theme[themeStyle]}>
          <GlobalStyle />
          <Wrapper>
            <PhonebookFormWrapper>
              <ThemeSwitch themeChange={this.ThemeChange} />
              <Title>
                Phone
                <PartsOfWord>book</PartsOfWord>
              </Title>
              <PhonebookForm onSubmit={this.addContact} />
            </PhonebookFormWrapper>
            <ContactsContainer>
              <ContactsTitle>Contacts</ContactsTitle>
              <ContactsFilter value={filter} onChange={this.changeFilter} />
              <ContactsList
                filteredContacts={this.findContacs()}
                deleteContact={this.deleteContact}
              />
            </ContactsContainer>
            <Toaster position="bottom-center" reverseOrder={false} />
          </Wrapper>
        </ThemeProvider>
      </>
    );
  }
}

export default App;
