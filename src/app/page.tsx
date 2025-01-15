import HeroSection from "@/components/heroSection";
import NavBar from "@/components/navBar";
import ServiceSection from "@/components/serviceSection";
import TopNav from "@/components/topNav";

export default function Home() {
  return (
    <div className="bg-backgroundw  w-full h-full ">
      <TopNav/>
      <NavBar/>
      <HeroSection/>
      <ServiceSection/>

     </div>
  );
}
