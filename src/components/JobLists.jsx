import { useState } from "react";
import { Link } from "react-router-dom";
import jobs from "../data/data";

export const JobLists = () => {
  const [jobData, setJobData] = useState(jobs);

  return (
    <section>
      <div className="job__item">
        {jobData.map((item) => (
          <div key={item.id}>
            <div className="job__content">
              <h6>
                {item.postedAt} - {item.contract}
              </h6>
              <h1>
                <Link to={`/jobs/${item.position}`}>{item.position}</Link>
              </h1>
              <p>{item.company}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
