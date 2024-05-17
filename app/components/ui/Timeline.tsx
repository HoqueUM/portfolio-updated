'use client';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { SiTypescript } from "react-icons/si";
import '../../globals.scss';


const Timeline = () => {
  return (
<VerticalTimeline
lineColor='var(--secondary-color)'
animate={true}
>
<VerticalTimelineElement
    className="vertical-timeline-element"
    contentStyle={{background: '#007483', color: '#ffffff', boxShadow: 'none'}}
    date="May 2024 - Present"
    iconStyle={{ background: 'transparent', color: '#fff', boxShadow: 'none' }}
    visible={true}
  >
    <h2 className="vertical-timeline-element-title text-white" style={{color: 'white'}}>Software Engineer Intern</h2>
    <h3 className="vertical-timeline-element-title">Avasure</h3>
    <h4 className="vertical-timeline-element-subtitle">Grand Rapids, MI</h4>
    <p>
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{background: '#00274C', color: '#FFCB05', boxShadow: 'none'}}
    date="Aug 2023 - Present"
    iconStyle={{ background: 'transparent', color: '#fff', boxShadow: 'none' }}
    visible={true}

  >
    <h2 className="vertical-timeline-element-title  [#FFCB05]" style={{color: '#FFCB05'}}>Student</h2>
    <h3 className="vertical-timeline-element-title">University of Michigan</h3>
    <h4 className="vertical-timeline-element-subtitle">Ann Arbor, MI</h4>
    <p>

    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{background: '#00274C', color: '#FFCB05', boxShadow: 'none'}}
    date="May 2023 - Aug 2023"
    iconStyle={{ background: 'transparent', color: '#fff', boxShadow: 'none' }}
    visible={true}

  >
    <h2 className="vertical-timeline-element-title text-[#FFCB05]" style={{color: '#FFCB05'}}>Machine Learning Intern</h2>
    <h3 className="vertical-timeline-element-title">University of Michigan</h3>
    <h4 className="vertical-timeline-element-subtitle">Ann Arbor, MI</h4>
    <p>
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{background: '#003882 ', color: '#ffffff', boxShadow: 'none'}}
    date="Aug 2022 - Apr 2023"
    iconStyle={{ background: 'transparent', color: '#fff', boxShadow: 'none' }}
    visible={true}

  >
    <h2 className="vertical-timeline-element-title text-black" style={{color: 'white'}}>Student</h2>
    <h3 className="vertical-timeline-element-title">Grand Rapids Community College</h3>
    <h4 className="vertical-timeline-element-subtitle">Grand Rapids, MI</h4>
    <p>
    </p>
  </VerticalTimelineElement>
</VerticalTimeline>
  );
};

export default Timeline;