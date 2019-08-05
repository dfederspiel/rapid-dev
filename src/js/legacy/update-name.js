
function RadWindowprompt_detectenter(id, ev, input) {
    if (!ev) ev = window.event;
    if (ev.keyCode == 13) {
        var but = input.parentNode.parentNode.getElementsByTagName("A")[0];
        if (but) {
            if (but.click) but.click();
            else if (but.onclick) {
                but.focus(); var click = but.onclick; but.onclick = null; if (click) click.call(but);
            }
        }
        return false;
    }
    else return true;
}

function showStatementWindow() {
    var checked = $('#ctl00_PageBody_OrganizationDetails_StatementPrinting').is(':checked');
    if (checked) {
        $find('ctl00_PageBody_OrganizationDetails_StatementEnabledWindow').show();
    } else {
        $find('ctl00_PageBody_OrganizationDetails_StatementDisabledWindow').show();
    }
}

function closeStatementWindow(theEnabledWindow) {
    var windowid = theEnabledWindow ? 'ctl00_PageBody_OrganizationDetails_StatementEnabledWindow' : 'ctl00_PageBody_OrganizationDetails_StatementDisabledWindow';
    $find(windowid).close();
}

$(function () {
    $("#ctl00_PageBody_OrganizationDetails_ContractNotificationEmail").tagit({
        disableAutocomplete: true,
        singleFieldDelimiter: ', ',
        readOnly: true
    });
});

$(function () {
    $("#ctl00_PageBody_OrganizationDetails_LOCNotificationDetailsControl_EmailTextBox").tagit({
        disableAutocomplete: true,
        singleFieldDelimiter: ', ',
        readOnly: true
    });
});
$(function () {
    $("#ctl00_PageBody_OrganizationDetails_NotificationDetailsControl_EmailTextBox").tagit({
        disableAutocomplete: true,
        singleFieldDelimiter: ', ',
        readOnly: true
    });
});
function isNum(vStr) {
    var i = 0;
    var j = 0;
    var flag = true;
    j = vStr.length;
    // valid number check
    for (i = 0; i < j; i++) {
        var c = vStr.charAt(i);
        if (!(c >= 0 && c <= 9)) {
            flag = false;
            break;
        }
    }
    return flag;
}// function isNum(vStr)

function OnSelecting(sender, eventArgs) {
    LogEvent("On selecting: " + eventArgs.Tab.Text);

    var proceed = confirm("Select '" + eventArgs.Tab.Text + "' tab?");
    if (!proceed) {
        return false;
    }
}

// function that checks if an address has been defined as a Primary address,
// if addresses have been defined
function LiquidatedCheck() {
    var liquidatedDate = document.getElementById('ctl00_PageBody_OrganizationDetails_LiquidatedDateTextBox');
    var liquidatedCheckBox = document.getElementById('ctl00_PageBody_OrganizationDetails_LiquidatedDateTextBox');

    var inactiveDate = document.getElementById('ctl00_PageBody_OrganizationDetails_InactiveDateTextBox');
    var activeChkBox = document.getElementById('ctl00_PageBody_OrganizationDetails_ActiveCheckBox');

    if (liquidatedCheckBox.checked == true) {
        activeChkBox.checked = false;
        activeChkBox.setAttribute('disabled', 'disabled');
        var formattedDate = '7/11/2019';

        liquidatedDate.value = formattedDate;
        inactiveDate.value = formattedDate;
    }
    else {
        activeChkBox.removeAttribute('disabled');
        activeChkBox.checked = true;
        inactiveDate.value = "";
        liquidatedDate.value = "";
    }

}

// Kal: Following funcion would be called when the user clicks the Active Checkbox.
function OnActiveChecked() {
    var activeChkBox = document.getElementById('ctl00_PageBody_OrganizationDetails_ActiveCheckBox');
    var inactiveDate = document.getElementById('ctl00_PageBody_OrganizationDetails_InactiveDateTextBox');
    var syncedInTranZactChkBox = document.getElementById('ctl00_PageBody_OrganizationDetails_SyncedInTranZactCheckBox');

    if (activeChkBox.checked == false) {
        inactiveDate.value = '7/11/2019';
        inactiveDate.text = '7/11/2019';
        syncedInTranZactChkBox.checked = false;
    }
    else {
        inactiveDate.value = "";
        syncedInTranZactChkBox.checked = true;
    }
}

function OnRapportChecked() {
    var activeChkBox = document.getElementById('ctl00_PageBody_OrganizationDetails_RapportOptOut');
    var inactiveDate = document.getElementById('ctl00_PageBody_OrganizationDetails_RapportOptOutDate');

    if (activeChkBox.checked == true) {
        inactiveDate.value = '7/11/2019';
        inactiveDate.text = '7/11/2019';
    }
    else {
        inactiveDate.value = "";
    }
}

function OnMergerComplete() {
    var mergerSelectCtrl = document.getElementById('ctl00_PageBody_OrganizationDetails_MergerStatus2');
    var activeChkBox = document.getElementById('ctl00_PageBody_OrganizationDetails_ActiveCheckBox');
    var liquidatedCheckBox = document.getElementById('ctl00_PageBody_OrganizationDetails_LiquidatedCheckBox');

    if (mergerSelectCtrl.value == "4") // "Merger Complete"
    {
        activeChkBox.setAttribute('disabled', 'disabled');
        liquidatedCheckBox.setAttribute('disabled', 'disabled');

        activeChkBox.checked = false;
        OnActiveChecked();
    }
    else {
        activeChkBox.removeAttribute('disabled');
        liquidatedCheckBox.removeAttribute('disabled');

        LiquidatedCheck();
    }
}

//When name uses a custom validator
function NameValid(source, arguments) {
    if (arguments.Value.length > 0 && arguments.Value.length < 51) {
        arguments.IsValid = true;
    }
    else {
        arguments.IsValid = false;
    }
}

function OnMemberOfacOptInChecked() {
    var ofacOptInChkBox = document.getElementById('ctl00_PageBody_OrganizationDetails_MemberOfacOptIn');
    var ofacScore = document.getElementById('ctl00_PageBody_OrganizationDetails_MemberOfacScore');

    if (ofacOptInChkBox.checked == true) {
        ofacScore.removeAttribute('disabled');
    }
    else {
        ofacScore.value = "";
        ofacScore.setAttribute('disabled', 'disabled');
    }
}
