package com.desafio.desafio.entity.solicitacao;

import com.desafio.desafio.entity.security.Usuario;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter
@Setter
@Table(name="tb_solicitacao")
public class Solicitacao {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    private String usuario;

    private String produto;

    private Double preco;

    private boolean status;



}
