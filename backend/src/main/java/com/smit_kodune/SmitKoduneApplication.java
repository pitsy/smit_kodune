package com.smit_kodune;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class SmitKoduneApplication {

	public static void main(String[] args) {
		SpringApplication.run(SmitKoduneApplication.class, args);
	}

}
