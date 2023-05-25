//const photo = document.getElementById('photo');
const ig = document.getElementById('ig');

function readURL(photo) {
    if (photo.files && photo.files[0]) {
        var reader = new FileReader();

        reader.onload = function(e) {
            //document.getElementById('ig').src = e.target.result;
            ig.src = e.target.result;
        };
        reader.readAsDataURL(photo.files[0]);
    }
}