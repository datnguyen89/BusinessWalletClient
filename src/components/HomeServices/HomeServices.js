import React from 'react'
import PropTypes from 'prop-types'
import { HomeServicesWrapper, ServiceBadge, ServiceBox, ServiceDescription, ServiceName } from './HomeServicesStyled'
import { Col, Row } from 'antd'
import { SERVICES_DATA } from '../../utils/constant'

const HomeServices = props => {
  return (
    <HomeServicesWrapper>
      <Row align={'middle'} gutter={[16, 16]} style={{ alignItems: 'stretch' }}>
        {
          SERVICES_DATA.map(item =>
            <Col xxl={4} xl={6} lg={6} md={12} sm={12} xs={24} flex={'stretch'}>
              <ServiceBox>
                {
                  item.BADGE_NUMBER > 0 && <ServiceBadge>{item.BADGE_NUMBER}</ServiceBadge>
                }
                <img src={item.ICON} alt={''} />
                <ServiceName>
                  {item.SERVICE_NAME}
                </ServiceName>
                <ServiceDescription>
                  {item.DESCRIPTION}
                </ServiceDescription>
              </ServiceBox>
            </Col>,
          )
        }
      </Row>
    </HomeServicesWrapper>
  )
}

HomeServices.propTypes = {}

export default HomeServices