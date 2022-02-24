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
import { Menu, Dropdown, Button, message, Space, Tooltip, Table, Upload } from 'antd';
import { DownOutlined, ExportOutlined, InboxOutlined } from '@ant-design/icons';
import ICONS from '../../icons'

import {
  AreaCreateCommand,
  CreateCommandButton,
  InputDetail,
  DepositPageWrapper,
  TitleInfoService,
  WhiteRoundedInfoLink,
  ButtonDropDown,
  ButtonDownload,
  ButtonUpload,
  ButtonCheck
} from './TransferMultiplePageStyled'
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

  const columns = [
    {
      title: 'STT',
      dataIndex: 'stt',
    },
    {
      title: 'Tên tài khoản nhận',
      dataIndex: 'accountName',
    },
    {
      title: 'Số tài khoản nhận',
      dataIndex: 'accountNumber',
    },
    {
      title: 'Số tiền',
      dataIndex: 'amount',
    },
    {
      title: 'Nội dung chuyển tiền',
      dataIndex: 'note',
    },
  ];

  const data = [
    {
      stt: '1',
      accountName: 'NGUYEN VAN A',
      accountNumber: '0123456',
      amount: '100.000.000đ',
      note: 'Chuyển thanh toán dịch vụ đặt phòng',
    },
    {
      stt: '2',
      accountName: 'NGUYEN VAN A',
      accountNumber: '0123456',
      amount: '100.000.000đ',
      note: 'Chuyển thanh toán dịch vụ đặt phòng',
    }, {
      stt: '3',
      accountName: 'NGUYEN VAN A',
      accountNumber: '0123456',
      amount: '100.000.000đ',
      note: 'Chuyển thanh toán dịch vụ đặt phòng',
    }
  ];

  return (
    <DefaultLayout>
      <Helmet>
        <title>Chuyển tiền</title>
      </Helmet>
      <DepositPageWrapper>
        <MainBreadCrumb breadcrumbData={BREADCRUMB_DATA.TRANSFER_MULTIPLE} />
        <WhiteRoundedBox>
          <TitleInfoService>Thông tin chuyển tiền</TitleInfoService>

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
                        <Col>{receiveType?.value ?? 'Hình thức'}</Col>
                        <Col><DownOutlined /></Col>
                      </Row>
                    </ButtonDropDown>
                  </Dropdown>
                </Form.Item>

                <Form.Item>
                  <InputDetail
                    placeholder={'Tháng chi'}
                  />
                </Form.Item>

                <Form.Item>
                  <Row gutter={16}>
                    <Col className='gutter-row' span={4} >
                      <ButtonDownload>
                        {ICONS.DOWNLOAD_FILE_ICON}
                        <div>Tải file mẫu</div>
                      </ButtonDownload>
                    </Col>
                    <Col className='gutter-row' span={16} >
                      <ButtonUpload name="files" action="/upload.do">
                        {ICONS.UPLOAD_FILE_ICON}
                        <div>Update file danh sách</div>
                        <div>Chọn file hoặc kéo thả vào đây</div>
                      </ButtonUpload>
                    </Col>
                    <Col className='gutter-row' span={4} >
                      <ButtonCheck>
                        {ICONS.CHECK_FILE_ICON}
                        <div>Kiểm tra file</div>
                      </ButtonCheck>
                    </Col>
                  </Row>
                </Form.Item>
              </Col>
              <Col span={6} />
            </Row>

            <AreaCreateCommand>
              <CreateCommandButton type={disabledConfirmDeal ? 'default' : 'primary'} onClick={showModalConfirmDeal}
                disabled={disabledConfirmDeal}>Tạo lệnh</CreateCommandButton>
            </AreaCreateCommand>
          </Form>

          <TitleInfoService>
            <Row justify='space-between' align='middle'>
              <Col>Số lượng: <a href='_'>3</a> &nbsp; Tổng tiền <a href='_'>500.000.000đ</a></Col>
              <Col><a href='_'>Xuất file</a></Col>
            </Row>
          </TitleInfoService>

          <Table columns={columns} dataSource={data} />

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