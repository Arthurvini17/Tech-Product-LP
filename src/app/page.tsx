import Image from "next/image";
import Header from "./components/Header";
import Hero from "./components/Hero";

export default function Home() {
  return (
   <div>
    <Header title="TechIndustry" />
    <Hero Title="Unlock Your Potential with Our Innovative Solution
" Description="Discover how our cutting-edge technology can streamline your workflow and boost productivity.

" ButtonStarted="Get Started today"/>
    </div>
  );
}
