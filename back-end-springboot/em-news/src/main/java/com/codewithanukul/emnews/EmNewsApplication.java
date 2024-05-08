package com.codewithanukul.emnews;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;

@SpringBootApplication(exclude = SecurityAutoConfiguration.class)
public class EmNewsApplication {

	public static void main(String[] args) {
		SpringApplication.run(EmNewsApplication.class, args);
	}

}
