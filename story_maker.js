function makeStory() {
    // comment out the line below once you're sure this page is properly connected
    // to your HTML file.


    // get form values
    var noun1 = document.getElementById('noun1').value;
    var noun2 = document.getElementById('noun2').value;
    var noun3 = document.getElementById('noun3').value;
    var noun4 = document.getElementById('noun4').value;
    var noun5 = document.getElementById('noun5').value;
    var noun6 = document.getElementById('noun6').value;
    var noun7 = document.getElementById('noun7').value;
    var noun8 = document.getElementById('noun8').value;
    var verb1 = document.getElementById('verb1').value;
    var verb2 = document.getElementById('verb2').value;
    var verb3 = document.getElementById('verb3').value;
    var verb4 = document.getElementById('verb4').value;
    var verb5 = document.getElementById('verb5').value;

    // Set title of story.
    var title = noun1;


    // Build story.
    var paragraph1 = "Once apon a time there was a " + noun1 + " and he liked to " + verb1 + " but one day he was "+ verb2 + " by " + noun2 + "." + " So he set of on a journey to recover his " + noun1 + "." + " first he had to get a " + noun3 + "so he can " + verb3 + "." ;

    var paragraph2 = " To get his " + noun3 + " he must " + verb4 + " infront of " + noun4 + " while he " + verb5 + "." + " However the path was bocked by " + noun5 + "." + " to destroy " + noun5 + " he must use " + noun6;

    var paragraph3 = "After " + noun7 + " time passed. " + " he set off to get his " + noun1 + "." + " Howerver hitting the " + noun6 + " with " + noun7 + " it turned into " + noun8 + ". That he was able use to defeat" + noun2;


    // Display story.
    document.getElementById('one').innerHTML = paragraph1;

    document.getElementById('two').innerHTML = paragraph2;
    
    document.getElementById('three').innerHTML = paragraph3;
}
