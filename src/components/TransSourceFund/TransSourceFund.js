import React from 'react'
import PropTypes from 'prop-types'
import {
  Wrapper,
  SourceItem
} from './TransSourceFundStyled'
import { Row, Col, Image } from 'antd'

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
          sources.map(item =>
            <Col>
              <SourceItem>
                <Image src={'/assets/images/SACOMBANK.png'} />
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