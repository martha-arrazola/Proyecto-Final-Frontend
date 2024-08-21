'use server'
async function ListDeliveryNote(token) {
    //console.log(data)
    try {
        const url = `${process.env.NEXT_PUBLIC_BACKEND_DOMAIN}/api/deliverynote`;

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
        console.error('Failed to list delivery notes:', error)
        throw new Error('Failed to list delivery notes')
    }
}

async function CreateDeliveryNote(token, data) {
    try {
        const url = `${process.env.NEXT_PUBLIC_BACKEND_DOMAIN}/api/deliverynote`;
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
        console.error('Failed to create delivery note:', error)
        throw new Error('Failed to create delivery note')
    }

}

async function GetDeliveryNote(token, idDeliveryNote) {

    console.log(`${process.env.NEXT_PUBLIC_BACKEND_DOMAIN}/api/deliverynote/${idDeliveryNote}`
    );
    try {
        const url = `${process.env.NEXT_PUBLIC_BACKEND_DOMAIN}/api/deliverynote/${idDeliveryNote}`;
        console.log(url);
        console.log("----");
        console.log(token);
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
        console.log(error);
        // console.error('Failed to create delivery note:', error)
        throw new Error('Failed to create delivery note')
    }
}
export { ListDeliveryNote, CreateDeliveryNote, GetDeliveryNote }