import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { DownOutlined } from '@ant-design/icons'
import { Dropdown, Menu } from 'antd'
import {
  DropdownCustom,
  InfoAccountOverLayItem,
  InfoAccountOverLayWrapper,
  InfoAccountWrapper,
} from './InfoAccountAreaStyled'
import InfoAccount from '../InfoAccount'
import InfoAccountDropdown from '../InfoAccountDropdown'
import { RowFlexEndDiv } from '../CommonStyled/CommonStyled'

const InfoAccountArea = props => {
  const { callbackBankAccount, data } = props
  useEffect(() => {
    // console.log(data)
  }, [data])
  const menu = (
    <InfoAccountOverLayWrapper>
      {
        data.map(item => (
          <InfoAccountOverLayItem key={item.id} onClick={() => callbackBankAccount(item)}>
            <InfoAccountDropdown data={item} enableBorder={true} />
          </InfoAccountOverLayItem>
        ))
      }
    </InfoAccountOverLayWrapper>
  )

  return (
    <InfoAccountWrapper>
      <InfoAccount data={data.find(item => item.default)} enableBorder={false}></InfoAccount>
      <RowFlexEndDiv>
        <Dropdown
          overlay={menu}
          trigger={['click']}
          placement='bottomRight'
          overlayClassName={'dropdown-style-info-acount-class'}
        >
          <a className='ant-dropdown-link' onClick={e => e.preventDefault()}>
            Đổi tài khoản <DownOutlined />
          </a>
        </Dropdown>
      </RowFlexEndDiv>
    </InfoAccountWrapper>
  )
}

InfoAccountArea.propTypes = {
  listLinkedCard: PropTypes.array,
  callbackBankAccount: PropTypes.func,
}

export default InfoAccountArea