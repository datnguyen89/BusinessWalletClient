import styled from 'styled-components'

export const LoginPageWrapper = styled.div`
  width: 50%;
  @media only screen and (max-width: 1600px) {
    width: 70%;
  }
  @media only screen and (max-width: 1200px) {
    width: 90%;
  }

  .ant-input {
    height: 53px !important;
    border-radius: 5px;
  }

  .ant-input-password {
    border-radius: 5px;
  }
`
export const LoginFormTitle = styled.h1`
  text-align: center;
  margin: 16px 0;
`