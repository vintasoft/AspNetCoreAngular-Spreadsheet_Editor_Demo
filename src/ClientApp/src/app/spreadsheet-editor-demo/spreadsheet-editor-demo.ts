import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from '@angular/common/http';
import { BlockUiDialog } from "../dialogs/block-ui-dialog";
import { ErrorMessageDialog } from '../dialogs/error-message-dialog';


var _spreadsheetEditorDemoComponent: SpreadsheetEditorDemoComponent;


@Component({
  selector: 'spreadsheet-editor-demo',
  templateUrl: './spreadsheet-editor-demo.html',
})
export class SpreadsheetEditorDemoComponent {

  // The spreadsheet document editor control..
  _spreadsheetDocumentEditorControl: Vintasoft.Imaging.Office.UI.WebSpreadsheetDocumentEditorControlJS | null = null;

  // Dialog that allows to block UI.
  _blockUiDialog: BlockUiDialog | null = null;



  constructor(public modalService: NgbModal, private httpClient: HttpClient) {
    _spreadsheetEditorDemoComponent = this;
  }



  /**
   * Component is initializing.
   */
  ngOnInit() {
    // get identifier of current HTTP session
    this.httpClient.get<any>('api/Session/GetSessionId').subscribe(data => {
      // set the session identifier
      Vintasoft.Shared.WebImagingEnviromentJS.set_SessionId(data.sessionId);

      // specify web services, which should be used in this demo

      Vintasoft.Shared.WebServiceJS.defaultFileService = new Vintasoft.Shared.WebServiceControllerJS("vintasoft/api/MyVintasoftFileApi");
      Vintasoft.Shared.WebServiceJS.defaultOfficeService = new Vintasoft.Shared.WebServiceControllerJS("vintasoft/api/MyVintasoftOfficeApi");

      // create settings for spreadsheet document editor control
      var spreadsheetDocumentEditorControlSettings = new Vintasoft.Imaging.Office.UI.WebSpreadsheetDocumentEditorControlSettingsJS("spreadsheetDocumentEditorControlContainer", "spreadsheetDocumentEditorControl");

      // create the spreadsheet document editor control
      this._spreadsheetDocumentEditorControl = new Vintasoft.Imaging.Office.UI.WebSpreadsheetDocumentEditorControlJS(spreadsheetDocumentEditorControlSettings);

      // if application is executing on mobile device
      if (this.__isMobileDevice()) {
        // enable "pan and selection" mode in spreadsheet document editor

        let interactionMode: Vintasoft.Imaging.Office.UI.WebSpreadsheetVisualEditorInteractionModeEnumJS =
          new Vintasoft.Imaging.Office.UI.WebSpreadsheetVisualEditorInteractionModeEnumJS("PanAndSelection");
        this._spreadsheetDocumentEditorControl.set_InteractionMode(interactionMode);


        // increase radius of interaction points in spreadsheer editor
        let spreadsheetEditor: Vintasoft.Imaging.Office.UI.WebSpreadsheetEditorControlJS =
          this._spreadsheetDocumentEditorControl.get_SpreadsheetEditorControl();
        spreadsheetEditor.set_InteractionPointRadius(8);

        // hide main menu header in fullscreen mode
        this._spreadsheetDocumentEditorControl.set_ShowMainMenuHeaderInFullscreenMode(false);
        // hide footer panel in fullscreen mode
        this._spreadsheetDocumentEditorControl.set_ShowFooterPanelInFullscreenMode(false);
      }

      // subscribe to the "warningOccured" event of spreadsheet document editor control
      Vintasoft.Shared.subscribeToEvent(this._spreadsheetDocumentEditorControl, "warningOccured", this.__spreadsheetDocumentEditorControl_warningOccured);
      // subscribe to the "formulaSyntaxError" event of spreadsheet document editor control
      Vintasoft.Shared.subscribeToEvent(this._spreadsheetDocumentEditorControl, "formulaSyntaxError", this.__spreadsheetDocumentEditorControl_formulaSyntaxError);
      // subscribe to the "formulaSyntaxError" event of spreadsheet document editor control
      Vintasoft.Shared.subscribeToEvent(this._spreadsheetDocumentEditorControl, "synchronizationException", this.__spreadsheetDocumentEditorControl_synchronizationException);
      // subscribe to the asyncOperationStarted event of spreadsheet document editor control
      Vintasoft.Shared.subscribeToEvent(this._spreadsheetDocumentEditorControl, "asyncOperationStarted", this.__spreadsheetDocumentEditorControl_asyncOperationStarted);
      // subscribe to the asyncOperationFinished event of spreadsheet document editor control
      Vintasoft.Shared.subscribeToEvent(this._spreadsheetDocumentEditorControl, "asyncOperationFinished", this.__spreadsheetDocumentEditorControl_asyncOperationFinished);
      // subscribe to the asyncOperationFailed event of spreadsheet document editor control
      Vintasoft.Shared.subscribeToEvent(this._spreadsheetDocumentEditorControl, "asyncOperationFailed", this.__spreadsheetDocumentEditorControl_asyncOperationFailed);
      // subscribe to the textSearchFinished event of spreadsheet document editor control
      Vintasoft.Shared.subscribeToEvent(this._spreadsheetDocumentEditorControl, "textSearchFinished", this.__spreadsheetDocumentEditorControl_textSearchFinished);
      // subscribe to the newWorkbookCreating event of spreadsheet document editor control
      Vintasoft.Shared.subscribeToEvent(this._spreadsheetDocumentEditorControl, "newWorkbookCreating", this.__spreadsheetDocumentEditorControl_newWorkbookCreating);

      // subscribe to the "resize" event of window
      window.onresize = this.__window_resize;
      // change the visibility of demo header
      this.__changeDemoHeaderVisibility(window.innerHeight < 500);

      // get UI-elements of the spreadsheet document editor control
      let items = this._spreadsheetDocumentEditorControl.get_Items();
      // get buttons, which allow to upload and open file
      let uploadAndOpenFileButtons: Vintasoft.Imaging.UI.UIElements.WebUiUploadFileButtonJS[] = items.getItemsByRegisteredId("vssde-uploadAndOpenFileButton") as Vintasoft.Imaging.UI.UIElements.WebUiUploadFileButtonJS[];
      // if buttons found
      if (uploadAndOpenFileButtons != null && uploadAndOpenFileButtons.length > 0) {
        // for each button
        for (let i = 0; i < uploadAndOpenFileButtons.length; i++) {
            // change file extension filter for dialog that will be opened if user clicked button
          uploadAndOpenFileButtons[i].set_FileExtensionFilter(".xlsx, .xls, .ods");
        }
      }

      document.oncontextmenu = function () {
        // specify that context menu of web browser should not be shown
        return false;
      };

      // open the default XLSX document
      this.__openDefaultSpreadsheetDocument();
    });
  }



