//Features div 
const empty = document.getElementById('scrolls-one');
const emptyOne = document.getElementById('none');
const emptyTwo = document.getElementById('none-one');

//Texts in the features section
const defaultText = document.getElementById('one');
const firstText = document.getElementById('two');
const secondText = document.getElementById('three');

//smooth scrolling
const links = document.querySelectorAll(".nav-list a");

for (const link of links) {
    link.addEventListener('click', smoothScroll);
}

function smoothScroll(e) {
    // console.log('scroll')
    e.preventDefault();
    const href = this.getAttribute("href");

    document.querySelector(href).scrollIntoView({
        behavior: "smooth"
    });
}

//Simple Bookmarking
defaultText.addEventListener('click', () => {
     empty.style.display = 'flex'; // default feature picture display
     emptyOne.style.display = 'none'; // second feature picture display
     emptyTwo.style.display = 'none';  // third feature picture display
     defaultText.style.borderBottom = '3px solid #E71D36'; //Simple Bookmarking style
     firstText.style.borderBottom = '2px solid grey'; //Speedy Searching style
     secondText.style.borderBottom = '2px solid grey'; //Easy Sharing style
    
});

//Speedy Searching
firstText.addEventListener('click', () => {
     empty.style.display = 'none'; // default feature picture display
     emptyOne.style.display = 'flex'; // second feature picture display
     emptyTwo.style.display = 'none'; // third feature picture display
     defaultText.style.borderBottom = '2px solid grey'; //Simple Bookmarking style
     firstText.style.borderBottom = '3px solid #E71D36'; //Speedy Searching style
     secondText.style.borderBottom = '2px solid grey'; //Easy Sharing style
     
});

//Easy Sharing
secondText.addEventListener('click', () => {
     empty.style.display = 'none'; // default feature picture display
     emptyOne.style.display = 'none'; // second feature picture display
     emptyTwo.style.display = 'flex'; // third feature picture display
     defaultText.style.borderBottom = '2px solid grey'; //Simple Bookmarking style
     firstText.style.borderBottom = '2px solid grey'; //Speedy Searching style
     secondText.style.borderBottom = '3px solid #E71D36'; ////Easy Sharing style
     
});

//FAQ'S Tnformation and images
const firstDiv = document.getElementById("one-info"); // first FAQ question
const secondDiv = document.getElementById("two-info"); // second FAQ question
const thirdDiv = document.getElementById("three-info"); // third FAQ question
const fourthDiv = document.getElementById("four-info"); // fourth FAQ question

//four-info's header tag/the last FAQ header
const header = document.getElementById("four"); // h4 tag id name

//down arrow in each of the FAQ'S
const firstArrow = document.getElementById("arrow-one"); // first down arrow
const secondArrow = document.getElementById("arrow-two"); // second down arrow
const thirdArrow = document.getElementById("arrow-three"); // third down arrow
const fourthArrow = document.getElementById("arrow-four"); // fourth down arrow

//up arrow in each of the FAQ'S
const firstSubArrow = document.getElementById("up"); // first up arrow
const secondSubArrow = document.getElementById("up-two"); // second up arrow
const thirdSubArrow = document.getElementById("up-three"); // third up arrow
const fourthSubArrow = document.getElementById("up-four"); // fourth up arrow


let coll = document.getElementsByClassName("collapsible");
let i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
      // this.classList.toggle("active");
      let content = this.nextElementSibling;
      if (content.style.display === "block") {
        content.style.display = "none";
      } else {
        content.style.display = "block";
      }
    });
  }

let collOne = document.getElementsByClassName("collapsible-four");
let e;
 
for (e = 0; e < collOne.length; e++) {
    collOne[e].addEventListener("click", function() {
      // this.classList.toggle("active");
      let contentOne = this.nextElementSibling;
      if (contentOne.style.display === "block") {
        contentOne.style.display = "none";
      } else {
        contentOne.style.display = "block";
      };
    });
  }



  function openNav() {
    document.getElementById("overlay").style.width = "100%";

}
  function closeNav() {
    document.getElementById("overlay").style.width = "";

}
//   function toggleNav() {
//     var navList = document.getElementById("nav-list");
//     if (navList.style.display !== 'flex') {
//         navList.style.display = 'flex'
//     } else {
//         navList.style.display = ''
//     }
// }
//firstDiv
// firstArrow.addEventListener('click', () => {
//     //creation of the p tag 
//     const messageOne = document.createElement('p'); // p tag creation
//     messageOne.classList.add('message-one'); // p tag class name creation
//     // p tag text creation
//     messageOne.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.";
//     //adding the p tag to the firstdiv
//     firstDiv.appendChild(messageOne);

//     //displaying the arrows and other features
//     messageOne.style.display = "block"; // p tag display style
//     secondDiv.style.marginTop = "50px"; //second FAQ style
//     firstArrow.style.display = 'none'; // down arrow style
//     firstSubArrow.style.display = 'block'; // up arrow style
//     firstSubArrow.style.left = "8rem";   // up arrow style to the left
    
