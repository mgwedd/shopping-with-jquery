$(function() {
    $( "#js-shopping-list-form" ).submit( function(event){
        event.preventDefault();
        
        const itemAdded = $("#shopping-list-entry").val();

        $(".shopping-list").append(
            `<li>
            <span class="shopping-item">${itemAdded}</span>
            <div class="shopping-item-controls">
              <button class="shopping-item-toggle">
                <span class="button-label">check</span>
              </button>
              <button class="shopping-item-delete">
                <span class="button-label">delete</span>
              </button>
            </div>
          </li>`);
        
        $("#shopping-list-entry").val('');
    });  

    $( ".shopping-item-toggle" ).click( 'button', function(event) {
        event.preventDefault();
        $( this ).closest("li").find(".shopping-item").toggleClass( "shopping-item__checked" );
    });

    $( ".shopping-item-delete" ).click( 'button', function(event) {
        event.preventDefault();
        $( this ).parent().closest("li").remove();
    });
});