'use server'
async function ListProjects(token) {
    //console.log(data)
    try {
        const url = `${process.env.NEXT_PUBLIC_BACKEND_DOMAIN}/api/project`;

        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },

        });
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        const dataRes = await response.json();
        return (dataRes);
    } catch (error) {
        console.error('Failed to list projects:', error)
        throw new Error('Failed to list projecs')
    }
}

async function CreateProject(token, data) {
    try {
        const url = `${process.env.NEXT_PUBLIC_BACKEND_DOMAIN}/api/project`;
        console.log(url)
        console.log(token, data);
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`

            },
            body: JSON.stringify(data)

        });
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        const dataRes = await response.json();
        return (dataRes);
    } catch (error) {
        console.error('Failed to create project:', error)
        throw new Error('Failed to create project')
    }

}

async function GetProject(token, idProject) {

    console.log(token);
    console.log("----------");
    console.log(idProject);
    const urla = `${process.env.NEXT_PUBLIC_BACKEND_DOMAIN}/api/project/one/${idProject}`;
    console.log(urla);
    try {
        const url = `${process.env.NEXT_PUBLIC_BACKEND_DOMAIN}/api/project/one/${idProject}`;

        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`

            },

        });
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        const dataRes = await response.json();
        return (dataRes);
    } catch (error) {
        console.error(error)
        console.error('Failed to create project:', error)
        throw new Error('Failed to create project')
    }
}
export { ListProjects, CreateProject, GetProject }