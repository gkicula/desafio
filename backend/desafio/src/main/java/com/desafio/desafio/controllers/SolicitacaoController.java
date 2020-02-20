package com.desafio.desafio.controllers;

import com.desafio.desafio.entity.solicitacao.Solicitacao;
import com.desafio.desafio.services.SolicitacaoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/solicitacao")
public class SolicitacaoController {
    @Autowired
    private SolicitacaoService solicitacaoService;

    @PostMapping
    public void inserir(@RequestBody Solicitacao solicitacao){
        solicitacaoService.novaSolicitacao(solicitacao);
    }

    @GetMapping
    public List<Solicitacao> listar(){
        return solicitacaoService.listar();
    }

    @PostMapping(path = "/atualizar")
    public void atualizar(@RequestBody Solicitacao solicitacao){
        solicitacaoService.atualizaSolicitacao(solicitacao);
    }
}