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
import ConditionDisplay from '../../components/ConditionDisplay'
import IMAGES from '../../images'
import ProcessWalletToMm from './ProcessWalletToMm'
import ConfirmWalletToMm from './ConfirmWalletToMm'
import ConfirmWalletToMmSmall from './ConfirmWalletToMmSmall'
import ProcessMmToWallet from './ProcessMmToWallet'
import ConfirmMmToWallet from './ConfirmMmToWallet'
import ConfirmMmToWalletSmall from './ConfirmMmToWalletSmall'
import ConfirmModal from '../../components/ConfirmModal'
import OtpModal from '../../components/OtpModal'
import SuccessModal from '../../components/SuccessModal'
import ConditionRender from '../../components/ConditionRender'

const { Step } = Steps


const TransferMobileMoneyPage = props => {
  const { mobileMoneyStore } = props
  const { MMUserInfo } = mobileMoneyStore

  const [processStep, setProcessStep] = useState(0)

  const [showWalletToMm, setShowWalletToMm] = useState(false)
  const [showMmToWallet, setShowMmToWallet] = useState(false)
  const [visibleConfirm, setVisibleConfirm] = useState(false)
  const [visibleOpt, setVisibleOpt] = useState(false)
  const [visibleSuccess, setVisibleSuccess] = useState(false)

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
  const handleClickWalletToMm = () => {
    setProcessStep(2)
    setShowWalletToMm(true)
    setShowMmToWallet(false)
  }

  const handleClickMmToWallet = () => {
    setProcessStep(2)
    setShowWalletToMm(false)
    setShowMmToWallet(true)
  }

  const handleCallbackProcessWalletToMm = (formCollection) => {
    console.log(formCollection)
    setProcessStep(3)
  }
  const handleCallbackConfirmWalletToMm = () => {
    // Show confirm Modal
    setVisibleConfirm(true)
  }
  const handleCancelConfirmWalletToMm = () => {
    setProcessStep(2)
  }
  const handleCallbackProcessMmToWallet = (formCollection) => {
    console.log(formCollection)
    setProcessStep(3)
  }
  const handleCallbackConfirmMmToWallet = () => {
    // Show confirm Modal
    setVisibleConfirm(true)
  }
  const handleCancelConfirmMmToWallet = () => {
    setProcessStep(2)
  }
  const handleConfirmCreateTransaction = () => {
    if (showWalletToMm) {
      console.log('Xử lý tạo giao dịch chuyển từ ví sang MM, gửi otp')
      setVisibleConfirm(false)
      setVisibleOpt(true)
    }
    if (showMmToWallet) {
      console.log('Xử lý tạo giao dịch chuyển từ MM sang ví, gửi otp')
      setVisibleConfirm(false)
      setVisibleOpt(true)
    }
  }
  const handleConfirmOtp = (otp) => {
    if (showWalletToMm) {
      console.log('Gọi api xác thực otp cho giao dịch chuyển từ ví sang MM', otp)
      // Thành công
      setVisibleOpt(false)
      setVisibleSuccess(true)
      // Thất bại show message lỗi
    }
    if (showMmToWallet) {
      console.log('Gọi api xác thực otp cho giao dịch chuyển từ MM sang ví', otp)
      // Thành công
      setVisibleOpt(false)
      setVisibleSuccess(true)
      // Thất bại show message lỗi
    }
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
              <ConditionDisplay visible={processStep < 2}>
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
                <ConditionDisplay visible={processStep === 1}>
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
                          <Button onClick={handleClickWalletToMm} type={'default'}>Ví sang Mobifone Money</Button>
                          <Button onClick={handleClickMmToWallet} type={'primary'}>Mobifone Money sang Ví</Button>
                        </Space>
                      </>
                  }
                </ConditionDisplay>
              </ConditionDisplay>
              <ConditionRender visible={processStep === 2}>
                <ProcessWalletToMm
                  visible={showWalletToMm}
                  callbackProcessWalletToMm={handleCallbackProcessWalletToMm} />
                <ProcessMmToWallet
                  visible={showMmToWallet}
                  callbackProcessMmToWallet={handleCallbackProcessMmToWallet} />
              </ConditionRender>
              <ConditionRender visible={processStep === 3}>
                <ConfirmWalletToMm
                  visible={showWalletToMm}
                  onCancel={handleCancelConfirmWalletToMm}
                  callbackConfirmWalletToMm={handleCallbackConfirmWalletToMm} />
                <ConfirmMmToWallet
                  visible={showMmToWallet}
                  onCancel={handleCancelConfirmMmToWallet}
                  callbackConfirmMmToWallet={handleCallbackConfirmMmToWallet} />
              </ConditionRender>
            </MMProcessBox>
          </Col>
          <Col xxl={8} xl={8} lg={8} md={8} sm={8} xs={8}>
            <ConditionRender visible={processStep === 3}>
              <ConfirmWalletToMmSmall visible={showWalletToMm} />
              <ConfirmMmToWalletSmall visible={showMmToWallet} />
            </ConditionRender>
          </Col>
        </Row>
      </TransferMobileMoneyPageWrapper>
      <ConfirmModal
        description={'Bạn có chắc chắn muốn lưu lệnh vừa tạo'}
        visible={visibleConfirm}
        onCancel={() => setVisibleConfirm(false)}
        callbackConfirm={handleConfirmCreateTransaction} />
      <OtpModal
        visible={visibleOpt}
        callbackOtp={handleConfirmOtp}
        onCancel={() => setVisibleOpt(false)}
        phoneNumber={'0987654321'} />
      <SuccessModal
        icon={IMAGES.SUCCESS_CREATE_TRANSACTION}
        description={'Bạn đã lập lệnh thành công'}
        visible={visibleSuccess}
        callbackSuccess={() => setVisibleSuccess(false)} />
    </DefaultLayout>
  )
}

TransferMobileMoneyPage.propTypes = {}

export default inject('mobileMoneyStore')(observer(TransferMobileMoneyPage))