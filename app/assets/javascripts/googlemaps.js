//Google Maps

var ready;

ready = function(){

  //var googleKey = "AIzaSyDG-I4LxfH9WUGpEN3XdlByMoRHz-AZzJA";

  // This example displays an address form, using the autocomplete feature
  // of the Google Places API to help users fill in the information.

  var placeSearch, autocomplete;
  // Create the autocomplete object, restricting the search to geographical
  // location types.

  autocomplete = new google.maps.places.Autocomplete(
      /** @type {!HTMLInputElement} */(document.getElementById('autocompleteGoogle')),
      {types: ['geocode']});

  // When the user selects an address from the dropdown, populate the address
  // fields in the form.
  autocomplete.addListener('place_changed', fillInGeolocation);

  // [START region_fillform]
  function fillInGeolocation() {
    // Get the place details from the autocomplete object.
    var place = autocomplete.getPlace();
    $("#searchResultsGoogle").empty().append('Result: ' + place.name + ' (Latitude: ' + place.geometry.location.lat() + ' Longitude: ' + place.geometry.location.lng() + ')');
    $("#addressLatitudeGoogle").val(place.geometry.location.lat);
    $("#addressLongitudeGoogle").val(place.geometry.location.lng);
    $("#saveResultGoogle").show();
  }
  // [END region_fillform]

};

$(document).ready(ready);
$(document).on('page:load', ready);

