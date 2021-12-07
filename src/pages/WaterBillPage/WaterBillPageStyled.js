import styled from 'styled-components'
import { Button, Modal, Row } from 'antd'

export const WaterBillPageWrapper = styled.div`
`

export const TitleInfoPayment = styled.div `
  padding: 8px;
  color: ${props => props.color || '#848788'};
  background: ${props => props.background || '#F6F6F6'};
  margin-top: ${props => props.marginTop || 0};
  margin-bottom: ${props => props.marginBottom || '16px'};
  text-align: ${props => props.textAlign || 'left'};
`

export const WhiteRoundedInfoPayment = styled.div `
  background: #fff;
  border-radius: ${props => props.borderRadius || '8px'};
  padding: ${props => props.padding || '0px'};
  margin: ${props => props.margin || '0'};
  border: ${props => props.border || '1px solid #E0E0E0'};
`

export const TitleFunds = styled.div `
  padding: 8px;
  color: ${props => props.color || '#848788'};
  background: ${props => props.background || '#F6F6F6'};
  margin-top: ${props => props.marginTop || 0};
  margin-bottom: ${props => props.marginBottom || '16px'};
  text-align: ${props => props.textAlign || 'left'};
`

export const AreaCreateCommand = styled(Row) `
  display: flex;
  justify-content: center;
  margin: 22px 0px 15px;
`

export const CreateCommandButton = styled(Button)`
  padding: 0 40px;
`

export const ResultSearchForm = styled.div`
  margin: 20px 0 20px;
`

export const ModalCustom = styled(Modal)`
  .ant-modal-header {
    background: #EBF0FF;
  }
  .ant-btn:first-child {
    display: none;
  }
  .ant-modal-body {
    padding-bottom: 0px;
  }
  .ant-modal-footer {
    display: flex;
    justify-content: center;
    border: none;
    padding-bottom: 30px;
  }
`