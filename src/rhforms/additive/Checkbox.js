import React from 'react';
import { Checkbox, Col, Row, Typography} from 'antd';
import '../styles/Checkbox.css'

const onChange = (checkedValues) => {
  console.log('checked = ', checkedValues);
};
const CaixaCheck = () => (
  <div className="CaixaCheck">
    <Checkbox.Group
      style={{
        width: '100%',
      }}
      onChange={onChange}
    >
      <Typography.Title level={5} className="checkbox-title">Tipo de Aditivo: </Typography.Title>
      <div className="checkbox-container">
        <Row>
          <Col span={8}>
            <Checkbox value="Prazo">Prazo</Checkbox>
          </Col>
          <Col span={8}>
            <Checkbox value="Reajuste">Reajuste</Checkbox>
          </Col>
          <Col span={8}>
            <Checkbox value="Clausula">Cláusula</Checkbox>
          </Col>
          <Col span={8}>
            <Checkbox value="Valor">Valor</Checkbox>
          </Col>
          <Col span={8}>
            <Checkbox value="Pleito">Pleito</Checkbox>
          </Col>
          <Col span={8}>
            <Checkbox value="AjusteDeEscopo">Ajuste de Escopo</Checkbox>
          </Col>
        </Row>
      </div>
    </Checkbox.Group>
  </div>

);
export default CaixaCheck;