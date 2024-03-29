import React from "react";

const AboutPage = () => {
  return (
    <div className="min-h-screen">
        <h1 className="text-3xl font-bold mb-4">About Us</h1>
        <p className="text-lg">
          Welcome to the Graduate Teaching Assistant Management System (GTAMS), a platform designed to streamline the management of teaching assistant positions in educational institutions.
        </p>
        <p className="mt-4">
          GTAMS aims to simplify the process of hiring, assigning, and managing teaching assistant roles across various departments and courses.
        </p>
        <p className="mt-4">
          Developed by Atlantic University, GTAMS leverages cutting-edge technology to optimize the efficiency and effectiveness of teaching assistant programs.
        </p>
    
      <div>
        <h2 className="text-2xl font-bold mb-2">About Atlantic University</h2>
        <p className="text-lg">
          Atlantic University is a leading institution dedicated to innovation and excellence in education. With a commitment to fostering academic growth and research, Atlantic University prepares students for success in their chosen fields.
        </p>
        <p className="mt-4">
          Located in the heart of [Location], Atlantic University offers a diverse range of programs and resources to support student learning and development.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
