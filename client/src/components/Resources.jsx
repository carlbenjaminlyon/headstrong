import React from 'react';
import axios from 'axios';

const Resources = (props) => {

  return (
    <div id='resource'>
      <h1 id='resources'>National Suicide Prevention Lifeline</h1>
      <h2>800-273-8255</h2>
      <hr></hr>
      <h1 id='resources'>National Institute of Mental Health</h1>
      <a className="link" href='https://www.nimh.nih.gov/health/find-help/index.shtml' >LINK</a>
      <hr></hr>
      <div><h1 id='resources'>Depression Resources</h1>

        <ul>
          <li ><a className="link" href="https://adaa.org/understanding-anxiety/depression"id='links'>Anxiety and Depression Association of America</a></li>
          <li><a className="link" href="https://www.mhanational.org/self-help-tools"id='links'>Tools for Mental Wellness</a></li>
        </ul></div>
        <hr></hr>
      <div><h1 id='resources'>Substance Abuse Resources</h1>
        <ul>
          <li> <a className="link" href="https://www.samhsa.gov/find-help/atod"id='links'>Resources for various substance abuse</a></li>
        </ul></div>
        <hr></hr>
      <div> <h1 id='resources'>Domestic Abuse Resources</h1>
        <h2 id='resources'>Domestic Abuse Hotline</h2>
        <h3>1-800-799-7233</h3>
        <ul>
          <li><a className="link" href="https://www.thehotline.org/identify-abuse/understand-relationship-abuse/"id='links'>National Domestic Violence Hotline Website</a> </li>
          <li>
            <a className="link" href="https://ncadv.org/" id='links'> National Coalition Against Domestic Violence </a>
          </li>

        </ul></div>
        <hr></hr>
      <h2 id='resources'> Resources for Stress and Anxiety </h2>
      <ul>
        <li> <a className="link" href="https://www.counseling.org/knowledge-center/mental-health-resources/anxiety"id='links'>American Counseling Association</a></li>
        <li>
          <a className="link" href="https://www.apa.org/topics/anxiety/disorders"id='links'>American Psychological Association</a>
        </li>

      </ul>
      <hr></hr>
      <h1 id='resources'>In Case of Emergency</h1>
      <h3 id='danger'>Please Call 9-1-1</h3>
    </div>

  );
};
export default Resources;
