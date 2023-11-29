// Copyright 2014-2023 VintaSoft Ltd. All rights reserved.
// This software is protected by International copyright laws.
// Any copying, duplication, deployment, redistribution, modification or other
// disposition hereof is STRICTLY PROHIBITED without an express written license
// granted by VintaSoft Ltd. This notice may not be removed or otherwise
// altered under any circumstances.
// This code may NOT be used apart of the VintaSoft product.
﻿// NAMESPACE
declare module Vintasoft.Imaging.Office.UI.Dialogs {

  // ===== CLASSES =====

  /**
   * A web UI dialog (based on the Bootstrap) that allows to rename worksheet in the spreadsheet editor.
   */
  class WebUiRenameWorksheetDialogJS extends Vintasoft.Imaging.UI.Dialogs.WebUiDialogJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebUiRenameWorksheetDialogJS"] class.
     * @param spreadsheetEditorControl The spreadsheet editor control.
     */
    constructor(spreadsheetEditorControl: Vintasoft.Imaging.Office.UI.WebSpreadsheetEditorControlJS);

    // METHODS

    /**
     * Shows the dialog.
     */
    show(): void;

  }

  /**
   * A web UI dialog (based on the Bootstrap) that allows to reposition the worksheet in the spreadsheet editor.
   */
  class WebUiMoveWorksheetDialogJS extends Vintasoft.Imaging.UI.Dialogs.WebUiDialogJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebUiMoveWorksheetDialogJS"] class.
     * @param spreadsheetEditorControl The spreadsheet editor control.
     */
    constructor(spreadsheetEditorControl: Vintasoft.Imaging.Office.UI.WebSpreadsheetEditorControlJS);

    // METHODS

    /**
     * Shows the dialog.
     */
    show(): void;

  }

  /**
   * A web UI dialog (based on the Bootstrap) that allows to find text in worksheet document.
   */
  class WebUiFindTextDialogJS extends Vintasoft.Imaging.UI.Dialogs.WebUiDialogJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebUiFindTextDialogJS"] class.
     * @param spreadsheetEditorControl The spreadsheet editor control.
     */
    constructor(spreadsheetEditorControl: Vintasoft.Imaging.Office.UI.WebSpreadsheetEditorControlJS);

  }

  /**
   * A web UI dialog (based on the Bootstrap) that allows to select the cell function.
   */
  class WebUiSelectFunctionDialogJS extends Vintasoft.Imaging.UI.Dialogs.WebUiDialogJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebUiSelectFunctionDialogJS"] class.
     * @param spreadsheetEditorControl The spreadsheet editor control.
     */
    constructor(spreadsheetEditorControl: Vintasoft.Imaging.Office.UI.WebSpreadsheetEditorControlJS);

  }

  /**
   * A web UI dialog (based on the Bootstrap) that allows to insert new comment.
   */
  class WebUiInsertCommentDialogJS extends Vintasoft.Imaging.UI.Dialogs.WebUiDialogJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebUiInsertCommentDialogJS"] class.
     * @param spreadsheetEditorControl The spreadsheet editor control.
     */
    constructor(spreadsheetEditorControl: Vintasoft.Imaging.Office.UI.WebSpreadsheetEditorControlJS);

    // METHODS

    /**
     * Clear comment params from panel textboxes.
     */
    clear(): void;

  }

  /**
   * A web UI dialog (based on the Bootstrap) that allows to edit an existing comment.
   */
  class WebUiEditCommentDialogJS extends Vintasoft.Imaging.UI.Dialogs.WebUiDialogJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebUiEditCommentDialogJS"] class.
     * @param spreadsheetEditorControl The spreadsheet editor control.
     */
    constructor(spreadsheetEditorControl: Vintasoft.Imaging.Office.UI.WebSpreadsheetEditorControlJS);

    // METHODS

    /**
     * Fills the fields of this dialog using parameters of focused comment.
     */
    fill(): void;

  }

  /**
   * A web UI dialog (based on the Bootstrap) that allows to edit the number format for cell value.
   */
  class WebUiCellNumberFormatDialogJS extends Vintasoft.Imaging.UI.Dialogs.WebUiDialogJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebUiCellNumberFormatDialogJS"] class.
     * @param spreadsheetEditorControl The spreadsheet editor control.
     */
    constructor(spreadsheetEditorControl: Vintasoft.Imaging.Office.UI.WebSpreadsheetEditorControlJS);

    // METHODS

    /**
     * Shows the dialog.
     */
    show(): void;

  }

  /**
   * A web UI dialog (based on the Bootstrap) that allows to insert chart in the spreadsheet editor.
   */
  class WebUiInsertChartDialogJS extends Vintasoft.Imaging.UI.Dialogs.WebUiDialogJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebUiInsertChartDialogJS"] class.
     * @param spreadsheetEditorControl The spreadsheet editor control.
     * @param templateChartFileId The name of file that contains templates of supported charts.
     */
    constructor(spreadsheetEditorControl: Vintasoft.Imaging.Office.UI.WebSpreadsheetEditorControlJS, templateChartFileId: string);

    // METHODS

    /**
     * Shows the dialog.
     */
    show(): void;

    /**
     * Adds the selected chart to the spreadsheet editor control.
     */
    addSelectedChart(): void;

  }

  /**
   * A web UI dialog (based on the Bootstrap) that allows to edit the chart properties in the spreadsheet editor.
   */
  class WebUiEditChartPropertiesDialogJS extends Vintasoft.Imaging.UI.Dialogs.WebUiDialogJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebUiEditChartPropertiesDialogJS"] class.
     * @param spreadsheetEditorControl The spreadsheet editor control.
     */
    constructor(spreadsheetEditorControl: Vintasoft.Imaging.Office.UI.WebSpreadsheetEditorControlJS);

    // METHODS

    /**
     * Shows the dialog.
     */
    show(): void;

  }

  /**
   * A web UI dialog (based on the Bootstrap) that allows to add or edit hyperlink in cell.
   */
  class WebUiEditHyperlinkDialogJS extends Vintasoft.Imaging.UI.Dialogs.WebUiDialogJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebUiEditHyperlinkDialogJS"] class.
     * @param spreadsheetEditorControl The spreadsheet editor control.
     */
    constructor(spreadsheetEditorControl: Vintasoft.Imaging.Office.UI.WebSpreadsheetEditorControlJS);

    // METHODS

    /**
     * Shows the dialog.
     */
    show(): void;

  }

}

