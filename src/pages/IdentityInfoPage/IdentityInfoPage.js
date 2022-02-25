import React from 'react'
import { inject, observer } from 'mobx-react'
import { IdentityInfoPageWrapper, NotLinkedCardBox, UserInfoBox, UserInfoBoxHeader } from './IdentityInfoPageStyled'
import { Helmet } from 'react-helmet/es/Helmet'
import MainBreadCrumb from '../../components/MainBreadCrumb'
import { BREADCRUMB_DATA, mockupLinkedCard, PAGES } from '../../utils/constant'
import { Avatar, Button, Col, Descriptions, Row } from 'antd'
import { ColorText, ColorTitle, WhiteRoundedBox } from '../../components/CommonStyled/CommonStyled'
import { UserOutlined } from '@ant-design/icons'
import IMAGES from '../../images'
import LinkedCardCarousel from '../../components/LinkedCardCarousel'
import { useHistory } from 'react-router-dom'
import numberUtils from '../../utils/numberUtils'
import stringUtils from '../../utils/stringUtils'

const IdentityInfoPage = props => {
  const { commonStore, profileStore } = props
  const history = useHistory()
  const { userProfile, entProfile } = profileStore

  const handleClickAddLink = (path) => {
    history.push(path)
  }

  return (
    <>
      <Helmet>
        <title>Thông tin định danh</title>
      </Helmet>
      <IdentityInfoPageWrapper>
        <MainBreadCrumb breadcrumbData={BREADCRUMB_DATA.IDENTITY} />
        <Row gutter={[16, 16]}>
          <Col span={17}>
            <WhiteRoundedBox height={'100%'}>
              <ColorTitle>
                Thông tin doanh nghiệp
              </ColorTitle>
              <Descriptions
                labelStyle={{ width: '20%' }}
                contentStyle={{ width: '30%' }}
                bordered
                column={2}>
                <Descriptions.Item label={'Tên tổ chức'}>
                  {entProfile?.businessName}
                </Descriptions.Item>
                <Descriptions.Item label={'Số ĐKKD/ GPTL'}>
                  {entProfile?.businessCertification}
                </Descriptions.Item>
                <Descriptions.Item label={'Tên viết tắt'}>
                  {entProfile?.shortName}
                </Descriptions.Item>
                <Descriptions.Item label={'Số điện thoại'}>
                  {entProfile?.phone}
                </Descriptions.Item>
                <Descriptions.Item label={'Ngày cấp'}>
                  {entProfile?.passportDate}
                </Descriptions.Item>
                <Descriptions.Item label={'Nơi cấp'}>
                  {entProfile?.passportPlace}
                </Descriptions.Item>
                <Descriptions.Item label={'Mã số thuế'}>
                  {entProfile?.taxCode}
                </Descriptions.Item>
                <Descriptions.Item label={'Email doanh nghiệp'}>
                  {entProfile?.email}
                </Descriptions.Item>
                <Descriptions.Item span={2} label={'Địa chỉ ĐKKD'}>
                  {entProfile?.businessCenterAddress}
                </Descriptions.Item>
                <Descriptions.Item span={2} label={'Địa chỉ giao dịch'}>
                  {entProfile?.tradingAddress}
                </Descriptions.Item>
              </Descriptions>
            </WhiteRoundedBox>
          </Col>
          <Col span={7}>
            <WhiteRoundedBox height={'100%'}>
              <UserInfoBox>
                <UserInfoBoxHeader>
                  <Avatar size={64} icon={userProfile?.avatar || <UserOutlined />} />
                  <ColorText color={'#fff'} fontWeight={600}>{userProfile?.fullName}</ColorText>
                </UserInfoBoxHeader>
                <Descriptions
                  labelStyle={{ width: '35%' }}
                  bordered
                  column={1}
                  size={'small'}>
                  <Descriptions.Item label={'Tên đăng nhập'}>{userProfile?.accountName}</Descriptions.Item>
                  <Descriptions.Item label={'Họ và tên'}>{userProfile?.fullName}</Descriptions.Item>
                  <Descriptions.Item label={'Số điện thoại'}>{userProfile?.mobile}</Descriptions.Item>
                  <Descriptions.Item label={'Email'}>{userProfile?.email}</Descriptions.Item>
                  <Descriptions.Item label={'Số giấy tờ tùy thân'}>{userProfile?.passport}</Descriptions.Item>
                  <Descriptions.Item label={'Ngày cấp'}>{userProfile?.passportDate}</Descriptions.Item>
                  <Descriptions.Item label={'Nơi cấp'}>{userProfile?.passportPlace}</Descriptions.Item>
                  <Descriptions.Item label={'Vai trò'}>{userProfile?.position}</Descriptions.Item>
                </Descriptions>
              </UserInfoBox>
            </WhiteRoundedBox>
          </Col>
          <Col span={17}>
            <WhiteRoundedBox>
              <ColorTitle>
                Thông tin tài khoản
              </ColorTitle>
              <Descriptions
                labelStyle={{ width: '20%' }}
                contentStyle={{ width: '30%' }}
                bordered
                column={{ xxl: 2, xl: 2, lg: 2, md: 2, sm: 1, xs: 1 }}
                size={'small'}>
                <Descriptions.Item label={'Số tài khoản'}>
                  {entProfile?.accountName}
                </Descriptions.Item>
                <Descriptions.Item label={'Số dư khả dụng'}>
                  {numberUtils.thousandSeparator(entProfile?.balance)}
                </Descriptions.Item>
                <Descriptions.Item label={'Số dư đóng băng'}>
                  {numberUtils.thousandSeparator(entProfile?.freezeBalance)}
                </Descriptions.Item>
                <Descriptions.Item label={'Trạng thái tài khoản'}>
                  {stringUtils.renderEntStatus(entProfile?.status)}
                </Descriptions.Item>
              </Descriptions>
            </WhiteRoundedBox>
          </Col>
          <Col span={7}>
            <WhiteRoundedBox>
              <NotLinkedCardBox>
                <ColorTitle>Liên kết thẻ</ColorTitle>
                <img src={IMAGES.ICON_ADD_CARD} alt={''} />
                <div style={{ marginBottom: 16 }}>
                  <ColorText color={'#B4B4B4'}>
                    Bạn chưa có thẻ ngân hàng lưu sẵn tại đây. Thanh toán nhanh hơn bằng cách liên kết thẻ ngân hàng vào
                    Ví PayMobi
                  </ColorText>
                </div>
                <Button type={'primary'}
                        onClick={() => handleClickAddLink(PAGES.ADD_LINK.PATH)}
                >Liên kết thẻ mới</Button>
              </NotLinkedCardBox>
            </WhiteRoundedBox>
            <WhiteRoundedBox margin={'16px 0 0 0'}>
              <ColorTitle>Thông tin tài khoản</ColorTitle>
              <LinkedCardCarousel listLinkedCard={mockupLinkedCard} />
            </WhiteRoundedBox>
          </Col>
        </Row>
      </IdentityInfoPageWrapper>
    </>
  )
}

IdentityInfoPage.propTypes = {}

export default inject('commonStore', 'profileStore')(observer(IdentityInfoPage))