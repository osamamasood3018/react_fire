import React from "react";
import "./index.css";
import ReactDOM from "react-dom";

function Hi() {
  return (
    <div className="abc">
      <u>
        <b>
          {" "}
          <div className="osama">
            <h1>
              {" "}
              <i>"Muhammad Osama Masood"</i>{" "}
            </h1>{" "}
          </div>
          <div class="masood">
            <img
              src="https://github.com/osamamasood3018/my-css-cv/blob/main/img/osama.jpeg?raw=true"
              alt="left"
              width={150}
            />
          </div>
        </b>
      </u>
      <p>
        <li> Address: R-63 block 14 F.B Area Karachi </li>
        <li> Phone No. 03330242040 </li>
        <li> Email:muhammadosamamasood@gmail.com </li>
      </p>
      <h1>Objectives:</h1>I am hardworking and punctual student. I take actively
      participate in different activities. I have ability to tackle problems and
      make good solutions. I am good in creative work. I selected computer
      engineering field because want to enhance my Computer skills and Machine
      learning. I will contribute all my best to SMIT.
      <h1>Education:</h1>
      <li>
        <b>University:</b> Sir Syed University of Engineering and Technology –
        2021 – 3rd Semester | Department Computer Engineering |{" "}
      </li>
      <li>
        <b>College:</b> Formen College Nazimabad Karachi – 2021 – A Grade |
        Intermediate Pre Engineering |
      </li>
      <li>
        <b>School:</b> Metropolitan Academy Naseerabad Campus – 2019 – A Grade
        Matriculation | Computer Science |{" "}
      </li>
      <h1>
        <b>Sports:</b>
      </h1>
      <ul>
        <li>Football</li>
        <li>Cricket</li>
      </ul>
      <h1>
        <b>Hobbies:</b>
      </h1>
      <ul>
        <li>Gym</li>
        <li>Socializing</li>
        <li>Netflix </li>
      </ul>
    </div>
  );
}

ReactDOM.render(<Hi />, document.querySelector("#root"));