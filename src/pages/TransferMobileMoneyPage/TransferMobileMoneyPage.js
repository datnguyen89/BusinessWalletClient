import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { TimelineWrapper, TransactionMMWrapper, TransferMobileMoneyPageWrapper } from './TransferMobileMoneyPageStyled'
import DefaultLayout from '../../layouts/DefaultLayout'
import { Helmet } from 'react-helmet/es/Helmet'
import { BREADCRUMB_DATA } from '../../utils/constant'
import MainBreadCrumb from '../../components/MainBreadCrumb'
import { RowFlexDiv } from '../../components/CommonStyled/CommonStyled'
import { Button, Form, Input, Steps } from 'antd'

const { Step } = Steps

const TransferMobileMoneyPage = props => {
  const [processStep, setProcessStep] = useState(0)

  const handleClickStep = (step) => {
    console.log(step)
    setProcessStep(step)
  }

  return (
    <DefaultLayout>
      <Helmet>
        <title>Nạp/Rút Mobifone Money</title>
      </Helmet>
      <TransferMobileMoneyPageWrapper>
        <MainBreadCrumb breadcrumbData={BREADCRUMB_DATA.MOBILE_MONEY} />
        <RowFlexDiv>
          <TimelineWrapper>
            <Steps direction='vertical' progressDot current={processStep} onChange={handleClickStep}>
              <Step title='Nhập tài khoản' />
              <Step title='Kiểm tra thông tin' />
              <Step title='Nạp/Rút' />
              <Step title='Thông tin giao dịch' />
            </Steps>
          </TimelineWrapper>
          <TransactionMMWrapper>
            <Form>
              <Form.Item label={'Tài khoản Mobifone Money'}>

                <Input placeholder={'Nhập số tài khoản Mobifone Money'} />
                <Button>Tra cứu</Button>
              </Form.Item>
            </Form>
          </TransactionMMWrapper>
        </RowFlexDiv>
      </TransferMobileMoneyPageWrapper>
    </DefaultLayout>
  )
}

TransferMobileMoneyPage.propTypes = {}

export default TransferMobileMoneyPage