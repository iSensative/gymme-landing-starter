import About from "@/components/Home/About";
import Banner from "@/components/Home/Banner";
import Faq from "@/components/Home/Faq";
import Join from "@/components/Home/Join";
import Workouts from "@/components/Home/Workouts";

export default function Home() {
  return (
    <>
      <Banner />
      <About />
      <Workouts />
      <Faq />
      <Join />
    </>
  );
}
