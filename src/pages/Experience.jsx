import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css";
import { School,Work,Book } from "@material-ui/icons";

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#333333">
        <VerticalTimelineElement className="vertical-timeline-element-education" iconStyle={{background: "#c5f9e6", color: "red" }} icon={<School />}>
          <h3 className="vertical-timeline-element-title">Asian College Of Higher Studies</h3>
          <p>Putalisadak, Kathmandu</p>
          <p>Bsc Computer Science and Information Technology (Bsc CSIT)</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement className="vertical-timeline-element-work" iconStyle={{background: "#c5f9e6", color: "red" }} icon={<Book />}>
          <h3 className="vertical-timeline-element-title">Mindrisers</h3>
          <p>Flutter Developement Course</p>
          <p>Completed a comprehensive Flutter development course at Mindrisers.</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement className="vertical-timeline-element-title" iconStyle={{background: "#c5f9e6", color: "red" }} icon={<Work />}>
          <h3 className="vertical-timeline-element-title">Web Development</h3>
          <p>Seeking job opportunities in web development.</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  )
}

export default Experience