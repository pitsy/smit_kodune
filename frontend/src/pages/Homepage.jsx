import '../App.css';
import { useEffect, useState } from "react";
import { fetchData, postData, deleteData, putData } from '../functions/rest';
import ContactsDisplay from '../components/ContactsDisplay';

function Homepage() {

    const [contactData, setContactData] = useState([]);
    const [errorMsg, setErrorMsg] = useState('');
  
    useEffect(() => {
      // fetch contact data on page load
      fetchContacts();
    }, []);
  
    function fetchContacts() {
      fetchData().then((value) => {
        // fetch and sort contacts by id 
        // sorting is needed to maintain order after adding or modifying data
        const sorted = [...value].sort((a, b) => a.id - b.id);
        setContactData(sorted);
      }).catch((error) => {
        console.error(error);
      });
    }
  
    function addContact(newContactData) {
      postData(newContactData).then((value) => {
        if (typeof value === 'object' && value !== null) {
          // if successful fetch contacts again to refresh the list
          fetchContacts();
        } else {
          setErrorMsg(value);
        }
      });
    }
  
    function deleteContact(id) {
      deleteData(id).then((value) => {
        if (typeof value !== 'string' && value !== null) {
          fetchContacts();
        } else {
          setErrorMsg(value);
        }
      });
    }
  
    function updateContact(id, formattedString) {
      putData(id, formattedString).then((value) => {
        if (typeof value !== 'string' && value !== null) {
          fetchContacts();
        } else {
          setErrorMsg(value);
        }
      });
    }  
  
    return (
      <div className='body'>
        <ContactsDisplay 
            contactData = {contactData}
            addContact = {addContact}
            updateContact = {updateContact}
            deleteContact = {deleteContact}
            errorMsg = {errorMsg}
            setErrorMsg = {setErrorMsg}
        />
      </div>
    )
}

export default Homepage;