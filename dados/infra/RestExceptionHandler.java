package com.example.dados.infra;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import com.example.dados.dexception.DadosEventException;
import com.example.dados.dexception.DadosException;

@ControllerAdvice
public class RestExceptionHandler extends ResponseEntityExceptionHandler{
	
	@ExceptionHandler(DadosException.class)
	private ResponseEntity<String> eventNotFoundHandler(DadosException exception){
		return ResponseEntity.status(HttpStatus.CONFLICT).body("event not found");
	}
	
	@ExceptionHandler(DadosEventException.class)
	private ResponseEntity<String> handleGenerico(DadosEventException exception){
		return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Erro Interno");
	}
}
