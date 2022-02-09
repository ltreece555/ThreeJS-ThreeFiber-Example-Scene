import "./App.scss";
import ThreeFiberScene from "./ThreeFiberScene/ThreeFiberScene";

import { softShadows } from "@react-three/drei";

softShadows();

function App() {
  return (
    <>
      <ThreeFiberScene />
    </>
  );
}

export default App;