  // === Spreadsheet document editor control events ===

  __spreadsheetDocumentEditorControl_warningOccured(event: any, eventArgs: any) {
    // show the error message
    _spreadsheetEditorDemoComponent.__showErrorMessage(eventArgs.message);
  }

  __spreadsheetDocumentEditorControl_formulaSyntaxError(event: any, eventArgs: any) {
    // show the error message (timeout is used because error may occur in handler of "keydown" event)
    setTimeout(function () { _spreadsheetEditorDemoComponent.__showErrorMessage(eventArgs.message); }, 5);
  }

  __spreadsheetDocumentEditorControl_synchronizationException(event: any, eventArgs: any) {
    // show the error message
    _spreadsheetEditorDemoComponent.__showErrorMessage(eventArgs.message);
  }

  __spreadsheetDocumentEditorControl_asyncOperationStarted(event: any, eventArgs: any) {
    // block UI
    _spreadsheetEditorDemoComponent.__blockUI(eventArgs.description);
  }

  __spreadsheetDocumentEditorControl_asyncOperationFinished(event: any, eventArgs: any) {
    // unblock UI
    _spreadsheetEditorDemoComponent.__unblockUI();
  }

  __spreadsheetDocumentEditorControl_asyncOperationFailed(event: any, eventArgs: any) {
    // get description of asynchronous operation
    var description = eventArgs.description;
    // get additional information about asynchronous operation
    var additionalInfo = eventArgs.data;
    // if additional information exists
    if (additionalInfo != null)
      // show error message
      _spreadsheetEditorDemoComponent.__showErrorMessage(additionalInfo);
    // if additional information does NOT exist
    else
      // show error message
      _spreadsheetEditorDemoComponent.__showErrorMessage(description + ": unknown error.");
  }

