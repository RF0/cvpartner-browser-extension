
document.addEventListener('click', function(evt) {
    console.log(evt.target.tagName);
    console.log(evt.target.classList);
}, false);

editing_own_cv = document.getElementsByClassName('modal_cv editing own_cv');
console.log("Editing own CV..: " + editing_own_cv.length);

/*const triggerElement = document.querySelector('div.toggle_international');

triggerElement.addEventListener('click', toggleInternationalClickHandler);
function toggleInternationalClickHandler() {
    const missing_translations = document.getElementsByClassName('missing_translation_wrapper tooltip_wrapper');
    console.log(missing_translations.length + " skills are missing translations");
}
*/

if (editing_own_cv.length > 0) {
    console.log("Editing own CV...: " + editing_own_cv.length);
    const missing_translations = document.getElementsByClassName('missing_translation_wrapper tooltip_wrapper');
    console.log(missing_translations.length + " skills are missing translations...");
}

