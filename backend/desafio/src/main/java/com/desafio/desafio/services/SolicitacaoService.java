package com.desafio.desafio.services;

import com.desafio.desafio.entity.solicitacao.Solicitacao;
import com.desafio.desafio.repository.SolicitacaoRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Slf4j
@Service
public class SolicitacaoService {

    @Autowired
    private SolicitacaoRepository solicitacaoRepository;

     public void novaSolicitacao(Solicitacao solicitacao){
         try {
            solicitacaoRepository.save(solicitacao);
         }catch (Exception e){
             log.error("Erro ao salvar a solicitação: ", e);
         }

     }

     public List<Solicitacao> listar (){
         return solicitacaoRepository.findAll();
     }

     public void atualizaSolicitacao(Solicitacao solicitacao){
         try {
             solicitacaoRepository.update(solicitacao.isStatus(), solicitacao.getId());
         }catch (Exception e){
             log.error("Erro ao atualizar a solicitação: ", e);
         }

     }



}
