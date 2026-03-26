const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());

const paramsContainer = document.getElementById("params_container");
console.log(params);

// checkbox may come in undefined

// talk to student about this......
if (!0) {
    console.log("meep");
}

for (let param in params) {
    if (param.includes('submit_field') || param.includes('image_field') ) {
        // The submit button IS added to the submission itself. Simply
        // looping over every query param may not be the best idea so
        // let's return early (do nothing via "continue") if we find the submit_field
        // or the image_field since it's functionally the same
        continue;
    }
    
    const p = document.createElement('p');
    const form_field = param.replaceAll('_', ' ');
    
    if (params[param] === '') { // empty string 
        p.innerHTML = `<span>${form_field}</span>: <span class='none_supplied'>NONE SUPPLIED</span>`;
    } else {
        p.innerHTML = `<span>${form_field}</span>: ${params[param]}`;
    }

    paramsContainer.appendChild(p);
}
