package com.example.dados.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.dados.model.Contato;
import com.example.dados.repository.ContatoRepository;
import com.example.dados.responseDTO.DadosDTO;
import com.example.dados.responseDTO.DadosRequestDTO;
import com.example.dados.service.ContatoService;

@CrossOrigin(origins = "http://localhost:3000", allowedHeaders = "*")
@RestController
@RequestMapping(value = "/api/user")
public class ContatoController {

	@Autowired
	private ContatoService contatoService;
	@Autowired
	private ContatoRepository contatoRepository;

	// endpoint para LISTAR TODOS USUARIO do banco de dado contato
	@GetMapping
	public List<DadosDTO> listaContatos() {
		List<DadosDTO> dadosDTO = contatoService.listarTodos() // aqui e a comunicacao da pagina para o banco de dado
																// para mostra
																// Data Transfer Object (Objeto de Transferência de
																// Dados)
				.stream().map(DadosDTO::new).toList();
		return dadosDTO;
	}

	// Endpoint para BUSCAR O ID um contato por id (HTTP GET)
	@GetMapping(value = "/{id}")
	public ResponseEntity<Contato> buscaContatoPorId(@PathVariable Long id) {
		return contatoService.buscarPorId(id).map(ResponseEntity::ok)// retorna 200 ok com o contato
				.orElse(ResponseEntity.notFound().build());// se nao, retorna 404 Not Found
	}

	// endpoint para criar um novo contato
	@PostMapping
	public ResponseEntity<String> criarContato(@RequestBody DadosRequestDTO contato) {// aqui e o body do cliente veio
																						// pelo request
		if (contatoRepository.existsByEmail(contato.email())) {
			return ResponseEntity.status(HttpStatus.CONFLICT).body("Esse email ja esta cadastrado");
//			throw new DadosEventException("Nao foi encontrada");

		}
		Contato dadosContato = new Contato(contato);
		contatoService.salvarContato(dadosContato);
		return ResponseEntity.status(HttpStatus.CREATED).body("salvo");
	}

	// endpoint para atualizar um contato (HTTP PUT)
	@PutMapping(value = "/{id}")
	public ResponseEntity<Contato> atualizarContato(@PathVariable Long id, @RequestBody Contato contatoDetalhes) {
		Contato conta = contatoService.atualizarUser(id, contatoDetalhes);
		return ResponseEntity.ok(conta);
	}

	// endpoint para DELETAR um contato (HTTP DELETE
	@DeleteMapping("/{id}")
	public ResponseEntity<Contato> deleteContato(@PathVariable Long id) {
		if (contatoService.buscarPorId(id).isPresent()) {
			contatoService.deletarPorId(id);
			return ResponseEntity.noContent().build();
		} else {
			return ResponseEntity.notFound().build();
		}
	}

}
