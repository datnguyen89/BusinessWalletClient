import styled from 'styled-components'
import { Table } from 'antd'

export const StateTransferMethodWrapper = styled.div`
  background: #FFFFFF;
  border-radius: 18px;

  margin: 30px 16px;
  padding: 20px 20px 5px;
`

export const StateInformation = styled.div`
  display: flex;  
  justify-content: space-between;
  margin-bottom: 20px;
  font-weight: bold;
`

export const StateInformationText = styled.div``

export const StateInformationExport = styled.div`
  span {
    text-decoration: underline;
    color: #104bcf;
    font-weight: bold;
    cursor: pointer;
  }
`
export const ResultTable = styled(Table)`
  td {
    text-align: center !important;
  }
  th {
    text-align: center !important;
  }
`

export const SpanValue = styled.span`
  color: #104bcf;
  margin-right: 20px;
`

export const ImageCustom = styled.img `
  width: 20px;
  height: 20px;
`

export const SpanStatus = styled.span`
  margin-left: 20px;
`