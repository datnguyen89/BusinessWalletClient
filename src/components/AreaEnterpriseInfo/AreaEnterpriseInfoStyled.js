import styled from 'styled-components'

export const AreaEnterpriseInfoWrapper = styled.div `
  background: #FFFFFF;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  border-radius: 18px;

  margin: 0 16px;
  height: auto;
  left: 273px;
  top: 138px;
  padding: 20px 20px 5px;
`
export const AreaEnterpriseInfoLabel = styled.div `
  background: #F6F6F6;
  padding: 8px 10px;
`
export const AreaEnterpriseInfoAreaDetail = styled.div `
  display: flex;
  justify-content: space-between;
`

export const AreaEnterpriseInfoAreaDetailBox = styled.div `
  width: 47%;
  float: left;
`

export const SpanAreaEnterpriseInfoLabel = styled.span `
  color: #848788;
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

export const AreaEnterpriseInfoAreaDetailLineInfoRight = styled.span `
  text-align: right;
`

export const AreaEnterpriseInfoAreaDetailLineInfoLeft = styled.span `
  text-align: left;
  span {
    color: #B4B4B4;
  }
`