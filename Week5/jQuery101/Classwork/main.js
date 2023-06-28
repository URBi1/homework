const header = $("h1")
console.log(header)

$("h4").css("color", "red")
$("h1").css("color", "blue")
$(".red-div").css("color","red")
$("#brown-div").css("color","brown")
$("ul li:first-child").css("color", "green")
$("ul li:last-child").css("color", "pink");

$("#b1").addClass("box")
$("#b2").addClass("box")

$('#my-input').val("Terrabyte")

const data = $("#yo").data()
console.log("Item with barcode " + data.barcode + " will expire on " + data.expirationdate) 

const blue = $("#blue")

blue.on('mouseenter', () => blue.css("background-color","blue"));
blue.on('mouseleave', () => blue.css("background-color",""));

const button = $("button")
button.click(() => alert($('#my-input2').val()))

const boxx=$(".box1")

boxx.on('mouseenter', function () {
    $(this).css("background-color","blue")});
boxx.on('mouseleave', function () {
    $(this).css("background-color","")});

    
const aDynamicDiv = "<div class='mine'>Oh yes</div>"
const elem = $(aDynamicDiv)
console.log(elem)


$("body").append(elem)

$('.fruits').append('<p class="red">Raspberry</p>')
$('.fruits').append('<p class="brown">Kiwi</p>')


$("body").on("click", ".feedme", function(){
    let divCopy = $(this).clone();
    $("body").append(divCopy);
});


const names = [
    { first: "Alex", last: "Johnson" },
    { first: "Byron", last: "Loveall" },
    { first: "Cassandra", last: "Wuthers" },
    { first: "Deandre", last: "Rahm" },
    { first: "Ellena", last: "Freeman" }
  ]
  
  for (let name of names) {
    $("body").append(`<div class=human>${name.first} - ${name.last}</div>`);
  }

  $("body").on("mouseenter", ".human", function(){
     $(this).remove();
    });


    $("button").on("click", function(){
        $("#blogs").append("<div class='blog'>Cool blog</div>")
      })
      
      $("#blogs").on("click", ".blog", function(){
        $(".blog").text("blargh") 
      })