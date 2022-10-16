

const saveDepartmentName = async (body, deptId) => {
    const res = await fetch(`${process.env.APP_URL}department-name`,
        {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body)
        }
    );
    const temp = res.json();
    return temp;
}
const saveDepartmentTeamDetails = async (body, id) => {
    const res = await fetch(`${process.env.APP_URL}department-team/${id}`,
        {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body)
        });
    const temp = res.json();
    return temp;
}

const getDeptName = async () => {
    const res = await fetch(`${process.env.APP_URL}department-name`);
    const temp = res.json();
    return temp;
}

const getDeptEmployeeDetails = async () => {
    const res = await fetch(`${process.env.APP_URL}department-team`);
    const temp = res.json();
    return temp;
}



export { saveDepartmentName, saveDepartmentTeamDetails, getDeptName, getDeptEmployeeDetails };
