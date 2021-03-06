const { useEffect } = require("react");
const { useState } = require("react")

const useToken = user => {
    const [token, setToken] = useState('');

    useEffect(() => {
        const email = user?.user?.email;
        const currentUser = { email: email };
        if (email) {
            fetch(`https://secret-wave-92614.herokuapp.com/user/${email}`, {

                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(currentUser)
            })
                .then(res => res.json())
                .then(data => {
                    console.log('data insdie token', data);
                    const accessToken = data.token;
                    localStorage.setItem('accessToken', accessToken);

                    setToken(accessToken)
                })
        }


    }, [user]);
    return [token]
}
export default useToken;