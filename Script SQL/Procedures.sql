DROP PROCEDURE SP_InsCidadao
CREATE PROCEDURE SP_InsCidadao
	@nome       VARCHAR(60),
	@sobrenome	VARCHAR(60),
	@rg			VARCHAR(12),
	@cpf		VARCHAR(11),
	@telefone	VARCHAR(12),
	@email		VARCHAR(80)
AS 
	BEGIN
		BEGIN TRANSACTION
		INSERT INTO [dbo].[tb_cidadao] (nome, sobrenome, rg, cpf, telefone, email)
			VALUES(@nome, @sobrenome, @rg, @cpf, @telefone, @email)
		SELECT  SCOPE_IDENTITY() AS 'id_cidadao'
		COMMIT TRANSACTION
	END
GO 
declare @x int 
EXEC @x = SP_InsCidadao 'no','no','no','no','no','no'
SELECT @x

CREATE PROCEDURE SP_SelCidadao
AS 
	BEGIN 
		SELECT  id_cidadao
				nome,
				sobrenome,
				rg,
				cpf,
				telefone,
				email 
			FROM [dbo].[tb_cidadao] WITH(NOLOCK)
	END
GO

EXEC SP_SelCidadao