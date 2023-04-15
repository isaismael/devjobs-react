import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Header } from "../components/Header";
import { JobLists } from "../components/JobLists";
import { JobDetails } from "../components/JobDetails";

export const MyRoutes = () => {
  return (
    <Router>
        <Routes>
            <Route exact path='/' element={<JobLists />} />
            <Route exact path='/jobs' element={<JobLists />} />
            <Route exact path='/jobs/:position' element={<JobDetails />} />
        </Routes>
    </Router>
  )
}
