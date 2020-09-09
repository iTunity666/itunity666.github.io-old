var text = ["$", " $", "i $", "iT $", "iTu $", "iTun $", "iTuni $", "iTunit $", "iTunity $","iTunit $","iTuni $", "iTun $", "iTu $", "iT $", "i $",];
var counter = 0;
var inst = setInterval(change, 700);

function change() {
    document.title = text[counter];
    counter++;
    if (counter >= text.length) {
        counter = 0;
    }
}
