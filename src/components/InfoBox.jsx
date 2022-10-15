import { ReactComponent as Calendar } from './../assets/calendar.svg';

const InfoBox = () => {
  return (
    <div className="info-wrapper animate__animated animate__fadeInDown">
      <h1>
        Welcome to ITERA-Course <br /> React Test Task
      </h1>
      <h2>Julia Tymoshko</h2>
      <div className="deadline">
        <Calendar />
        <p>
          <b>Deadline:</b> Sunday, 16th of October, 2022
        </p>
      </div>
    </div>
  );
};

export default InfoBox;
