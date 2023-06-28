import { useEffect, useRef, useState } from "react";

function ContactsDisplay(props) {

    // refs for adding contacts
    const nameRef = useRef('');
    const codeNameRef = useRef('');
    const phoneNumberRef = useRef('');
    // refs for updating contacts
    const updateNameRef = useRef('');
    const updateCodeNameRef = useRef('');
    const updatePhoneNumberRef = useRef('');
    const [updateContactData, setUpdateContactData] = useState([]);
    // search related variables
    const searchRef = useRef('');
    const [searchResult, setSearchResult] = useState([]);

    useEffect(() => {
        setSearchResult(props.contactData)
    }, [props.contactData]);

    function addContact() {
        // check if inputs have been filled
        if (nameRef.current.value === '') {
            props.setErrorMsg('Nimi sisestamata');
        } else if (codeNameRef.current.value === '') {
            props.setErrorMsg('Koodnimi sisestamata');
        } else if (phoneNumberRef.current.value === '') {
            props.setErrorMsg('Telefoninumber sisestamata');
        } else {
            let newContactData = [nameRef.current.value, codeNameRef.current.value, phoneNumberRef.current.value];
            props.addContact(newContactData);
            // reset ref values
            nameRef.current.value = '';
            codeNameRef.current.value = ''; 
            phoneNumberRef.current.value = '';
            // reset error msg display
            props.setErrorMsg('');
        }
    } 

    function updateContact() {
        // creates a string with the updated values to use in PUT endpoint
        let formattedString = `name=${updateNameRef.current.value}&codeName=${updateCodeNameRef.current.value}&phoneNumber=${updatePhoneNumberRef.current.value}`;
        props.updateContact(updateContactData[0], formattedString);
        setUpdateContactData([]);
        // reset ref values
        updateNameRef.current.value = '';
        updateCodeNameRef.current.value = ''; 
        updatePhoneNumberRef.current.value = '';
        // reset error msg display
        props.setErrorMsg(''); 
    }

    function searchContacts() {
        // searches from names, codenames and phone numbers
        let result = [];
        for (let i = 0; i < props.contactData.length; i++) {
            const contact = props.contactData[i]
            if (contact.name.toLowerCase().includes(searchRef.current.value.toLowerCase())) {
                result.push(contact);
            }
            if (contact.codeName.toLowerCase().includes(searchRef.current.value.toLowerCase())) {
                result.push(contact);
            }
            if (contact.phoneNumber.includes(searchRef.current.value)) {
                result.push(contact);
            }
        }
        // remove duplicates
        setSearchResult([...new Set(result)]);
    }

    return (
        <div className="page-container">
            <div>
                <h1>Kontaktid</h1>
                {/* adding a new contact */}
                <div className='contact-body'>
                    <label>Nimi</label> <br />
                    <input ref={nameRef} type="text" /> <br />
                    <label>Koodnimi</label> <br />
                    <input ref={codeNameRef} type="text" /> <br />
                    <label>Telefoninumber</label> <br />
                    <input ref={phoneNumberRef} type="text" /> <br />
                    <button onClick={addContact}>Lisa uus</button>
                </div>
                <br />
                {/* contact search */}
                <div className='btn-group'>
                    <input ref={searchRef} type="text" />
                    <button onClick={searchContacts}>Otsi</button>
                </div>
                {/* error message display for the user */}
                <div className="error-msg">
                    {props.errorMsg}
                </div>
                {/* display all contacts */}
                {searchResult.map(contact =>
                    <div className='contact-body' key={contact.id}>
                        <div>
                            {contact.name}
                        </div>
                        <div>
                            {contact.codeName}
                        </div>
                        <div>
                            {contact.phoneNumber}
                        </div>
                        <button onClick={() => setUpdateContactData(
                            [contact.id, contact.name, contact.codeName, contact.phoneNumber])}>
                                Muuda
                        </button>
                        <button onClick={() => props.deleteContact(contact.id)}>Kustuta</button>
                    </div>
                )}
            </div>
            {/* separate field for modifying a contact */}
            {updateContactData.length !== 0 ? <div className='edit-field' key={updateContactData}>
                <label>Nimi</label> <br />
                <input ref={updateNameRef} type="text" defaultValue={updateContactData[1]}/> <br />
                <label>Koodnimi</label> <br />
                <input ref={updateCodeNameRef} type="text" defaultValue={updateContactData[2]}/> <br />
                <label>Telefoninumber</label> <br />
                <input ref={updatePhoneNumberRef} type="text" defaultValue={updateContactData[3]}/> <br />
                <button onClick={updateContact}>Muuda</button>
            </div> : null}  
      </div>
    )
}

export default ContactsDisplay;