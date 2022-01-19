import React, { useEffect, useState } from 'react'
import DefaultLayout from '../../layouts/DefaultLayout'
import MainBreadCrumb from '../../components/MainBreadCrumb'
import { BREADCRUMB_DATA } from '../../utils/constant'
import { Helmet } from 'react-helmet/es/Helmet'
import { WhiteRoundedBox } from '../../components/CommonStyled/CommonStyled'
import { Col, Row, Form } from 'antd'
import SuggestAmountMoney from '../../components/SuggestAmountMoney'
import LinkDirectedBank from '../../components/LinkDirectedBank/LinkDirectedBank'
import LinkInternalBank from '../../components/LinkInternalBank/LinkInternalBank'
import ModalCustomCommandForm from '../../components/ModalCustomCommandForm/ModalCustomCommandForm'
import { inject, observer } from 'mobx-react'
import InfoAccountArea from '../../components/InfoAccountArea'
import { Menu, Dropdown, Button, message, Space, Tooltip } from 'antd';
import { DownOutlined, UserOutlined } from '@ant-design/icons';

import {
  AreaCreateCommand,
  CreateCommandButton,
  InputDetail,
  DepositPageWrapper,
  TitleInfoService,
  WhiteRoundedInfoLink,
  ButtonDropDown,
  TextAreaDetail
} from './TransferWalletPageStyled'
import numberUtils from '../../utils/numberUtils'

const DepositPage = props => {
  const { accountWalletStore } = props
  const [form] = Form.useForm();
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [selectedBankAccount, setSelectedBankAccount] = useState(null)
  const [transferAmount, setTransferAmount] = useState(null)
  const [disabledConfirmDeal, setDisabledConfirmDeal] = useState(true)
  const [receiveType, setReceiveType] = useState(null)

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
    // setTransferAmount(value)
  }

  const lstReceiveTypes = [
    { key: '1', value: 'Ví điện tử' },
    { key: '2', value: 'Tài khoản ngân hàng' }
  ]

  const showModalConfirmDeal = () => {
    let arrField = {
      // 'Nguồn tiền': selectedFund?.accountNumber,
      'Tài khoản nhận': receiveType?.value,
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

  const receiveTypeMenu = (
    <Menu onClick={handleReceiveTypeClick}>
      {
        lstReceiveTypes.map(item =>
          <Menu.Item key={item.key} value={item.value}>
            {item.value}
          </Menu.Item>
        )
      }
    </Menu>
  );

  function handleReceiveTypeClick({ key }) {
    let selectedType = lstReceiveTypes.find(item => item.key === key)
    setReceiveType(selectedType)
    console.log('selectedType', selectedType)
  }

  return (
    <DefaultLayout>
      <Helmet>
        <title>Chuyển tiền</title>
      </Helmet>
      <DepositPageWrapper>
        <MainBreadCrumb breadcrumbData={BREADCRUMB_DATA.DEPOSIT} />
        <WhiteRoundedBox margin={'0 16px 16px 16px'}>
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

                <Form.Item>
                  <Dropdown
                    overlay={receiveTypeMenu}
                    trigger={['click']}
                  >
                    <ButtonDropDown>
                      <Row justify='space-between' align='middle'>
                        <Col>{receiveType?.value ?? 'Tài khoản nhận'}</Col>
                        <Col><DownOutlined /></Col>
                      </Row>
                    </ButtonDropDown>
                  </Dropdown>
                </Form.Item>

                <Form.Item>
                  <InputDetail
                    placeholder={'Nhập số tài khoản/số điện thoại nhận'}
                  />
                </Form.Item>

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
                  // value={transferAmount}

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