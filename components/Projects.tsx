import Image from "next/image";
import Link from "next/link";

const Projects = () => {
  return (
    <section id="projects">
      <div className="py-20">
        <h1 className="heading">
          <span className="text-purple">Projects</span>
        </h1>
        <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
          <a href="/">
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
              <Image
                className="w-full"
                src="/main.png"
                alt="Sunset in the mountains"
                width={500}
                height={400}
              />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Modern Portfolio</div>
                <p className="text-gray-700 text-base ">
                  My minimalist portfolio website, built with Next.js, Tailwind
                  CSS, and Framer Motion.
                </p>
              </div>
              <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  Nextjs
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  TailwindCSS
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  Framer Motion
                </span>
              </div>
            </div>
          </a>

          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <Image
              className="w-full"
              src="/p4.svg"
              alt="Sunset in the mountains"
              width={500}
              height={400}
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Apple Home Page</div>
              <p className="text-gray-700 text-base ">
                My minimalist portfolio website, built with Next.js, Tailwind
                CSS, and Framer Motion.
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                ReactJS
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                ThreeJS
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                GSAP
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                Vite
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Projects;
