const httpGet = (url, callback) => {
    const request = new XMLHttpRequest();
    request.open('GET', url , true);

    request.onload = () => {
    if (request.status >= 200 && request.status < 400) {
        // Success!
        callback(request.responseText);
    } else {
        // We reached our target server, but it returned an error
        console.log('server error');
    }
    };

    request.onerror = () => {
    // There was a connection error of some sort
        console.log('connection error');
    };

    request.send();
};

setInterval(() => {
    httpGet('/lists', (res) =>{
        const divLists = document.querySelector('#lists');
        divLists.innerHTML = '';
        const lists = JSON.parse(res);

        Object.keys(lists).reverse().forEach((key) => {
            divLists.innerHTML += `
                <div class="listItems">
                    <p>${lists[key].list}</p>
                </div>
                <hr>
            `;
        })
    });
}, 100);  