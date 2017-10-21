
CREATE TABLE tb_cidadao (
  id_cidadao INTEGER NOT NULL IDENTITY(1,1),
  nome      VARCHAR(60) NOT NULL,
  sobrenome VARCHAR(60) NOT NULL,
  rg        VARCHAR(12) NOT NULL,
  cpf       VARCHAR(11) NOT NULL,
  telefone  VARCHAR(12) NOT NULL,
  email     VARCHAR(80) NULL,
  CONSTRAINT pk_tb_cidadao_id_cidadao PRIMARY KEY(id_cidadao)
);
GO


CREATE TABLE tb_requerimento (
  id_requerimeto    INTEGER NOT NULL IDENTITY(1,1),
  id_cidadao        INTEGER NOT NULL,
  cod_controle      VARCHAR(10) NOT NULL,
  latitude        VARCHAR(20) NOT NULL,
  longitude         VARCHAR(20) NOT NULL,
  cep               INTEGER NULL,
  logradouro        VARCHAR(100) NOT NULL,
  numero            INTEGER NULL,
  bairro            VARCHAR(60) NOT NULL,
  complemento       VARCHAR(60) NULL,
  cidade            VARCHAR(60) NOT NULL,
  uf                CHAR(2) NOT NULL,
  ponto_referencia  VARCHAR(100) NOT NULL,
  observacao        VARCHAR(MAX) NULL,
  status_req        INTEGER NULL,
  CONSTRAINT pk_tb_requerimento_id_requerimento PRIMARY KEY(id_requerimeto, id_cidadao),
  CONSTRAINT fk_tb_requerimento_idcidadao FOREIGN KEY(id_cidadao)
    REFERENCES tb_cidadao(id_cidadao)
);
GO

CREATE TABLE tb_anexo (
  id_anexo        INTEGER NOT NULL IDENTITY(1,1),
  id_requerimeto  INTEGER NOT NULL,
  id_cidadao      INTEGER NOT NULL,
  titulo          VARCHAR(60) NOT NULL,
  caminho         VARCHAR(120) NOT NULL,
  data_envio      DATETIME NOT NULL,
  CONSTRAINT pk_tb_anexo_id_anexo PRIMARY KEY(id_anexo, id_requerimeto, id_cidadao),
  CONSTRAINT fk_tb_anexo_id_requetimento FOREIGN KEY(id_requerimeto, id_cidadao)
    REFERENCES tb_requerimento(id_requerimeto, id_cidadao)
);
GO

