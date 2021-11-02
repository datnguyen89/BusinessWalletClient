import React from 'react'
import { HomeServicesWrapper, ServiceBox, ServiceDescription, ServiceName } from './HomeServicesStyled'
import { Badge, Col, Row } from 'antd'
import { MAIN_INFO_COLOR, SERVICES_DATA } from '../../utils/constant'

const HomeServices = props => {
  return (
    <HomeServicesWrapper>
      <Row align={'middle'} gutter={[16, 16]} style={{ alignItems: 'stretch' }}>
        {
          SERVICES_DATA.map(item =>
            <Col xxl={4} xl={6} lg={6} md={12} sm={12} xs={24} flex={'stretch'} key={item.ID}>
              {
                item.BADGE_NUMBER > 0 ?
                  <Badge.Ribbon text={item.BADGE_NUMBER} color={MAIN_INFO_COLOR}>
                    <ServiceBox>
                      <img src={item.ICON} alt={''} />
                      <ServiceName>
                        {item.SERVICE_NAME}
                      </ServiceName>
                      <ServiceDescription>
                        {item.DESCRIPTION}
                      </ServiceDescription>
                    </ServiceBox>
                  </Badge.Ribbon>
                  :
                  <ServiceBox>
                    <img src={item.ICON} alt={''} />
                    <ServiceName>
                      {item.SERVICE_NAME}
                    </ServiceName>
                    <ServiceDescription>
                      {item.DESCRIPTION}
                    </ServiceDescription>
                  </ServiceBox>
              }

            </Col>,
          )
        }
      </Row>
    </HomeServicesWrapper>
  )
}

HomeServices.propTypes = {}

export default HomeServices