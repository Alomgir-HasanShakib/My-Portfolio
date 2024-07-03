import SectionTitle from "../sectionTitle/SectionTitle";
import Card from "./Card";

const Projects = () => {
  return (
    <div className="px-3 mb-16" id="projects">
      <SectionTitle title="My Projects"></SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-24">
        <Card
          name="APH-FAMILY"
          description="Aph Family is a user-friendly platform designed to streamline pet adoption and facilitate charitable contributions. Utilizing advanced technology such as React.js, Node.js/Express.js, MongoDB, and Firebase, the platform offers a seamless and efficient user experience."
          technology="html -> react js -> tailwind css -> nodejs -> express js -> mongoDB -> firebase auth -> firebase hosting -> flowbite-react -> react hook-form -> tanstack query -> axios -> jwt -> stripe-payment"
          image="https://i.postimg.cc/VLpt5XkF/Untitled-design-2.png"
          liveLink="https://aph-pet-family.web.app"
          clientRepoLink="https://github.com/Alomgir-HasanShakib/aph-family-react-client-side"
          serverRepoLink="https://github.com/Alomgir-HasanShakib/aph-family-server-side"
        ></Card>
        <Card
          name="Eventer"
          image="https://i.postimg.cc/25hjTZmr/Untitled-design-3.png"
          clientRepoLink="https://github.com/Alomgir-HasanShakib/eventer_react_project-client-side"
          serverRepoLink="https://github.com/Alomgir-HasanShakib/eventer_server-side"
          description="Eventer is a versatile event management service provider website, enabling users to effortlessly book and manage event services."
          liveLink="https://eventer-9064e.web.app"
          technology="html -> react js -> tailwind css -> nodejs -> express js -> mongoDB -> firebase auth -> firebase hosting -> react hook-form"
        ></Card>
        <Card 
        image='https://i.postimg.cc/L8fhQ7Bc/Untitled-design-4.png'
        name='Craft Ease'
        description='Your Homies is a premier real estate platform designed to offer users a streamlined property browsing experience. The website features an intuitive interface, allowing users to explore an extensive array of property listings, complete with detailed descriptions, high-resolution images, and essential details such as pricing and specifications.'
        clientRepoLink='https://github.com/Alomgir-HasanShakib/craft_ease_client-side'
        liveLink='https://craft-ease.web.app'
        serverRepoLink='https://github.com/Alomgir-HasanShakib/craft_ease_server-side'
        technology="html -> react js -> tailwind css -> nodejs -> express js -> mongoDB -> firebase auth -> firebase hosting ->react hook-form"
        ></Card>
      </div>
    </div>
  );
};

export default Projects;
