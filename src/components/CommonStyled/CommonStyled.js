import styled from 'styled-components'

export const AuthShadowBox = styled.div`
  background: #FFFFFF;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: ${props => props.width ? props.width : 'auto'};
  padding: 24px;

  a {
    color: ${props => props.color};
  }
`
export const PaginationLabel = styled.span`
  color: #767676;
  @media only screen and (max-width: 768px) {
    margin-bottom: 16px;
  }
`
export const RowFlexDiv = styled.div`
  display: flex;
`
export const RowFlexEndDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin: ${props => props.margin || 0};
  padding: ${props => props.padding || 0};
`
export const RowSpaceBetweenDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  margin: ${props => props.margin || 0};
  padding: ${props => props.padding || 0};
  @media only screen and (max-width: 768px) {
    justify-content: center;
  }
`
export const ColorTitle = styled.h1`
  padding: 8px;
  color: ${props => props.color || '#848788'};
  background: ${props => props.background || '#F6F6F6'};
  margin-top: ${props => props.marginTop || 0};
  margin-bottom: ${props => props.marginBottom || '16px'};
  text-align: ${props => props.textAlign || 'left'};
`
export const WhiteRoundedBox = styled.div`
  background: #fff;
  border-radius: ${props => props.borderRadius || '8px'};
  padding: ${props => props.padding || '16px'};
  margin: ${props => props.margin || '0'};
  border: ${props => props.border || '1px solid #ccc'};
`
export const ColorText = styled.span`
  color: ${props => props.color || '#333'};
  font-weight: ${props => props.fontWeight || 'normal'};
  padding: ${props => props.padding || '0'};
  margin: ${props => props.margin || '0'};
  font-size: ${props => props.fontSize || '1.4rem'};
`