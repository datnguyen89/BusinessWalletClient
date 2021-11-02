import styled from 'styled-components'

export const ContractWrapper = styled.div `
  background: #FFFFFF;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  border-radius: 18px;

  margin: 30px 16px;
  padding: 20px 20px 5px;
  .cancel-button {
    cursor: pointer;
  }
  .ant-pagination {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 20px;
  }
  .ant-pagination-prev {
    line-height: 0px !important;
    height: 22px !important;
  }
  .ant-pagination-next {
    line-height: 0px !important;
    height: 22px !important;
  }
`

export const AreaContractData = styled.div `
  table tr td {
    border: none;
  }
`