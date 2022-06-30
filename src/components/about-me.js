import React from 'react';
import {connect} from 'react-redux';
import '../styles/about-me.css'


export function AboutMe(props) {

  return (
    <main className="about-me">  
    <div className="about-me-text-box">
      <p>
        After graduating high school I went on to community college and took all of the hardest engineering classes
        I could in order to prove to myself that I was smart enough to make it in the world.
        After a few semesters I took a java programming class, and immediately I was hooked,
        the next semester I took a class in C++ and I knew for sure, that this was what I wanted to do with my life.
        I had so much fun learning I finished the whole class's curriculum in a few weeks.
      </p>
      <p>
        After those couple of weeks I decided I would take a break from formal education to pursue my new found passion.
        Before that semester even finished I enrolled in Thinkful's Software Engineering Immersion bootcamp
      </p>
      <p>
        It was here where I learned the power of collaborative coding.
        I found that I thrive in an environment built around creating software in teams.
      </p>
      <p>
        Programming has become my passion. I simply love that feeling of writing a clean code that "just works"
      </p>
      </div>
    </main>
  );
}

const mapStateToProps = state => ({
});

export default connect(mapStateToProps)(AboutMe);