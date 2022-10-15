import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import TechnologiesSlider from './TechnologiesSlider';

const ProfilePage = ({ guestName }) => {
  return (
    <div className="profile">
      <h2>
        Hi, {guestName}! Thanks for reviewing my test task{' '}
        <VolunteerActivismIcon />
      </h2>
      <h3 className="motivation-title animate__animated animate__fadeInTopLeft slow">
        Motivation
      </h3>
      <p className="motivation-text animate__animated animate__fadeInTopLeft slow">
        I'm extremely happy that you're reading this since this is the first
        step for me to take part in your course.
      </p>
      <p className="motivation-text animate__animated animate__fadeInTopRight slow">
        Core skills:
        <ul>
          <li>HTML & PUG</li>
          <li>CSS & SCSS</li>
          <li>JavaScript & React (basic)</li>
          <li>Animation & Styles Libs (MUI, Animate.css, AOS, Bootstrap)</li>
        </ul>
      </p>
      <p className="motivation-text animate__animated animate__fadeInTopRight">
        Soft skills:
        <ul>
          <li>Dedicated & Responsible</li>
          <li>Creative & Proactive</li>
          <li>Attentive to details</li>
          <li>Not afraid to reach an extra mile to get the result</li>
        </ul>
      </p>
      <h3 className="motivation-title animate__animated animate__fadeInTopLeft">
        What am I looking for in this course?
      </h3>
      <p className="motivation-text animate__animated animate__fadeInTopLeft">
        I'm the person who is always trying to impove the knowledge & boost the
        skills. I know a bit of React as I mentioned before, so what? I want to
        deepen into React, understand its details and all pecularities. My
        sincere wish is to excel my current knowledge and get the mentorship
        from a more experienced developer who can share best practices and
        advise how to become a better speciast than I am now.
      </p>
      <p className="motivation-text animate__animated animate__fadeInTopRight">
        Extremely looking forward to your decision, Julia <FavoriteBorderIcon />
      </p>
      <TechnologiesSlider />
    </div>
  );
};

export default ProfilePage;
