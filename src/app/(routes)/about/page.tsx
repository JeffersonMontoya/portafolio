import ContainerPage from "@/components/Container";
import { Avatar } from "@/components/Avatar";
import CounterServices from "@/components/CounterServices";
import Timeline from "@/components/Timeline";
import TransitionPage from "@/components/TransitionPage";

const AboutPage = () => {
  return (
    <ContainerPage>
      <TransitionPage />
      <div className="flex flex-col justify-center items-center max-w-5xl mx-auto">
        <h1 className="text-3xl leading-tight text-center md:text-5xl font-bold mb-6 mt-2">
          Toda mi{" "}
          <span className="text-secondary">trayectoria profesional</span>
        </h1>

        <div className="w-full mb-6">
          <CounterServices />
        </div>

        <div className="w-full">
          <Timeline />
        </div>
      </div>
    </ContainerPage>
  );
};

export default AboutPage;
