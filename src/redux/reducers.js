import { createReducer } from '@reduxjs/toolkit';
import { addContact, deleteContact, filterContacts } from './actions';
import { nanoid } from 'nanoid'

const initialState = {
  items: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
  filter: ''
}

  const addContactReducer = (state, action) => {

    const contact = action.payload
    const contacts = state.items

    if(contacts.some(c => c.name === contact.name)) {
      alert(contact.name +' is already in contacts')
      return state
    }

    const newContact = {
      id: nanoid(),
      name: contact.name,
      number: contact.number,
    }

    state.items = [...contacts, newContact]

    return state
  }

  const deleteContactReducer = (state, action) => {

    const contactId = action.payload
    const newItems = state.items.filter(contact => contact.id !== contactId)
    state.items = newItems
    return state
  }

  const filterContactsReducer = (state, action) => {

    state.filter = action.payload
    return state
  }


export const contactsReducer = createReducer(initialState,{
    [addContact.type]: addContactReducer, 
    [deleteContact]: deleteContactReducer,
    [filterContacts]: filterContactsReducer,
})

