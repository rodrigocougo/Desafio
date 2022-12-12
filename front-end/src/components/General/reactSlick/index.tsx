import { MdKeyboardArrowRight } from "react-icons/md"
import Slider from "react-slick"

/*
 * Componente usado como carousel em diversas seções do projeto
 * documentação: https://react-slick.neostack.com/
 */
export default function CBFReactSlick({ ...props }) {
  
  function IndicatorNextArrow(props: any) {
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

  function IndicatorPrevArrow(props: any) {
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

  var defaultSettingsReactSlick = {
    nextArrow: <IndicatorNextArrow />,
    prevArrow: <IndicatorPrevArrow />,
    speed: 300,
  };

  return <Slider {...defaultSettingsReactSlick} {...props} />;
}
