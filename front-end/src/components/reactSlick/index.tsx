import { MdKeyboardArrowRight } from "react-icons/md"
import Slider from "react-slick"

/*
 * Componente usado como carousel em diversas seções do projeto
 * documentação: https://react-slick.neostack.com/
 */
export default function CBFReactSlick({ ...props }) {
  // Seta DE avanço do Slide/NavBar PARA DIREITA
  function SampleNextArrow(props: any) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          //marginRight: "-25px",
        }}
        onClick={onClick}
      >
        <MdKeyboardArrowRight />
      </div>
    );
  }

  // Seta DE avanço do Slide/NavBar PARA ESQUERDA
  function SamplePrevArrow(props: any) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
           marginLeft: "-30px",
        }}
        onClick={onClick}
      />
    );
  }

  // Configurações usada no react-slick
  var settings = {
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    speed: 300,
  };

  // Renderiza os props + configuração customizada
  return <Slider {...settings} {...props} />;
}
