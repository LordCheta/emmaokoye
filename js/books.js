let test = document.getElementById('generalList'); // Gets the div inside which data will be rendered;
let pagination = document.getElementById('pagination');
let currentPage = 1; // Global variable keep track of the current page being rendered;
let renderSize = 5; // The number of data to display
let filePath = "./js/books.json";


function renderList(dataSet, currentPage, renderSize) { // Renders the amount of info giving to the UI

    let startIndex = (currentPage - 1) * renderSize;
    let endIndex = startIndex + renderSize;
    let itemsToRender = dataSet.slice(startIndex, endIndex);
    // console.log(startIndex, endIndex, );
    for (const item of itemsToRender) {
        let template = 
        `<div class="list">
            <p class="listText">${item.title}</p>
        </div>
        `;
        test.insertAdjacentHTML('beforeend', template);
    }
};

function renderPagination(dataSize, activePage, displaySize) {
    let noOfPages = Math.ceil(dataSize / displaySize);
    let index = 0;
    for (index; index < noOfPages; index++) {
        let pageNumber = index + 1;
        let template;
        if(activePage == pageNumber) {
            template = `<li class="page-item active"><a onclick="displayPage(this)" class="page-link" href="javascript:void(0);">${pageNumber}</a></li>`;
        } else {
            template = `<li class="page-item"><a onclick="displayPage(this)" class="page-link" href="javascript:void(0);">${pageNumber}</a></li>`;

        }
        pagination.insertAdjacentHTML('beforeend', template);
    }
};

function displayPage(x) {
    // Empty current elments in displays
    test.innerHTML = "";
    pagination.innerHTML = "";

    // update global variables
    currentPage = x.text;

    // render current data
    // This is pure hackery
    fetch(filePath)
        .then(function (response) {
            return response.json();
        })
        .then(function(result) {
            let dataArr; // Array to contain the json document for rendering
            dataArr = result.data;
            // console.log(dataArr);
            renderPagination(dataArr.length, currentPage, renderSize);
            renderList(dataArr, currentPage, renderSize);
        });
}

// Fetch is used to load the static json file contianing relevasnt info
fetch(filePath)
.then(function (response) {
    return response.json();
})
.then(function(result) {
    let dataArr; // Array to contain the json document for rendering
    dataArr = result.data;
    // console.log(dataArr);
    renderPagination(dataArr.length, currentPage, renderSize);
    renderList(dataArr, currentPage, renderSize);
});
