import { useParams } from 'react-router-dom'
import Hero from '../../components/Hero'
import Section from '../../components/Section'
import Gallery from '../../components/Gallery'
import residentEvil from '../../assets/images/resident.png'

const Product = () => {
  const { id } = useParams()

  return (
    <>
      <Hero />
      <Section title="Sobre o jogo" background="black">
        <p>
          Hogwarts Legacy é um RPG de ação imersivo e de mundo aberto ambientado
          no mundo introduzido pela primeira vez nos livros do Harry Potter.
          Embarque em uma jornada por locais novos e familiares enquanto explora
          e descubra animais fantásticos, personalize seu personagem e crie
          poções, domine o lançamento de feitiços, aprimore talentos e torna-se
          o bruxo que deseja ser. Experimente Hogwarts da década de 1800. Seu
          personagem é uma estudante com chave de um antigo segredo que ameaça
          destruir o mundo bruxo. Faça aliados, lute contra os bruxos das trevas
          e decida o destino do mundo bruxo. Seu legado é o que voçê faz
          dele.Viva o inesperado.
        </p>
      </Section>
      <Section title="Mais detalhes" background="gray">
        <p>
          <b>Plataforma:</b> Playstation 5 <br />
          <b>Desenvolvedor:</b> Avalanche Software <br />
          <b>Editora:</b> Portkey Games, subsidiária da Warner Bros. Interactive
          Entertainement <br />
          <b>Idiomas:</b> O jogo oferece suporte a diversos idiomas, Incluindo
          inglês, espanhol, francês, alemão, italiano, português, entre outros.
          As opções de audio e legendas podem ser ajustadas nas configurações do
          jogo.
        </p>
      </Section>
      <Gallery name="jogo teste" defaultCover={residentEvil} />
    </>
  )
}

export default Product
