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
function OnDeleteRangeBtn() {
    if (ConfirmRemove('IP Address Range')) {
        __doPostBack("ctl00$PageBody$DeleteRangeBtn", "");
    }
    else {
        return false;
    }
}

function OnCreateBtn() {
    var oWnd = $find("ctl00_PageBody_IPAddressRangeWindow");
    var url = '/Admin/Org/Update/IPLockdownCreateEdit.aspx?params=dJuVgoY77lBueGJiilIItcGIXTLQfygeFrpIBne0vVmGhq6aiooJ75CqS6OP%402H3mlPXvKJo8xfvaEb90g9J5VsfNOA2Y5qTj4SO3qeUNtc%3d';
    oWnd.setUrl(url);
    oWnd.show();
    return false;
}

function OnCloseRadWindow(sender, args) {
    var arg = args.get_argument();
    if (arg && arg.success == true) {
        $('#IPAddressId').val(arg.rangeId);
        $('#IPAddressDescription').val(arg.description);
        $('#IPAddressFrom').val(arg.ipAddressStart);
        $('#IPAddressTo').val(arg.ipAddressEnd);
        $('#Operation').val(arg.operation);
        __doPostBack("ctl00$PageBody$CreateRangeBtn", "");
    }
}

function OnEditBtn(url) {
    var oWnd = $find("ctl00_PageBody_IPAddressRangeWindow");
    oWnd.setUrl(url);
    oWnd.show();
}
