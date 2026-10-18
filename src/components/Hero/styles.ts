import styled from 'styled-components'
import { cores } from '../../styles'
import { TagContainer } from '../Tag/styles'

export const Banner = styled.div`
  position: relative; // para que o conteudo não escape do banner.
  display: block;
  height: 480px;
  width: 100%;

  background-repeat: no-repeat;
  background-position: center;
  background-size: 100%;

  padding-top: 16px;

  // para fazer o elemento sobre-por a imagem
  &::after {
    position: absolute;
    background-color: #000;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    content: ''; // para add um conteudo em cima da imagem
    opacity: 0.56; // 1.00 sendo 100% de opacidade
  }

  ${TagContainer} {
    margin-right: 8px;
  }

  // para deixar com mais destaque do elemento em cima da imagem
  .container {
    z-index: 1;
    position: relative;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;
  }
`

export const Infos = styled.div`
  padding: 16px;
  background-color: ${cores.preta};
  max-width: 290px;
  font-weight: bold;

  h2 {
    font-size: 32px;
  }

  p {
    font-size: 18px;
    margin: 16px 0;

    span {
      display: block;
      text-decoration: line-through;
    }
  }
`
