
const share = document.querySelector('.share');
const showIcons = document.querySelector('.share-icons')
const shareClose = document.querySelector('.shareClose')

console.log(share)
console.log(showIcons)
console.log(shareClose)

share.addEventListener('click', (e) => {
    showIcons.style.display = 'flex';
    share.style.display = 'none' ;
})

shareClose.addEventListener('click', (e) => {
    showIcons.style.display = 'none';
    share.style.display = 'flex' ;   
})