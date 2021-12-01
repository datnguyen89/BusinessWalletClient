import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { DownOutlined } from '@ant-design/icons'
import { Dropdown, Menu } from 'antd'
import { DropdownCustom, InfoAccountWrapper } from './InfoAccountAreaStyled'
import InfoAccount from '../InfoAccount'
import InfoAccountDropdown from '../InfoAccountDropdown'

const InfoAccountArea = props => {
  const { callbackBankAccount, data } = props
 useEffect(() => {
   // console.log(data)
 }, [data])
  const menu = (
    <Menu>
      {
        data.map(item => (
          <Menu.Item key={item.id} onClick={() => callbackBankAccount(item)}>
            <a target='_blank' rel='noopener noreferrer' >
              <InfoAccountDropdown data={item} enableBorder={true}></InfoAccountDropdown>
            </a>
          </Menu.Item>
        ))
      }
    </Menu>
  )

  return (
    <InfoAccountWrapper>
      <InfoAccount data={data.find(item => item.default)} enableBorder={false}></InfoAccount>
      <DropdownCustom
        overlay={menu}
        trigger={['click']}
        placement="bottomRight"
        overlayClassName={'dropdown-style-info-acount-class'}
      >
        <a className='ant-dropdown-link' onClick={e => e.preventDefault()}>
          Đổi tài khoản <DownOutlined />
        </a>
      </DropdownCustom>
    </InfoAccountWrapper>
  )
}

InfoAccountArea.propTypes = {
  listLinkedCard: PropTypes.array,
  callbackBankAccount: PropTypes.func
}

export default InfoAccountArea