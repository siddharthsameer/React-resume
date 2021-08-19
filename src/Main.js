const Main = () => {
  return (
    <div className="right_Side">
      <div className="about profile-sec">
        <h2 className="title2">Profile</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
          <br /> <br />
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupit non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum.
        </p>
      </div>
      <div className="about experience-sec">
        <h2 className="title2">Experience</h2>
        <div className="box">
          <div className="year_company">
            <h5>2020 - Present</h5>
            <h5>Company Name</h5>
          </div>
          <div className="text">
            <h4>Senior UX Developer</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>

        <div className="box">
          <div className="year_company">
            <h5>2018 - 2020</h5>
            <h5>Company Name</h5>
          </div>
          <div className="text">
            <h4>UX Developer</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>

        <div className="box">
          <div className="year_company">
            <h5>2016 - 2018</h5>
            <h5>Company Name</h5>
          </div>
          <div className="text">
            <h4>Junior UX Developer</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </div>
      <div className="about skills">
        <h2 className="title2">Professionals skills</h2>
        <div className="box">
          <h4>HTML</h4>
          <div className="percent">
            <div>{/*placeholder*/}</div>
          </div>
        </div>
        <div className="box">
          <h4>CSS</h4>
          <div className="percent">
            <div>{/*placeholder*/}</div>
          </div>
        </div>
        <div className="box">
          <h4>JavaScript</h4>
          <div className="percent">
            <div>{/*placeholder*/}</div>
          </div>
        </div>
        <div className="box">
          <h4>Photoshop</h4>
          <div className="percent">
            <div>{/*placeholder*/}</div>
          </div>
        </div>
        <div className="box">
          <h4>Illustrator</h4>
          <div className="percent">
            <div>{/*placeholder*/}</div>
          </div>
        </div>
        <div className=" box">
          <h4>Adobe XD</h4>
          <div className="percent">
            <div>{/*placeholder*/}</div>
          </div>
        </div>
      </div>
      <div className="about interest">
        <h2 className="title2">Interests</h2>
        <ul>
          <li>
            <i className="fa fa-book" aria-hidden="true"></i> Reading
          </li>
          <li>
            <i className="fa fa-gamepad" aria-hidden="true"></i> Gaming
          </li>
          <li>
            <i className="fa fa-cutlery" aria-hidden="true"></i> Cooking
          </li>
          <li>
            <i className="fa fa-microphone" aria-hidden="true"></i> Singing
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Main;
