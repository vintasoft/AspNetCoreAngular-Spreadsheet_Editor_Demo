// Copyright 2014-2025 VintaSoft LLC. All rights reserved.
// This software is protected by International copyright laws.
// Any copying, duplication, deployment, redistribution, modification or other
// disposition hereof is STRICTLY PROHIBITED without an express written license
// granted by VintaSoft LLC. This notice may not be removed or otherwise
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
     */
    constructor();

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
     */
    constructor();

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
     */
    constructor();

    // METHODS

    /**
     * Shows the dialog.
     */
    show(): void;

  }

  /**
   * A web UI dialog (based on the Bootstrap) that allows to select the cell function.
   */
  class WebUiSelectFunctionDialogJS extends Vintasoft.Imaging.UI.Dialogs.WebUiDialogJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebUiSelectFunctionDialogJS"] class.
     */
    constructor();

    // METHODS

    /**
     * Shows the dialog.
     */
    show(): void;

  }

  /**
   * A web UI dialog (based on the Bootstrap) that allows to insert new comment.
   */
  class WebUiInsertCommentDialogJS extends Vintasoft.Imaging.UI.Dialogs.WebUiDialogJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebUiInsertCommentDialogJS"] class.
     */
    constructor();

    // METHODS

    /**
     * Shows the dialog.
     */
    show(): void;

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
     */
    constructor();

    // METHODS

    /**
     * Shows the dialog.
     */
    show(): void;

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
     */
    constructor();

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
     * @param templateChartFileId The name of file that contains templates of supported charts.
     */
    constructor(templateChartFileId: string);

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
     */
    constructor();

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
     */
    constructor();

    // METHODS

    /**
     * Shows the dialog.
     */
    show(): void;

  }

  /**
   * A web UI dialog (based on the Bootstrap) that allows to select a defined name from available defined names in the spreadsheet editor.
   */
  class WebUiSelectDefinedNameDialogJS extends Vintasoft.Imaging.UI.Dialogs.WebUiDialogJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebUiSelectDefinedNameDialogJS"] class.
     */
    constructor();

    // METHODS

    /**
     * Shows the dialog.
     */
    show(): void;

  }

  /**
   * A web UI dialog (based on the Bootstrap) that allows to add a defined name in the spreadsheet editor.
   */
  class WebUiAddDefinedNameDialogJS extends Vintasoft.Imaging.UI.Dialogs.WebUiDialogJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebUiAddDefinedNameDialogJS"] class.
     */
    constructor();

    // METHODS

    /**
     * Shows the dialog.
     */
    show(): void;

  }

  /**
   * A web UI dialog (based on the Bootstrap) that allows to manage (add, edit, delete) the defined names in the spreadsheet editor.
   */
  class WebUiDefinedNameManagerDialogJS extends Vintasoft.Imaging.UI.Dialogs.WebUiDialogJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebUiDefinedNameManagerDialogJS"] class.
     */
    constructor();

    // METHODS

    /**
     * Shows the dialog.
     */
    show(): void;

  }

  /**
   * A web UI dialog (based on the Bootstrap) that allows to view and edit properties for text, which is selected in document.
   */
  class WebUiDocumentTextPropertiesDialogJS extends Vintasoft.Imaging.UI.Dialogs.WebUiDialogJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebUiDocumentTextPropertiesDialogJS"] class.
     */
    constructor();

    // METHODS

    /**
     * Shows the dialog.
     */
    show(): void;

  }

  /**
   * A web UI dialog (based on the Bootstrap) that allows to view and edit properties for text, which is selected in document.
   */
  class WebUiDocumentParagraphPropertiesDialogJS extends Vintasoft.Imaging.UI.Dialogs.WebUiDialogJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebUiDocumentParagraphPropertiesDialogJS"] class.
     */
    constructor();

    // METHODS

    /**
     * Shows the dialog.
     */
    show(): void;

  }

  /**
   * A web UI dialog (based on the Bootstrap) that allows to view and edit the indentation for document paragraph.
   */
  class WebUiDocumentParagraphIndentationSettingsDialogJS extends Vintasoft.Imaging.UI.Dialogs.WebUiDialogJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebUiDocumentParagraphIndentationSettingsDialogJS"] class.
     */
    constructor();

    // METHODS

    /**
     * Shows the dialog.
     * @param paragraphProperties The document paragraph properties.
     */
    show(paragraphProperties: Vintasoft.Imaging.Office.UI.WebDocumentParagraphPropertiesJS): void;

    /**
     * Applies the UI settings to the settings of web document editor.
     * @param paragraphProperties The document paragraph properties.
     */
    applyUI(paragraphProperties: Vintasoft.Imaging.Office.UI.WebDocumentParagraphPropertiesJS): void;

  }

  /**
   * A web UI dialog (based on the Bootstrap) that allows to view and edit the line spacing for document paragraph.
   */
  class WebUiDocumentParagraphLineSpacingSettingsDialogJS extends Vintasoft.Imaging.UI.Dialogs.WebUiDialogJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebUiDocumentParagraphLineSpacingSettingsDialogJS"] class.
     */
    constructor();

    // METHODS

    /**
     * Shows the dialog.
     * @param paragraphProperties The document paragraph properties.
     */
    show(paragraphProperties: Vintasoft.Imaging.Office.UI.WebDocumentParagraphPropertiesJS): void;

    /**
     * Applies the UI settings to the settings of web document editor.
     * @param paragraphProperties The document paragraph properties.
     */
    applyUI(paragraphProperties: Vintasoft.Imaging.Office.UI.WebDocumentParagraphPropertiesJS): void;

  }

  /**
   * A web UI dialog (based on the Bootstrap) that allows to view and edit the pagination settings for document paragraph.
   */
  class WebUiDocumentParagraphPaginationSettingsDialogJS extends Vintasoft.Imaging.UI.Dialogs.WebUiDialogJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebUiDocumentParagraphPaginationSettingsDialogJS"] class.
     */
    constructor();

    // METHODS

    /**
     * Shows the dialog.
     * @param paragraphProperties The document paragraph properties.
     */
    show(paragraphProperties: Vintasoft.Imaging.Office.UI.WebDocumentParagraphPropertiesJS): void;

    /**
     * Applies the UI settings to the settings of web document editor.
     * @param paragraphProperties The document paragraph properties.
     */
    applyUI(paragraphProperties: Vintasoft.Imaging.Office.UI.WebDocumentParagraphPropertiesJS): void;

  }

  /**
   * A web UI dialog (based on the Bootstrap) that allows to view and edit information about document.
   */
  class WebUiDocumentInfoDialogJS extends Vintasoft.Imaging.UI.Dialogs.WebUiDialogJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebUiDocumentInfoDialogJS"] class.
     */
    constructor();

    // METHODS

    /**
     * Shows the dialog.
     */
    show(): void;

  }

  /**
   * A web UI dialog (based on the Bootstrap) that allows to view and edit settings of document editor.
   */
  class WebUiDocumentEditorSettingsDialogJS extends Vintasoft.Imaging.UI.Dialogs.WebUiDialogJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebUiDocumentEditorSettingsDialogJS"] class.
     */
    constructor();

    // METHODS

    /**
     * Shows the dialog.
     */
    show(): void;

  }

  /**
   * A web UI dialog (based on the Bootstrap) that allows to view and change the page view settings of document editor.
   */
  class WebUiDocumentEditorViewSettingsDialogJS extends Vintasoft.Imaging.UI.Dialogs.WebUiDialogJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebUiDocumentEditorViewSettingsDialogJS"] class.
     */
    constructor();

    // METHODS

    /**
     * Shows the dialog.
     */
    show(): void;

  }

  /**
   * A web UI dialog (based on the Bootstrap) that allows to view and edit settings of document page.
   */
  class WebUiDocumentPageSettingsDialogJS extends Vintasoft.Imaging.UI.Dialogs.WebUiDialogJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebUiDocumentPageSettingsDialogJS"] class.
     */
    constructor();

    // METHODS

    /**
     * Shows the dialog.
     */
    show(): void;

  }

  /**
   * A web UI dialog (based on the Bootstrap) that allows to view and edit the columns settings of document page.
   */
  class WebUiDocumentPageColumnsSettingsDialogJS extends Vintasoft.Imaging.UI.Dialogs.WebUiDialogJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebUiDocumentPageColumnsSettingsDialogJS"] class.
     */
    constructor();

    // METHODS

    /**
     * Shows the dialog.
     */
    show(): void;

  }

  /**
   * A web UI dialog (based on the Bootstrap) that allows to print pages of DOCX document, which is shown in web document editor.
   */
  class WebUiPrintDocxDocumentSettingsDialogJS extends Vintasoft.Imaging.UI.Dialogs.WebUiDialogJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebUiPrintDocxDocumentSettingsDialogJS"] class.
     */
    constructor();

  }

}

