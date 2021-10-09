import styled from 'styled-components'

export const Wrapper = styled.main`
  background-color: #06092b;
  width: 100%;
  height: 100%;
  padding: 3rem;

  color: #fff;
  text-align: center;
  align-items: center;

  display: flex;
  flex-direction: column;
  justify-content: center;
`
export const Logo = styled.img`
  width: 25rem;
  margin-bottom: 2rem;
`

export const Title = styled.h1`
  font-size: 2.5rem;
`

export const Description = styled.h2`
  font-size: 2rem;
  font-weight: 400;
`

export const Illustration = styled.img`
  margin-top: 3rem;
  //! Vai pegar o menor valor entre os 2 valores
  width: min(30rem, 100%);
`
