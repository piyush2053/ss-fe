import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Dashboard from './Dashboard/Dashboard';
import NotFound from './Pages/NotFound/NotFound';
import TimeSheet from './Pages/Timesheet/TimeSheet';
import SchoolCalender from './Pages/SchoolCalender/SchoolCalender';
import TimeTable from './Pages/TimeTable/TimeTable';
import TeacherSalarySlip from './Pages/TeacherSalarySlip/TeacherSalarySlip';
import Login from './Pages/Login/Login';
import { UserProvider } from './Store/UserStore/UserStore';

const App = () => {
  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route path=":school_name/Login" element={<Login />} />
          <Route path=":school_name/dashboard" element={<Dashboard />}>
            <Route path="employe_timesheet" element={<TimeSheet />} />
            <Route path="calender" element={<SchoolCalender />} />
            <Route path="time_table" element={<TimeTable />} />
            <Route path="teacher_salary_slip" element={<TeacherSalarySlip />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </UserProvider>
  );
};

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(<App />);
} else {
  console.error('Root element not found. Please ensure there is an element with id="root" in your HTML.');
}

reportWebVitals();
