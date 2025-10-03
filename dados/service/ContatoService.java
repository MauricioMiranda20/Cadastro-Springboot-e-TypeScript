package com.example.dados.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.ControllerAdvice;

import com.example.dados.dexception.DadosEventException;
import com.example.dados.model.Contato;
import com.example.dados.repository.ContatoRepository;

@Service
@ControllerAdvice
public class ContatoService {

	@Autowired
	private ContatoRepository contatoRepository;

	public Contato salvarContato(Contato contato) {
		if (contatoRepository.existsByEmail(contato.getEmail())) {
			throw new DadosEventException("Ja exite esse email");
		}
		return contatoRepository.save(contato);
	}

	public List<Contato> listarTodos() {
		return contatoRepository.findAll();
	}

	public Optional<Contato> buscarPorId(long id) {
		return contatoRepository.findById(id);
	}

	public void deletarPorId(Long id) {
		contatoRepository.deleteById(id);
	}

	public Contato atualizarUser(Long id, Contato obj) {
		try {
			Contato us = contatoRepository.findById(id)
					.orElseThrow(() -> new DadosEventException("Nao foi encontrado"));
			us.setName(obj.getName());
			us.setSobrenome(obj.getSobrenome());
			us.setEmail(obj.getEmail());
			us.setPhone(obj.getPhone());
			us.setCep(obj.getCep());
			return contatoRepository.save(us);
		} catch (DadosEventException x) {
			throw new DadosEventException(x.getMessage());
		}
	}
}
