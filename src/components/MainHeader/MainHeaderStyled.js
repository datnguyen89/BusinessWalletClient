import styled from "styled-components";

export const MainHeaderWrapper = styled.header`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  height: 56px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: #4C68EF;
  z-index: 1;
`
export const HeaderLogoArea = styled.a`
  display: flex;
  align-items: center;
  margin-left: 16px;
  span {
    margin-left: 16px;
    color: #fff;
    font-weight: 700;
    font-size: 1.8rem;
  }
`
export const MainHeaderRight = styled.div`
  display: flex;
  align-items: center;
  @media only screen and (max-width: 768px) {
    display: none;
  }
`
export const HeaderTransactionArea = styled.div`
  display: flex;
  align-items: center;
  
  span {
    margin-left: 12px;
    color: #fff;
    font-size: 1.2rem;
    font-weight: 400;
    @media only screen and (max-width: 992px) {
      display: none;
    }
  }
`
export const HeaderTransactionItem = styled.a`
  margin: 0 16px;
`
export const HeaderNotifyArea = styled.div`
  margin: 0 16px;
`
export const HeaderUserArea = styled.a`
  color: #fff;
  display: flex;
  align-items: center;
  margin: 0 16px;
  &:hover {
    color: #fff;
  }
  span {
    margin: 0 8px;
    font-size: 1.2rem;
  }
`