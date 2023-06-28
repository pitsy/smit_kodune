package com.smit_kodune.contact;

import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;
import java.util.Optional;

@Service
public class ContactService {

    private final ContactRepository contactRepository;

    @Autowired
    public ContactService(ContactRepository contactRepository) {
        this.contactRepository = contactRepository;
    }

    public List<Contact> getContacts() {
        return contactRepository.findAll();
    }

    public void addNewContact(Contact contact) {
        // verify that code name and phone number are unique for a new contact
        Optional<Contact> contactOptional = contactRepository.findContactByCodeName(contact.getCodeName());
        if (contactOptional.isPresent()) {
            throw new IllegalStateException("Koodnimi on võetud");
        }
        contactOptional = contactRepository.findContactByPhoneNumber(contact.getPhoneNumber());
        if (contactOptional.isPresent()) {
            throw new IllegalStateException("Telefoninumber on võetud");
        }
        contactRepository.save(contact);
    }

    public void deleteContact(Long contactId) {
        boolean exists = contactRepository.existsById(contactId);
        if (!exists) {
            throw new IllegalStateException("Kontakt id-ga " + contactId + " ei eksisteeri");
        }
        contactRepository.deleteById(contactId);
    }

    @Transactional
    public void updateContact(Long contactId, String name, String codeName, String phoneNumber) {
        Contact contact = contactRepository.findById(contactId).orElseThrow(
                () -> new IllegalStateException("Kontakt id-ga " + contactId + " ei eksisteeri")
        );

        // update contact name if it is not the same
        if (name != null && name.length() > 0 && !Objects.equals(contact.getName(), name)) {
            contact.setName(name);
        }

        // update contact code name if it is not the same
        if (codeName != null && codeName.length() > 0 && !Objects.equals(contact.getCodeName(), codeName)) {
            Optional<Contact> contactOptional = contactRepository.findContactByCodeName(codeName);
            // check if other contacts have the same code name
            if (contactOptional.isPresent()) {
                throw new IllegalStateException("Koodnimi on võetud");
            }
            contact.setCodeName(codeName);
        }

        // update contact phone number if it is not the same
        if (phoneNumber != null && phoneNumber.length() > 0 && !Objects.equals(contact.getPhoneNumber(), phoneNumber)) {
            Optional<Contact> contactOptional = contactRepository.findContactByPhoneNumber(phoneNumber);
            // check if other contacts have the same phone number
            if (contactOptional.isPresent()) {
                throw new IllegalStateException("Telefoninumber on võetud");
            }
            contact.setPhoneNumber(phoneNumber);
        }
    }
}
