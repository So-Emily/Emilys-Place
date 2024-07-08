
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
