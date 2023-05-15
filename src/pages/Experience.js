import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";

const Experience = () => {
    return (
        <div className='experience'>
            <VerticalTimeline lineColor='#2dc2ac'>
                <VerticalTimelineElement className='vertical-timeline-element--education'
                    date='2017 - 2022'
                    iconStyle={{ background: '#2dc2ac', color: "#fff" }}
                    icon={<SchoolIcon />}
                >
                    <h3 className='vertical-timeline-element-title'>
                        Asian College Of Higher Studies Putalisadak, Kathmandu
                    </h3>
                    <p>Bachelor of Science in Computer Science and Information Technology.</p>

                </VerticalTimelineElement>
                <VerticalTimelineElement className='vertical-timeline-element--work'
                    date='2023- ? '
                    iconStyle={{ background: '#FF0000', color: "#fff" }}
                    icon={<WorkIcon />}
                >
                    <h3 className='vertical-timeline-element-title'>
                        Seeking for a job
                    </h3>
                    <p>In Web Development</p>

                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
    )
}

export default Experience;