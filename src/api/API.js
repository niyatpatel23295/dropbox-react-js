const api = 'http://localhost:3000'

const headers = {
    'Accept': 'application/json'
};

export const Login = (payload) =>
    fetch(`${api}/users/signin`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    })
    .then(res => {
        return res;
    })
    .catch(error => {
        console.log(error);
        return error;
    });


export const SignUp = (payload) =>
    fetch(`${api}/users/signup`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    })
    .then(res => {
        return res;
    })
    .catch(error => {
        console.log("This is error");
        return error;
    });
