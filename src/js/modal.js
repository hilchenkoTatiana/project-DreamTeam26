(function() {
    const mobileMenu = document.querySelector('.mobile-menu');
    const hamburger = document.querySelector('#hamburger');

    //Open menu
    hamburger.addEventListener('click', () => {
        mobileMenu.classList.add('active');
    });

    //Close menu
    mobileMenu.addEventListener('click', function(e) {
        const isCloseBtn = e.target.closest('#mobile-close-button');
        const isLink = e.target.tagName === 'A';

        if (isCloseBtn || isLink) {            
            mobileMenu.classList.remove('active');
        }
    });
})();