/*
CREATE PROCEDURE sp_SelCidadao
AS
SELECT * 
FROM tb_cidadao
GO


CREATE PROCEDURE sp_InsCidadao
    @nome VARCHAR(60),
    @sobrenome VARCHAR(60),
    @rg VARCHAR(12),
    @cpf VARCHAR(11),
    @telefone VARCHAR(12),
    @email VARCHAR(80)
AS
BEGIN
INSERT INTO tb_cidadao( nome, sobrenome, rg, cpf, telefone, email) VALUES
(@nome, @sobrenome, @rg, cpf, @telefone, @email) 
END
*/

CREATE PROCEDURE sp_InsRequerimento
    @id_cidadao INTEGER,
    @cod_controle VARCHAR(60),
    @latitude VARCHAR(20),
    @longitude VARCHAR(20),
    @cep INTEGER,
    @logradouro VARCHAR(100),
    @numero INTEGER,
    @bairro VARCHAR(60),
    @complemento VARCHAR(60),
    @cidade VARCHAR(60),
    @uf CHAR(2),
    @ponto_referencia VARCHAR(100),
    @observacao VARCHAR(MAX),
    @status_req INTEGER
AS
BEGIN
INSERT INTO tb_requerimento( 
                        id_cidadao,
                        cod_controle,
                        latitude,
                        longitude,
                        cep, 
                        logradouro,
                        numero,
                        bairro,
                        complemento,
                        cidade,
                        uf,
                        ponto_referencia,
                        observacao,
                        status_req
) VALUES
(
    @id_cidadao,
    @cod_controle,
    @latitude,
    @longitude,
    @cep,
    @logradouro,
    @numero,
    @bairro,
    @complemento,
    @cidade,
    @uf,
    @ponto_referencia,
    @observacao,
    @status_req
)
END

