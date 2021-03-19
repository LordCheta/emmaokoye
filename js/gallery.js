let test = document.getElementById('galleryList'); // Gets the div inside which data will be rendered;
let pagination = document.getElementById('pagination');
let currentPage = 1; // Global variable keep track of the current page being rendered;
let renderSize = 2; // The number of data to display
let filePath = "./js/gallery.json";


function renderList(dataSet, currentPage, renderSize) { // Renders the amount of info giving to the UI

    let startIndex = (currentPage - 1) * renderSize;
    let endIndex = startIndex + renderSize;
    let itemsToRender = dataSet.slice(startIndex, endIndex);
    // console.log(startIndex, endIndex, );
    for (const item of itemsToRender) {

		let imgSet = "";
		item.imgs.forEach(imgItem => {
			imgSet += `<img src="${imgItem.src}" alt="${imgItem.alt}" width="350" height="350" class="pt-2 px-1">`
		});

        const template = 
        `<div>
			<h4 class="py-3">${item.title}</h4>
			<p>${item.description}</p>
			<div class="text-center mb-4">
				${imgSet}
			</div>
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
