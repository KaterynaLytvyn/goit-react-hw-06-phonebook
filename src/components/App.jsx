import ContactForm from "components/ContactForm/ContactForm";
import Filter from "components/Filter/Filter";
import ContactList from 'components/ContactList/ContactList';
import { useSelector } from "react-redux";

const App = () => {


  const contacts = useSelector(state => state.contacts.items)
  const filter = useSelector(state => state.contacts.filter)


  const getVisibleContacts = () => {
    const normilizedFilter = filter.toLowerCase();

    const result = contacts.filter(contact => contact.name.toLowerCase().includes(normilizedFilter))
    return result;
  }

  return (
    <div className="container">
      <h1>Phonebook</h1>
      <ContactForm/>

      <h2>Contacts</h2>
      <Filter filter={filter}/>
      <ContactList contacts={getVisibleContacts()}/>
    </div>
  )
}

export default App;
