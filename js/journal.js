let test = document.getElementById('generalList'); // Gets the div inside which data will be rendered;
let pagination = document.getElementById('pagination');
let currentPage = 1; // Global variable keep track of the current page being rendered;
let renderSize = 1; // The number of data to display


function renderList(dataSet, currentPage, renderSize) { // Renders the amount of info giving to the UI

    let startIndex = (currentPage - 1) * renderSize;
    let endIndex = startIndex + renderSize;
    let itemsToRender = dataSet.slice(startIndex, endIndex);
    // console.log(startIndex, endIndex, );
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

function renderPagination(dataSize, activePage, displaySize) {
    let noOfPages = Math.ceil(dataSize / displaySize);
    let index = 0;
    for (index; index < noOfPages; index++) {
        let pageNumber = index + 1;
        let template;
        if(activePage == pageNumber) {
            template = `<li class="page-item active"><a class="page-link" href="javascript:void(0);">${pageNumber}</a></li>`;
        } else {
            template = `<li class="page-item"><a class="page-link" href="javascript:void(0);">${pageNumber}</a></li>`;

        }
        pagination.insertAdjacentHTML('beforeend', template);
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
    renderPagination(dataArr.length, currentPage, renderSize);
    renderList(dataArr, currentPage, renderSize);
});
