import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          Education
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Bachelor of Engineering</h4>
                <h5>Jain University, Bengaluru</h5>
              </div>
              <h3>2022-2026</h3>
            </div>
            <p>
              B.Tech in Information Science and Engineering.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Higher Secondary School</h4>
                <h5>HKS COLLEGE</h5>
              </div>
              <h3>2020-2022</h3>
            </div>
            <p>
              Passed with First class distinction.
            </p>
          </div>
        </div>
      </div>
      <div className="career-container">
        <h2>
          Activities
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Coursera Certifications</h4>
                <h5>Online</h5>
              </div>
              <h3>Active</h3>
            </div>
            <p>
              - Introduction to Interactive Programming in Python
              <br />- Introduction to Java
              <br />- C for Everyone: Structured Programming
              <br />- Effective Problem-Solving and Decision-Making
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Extracurricular</h4>
                <h5>University Events</h5>
              </div>
              <h3>Active</h3>
            </div>
            <p>
              - Volunteered Cultural Events in my university
              <br />- Volunteer - College Tech Fest
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
