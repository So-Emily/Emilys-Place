
var tooltipTriggerList = 
    [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));

var tooltipList = 
    tooltipTriggerList.map(function (tooltipTriggerEl) {
//        
return new bootstrap.Tooltip(tooltipTriggerEl);
});

topFunction = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// Tech Stack Sccroll
window.onload = function() {
    setTimeout(function() {
        var scrollContainer = document.querySelector('.tab-pane .row');
        if (scrollContainer) {
            console.log('Before reset:', scrollContainer.scrollLeft);
            scrollContainer.scrollLeft = -5;
            console.log('After reset:', scrollContainer.scrollLeft);
            console.log('Container offsetWidth:', scrollContainer.offsetWidth);
            console.log('Container scrollWidth:', scrollContainer.scrollWidth);
        }
    }, 100);
};


console.log("Hello! Thanks for checking out my portfolio! Feel free to reach out to me on any of my socials or through the contact form above. Have a great day! 😊");
    