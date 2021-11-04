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
  WrapperItem,
  WrapperDetail,
  FooterAction
} from './TranferPageStyled'

const data = [{
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

const DepositPage = () => {
  const [visibleTransInfo, setVisibleTransInfo] = useState(false)
  const [form] = Form.useForm();

  const handleBtnConfirmClick = (e) => {
    if (form.getFieldError('amount').length > 0) return
    setVisibleTransInfo(true)
  }

  const handleBtnBackClick = (e) => {
    console.log('handleBtnBackClick')
    setVisibleTransInfo(false)
  }

  const onFinish = (values) => {
    console.log('Success:', values);
    console.log('Success form:', form);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
    console.log('Failed form:', form);
  };

  const checkAmount = (_, value) => {
    console.log('amount:', value);
    if (value > 0) {
      return Promise.resolve();
    }

    return Promise.reject(new Error('Số tiền phải lớn hơn 0!'));
  };

  return (
    <DefaultLayout>
      <MainBreadCrumb breadcrumbData={BREADCRUMB_DATA.DEPOSIT} />
      <Wrapper>
        <Form
          name='basic'
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 18 }}
          initialValues={{ amount: 0 }}
          labelAlign='left'
          form={form}
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
                    <Input />
                  </Form.Item>
                </WrapperDetail>
                <WrapperLabel value='Nguồn tiền' />
                <br />
                <TransSourceFund />
              </DepositWrapper>
            </Col>

            {
              visibleTransInfo &&
              (<Col xxl={12} xl={12} lg={12} md={24} sm={24} xs={24}>
                <TransInfo data={data} title={title} />
              </Col>)
            }
          </Row>

          <TransActionFooter
            visibleBtnBack={visibleTransInfo}
            backClickCallback={handleBtnBackClick}
            confirmClickCallback={handleBtnConfirmClick}
          />
        </Form>
      </Wrapper >
    </DefaultLayout>
  )
}

DepositPage.propTypes = {}

export default inject('commonStore')(observer(DepositPage))