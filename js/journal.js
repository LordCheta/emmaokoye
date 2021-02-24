let test = document.getElementById('generalList'); // Gets the div inside which data will be rendered;


function renderList(itemsToRender) { // Renders the amount of info giving to the UI
    for (const item of itemsToRender) {
        let template = 
        `<div id="generalList">
            <div class="list">
                <p class="listText">${item.title}</p>
            </div>
        </div>`;
        test.insertAdjacentHTML('afterbegin', template);
    }
};

// Fetch is used to load the static json file contianing relevasnt info
fetch("/js/journals.json")
.then(function (response) {
    return response.json();
})
.then(function(result) {
    let dataArr; // Array to contain the json document for rendering
    dataArr = result.data;
    // console.log(dataArr);
    renderList(dataArr);
});
