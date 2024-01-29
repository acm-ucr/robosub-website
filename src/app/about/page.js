import Info from "@/components/about/Info";
import { team } from "@/data/team";
import Team from "@/components/about/Team";
import AboutTitle from "@/components/about/AboutTitle";
const About = () => {
  return (
    <div className="mb-[30%] w-full flex flex-col items-center min-h-screen">
      <AboutTitle />
      <div className=" w-4/5 md:w-3/5 text-[8px] md:text-sm md:my-[7%] my-[15%]">
        <p className="mb-5 2xl:text-xl">
          We are a diverse team of students from University of California,
          Riverside dedicated to exploring robotics of all applications. Drawing
          from across all STEM disciplines, we focus on advancing the art of
          autonomous technology and using systems engineering principles in a
          real project.
        </p>

        <p className="2xl:text-xl">
          We are creating a sustainable foundation for future years, and
          expanding the project to become the premier project of UCR&apos;s
          Bourns College of Engineering. Our team is twenty-five strong,
          composed almost entirely of undergraduate students.
        </p>
      </div>
      <Info />
      <div className="flex flex-col items-center space-y-14 mt-[100px]">
        {team.map((item, index) => (
          <Team
            key={index}
            text={item.text}
            title={item.title}
            icon={item.icon}
            list={item.list}
          />
        ))}
      </div>
    </div>
  );
};

export default About;
