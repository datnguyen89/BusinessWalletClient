import styled from 'styled-components'
import { Input } from 'antd'

export const ProviderWrapper = styled.div`
  // background: #fff;
  // border-radius: ${props => props.borderRadius || '10px'};
  padding: ${props => props.padding || '16px 20px'};
  // margin: ${props => props.margin || '0'};
  // border: ${props => props.border || '1px solid #ccc'};
`
export const TitlePickProviders = styled.h5`
  color: #979797;
`

export const SearchInputPhoneNumber = styled(Input) `
  border-radius: 10px;
  height: 40px;
  line-height: 40px;
`

export const TagProvider = styled.div `
  display: flex;
  overflow: hidden;
  overflow-x: auto;
`

export const ImageProviderArea = styled.div`
  display: flex;
  justify-content: center;
  flex-grow: 0;     /* do not grow   - initial value: 0 */
  flex-shrink: 0;   /* do not shrink - initial value: 1 */
  flex-basis: 150px; /* width/height  - initial value: auto */
  border: ${props => `1px solid ${props.borderColor}`};
  padding: 10px 20px;
  margin: 20px 15px 10px 0;
  color: white;
  border-radius: 10px;
  cursor: pointer;
  img {
    max-width: 200px;
    object-fit: contain;
  }
`

export const ImgIconProvider = styled.div `
  margin-right: 15px;
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 50%;
`

export const ContentProvider = styled.div `
`