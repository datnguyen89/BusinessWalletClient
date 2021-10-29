import React from 'react'
import PropTypes from 'prop-types'
import {
  HomeWidgetsWrapper,
  WidgetItemBottom,
  WidgetItemBox,
  WidgetItemCount,
  WidgetItemTop,
} from './HomeWidgetsStyled'
import { Col, Row } from 'antd'
import { HOME_WIDGET_DATA } from '../../utils/constant'
import ICONS from '../../icons'

const HomeWidgets = props => {
  return (
    <HomeWidgetsWrapper>
      <Row align={'middle'} gutter={[16, 16]}>
        {
          HOME_WIDGET_DATA.map(item =>
            <Col xxl={8} xl={8} lg={8} md={8} sm={24} xs={24}>
              <WidgetItemBox>
                <WidgetItemTop>
                  <WidgetItemCount color={item.COLOR}>
                    {item.NUMBER}
                  </WidgetItemCount>
                  <img src={item.ICON} alt={''} />
                </WidgetItemTop>
                <WidgetItemBottom background={item.COLOR}>
                  {item.LABEL}
                </WidgetItemBottom>
              </WidgetItemBox>
            </Col>,
          )
        }
      </Row>
    </HomeWidgetsWrapper>
  )
}

HomeWidgets.propTypes = {}

export default HomeWidgets