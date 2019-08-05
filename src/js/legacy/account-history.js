function OnCloseRadWindow(sender, args) {
    var arg = args.get_argument();
    if (arg && arg.success == true) {
        var masterTable = $find("ctl00_PageBody_HistoryGrid_TransGrid").get_masterTableView();
        masterTable.rebind();
    }
}

function addAttachment(rowid) {
    var masterTable = $find("ctl00_PageBody_HistoryGrid_TransGrid").get_masterTableView();
    var rowItem = masterTable.get_dataItems()[rowid];
    var qs = rowItem.getDataKeyValue("TransactionIdEnc");

    var oWnd = $find("ctl00_PageBody_HistoryGrid_AddAttachmentWindow");
    var url = '/Accounts/Management/AccountHistoryAttachmentAdd.aspx?params=' + qs;
    oWnd.setUrl(url);
    oWnd.show();
}

function closeTooltip(refreshGrid) {
    var tooltip = Telerik.Web.UI.RadToolTip.getCurrent();
    if (tooltip) tooltip.hide();

    if (refreshGrid && refreshGrid == true) {
        var masterTable = $find("ctl00_PageBody_HistoryGrid_TransGrid").get_masterTableView();
        masterTable.rebind();
    }
}

function onRemoveAttachmentPopup() {
    if (ConfirmRemove('attachment')) {
        return true;
    }
    else {
        return false;
    }
}

function onRemoveAttachments() {
    if (ConfirmAnnihilate('remove', 'attachment', 's', 'chkTran')) {
        return true;
    }
    else {
        return false;
    }
}

function beforeDetailsTooltipHide(sender, e) {
    // hacky way to prevent iframe refreshing itself on hide event
    var contentElement = sender.get_contentElement();
    var iframe = contentElement.getElementsByTagName("iframe");
    if (iframe && iframe.length > 0 && iframe[0].src) {
        iframe[0].src = '';
    }
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