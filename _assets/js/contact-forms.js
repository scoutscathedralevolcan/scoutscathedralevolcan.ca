var formsubmitsuccess = "<div id=\"main-contact-form-display\" class=\"contact-form-success\"><img src=\"/img/green-check.png\" /> Votre message a été transmit avec succès<div>"

var formsubmitfaillure = "<div id=\"main-contact-form-display\" class=\"contact-form-faillure\"><img src=\"/img/red-x.png\" /> Une erreur est survenue lors de la transmission de votre message <div>"

$('textarea').each(function () {
  this.setAttribute('style', 'height:' + (this.scrollHeight) + 'px;overflow-y:hidden;');
}).on('input', function () {
  this.style.height = 'auto';
  this.style.height = (this.scrollHeight) + 'px';
});

$("#main-contact-form").submit(function(e) {
  e.preventDefault();

  var $form = $(this);
  var $contactformdisplay = $("#main-contact-form-display");
  var validationresult = validateformelements(document.getElementById("main-contact-form"));
  if ( validationresult != ""){
      $contactformdisplay.replaceWith(validationresult);
  } else {
    $.ajax({
        type: 'POST',
        url: $form.attr("action"),
        data: $form.serialize(),
        success: function( data ) {
            document.getElementById("main-contact-form").reset();
            $contactformdisplay.replaceWith(formsubmitsuccess);
        },
        error: function(xhr, status, error) {
            $contactformdisplay.replaceWith(formsubmitfaillure);
        },
        dataType: 'text'
    });
  }
});

function validateformelements (form) {
    var detectederrors = [];
    form.elements["name"].classList.remove("form-input-validation-faillure");
    form.elements["email"].classList.remove("form-input-validation-faillure");
    form.elements["message"].classList.remove("form-input-validation-faillure");
    var filter = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z0-9\.]{2,10})$/;
    
    if (form.elements["name"].value == ""){
        form.elements["name"].classList.add("form-input-validation-faillure");
        detectederrors.push("Le champ prénom et nom doit être rempli");
    }
    
    if (form.elements["email"].value == ""){
        form.elements["email"].classList.add("form-input-validation-faillure");
        detectederrors.push("Le champ courriel doit être rempli");
    } else if (!filter.test(form.elements["email"].value)) {
        form.elements["email"].classList.add("form-input-validation-faillure");
        detectederrors.push("Le format de l'adresse courriel entré est invalide");
    }
    
    if (form.elements["message"].value == ""){
        form.elements["message"].classList.add("form-input-validation-faillure");
        detectederrors.push("Le champ message doit être rempli");
    }
    
    if (detectederrors.length > 0){
        var errormessage = "<div id=\"main-contact-form-display\" class=\"contact-form-faillure\">";
        for (var err in detectederrors) {
            errormessage += "<div><img src=\"/img/red-x.png\" />" + detectederrors[err] + "</div>";
        }
        errormessage += "<div>";
        return errormessage;
    }
    return ""
}
