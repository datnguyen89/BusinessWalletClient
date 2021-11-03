import React, { useEffect, useState } from 'react'
import { NotFoundAccount, TransferMobileMoneyPageWrapper, VerifyAccountBox } from './TransferMobileMoneyPageStyled'
import DefaultLayout from '../../layouts/DefaultLayout'
import { Helmet } from 'react-helmet/es/Helmet'
import { BREADCRUMB_DATA } from '../../utils/constant'
import MainBreadCrumb from '../../components/MainBreadCrumb'
import { GrayTitle, RowFlexDiv, RowFlexEndDiv } from '../../components/CommonStyled/CommonStyled'
import { Button, Col, Descriptions, Form, Input, InputNumber, Row, Space, Steps } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
import IMAGES from '../../images'
import numberUtils from '../../utils/numberUtils'
import validator from '../../validator'

const { Step } = Steps


const TransferMobileMoneyPage = props => {
  const currentBalance = 1000000000
  const [processStep, setProcessStep] = useState(0)
  const [balance, setBalance] = useState(currentBalance)

  const [showUserInfo, setShowUserInfo] = useState(false)
  const [showWalletToMM, setShowWalletToMM] = useState(false)
  const [showMMToWallet, setShowMMToWallet] = useState(false)

  const [formVerify] = Form.useForm()
  const [formWalletToMM] = Form.useForm()

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
  const handleClickVerifyAccount = () => {
    setShowUserInfo(true)
    setProcessStep(1)
  }
  const handleClickWalletToMM = () => {
    setProcessStep(2)
    setShowWalletToMM(true)
  }

  const handleClickMMToWallet = () => {
    setProcessStep(2)
    setShowMMToWallet(true)
  }

  const handleChangeAmount = (amount) => {
    if (!amount) {
      setBalance(currentBalance)
      return
    }
    if (amount >= currentBalance) {
      console.log(amount)
      formWalletToMM.setFieldsValue({
        amount: currentBalance,
      })
      setBalance(0)
      return
    }
    let newBalance = currentBalance - amount
    setBalance(newBalance)
  }
  const handleSubmitTransferWalletToMM = (formCollection) => {
    console.log(formCollection)
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
            <VerifyAccountBox>
              <div style={{ display: processStep < 2 ? 'block' : 'none' }}>
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
                {/*showUserInfo && processStep === 1*/}
                <div>
                  <GrayTitle>Thông tin User</GrayTitle>
                  {/*<NotFoundAccount>*/}
                  {/*  <img src={IMAGES.NOT_FOUND_ACCOUNT} alt={''} />*/}
                  {/*  <div>Không tìm thấy số tài khoản</div>*/}
                  {/*</NotFoundAccount>*/}
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
                    <Button onClick={handleClickWalletToMM} type={'primary'}>Ví sang Mobifone Money</Button>
                    <Button onClick={handleClickMMToWallet} type={'primary'}>Mobifone Money sang Ví</Button>
                  </Space>
                </div>
              </div>
              {
                processStep === 2 &&
                <>
                  {
                    showWalletToMM &&
                    <>
                      <GrayTitle>Chuyển tiền Mobifone Money</GrayTitle>
                      <Descriptions labelStyle={{ width: '50%' }} column={1} size={'small'} bordered>
                        <Descriptions.Item label='Tài khoản MobiFone Money'>0912 345 6789</Descriptions.Item>
                      </Descriptions>
                      <GrayTitle marginTop={'16px'}>Thông tin tài khoản Nhận</GrayTitle>
                      <Descriptions labelStyle={{ width: '50%' }} column={1} size={'small'} bordered>
                        <Descriptions.Item label='Họ và Tên'>Nguyễn Văn A</Descriptions.Item>
                        <Descriptions.Item label='Số giấy tờ tùy thân'>0123456789</Descriptions.Item>
                      </Descriptions>
                      <GrayTitle marginTop={'16px'} color={'#4C68EF'} background={'#CCD9FF'}>
                        Chuyển tiền từ ví đến Mobifone Money
                      </GrayTitle>
                      <Descriptions
                        labelStyle={{ width: '25%' }}
                        contentStyle={{ width: '25%' }}
                        column={2}
                        size={'small'} bordered>
                        <Descriptions.Item label='Tài khoản chuyển'>0987654321</Descriptions.Item>
                        <Descriptions.Item label='Số dư'>{numberUtils.thousandSeparator(balance)} đ</Descriptions.Item>
                      </Descriptions>
                      <Form
                        onFinish={handleSubmitTransferWalletToMM}
                        requiredMark={false}
                        form={formWalletToMM}
                        style={{ marginTop: 16 }}
                        labelAlign={'left'}
                        labelCol={{ span: 4 }}
                        wrapperCol={{ span: 20 }}
                        colon={false}>
                        <Form.Item
                          name={'amount'}
                          label={'Nhập số tiền'}
                          rules={[
                            { validator: validator.validateAmountMoney },
                          ]}>
                          <InputNumber
                            onChange={handleChangeAmount}
                            style={{ width: '100%' }}
                            formatter={value => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, '.')}
                            parser={value => value.replace(/\$\s?|(\.*)/g, '')}
                            min={0} step={1000} />
                        </Form.Item>
                        <Form.Item name={'description'} label={'Nội dung'}>
                          <Input placeholder={'Nội dung chuyển tiền'} />
                        </Form.Item>
                        <RowFlexEndDiv>
                          <Button type={'primary'} htmlType={'submit'}>Tiếp theo</Button>
                        </RowFlexEndDiv>
                      </Form>
                    </>
                  }
                  {
                    showMMToWallet &&
                    <div></div>
                  }
                </>
              }
              {
                processStep === 3 &&
                <div>

                </div>
              }
            </VerifyAccountBox>
          </Col>
        </Row>
      </TransferMobileMoneyPageWrapper>
    </DefaultLayout>
  )
}

TransferMobileMoneyPage.propTypes = {}

export default TransferMobileMoneyPage