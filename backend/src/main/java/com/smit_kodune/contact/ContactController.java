package com.smit_kodune.contact;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping(path = "api/v1/contact")
public class ContactController {

    private final ContactService contactService;

    @Autowired
    public ContactController(ContactService contactService) {
        this.contactService = contactService;
    }

    @GetMapping
    public List<Contact> getContacts() {
        return contactService.getContacts();
    }

    @PostMapping
    public void registerNewContact(@RequestBody Contact contact) {
        contactService.addNewContact(contact);
    }

    @DeleteMapping(path = "{contactId}")
    public void deleteContact(@PathVariable("contactId") Long contactId) {
        contactService.deleteContact(contactId);
    }

    @PutMapping(path = "{contactId}")
    public void updateContact(
            @PathVariable("contactId") Long contactId,
            // allows for only necessary contact details to be used
            @RequestParam(required = false) String name,
            @RequestParam(required = false) String codeName,
            @RequestParam(required = false) String phoneNumber) {
        contactService.updateContact(contactId, name, codeName, phoneNumber);
    }
}
