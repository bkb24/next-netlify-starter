import FullPageHeader from "@/components/individual_gites/FullPageHeader";
import Content from "@/components/individual_gites/Content";
import InformationTabs from "@/components/individual_gites/InformationTabs";
import OtherInformation from "@/components/individual_gites/OtherInformation";
import WelcomePack from "@/components/individual_gites/WelcomePack";
import PricingAction from "@/components/PricingAction";
import { useEffect, useState } from "react";
import ImageSlider from "@/components/our_gites/ImageSlider";
import Lightbox from "@/components/our_gites/Lightbox";

const Lodge = () => {
  const [name, setName] = useState("The Lodge");
  const [size, setSize] = useState("2 Double Ensuite Bedrooms");
  const [folder, setFolder] = useState("lodge");
  const [image, setImage] = useState("lodge-bedroom-area");
  const [sliderImages, setSliderImages] = useState([]);
  const [imageIndex, setImageImdex] = useState(null);

  useEffect(() => {
    let res = fetch("/api/gites")
      .then((res) => res.json())
      .then((data) => {
        setName(data["lodge"]["name"]);
        setSize(data["lodge"]["size"]);
        setFolder(data["lodge"]["folder"]);
        setImage(data["lodge"]["image"]);
        setSliderImages(data["lodge"]["images"]);
      });
  }, []);

  const closeLightBox = () => {
    setImageImdex(null);
  }

  const sliderClicked = (index) => {
    setImageImdex(index);
  }

  return (
    <>
      <FullPageHeader name={name} size={size} folder={folder} image={image} />
      <ImageSlider images={sliderImages} folder={folder} sliderClicked={sliderClicked} />
      <Content name="lodge" />
      <InformationTabs name="lodge" />
      <OtherInformation />
      <WelcomePack />
      <PricingAction />
      {imageIndex !== null &&
        <Lightbox
          src={`/our_gites/${folder}/${sliderImages[imageIndex]}.webp`}
          closeLightBox={closeLightBox}
        />
      }
    </>
  );
};

export default Lodge;
