import React, { useEffect } from "react";
import Chart from "chart.js/auto";
import "./styles/Skills.css";

const Skills = () => {
  useEffect(() => {
    // Define Data for Non-Technical Skills
    const nonTechnicalSkills = [
      { label: "Communication skills", percentage: 80, color: "#FF5733" },
      { label: "Problem solving", percentage: 90, color: "#FFC300" },
      { label: "Time management", percentage: 85, color: "#33FF63" },
      { label: "Adaptability", percentage: 75, color: "#33A2FF" },
      { label: "Leadership", percentage: 70, color: "#9D33FF" },
      { label: "Teamwork", percentage: 95, color: "#FF33DB" },
    ];

    // Define Data for Technical Skills
    const technicalSkills = [
      { label: "HTML", percentage: 90, color: "#FF5733" },
      { label: "CSS", percentage: 85, color: "#FFC300" },
      { label: "JavaScript", percentage: 85, color: "#33FF63" },
      { label: "React", percentage: 75, color: "#33A2FF" },
      { label: "Flask", percentage: 70, color: "#9D33FF" },
      { label: "Python", percentage: 95, color: "#FF33DB" },
    ];

    // Create a pie chart for Non-Technical Skills
    const nonTechnicalCanvas = document.getElementById("nonTechnicalChart");
    const nonTechnicalChart = new Chart(nonTechnicalCanvas, {
      type: "pie",
      data: {
        labels: nonTechnicalSkills.map((skill) => skill.label),
        datasets: [
          {
            data: nonTechnicalSkills.map((skill) => skill.percentage),
            backgroundColor: nonTechnicalSkills.map((skill) => skill.color),
            hoverOffset: 8, // Add hover effect with a small offset
          },
        ],
      },
      options: {
        responsive: true,
        animation: {
          animateRotate: true,
        },
        plugins: {
          legend: {
            display: window.innerWidth > 768,
            labels: {
              font: {
                minSize: 10,
                maxSize: 20,
              },
            },
          },
        },
        aspectRatio: 1,
      },
    });

    // Create a pie chart for Technical Skills
    const technicalCanvas = document.getElementById("technicalChart");
    const technicalChart = new Chart(technicalCanvas, {
      type: "pie",
      data: {
        labels: technicalSkills.map((skill) => skill.label),
        datasets: [
          {
            data: technicalSkills.map((skill) => skill.percentage),
            backgroundColor: technicalSkills.map((skill) => skill.color),
            hoverOffset: 8, // Add hover effect with a small offset
          },
        ],
      },
      options: {
        responsive: true,
        animation: {
          animateRotate: true,
        },
        plugins: {
          legend: {
            display: window.innerWidth > 768,
            labels: {
              font: {
                minSize: 10,
                maxSize: 20,
              },
            },
          },
        },
        aspectRatio: 1,
      },
    });
       
    function shimmerEffect(color) {
      return `radial-gradient(circle, ${color}, transparent 20%)`;
    }
  
  }, []);

  return (
    <div className="skills-container" id="Skills">
      <div>
        <span>
          <h1 style={{ fontSize: "40px" }} align="center">
            Skills
          </h1>
        </span>
        <div className="sleft">
          <h1 style={{ fontSize: "20px" }}>Non-Technical</h1>
          <canvas id="nonTechnicalChart" className="chart-container"></canvas>
        </div>
        <div className="sright">
          <h1 style={{ fontSize: "20px" }}>Technical</h1>
          <canvas id="technicalChart" className="chart-container"></canvas>
        </div>
        
        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
      </div>
  );
};

export default Skills;
