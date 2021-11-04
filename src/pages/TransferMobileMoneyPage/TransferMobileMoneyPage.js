import React, { useState } from 'react'
import { inject, observer } from 'mobx-react'
import { NotFoundAccount, TransferMobileMoneyPageWrapper, MMProcessBox } from './TransferMobileMoneyPageStyled'
import DefaultLayout from '../../layouts/DefaultLayout'
import { Helmet } from 'react-helmet/es/Helmet'
import { BREADCRUMB_DATA } from '../../utils/constant'
import MainBreadCrumb from '../../components/MainBreadCrumb'
import { GrayTitle, RowFlexDiv, RowFlexEndDiv } from '../../components/CommonStyled/CommonStyled'
import { Button, Col, Descriptions, Form, Input, InputNumber, Row, Space, Steps } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
import numberUtils from '../../utils/numberUtils'
import validator from '../../validator'
import ConditionRender from '../../components/ConditionRender'
import IMAGES from '../../images'
import ProcessWalletToMM from './ProcessWalletToMM'
import ConfirmWalletToMM from './ConfirmWalletToMM'
import ConfirmWalletToMMSmall from './ConfirmWalletToMMSmall'
import ProcessMMToWallet from './ProcessMMToWallet'

const { Step } = Steps


const TransferMobileMoneyPage = props => {
  const { mobileMoneyStore } = props
  const { MMUserInfo } = mobileMoneyStore

  const [processStep, setProcessStep] = useState(0)

  const [showWalletToMM, setShowWalletToMM] = useState(false)
  const [showMMToWallet, setShowMMToWallet] = useState(false)

  const [formVerify] = Form.useForm()

  const handleClickStep = (step) => {
    if (step > processStep) return
    switch (step) {
      case 0:
        break
      case 1:
        break
      case 2:
        break
      case 3:
        break
      default:
        break
    }
    setProcessStep(step)
  }
  const handleClickVerifyAccount = (formCollection) => {
    let payload = {
      mobileMoneyAccount: formCollection.mobileMoneyAccount,
    }
    mobileMoneyStore.getMMUserInfo(payload)
      .then(res => {
        setProcessStep(1)
      })
  }
  const handleClickWalletToMM = () => {
    setProcessStep(2)
    setShowWalletToMM(true)
    setShowMMToWallet(false)
  }

  const handleClickMMToWallet = () => {
    setProcessStep(2)
    setShowWalletToMM(false)
    setShowMMToWallet(true)
  }

  const handleCallbackProcessWalletToMM = (formCollection) => {
    console.log(formCollection)
    setProcessStep(3)
  }
  const handleCallbackConfirmWalletToMM = () => {

  }
  const handleCancelConfirmWalletToMM = () => {
    setProcessStep(2)
  }
  const handleCallbackProcessMMToWallet = (formCollection) => {
    console.log(formCollection)
    setProcessStep(3)
  }
  const handleCallbackConfirmMMToWallet = () => {

  }
  const handleCancelConfirmMMToWallet = () => {
    setProcessStep(2)
  }

  return (
    <DefaultLayout>
      <Helmet>
        <title>Nạp/Rút Mobifone Money</title>
      </Helmet>
      <TransferMobileMoneyPageWrapper>
        <MainBreadCrumb breadcrumbData={BREADCRUMB_DATA.MOBILE_MONEY} />
        <Row style={{ padding: 14 }}>
          <Col xxl={4} xl={4} lg={4} md={4} sm={4} xs={4}>
            <Steps
              direction='vertical'
              progressDot
              current={processStep}
              onChange={handleClickStep}>
              <Step title='Nhập tài khoản' description={null} />
              <Step title='Kiểm tra thông tin' description={null} />
              <Step title='Nạp/Rút' description={null} />
              <Step title='Thông tin giao dịch' description={null} />
            </Steps>
          </Col>
          <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
            <MMProcessBox>
              <ConditionRender visible={processStep < 2}>
                <Form
                  colon={false}
                  form={formVerify}
                  requiredMark={false}
                  onFinish={handleClickVerifyAccount}>
                  <GrayTitle>Chuyển tiền MobiFone Money</GrayTitle>
                  <Form.Item
                    rules={[{ required: true, message: 'Vui lòng nhập số tài khoản Mobifone Money' }]}
                    name={'mobileMoneyAccount'}
                    label={'Tài khoản Mobifone Money'}>
                    <RowFlexDiv>
                      <Input placeholder={'Nhập số tài khoản Mobifone Money'} />
                      <Button
                        htmlType={'submit'}
                        type={'primary'}
                        style={{ marginLeft: 16 }}>
                        <SearchOutlined />
                        Tra cứu
                      </Button>
                    </RowFlexDiv>
                  </Form.Item>
                </Form>
                <ConditionRender visible={processStep === 1}>
                  <GrayTitle>Thông tin User</GrayTitle>
                  {
                    !MMUserInfo ?
                      <NotFoundAccount>
                        <img src={IMAGES.NOT_FOUND_ACCOUNT} alt={''} />
                        <div>Không tìm thấy số tài khoản</div>
                      </NotFoundAccount>
                      :
                      <>
                        <Descriptions
                          labelStyle={{ width: '25%' }}
                          contentStyle={{ width: '25%' }}
                          column={2}
                          size={'small'} bordered>
                          <Descriptions.Item label='Họ và tên'>Nguyễn văn A</Descriptions.Item>
                          <Descriptions.Item label='Số giấy tờ tùy thân'>0123456789</Descriptions.Item>
                        </Descriptions>
                        <Space
                          align={'center'}
                          style={{ marginTop: 16, width: '100%', justifyContent: 'center' }}>
                          <Button onClick={handleClickWalletToMM} type={'default'}>Ví sang Mobifone Money</Button>
                          <Button onClick={handleClickMMToWallet} type={'primary'}>Mobifone Money sang Ví</Button>
                        </Space>
                      </>
                  }
                </ConditionRender>
              </ConditionRender>
              <ConditionRender visible={processStep === 2}>
                <ProcessWalletToMM
                  visible={showWalletToMM}
                  callbackProcessWalletToMM={handleCallbackProcessWalletToMM} />
                <ProcessMMToWallet
                  visible={showMMToWallet}
                  callbackProcessMMToWallet={handleCallbackProcessMMToWallet} />
              </ConditionRender>
              <ConditionRender visible={processStep === 3}>
                <ConfirmWalletToMM
                  visible={showWalletToMM}
                  onCancel={handleCancelConfirmWalletToMM}
                  callbackConfirmWalletToMM={handleCallbackConfirmWalletToMM} />
              </ConditionRender>
            </MMProcessBox>
          </Col>
          <Col xxl={8} xl={8} lg={8} md={8} sm={8} xs={8}>
            <ConditionRender visible={processStep === 3}>
              <ConfirmWalletToMMSmall visible={showWalletToMM} />
            </ConditionRender>
          </Col>
        </Row>
      </TransferMobileMoneyPageWrapper>
    </DefaultLayout>
  )
}

TransferMobileMoneyPage.propTypes = {}

export default inject('mobileMoneyStore')(observer(TransferMobileMoneyPage))