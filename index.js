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
    });

    var defualtLetter = document.querySelector('#letter-0');
    var letterList = document.querySelectorAll('.letter-list');
    var letterBoxs = document.querySelectorAll('.letter-1')

    // 각 letter-list 요소에 클릭 이벤트를 추가합니다.
    letterList.forEach(function(item, index) {
        item.addEventListener('click', function() {
            // 모든 letter-list 요소에 active 클래스를 제거합니다.
            letterBoxs.forEach(function(item, index_1) {
                if (index==index_1) {
                    item.classList.remove('letter-hidden');
                    defualtLetter.classList.add('letter-hidden');
                } else {
                    item.classList.add('letter-hidden');
                    defualtLetter.classList.add('letter-hidden');
                }
            });

            this.classList.add('letter-active');
        });
    });
};
