import React, { useState } from 'react'
import PropTypes from 'prop-types'
import {
  AreaContractData,
  ContractWrapper,
} from './ContractStyled'
import { Pagination, Space, Table } from 'antd'
import ConfirmModal from '../ConfirmModal'

const { Column } = Table;

const dataContract = [
  {
    id: '1', name: 'Sacombank-STB', numbercard: '123456*****12334', typecontract: 'thẻ'
  },
  {
    id: '2', name: 'Sacombank-STB', numbercard: '123456*****12334', typecontract: 'thẻ'
  },
  {
    id: '3', name: 'Sacombank-STB', numbercard: '123456*****12334', typecontract: 'thẻ'
  },
  {
    id: '4', name: 'Sacombank-STB', numbercard: '123456*****12334', typecontract: 'thẻ'
  },
  {
    id: '5', name: 'Sacombank-STB', numbercard: '123456*****12334', typecontract: 'thẻ'
  }
]

const cancelContract = () => {

}

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',

  },
  {
    title: 'SỐ TÀI KHOẢN/ SỐ THẺ',
    dataIndex: 'numbercard',
    key: 'numbercard',
  },
  {
    title: 'LOẠI LIÊN KẾT',
    dataIndex: 'typecontract',
    key: 'typecontract',
  },
  {
    title: 'HÀNH ĐỘNG',
    key: 'action',
    render: (text, record) => (
      <Space size="middle">
        <span onClick={cancelContract} className="cancel-button"><img src={`${process.env.PUBLIC_URL}/assets/images/cancel.png`} />&nbsp; Hủy liên kết</span>
      </Space>
    ),
  }
];

const Contract = props => {
  const [visibleConfirm, setVisibleConfirm] = useState(false)
  return (
    <ContractWrapper>
      <AreaContractData>
        <Table dataSource={dataContract} columns={columns} pagination={false} bordered={false} />
        <Pagination size="small" total={50} />
      </AreaContractData>
      <ConfirmModal visible={visibleConfirm} onC/>
    </ContractWrapper>
  )
}

Contract.propTypes = {

}

export default Contract