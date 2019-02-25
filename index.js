// ADD SHOPPING LIST ITEM EVENT HANDLER
$(function() {
    // Take user's added items and append them to the shopping list
    $( "#js-shopping-list-form" ).submit( function(event){
        event.preventDefault();
        
        const itemAdded = $("#shopping-list-entry").val();

        $(".shopping-list").append(`<li><span><div class="shopping-item-controls"><button class="shopping-item-toggle"><span class="button-label">check</span></button>
        ${itemAdded}<button class="shopping-item-delete"><span class="button-label">delete</span></button></div></li>`);
        
        // clear the text input field.
        $("#shopping-list-entry").val('');
    });  
});

// CHECK / UNCHECK ITEM EVENT HANDLER
$(function() {
    $( ".shopping-item-toggle" ).click( 'button', function(event) {
        $( "span.shopping-item" ).toggleClass( "shopping-item__checked" );
    });
});

// DELETE ITEM EVENT HANDLER
$(function() {
    $( ".shopping-item-delete" ).click( 'button', 'li', function(event) {
        $( this ).remove();
    });
});


