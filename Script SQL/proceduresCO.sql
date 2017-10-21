DROP PROCEDURE SP_InsCidadao

CREATE PROCEDURE sp_SelCidadao
AS

BEGIN
SELECT * 
FROM tb_cidadao
END

EXEC sp_SelCidadao

CREATE PROCEDURE sp_InsCidadao
    @nome VARCHAR(60),
    @sobrenome VARCHAR(60),
    @rg VARCHAR(12),
    @cpf VARCHAR(11),
    @telefone VARCHAR(12),
    @email VARCHAR(80)
AS
BEGIN
INSERT INTO tb_cidadao( nome, sobrenome, rg, cpf, telefone, email) 
VALUES (@nome, @sobrenome, @rg, cpf, @telefone, @email) 
END

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
    @servico VARCHAR(MAX),
    @caminho VARCHAR(120),
    @data_envio DATETIME,
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
                        servico,
                        caminho,
                        data_envio,
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
    @servico,
    @caminho,
    @data_envio,
    @status_req
)
SELECT SCOPE_IDENTITY()
END
GO

IF EXISTS (SELECT * FROM dbo.sysobjects WHERE id = object_id(N'[dbo].[sp_ValidarCPF]') AND objectproperty(id, N'IsPROCEDURE')=1)
	DROP PROCEDURE [dbo].[sp_ValidarCPF]
GO

CREATE PROCEDURE [dbo].[sp_ValidarCPF]
@p_cpf VARCHAR(11)
	AS

	BEGIN
	
		SELECT TOP 1 1  AS Possui_Cpf
          FROM tb_cidadao
          WHERE cpf = @p_cpf  

	END
GO

EXEC sp_ValidarCPF '1'
GO

ALTER PROCEDURE SP_InsCidadao
	@nome       VARCHAR(60),
	@sobrenome	VARCHAR(60),
	@rg			VARCHAR(12),
	@cpf		VARCHAR(11),
	@telefone	VARCHAR(12),
	@email		VARCHAR(80),
	@saida		INT OUTPUT
AS 
	BEGIN
		BEGIN TRANSACTION
		INSERT INTO [dbo].[tb_cidadao] (nome, sobrenome, rg, cpf, telefone, email)
			VALUES(@nome, @sobrenome, @rg, @cpf, @telefone, @email)
		SET @saida =  SCOPE_IDENTITY()
		COMMIT TRANSACTION
	END
GO

declare @x int 
EXEC @x = SP_InsCidadao 'no','no','no','no','no','no'
SELECT @x
