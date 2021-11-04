import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { TransactionManagePageWrapper, TransactionManagerBody } from './TransactionManagePageStyled'
import DefaultLayout from '../../layouts/DefaultLayout'
import { Helmet } from 'react-helmet/es/Helmet'
import { BREADCRUMB_DATA, TRANSACTION_STATUS } from '../../utils/constant'
import MainBreadCrumb from '../../components/MainBreadCrumb'
import uuid from 'uuid'
import IconStatusLabel from '../../components/IconStatusLabel'
import { Col, Form, Row, Select } from 'antd'

const MockupData = [
  {
    id: 1,
    transactionId: uuid(),
    transactionType: 'Liên kết',
    status: TRANSACTION_STATUS.APPROVED,

  },
]

const TransactionManagePage = props => {

  // const []
  //
  // useEffect(() => {
  //
  // }, [])

  return (
    <DefaultLayout>
      <Helmet>
        <title>Quản lý giao dịch</title>
      </Helmet>
      <TransactionManagePageWrapper>
        <MainBreadCrumb breadcrumbData={BREADCRUMB_DATA.TRANSACTION_MANAGE} />
        <TransactionManagerBody>
          <Form colon={false}>
            <Form.Item name={'transactionStatus'} label={'Trạng thái'}>
              <Select>
                <Select.Option value={99}>Tất cả</Select.Option>
                <Select.Option value={TRANSACTION_STATUS.WAITING}>Chờ duyệt</Select.Option>
                <Select.Option value={TRANSACTION_STATUS.APPROVED}>Đã phê duyệt</Select.Option>
                <Select.Option value={TRANSACTION_STATUS.REJECTED}>Từ chối</Select.Option>
              </Select>
            </Form.Item>
          </Form>
          <Row align={'middle'}>
            <Col xxl={6} xl={6} lg={6} md={6} sm={6} xs={6}>

            </Col>
          </Row>
        </TransactionManagerBody>
      </TransactionManagePageWrapper>
    </DefaultLayout>
  )
}

TransactionManagePage.propTypes = {}

export default TransactionManagePage