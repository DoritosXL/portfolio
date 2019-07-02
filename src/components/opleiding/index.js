import React from 'react';
import './opleiding.css';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

function Opleiding() {
  return (
    <div className="Opleiding">
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="1-1-2019"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: 'white' }}
          // icon={<WorkIcon />}
        >
          <p>School 1</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date=""
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          // icon={<WorkIcon />}
        >
          <p>School 2</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date=""
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          // icon={<WorkIcon />}
        >
          <p>School 3</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Opleiding;
