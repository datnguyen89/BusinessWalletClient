import styled from 'styled-components'

export const Wrapper = styled.div`
  border: 1 solid #E0E0E0;
  // margin 16px 0;
`

export const SourceItem = styled.div`
  border: 1px solid #E0E0E0;
  border-radius: 10px;
  padding: 16px 8px;
  width: 260px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  display: flex;
  align-items: center;

  & > img {
    display: block;
    border-radius: 50%;
    border: 1px solid #4C68EF;
    height: 40px;
    width: 40px;
    /* padding: 2px; */
    margin: 0 8px;
    object-fit: contain;
    /* margin-left: auto;
    margin-right: auto; */
  }

  &:hover {
    box-shadow: 0 0 2px 1px #507CEF;
  }

  & .selected {
    box-shadow: 0 0 2px 1px #507CEF;
  }
`

export const SourceIcon = styled.div`
  display: block;
  background-image: url(${props => props.src});
  background-size: contain;
  background-repeat: no-repeat;
  border-radius: 50%;
  border: 1px solid #4C68EF;
  height: 40px;
  width: 40px;
  padding: 2px;
  margin: 0 8px;
`