package com.smit_kodune.contact;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "contacts")
@Data // getters, setters and ToString
@NoArgsConstructor
@AllArgsConstructor
public class Contact {

    @Id
    @GeneratedValue // chooses strategy = GenerationType.SEQUENCE by default since using postgresSQL database
    private Long id;
    private String name;
    private String codeName;
    private String phoneNumber;

    public Contact(String name, String codeName, String phoneNumber) {
        this.name = name;
        this.codeName = codeName;
        this.phoneNumber = phoneNumber;
    }
}
