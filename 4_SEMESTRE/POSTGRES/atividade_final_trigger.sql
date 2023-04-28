--* 73 - Crie uma função para retornar o número de vendedores cadastrados.
CREATE OR REPLACE FUNCTION numero_vendedores() RETURNS INTEGER AS $$
DECLARE numero_vendedores INTEGER;
BEGIN
SELECT COUNT(*) INTO numero_vendedores
FROM vendedor;
RETURN numero_vendedores;
END;
$$ LANGUAGE plpgsql;
--* 74 - Elabore uma função para retornar a quantidade de pedidos que um determinado vendedor participou.
CREATE OR REPLACE FUNCTION numero_pedidos_vendedor(cod_vendedor INTEGER) RETURNS INTEGER AS $$
DECLARE numero_pedidos INTEGER;
BEGIN
SELECT COUNT(*) INTO numero_pedidos
FROM pedido
WHERE codigo_vendedor = codigo_vendedor;
RETURN numero_pedidos;
END;
$$ LANGUAGE plpgsql;
--* 75 - Faça uma função que mostre os vendedores que atenderam um cliente, cujo seu nome é passado por parâmetro.
CREATE OR REPLACE FUNCTION vendedores_cliente(nome_cli VARCHAR) RETURNS TABLE (nome_vendedor VARCHAR) AS $$ BEGIN RETURN QUERY
SELECT v.nome_vendedor
FROM vendedor v,
  pedido p,
  cliente c
WHERE v.codigo_vendedor = p.codigo_vendedor
  AND p.codigo_cliente = c.codigo_cliente
  AND c.nome_cliente = nome_cli;
END;
$$ LANGUAGE plpgsql;
--* 76 - Crie uma função que retorne todos os códigos, nomes e unidades dos produtos cadastrados.
CREATE OR REPLACE FUNCTION produtos_cadastrados()
RETURNS TABLE (cod_produto INTEGER, desc_produto VARCHAR, un VARCHAR) AS $$
BEGIN
RETURN QUERY SELECT codigo_produto, descricao_produto, unidade
FROM produto;
END;
$$ LANGUAGE plpgsql;
--* 77 - Faça uma função que mostre o maior, o menor e a média de salário dosvendedores que atenderam uma determinada cliente cujo nome do cliente e faixade comissão do vendedor é passado por parâmetro.
CREATE OR REPLACE FUNCTION mostrarSalarios(cliente_nome VARCHAR, comissao DECIMAL) RETURNS SETOF record AS $$
DECLARE reg record;
BEGIN FOR reg IN (
    SELECT AVG(v.salario_fixo) AS "Media Salário",
        MAX(v.salario_fixo) AS "Maior Salário",
        MIN (v.salario_fixo) AS "Maior Salário"
    FROM vendedor v
        INNER JOIN pedido p ON v.codigo_vendedor = p.codigo_vendedor
        INNER JOIN cliente c ON p.codigo_cliente = c.codigo_cliente
    WHERE c.nome_cliente = cliente_nome
        AND v.faixa_comissao = comissao
) LOOP RETURN NEXT reg;
END LOOP;
RETURN;
END;
$$ LANGUAGE plpgsql;
--* 78.Desenvolva uma função que mostre descrição do produto, a quantidade deprodutos vendidos, o Preço Unitário e o total (quantidade * Preço Unitário) de um determinado Pedido.
--* 79.Desenvolva uma função que retorne a soma de uma venda de um determinado pedido.
--* 80.Faça uma função que retorne a quantidade de pedidos que cada vendedor participou.
--* 81.Crie uma função que retorne o código e o nome dos clientes, cujo código dovendedor, o estado que reside o cliente e o prazo de entrega do pedido sejap assado por parâmetro.

--* 82. Desenvolva um Trigger que ao ser excluído um registro da tabela produto apareça uma mensagem que os dados do produto foram excluídos com sucesso.
--* 83. Crie um Trigger que ao inserir ou alterar um registro da tabela item do pedido apareça uma mensagem informando que os dados foram alterados com sucesso.
--* 84. Desenvolver um Trigger que ao ser alterado o salário do Vendedor insira o salário antigo na tabela histórico do salário.
--* 85 - Crie um trigger que ao inserir um registro da tabela item do pedido, calcule e armazene o seu subtotal.
--* 86 - Crie um trigger que ao alterar um registro da tabela item do pedido, calcule eatualize o seu subtotal.
--* 87 - Desenvolver um Trigger que ao ser alterado o endereço do cliente (endereço ecep) insira o endereço antigo na tabela histórico de endereço.
--* 88.Crie um Trigger que ao ser inserido um novo item do pedido atualize o campo quantidade em estoque da tabela produto.
--* 89.Crie um Trigger que  ao ser alterado um item do pedido atualize o  campo quantidade em estoque da tabela produto.
