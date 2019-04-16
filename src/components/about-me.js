import React from 'react';
import {connect} from 'react-redux';
import '../styles/about-me.css'


export function AboutMe(props) {

  return (
    <main className="about-me">  
    <div className="about-me-text-box">
      <p>I've worked hard all my life, Whether that meant working in a warehouse dragging 100 pound cabinets around at 14 years old,
        making money in my vast array of side hustles or even working a perpetual 60 hour a week in construction.
        after a year out of highschool i felt like I school was the best road forward,
        so I went on to community college and took all of the hardest engineering classes I could in order to prove to myself that I was smart enough to make it in the world.
        After a few semesters I took a java programming class, and immediately I was hooked, the next semester I took a class in C++ and I knew for sure, that this was what I wanted to do with my life.
        I had so much fun learning I finished the whole class's curriculum in a few weeks.
        After those couple of weeks I decided I would take a break from formal education to pursue my new found passion.
        Before that semester even finished I enrolled in Thinkful's Software Engineering Program.
        I've learned so much more than I could have ever dreamed. Programming has become my passion,
        and I am truly grateful to be provided the opportunity to use the skills I've learned to create real value, for real people.</p>
      </div>
    </main>
  );
}

const mapStateToProps = state => ({
});

export default connect(mapStateToProps)(AboutMe);