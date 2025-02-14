import React from "react";
import LocalImage from "../header/INNOVO.png";

export default function About() {
  return (
    <div className="py-16 bg-white">
      <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          <div className="md:5/12 lg:w-5/12">
            <img src={LocalImage} alt="image" />
          </div>
          <div className="md:7/12 lg:w-6/12">
            <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
              About Plearny
            </h2>
            <p className="mt-6 text-gray-600">
              Plearny is a gamified educational platform designed to make
              learning fun and engaging for children aged 6-12. Our mission is
              to provide interactive and enjoyable learning experiences for
              underprivileged children by combining play and education.
            </p>
            <p className="mt-4 text-gray-600">
              Why Plearny? 
              <br />
              ✔ Interactive Learning – Play-based approach to
              education. <br />
              ✔ Gamified Experience – Points, rewards, and challenges
              keep kids engaged. <br />
              ✔ Accessible & User-Friendly – Designed for
              children from diverse backgrounds. <br />
              ✔ Skill Development – Enhances
              logical thinking and problem-solving abilities. <br />
              Join Plearny and
              make learning an adventure! 🚀🎮📚
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
