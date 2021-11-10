import React, { useEffect } from 'react'
import { TransactionManagePageWrapper, TransactionManagerBody } from './TransactionManagePageStyled'
import DefaultLayout from '../../layouts/DefaultLayout'
import { Helmet } from 'react-helmet/es/Helmet'
import { BREADCRUMB_DATA, TRANSACTION_STATUS } from '../../utils/constant'
import MainBreadCrumb from '../../components/MainBreadCrumb'
import { Button, Col, Collapse, DatePicker, Form, Input, Row, Select } from 'antd'
import { CaretRightOutlined } from '@ant-design/icons'
import CollapsePanelLinkBank from '../../components/CollapsePanelLinkBank'

const { RangePicker } = DatePicker
const { Panel } = Collapse

const TransactionManagePage = props => {
  const [formFilter] = Form.useForm()

  useEffect(() => {
    formFilter.setFieldsValue({
      transactionStatus: TRANSACTION_STATUS.ALL,
    })
  }, [])

  return (
    <DefaultLayout>
      <Helmet>
        <title>Quản lý giao dịch</title>
      </Helmet>
      <TransactionManagePageWrapper>
        <MainBreadCrumb breadcrumbData={BREADCRUMB_DATA.TRANSACTION_MANAGE} />
        <TransactionManagerBody>
          <Form
            layout='inline'
            form={formFilter}
            colon={false}>
            <Row align={'middle'} style={{ width: '100%' }}>
              <Col xxl={6} xl={6} lg={6} md={6} sm={6} xs={6}>
                <Form.Item name={'transactionStatus'} label={'Trạng thái'}>
                  <Select>
                    <Select.Option value={TRANSACTION_STATUS.ALL}>Tất cả</Select.Option>
                    <Select.Option value={TRANSACTION_STATUS.WAITING}>Chờ duyệt</Select.Option>
                    <Select.Option value={TRANSACTION_STATUS.APPROVED}>Đã phê duyệt</Select.Option>
                    <Select.Option value={TRANSACTION_STATUS.REJECTED}>Từ chối</Select.Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col xxl={10} xl={10} lg={10} md={10} sm={10} xs={10}>
                <Form.Item name={'dateRange'} label={'Thời gian'}>
                  <RangePicker format={'DD-MM-YYYY'} inputReadOnly style={{ width: '100%' }} />
                </Form.Item>
              </Col>
              <Col xxl={6} xl={6} lg={6} md={6} sm={6} xs={6}>
                <Form.Item name={'keyword'} label={'Từ khóa'}>
                  <Input placeholder={'Từ khóa tìm kiếm'} />
                </Form.Item>
              </Col>
              <Col xxl={2} xl={2} lg={2} md={2} sm={2} xs={2}>
                <Button block type={'primary'}>Tìm kiếm</Button>
              </Col>
            </Row>
          </Form>
          <Collapse
            bordered={false}
            defaultActiveKey={['0']}
            expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
            className='site-collapse-custom-collapse'
          >
            <Panel header='Liên kết/Hủy liên kết' key='1' className='site-collapse-custom-panel'>
              <CollapsePanelLinkBank />
            </Panel>
            <Panel header='This is panel header 2' key='2' className='site-collapse-custom-panel'>
              <CollapsePanelLinkBank />
            </Panel>
            <Panel header='This is panel header 3' key='3' className='site-collapse-custom-panel'>
              <CollapsePanelLinkBank />
            </Panel>
          </Collapse>
        </TransactionManagerBody>
      </TransactionManagePageWrapper>
    </DefaultLayout>
  )
}

TransactionManagePage.propTypes = {}

export default TransactionManagePage