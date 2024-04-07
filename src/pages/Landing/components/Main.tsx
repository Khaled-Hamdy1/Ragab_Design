import Discover from "./Discover";
import Excursions from "./Excursions";
import ImageSlider from "./ImageSlider";
import Welcome from "./Welcome";

export default function Main() {
  return (
    <main>
      <ImageSlider />
      <Welcome />
      <Discover />
      <Excursions />
    </main>
  );
}
