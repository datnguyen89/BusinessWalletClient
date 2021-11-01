import styled from 'styled-components'

export const HomeServicesWrapper = styled.div`
  margin: 0 16px;
`
export const ServiceBadge = styled.div`
  position: absolute;
  top: 8px;
  right: 8px;
  height: 36px;
  width: 36px;
  border-radius: 50%;
  background: #FFA50C;
  color: #fff;
  font-size: 1.4rem;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s;
`
export const ServiceBox = styled.div`
  cursor: pointer;
  height: 100%;
  position: relative;
  background: #fff;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
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
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.4);

    ${ServiceBadge} {
      transform: scale(1.1, 1.1);
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