import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";

function Scroll() {
  const controls = useAnimation();
  const [element, view] = useInView({ threshold: "0.2" });

  if (view) {
    controls.start("show");
  } else {
    controls.start("hidden");
  }
  return [element, controls];
}

export default Scroll;
