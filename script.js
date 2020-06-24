function addItem(){
  //Function to recognize when a new item has been added to the list and append it to the end of the list 

  //array to hold the items that are added to the shopping list 
  var arr = ['apples','oranges', 'milk', 'bread' ]

  //variable equal to the length of the array
  let length = arr.length

      //delete entry from array and shopping list
      $('ul').on('click', '.shopping-item-delete', function(event) {
      
      //set variable item equal to the grandparent element of the button clicked
      let item = $(this).parent().parent().find('.shopping-item').text()

      //loop through the array and if the element that has been deleted is in the array, remove that element
      for (let i=0; i < length; i++){
        if(item == arr[i]){
           arr.splice(i,1)
        }
      }
      
      //remove the grandparent of the button that has been clicked
      $(this).parent().parent().remove();
      
      });

  $('#js-shopping-list-form').submit(event => {
    event.preventDefault();


  //save the user input to a variable named userText
  let userText= $(this).find('#shopping-list-entry');

  //variable to hold the counter
  let counter = 0;
  //for loop to check if the user text is already in the array and give a popup if it is
  for (let i=0; i < length; i++){
    
    if(userText.val()== arr[i]){
      alert('Duplicate Entry')
      
      
    }else{
      //if the item isnt in the array already, increase the counter by 1
      counter++
  };

  };
  //if the counter is greater than 1, add the item to the shopping list
  if (counter > 0){
    $('ul').append(
    "<li>" + '<span class="shopping-item">' + userText.val() + "</span>" + '<div class="shopping-item-controls">' + '<button class="shopping-item-toggle">' + '<span class="button-label">check</span>' + '</button>' + '<button class="shopping-item-delete"  style="margin:5px;>' + '<span class="button-label">delete</span>' + '</button>' + '</div>' +  "</li>")
      }

  //add the item to the array
  arr.push(userText.val());

  });
  }


function checkItem(){
  //when the ul has been clicked find the class shopping item toggle
      $('ul').on('click', '.shopping-item-toggle', function(event) {
        const pressedBool = $(this).attr('aria-pressed') === 'true';
        //cross out the grandparent of the element that has been clicked 
      $(this).parent().parent().toggleClass('shopping-item__checked').attr('aria-pressed', !pressedBool);
      
      });
}

//Function to make the page screen reader friendly
function screenReader(){
  $('js-add-item').click(function(event){
    const pressedBool = $(this).attr('aria-pressed') === 'true';
  ('js-add-item').attr('aria-pressed', !pressedBool);
  });
  
}

//run the functions once the page has loaded 
$(addItem);
$(checkItem);
$(screenReader);
