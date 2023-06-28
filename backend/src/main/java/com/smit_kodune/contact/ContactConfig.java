package com.smit_kodune.contact;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class ContactConfig {
// sample contacts used in testing
    @Bean
    CommandLineRunner commandLineRunner(ContactRepository repository) {
        return args -> {
            Contact leo = new Contact(
                    "Leonardo di Caprio",
                    "Arterial Snail",
                    "123456789"
            );
            Contact megan = new Contact(
                    "Megan Fox",
                    "Fast Fox",
                    "987654321"
            );

// saves new contacts specified as new
//            repository.saveAll(
//                    List.of(leo, megan)
//            );
        };
    }
}
