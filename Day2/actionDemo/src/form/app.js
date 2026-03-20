const pingServer = () =>
    fetch(`http://localhost:3000/ping`)
        .then((r) => r.status)
        .then((status) => {
            if (status === 200) {
                console.log('Server healthy');
                document.getElementById('server_status').innerText = `Healthy`;
            } else {
                console.log(`server not healthy: ${status}`);
                document.getElementById('server_status').innerText = `Not Healthy`;
            }
        })
        .catch((error) => {
            // showServerHealth('error', error);
            console.log(`not healthy: ${error}`);
            document.getElementById('server_status').innerText = `Error: ${error}`;
        });

pingServer()