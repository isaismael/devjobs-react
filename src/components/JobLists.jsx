import { useState } from "react";
import { Link } from "react-router-dom";
import jobs from "../data/data";

export const JobLists = () => {
  const [jobData, setJobData] = useState(jobs);

  const [searchTerm, setSearchtTerm] = useState('');

  const [searchByLocation, setSearchByLocation] = useState('');

  const searchTermValue = searchTerm.toLowerCase();

  const locationSearchHandler =  () => {
    const filteredData = jobs.filter((job) => job.location.toLowerCase().includes(searchByLocation.toLowerCase()))
    setJobData(filteredData)
  }

  return (
    <section className="job__list">
      <div className="container">
        <div className="job__list_wrapper">
          <div className="search__panel">
            <div className="search__panel-01">
              <input
                type="text"
                placeholder="Búsqueda por título, empresas..."
                value={searchTerm}
                onChange={(e) => setSearchtTerm(e.target.value)}
              />
            </div>
            <div className="search__panel-02">
            <input
                type="text"
                placeholder="Búsqueda por Ubicación"
                value={searchByLocation}
                onChange={(e) => setSearchByLocation(e.target.value)}
              />
              <button onClick={locationSearchHandler}>Buscar</button>
            </div>
          </div>
          <div className="job__wrapper">
            {jobData
              ?.filter((job) => {
                if (searchTerm === "") return job;
                if (
                  job.position.toLocaleLowerCase().includes(searchTermValue) ||
                  job.company.toLowerCase().includes(searchTermValue)
                )
                  return job;
              })
              .map((item) => (
                <div className="job__item" key={item.id}>
                  <div className="job__content">
                    <h6>
                      {item.postedAt} - {item.contract}
                    </h6>
                    <h1>
                      <Link to={`/jobs/${item.position}`}>{item.position}</Link>
                    </h1>
                    <p>{item.company}</p>
                    <div className="location">
                      <p>
                        Location: <span> {item.location} </span>
                      </p>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};
