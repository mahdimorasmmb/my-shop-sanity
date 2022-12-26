export async function fetchPostJSON(url: string, data?: object) {
    try {
        const response = await fetch(url, {
            method: "POST",
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                "Content-Type": "application/json"
            },
            redirect: 'follow',
            referrerPolicy: 'no-referrer',
            body: JSON.stringify(data || {}),
        })

        return await response.json();
    } catch (error) {
        if (error instanceof Error) {
            throw Error(error.message)
        }
        throw error;
    }

}