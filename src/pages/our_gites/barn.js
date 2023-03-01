import FullPageHeader from "@/components/individual_gites/FullPageHeader";
import Content from "@/components/individual_gites/Content";
import InformationTabs from "@/components/individual_gites/InformationTabs";
import OtherInformation from "@/components/individual_gites/OtherInformation";
import WelcomePack from "@/components/individual_gites/WelcomePack";
import PricingAction from "@/components/PricingAction";
import { useEffect, useState } from "react";
import ImageSlider from "@/components/our_gites/ImageSlider";
import Lightbox from "@/components/our_gites/Lightbox";

const Barn = () => {
  const [name, setName] = useState("The Barn");
  const [size, setSize] = useState("3 Double Ensuite Bedrooms");
  const [folder, setFolder] = useState("barn");
  const [image, setImage] = useState("barn-bedroom-area");
  const [sliderImages, setSliderImages] = useState([]);
  const [imageIndex, setImageImdex] = useState(null);

  useEffect(() => {
    let res = fetch("/api/gites")
      .then((res) => res.json())
      .then((data) => {
        setName(data["barn"]["name"]);
        setSize(data["barn"]["size"]);
        setFolder(data["barn"]["folder"]);
        setImage(data["barn"]["image"]);
        setSliderImages(data["barn"]["images"]);
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
      <Content name="barn" />
      <InformationTabs name="barn" />
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

export default Barn;
