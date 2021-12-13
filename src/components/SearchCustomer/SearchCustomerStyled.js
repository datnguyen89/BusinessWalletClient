import styled from 'styled-components'
import { Button, Input } from 'antd'

export const SearchCustomerWrapper = styled.div`
  // background: #fff;
  // border-radius: ${props => props.borderRadius || '8px'};
  // padding: ${props => props.padding || '16px'};
  // margin: ${props => props.margin || '0'};
  // border: ${props => props.border || '1px solid #ccc'};
`

export const SearchCustomerForm = styled.div`
  display: flex;
  margin-top: 10px;
`

export const SearchImg = styled.img `
  cursor: pointer;
`

export const SearchCustomerInput = styled(Input)`
  width: 100%;
  border-radius: 6px;
  input {
    width: 100%;
  }
  margin-right: 15px;
`

export const ResultSearchForm = styled.div`
  margin: 20px 0 20px;
`