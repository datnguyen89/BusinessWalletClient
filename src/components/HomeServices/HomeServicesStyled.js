import styled from 'styled-components'

export const HomeServicesWrapper = styled.div`
  margin: 16px;
  .ant-ribbon-wrapper {
    height: 100%;
  }
`

export const ServiceBox = styled.div`
  cursor: pointer;
  height: 100%;
  position: relative;
  background: #fff;
  border-radius: 4px;
  border: 1px solid #ccc;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 8px;

  img {
    height: 96px;
    width: auto;
  }

  &:hover {
    img {
      transition: all 1s;
      transform: scale(1.1);
    }
  }
`

export const ServiceName = styled.h1`
  font-size: 1.8rem;
  font-weight: 700;
`
export const ServiceDescription = styled.div`
  color: #979797;
  font-size: 1.4rem;
  text-align: center;
`