import Carousel from "react-native-snap-carousel";
import { getSlider } from "../api/global-api";
import { useEffect, useState } from "react";

export const CarouselComponent = () => {
  const [sliders, setSliders] = useState();
  const getSliders = async () => {
    await getSlider().then((response) => console.log(response));
  };

  // console.log(sliders);
  useEffect(() => {
    getSliders();
  }, []);
  return (
    // <Carousel
    //   ref={""}
    //   data={this.state.entries}
    //   renderItem={this._renderItem}
    //   sliderWidth={sliderWidth}
    //   itemWidth={itemWidth}
    // />
    <></>
  );
};
