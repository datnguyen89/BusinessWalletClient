import styled from 'styled-components'

export const  EnterpriseInfoWrapper = styled.div `
  display: flex;
`
export const AreaInfo = styled.div `
  width: 64.6%;
  float: left;
`
export const AreaPanel = styled.div `
  width: 35%;
  height: auto;
`

export const AreaEnterpriseInfo = styled.div `
  background: #FFFFFF;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.2);
  border-radius: 18px;

  margin: 0 16px;
  height: auto;
  left: 273px;
  top: 138px;
  padding: 20px 20px 5px;
`

export const AreaIdentityInfo = styled.div `
  background: #FFFFFF;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.2);
  border-radius: 18px;

  margin: 20px 16px;
  left: 273px;
  top: 138px;
  padding: 20px 20px 5px;
`

export const AreaEnterpriseInfoLabel = styled.div `
  background: #F6F6F6;
  padding: 8px 10px;
`

export const SpanAreaEnterpriseInfoLabel = styled.span `
  color: #848788;
`


export const AreaEnterpriseInfoAreaDetail = styled.div `
  display: flex;
  justify-content: space-between;
`

export const AreaEnterpriseInfoAreaDetailBox = styled.div `
  width: 47%;
  float: left;
`

export const AreaIdentityInfoAreaDetailBox = styled.div `
  width: 100%;
`

export const AreaEnterpriseInfoAreaDetailLineInfo = styled.div `
  border-bottom: 1px solid #E0E0E0;
  margin: 12px;
  padding-bottom: 6px;
  clear: both;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &: last-child {
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

export const AreaPanelAdmin = styled.div `
  background: #FFFFFF;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  margin: 0 16px;
  height: auto;
  overflow: hidden;
  margin-bottom: 30px;
  padding: 20px 20px 5px;
`

export const AreaPanelAdminLabel = styled.div `
  display: flex;
  justify-content: space-between;
  align-items: center;
  .label {
    color: white;
    font-weight: bold;
    font-size: 20px;
  }
  background: url(${props => props.background}) center center no-repeat;
  background-size: cover;
  height: auto;
  padding: 15px;
`

export const AreaPanelAdminAvatar = styled.div `
`

export const AreaPannelAdminInfo = styled.div ``

export const AreaPanelAdminCard = styled.div `
  .slick-slider .slick-dots {
    display: none !important;
  }
  .slick-slider {
    width: 100%;
    padding: 20px;
  }
  .slick-slider img {
    //width: 80%;
    margin: 0 auto;
  }
  .slick-arrow.slick-prev {
     display: block;
    position: absolute;
    transform: translateY(-50%);
    width: 20px;
    height: 20px;
    margin-top: -10px;
    padding: 0;
  }
  .slick-arrow.slick-prev {
    left: 0;
    z-index: 10;
  }

  .slick-arrow.slick-next {
    right: 0px;
    z-index: 10;
  }
  .slick-arrow.slick-next:before {
    content: url(${props => props.arrowNext});
  }
  .slick-arrow.slick-prev:before {
    content: url(${props => props.arrowPrev});
  }
`

export const AreaCard = styled.div `
  background: #FFFFFF;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  margin: 0 16px 30px;
  height: auto;
  overflow: hidden;
  padding: 20px 20px 30px;
`

export const AreaAddCard = styled.div `
  cursor: pointer;
  display: flex;
  margin: 0 auto;
  width: 80%;
  border-radius: 5px;
  padding: 16px;
  border: 1px solid #4C68EF;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #4C68EF;
  span {
    margin-right: 10px;
  }
`