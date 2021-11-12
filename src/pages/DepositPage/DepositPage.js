import React, { useEffect, useState } from 'react'
import { inject, observer } from 'mobx-react'
import DefaultLayout from '../../layouts/DefaultLayout'
import { BREADCRUMB_DATA } from '../../utils/constant'
import MainBreadCrumb from '../../components/MainBreadCrumb'
import { Input, Row, Col, Form } from 'antd'
import WrapperLabel from '../../components/WrapperLabel'
import TransInfo from '../../components/TransInfo'
import TransSourceFund from '../../components/TransSourceFund'
import TransActionFooter from '../../components/TransActionFooter'

import {
  Wrapper,
  DepositWrapper,
  WrapperDetail,
} from './DepositPageStyled'
import { Helmet } from 'react-helmet/es/Helmet'

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
    if (value > 10000) {
      return Promise.resolve();
    }

    return Promise.reject(new Error('Số tiền phải lớn hơn 10.000 đ!'));
  };

  let transInfoData = [{
    label: 'Nguồn tiền',
    value: 'Sacombank | 123123********4012',
  }, {
    label: 'Tài khoản nạp',
    value: '000123435',
  }, {
    label: 'Số tiền',
    value: '100.000.000 đ',
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
      <Helmet>
        <title>Nạp tiền</title>
      </Helmet>
      <MainBreadCrumb breadcrumbData={BREADCRUMB_DATA.DEPOSIT} />
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
                <WrapperLabel value='Thông tin nạp tiền' />
                <WrapperDetail>
                  <Form.Item
                    label='Tài khoản nạp'
                  >
                    452834901233
                  </Form.Item>

                  <Form.Item
                    label='Nhập số tiền'
                    name='amount'
                    rules={[{ validator: checkAmount }]}
                  >
                    <Input
                      disabled={isConfirm}
                    />
                  </Form.Item>
                </WrapperDetail>
                <WrapperLabel value='Nguồn tiền' />
                <br />
                <TransSourceFund />
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