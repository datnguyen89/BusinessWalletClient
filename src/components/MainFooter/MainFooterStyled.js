import styled from 'styled-components'

export const MainFooterWrapper = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 64px;
  z-index: 1;
  border-top: 1px solid #ededed;
  background: #FFF;
  display: flex;
  justify-content: space-between;
  a:hover {
    color: ${props => props.fontColor};
  }
  @media only screen and (max-width: 768px) {
    font-size: 1.2rem;
  }
  @media only screen and (max-width: 375px) {
    font-size: 1rem;
  }
`
export const MainFooterLeft = styled.div`
  display: flex;
  align-items: center;
  margin: 8px 16px;

`
export const MainFooterLeftInfo = styled.div`
  margin-left: 16px;
  font-size: 11px;

  p {
    margin: 0;
    color: #999999;
  }
`
export const CompanyName = styled.h1`
  margin: 0;
  color: ${props => props.color}
`
export const TelsArea = styled.div`
  * {
    color: #999999;
  }
`
export const MainFooterRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: end;
  margin-right: 16px;
  font-size: 12px;
  
  @media only screen and (max-width: 700px) {
    display: none;
  }
`
export const FooterRightMenu = styled.div`
`
export const FooterRightMenuItem = styled.a`
  color: #999999;
`
export const FooterRightPhone = styled.div`
  margin-top: 8px;
  * {
    color: #999999;
  }
`