  __spreadsheetDocumentEditorControl_textSearchFinished(event: any, eventArgs: any) {
    alert(eventArgs.message);
  }

  __spreadsheetDocumentEditorControl_newWorkbookCreating(event: any, eventArgs: any) {
    eventArgs.createWorkbook = confirm(eventArgs.message);
  }

  // === Open default XLSX document ===

  __openDefaultSpreadsheetDocument() {
    var fileId = "SalesReport.xlsx";
    // copy the file from global folder to the session folder
    Vintasoft.Imaging.VintasoftFileAPI.copyFile("UploadedImageFiles/" + fileId, _spreadsheetEditorDemoComponent.__onCopyFile_success, _spreadsheetEditorDemoComponent.__onCopyFile_error);
  }

  /**
   Request for copying of file is executed successfully.
   @param {object} data Information about copied file.
  */
  __onCopyFile_success(data: any) {
    if (_spreadsheetEditorDemoComponent._spreadsheetDocumentEditorControl != null) {
      // open XLSX document in the spreadsheet document editor
      _spreadsheetEditorDemoComponent._spreadsheetDocumentEditorControl.openDocument(data.fileId);
    }
  }

  /**
   Request for copying of file is failed.
   @param {object} data Information about error.
  */
  __onCopyFile_error(data: any) {
    alert(data.errorMessage);

    if (_spreadsheetEditorDemoComponent._spreadsheetDocumentEditorControl != null) {
      _spreadsheetEditorDemoComponent._spreadsheetDocumentEditorControl.updateUI();
    }
  }



  // === Utils ===

  /**
   * Blocks the UI. 
   * @param text Message that describes why UI is blocked.
   */
  __blockUI(text: string) {
    _spreadsheetEditorDemoComponent._blockUiDialog = new BlockUiDialog(_spreadsheetEditorDemoComponent.modalService);
    _spreadsheetEditorDemoComponent._blockUiDialog.message = text;
    _spreadsheetEditorDemoComponent._blockUiDialog.open();
  }

  /**
   Unblocks the UI.
  */
  __unblockUI() {
    if (_spreadsheetEditorDemoComponent._blockUiDialog != null && _spreadsheetEditorDemoComponent._blockUiDialog !== undefined)
      _spreadsheetEditorDemoComponent._blockUiDialog.close();
  }

  /**
   * Shows an error message.
   * @param data Information about error.
   */
  __showErrorMessage(data: any) {
    _spreadsheetEditorDemoComponent.__unblockUI();
    let dlg: ErrorMessageDialog = new ErrorMessageDialog(_spreadsheetEditorDemoComponent.modalService);
    dlg.errorData = data;
    dlg.open();
  }

  /**
   Returns a value indicating whether application is executing on mobile device.
  */
  __isMobileDevice() {
    const toMatch = [
      /Android/i,
      /webOS/i,
      /iPhone/i,
      /iPad/i,
      /iPod/i,
      /BlackBerry/i,
      /Windows Phone/i
    ];

    return toMatch.some((toMatchItem) => {
      return navigator.userAgent.match(toMatchItem);
    });
  }

  /**
   Window is resized.
  */
  __window_resize() {
    _spreadsheetEditorDemoComponent.__changeDemoHeaderVisibility(window.innerHeight < 500)
  }

  /**
   Changes the visibility of demo header.
  */
  __changeDemoHeaderVisibility(hide: boolean) {
    var displayStyle = "block";
    var heightStyle = (window.innerHeight - 60) + "px";
    if (hide) {
      displayStyle = "none";
      heightStyle = window.innerHeight + "px"
    }

    let demoHeader: HTMLElement = document.getElementById("demoHeader") as HTMLElement;
    demoHeader.style.display = displayStyle;

    let spreadsheetDocumentEditorControlContainer: HTMLElement = document.getElementById("spreadsheetDocumentEditorControlContainer") as HTMLElement;
    spreadsheetDocumentEditorControlContainer.style.height = heightStyle;
  }

}
