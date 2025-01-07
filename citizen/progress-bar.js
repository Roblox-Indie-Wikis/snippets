$(function(){
    $('body').append('<div class="citizen-progressbar"></div>') 

    articleHeight = calculateArticleHeight();

    // Helper function to calculate the height of the scrollable content
    function calculateArticleHeight() {
        return document.body.scrollHeight - window.innerHeight;
    }

    // Update the progress bar on scroll
    function updateProgressBar() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const percentage = Math.min(Math.max((scrollTop / articleHeight) * 100, 0), 100);
    $('.citizen-progressbar').css('width', percentage + '%')
    }

    // Update article height on window resize
    function handleResize() {
        articleHeight = calculateArticleHeight();
        updateProgressBar();
    }

    // Event listeners for scroll and resize
    window.addEventListener('scroll', updateProgressBar, { passive: true });
    window.addEventListener('resize', handleResize, { passive: true });

    // Initialize the progress bar
    updateProgressBar();
})
