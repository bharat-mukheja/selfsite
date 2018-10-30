import React from 'react';

var home_writeup = "I am a computer science engineer interested in Machine Learning, Data Science, Backend Development and Product Development. I want to make computers smarter and useful in solving daily problems and help us in a smarter way. You can find the list of the projects which I have worked on in the projects tab. I am actively looking for job opportunities with organizations who can leverage my skills and experience and at the same time provide me with a challenge. Offline I am great person to hang out with, my hobbies include playing racquetball, instagramming, travelling, public speaking, working out, photography and singing.\n\nSelect any tab to know about me and my skills.";

export const pages = { 
    aboutme: "", 
    home: <article className="pt-5 text-secondary text-justify" style={{ fontSize: '1.2rem', whiteSpace: 'pre-line' }}>{home_writeup}</article>, 
    portfolio: "", 
    experience: "", 
    skills: "" 
};