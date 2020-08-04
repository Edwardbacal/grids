// accordion function: listen for a click on each titleHeading class, set a slideToggle on its respective textDisplay div.
$(".titleHeadings").on("click", function () {
    $(this).next('div').slideToggle();
    $(this).children("#arrow").toggleClass("rotate");
    $('.note').empty();
});

// toggle hamburger menu on click (horizontal)
$(".ham").on("click", function () {
    $(".hamMenu").toggleClass("navDisplay");
    $("h1").toggle();
});

// Move image below the title at mediaQuery shift (achieved with thanks to this article https://www.fourfront.us/blog/jquery-window-width-and-media-queries/)
$(window).resize(function () {
    if ($(window).width() <= 579) {
        $(".cover").insertAfter(".titleInfo");
    } else {
        $(".cover").insertBefore(".titleInfo");
    }
});

// Object that stores footnotes
const cite = {
    "1": '❶ Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum assumenda qui deleniti autem vel consequatur.',
    "2": '❷ Ipsum lorem, dolor sit amet consectetur adipisicing elit. Illum assumenda qui deleniti autem vel consequatur.',
    "3": '❸ Dolor sit amet consectetur adipisicing elit. Illum assumenda qui deleniti autem vel consequatur.',
};


// Display footnote on click

$(".footnote").on("click", function () {
    const number = $(this).attr("id");
    $('.note').empty();
    $('.note').show();
    for (let footnote in cite) {
        if  (number === footnote) {
        $('.note').append("<p>" + (cite[footnote]) + "</p>");
        } 
    }
});


// increase and decrease the font size by clicking on buttons - adapted from the following example: http://jsfiddle.net/5G6W6/1/

$(".plus").click(function () {
    let fontSize = parseInt($('p').css("font-size"));
    fontSize = fontSize + 1 + "px";
    $('p').css({ 'font-size': fontSize });
});

$(".minus").click(function () {
    let fontSize = parseInt($('p').css("font-size"));
    fontSize = fontSize - 1 + "px";
    $('p').css({ 'font-size': fontSize });
});





// >>> Unused effects (I'm keeping these here for personal reference)


// toggle hamburger menu via hover (NB I am keeping this off)
// $("nav").hover(function () {
//     $(".hamMenu").toggleClass("navDisplay");
//     $("h1").toggle();
// })



// part of a highlighting stretch goal; code didn't work, leaving it here for reference:

// $(".highlight").click(function () {    
//     let selected = document.getSelection().toString();
//     let highlighted = ($(this).css("background-color"));
//     highlighted = "yellow";
//     $(selected).css({'background-color': "red" });
//     console.log(selected);
// });


/* The following works as a shortcut to plug a set of li's into each ul, rather than pasting the same thing many separate times. 

    $(".buttons").append(`
        <li>
            <i class="fas fa-search-minus minus"></i>
        </li>
        <li>
            <i class="fas fa-search-plus plus"></i>
        </li>
        <li>
            <i class="fas fa-file-alt"></i>
        </li>
        <li>
            <i class="fas fa-highlighter"></i>
        </li>`)
    */

// Basis for a citation generator I didn't get around to:

/*
const chicago = function (firstName, lastName, essay, book) {
    console.log(`${lastName}, ${firstName}. “${essay}” in ${book}.`);
}

const authors = [
    { first: 'Harriet', last: 'Bevilacqua', essay: 'Introduction: Thinking the Idea of Thought' },
    { first: 'Werner', last: 'Schweppes', essay: "Baby Bulldogs" },
    { first: 'Adam', last: 'Pisces', essay: "Frenchies" },
];

const chicagoManual = authors.map((value) => {
    return (`${value.last}, ${value.first}.  ${essay}.  In "Toward the Idea of a Thought"`);
});

*/
