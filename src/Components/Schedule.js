import React, { useState } from "react";

const Popup = ({ details, onClose }) => {
  return (
    <div className="popup-overlay">
      <div className="popup">
        <button className="close-btn" onClick={onClose} style={{ color: 'red', fontSize: '3vh', fontWeight: 'bolder' }}>X</button>
        <h2>Details</h2>
        <div className="details-grid">
          {details.map((dayDetails, index) => (
            <div key={index} className="details-row">
              <p><strong></strong> {dayDetails}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Schedule = () => {
  const [selectedWeek, setSelectedWeek] = useState(1);
  const [popupDetails, setPopupDetails] = useState(null);

  const [detailsByWeek, setDetailsByWeek] = useState({
    "1:0": [

      "CNC Machining Processes",
      "Introduction to CNC Machining and its Applications",
      "Understanding CNC Programming and G-Code",
      "Tool Selection and Optimization in CNC Machining",
      "Precision Machining Techniques",
      "Program and operate a CNC machine for simple part manufacturing"
    ],

    "1:1": [
      "Hydraulic Machine Operation",
      "Basics of Hydraulic Systems",
      "Hydraulic Components and their Functions",
      "Overview of different types of hydraulic turbines (Pelton, Francis, Kaplan)",
      "Study the components of a hydraulic turbine system",
      "Hands-on experience in hydraulic turbine operations"
    ],
    "1:2": [
      "Refrigeration Systems",
      "Fundamentals of Refrigeration",
      "Types of Refrigerants and their Properties",
      "Components of Refrigeration Systems",
      "Energy Efficiency in Refrigeration",
      "Assemble and disassemble refrigeration components",
      "Perform routine maintenance on refrigeration systems",
      "Identify and fix refrigeration system faults"
    ],
    "1:3": [
      "Automobile Engineering",
      "Automotive Engine Technology",
      "Vehicle Dynamics and Control Systems",
      "Hybrid and Electric Vehicles",
      "Automotive Safety Systems",
      "Future Trends in Automobile Engineering",
      "Disassemble and reassemble automotive engine components",
      "Hands-on experience with computerised IC Engine"
    ],
    "1:4": [
      "Automation Systems",
      "Introduction to Industrial Automation",
      "PLC (Programmable Logic Controller) Programming",
      "SCADA (Supervisory Control and Data Acquisition) Systems",
      "Robotic Automation in Manufacturing",
      "Integration of Automation Systems",
      "Program a PLC for a simulated industrial process",
      "Design and operate a simple robotic automation system"
    ],
    "1:5": [
      "CATIA for 3D Modeling",
      "Introduction to CATIA Software",
      "Basic 3D Modeling Techniques",
      "Advanced Surface Modeling in CATIA",
      "Assembly and Kinematics in CATIA",
      "CATIA for Product Design and Simulation",
      "Practice 3D modeling exercises using CATIA",
      "Design and assemble virtual products in CATIA",
      "Simulate and analyze the motion of assembled parts"
    ],
    "1:6": [
      "3D Printing Techniques",
      "Basics of 3D Printing Technology",
      "Types of 3D Printers and their Applications",
      "3D Printing Materials and Selection Criteria",
      "Post-Processing Techniques for 3D Printed Objects",
      "Designing for 3D Printing",
      "Operate different types of 3D printers",
      "Experiment with various 3D printing materials"
    ],
    "1:7": [
      "Specialized Machines",
      "Overview of Specialized Machines in Manufacturing",
      "Case Studies of Specialized Machine Applications",
      "Design and Operation of Specialized Machines",
      "Emerging Trends in Specialized Machine Technology"
    ],
    "1:8": [
      "Testing of Advanced Materials",
      "Introduction to Advanced Materials",
      "Non-Destructive Testing (NDT) Techniques",
      "Mechanical Testing of Advanced Materials",
      "Conduct mechanical tests (tensile, hardness) on advanced materials"
    ]
  });

  // const x = ['Web Development', 'UI/UX', 'Poster Designing', 'Python Programming', 'Ethical Hacking', 'Game Development']

  const generateDates = (startWeek) => {
    const startDate = new Date("2024-04-15");
    startDate.setDate(startDate.getDate() + (startWeek - 1) * 7);

    const endDate = new Date(startDate);
    endDate.setDate(startDate.getDate() + 8);

    const dates = [];
    let currentDate = startDate;

    while (currentDate <= endDate) {
      dates.push(new Date(currentDate));
      currentDate.setDate(currentDate.getDate() + 1);
    }

    return dates;
  };

  const handleWeekChange = (week) => {
    setSelectedWeek(week);
  };

  const handleViewDetails = (weekIndex) => {
    console.log(selectedWeek, " ", weekIndex);
    const details = detailsByWeek[selectedWeek + ":" + weekIndex];
    setPopupDetails(details);
  };

  const handleClosePopup = () => {
    setPopupDetails(null);
  };

  const dates = generateDates(selectedWeek);

  return (
    <div className="schedule-container" style={{ marginTop: '10vh', textAlign: 'center', padding: '2vh', background: '#fafafa', }}>
      <h2 style={{ fontSize: '3rem', background: 'linear-gradient(black, blue)', backgroundClip: 'text', WebkitTextFillColor: 'transparent', }}>Syllabus</h2>
      <div style={{ overflowX: 'auto' }}>
        <table style={{ width: "80%", margin: "0 auto", borderCollapse: "collapse", }}>
          {/* <thead> */}
            {/* <tr> */}
              {/* {[1].map((week) => ( */}
                {/* <th key={week} onClick={() => handleWeekChange(week)} style={{ padding: "10px", textAlign: "center", cursor: "pointer", backgroundColor: "whitesmoke", transition: "background-color 0.5s", minWidth: "100px" }}> */}
                  {/* {x[week - 1]} <br /> */}
                {/* </th> */}
              {/* ))} */}
            {/* </tr> */}
          {/* </thead> */}
        </table>
      </div>


      <table style={{ width: "80%", margin: "20px auto", borderCollapse: "collapse", }}>
        <thead>
          <tr>
            <th style={{ border: "1px solid black", padding: "8px", backgroundColor: "#007BFF", color: "#fff" }}>Date</th>
            {/* <th style={{ border: "1px solid black", padding: "8px", backgroundColor: "#007BFF", color: "#fff" }}>Day</th> */}
            <th style={{ border: "1px solid black", padding: "8px", backgroundColor: "#007BFF", color: "#fff" }}>Topics</th>
          </tr>
        </thead>
        <tbody>
          {dates.map((date, index) => (
            <tr key={index} style={{ backgroundColor: index % 2 === 0 ? "white" : "whitesmoke" }}>
              {/* <td style={{ border: "1px solid black", padding: "8px" }}>{`${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`}</td> */}
              <td style={{ border: "1px solid black", padding: "8px" }}>Event {index + 1}</td>
              {/* <td style={{ border: "1px solid black", padding: "8px" }}>{["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"][date.getDay()]}</td> */}
              <td style={{ border: "1px solid black", padding: "8px"}}>
                <button onClick={() => handleViewDetails(index)} className="syllabus-link" style={{ display: "block", textAlign: "center", padding: "5px", textDecoration: "none", color: "#007BFF", cursor: "pointer", backgroundColor: "transparent", border: "none", transition: "background-color 0.3s",marginLeft:"auto",marginRight:"auto" }}>View</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {popupDetails && <Popup details={popupDetails} onClose={handleClosePopup} />}
    </div>
  );
};

export default Schedule;