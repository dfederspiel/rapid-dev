jQuery(function () { jQuery("#itemsGrid").kendoGrid({ "columns": [{ "title": "Draft Number", "attributes": { "class": "text-center" }, "headerAttributes": { "style": "text-align:center", "data-field": "DraftNumber", "data-title": "Draft Number" }, "field": "DraftNumber", "encoded": true }, { "title": "Trace Number", "attributes": { "class": "text-center" }, "headerAttributes": { "style": "text-align:center", "data-field": "TraceNumber", "data-title": "Trace Number" }, "template": "# if (ShowImageLink == true) { #\u003ca class=\"pointer\" onclick=\"return displayImage(\u0027#= CheckImageUrl #\u0027);\"\u003e#= TraceNumber #\u003c/a\u003e # } else { ##: TraceNumber ## } #", "field": "TraceNumber", "encoded": true }, { "title": "Multi Account", "attributes": { "class": "text-center" }, "headerAttributes": { "style": "text-align:center", "data-field": "MultiAccount", "data-title": "Multi Account" }, "field": "MultiAccount", "encoded": true }, { "title": "Branch", "attributes": { "class": "text-center" }, "headerAttributes": { "style": "text-align:center", "data-field": "Branch", "data-title": "Branch" }, "template": "#=kendo.toString(Branch,\u00270000\u0027)#", "field": "Branch", "encoded": true }, { "title": "Stop/Return", "attributes": { "class": "text-center" }, "headerAttributes": { "style": "text-align:center", "data-field": "StopReturn", "data-title": "Stop/Return" }, "field": "StopReturn", "encoded": true }, { "title": "Amount", "attributes": { "class": "text-right" }, "headerAttributes": { "style": "text-align:center", "data-field": "Amount", "data-title": "Amount" }, "field": "Amount", "format": "{0:C}", "encoded": true }, { "title": "Date Cleared", "attributes": { "class": "text-center" }, "headerAttributes": { "style": "text-align:center", "data-field": "DateCleared", "data-title": "Date Cleared" }, "field": "DateCleared", "format": "{0:MM/dd/yyyy}", "encoded": true }, { "title": "Statement Date", "attributes": { "class": "text-center" }, "headerAttributes": { "style": "text-align:center", "data-field": "StatementDate", "data-title": "Statement Date" }, "field": "StatementDate", "format": "{0:MM/dd/yyyy}", "encoded": true }, { "title": "Status", "attributes": { "class": "text-center" }, "headerAttributes": { "style": "text-align:center", "data-field": "Status", "data-title": "Status" }, "field": "Status", "encoded": true }], "pageable": { "autoBind": false, "refresh": true, "pageSizes": ["15", "25", "50", "100", "250", "500"], "buttonCount": 5 }, "sortable": true, "scrollable": false, "toolbar": {}, "noRecords": true, "messages": { "noRecords": "There are no items to display." }, "autoBind": false, "dataSource": { "type": (function () { if (kendo.data.transports['aspnetmvc-ajax']) { return 'aspnetmvc-ajax'; } else { throw new Error('The kendo.aspnetmvc.min.js script is not included.'); } })(), "transport": { "read": { "url": "/CorporateChecking/ClearedDraft/GetInquiryItems", "data": itemsGrid_OnGridRefresh }, "prefix": "" }, "pageSize": 10, "page": 1, "total": 0, "serverPaging": true, "serverSorting": true, "serverFiltering": true, "serverGrouping": true, "serverAggregates": true, "filter": [], "error": messages_handleAjaxResponseMessages, "requestEnd": itemsGrid_OnRequestEnd, "schema": { "data": "Data", "total": "Total", "errors": "Errors", "model": { "fields": { "DraftNumber": { "type": "number" }, "TraceNumber": { "type": "string" }, "MultiAccount": { "type": "number" }, "Branch": { "type": "number" }, "StopReturn": { "type": "string" }, "Amount": { "type": "number" }, "DateCleared": { "type": "date", "defaultValue": null }, "StatementDate": { "type": "date", "defaultValue": null }, "Status": { "type": "string" }, "ShowImageLink": { "type": "boolean" }, "CheckImageUrl": { "type": "string" } } } } } }); });
jQuery(function () { jQuery("#CheckImageWindow").kendoWindow({ "close": onClose, "modal": false, "iframe": true, "draggable": true, "scrollable": true, "pinned": false, "title": "Cleared Draft Image Access", "resizable": true, "width": 710, "height": 690, "actions": ["Pin", "Minimize", "Maximize", "Close"] }); });
var isWindowCentered = false;
function displayImage(url) {
    var wnd = $("#CheckImageWindow").data("kendoWindow");
    wnd.content(''); // clear previous image
    wnd.refresh(url);
    if (isWindowCentered === false) {
        wnd.center().open();
        isWindowCentered = true;
    }
    return false;
}
jQuery(function () { jQuery("#SelectedItemsIncluded").kendoDropDownList({ "dataSource": [{ "Text": "All", "Value": "0" }, { "Text": "Cleared Drafts", "Value": "1" }, { "Text": "Stop Pays", "Value": "2" }, { "Text": "Returned Items", "Value": "3" }], "dataTextField": "Text", "dataValueField": "Value", "index": 0 }); });
jQuery(function () { jQuery("#EndAmount").kendoNumericTextBox({ "format": "c", "spinners": false }); });
jQuery(function () { jQuery("#StartAmount").kendoNumericTextBox({ "format": "c", "spinners": false }); });
jQuery(function () { jQuery("#Toolbar").kendoToolBar({ "click": ToolbarClick, "items": [{ "attributes": { "data-section": "filterSection", "data-sectionsibling": "gridSection", "data-focusid": "MultiAccountNumber" }, "id": "filter", "selected": false, "text": "Filter", "togglable": true, "toggle": Toolbar_OnToggleFilter, "type": "button" }, { "type": "separator" }, { "id": "download", "text": "Download", "type": "button" }, { "type": "separator" }, { "template": "\u003clabel\u003eQuick Date Filter:\u003c/label\u003e" }, { "id": "previous", "text": "Prev Bus Day", "type": "button" }, { "id": "thisweek", "text": "This Week", "type": "button" }, { "id": "lastweek", "text": "Last Week", "type": "button" }, { "id": "thismonth", "text": "This Month", "type": "button" }, { "id": "lastmonth", "text": "Last Month", "type": "button" }] }); });
jQuery(function () { jQuery("#StartDate").kendoDatePicker({ "format": "M/d/yyyy", "min": new Date(1900, 0, 1, 0, 0, 0, 0), "max": new Date(2099, 11, 31, 0, 0, 0, 0) }); });
jQuery(function () { jQuery("#EndDate").kendoDatePicker({ "format": "M/d/yyyy", "min": new Date(1900, 0, 1, 0, 0, 0, 0), "max": new Date(2099, 11, 31, 0, 0, 0, 0) }); });
$(function () {
    saveFormValues();

    $.ajax({
        type: "POST",
        url: "/CorporateChecking/ClearedDraft/CorporateCheckImageDisplay.aspx/ClearEditorSize",
        contentType: "application/json; charset=utf-8",
        dataType: "json"
    });
});
$(function () {
    var dataSource = $('#itemsGrid').data().kendoGrid.dataSource;
    dataSource.query({
        page: 1,
        pageSize: 100,
        group: dataSource.group(),
        filter: dataSource.filter(),
        sort: dataSource.sort()
    });
});