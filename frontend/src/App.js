import "./style.css";
import StarfieldAnimation from "react-starfield-animation";
import { FormRemote } from "./components/FormRemote";
import { Route, Routes } from "react-router-dom"
import { Frame } from "./components/Frame";

export default function App() {
  return (
    <>
      <StarfieldAnimation
      style={{
        position: "absolute",
        width: "100%",
        height: "100%",
      }}
      numParticles={1000}
      particleSpeed={0}
      dx={0.000000001} // x speed of stars in px/frame, default 0.05
      dy={0.000000001}
      />

      <Routes>
        <Route path="/" element={<FormRemote />} />
        <Route path="/schema" element={<Frame />} />
      </Routes>
      {/* <Frame /> */}
      
    </>
    
  );
}
