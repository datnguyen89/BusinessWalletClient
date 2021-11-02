import styled from 'styled-components'

export const AuthShadowBox = styled.div`
  background: #FFFFFF;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: ${props => props.width ? props.width : 'auto'};
  padding: 24px;
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
  margin: ${props => props.margin || 0};
  padding: ${props => props.padding || 0};
`
export const PaginationLabel = styled.span`
  color: #767676;
`