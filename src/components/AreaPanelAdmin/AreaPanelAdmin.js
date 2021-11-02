import React from 'react'
import PropTypes from 'prop-types'
import { AreaPanelAdminAvatar, AreaPanelAdminLabel, AreaPannelAdminInfo } from '../EnterpriseInfo/EnterpriseInfoStyled'
import IMAGES from '../../images'
import {
  AreaEnterpriseInfoAreaDetailLineInfo,
  AreaEnterpriseInfoAreaDetailLineInfoLeft,
  AreaEnterpriseInfoAreaDetailLineInfoRight, AreaPanelAdminWrapper,
} from './AreaPanelAdminStyled'

const AreaPanelAdmin = props => {
  let dataAdministratorPanel = props.dataAdministratorPanel;

  return (
    <AreaPanelAdminWrapper>
      <AreaPanelAdminLabel background={IMAGES.ADMIN_BG}>
        <AreaPanelAdminAvatar>
          <img src={IMAGES.AVATAR_ADMIN} alt='Avatar Administrator' />
        </AreaPanelAdminAvatar>
        <div class='label'>Adminstrator</div>
      </AreaPanelAdminLabel>
      <AreaPannelAdminInfo>
        {
          dataAdministratorPanel.map(item =>
            <AreaEnterpriseInfoAreaDetailLineInfo key={item.id}>
              <AreaEnterpriseInfoAreaDetailLineInfoLeft><span>{item.key}</span></AreaEnterpriseInfoAreaDetailLineInfoLeft>
              <AreaEnterpriseInfoAreaDetailLineInfoRight>{item.value}</AreaEnterpriseInfoAreaDetailLineInfoRight>
            </AreaEnterpriseInfoAreaDetailLineInfo>)
        }
      </AreaPannelAdminInfo>
    </AreaPanelAdminWrapper>
  )
}

AreaPanelAdmin.propTypes = {
  
}

export default AreaPanelAdmin