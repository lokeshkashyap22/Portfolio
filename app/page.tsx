const Home = () => {
  return (
    <div className="p-12">
      <h1 className="text-center font-bold underline text-2xl mb-4">
        About Me
      </h1>
      <div className="py-8 flex flex-col gap-4 mx-auto w-4/5 items-center text-lg text-gray-800">
        <p>
          Hi there! My name is Lokesh Kashyap, and I am a passionate software
          developer based in New Delhi, India. I specialize in MERN Stack
          Development, DevOps technologies, and Computer Science fundamentals,
          particularly Data Structures and Algorithms (DSA). I am eager to
          connect with you, dear visitor!
        </p>
        <p>
          I am enthusiastic about collaborating on innovative projects and
          contributing to the tech community. Feel free to reach out to me! I
          look forward to connecting with like-minded individuals and exploring
          new opportunities in the world of software development.
        </p>
      </div>
      <div>
        <h2 className="text-lg font-bold text-center mb-4">Social Links</h2>
        <ul className="flex gap-4 justify-center">
          <li>
            <a
              href="https://linkedin.com/in/lokeshkashyap22"
              className="text-blue-600 hover:text-blue-800"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://leetcode.com/u/lokeshkashyap/"
              className="text-green-600 hover:text-green-800"
              target="_blank"
              rel="noopener noreferrer"
            >
              LeetCode
            </a>
          </li>
          <li>
            <a
              href="https://www.geeksforgeeks.org/user/lokeshkashyap/"
              className="text-green-600 hover:text-green-800"
              target="_blank"
              rel="noopener noreferrer"
            >
              GeeksForGeeks
            </a>
          </li>
          <li>
            <a
              href="https://github.com/lokeshkashyap/"
              className="text-gray-600 hover:text-gray-800"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href="mailto:kashyap.lokesh@outlook.com"
              className="text-red-600 hover:text-red-800"
              target="_blank"
              rel="noopener noreferrer"
            >
              E-mail
            </a>
          </li>
        </ul>
      </div>
      <div>
        <h2 className="text-lg font-bold text-center mb-4 py-8">Projects</h2>
        <ul className="flex gap-4 justify-center flex-col mx-auto w-4/5">
          <li>
            <p>
              <span>
                <a
                  href="http://project1.lokeshkashyap.tech"
                  className="underline font-bold"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LearnHub{"  "}
                </a>
              </span>
              Full Stack Application for buying diverse learning courses
            </p>
          </li>
          <li>
            <p>
              <span>
                <a
                  href="http://project2.lokeshkashyap.tech"
                  className="underline font-bold"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Quantum AI{"  "}
                </a>
              </span>
              Conversational interactive chatbot application similar to ChatGPT
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Home;
