import React from 'react'
import PropTypes from 'prop-types'
import {
  Wrapper,
  SourceItem,
  SourceIcon
} from './TransSourceFundStyled'
import { Row, Col, Image, } from 'antd'

const sources = [{
  avatar: 'Sacombank',
  bankCode: 'STB',
  accountNumber: '970403********011'
}, {
  avatar: 'Vietcombank',
  bankCode: 'VCB',
  accountNumber: '970436***********123'
}]

const TransSourceFund = props => {
  return (
    <Wrapper>
      <Row align={'left'} gutter={[16, 16]}>
        {
          sources.map((item, index) =>
            <Col key={index}>
              <SourceItem>
                {/* <Image
                  alt=''
                  preview={false}

                  width={50}
                  height={50}
                /> */}
                <img
                  alt=''
                  src={'/assets/images/SACOMBANK.png'}
                  width={50}
                  height={50}
                />
                {/* <SourceIcon src={'/assets/images/SACOMBANK.png'} /> */}

                <span>{item.bankCode} | {item.accountNumber}</span>
              </SourceItem>
            </Col>,
          )
        }
      </Row>
    </Wrapper>
  )
}

TransSourceFund.propTypes = {}

export default TransSourceFund