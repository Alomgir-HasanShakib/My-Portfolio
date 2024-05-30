import SectionTitle from "../sectionTitle/SectionTitle";

const About = () => {
  return (
    <div className="px-3">
      <SectionTitle title="Skill's"></SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 mt-16 mb-10 ">
            <div className="border border-cyan-700 p-10 shadow-lg hover:skew-y-3 rounded-lg">
                  <h2 className="uppercase text-center text-xl font-medium">html</h2>
            </div>
            <div className="border border-cyan-700 p-10 shadow-lg hover:skew-y-3 rounded-lg">
                  <h2 className="uppercase text-center text-xl font-medium">css</h2>
            </div>
            <div className="border border-cyan-700 p-10 shadow-lg hover:skew-y-3 rounded-lg">
                  <h2 className="uppercase text-center text-xl font-medium">tailwind</h2>
            </div>
            <div className="border border-cyan-700 p-10 shadow-lg hover:skew-y-3 rounded-lg">
                  <h2 className="uppercase text-center text-xl font-medium">javascript</h2>
            </div>
            <div className="border border-cyan-700 p-10 shadow-lg hover:skew-y-3 rounded-lg">
                  <h2 className="uppercase text-center text-xl font-medium">react js</h2>
            </div>
            <div className="border border-cyan-700 p-10 shadow-lg hover:skew-y-3 rounded-lg">
                  <h2 className="uppercase text-center text-xl font-medium">node js</h2>
            </div>
            <div className="border border-cyan-700 p-10 shadow-lg hover:skew-y-3 rounded-lg">
                  <h2 className="uppercase text-center text-xl font-medium">express js</h2>
            </div>
            <div className="border border-cyan-700 p-10 shadow-lg hover:skew-y-3 rounded-lg">
                  <h2 className="uppercase text-center text-xl font-medium">mongo db</h2>
            </div>

      </div>
    </div>
  );
};

export default About;
