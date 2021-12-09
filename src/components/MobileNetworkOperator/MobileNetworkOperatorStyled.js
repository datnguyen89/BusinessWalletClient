import styled from 'styled-components'
import { Button, Input } from 'antd'

export const ProviderWrapper = styled.div`
  // background: #fff;
  // border-radius: ${props => props.borderRadius || '8px'};
  padding: ${props => props.padding || '16px 20px'};
  // margin: ${props => props.margin || '0'};
  // border: ${props => props.border || '1px solid #ccc'};
`
export const TitlePickProviders = styled.h5`
  color: #979797;
`

export const TagProvider = styled.div `
  display: flex;
  overflow: hidden;
  overflow-x: auto;
`

export const ImageProviderArea = styled.img`
  border: ${props => `1px solid ${props.borderColor}`};
  margin: 10px 20px 10px 0;
  color: white;
  white-space: nowrap;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
`

export const ImgIconProvider = styled.div `
  margin-right: 15px;
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 50%;
`

export const ContentProvider = styled.div `
`