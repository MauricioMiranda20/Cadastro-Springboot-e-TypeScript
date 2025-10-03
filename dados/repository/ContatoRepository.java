package com.example.dados.repository;

import com.example.dados.model.Contato;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface ContatoRepository extends JpaRepository<Contato,Long>{
	Boolean existsByEmail(String email);
	Optional<Contato> findByName(String name);
	
}
