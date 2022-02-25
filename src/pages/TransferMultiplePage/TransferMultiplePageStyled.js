import styled from 'styled-components'
import { Button, Input, Modal, Row, Upload } from 'antd'

const { TextArea } = Input;

export const DepositPageWrapper = styled.div`
  padding: 16px;
  min-height: 100vh;
`

export const TitleInfoService = styled.div`
  padding: 8px;
  color: ${props => props.color || '#848788'};
  background: ${props => props.background || '#F6F6F6'};
  margin-top: ${props => props.marginTop || 0};
  margin-bottom: ${props => props.marginBottom || '16px'};
  text-align: ${props => props.textAlign || 'left'};
`

export const WhiteRoundedInfoService = styled.div`
  background: #fff;
  border-radius: ${props => props.borderRadius || '8px'};
  padding: ${props => props.padding || '0px'};
  margin: ${props => props.margin || '0'};
  border: ${props => props.border || '1px solid #E0E0E0'};
`

export const TitleFunds = styled.div`
  padding: 8px;
  color: ${props => props.color || '#848788'};
  background: ${props => props.background || '#F6F6F6'};
  margin-top: ${props => props.marginTop || 0};
  margin-bottom: ${props => props.marginBottom || '16px'};
  text-align: ${props => props.textAlign || 'left'};
`

export const InputDetail = styled(Input)`
  /* margin-bottom: 16px; */
  width: 100%;
  height: 50px;
  border-radius: 5px;
`

export const TextAreaDetail = styled(TextArea)`
  /* margin-bottom: 16px; */
  width: 100%;
  border-radius: 5px;

  textarea {
    border-radius: 5px;
    padding-top: 8px;
  }
`

export const ButtonDropDown = styled(Button)`
  /* margin-bottom: 16px; */
  width: 100%;
  height: 50px;
  border-radius: 5px;
`

export const AreaCreateCommand = styled(Row)`
  display: flex;
  justify-content: center;
  margin: 22px 0px 15px;
`

export const CreateCommandButton = styled(Button)`
  padding: 0 40px;
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
export const WhiteRoundedInfoLink = styled.div`
  background: #fff;
  border-radius: ${props => props.borderRadius || '8px'};
  padding: ${props => props.padding || '16px'};
  margin: ${props => props.margin || '0'};
  border: ${props => props.border || '1px solid #E0E0E0'};
`

export const ButtonDownload = styled.div`
  &:hover {
    border-color: #0465B0 !important;
  }

  cursor: pointer;
  border: 1px solid #E0E0E0;
  border-radius: 8px;
  color: #0465B0;
  height: 150px;

  path {
    fill: #0465B0
  }

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const ButtonUpload = styled(Upload.Dragger)`
  &:hover {
    border-color: #0465B0 !important;
  }

  cursor: pointer;
  border: 1px solid #E0E0E0 !impotant;
  border-radius: 8px;
  height: 150px;

  path {
    fill: #0465B0
  }

  div {
    color: #0465B0
  }
`

export const ButtonCheck = styled.div`
  &:hover {
    border-color: #0465B0 !important;
  }

  cursor: pointer;
  border: 1px solid #E0E0E0;
  border-radius: 8px;
  color: #FFF;
  background: #0465B0;
  height: 150px;

  path {
    fill: #fff
  }

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`