import './caro.css'
import { v4 as uuidv4 } from "uuid";
import Card from "./card";
import Carousel from "./Carousel";

function MainCarousel() {
  let cards = [
    {
      key: uuidv4(),
      content: (
        <Card imagen="https://updates.theme-fusion.com/wp-content/uploads/2017/12/convertplus_thumbnail.jpg" timing="9:00-10:00"/>
      )
    },
    {
      key: uuidv4(),
      content: (
        <Card imagen="https://updates.theme-fusion.com/wp-content/uploads/2017/12/acf_pro.png" timing="12:00-4:00"/>
      )
    },
    {
      key: uuidv4(),
      content: (
        <Card imagen="https://updates.theme-fusion.com/wp-content/uploads/2017/12/layer_slider_plugin_thumb.png" timing="5:00-7:00"/>
      )
    },
    {
      key: uuidv4(),
      content: (
        <Card imagen="https://updates.theme-fusion.com/wp-content/uploads/2016/08/slider_revolution-1.png" />
      )
    },
    {
      key: uuidv4(),
      content: (
        <Card imagen="https://updates.theme-fusion.com/wp-content/uploads/2019/01/pwa_880_660.jpg" />
      )
    }
  ];
  return (
    <>
    <div className="caro-caro">
    <p className="text-center md:mb-8 ">
        <span className="heading heading1 font-Michroma">ENGA</span>
        <span className="heading heading2 font-Michroma">GEMENTS</span>
      </p>
      <Carousel
        cards={cards}
        height="500px"
        width="30%"
        margin="0 auto"
        offset={2}
        showArrows={false}
      />
    </div>
    </>
  );
}

export default MainCarousel;
