function OnDelete() {
    var counter = 0;
    var mainForm = theForm;

    if (!mainForm && document.forms[0]) {
        mainForm = document.forms[0];
    }

    var formFieldName = 'chkSelect';
    var isKocBeingDeleted = false;
    for (var i = 0; i < mainForm.elements.length; i++) {
        var formfield = mainForm.elements[i];
        if (formfield.checked && formfield.name.indexOf(formFieldName) > -1) {
            var formfield2 = $(formfield);
            counter++;
            var isKocField = formfield2.siblings('input[name*="isKoc"]');
            if (isKocField && isKocField.val() == "1") {
                isKocBeingDeleted = true;
            }
        }
    }

    if (counter === 0) {
        alert('Please select one or more users to delete.');
        return false;
    } else {
        var msg = 'Are you sure you want to delete ' + counter + ' user(s)?';
        if (isKocBeingDeleted) {
            msg = msg + ' Note: there are organizational contacts among the deleted users.';
        }
        if (confirm(msg)) {
            ShowProcessingPage();
            return true;
        }
        return false;
    }
}