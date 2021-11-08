import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { inject, observer } from 'mobx-react'
import DefaultLayout from '../../layouts/DefaultLayout'
import { BREADCRUMB_DATA } from '../../utils/constant'
import MainBreadCrumb from '../../components/MainBreadCrumb'
import { Input, Row, Col, Button, Form } from 'antd'
import WrapperLabel from '../../components/WrapperLabel'
import TransInfo from '../../components/TransInfo'
import TransSourceFund from '../../components/TransSourceFund'
import TransActionFooter from '../../components/TransActionFooter'

import {
  Wrapper,
  DepositWrapper,
  WrapperDetail,
} from './WithdrawPageStyled'

const DepositPage = () => {
  const [isConfirm, setIsConfirm] = useState(false)
  const [form] = Form.useForm();

  const handleBtnBackClick = (e) => {
    setIsConfirm(false)
  }

  const handleSubmit = (e) => {
    setIsConfirm(true)
  }

  const checkAmount = (_, value) => {
    console.log('amount:', value);
    if (value > 0) {
      return Promise.resolve();
    }

    return Promise.reject(new Error('Số tiền phải lớn hơn 0!'));
  };

  let transInfoData = [{
    label: 'Tài khoản chuyển',
    value: 'Sacombank | 123123********4012',
  }, {
    label: 'Tài khoản nhận',
    value: '000123435',
  }, {
    label: 'Tên tài khoản',
    value: 'Nguyen Van B',
  }, {
    label: 'Số tiền',
    value: '100.000.000 đ',
  }, {
    label: 'Nội dung chuyển',
    value: 'Chuyen test test',
  }, {
    label: 'Phí giao dịch',
    value: '5.000 đ',
  }, {
    label: 'Tổng tiền',
    value: '100.005.000 đ',
  }]

  const title = 'Thông tin giao dịch'

  // Get deposit data
  useEffect(() => {

  });

  return (
    <DefaultLayout>
      <MainBreadCrumb breadcrumbData={BREADCRUMB_DATA.TRANFER} />
      <Wrapper>
        <Form
          name='basic'
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 18 }}
          initialValues={{ amount: 0 }}
          labelAlign='left'
          form={form}
          onFinish={handleSubmit}
        >
          <Row align={'center'}>
            <Col xxl={12} xl={12} lg={16} md={24} sm={24} xs={24}>
              <DepositWrapper>
                <WrapperLabel value='Thông tin chuyển tiền' />
                <WrapperDetail>
                  <Form.Item
                    label='Tài khoản chuyển'
                  >
                    <Row>
                      <Col span={12}>452834901233
                      </Col>
                      <Col span={12} style={{ fontWeight: 600, textAlign: 'right' }}>
                        Số dư: 100.500.000 đ
                      </Col>
                    </Row>
                  </Form.Item>

                  <Form.Item
                    label='Tài khoản'
                    name='toAccount'
                  >
                    <Input disabled={isConfirm} />
                  </Form.Item>
                  <Form.Item
                    label='Nhập số tiền'
                    name='amount'
                    rules={[{ validator: checkAmount }]}
                  >
                    <Input disabled={isConfirm} />
                  </Form.Item>
                  <Form.Item
                    label='Nội dung'
                    name='note'
                  >
                    <Input disabled={isConfirm} />
                  </Form.Item>
                </WrapperDetail>
              </DepositWrapper>
            </Col>

            {
              isConfirm &&
              (<Col xxl={12} xl={12} lg={12} md={24} sm={24} xs={24}>
                <TransInfo data={transInfoData} title={title} />
              </Col>)
            }
          </Row>

          <TransActionFooter
            isConfirm={isConfirm}
            backClickCallback={handleBtnBackClick}
          />
        </Form>
      </Wrapper >
    </DefaultLayout>
  )
}

DepositPage.propTypes = {}

export default inject('commonStore')(observer(DepositPage))