//     //up arrow's behaviour
//     firstSubArrow.addEventListener('click', () => {
//         messageOne.style.display = 'none'; // p tag display style
//         firstArrow.style.display = 'block'; // down arrow style
//         firstSubArrow.style.display = 'none'; // up arrow style
//         secondDiv.style.marginTop = "0"; //second FAQ style marginTop
//     });
//  });


// //secondDiv
// secondArrow.addEventListener('click', () => {
//       //creation of the p tag 
//     const messageTwo = document.createElement('p'); // p tag creation
//     messageTwo.classList.add('message-two'); // p tag class name creation

//     // p tag text creation
//     messageTwo.innerHTML = "Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.";
//    //adding the p tag to the seconddiv
//     secondDiv.appendChild(messageTwo);


//     //displaying the arrows and other features
//     messageTwo.style.display = "block"; // p tag display style
//     thirdDiv.style.marginTop = '115px'; //thirddiv FAQ style
//     secondArrow.style.display = 'none';  // down arrow style
//    secondSubArrow.style.display = 'block'; // up arrow style
//    secondSubArrow.style.left = "4.6rem";  // up arrow style to the left

//    //up arrow's behavior
//    secondSubArrow.addEventListener('click', () => {
//         messageTwo.style.display = 'none';  // p tag display style
//         thirdDiv.style.marginTop = ""; //thirddiv FAQ style marginTop
//         secondArrow.style.display = 'block'; // down arrow style
//        secondSubArrow.style.display = 'none'; // up arrow display style
//     });
//  });

//  // thirdDiv
// thirdArrow.addEventListener('click', () => {
//      //creation of the p tag 
//     const messageThree = document.createElement('p'); // p tag creation
//     messageThree.classList.add('message-three'); // p tag class name creation

//     // p tag text creation
//     messageThree.innerHTML = " Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed sollicitudin ex et ultricies bibendum.";
//     //adding the p tag to the thirddiv
//     thirdDiv.appendChild(messageThree);

//     //displaying the arrows and other features
//     messageThree.style.display = "block"; // p tag display style
//     // fourthDiv.style.padding = '48px 0';
//     fourthDiv.style.marginTop = '80px'; //fourthdiv FAQ style
//     thirdArrow.style.display = 'none'; // down arrow style
//     thirdSubArrow.style.display = 'block'; // up arrow style
//     thirdSubArrow.style.left = "7.5rem"; // up arrow style to the left

//     // up arrow's behaviour
//     thirdSubArrow.addEventListener('click', () => {
//         // messageTwo.style.display = 'none'; // p tag display style
//         messageThree.style.display = 'none'; // p tag display style
//         thirdDiv.style.marginTop = "0";  //thirddiv FAQ style marginTop
//         thirdArrow.style.display = 'block'; // down arrow style
//         thirdSubArrow.style.display = 'none'; // up arrow display style
//         fourthDiv.style.marginTop = ''; //fourthdiv FAQ style marginTop
//     });
//  });

// //fourthDiv
// fourthArrow.addEventListener('click', () => {
//      //creation of the p tag 
//     const messageFour = document.createElement('p'); // p tag creation
//     messageFour.classList.add('message-four'); // p tag class name creation
//     // p tag text creation
//     messageFour.innerHTML = "Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam vitae neque eget nisl gravida pellentesque non ut velit.";
//     //adding the p tag to the fourthDiv
//     fourthDiv.appendChild(messageFour);

//     //displaying the arrows and other features
//     messageFour.style.display = "block"; // p tag display style
//     fourthDiv.style.padding = '48px 60px'; // p tag padding style
//     header.style.bottom = '35px'; // h4 tag bottom style
//     fourthArrow.style.bottom = '35px'; // down arrow style
//     fourthArrow.style.display = 'none'; // down arrow style
//     fourthSubArrow.style.display = 'block'; // up arrow display style
//     fourthSubArrow.style.left = "3.6rem"; // up arrow display style to the left
//     fourthSubArrow.style.bottom = '35px'; // up arrow display style to bottom

//     //up arrow's behaviour
//     fourthSubArrow.addEventListener('click', () => {
//         messageFour.style.display = 'none'; // p tag display style
//         fourthDiv.style.padding = ""; // p tag padding style
//         header.style.bottom = ''; // h4 tag bottom style
//         fourthArrow.style.bottom = ''; // down arrow display style to the bottom
//         fourthArrow.style.display = 'block'; // down arrow display style
//         fourthSubArrow.style.display = 'none'; // up arrow display style 
//     });
//  });
// function addText(text) {
//     const item = text.target;
//     if (item.classList[0] === "arrow-one") {
//         const arrow = item.parentElement;
//         arrow.classList.add
//     }

 
// }