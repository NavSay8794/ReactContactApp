// importing react and react hooks
import React, { useState, useEffect } from 'react';
import { uuid } from 'uuidv4'
import './App.css';

//importing router functionality
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//importing the api 
import api from './api/contacts'

//importing components
import Header from './components/Header';
import AddContact from './components/AddContact';
import ContactList from './components/ContactList';
import ContactDetails from './components/ContactDetails';
import EditContact from './components/EditContact';
// import ConfirmDelete from './components/ConfirmDelete';

function App() {

  //using useState Hook and setting initial state
  const [contacts, setContacts] = useState([])

  // when the form is submitted addContactHandler is run and 
  //it updates the parent component state from the child
  const addContactHandler = async (contact) => {
    const request = {
      id: uuid(), 
      ...contact 
    }

    const response = await api.post("/contacts" , request)
    setContacts([...contacts, response.data])
  }


  const updateContactHandler = async(contact)=>{
    const response = await api.put(`/contacts/${contact.id}`, contact)
    const {id , name, email, mobileNumber} = response.data
    setContacts(contacts.map((contact)=>{
       return contact.id === id? {...response.data}: contact
    }))
    // console.log(response.data)
  }

  //used for deleting the contact. 
  //here we create the copy of the current state without the one which is to be deleted
  //and then we update the current state
  const removeContactHandler = async (id) => {
    await api.delete(`/contacts/${id}`)
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    })

    setContacts(newContactList)
  }

  //retireving contaxcts
  const retrieveContacts = async ()=>{
    const response = await api.get('/contacts');
    return response.data
  }

  const LOCALSTORAGEKEY = 'contacts'

  // this is component did mount.
  //here we use tehh useEffect hook with an empty array as second param 
  //we get the list of contacts from the local storage
  useEffect(() => {
    // const retrievedContacts = JSON.parse(localStorage.getItem(LOCALSTORAGEKEY))
    // if (retrievedContacts) {
    //   setContacts(retrievedContacts)
    // }

    const getAllContacts = async () =>{
      const allContacts = await retrieveContacts()
      if(allContacts)  setContacts(allContacts)
    }

    getAllContacts()
  }, [])


  // this below acts as component did update
  // we pass contacts as the dependency on which the useEffect will run
  // we add the rendered contact list in the local storage every time contacts are updated
  useEffect(() => {
   // localStorage.setItem(LOCALSTORAGEKEY, JSON.stringify(contacts))
  }, [contacts])


  return (
    <div className="ui container app">
      {/* We are using router functionality 
       we use Switch for switching between different paths or components
       Route is actually used to create a route to the component
       path is where we specify what route we want the component to be at
       exact tells the browser to match the exact path and not go for all the paths
       render is used for passing the components along with props
       we destructure the props object and add to it the different custom props
       the props object already contains match, location and history properties*/}
      <Router>
        <Header />
        <Switch>
          <Route path='/' exact render={(props)=><ContactList {...props} contacts = {contacts} getContactId = {removeContactHandler} />} />
          <Route path='/addContact' render={(props)=><AddContact {...props} addContactHandler = {addContactHandler} />} /> 
          <Route path="/contact/:id" component={ContactDetails} />
          {/* <Route path="/confirmDelete" component={ConfirmDelete} /> */}
          <Route path='/edit' render={(props)=><EditContact {...props} updateContactHandler = {updateContactHandler} />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;


