import {
    UploadOutlined,
    UserOutlined,
    CalendarOutlined,
    TableOutlined,
    FileTextOutlined,
  } from '@ant-design/icons';
  
  export const SideItems = [
    {
      key: 'timesheet',
      icon: <UserOutlined />,
      label: 'Timesheet',
      path: '/application/:school_name/employe_timesheet',
    },
    {
      key: 'calendar',
      icon: <CalendarOutlined />,
      label: 'School Calendar',
      path: '/application/:school_name/calender',
    },
    {
      key: 'timetable',
      icon: <TableOutlined />,
      label: 'Time Table',
      path: '/application/:school_name/time_table',
    },
    {
      key: 'salary_slip',
      icon: <FileTextOutlined />,
      label: 'Teacher Salary Slip',
      path: '/application/:school_name/teacher_salary_slip',
    },
  ];
  