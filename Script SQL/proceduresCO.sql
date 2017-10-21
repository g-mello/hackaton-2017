/*
CREATE PROCEDURE sp_SelCidadao
AS

BEGIN
SELECT * 
FROM tb_cidadao
END

EXEC sp_SelCidadao
*/

ALTER PROCEDURE sp_InsCidadao
    @nome VARCHAR(60),
    @sobrenome VARCHAR(60),
    @rg VARCHAR(12),
    @cpf VARCHAR(11),
    @telefone VARCHAR(12),
    @email VARCHAR(80)
AS
BEGIN
INSERT INTO tb_cidadao( nome, sobrenome, rg, cpf, telefone, email) 
VALUES (@nome, @sobrenome, @rg, @cpf, @telefone, @email) 
END

<<<<<<< HEAD

/*
CREATE PROCEDURE sp_InsRequerimento
=======
IF EXISTS (SELECT * FROM dbo.sysobjects WHERE id = object_id(N'[dbo].[sp_InsRequerimento]') AND objectproperty(id, N'IsPROCEDURE')=1)
	DROP PROCEDURE [dbo].[sp_InsRequerimento]
GO

CREATE PROCEDURE [dbo].[sp_InsRequerimento]
>>>>>>> cfa507d7fc42c9a231ccbd5d16b16afa70ce363b
    @id_cidadao INTEGER,
    @cod_controle VARCHAR(60),
    @latitude VARCHAR(50) = null,
    @longitude VARCHAR(50) = null,
    @cep INTEGER = null,
    @logradouro VARCHAR(100),
    @numero INTEGER = null,
    @bairro VARCHAR(60),
    @complemento VARCHAR(60) = null,
    @cidade VARCHAR(60),
    @uf CHAR(2),
    @ponto_referencia VARCHAR(100) = null,
    @servico VARCHAR(MAX),
    @caminho VARCHAR(120),
    @status_req INTEGER,
	@id_requerimento INT = NULL OUTPUT

	/*
		EXEC
	*/
AS
<<<<<<< HEAD
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
END
*/
=======
	BEGIN
		INSERT INTO [dbo].[tb_requerimento](id_cidadao, cod_controle, latitude, longitude, cep, logradouro, numero, bairro, complemento, cidade, uf, ponto_referencia, servico, caminho, data_envio, status_req) 
			VALUES (@id_cidadao, @cod_controle, @latitude, @longitude, @cep, @logradouro, @numero, @bairro, @complemento, @cidade, @uf, @ponto_referencia, @servico, @caminho, GETDATE(), @status_req)
>>>>>>> cfa507d7fc42c9a231ccbd5d16b16afa70ce363b

			SET  @id_requerimento =  SCOPE_IDENTITY()

			UPDATE [dbo].[tb_requerimento]
				SET caminho = caminho + CAST(@id_requerimento AS VARCHAR(50)) + '.jpg'  
				WHERE id_requerimeto = @id_requerimento

	END
GO

SELECT * FROM [tb_requerimento]

IF EXISTS (SELECT * FROM dbo.sysobjects WHERE id = object_id(N'[dbo].[sp_ValidarCPF]') AND objectproperty(id, N'IsPROCEDURE')=1)
	DROP PROCEDURE [dbo].[sp_ValidarCPF]
GO

*/

/*
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

*/

/*
ALTER PROCEDURE SP_InsCidadao
	@nome       VARCHAR(60),
	@sobrenome	VARCHAR(60),
	@rg			VARCHAR(12),
	@cpf		VARCHAR(11),
	@telefone	VARCHAR(12),
	@email		VARCHAR(80),
	@saida		INT = null OUTPUT
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
*/

/*
CREATE PROCEDURE sp_GetCodControle
@p_cpf VARCHAR(11)
AS
BEGIN

SELECT r.cod_controle  
FROM tb_cidadao c 
INNER JOIN tb_requerimento r ON (c.id_cidadao = r.id_cidadao)
WHERE cpf = @p_cpf  

END

*/
