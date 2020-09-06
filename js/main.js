window.addEventListener('scroll', function(){
    let docHeight = window.pageYOffset;
    let navBar = document.getElementById('myNavbar');
    if(docHeight > 300){
        navBar.style.backgroundColor = '#fff';
    }else{
        navBar.style.backgroundColor = 'transparent';
    }
})
