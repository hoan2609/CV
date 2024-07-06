import React from "react";
import "./Cv.scss";

import avatar from "../assets/avatar.jpg";

const Cv = () => {
  return (
    <div className="container">
      <div className="avatar">
        <img src={avatar} alt="avatar" />
      </div>
      <div className="name">
        <h1>TẠ TUẤN HOÀN</h1>
        <div className="specialize">Front-End Developer</div>
        <ul className="contact">
          <li>
            <span>P</span> 0582725759
          </li>
          <li>
            <span>E</span> hoanta2609@gmail.com
          </li>
          <li>
            <span>W</span>{" "}
            <a
              href="https://www.facebook.com/panther.pink.7330"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.facebook.com/panther.pink.7330
            </a>
          </li>
        </ul>
      </div>
      <div className="info">
        <ul>
          <li>70 Nguyễn Đức Cảnh, Hoàng Mai, Hà Nội</li>
          <li>26/09/1998</li>
          <li>University of Economics - Technology for Industries (UNETI)</li>
        </ul>
      </div>
      <div className="intro">
        <h2>OBJECTIVE</h2>
        <p>
          As a Frontend Developer with 2+ years of experience in web
          development, I specialize in implementing and designing user
          interfaces. I possess strong skills in HTML, CSS, JavaScript, and
          React, with a focus on building user-friendly websites. I am actively
          seeking new opportunities to further enhance my frontend expertise and
          contribute to impactful projects.
        </p>
      </div>
      <div className="experience">
        <h2>EXPERIENCE</h2>
        <div className="item">
          <h4>Front-end Developer</h4>
          <div className="time">
            <span>11/2021 - Present</span>
            <span>ICEO</span>
          </div>
          <div className="des">
            During my tenure at ICEO, I underwent extensive on-the-job training
            to deepen my understanding and proficiency in web technologies. I
            actively participated in projects related to dating, social
            networking, booking...
          </div>
        </div>
        <div className="item">
          <h4>Front-end Developer</h4>
          <div className="time">
            <span>08/2021 - 11/2021</span>
            <span>FANXIPAN</span>
          </div>
          <div className="des">
            <span>
              - Implementing a meeting room booking project using ReactJS.
            </span>
            <br />
            <span>
              - Applying the Bootstrap framework, Ant Design (antd), and
              JavaScript
            </span>
          </div>
        </div>
        <div className="item">
          <h4>Student</h4>
          <div className="time">
            <span>06/2017 - 08/2021</span>
            <span>
              University of Economics - Technology for Industries (UNETI)
            </span>
          </div>
          <div className="des">
            <span>Information Technology</span>
            <br />
            <span>Graduated: Good</span>
          </div>
        </div>
        <h2 className="skills">SKILLS</h2>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>SCSS</li>
          <li>Reactjs</li>
          <li>Vue2</li>
          <li>Vue3</li>
          <li>React hook</li>
          <li>Bootstrap</li>
          <li>Shopify Polaris</li>
          <li>Redux</li>
          <li>Redux Toolkit</li>
          <li>Vuex</li>
          <li>MySql</li>
          <li>Git</li>
        </ul>
      </div>
      <div className="project">
        <h2>PROJECTS</h2>
        <div className="item">
          <h4>GAMIFA (08/2023 - Present)</h4>
          <div className="time">Name of customer: Product of company</div>
          <div className="size">Your team size: 10</div>
          <div className="location">
            Your position in project: Front-end Developer
          </div>
          <div className="des">
            An application that allows the creation of a social network combined
            with gamification, accompanied by an e-commerce system, sales
            system, and multi-channel sales for business
            <ul>
              <li>
                Developing a website to manage applications using ReactJS.
              </li>
              <li>
                Developing features for the social network, such as course,
                leaderboard, member...
              </li>
            </ul>
          </div>
          <div className="technologies">Technology description</div>
          <div className="des">
            <ul>
              <li>ReactJS, Vue3, TypeScript, Bootstrap, Shopify Polaris</li>
              <li>Environment/ Tools: Github, Trello</li>
            </ul>
          </div>
        </div>
        <div class="item">
          <h4>WHITEG (09/2022 - 03/2023)</h4>
          <div class="time">Name of customer: Product of company</div>
          <div class="size">Your team size: 10</div>
          <div class="location">
            Your position in project: Frond-end Developer
          </div>
          <div class="des">
            A social network for the LGBT community, including features such as
            connections, calling, messaging, interactive maps, etc.
            <ul>
              <li>
                Developing a website to manage applications using ReactJS.
              </li>
              <li>
                Developing a website to showcase product information using Vue2.
              </li>
              <li>
                Developing a website for communication between administrators
                and users using Vue2.
              </li>
            </ul>
          </div>

          <div class="technologies">Technology description</div>
          <div class="des">
            <ul>
              <li>ReactJS, Vue2, TypeScript, Bootstrap, Shopify Polaris</li>
              <li>Enviroment/ Tools: Github, Trello </li>
            </ul>
          </div>
        </div>

        <div class="item">
          <h4>Fudaly world (02/2022 - 08/2022)</h4>
          <div class="time">Name of customer: Product of company</div>
          <div class="size">Your team size: 10</div>
          <div class="location">
            Your position in project: Frond-end Developer
          </div>
          <div class="des">
            A platform that connects spiritual service providers such as tarot
            reading, astrology, with those in need.
            <ul>
              <li>
                Developing a website to manage applications using Reactjs.
              </li>
              <li>
                Developing a website to connect users with advisors using Vue2.
              </li>
            </ul>
          </div>

          <div class="technologies">Technology description</div>
          <div class="des">
            <ul>
              <li>ReactJS, Vue2, TypeScript, Bootstrap, Shopify Polaris</li>
              <li>Enviroment/ Tools: Github, Trello </li>
            </ul>
          </div>
        </div>

        <div class="item">
          <h4>Meeting room management (08/2021 - 11/2021)</h4>
          <div class="time">Name of customer: Product of company</div>
          <div class="size">Your team size: 5</div>
          <div class="location">
            Your position in project: Frond-end Developer
          </div>
          <div class="des">
            Web application that allows people to quickly and conveniently book
            meeting rooms anytime, anywhere.
            <ul>
              <li>System analysis and design</li>
              <li>
                Implementing functions for adding, editing, deleting, and
                viewing the usage history of meeting rooms
              </li>
              <li>Code optimization</li>
              <li>Fix bug</li>
            </ul>
          </div>

          <div class="technologies">Technology description</div>
          <div class="des">
            <ul>
              <li>ReactJS, TypeScript, Antd</li>
              <li>Enviroment/ Tools: Gitlab, Jira</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cv;
