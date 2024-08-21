'use server'
async function ListClients(token) {
    //console.log(data)
    try {
        const url = `${process.env.NEXT_PUBLIC_BACKEND_DOMAIN}/api/client`;

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
        console.error('Failed to list client:', error)
        throw new Error('Failed to list client')
    }
}

async function CreateClient(token, data) {
    try {
        const url = `${process.env.NEXT_PUBLIC_BACKEND_DOMAIN}/api/client`;
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
        console.error('Failed to create client:', error)
        throw new Error('Failed to create client')
    }

}

async function GetClient(token, idClient) {
    try {
        const url = `${process.env.NEXT_PUBLIC_BACKEND_DOMAIN}/api/client/${idClient}`;

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
        console.error('Failed to create client:', error)
        throw new Error('Failed to create client')
    }
}
export { ListClients, CreateClient, GetClient }