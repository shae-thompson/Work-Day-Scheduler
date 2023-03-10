// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.


$(function () {
    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    
    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    var now = dayjs().format('HH');
    var weekEl = $('#hour-[i]');
    
    //past
    if(now > weekEl) {
        weekEl.css('background-color', '#d3d3d3', 'color', 'white');
        }
    
    //present
    else if(now == weekEl) {
        weekEl.css('background-color', '#ff6961', 'color', 'white');
    }
    //future
    else if (now < weekEl) {
        weekEl.css('background-color', '#77dd77', 'color', 'white');
    };

    //
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    var scheduleInput = document.querySelector('#schedule-input');
    var save_button = document.querySelector('#button');
    
    save_button.addEventListener('click', updateOutput);
    
    scheduleInput.value = localStorage.getItem('content');
    
    function updateOutput() {
        localStorage.setItem('content', scheduleInput.value);
    };
    })
    //
    // TODO: Add code to display the current date in the header of the page/
    var time = dayjs().format('dddd, MMMM DD');
    $('#currentDay').text(time + 'th');
    
