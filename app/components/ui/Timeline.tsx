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
    className="vertical-timeline-element--work"
    contentStyle={{background: '#007483', color: '#ffffff'}}
    date="May 2024 - Present"
    iconStyle={{ background: '#000', color: 'ffffff' }}
    icon={<SiTypescript />}
    visible={true}

  >
    <h2 className="vertical-timeline-element-title">Software Engineer</h2>
    <h3 className="vertical-timeline-element-title">Avasure</h3>
    <h4 className="vertical-timeline-element-subtitle">Grand Rapids, MI</h4>
    <p>
      Creative Direction, User Experience, Visual Design, SEO, Online Marketing
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{background: '#00274C', color: '#FFCB05'}}
    date="Aug 2023 - Present"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<SiTypescript />}
    visible={true}

  >
    <h2 className="vertical-timeline-element-title">Student</h2>
    <h3 className="vertical-timeline-element-title">University of Michigan</h3>
    <h4 className="vertical-timeline-element-subtitle">Ann Arbor, MI</h4>
    <p>
      Creative Direction, User Experience, Visual Design, SEO, Online Marketing
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{background: '#00274C', color: '#FFCB05'}}
    date="May 2023 - Aug 2023"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<SiTypescript />}
    visible={true}

  >
    <h2 className="vertical-timeline-element-title">Machine Learning Intern</h2>
    <h3 className="vertical-timeline-element-title">University of Michigan</h3>
    <h4 className="vertical-timeline-element-subtitle">Ann Arbor, MI</h4>
    <p>
      Creative Direction, User Experience, Visual Design, SEO, Online Marketing
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{background: '#003882 ', color: '#000000'}}
    date="Aug 2022 - Apr 2023"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<SiTypescript />}
    visible={true}

  >
    <h2 className="vertical-timeline-element-title">Student</h2>
    <h3 className="vertical-timeline-element-title">Grand Rapids Community College</h3>
    <h4 className="vertical-timeline-element-subtitle">Grand Rapids, MI</h4>
    <p>
      Creative Direction, User Experience, Visual Design, SEO, Online Marketing
    </p>
  </VerticalTimelineElement>
</VerticalTimeline>
  );
};

export default Timeline;