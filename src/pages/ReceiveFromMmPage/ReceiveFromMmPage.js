import React, { useEffect, useState } from 'react'
import DefaultLayout from '../../layouts/DefaultLayout'
import MainBreadCrumb from '../../components/MainBreadCrumb'
import { BREADCRUMB_DATA } from '../../utils/constant'
import { Helmet } from 'react-helmet/es/Helmet'
import { WhiteRoundedBox } from '../../components/CommonStyled/CommonStyled'
import { Col, Row, Form } from 'antd'
import SuggestAmountMoney from '../../components/SuggestAmountMoney'
import ModalCustomCommandForm from '../../components/ModalCustomCommandForm/ModalCustomCommandForm'
import { inject, observer } from 'mobx-react'
import InfoAccountArea from '../../components/InfoAccountArea'

import {
  AreaCreateCommand,
  CreateCommandButton,
  InputDetail,
  DepositPageWrapper,
  TitleInfoService,
  WhiteRoundedInfoLink,
  TextAreaDetail
} from './ReceiveFromMmPageStyled'
import numberUtils from '../../utils/numberUtils'

const DepositPage = props => {
  const { accountWalletStore } = props
  const [form] = Form.useForm();
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [selectedBankAccount, setSelectedBankAccount] = useState(null)
  const [transferAmount, setTransferAmount] = useState(null)
  const [disabledConfirmDeal, setDisabledConfirmDeal] = useState(true)

  const [fields, setFields] = useState(null)

  const handleSelectedBankAccount = (value) => {
    console.log('handleSelectedWalletAccount', value)
    setSelectedBankAccount(value)
  }

  const handleSelectedSuggestAmountMoney = (value) => {
    console.log('handleSelectedSuggestAmountMoney', value)

    form.setFieldsValue({
      transferAmount: value,
    });
  }
  const showModalConfirmDeal = () => {
    let arrField = {
      'Số tài khoản nhận': '0312345645',
      'Tên tài khoản nhận': 'Nguyễn Văn A',
      'Số tiền': numberUtils.thousandSeparator(transferAmount) + 'đ',
      'Nội dung': 'Chuyển tiền thanh toán xyz',
      'Phí giao dịch': '0đ',
      'Tổng tiền': numberUtils.thousandSeparator(transferAmount) + 'đ',
    }
    console.log('arrField', arrField)
    setFields(arrField)
    setIsModalVisible(true)
  }

  const hanledDepositValueChanged = (e) => {
    setTransferAmount(e.target.value)
  }

  const handleSetIsModalVisible = (value) => {
    setIsModalVisible(value)
  }

  const onFormFinish = (value) => {
    console.log('onFormFinish', value)
  }


  useEffect(() => {
    if (transferAmount > 0 && selectedBankAccount)
      setDisabledConfirmDeal(false)
    else
      setDisabledConfirmDeal(true)

  }, [transferAmount, selectedBankAccount])

  useEffect(() => {
    accountWalletStore.getAccountWallets();
  }, []);

  return (
    <DefaultLayout>
      <Helmet>
        <title>Nhận tiền từ MobiMoney</title>
      </Helmet>
      <DepositPageWrapper>
        <MainBreadCrumb breadcrumbData={BREADCRUMB_DATA.RECEIVE_FROM_MM} />
        <WhiteRoundedBox>
          <Row>
            <Col span={24}>
              <TitleInfoService>Thông tin chuyển tiền</TitleInfoService>
            </Col>
          </Row>

          <Form
            form={form}
            onFinish={onFormFinish}
            autoComplete="off"
          >
            <Row>
              <Col span={6} />
              <Col span={12}>
                <Form.Item>
                  <WhiteRoundedInfoLink margin={'0'}>
                    <InfoAccountArea
                      callbackBankAccount={handleSelectedBankAccount}
                      data={[]}
                      selectedAccount={selectedBankAccount}
                    />
                  </WhiteRoundedInfoLink>
                </Form.Item>

                <Row gutter={16}>
                  <Col span={12}>
                    <Form.Item>
                      <InputDetail
                        placeholder={'Nhập số tài khoản MobiFone Money'}
                      />
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item>
                      <InputDetail
                        placeholder={'Nhập số giấy tờ tùy thân'}
                      />
                    </Form.Item>
                  </Col>
                </Row>

                <Form.Item>
                  <InputDetail
                    placeholder={'Tên người nhận'}
                    disabled />
                </Form.Item>

                <Form.Item
                  name='transferAmount'
                >
                  <InputDetail
                    min={1}
                    placeholder={'Nhập số tiền'}
                    onChange={hanledDepositValueChanged}
                  />
                </Form.Item>

                <Form.Item>
                  <SuggestAmountMoney amountMoney={transferAmount ?? 0} selectedSuggestAmountMoneyCallback={handleSelectedSuggestAmountMoney} />
                </Form.Item>

                <Form.Item>
                  <TextAreaDetail
                    showCount
                    maxLength={300}
                    placeholder={'Nội dung chuyển tiến'}
                    allowClear
                    autoSize={{ minRows: 3 }}
                  />
                </Form.Item>
              </Col>
              <Col span={6} />
            </Row>

            <AreaCreateCommand>
              <CreateCommandButton type={disabledConfirmDeal ? 'default' : 'primary'} onClick={showModalConfirmDeal}
                disabled={disabledConfirmDeal}>Tạo lệnh</CreateCommandButton>
            </AreaCreateCommand>
          </Form>

        </WhiteRoundedBox>
      </DepositPageWrapper>
      <ModalCustomCommandForm
        title={'Xác nhận chuyển tiền'}
        fields={fields}
        visible={isModalVisible}
        setIsModalVisible={handleSetIsModalVisible} />
    </DefaultLayout>
  )
}

DepositPage.propTypes = {}

export default inject('providerStore', 'accountWalletStore')(observer(DepositPage))