import React from 'react'
import PropTypes from 'prop-types'
import {
  ImageCustom,
  ResultTable, SpanStatus, SpanValue,
  StateInformation,
  StateInformationExport,
  StateInformationText,
  StateTransferMethodWrapper,
} from './StateTransferMethodStyled'
import { Pagination, Space, Table } from 'antd'
import { PaginationLabel, RowSpaceBetweenDiv } from '../CommonStyled/CommonStyled'
import { AreaContractData } from '../Contract/ContractStyled'

const StateTransferMethod = props => {

  const dataContract = [
    {
      id: '1',
      receivednumbercard: '970420*******1234',
      owneracc: 'NGUYEN VAN A',
      countmoney: '18.000.000đ',
      contentpaymoney: 'Thanh toán lương T9/2021',
      fee: '0đ',
      error: 'Sai tài khoản',
      status: 1,
    },
    {
      id: '2',
      receivednumbercard: '970420*******1234',
      owneracc: 'NGUYEN VAN A',
      countmoney: '18.000.000đ',
      contentpaymoney: 'Thanh toán lương T9/2021',
      fee: '0đ',
      error: 'Sai tài khoản',
      status: 0,
    },
    {
      id: '3',
      receivednumbercard: '970420*******1234',
      owneracc: 'NGUYEN VAN A',
      countmoney: '18.000.000đ',
      contentpaymoney: 'Thanh toán lương T9/2021',
      fee: '0đ',
      error: 'Sai tài khoản',
      status: 0,
    },
    {
      id: '4',
      receivednumbercard: '970420*******1234',
      owneracc: 'NGUYEN VAN A',
      countmoney: '18.000.000đ',
      contentpaymoney: 'Thanh toán lương T9/2021',
      fee: '0đ',
      error: 'Sai tài khoản',
      status: 0,
    },
    {
      id: '5',
      receivednumbercard: '970420*******1234',
      owneracc: 'NGUYEN VAN A',
      countmoney: '18.000.000đ',
      contentpaymoney: 'Thanh toán lương T9/2021',
      fee: '0đ',
      error: 'Sai tài khoản',
      status: 1,
    },
  ]
  const columns = [
    {
      title: 'STT',
      render: (text, row, index) => (
        <span>{(index+1)}</span>
      )
    },
    {
      title: 'SỐ TK NHẬN',
      dataIndex: 'receivednumbercard',
      key: 'receivednumbercard',
    },
    {
      title: 'TÊN TÀI KHOẢN NHẬN',
      dataIndex: 'owneracc',
      key: 'owneracc',
    },
    {
      title: 'SỐ TIỀN',
      dataIndex: 'countmoney',
      key: 'countmoney',
    },
    {
      title: 'NỘI DUNG CHUYỂN TIỀN',
      dataIndex: 'contentpaymoney',
      key: 'contentpaymoney',
    },
    {
      title: 'PHÍ GIAO DỊCH',
      dataIndex: 'fee',
      key: 'fee',
    },
    {
      title: 'LỖI',
      render: (text, row, index) => (
        <div>
          {
            (row.status) ?
                <span><ImageCustom src={`${process.env.PUBLIC_URL}/assets/icons/successful_icon_transfer.png`} width="20px" height="20px"/> <SpanStatus>{row.error}</SpanStatus></span>:
              <span><ImageCustom src={`${process.env.PUBLIC_URL}/assets/icons/error_icon_transfer.png`} /> <SpanStatus>{row.error}</SpanStatus></span>
          }
        </div>
      ),
    },
  ]
  const { Column } = Table
  return (
    <StateTransferMethodWrapper>
      <StateInformation>
        <StateInformationText>
          <span>Số lượng: </span><SpanValue>50</SpanValue><span>Tổng tiền: </span><SpanValue>5.000.000.000
          VND</SpanValue>
        </StateInformationText>
        <StateInformationExport>
          <span>Xuất file</span>
        </StateInformationExport>
      </StateInformation>
      <ResultTable
        dataSource={dataContract}
        columns={columns}
        pagination={false}
        bordered={false}>
        {/*<Column*/}
        {/*  title: 'LỖI'*/}
        {/*  dataIndex: 'error'*/}
        {/*  key: 'error'*/}
        {/*  render={error => (*/}
        {/*    <>*/}
        {/*      {tags.map(tag => (*/}
        {/*        <Tag color="blue" key={tag}>*/}
        {/*          {tag}*/}
        {/*        </Tag>*/}
        {/*      ))}*/}
        {/*    </>*/}
        {/*  )}*/}
        {/*/>*/}
      </ResultTable>
      <RowSpaceBetweenDiv margin={'16px 0'}>
        <PaginationLabel>
          Hiển thị 5 trên tổng số 50 bản ghi
        </PaginationLabel>
        <Pagination total={50} />
      </RowSpaceBetweenDiv>
    </StateTransferMethodWrapper>
  )
}

StateTransferMethod.propTypes = {}

export default StateTransferMethod