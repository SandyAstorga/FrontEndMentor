//Theme switch
const themeBtn = document.getElementById('theme-btn')
const themeIcon = document.getElementById('theme-icon')
const currentTheme = localStorage.getItem('theme')

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme)

    if (currentTheme === 'dark') {
        themeIcon.src = '/assets/images/icon-sun.svg'
        themeIcon.alt = 'sun'
    } else {
        themeIcon.src = '/assets/images/icon-moon.svg'
        themeIcon.alt = 'moon'
    }
}

themeBtn.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme')
    // alert(currentTheme)

    if (currentTheme === 'dark') {
        document.documentElement.removeAttribute('data-theme')
        themeIcon.src = '/assets/images/icon-moon.svg'
        themeIcon.alt = 'moon'
        localStorage.setItem('theme', 'light')
    } else {
        document.documentElement.setAttribute('data-theme', 'dark')
        themeIcon.src = '/assets/images/icon-sun.svg'
        themeIcon.alt = 'sun'
        localStorage.setItem('theme', 'dark')
    }
})

//Extensions Grid
const extensionsGrid = document.getElementById('extensions-grid')
const filterBtnsContainer = document.getElementById('filter-btns')
const filterBtns = document.querySelectorAll('.filter-btn')
let extensionsData = []
let currentFilter = 'all'

// Function for read JSON
async function readJSON() {
    try {
        const response = await fetch('data.json');
        if (!response.ok) throw new Error('Error data');

        const data = await response.json();
        // console.log(data);
        extensionsData = data
        applyFilter(currentFilter)

    } catch (error) {
        console.error('No data', error);
    }
}

// Function data
function getData(extensions) {
    extensionsGrid.innerHTML = ''

    extensions.forEach((extension) => {
        const item = document.createElement('div');
        item.classList.add('item', 'col-lg-4', 'col-sm-6');
        item.dataset.name = extension.name;

        item.innerHTML = `
        <div class='card'>
        <div style='display: flex; align-items: flex-start;'>
            <img src=${extension.logo} alt="${extension.name}">
            <div>
                <h2 style='padding-left: 1rem;'>${extension.name}</h2>
                <p style='line-height: normal; padding-left: 1rem;}'>${extension.description}</p> 
            </div>
        </div>
            <div style='display: flex; justify-content: space-between; width: 100%; align-items: center'>
                <button class="remove-btn">Remove</button>
                    <div class="toggle-switch">
                    <input class="toggle-input"
                    id = "toggle-${extension.name}"
                    type = "checkbox"
                    ${extension.isActive ? 'checked' : ''}>
                    <label class="toggle-label" for="toggle-${extension.name}"></label>
                    </div>
            </div>
        </div>
    `;

        extensionsGrid.appendChild(item)

    })
}

function applyFilter(filter) {
    currentFilter = filter

    filterBtns.forEach(btn => {
        btn.classList.toggle('active', btn.id == filter)
    })

    let filteredData
    switch (filter) {
        case 'all':
            filteredData = extensionsData
            break
        case 'active':
            filteredData = extensionsData.filter(ext => ext.isActive)
            break
        case 'inactive':
            filteredData = extensionsData.filter(ext => !ext.isActive)
            break
    }

    getData(filteredData)
}


//Event handlers
filterBtnsContainer.addEventListener('click', handleFilterClick)

extensionsGrid.addEventListener('click', handleGridClick)
extensionsGrid.addEventListener('change', handleToggle)

function handleFilterClick(e) {
    if (e.target.classList.contains('filter-btn')) {
        applyFilter(e.target.id)
    }
}

function handleGridClick(e) {
    if (e.target.classList.contains('remove-btn')) {
        const item = e.target.closest('.item')
        const name = item.dataset.name
        extensionsData = extensionsData.filter(ext => ext.name !== name)
        applyFilter(currentFilter)
    }
}

function handleToggle(e) {
    if (e.target.classList.contains('toggle-input')) {
        const item = e.target.closest('.item')
        const name = item.dataset.name

        const extension = extensionsData.find(ext => ext.name === name)
        if (extension) {
            extension.isActive = e.target.checked
        }
    }
}
readJSON()

