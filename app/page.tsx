import Navigation from "@/component/footer/Navigation";
import Shedule from "@/component/home/Shedule";
import UpComing from "@/component/home/UpComing";

export default function Home() {
  return (
    <div className="flex flex-col  items-center">
      <UpComing/>
      <Shedule/>
      <Navigation/>
    </div>
  );
}
