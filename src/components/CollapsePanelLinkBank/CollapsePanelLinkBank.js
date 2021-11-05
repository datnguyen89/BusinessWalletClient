import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { CollapsePanelLinkBankWrapper } from './CollapsePanelLinkBankStyled'
import { Descriptions, Form, Table } from 'antd'
import IconStatusLabel from '../IconStatusLabel'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { ExpandContent } from '../../pages/TransactionManagePage/TransactionManagePageStyled'
import { TRANSACTION_STATUS } from '../../utils/constant'
import uuid from 'uuid'
import moment from 'moment'

const CollapsePanelLinkBank = props => {
  const [mockupData, setMockupData] = useState([])

  const columns = [
    {
      title: 'STT',
      width: 55,
      align: 'center',
      render: (item, row, index) => index + 1,
    },
    {
      title: 'Mã lệnh',
      render: record => record.transactionId,
    },
    {
      title: 'Lệnh',
      render: record => record.transactionType,
    },
    {
      title: 'Trạng thái lệnh',
      render: record => (
        <IconStatusLabel status={record.transactionStatus} label={null} />
      ),
    },
    {
      title: 'Người tạo',
      render: record => record.createdUser,
    },
    {
      title: 'Người duyệt',
      render: record => (
        <>
          <IconStatusLabel status={record.approveUser1.processStatus} label={record.approveUser1.name} />
          <br />
          <IconStatusLabel status={record.approveUser2.processStatus} label={record.approveUser2.name} />
        </>
      ),
    },
    {
      title: 'Ngày tạo',
      render: record => record.createdDate,
    },
    {
      title: 'Trạng thái xử lý',
      render: record => (
        <IconStatusLabel status={record.processStatus} label={null} />
      ),
    },
    {
      title: 'Hành động',
      align: 'center',
      render: record => (
        <>
          <FontAwesomeIcon icon={faTrashAlt} color={'red'} size={'lg'} />
        </>
      ),
    },
  ]
  const renderExpandRow = (record) => {
    return (
      <ExpandContent>
        <Descriptions
          bordered
          column={2}
          size={'small'}>
          <Descriptions.Item label={<strong>Ngân hàng</strong>} span={2}>{record.bankName}</Descriptions.Item>
          <Descriptions.Item label={<strong>Số tài khoản</strong>}
                             span={1}>{record.bankAccountNumber}</Descriptions.Item>
          <Descriptions.Item label={<strong>Loại liên kết</strong>} span={1}>{record.bankLinkType}</Descriptions.Item>
          <Descriptions.Item label={<strong>Người kiểm tra</strong>}
                             span={1}>{record.approveUser1.name}</Descriptions.Item>
          <Descriptions.Item label={<strong>Ngày duyệt kiểm tra</strong>}
                             span={1}>{record.approveUser1.processDate}</Descriptions.Item>
          <Descriptions.Item label={<strong>Người duyệt</strong>}
                             span={1}>{record.approveUser2.name}</Descriptions.Item>
          <Descriptions.Item label={<strong>Ngày duyệt</strong>}
                             span={1}>{record.approveUser2.processDate}</Descriptions.Item>
        </Descriptions>
      </ExpandContent>

    )
  }

  useEffect(() => {
    let newMockupData = []
    for (let i = 0; i < 5; i++) {
      newMockupData.push(
        {
          id: i,
          transactionId: uuid().substring(0, 16).replaceAll('-', ''),
          transactionType: 'Liên kết',
          transactionStatus: i % 4, //TRANSACTION_STATUS.APPROVED
          createdUser: 'Nguyễn Văn A',
          createdDate: moment().format('hh:mm  DD-MM-YYYY'),
          processStatus: i % 4, //PROCESS_STATUS.WAITING
          bankName: 'Sacombank',
          bankAccountNumber: '12345****1000',
          bankLinkType: 'Thẻ',
          approveUser1: {
            name: 'Trần Văn B',
            processStatus: i % 4, //PROCESS_STATUS.APPROVED
            processDate: moment().format('hh:mm  DD-MM-YYYY'),
          },
          approveUser2: {
            name: 'Lê Văn C',
            processStatus: i % 4, //PROCESS_STATUS.APPROVED
            processDate: moment().format('hh:mm  DD-MM-YYYY'),
          },
        },
      )
    }
    setMockupData(newMockupData)
  }, [])
  return (
    <CollapsePanelLinkBankWrapper>
      <Table
        bordered={false}
        expandable={{
          expandedRowRender: record => renderExpandRow(record),
        }}
        dataSource={mockupData}
        columns={columns}
        rowKey={record => record.id}
        pagination={false} />
    </CollapsePanelLinkBankWrapper>
  )
}

CollapsePanelLinkBank.propTypes = {}

export default CollapsePanelLinkBank