package com.example.dados.model;


import com.example.dados.responseDTO.DadosRequestDTO;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@Entity
@Table(name="tb_user")
@Data // já cria getters, setters, equals, hashCode e toString
@NoArgsConstructor // cria construtor vazio (obrigatório para JPA)
@AllArgsConstructor // cria construtor com todos os campos
@EqualsAndHashCode(of="id") //aqui mostra que o id vai ser a chave estrangeira para o banco de dado

public class Contato {
		
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	private String name;
	private String sobrenome;
	private String email;
	private String phone;
	private String cep;
	
	public Contato(DadosRequestDTO dados) {
		this.name = dados.name();
		this.sobrenome = dados.sobrenome();
		this.email = dados.email();
		this.phone = dados.phone();
		this.cep = dados.cep();
	}
	

}
