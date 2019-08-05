function onToolbarButtonClicked(sender, args) {
    if (args.get_item().get_commandName() != 'Print') return;

    var href = '/Eservices/DomesticWire/DomesticWireOutPrint.aspx?params=ossBK%2fF0W6tOBhIKSQDDonb0GSe%2fhN0oYWqCresXuks%3d';
    global_OpenWindow(href, '_blank', 800, 750);
}

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

function onUpdateStatusBtn() {
    var url = '/Eservices/TransactionStatusUpdate.aspx?params=7tspUqrfw26ZPHX4Vz5Cb1N72rmAgeamF%2fgUeaVeAa5nVzsj23Fx%407y8G9LOisqqj%2fKP0DxCGiFa1ZI%40ABXzgw%3d%3d';
    var oWnd = $find("ctl00_PageBody_TransactionDetails_EditWindow");
    oWnd.setUrl(url);
    oWnd.show();
}

function OnCloseRadWindow(sender, args) {
    var arg = args.get_argument();
    if (arg && arg.success == true && arg.sender == 'statusupdate') {
        __doPostBack("ctl00$PageBody$TransactionDetails$UpdateStatusBtn", "");
    }
}

function onCancel() {
    return confirm('Are you sure you want to cancel this transaction?');
}

function onHold() {
    return confirm('This will put a freeze on these funds. Continue?');
}