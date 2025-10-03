package com.example.dados;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Profile;

@SpringBootApplication
@Profile("dev")
public class DadosApplication {
	public static void main(String[] args) {
		SpringApplication.run(DadosApplication.class, args);
	}
}
