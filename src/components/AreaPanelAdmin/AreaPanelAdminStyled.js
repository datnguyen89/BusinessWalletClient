import styled from 'styled-components'

export const AreaPanelAdminWrapper = styled.div `
  background: #FFFFFF;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  margin: 0 16px 30px;
  height: auto;
  overflow: hidden;
  padding: 20px 20px 5px;
`

export const AreaEnterpriseInfoAreaDetailLineInfoRight = styled.span `
  text-align: right;
`

export const AreaEnterpriseInfoAreaDetailLineInfoLeft = styled.span `
  text-align: left;
  span {
    color: #B4B4B4;
  }
`
export const AreaEnterpriseInfoAreaDetailLineInfo = styled.div `
  border-bottom: 1px solid #E0E0E0;
  margin: 12px;
  padding-bottom: 6px;
  clear: both;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:last-child {
    border-bottom: none;
  }
`
export const AreaPanelAdminLabel = styled.div `
  display: flex;
  justify-content: space-between;
  align-items: center;
  .label {
    color: white;
    font-weight: bold;
    font-size: 2rem;
  }
  background: url(${props => props.background}) center center no-repeat;
  background-size: cover;
  height: auto;
  padding: 15px;
`
export const AreaPanelAdminAvatar = styled.div ``

export const AreaPanelAdminInfo = styled.div ``