INSERT_USER = """INSERT INTO rhforms.users (nome, email, tipo) VALUES (%s, %s, %s);"""
FIND_USER = """SELECT * FROM rhforms.users WHERE usuario = %s"""
FIND_ALL_USERS = """SELECT * FROM rhforms.users;"""
UPDATE_USER = """UPDATE rhforms.users SET nome = %s, usuario = %s, email = %s tipo = % WHERE usuario = %s"""
DELETE_USER = """DELETE FROM rhforms.users WHERE id = %s"""

INSERT_SUPPLIER = """INSERT INTO vendorlist.fornecedores_classificados (cod_emitente, cnpj, fornecedor, familia, categoria, subcategoria) VALUES (%s, %s, %s, %s, %s, %s);"""
FIND_ALL_SUPPLIERS = """SELECT * FROM vendorlist.fornecedores_classificados;"""
DELETE_SUPPLIER = """DELETE FROM vendorlist.fornecedores_classificados WHERE id = %s"""

INSERT_MATERIAL = """INSERT INTO vendorlist.itens_classificados (cod_item, narrativa, familia, categoria, subcategoria) VALUES (%s, %s, %s, %s, %s);"""
FIND_ALL_MATERIALS = """SELECT * FROM vendorlist.itens_classificados;"""
DELETE_MATERIAL = """DELETE FROM vendorlist.itens_classificados WHERE id = %s"""

ORDER_QUERY = """
SELECT t1.numero_ordem, t1.it_codigo, t1.qt_solic, t1.narrativa, t1.num_pedido, t1.aliquota_ipi, 
        t1.aliquota_icm, t1.nr_contrato, t1.num_ord_inv, t2.nr_requisicao, t2.usuario, t2.cod_req_cc, 
        t2.l_emergencial, t2.nome_comprador, t2.preco_unit as preco_unit_t2, t2.preco_total, t3.data_pedido,
        t3.preco_unit as preco_unit_t3 
FROM vw_tbl_ordem_compra_2_anos as t1 
JOIN vw_tbl_it_requisicao_2_anos as t2 ON t1.numero_ordem = t2.numero_ordem 
LEFT JOIN vw_ultima_compra as t3 ON t1.numero_ordem = t3.numero_ordem 
WHERE t1.numero_ordem = ?;"""

INSERT_LOG = """INSERT INTO rhforms.spot_logs (usuario, pedido, data) VALUES (%s, %s, %s)"""

FIND_LAST_SPOT = """SELECT MAX(id) FROM rhforms.spot_form_data"""
FIND_LAST_CONTRACT = """SELECT MAX(id) FROM rhforms.contract_form_data"""
FIND_LAST_ADDITIVE = """SELECT MAX(id) FROM rhforms.additive_form_data"""

GET_SPOT_REPORT = """SELECT * FROM rhforms.spot_form_data WHERE id = %s"""
GET_CONTRACT_REPORT =  """SELECT * FROM rhforms.contract_form_data WHERE id = %s"""
GET_ADDITIVE_REPORT = """SELECT * FROM rhforms.additive_form_data WHERE id = %s""" 

INSERT_SPOT_FORM_DATA = """
INSERT INTO rhforms.spot_form_data (
    pedido_paradigma, numero_cotacao, data_geracao_rh, numero_rh, comprador,
    requisitante, departamento, orcamentos, itens_adquiridos, quantidade_de_itens,
    participantes_convidados, participantes_resp_parciais, participantes_resp_totais,
    forn_vencedor, valor_compra
) VALUES (
    %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s
);
"""

INSERT_CONTRACT_FORM_DATA = """
INSERT INTO rhforms.contract_form_data DEFAULT VALUES;
"""

INSERT_ADDITIVE_FORM_DATA = """
INSERT INTO rhforms.additive_form_data DEFAULT VALUES;
"""