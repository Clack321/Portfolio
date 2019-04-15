import React from 'react';
import {connect} from 'react-redux';
import '../styles/about-me.css'


export function AboutMe(props) {

  return (
    <main className="about-me">  
    <div className="about-me-text-box">
      <p>I've worked hard all my life, Whether I was working in a warehouse dragging 100 pound cabinets around at 14 years old,
        making money in my side hustles or even working 70 hours a week in construction. I believed I was meant for better things however,
        so I went on to community college and took all of the hardest engineering classes I could in order to prove to myself that I was smart enough to make it in the world.
        After a few semesters I took a java programming class, and immediately I was hooked, the next semester I took a class in C++ programming,
        I had so much fun learning I finished the whole classes curriculum in a few weeks.
        After those two weeks I decided I would take a break from formal education to pursue my new found passion.
        Before that semester even finished I was enrolled in Thinkful's software engineering program.
        I've learned so much more than I could have ever dreamed. Programming has become my passion,
        and I would love to be provided the opportunity to use the skills I've learned to create real value, for real people.</p>
      </div>
    </main>
  );
}

const mapStateToProps = state => ({
});

export default connect(mapStateToProps)(AboutMe);