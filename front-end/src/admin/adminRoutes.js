import React from 'react';

import ProjectDetail from './ProjectDetail/ProjectDetail'
import ManagerStatistic from './ManagerStatistic/ManagerStatistic'
const adminRoutes = [
    {
        path: "", exact: true, main: () => <ProjectDetail />, //http://localhost:3000/admin
    },
    {
        path: "/abc", exact: true, main: () => <ManagerStatistic />, //http://localhost:3000/admin/abc
    },
]

export default adminRoutes;