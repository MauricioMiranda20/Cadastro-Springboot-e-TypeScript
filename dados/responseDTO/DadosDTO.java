package com.example.dados.responseDTO;

import com.example.dados.model.Contato;

public record DadosDTO(Long id,String name,String sobrenome,String email,String phone,String cep) {
	public DadosDTO(Contato contato) {
		this(contato.getId(),contato.getName(),contato.getSobrenome(),contato.getEmail(),contato.getPhone(),contato.getCep());
	}
}
