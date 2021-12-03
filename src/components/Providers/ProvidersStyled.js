import styled from 'styled-components'
import { Button, Input } from 'antd'

export const ProviderWrapper = styled.div`
  // background: #fff;
  // border-radius: ${props => props.borderRadius || '8px'};
  padding: ${props => props.padding || '16px 0 16px'};
  // margin: ${props => props.margin || '0'};
  // border: ${props => props.border || '1px solid #ccc'};
`

export const SearchProviderWrapper = styled.div`
  padding: 0 16px 16px;
`

export const SearchProvider = styled(Input)`
  border-radius: 6px;
  input {
    width: 100%;
  }
  height: 50px;
`

export const TagProvider = styled.div `
  padding: 20px;
  background: #F9F9F9;
  display: flex;
  overflow: hidden;
  overflow-x: auto;
`

export const ButtonProviderArea = styled.div`
  margin: 10px;
  background: #9CA2C0;
  color: white;
  white-space: nowrap;
  padding: 10px 20px;
  border-radius: 25px;
`

export const AreaProvider = styled.div`
  .ant-row {
    max-height: 220px;
    overflow: hidden;
    overflow-y: auto;
  }
`

export const TagAreaProvider = styled.div`
  display: flex;
  border: 1px solid #ccc;
  margin: 16px 8px 16px 16px;
  border-radius: 10px;
  align-items: center;
  padding: 15px;
`

export const ImgIconProvider = styled.div `
  margin-right: 15px;
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 50%;
`

export const ContentProvider = styled.div `
`

export const AliasProvider = styled.h5`
  margin: 5px 0 0;
  font-size: 1.6rem;
  color: #333333;
`

export const NameProvider = styled.p`
  margin: 0;
  color: #B4B4B4;
`