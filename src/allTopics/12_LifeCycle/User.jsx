import { useEffect } from "react";

const User = () => {

    useEffect(() => {
        const controller = new AbortController();

        async function getUsers() {
            try {
                let resp = await fetch('https://dummyjson.com/users', {
                    signal: controller.signal,
                });

                let data = await resp.json();
                console.log(data);

            } catch (error) {
                console.log(error);
            }
        }

        getUsers();

        return () => {
            controller.abort();
        };
    }, []);

    return (
        <div>
            <h1>Users</h1>
        </div>
    );
};

export default User;



/**
 * @using AbortController()
 * it basically help us to kill the api call even after we call the api.
 * we passed this in return function to acts with cleanup function.
 */