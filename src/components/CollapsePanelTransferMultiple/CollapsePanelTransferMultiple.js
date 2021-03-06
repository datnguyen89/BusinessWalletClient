import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { CollapsePanelTransferMultipleWrapper } from './CollapsePanelTransferMultipleStyled'
import { Descriptions, Form, Modal, Pagination, Table } from 'antd'
import IconStatusLabel from '../IconStatusLabel'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { ExpandContent } from '../../pages/TransactionManagePage/TransactionManagePageStyled'
import { PROCESS_STATUS, TRANSACTION_STATUS, USER_PROCESS_STATUS } from '../../utils/constant'
import uuid from 'uuid'
import moment from 'moment'
import { PaginationLabel, RowSpaceBetweenDiv } from '../CommonStyled/CommonStyled'
import ICONS from '../../icons'
import StateTransferMethod from '../StateTransferMethod'

const CollapsePanelTransferMultiple = props => {
  const [visibleModalPreviewFile, setVisibleModalPreviewFile] = useState(false)
  const [mockupData, setMockupData] = useState([])

  const renderTransactionStatusIcon = (status) => {
    let icon = ''
    switch (status) {
      case TRANSACTION_STATUS.WAITING:
        icon = ICONS.WAITING_ICON
        break
      case TRANSACTION_STATUS.REJECTED:
        icon = ICONS.REJECTED_ICON
        break
      case TRANSACTION_STATUS.APPROVED:
        icon = ICONS.APPROVED_ICON
        break
      case TRANSACTION_STATUS.CONFIRMED:
        icon = ICONS.CONFIRMED_ICON
        break
      default:
        icon = ICONS.WAITING_ICON
        break
    }
    return icon
  }
  const renderUserApprovedIcon = (status) => {
    let icon = ''
    switch (status) {
      case USER_PROCESS_STATUS.WAITING:
        icon = ''
        break
      case USER_PROCESS_STATUS.REJECTED:
        icon = ICONS.USER_REJECTED
        break
      case USER_PROCESS_STATUS.APPROVED:
        icon = ICONS.USER_APPROVED
        break
      default:
        icon = ''
        break
    }
    return icon
  }
  const renderTransactionStatusLabel = (status) => {
    let label = ''
    switch (status) {
      case TRANSACTION_STATUS.WAITING:
        label = 'Ch??? duy???t'
        break
      case TRANSACTION_STATUS.REJECTED:
        label = 'T??? ch???i'
        break
      case TRANSACTION_STATUS.APPROVED:
        label = '???? ph?? duy???t'
        break
      case TRANSACTION_STATUS.CONFIRMED:
        label = '???? x??c nh???n'
        break
      default:
        label = 'Ch??? duy???t'
        break
    }
    return label
  }
  const renderProcessStatusIcon = (status) => {
    let icon = ''
    switch (status) {
      case PROCESS_STATUS.WAITING:
        icon = ICONS.TRANSACTION_WAITING
        break
      case PROCESS_STATUS.REJECTED:
        icon = ICONS.TRANSACTION_FAIL
        break
      case PROCESS_STATUS.APPROVED:
        icon = ICONS.TRANSACTION_SUCCESS
        break
      default:
        icon = ''
        break
    }
    return icon
  }
  const renderProcessStatusLabel = (status) => {
    let label = ''
    switch (status) {
      case TRANSACTION_STATUS.WAITING:
        label = '??ang ch??? x??? l??'
        break
      case TRANSACTION_STATUS.REJECTED:
        label = 'Th???t b???i'
        break
      case TRANSACTION_STATUS.APPROVED:
        label = 'Th??nh c??ng'
        break
      default:
        label = 'Ch??? duy???t'
        break
    }
    return label
  }
  const columns = [
    {
      title: 'STT',
      width: 55,
      align: 'center',
      render: (item, row, index) => index + 1,
    },
    {
      title: 'M?? l???nh',
      render: record => record.transactionId,
    },
    {
      title: 'L???nh',
      responsive: ['xxl', 'xl'],
      render: record => record.transactionType,
    },
    {
      title: 'Tr???ng th??i l???nh',
      responsive: ['xxl', 'xl'],
      render: record => (
        <IconStatusLabel icon={renderTransactionStatusIcon(record.transactionStatus)}
                         label={renderTransactionStatusLabel(record.transactionStatus)} />
      ),
    },
    {
      title: 'Ng?????i t???o',
      responsive: ['xxl', 'xl', 'md'],
      render: record => record.createdUser,
    },
    {
      title: 'Ng?????i duy???t',
      responsive: ['xxl', 'xl', 'md'],
      render: record => (
        <>
          <IconStatusLabel icon={renderUserApprovedIcon(record.approveUser1.userProcessStatus)}
                           label={record.approveUser1.name} />
          <br />
          <IconStatusLabel icon={renderUserApprovedIcon(record.approveUser2.userProcessStatus)}
                           label={record.approveUser2.name} />
        </>
      ),
    },
    {
      title: 'Ng??y t???o',
      responsive: ['xxl', 'xl'],
      render: record => record.createdDate,
    },
    {
      title: 'Tr???ng th??i x??? l??',
      responsive: ['xxl', 'xl'],
      render: record => (
        <IconStatusLabel icon={renderProcessStatusIcon(record.processStatus)} label={renderProcessStatusLabel(record.processStatus)} />
      ),
    },
    {
      title: 'H??nh ?????ng',
      align: 'center',
      render: record => (
        <>
          <img src={ICONS.TRASH_RED} alt={''}/>
        </>
      ),
    },
  ]

  const handleClickPreview = (record) => {
    setVisibleModalPreviewFile(true)
  }

  const renderExpandRow = (record) => {
    return (
      <ExpandContent>
        <Descriptions
          bordered
          column={{ xxl: 2, xl: 2, lg: 2, md: 2, sm: 1, xs: 1 }}
          size={'small'}>
          <Descriptions.Item label={'File chuy???n ti???n'} span={2}><a onClick={() => handleClickPreview(record)} href={'javascript:;'}>LuongT9.xlsx</a></Descriptions.Item>
          <Descriptions.Item label={'S??? t??i kho???n'}
                             span={1}>{record.bankAccountNumber}</Descriptions.Item>
          <Descriptions.Item label={'Lo???i li??n k???t'} span={1}>{record.bankLinkType}</Descriptions.Item>
          <Descriptions.Item label={'Ng?????i ki???m tra'}
                             span={1}>{record.approveUser1.name}</Descriptions.Item>
          <Descriptions.Item label={'Ng??y duy???t ki???m tra'}
                             span={1}>{record.approveUser1.processDate}</Descriptions.Item>
          <Descriptions.Item label={'Ng?????i duy???t'}
                             span={1}>{record.approveUser2.name}</Descriptions.Item>
          <Descriptions.Item label={'Ng??y duy???t'}
                             span={1}>{record.approveUser2.processDate}</Descriptions.Item>
        </Descriptions>
      </ExpandContent>

    )
  }

  useEffect(() => {
    let newMockupData = []
    for (let i = 0; i < 10; i++) {
      newMockupData.push(
        {
          id: i,
          transactionId: uuid().substring(0, 16).replaceAll('-', ''),
          transactionType: 'Li??n k???t',
          transactionStatus: i % 5, //TRANSACTION_STATUS.APPROVED
          createdUser: 'Nguy???n V??n A',
          createdDate: moment().format('hh:mm  DD-MM-YYYY'),
          processStatus: i % 4, //PROCESS_STATUS.WAITING
          bankName: 'Sacombank',
          bankAccountNumber: '12345****1000',
          bankLinkType: 'Th???',
          approveUser1: {
            name: 'Tr???n V??n B',
            userProcessStatus: i === 0 ? 2 : i % 4, //PROCESS_STATUS.APPROVED
            processDate: moment().format('hh:mm  DD-MM-YYYY'),
          },
          approveUser2: {
            name: 'L?? V??n C',
            userProcessStatus: i === 0 ? 2 : i % 4 + 1, //PROCESS_STATUS.APPROVED
            processDate: moment().format('hh:mm  DD-MM-YYYY'),
          },
        },
      )
    }
    setMockupData(newMockupData)
  }, [])

  return (
    <CollapsePanelTransferMultipleWrapper>
      <Table
        bordered={false}
        expandable={{
          expandedRowRender: record => renderExpandRow(record),
        }}
        dataSource={mockupData}
        columns={columns}
        rowKey={record => record.id}
        pagination={false} />
      <RowSpaceBetweenDiv margin={'16px 0'}>
        <PaginationLabel>
          Hi???n th??? 5 tr??n t???ng s??? 50 b???n ghi
        </PaginationLabel>
        <Pagination total={50} />
      </RowSpaceBetweenDiv>
      <Modal
        title="Chi ti???t File chuy???n ti???n"
        width={'90%'}
        footer={null}
        visible={visibleModalPreviewFile}
        onCancel={() => setVisibleModalPreviewFile(false)}>
        <StateTransferMethod />
      </Modal>

    </CollapsePanelTransferMultipleWrapper>
  )
}

CollapsePanelTransferMultiple.propTypes = {}

export default CollapsePanelTransferMultiple