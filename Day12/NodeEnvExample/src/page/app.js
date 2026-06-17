// Typically, a webpage would not ask another API's key but we'll bend that rule here.
const fetchKey = async () => 
    await fetch('http://localhost:3000/key')
        .then(response => response.json())
        .then(data => data.key)
        .catch(e => {
            console.log('Error fetching API Key for display on page.')
        })

const populatePage = async () => {
    const apiKey = await fetchKey();
    console.log(apiKey)
    document.getElementById('print_api_key').innerText = apiKey;
}

populatePage();
