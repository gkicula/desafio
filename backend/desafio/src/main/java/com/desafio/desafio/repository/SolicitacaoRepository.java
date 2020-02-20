package com.desafio.desafio.repository;

import com.desafio.desafio.entity.solicitacao.Solicitacao;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface SolicitacaoRepository extends JpaRepository<Solicitacao, Integer>{


    @Modifying
    @Query("UPDATE Solicitacao SET status =:status WHERE id=:id")
    void update(@Param("status") boolean status, @Param("id") Integer id);

}
