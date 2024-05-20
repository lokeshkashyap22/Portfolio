const About = () => {
  return (
    <section id="about">
      <div className="py-16 w-screen ">
        <h1 className="heading">
          <span className="text-purple">About</span>
        </h1>
        <div className="grid grid-cols-2 max-w-6xl mx-auto mt-10 items-center gap-16">
          <div className="text-justify ">
            <p className="text-white font-normal">
              I am <span className="font-bold">Lokesh Kashyap</span>, based in
              New Delhi. I am a passionate programmer with a strong interest in
              <span className="font-bold"> Software Development</span>. I have
              proficiency in MERN, through which I can convert ideas into web
              reality. I have completed a few projects using my stack, but I am
              not just restricted to it. I am dynamic and can learn new
              technologies quickly. I am always open to new opportunities and
              challenges.
            </p>

            <p>
              Along with development, I have a solid foundation in Computer
              Science fundamentals such as{" "}
              <span className="font-bold">Data Structures & Algorithms</span>. I
              have solved more than 400 problems on LeetCode and GeeksforGeeks,
              which has enhanced my problem-solving skills and logical thinking.
            </p>
            <p>
              I am eager to join a team where I can learn and grow with the team
              and contribute to its success. I am open to new opportunities and
              challenges.
            </p>
          </div>
          <div className="flex flex-col gap-8 ">
            <img
              className="h-16 w-auto"
              src="https://skillicons.dev/icons?i=html,css,react,vite,tailwind"
            />
            <img
              className="h-16 w-auto"
              src="https://skillicons.dev/icons?i=js,ts,java,aws"
            />
            <img
              className="h-16 w-auto"
              src="https://skillicons.dev/icons?i=nextjs,nodejs,git,github,vscode"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
