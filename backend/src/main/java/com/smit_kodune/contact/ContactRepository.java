package com.smit_kodune.contact;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface ContactRepository extends JpaRepository<Contact,Long> {
// handle queries to the database
    @Query("SELECT c FROM Contact c WHERE c.codeName = ?1")
    Optional<Contact> findContactByCodeName(String codeName);

    @Query("SELECT c FROM Contact c WHERE c.phoneNumber = ?1")
    Optional<Contact> findContactByPhoneNumber(String phoneNumber);
}
