window.onload = function() {
    var navBar = document.querySelector('.navigation-var');
    var navBarOffset = navBar.offsetTop;

    var sections = document.querySelector('.r-section');
    var sectionsOffset = sections.offsetTop;
    
    // Sticky navigation bar
    window.addEventListener('scroll', function() {
        var scrollPosition = window.scrollY;

        if (scrollPosition >= navBarOffset) {
            navBar.classList.add('sticky');
        } else {
            navBar.classList.remove('sticky');
        }

        // var windowHeight = window.innerHeight;
        // window.scrollTo({
        //     top: sectionsOffset,
        //     behavior: 'smooth'
        // });
        // if (scrollPosition >= sectionsOffset) {
            
        // }

    });

};
