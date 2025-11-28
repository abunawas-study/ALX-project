// Fetch APIs 



function getBoredActivity(){
    const response = fetch('https://bored-api.appbrewery.com/random')
    .then(response =>{
        if (!response.ok) {
            throw new Error ('Network response was not ok');  
        }
        return response.json();
    })
    .then(data =>{
        console.log('Sucess: ', data);
    });
}
getBoredActivity();

// including async/await and callbacks

function logActivity(activity){
    console.log('Activity received: ', activity);
}
async function getBoredActivity(callback){
    const url = 'https://bored-api.appbrewery.com/random';
    try {
        const response = await fetch(url);
        if (!response.ok){
            throw new Error ('Response not ok');
        }
        const data = response.json();
        callback(data);
    } catch (error) {
        console.error('Error:', error)
    }
}
getBoredActivity(logActivity);