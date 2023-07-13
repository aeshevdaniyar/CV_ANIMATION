import "./App.css";

import { MutableRefObject, useRef } from "react";
import { useAnimationValue } from "./components/AnimationScroll/useAnimationValue.ts";
import Hero from "./components/Hero/Hero.tsx";
import Home from "./components/Home/Home.tsx";
import Skills from "./components/Skills/Skills.tsx";
function App() {
  const containerRef = useRef() as MutableRefObject<HTMLDivElement>;

  return (
    <main>
      <Hero />
      <Skills />
    </main>
  );
}

export default App;
