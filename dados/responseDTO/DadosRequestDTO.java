package com.example.dados.responseDTO;

import com.example.dados.model.Contato;

public record DadosRequestDTO(String name,String sobrenome,String email,String phone,String cep) {
	public DadosRequestDTO(Contato contatoDetalhe) {
		this(contatoDetalhe.getName(),
			 contatoDetalhe.getSobrenome(),
			 contatoDetalhe.getEmail(),
			 contatoDetalhe.getPhone(),
			 contatoDetalhe.getCep());
	}
}
