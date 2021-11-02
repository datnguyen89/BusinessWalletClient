import React from 'react'
import PropTypes from 'prop-types'
import IMAGES from '../../images'
import {
  AreaEnterpriseInfoAreaDetailLineInfo,
  AreaEnterpriseInfoAreaDetailLineInfoLeft,
  AreaEnterpriseInfoAreaDetailLineInfoRight,
  AreaPanelAdminAvatar,
  AreaPanelAdminLabel,
  AreaPanelAdminWrapper,
  AreaPanelAdminInfo,
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
      <AreaPanelAdminInfo>
        {
          dataAdministratorPanel.map(item =>
            <AreaEnterpriseInfoAreaDetailLineInfo key={item.id}>
              <AreaEnterpriseInfoAreaDetailLineInfoLeft><span>{item.key}</span></AreaEnterpriseInfoAreaDetailLineInfoLeft>
              <AreaEnterpriseInfoAreaDetailLineInfoRight>{item.value}</AreaEnterpriseInfoAreaDetailLineInfoRight>
            </AreaEnterpriseInfoAreaDetailLineInfo>)
        }
      </AreaPanelAdminInfo>
    </AreaPanelAdminWrapper>
  )
}

AreaPanelAdmin.propTypes = {
  
}

export default AreaPanelAdmin