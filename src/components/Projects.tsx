import ProjectItem from "./ProjectsComponents/ProjectItem";

const PROJECT_CARDS = [
  {
    title: "Packing List",
    description:
      "One of the first projects developed by me using React paired with JavaScript. The idea of the project is that of a packing list where you have multiple functionalities for a pleasant user experience.",
    codeLink: "https://github.com/RusuDarius/Packing-List",
  },
  {
    title: "Drum Kit",
    description:
      "The first project, and one of the most challenging ones for that moment, where I did a fully fuctional drum kit with JavaScript. It is known of being a popular project for a beginner and so I did it nevertheless.",
    codeLink: "https://github.com/RusuDarius/drum-kit",
  },
  {
    title: "Eat-n-split",
    description:
      "This is a bill splitting project that I made using React. I used a lot of common React logic concepts here like state, props and more.",
    codeLink: "https://github.com/RusuDarius/eat-n-split",
  },
  {
    title: "Secrets Project",
    description:
      "This is the first project where I used an API, provided by an online teacher from my first course on Udemy, about 1 year ago. Here I first lerned how REST APIs work and are used. I also got to use EJS and learn about it.",
    codeLink: "https://github.com/RusuDarius/Secrets-Project",
  },
  {
    title: "Andarius Bogdizza",
    description:
      "As the name kind of suggests, this is a project I started with 2 other friends. We tried to make out own fully functional pizza website by first cloning a pizza website that we liked. The project is still in development.",
    codeLink: "https://github.com/dimoiuBogdan/andarius-bogdizza",
  },
];

const Projects = () => {
  return (
    <>
      <div className="w-[80%] mt-5 font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white to-black h-10 flex items-center text-3xl">
        My Experience
      </div>
      <div className="grid grid-cols-3 items-center gap-10 w-[82%] mb-10">
        {PROJECT_CARDS.map((item) => (
          <ProjectItem {...item} key={item.title} />
        ))}
      </div>
    </>
  );
};

export default Projects;
