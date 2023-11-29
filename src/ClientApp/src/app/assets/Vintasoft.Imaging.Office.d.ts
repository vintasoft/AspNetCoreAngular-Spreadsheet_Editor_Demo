// Copyright 2014-2023 VintaSoft Ltd. All rights reserved.
// This software is protected by International copyright laws.
// Any copying, duplication, deployment, redistribution, modification or other
// disposition hereof is STRICTLY PROHIBITED without an express written license
// granted by VintaSoft Ltd. This notice may not be removed or otherwise
// altered under any circumstances.
// This code may NOT be used apart of the VintaSoft product.
﻿// NAMESPACE
declare module Vintasoft.Imaging.Office {

  // ===== ENUMS =====

  /**
   * Specifies available horizontal alignments for cell content.
   */
  class WebTextHorizontalAlignEnumJS extends Vintasoft.Shared.WebEnumItemBaseJS {

    constructor(value: string);

  }

  /**
   * Specifies available horizontal alignments for cell content.
   */
  class WebTextVerticalAlignEnumJS extends Vintasoft.Shared.WebEnumItemBaseJS {

    constructor(value: string);

  }

  /**
   * Specifies available function categories.
   */
  class WebFunctionCategoryEnumJS extends Vintasoft.Shared.WebEnumItemBaseJS {

    constructor(value: string);

  }

}

// NAMESPACE
declare module Vintasoft.Imaging.Office.UI {

  // ===== ENUMS =====

  /**
   * Specifies available types, which define how an XLSX page must be laid out.
   */
  class WebXlsxPageLayoutSettingsTypeEnumJS extends Vintasoft.Shared.WebFlagsEnumItemBaseJS {

    constructor(value: string);

  }

  /**
   * Specifies available modes, which define how user can interact in the <see cref="SpreadsheetVisualEditor"/>.
   */
  class WebSpreadsheetVisualEditorInteractionModeEnumJS extends Vintasoft.Shared.WebEnumItemBaseJS {

    constructor(value: string);

  }


  // ===== CLASSES =====

  /**
   * Represents a JavaScript UI control that allows to display and edit spreadsheet in HTML5 web browser.
   */
  class WebSpreadsheetEditorControlJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebSpreadsheetEditorControlJS"] class.
     * @param parentDivId A string identifier of parent DIV-element.
     */
    constructor(parentDivId: string);

    // PROPERTIES

    /**
     * Gets a value indicating whether the control is enabled.
     */
    get_IsEnabled(): boolean;

    /**
     * Sets a value indicating whether the control is enabled.
     * @param value Value indicating whether the control is enabled.
     */
    set_IsEnabled(value: boolean): void;

    /**
     * Gets the identifier of opened XLSX file.
     */
    get_FileId(): string;

    /**
     * Gets the zoom, in percents.
     */
    get_Zoom(): number;

    /**
     * Sets the zoom, in percents.
     * @param value Zoom value in percents.
     */
    set_Zoom(value: number): void;

    /**
     * Gets value or formula of focused cell.
     */
    get_FocusedCellValue(): string;

    /**
     * Sets value of selected cells.
     * @param value Value of focused cell.
     */
    set_FocusedCellValue(value: string): void;

    /**
     * Gets the font name for focused cell.
     */
    get_FontName(): number;

    /**
     * Sets the font name for selected cells.
     * @param value The font name for focused cell.
     */
    set_FontName(value: number): void;

    /**
     * Gets the font size for focused cell.
     */
    get_FontSize(): number;

    /**
     * Sets the font size for selected cells.
     * @param value The font size for focused cell.
     */
    set_FontSize(value: number): void;

    /**
     * Gets a value indicating whether focused cell has bold font.
     */
    get_IsFontBold(): boolean;

    /**
     * Sets the bold font for selected cells.
     * @param value A value indicating whether selected cells should have bold font.
     */
    set_IsFontBold(value: boolean): void;

    /**
     * Gets a value indicating whether focused cell has italic font.
     */
    get_IsFontItalic(): boolean;

    /**
     * Sets the italic font for selected cells.
     * @param value A value indicating whether selected cells should have italic font.
     */
    set_IsFontItalic(value: boolean): void;

    /**
     * Gets a value indicating whether focused cell has underline font.
     */
    get_IsFontUnderline(): boolean;

    /**
     * Sets the underline font for selected cells.
     * @param value A value indicating whether selected cells should have underline font.
     */
    set_IsFontUnderline(value: boolean): void;

    /**
     * Gets a value indicating whether focused cell has strikeout font.
     */
    get_IsFontStrikeout(): boolean;

    /**
     * Sets the strikeout font for selected cells.
     * @param value A value indicating whether selected cells should have strikeout font.
     */
    set_IsFontStrikeout(value: boolean): void;

    /**
     * Gets the font color of focused cell.
     */
    get_FontColor(): string;

    /**
     * Sets the font color of focused cell.
     * @param value The string that represents HTML color ("black", "red", "transparent", "rgb(255,255,255)", "rgba(255,255,255,0.5)").
     */
    set_FontColor(value: string): void;

    /**
     * Gets the fill color of focused cell.
     */
    get_FillColor(): string;

    /**
     * Sets the fill color of selected cells.
     * @param value The string that represents HTML color ("black", "red", "transparent", "rgb(255,255,255)", "rgba(255,255,255,0.5)").
     */
    set_FillColor(value: string): void;

    /**
     * Gets the border color of focused cell.
     */
    get_BordersColor(): string;

    /**
     * Gets the text horizontal alignment of focused cell.
     */
    get_TextHorizontalAlign(): Vintasoft.Imaging.Office.WebTextHorizontalAlignEnumJS;

    /**
     * Sets the text horizontal alignment of selected cells.
     * @param value The text horizontal alignment of focused cell.
     */
    set_TextHorizontalAlign(value: Vintasoft.Imaging.Office.WebTextHorizontalAlignEnumJS): void;

    /**
     * Gets the text vertical alignment of focused cell.
     */
    get_TextVerticalAlign(): Vintasoft.Imaging.Office.WebTextVerticalAlignEnumJS;

    /**
     * Sets the text vertical alignment of selected cells.
     * @param value The text vertical alignment of focused cell.
     */
    set_TextVerticalAlign(value: Vintasoft.Imaging.Office.WebTextVerticalAlignEnumJS): void;

    /**
     * Gets the interaction mode of the spreadsheet visual editor.
     */
    get_InteractionMode(): Vintasoft.Imaging.Office.UI.WebSpreadsheetVisualEditorInteractionModeEnumJS;

    /**
     * Sets the interaction mode of the spreadsheet visual editor.
     * @param value The default value is WebSpreadsheetVisualEditorInteractionModeEnumJS.Selection.
     */
    set_InteractionMode(value: Vintasoft.Imaging.Office.UI.WebSpreadsheetVisualEditorInteractionModeEnumJS): void;

    /**
     * Gets the radius of interaction point (resize points).
     */
    get_InteractionPointRadius(): number;

    /**
     * Sets the radius of interaction point (resize points).
     * @param value The radius of interaction point (resize points).
     */
    set_InteractionPointRadius(value: number): void;

    /**
     * Gets a value indicating whether focused cell has comment.
     */
    get_IsCellHasComment(): boolean;

    /**
     * Gets a value indicating whether comment is focused.
     */
    get_IsCommentFocused(): boolean;

    /**
     * Gets the author of focused comment.
     */
    get_CommentAuthor(): string;

    /**
     * Gets a value indicating whether the autor comment must be shown.
     */
    get_CommentShowAuthor(): boolean;

    /**
     * Gets the text of focused comment.
     */
    get_CommentText(): string;

    /**
     * Gets the number format of focused cell.
     */
    get_NumberingFormat(): string;

    /**
     * Sets the number format of selected cells.
     * @param value Number format.
     */
    set_NumberingFormat(value: string): void;

    /**
     * Gets the amount of decimal places in number format of focused cell.
     */
    get_NumberFormatDecimalPlaces(): string;

    /**
     * Sets the amount of decimal places in number format of selected cells.
     * @param value The amount of decimal places in number format for selected cells.
     */
    set_NumberFormatDecimalPlaces(value: number): void;

    /**
     * Gets a value indicating whether the undo manager can execute undo action.
     */
    get_CanUndo(): boolean;

    /**
     * Gets a value indicating whether the undo manager can execute redo action.
     */
    get_CanRedo(): boolean;

    /**
     * Gets the description of undo action.
     */
    get_UndoDescription(): string;

    /**
     * Gets the description of redo action.
     */
    get_RedoDescription(): string;

    /**
     * Gets the maximum number of undo actions.
     */
    get_MaxActions(): number;

    /**
     * Sets the maximum number of undo actions.
     * @param value Maximum number of undo actions. The default value is 25.
     */
    set_MaxActions(value: number): void;

    // METHODS

    /**
     * Gets the index of the focused worksheet.
     */
    get_FocusedWorksheetIndex(): number;

    /**
     * Sets the index of the focused worksheet.
     * @param value The index of the focused worksheet.
     */
    set_FocusedWorksheetIndex(value: number): void;

    /**
     * Gets a value indicating whether the focused cell has wrapped text.
     */
    get_WrapText(): boolean;

    /**
     * Sets a value indicating whether the selected cells has wrapped text.
     * @param value A value indicating whether the focused cell has wrapped text.
     */
    set_WrapText(value: boolean): void;

    /**
     * Opens XLSX document.
     * @param fileId An identifier of XLSX file.
     */
    openDocument(fileId: string): void;

    /**
     * Returns the names of all worksheets.
     */
    getWorksheetNames(): string[];

    /**
     * Returns the name of focused worksheet.
     */
    getFocusedWorksheetName(): string;

    /**
     * Adds new worksheet to the spreadsheet document. New worksheet is added after the focused worksheet.
     */
    addWorksheet(): void;

    /**
     * Copies the specified worksheet in spreadsheet document.
     * @param worksheetIndex The zero-based index of worksheet to copy.
     */
    copyWorksheet(worksheetIndex: number): void;

    /**
     * Copies the focused worksheet in spreadsheet document.
     */
    copyWorksheet(): void;

    /**
     * Removes the specified worksheet from spreadsheet document.
     * @param worksheetIndex The zero-based index of worksheet to remove.
     */
    removeWorksheet(worksheetIndex: number): void;

    /**
     * Removes the focused worksheet from spreadsheet document.
     */
    removeWorksheet(): void;

    /**
     * Returns the name of focused cell.
     */
    getFocusedCellName(): string;

    /**
     * Sets the selected cells and focused cells to the specified value.
     * @param referenceString The string that represents cell references. For example: 'A1' - A1 cell, 'A1:B2' - A1 to B2 cell range, 'A:A' - whole A column, '1:5' - 1 to 5 row range.
     */
    setFocusedAndSelectedCells(referenceString: string): void;

    /**
     * Sets the text input for external editor of cell value.
     * @param textInput The DOM-element that represents text input for external editor of cell value.
     */
    setTextInputForCellValueExternalEditor(textInput: object): void;

    /**
     * Sets the text input for embedded editor of cell value.
     * @param textInput The DOM-element that represents text input for embedded editor of cell value.
     */
    setTextInputForCellValueEmbeddedEditor(textInput: object): void;

    /**
     * Cancels the editing of cell value.
     */
    cancelCellValueEditing(): void;

    /**
     * Tries to finish the editing of cell formula.
     * @param p0 Contains information about formula parsing error.
     */
    tryFinishEditCellFormula(p0: object): boolean;

    /**
     * Inserts the formula in focused cell.
     * @param formula The formula.
     */
    insertFormulaInFocusedCell(formula: object): void;

    /**
     * Clears contents (value and formula) of selected cells.
     */
    clearCellsContent(): void;

    /**
     * Clears format (style) of selected cells.
     */
    clearCellsStyle(): void;

    /**
     * Copies content (selected cells, cell text, etc) to the clipboard.
     */
    doCopy(): void;

    /**
     * Cuts content (selected cells, cell text, etc) to the clipboard.
     */
    doCut(): void;

    /**
     * Pastes content (selected cells, cell text, etc) from the clipboard.
     * @param pasteWithFill A value indicating whether editor should paste cells with fill.
     */
    doPaste(pasteWithFill: boolean): void;

    /**
     * Removes rows in the focused worksheet.
     */
    removeRows(): void;

    /**
     * Removes columns in the focused worksheet.
     */
    removeColumns(): void;

    /**
     * Removes the focused drawing.
     */
    removeDrawing(): void;

    /**
     * Removes selected cells and shifts columns to the left.
     */
    removeCellsAndShiftLeft(): void;

    /**
     * Removes selected cells and shifts rows to up.
     */
    removeCellsAndShiftUp(): void;

    /**
     * Insert rows into the focused worksheet.
     */
    insertRows(): void;

    /**
     * Insert columns into the focused worksheet.
     */
    insertColumns(): void;

    /**
     * Inserts empty cells in range of selected cells and shifts columns to the right.
     */
    insertCellsAndShiftRight(): void;

    /**
     * Inserts empty cells in range of selected cells and shifts rows to down.
     */
    insertCellsAndShiftDown(): void;

    /**
     * Automatically fits the height of rows using selected cells.
     */
    autoFitRowHeight(): void;

    /**
     * Automatically fits the width of columns using selected cells.
     */
    autoFitColumnWidth(): void;

    /**
     * Hides the selected rows on focused worksheet.
     */
    hideRows(): void;

    /**
     * Shows the selected rows on focused worksheet.
     */
    showRows(): void;

    /**
     * Hides the selected columns on focused worksheet.
     */
    hideColumns(): void;

    /**
     * Shows the selected columns on focused worksheet.
     */
    showColumns(): void;

    /**
     * Inserts new comment to the focused cell.
     * @param author Comment author.
     * @param showAuthor A value indicating whether the autor name must be show in comment.
     * @param text Comment text.
     */
    insertComment(author: string, showAuthor: boolean, text: string): void;

    /**
     * Edits the focused comment.
     * @param author Comment author.
     * @param showAuthor A value indicating whether the autor name must be show in comment.
     * @param text Comment text.
     */
    editComment(author: string, showAuthor: boolean, text: string): void;

    /**
     * Deletes the focused comment.
     */
    deleteComment(): void;

    /**
     * Navigates to the previous comment.
     */
    prevComment(): void;

    /**
     * Navigates to the next comment.
     */
    nextComment(): void;

    /**
     * Shows comment of focused cell.
     */
    showComment(): void;

    /**
     * Hides comment of focused cell.
     */
    hideComment(): void;

    /**
     * Renames the worksheet.
     * @param worksheetName The worksheet name.
     */
    renameWorksheet(worksheetName: string): void;

    /**
     * Changes the position of worksheet.
     * @param newIndexes Array of worksheets indexes.
     */
    moveWorksheets(newIndexes: number[]): void;

    /**
     * Returns the cell's bounding box in spreadsheet viewer space.
     * @param rowIndex The zero based index of row.
     * @param columnIndex The zero based index of column.
     */
    getCellBoundingBox(rowIndex: number, columnIndex: number): object;

    /**
     * Sets the focus to the comment of focused cell.
     */
    focusCommentFromFocusedCell(): void;

    /**
     * Merges the selected cells.
     */
    mergeCells(): void;

    /**
     * Unmerges the selected cells.
     */
    unmergeCells(): void;

    /**
     * Undoes the action.
     */
    undo(): void;

    /**
     * Redoes the action.
     */
    redo(): void;

  }

  /**
   * Represents settings for [see="WebSpreadsheetDocumentEditorControlJS"] object.
   */
  class WebSpreadsheetDocumentEditorControlSettingsJS extends Vintasoft.Imaging.UI.UIElements.WebUiControlSettingsJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebSpreadsheetDocumentEditorControlSettingsJS"] class.
     * @param containerId An identifier of the page element, where the spreadsheet document editor control must be placed.
     * @param localizationId A localization identifier for [see="WebSpreadsheetDocumentEditorControlJS"] object.
     */
    constructor(containerId: string, localizationId: string);

  }

  /**
   * Represents a JavaScript UI control that allows to display and edit spreadsheet document in HTML5 web browser.
   */
  class WebSpreadsheetDocumentEditorControlJS extends Vintasoft.Imaging.UI.UIElements.WebUiControlJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebSpreadsheetDocumentEditorControlJS"] class.
     * @param settings The settings for spreadsheet document editor control.
     */
    constructor(settings: Vintasoft.Imaging.Office.UI.WebSpreadsheetDocumentEditorControlSettingsJS);

    // PROPERTIES

    /**
     * Gets a value indicating whether the control is enabled.
     */
    get_IsEnabled(): boolean;

    /**
     * Sets a value indicating whether the control is enabled.
     * @param value Value indicating whether the control is enabled.
     */
    set_IsEnabled(value: boolean): void;

    /**
     * Gets the spreadsheet editor control, which is associated with this document viewer.
     */
    get_SpreadsheetEditorControl(): Vintasoft.Imaging.Office.UI.WebSpreadsheetEditorControlJS;

    /**
     * Gets the interaction mode of the spreadsheet visual editor.
     */
    get_InteractionMode(): Vintasoft.Imaging.Office.UI.WebSpreadsheetVisualEditorInteractionModeEnumJS;

    /**
     * Sets the interaction mode of the spreadsheet visual editor.
     * @param value The default value is WebSpreadsheetVisualEditorInteractionModeEnumJS.Selection.
     */
    set_InteractionMode(value: Vintasoft.Imaging.Office.UI.WebSpreadsheetVisualEditorInteractionModeEnumJS): void;

    /**
     * Gets the localization identifier of UI element.
     */
    get_LocalizationId(): string;

    /**
     * Gets the maximum size, in bytes, of image that can be inserted into spreadsheet.
     */
    get_MaxImageSize(): number;

    /**
     * Sets the maximum size, in bytes, of image that can be inserted into spreadsheet.
     * @param value The maximum size, in bytes, of image. The default value is 4Mb.
     */
    set_MaxImageSize(value: number): void;

    /**
     * Gets the font name for focused cell.
     */
    get_FontName(): number;

    /**
     * Sets the font name for selected cells.
     * @param value The font name for focused cell.
     */
    set_FontName(value: number): void;

    /**
     * Gets the font size for focused cell.
     */
    get_FontSize(): number;

    /**
     * Sets the font size for selected cells.
     * @param value The font size for focused cell.
     */
    set_FontSize(value: number): void;

    /**
     * Gets a value indicating whether focused cell has bold font.
     */
    get_IsFontBold(): boolean;

    /**
     * Sets the bold font for selected cells.
     * @param value A value indicating whether selected cells should have bold font.
     */
    set_IsFontBold(value: boolean): void;

    /**
     * Gets a value indicating whether focused cell has italic font.
     */
    get_IsFontItalic(): boolean;

    /**
     * Sets the italic font for selected cells.
     * @param value A value indicating whether selected cells should have italic font.
     */
    set_IsFontItalic(value: boolean): void;

    /**
     * Gets a value indicating whether focused cell has underline font.
     */
    get_IsFontUnderline(): boolean;

    /**
     * Sets the underline font for selected cells.
     * @param value A value indicating whether selected cells should have underline font.
     */
    set_IsFontUnderline(value: boolean): void;

    /**
     * Gets a value indicating whether focused cell has strikeout font.
     */
    get_IsFontStrikeout(): boolean;

    /**
     * Sets the strikeout font for selected cells.
     * @param value A value indicating whether selected cells should have strikeout font.
     */
    set_IsFontStrikeout(value: boolean): void;

    /**
     * Gets the font color of focused cell.
     */
    get_FontColor(): string;

    /**
     * Sets the font color of focused cell.
     * @param value The string that represents HTML color ("black", "red", "transparent", "rgb(255,255,255)", "rgba(255,255,255,0.5)").
     */
    set_FontColor(value: string): void;

    /**
     * Gets the fill color of focused cell.
     */
    get_FillColor(): string;

    /**
     * Sets the fill color of selected cells.
     * @param value The string that represents HTML color ("black", "red", "transparent", "rgb(255,255,255)", "rgba(255,255,255,0.5)").
     */
    set_FillColor(value: string): void;

    /**
     * Gets the border color of focused cell.
     */
    get_BordersColor(): string;

    /**
     * Gets the text horizontal alignment of focused cell.
     */
    get_TextHorizontalAlign(): Vintasoft.Imaging.Office.WebTextHorizontalAlignEnumJS;

    /**
     * Sets the text horizontal alignment of selected cells.
     * @param value The text horizontal alignment of focused cell.
     */
    set_TextHorizontalAlign(value: Vintasoft.Imaging.Office.WebTextHorizontalAlignEnumJS): void;

    /**
     * Gets the text vertical alignment of focused cell.
     */
    get_TextVerticalAlign(): Vintasoft.Imaging.Office.WebTextVerticalAlignEnumJS;

    /**
     * Sets the text vertical alignment of selected cells.
     * @param value The text vertical alignment of focused cell.
     */
    set_TextVerticalAlign(value: Vintasoft.Imaging.Office.WebTextVerticalAlignEnumJS): void;

    /**
     * Gets the number format of focused cell.
     */
    get_NumberingFormat(): string;

    /**
     * Sets the number format of selected cells.
     * @param value The radius of interaction point (resize points).
     */
    set_NumberingFormat(value: string): void;

    /**
     * Gets a value indicating whether undo manager can execute undo action.
     */
    get_CanUndo(): boolean;

    /**
     * Gets a value indicating whether undo manager can execute redo action.
     */
    get_CanRedo(): boolean;

    /**
     * Gets the description of undo action.
     */
    get_UndoDescription(): string;

    /**
     * Gets the description of redo action.
     */
    get_RedoDescription(): string;

    /**
     * Gets the maximum number of undo actions.
     */
    get_MaxActions(): number;

    /**
     * Sets the maximum number of undo actions.
     * @param value Maximum number of undo actions. The default value is 25.
     */
    set_MaxActions(value: number): void;

    /**
     * Gets the value, which defines how an XLSX page must be laid out.
     */
    get_XlsxPageLayoutSettingsType(): Vintasoft.Imaging.Office.UI.WebXlsxPageLayoutSettingsTypeEnumJS;

    /**
     * Sets the value, which defines how an XLSX page must be laid out.
     * @param value [see="WebXlsxPageLayoutSettingsTypeEnumJS"] object, which defines how an XLSX page must be laid out. The default value is "UseWorksheetWidth".
     */
    set_XlsxPageLayoutSettingsType(value: Vintasoft.Imaging.Office.UI.WebXlsxPageLayoutSettingsTypeEnumJS): void;

    /**
     * Gets a value indicating whether main menu header is visible.
     */
    get_IsMainMenuHeaderVisible(): boolean;

    /**
     * Sets a value indicating whether main menu header is visible.
     * @param value A value indicating whether main menu header is visible.
     */
    set_IsMainMenuHeaderVisible(value: boolean): void;

    /**
     * Gets a value indicating whether main menu is visible.
     */
    get_IsMainMenuVisible(): boolean;

    /**
     * Sets a value indicating whether main menu is visible.
     * @param value A value indicating whether main menu is visible.
     */
    set_IsMainMenuVisible(value: boolean): void;

    /**
     * Gets a value indicating whether formula panel is visible.
     */
    get_IsFormulaPanelVisible(): boolean;

    /**
     * Sets a value indicating whether formula panel is visible.
     * @param value A value indicating whether formula panel is visible.
     */
    set_IsFormulaPanelVisible(value: boolean): void;

    /**
     * Gets a value indicating whether footer panel is visible.
     */
    get_IsFooterPanelVisible(): boolean;

    /**
     * Sets a value indicating whether footer panel is visible.
     * @param value A value indicating whether footer panel is visible.
     */
    set_IsFooterPanelVisible(value: boolean): void;

    /**
     * Gets a value indicating whether main menu header is shown in full screen mode.
     */
    get_ShowMainMenuHeaderInFullscreenMode(): boolean;

    /**
     * Sets a value indicating whether main menu header is shown in full screen mode.
     * @param value A value indicating whether main menu header is shown in full screen mode.
     */
    set_ShowMainMenuHeaderInFullscreenMode(value: boolean): void;

    /**
     * Gets a value indicating whether main menu is shown in full screen mode.
     */
    get_ShowMainMenuInFullscreenMode(): boolean;

    /**
     * Sets a value indicating whether main menu is shown in full screen mode.
     * @param value A value indicating whether main menu is shown in full screen mode.
     */
    set_ShowMainMenuInFullscreenMode(value: number): void;

    /**
     * Gets a value indicating whether formula panel is shown in full screen mode.
     */
    get_ShowFormulaPanelInFullscreenMode(): boolean;

    /**
     * Sets a value indicating whether formula panel is shown in full screen mode.
     * @param value A value indicating whether formula panel is shown in full screen mode.
     */
    set_ShowFormulaPanelInFullscreenMode(value: boolean): void;

    /**
     * Gets a value indicating whether footer panel is shown in full screen mode.
     */
    get_ShowFooterPanelInFullscreenMode(): boolean;

    /**
     * Sets a value indicating whether footer panel is shown in full screen mode.
     * @param value A value indicating whether footer panel is shown in full screen mode.
     */
    set_ShowFooterPanelInFullscreenMode(value: boolean): void;

    // METHODS

    /**
     * Gets the index of the focused worksheet.
     */
    get_FocusedWorksheetIndex(): number;

    /**
     * Sets the index of the focused worksheet.
     * @param value The index of the focused worksheet.
     */
    set_FocusedWorksheetIndex(value: number): void;

    /**
     * Gets a value indicating whether the focused cell has wrapped text.
     */
    get_WrapText(): boolean;

    /**
     * Sets a value indicating whether the selected cells has wrapped text.
     * @param value A value indicating whether the focused cell has wrapped text.
     */
    set_WrapText(value: boolean): void;

    /**
     * Creates the new XLSX document.
     * @param successFunc Function that will be executed if request is executed successfully.
     * @param errorFunc Function that will be executed if request is failed.
     */
    createXlsxDocument(successFunc: Function, errorFunc: Function): void;

    /**
     * Opens XLSX document.
     * @param fileId An identifier of XLSX file.
     */
    openDocument(fileId: string): void;

    /**
     * Exports XLSX document to PDF.
     * @param xlsxPageLayoutSettingsType [see="WebXlsxPageLayoutSettingsTypeEnumJS"] object, which defines how an XLSX page must be laid out.
     * @param successFunc Function that will be executed if request is executed successfully.
     * @param errorFunc Function that will be executed if request is failed.
     */
    exportXlsxToPdf(xlsxPageLayoutSettingsType: Vintasoft.Imaging.Office.UI.WebXlsxPageLayoutSettingsTypeEnumJS, successFunc: Function, errorFunc: Function): void;

    /**
     * Adds new worksheet to the spreadsheet document and updates the UI of this control. New worksheet is added after the focused worksheet.
     */
    addWorksheet(): void;

    /**
     * Copies the specified worksheet in spreadsheet document and updates the UI of this control.
     * @param worksheetIndex The zero-based index of worksheet to copy.
     */
    copyWorksheet(worksheetIndex: number): void;

    /**
     * Copies the focused worksheet in spreadsheet document and updates the UI of this control.
     */
    copyWorksheet(): void;

    /**
     * Removes the specified worksheet from spreadsheet document and updates the UI of this control.
     * @param worksheetIndex The zero-based index of worksheet to remove.
     */
    removeWorksheet(worksheetIndex: number): void;

    /**
     * Removes the focused worksheet from spreadsheet document and updates the UI of this control.
     */
    removeWorksheet(): void;

    /**
     * Renames the focused worksheet and updates the UI of this control.
     * @param worksheetName The worksheet name.
     */
    renameWorksheet(worksheetName: string): void;

    /**
     * Changes the position of worksheets and updates the UI of this control.
     * @param newIndexes Array of worksheet indexes.
     */
    moveWorksheets(newIndexes: number[]): void;

    /**
     * Returns the worksheet index by name.
     * @param worksheetName The worksheet name.
     */
    getWorksheetIndexByName(worksheetName: string): number;

    /**
     * Cancels the editing of cell value.
     */
    cancelCellValueEditing(): void;

    /**
     * Merges the selected cells.
     */
    mergeCells(): void;

    /**
     * Unmerges the selected cells.
     */
    unmergeCells(): void;

    /**
     * Undoes the action.
     */
    undo(): void;

    /**
     * Redoes the action.
     */
    redo(): void;

    /**
     * Switches the control's view to the full screen mode.
     */
    swithToFullscreenMode(): void;

    /**
     * Exits the control's view from the full screen mode.
     */
    exitFromFullscreenMode(): void;

    /**
     * Updates the user interface of this control.
     */
    updateUI(): void;

  }

}

// NAMESPACE
declare module Vintasoft.Imaging.Office.UI.Panels {

  // ===== CLASSES =====

  /**
   * A web UI panel that allows to display a spreadsheet editor control.
   */
  class WebUiSpreadsheetEditorPanelJS extends Vintasoft.Imaging.UI.Panels.WebUiPanelJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebUiSpreadsheetEditorPanelJS"] class.
     * @param settings The settings of panel. The settings parameter has the following properties: <br/> <ul> <li>cssClass (string): CSS class or classes that will be applied to the element. Example: "cssClass:'button remove'".</li> <li>css (object): Object, which contains the names and values of CSS properties. Example: "css:{'width':'100px', 'height':'50px'}".</li> <li>properties (object): Object, which contains the names and values of element attributes. Example: "properties:{'title':'Hello', 'id':'helloId'}" </li> <li>events (object): Object, which contains the callbacks of events. Each object property has the following parameters:<br /> <ul> <li>Property name - event name (Example: "click", "change", "mouseover" etc ).</li> <li>Property value - event callback OR object - {callback:callback, data: Object, that contains additional data that will be passed to the callback}.</li> </ul> Example:"events:{'click':function(){console.log('click');}, 'change':{callback:function(){console.log('change');}, data:{x:11} } }". </li> <li>states (object): <b>Important:</b> This value will be ignored - see remarks.</li> <li>title (string): Shortcut for 'title' attribute of element (equals - "properties:{'title':'some title'}"). <b>Important:</b> If 'states' is defined and active state [see="WebUiElementJS.get_ActiveState"] has title, the UI element will have title of active state. </li> <li>id (string): Shortcut for 'id' attribute of element (equals - "properties:{'id':'elementId'}").</li> <li>onClick (object): Shortcut for 'click' event callback.</li> <li>onChange (object): Shortcut for 'change' event callback.</li> <li>localizationId (string): Unique localization ID.</li> </ul>
     */
    constructor(settings: object);

    // PROPERTIES

    /**
     * Gets the spreadsheet editor control, which is associated with this panel.
     */
    get_SpreadsheetEditorControl(): Vintasoft.Imaging.Office.UI.WebSpreadsheetEditorControlJS;

    /**
     * Sets a value indicating whether the UI element is enabled.
     * @param value Value indicating whether the UI element is enabled.
     */
    set_IsEnabled(value: boolean): void;

    // METHODS

    /**
     * Creates and returns markup of UI element.
     * @param floatContainer A DOM-element, where floating elements must be placed.
     */
    render(floatContainer: object): object;

    /**
     * Creates and returns markup of UI element.
     */
    render(): object;

    /**
     * Destroys this UI element.
     */
    destroy(): void;

  }

  /**
   * A web UI panel that allows to rename worksheet in the spreadsheet editor.
   */
  class WebUiRenameWorksheetPanelJS extends Vintasoft.Imaging.UI.UIElements.WebUiElementContainerJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebUiRenameWorksheetPanelJS"] class.
     * @param settings The settings of panel. The settings parameter has the following properties: <br/> <ul> <li>cssClass (string): CSS class or classes that will be applied to the element. Example: "cssClass:'button remove'".</li> <li>css (object): Object, which contains the names and values of CSS properties. Example: "css:{'width':'100px', 'height':'50px'}".</li> <li>properties (object): Object, which contains the names and values of element attributes. Example: "properties:{'title':'Hello', 'id':'helloId'}" </li> <li>events (object): Object, which contains the callbacks of events. Each object property has the following parameters:<br /> <ul> <li>Property name - event name (Example: "click", "change", "mouseover" etc ).</li> <li>Property value - event callback OR object - {callback:callback, data: Object, that contains additional data that will be passed to the callback}.</li> </ul> Example:"events:{'click':function(){console.log('click');}, 'change':{callback:function(){console.log('change');}, data:{x:11} } }". </li> <li>states (object): <b>Important:</b> This value will be ignored - see remarks.</li> <li>title (string): Shortcut for 'title' attribute of element (equals - "properties:{'title':'some title'}"). <b>Important:</b> If 'states' is defined and active state [see="WebUiElementJS.get_ActiveState"] has title, the UI element will have title of active state. </li> <li>id (string): Shortcut for 'id' attribute of element (equals - "properties:{'id':'elementId'}").</li> <li>onClick (object): Shortcut for 'click' event callback.</li> <li>onChange (object): Shortcut for 'change' event callback.</li> <li>localizationId (string): Unique localization ID.</li> </ul>
     * @param spreadsheetEditorControl The spreadsheet editor control.
     */
    constructor(settings: object, spreadsheetEditorControl: Vintasoft.Imaging.Office.UI.WebSpreadsheetEditorControlJS);

    // METHODS

    /**
     * Creates and returns markup of UI element.
     * @param floatElementContainer A DOM-element, where floating elements must be placed.
     */
    render(floatElementContainer: object): object;

    /**
     * Creates and returns markup of UI element.
     */
    render(): object;

    /**
     * Renames the worksheet (gets new name from panel UI and changes worksheet name).
     */
    renameWorksheet(): void;

    /**
     * Updates this panel.
     */
    update(): void;

    /**
     * Returns array of nested UI elements.
     */
    getNestedElements(): Vintasoft.Imaging.UI.UIElements.WebUiElementJS[];

  }

  /**
   * A web UI panel that allows to reposition the worksheet in the spreadsheet editor.
   */
  class WebUiMoveWorksheetPanelJS extends Vintasoft.Imaging.UI.Panels.WebUiPanelJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebUiMoveWorksheetPanelJS"] class.
     * @param settings The settings of panel. The settings parameter has the following properties: <br/> <ul> <li>cssClass (string): CSS class or classes that will be applied to the element. Example: "cssClass:'button remove'".</li> <li>css (object): Object, which contains the names and values of CSS properties. Example: "css:{'width':'100px', 'height':'50px'}".</li> <li>properties (object): Object, which contains the names and values of element attributes. Example: "properties:{'title':'Hello', 'id':'helloId'}" </li> <li>events (object): Object, which contains the callbacks of events. Each object property has the following parameters:<br /> <ul> <li>Property name - event name (Example: "click", "change", "mouseover" etc ).</li> <li>Property value - event callback OR object - {callback:callback, data: Object, that contains additional data that will be passed to the callback}.</li> </ul> Example:"events:{'click':function(){console.log('click');}, 'change':{callback:function(){console.log('change');}, data:{x:11} } }". </li> <li>states (object): <b>Important:</b> This value will be ignored - see remarks.</li> <li>title (string): Shortcut for 'title' attribute of element (equals - "properties:{'title':'some title'}"). <b>Important:</b> If 'states' is defined and active state [see="WebUiElementJS.get_ActiveState"] has title, the UI element will have title of active state. </li> <li>id (string): Shortcut for 'id' attribute of element (equals - "properties:{'id':'elementId'}").</li> <li>onClick (object): Shortcut for 'click' event callback.</li> <li>onChange (object): Shortcut for 'change' event callback.</li> <li>localizationId (string): Unique localization ID.</li> </ul>
     * @param spreadsheetEditorControl The spreadsheet editor control.
     */
    constructor(settings: object, spreadsheetEditorControl: Vintasoft.Imaging.Office.UI.WebSpreadsheetEditorControlJS);

    // METHODS

    /**
     * Changes the position of worksheet in the spreadsheet editor.
     */
    moveWorksheet(): void;

    /**
     * Updates this panel.
     */
    update(): void;

    /**
     * Returns array of nested UI elements.
     */
    getNestedElements(): Vintasoft.Imaging.UI.UIElements.WebUiElementJS[];

  }

  /**
   * A web UI panel that allows to search text in worksheet document.
   */
  class WebUiFindTextPanelJS extends Vintasoft.Imaging.UI.UIElements.WebUiElementContainerJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebUiFindTextPanelJS"] class.
     * @param settings The settings of panel. The settings parameter has the following properties: <br/> <ul> <li>cssClass (string): CSS class or classes that will be applied to the element. Example: "cssClass:'button remove'".</li> <li>css (object): Object, which contains the names and values of CSS properties. Example: "css:{'width':'100px', 'height':'50px'}".</li> <li>properties (object): Object, which contains the names and values of element attributes. Example: "properties:{'title':'Hello', 'id':'helloId'}" </li> <li>events (object): Object, which contains the callbacks of events. Each object property has the following parameters:<br /> <ul> <li>Property name - event name (Example: "click", "change", "mouseover" etc ).</li> <li>Property value - event callback OR object - {callback:callback, data: Object, that contains additional data that will be passed to the callback}.</li> </ul> Example:"events:{'click':function(){console.log('click');}, 'change':{callback:function(){console.log('change');}, data:{x:11} } }". </li> <li>states (object): <b>Important:</b> This value will be ignored - see remarks.</li> <li>title (string): Shortcut for 'title' attribute of element (equals - "properties:{'title':'some title'}"). <b>Important:</b> If 'states' is defined and active state [see="WebUiElementJS.get_ActiveState"] has title, the UI element will have title of active state. </li> <li>id (string): Shortcut for 'id' attribute of element (equals - "properties:{'id':'elementId'}").</li> <li>onClick (object): Shortcut for 'click' event callback.</li> <li>onChange (object): Shortcut for 'change' event callback.</li> <li>localizationId (string): Unique localization ID.</li> </ul>
     * @param spreadsheetEditorControl The spreadsheet editor control.
     */
    constructor(settings: object, spreadsheetEditorControl: Vintasoft.Imaging.Office.UI.WebSpreadsheetEditorControlJS);

    // METHODS

    /**
     * Destroys the UI element.
     */
    destroy(): void;

    /**
     * Finds the next cell with text in worksheet document.
     */
    findNext(): void;

    /**
     * Returns array of nested UI elements.
     */
    getNestedElements(): Vintasoft.Imaging.UI.UIElements.WebUiElementJS[];

  }

  /**
   * A web UI panel that allows to select cell function.
   */
  class WebUiSelectFunctionPanelJS extends Vintasoft.Imaging.UI.Panels.WebUiPanelJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebUiSelectFunctionPanelJS"] class.
     * @param settings The settings of panel. The settings parameter has the following properties: <br/> <ul> <li>cssClass (string): CSS class or classes that will be applied to the element. Example: "cssClass:'button remove'".</li> <li>css (object): Object, which contains the names and values of CSS properties. Example: "css:{'width':'100px', 'height':'50px'}".</li> <li>properties (object): Object, which contains the names and values of element attributes. Example: "properties:{'title':'Hello', 'id':'helloId'}" </li> <li>events (object): Object, which contains the callbacks of events. Each object property has the following parameters:<br /> <ul> <li>Property name - event name (Example: "click", "change", "mouseover" etc ).</li> <li>Property value - event callback OR object - {callback:callback, data: Object, that contains additional data that will be passed to the callback}.</li> </ul> Example:"events:{'click':function(){console.log('click');}, 'change':{callback:function(){console.log('change');}, data:{x:11} } }". </li> <li>states (object): <b>Important:</b> This value will be ignored - see remarks.</li> <li>title (string): Shortcut for 'title' attribute of element (equals - "properties:{'title':'some title'}"). <b>Important:</b> If 'states' is defined and active state [see="WebUiElementJS.get_ActiveState"] has title, the UI element will have title of active state. </li> <li>id (string): Shortcut for 'id' attribute of element (equals - "properties:{'id':'elementId'}").</li> <li>onClick (object): Shortcut for 'click' event callback.</li> <li>onChange (object): Shortcut for 'change' event callback.</li> <li>localizationId (string): Unique localization ID.</li> </ul>
     * @param spreadsheetEditorControl The spreadsheet editor control.
     */
    constructor(settings: object, spreadsheetEditorControl: Vintasoft.Imaging.Office.UI.WebSpreadsheetEditorControlJS);

    // METHODS

    /**
     * Returns the name of selected function.
     */
    getSelectedFormula(): string;

    /**
     * Returns array of nested UI elements.
     */
    getNestedElements(): Vintasoft.Imaging.UI.UIElements.WebUiElementJS[];

  }

  /**
   * A web UI panel that allows to edit value of cell comment.
   */
  class WebUiCommentPanelJS extends Vintasoft.Imaging.UI.UIElements.WebUiElementContainerJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebUiCommentPanelJS"] class.
     * @param settings The settings of panel. The settings parameter has the following properties: <br/> <ul> <li>cssClass (string): CSS class or classes that will be applied to the element. Example: "cssClass:'button remove'".</li> <li>css (object): Object, which contains the names and values of CSS properties. Example: "css:{'width':'100px', 'height':'50px'}".</li> <li>properties (object): Object, which contains the names and values of element attributes. Example: "properties:{'title':'Hello', 'id':'helloId'}" </li> <li>events (object): Object, which contains the callbacks of events. Each object property has the following parameters:<br /> <ul> <li>Property name - event name (Example: "click", "change", "mouseover" etc ).</li> <li>Property value - event callback OR object - {callback:callback, data: Object, that contains additional data that will be passed to the callback}.</li> </ul> Example:"events:{'click':function(){console.log('click');}, 'change':{callback:function(){console.log('change');}, data:{x:11} } }". </li> <li>states (object): <b>Important:</b> This value will be ignored - see remarks.</li> <li>title (string): Shortcut for 'title' attribute of element (equals - "properties:{'title':'some title'}"). <b>Important:</b> If 'states' is defined and active state [see="WebUiElementJS.get_ActiveState"] has title, the UI element will have title of active state. </li> <li>id (string): Shortcut for 'id' attribute of element (equals - "properties:{'id':'elementId'}").</li> <li>onClick (object): Shortcut for 'click' event callback.</li> <li>onChange (object): Shortcut for 'change' event callback.</li> <li>localizationId (string): Unique localization ID.</li> </ul>
     * @param spreadsheetEditorControl The spreadsheet editor control.
     */
    constructor(settings: object, spreadsheetEditorControl: Vintasoft.Imaging.Office.UI.WebSpreadsheetEditorControlJS);

    // METHODS

    /**
     * Inserts new comment to the focused cell.
     */
    insertComment(): void;

    /**
     * Edits the focused comment.
     */
    editComment(): void;

    /**
     * Clears the fields of this panel.
     */
    clear(): void;

    /**
     * Fills the fields of this panel using parameters of focused comment.
     */
    fill(): void;

  }

  /**
   * A web UI panel that allows to edit the number format for cell value.
   */
  class WebUiCellNumberFormatPanelJS extends Vintasoft.Imaging.UI.Panels.WebUiPanelJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebUiCellNumberFormatPanelJS"] class.
     * @param settings The settings of panel. The settings parameter has the following properties: <br/> <ul> <li>cssClass (string): CSS class or classes that will be applied to the element. Example: "cssClass:'button remove'".</li> <li>css (object): Object, which contains the names and values of CSS properties. Example: "css:{'width':'100px', 'height':'50px'}".</li> <li>properties (object): Object, which contains the names and values of element attributes. Example: "properties:{'title':'Hello', 'id':'helloId'}" </li> <li>events (object): Object, which contains the callbacks of events. Each object property has the following parameters:<br /> <ul> <li>Property name - event name (Example: "click", "change", "mouseover" etc ).</li> <li>Property value - event callback OR object - {callback:callback, data: Object, that contains additional data that will be passed to the callback}.</li> </ul> Example:"events:{'click':function(){console.log('click');}, 'change':{callback:function(){console.log('change');}, data:{x:11} } }". </li> <li>states (object): <b>Important:</b> This value will be ignored - see remarks.</li> <li>title (string): Shortcut for 'title' attribute of element (equals - "properties:{'title':'some title'}"). <b>Important:</b> If 'states' is defined and active state [see="WebUiElementJS.get_ActiveState"] has title, the UI element will have title of active state. </li> <li>id (string): Shortcut for 'id' attribute of element (equals - "properties:{'id':'elementId'}").</li> <li>onClick (object): Shortcut for 'click' event callback.</li> <li>onChange (object): Shortcut for 'change' event callback.</li> <li>localizationId (string): Unique localization ID.</li> </ul>
     * @param spreadsheetEditorControl The spreadsheet editor control.
     */
    constructor(settings: object, spreadsheetEditorControl: Vintasoft.Imaging.Office.UI.WebSpreadsheetEditorControlJS);

    // METHODS

    /**
     * Updates this panel.
     */
    update(): void;

    /**
     * Returns the selected format.
     */
    getSelectedFormat(): string;

  }

  /**
   * A web UI panel that allows to insert chart in the spreadsheet editor.
   */
  class WebUiInsertChartPanelJS extends Vintasoft.Imaging.UI.UIElements.WebUiElementContainerJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebUiInsertChartPanelJS"] class.
     * @param settings The settings of panel. The settings parameter has the following properties: <br/> <ul> <li>cssClass (string): CSS class or classes that will be applied to the element. Example: "cssClass:'button remove'".</li> <li>css (object): Object, which contains the names and values of CSS properties. Example: "css:{'width':'100px', 'height':'50px'}".</li> <li>properties (object): Object, which contains the names and values of element attributes. Example: "properties:{'title':'Hello', 'id':'helloId'}" </li> <li>events (object): Object, which contains the callbacks of events. Each object property has the following parameters:<br /> <ul> <li>Property name - event name (Example: "click", "change", "mouseover" etc ).</li> <li>Property value - event callback OR object - {callback:callback, data: Object, that contains additional data that will be passed to the callback}.</li> </ul> Example:"events:{'click':function(){console.log('click');}, 'change':{callback:function(){console.log('change');}, data:{x:11} } }". </li> <li>states (object): <b>Important:</b> This value will be ignored - see remarks.</li> <li>title (string): Shortcut for 'title' attribute of element (equals - "properties:{'title':'some title'}"). <b>Important:</b> If 'states' is defined and active state [see="WebUiElementJS.get_ActiveState"] has title, the UI element will have title of active state. </li> <li>id (string): Shortcut for 'id' attribute of element (equals - "properties:{'id':'elementId'}").</li> <li>onClick (object): Shortcut for 'click' event callback.</li> <li>onChange (object): Shortcut for 'change' event callback.</li> <li>localizationId (string): Unique localization ID.</li> </ul>
     * @param spreadsheetEditorControl The spreadsheet editor control.
     * @param templateChartFileId The name of file that contains templates of supported charts.
     */
    constructor(settings: object, spreadsheetEditorControl: Vintasoft.Imaging.Office.UI.WebSpreadsheetEditorControlJS, templateChartFileId: string);

    // METHODS

    /**
     * Creates and returns markup of UI element.
     * @param floatElementContainer A DOM-element, where floating elements must be placed.
     */
    render(floatElementContainer: object): object;

    /**
     * Creates and returns markup of UI element.
     */
    render(): object;

    /**
     * Adds the selected chart to the spreadsheet editor control.
     */
    addSelectedChart(): void;

    /**
     * Adds the type description.
     * @param typeName The name of chart type that is used in file with template charts.
     * @param typeDescription The description of chart type that is used in file with template charts.
     */
    setTypeDescription(typeName: string, typeDescription: string): void;

    /**
     * Adds the subtype description.
     * @param subTypeName The name of chart subtype that is used in file with template charts.
     * @param subTypeDescription The description of chart subtype that is used in file with template charts.
     */
    setSubTypeDescription(subTypeName: string, subTypeDescription: string): void;

  }

  /**
   * A web UI panel that allows to edit the chart properties in the spreadsheet editor.
   */
  class WebUiEditChartPropertiesPanelJS extends Vintasoft.Imaging.UI.UIElements.WebUiElementContainerJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebUiEditChartPropertiesPanelJS"] class.
     * @param settings The settings of panel. The settings parameter has the following properties: <br/> <ul> <li>cssClass (string): CSS class or classes that will be applied to the element. Example: "cssClass:'button remove'".</li> <li>css (object): Object, which contains the names and values of CSS properties. Example: "css:{'width':'100px', 'height':'50px'}".</li> <li>properties (object): Object, which contains the names and values of element attributes. Example: "properties:{'title':'Hello', 'id':'helloId'}" </li> <li>events (object): Object, which contains the callbacks of events. Each object property has the following parameters:<br /> <ul> <li>Property name - event name (Example: "click", "change", "mouseover" etc ).</li> <li>Property value - event callback OR object - {callback:callback, data: Object, that contains additional data that will be passed to the callback}.</li> </ul> Example:"events:{'click':function(){console.log('click');}, 'change':{callback:function(){console.log('change');}, data:{x:11} } }". </li> <li>states (object): <b>Important:</b> This value will be ignored - see remarks.</li> <li>title (string): Shortcut for 'title' attribute of element (equals - "properties:{'title':'some title'}"). <b>Important:</b> If 'states' is defined and active state [see="WebUiElementJS.get_ActiveState"] has title, the UI element will have title of active state. </li> <li>id (string): Shortcut for 'id' attribute of element (equals - "properties:{'id':'elementId'}").</li> <li>onClick (object): Shortcut for 'click' event callback.</li> <li>onChange (object): Shortcut for 'change' event callback.</li> <li>localizationId (string): Unique localization ID.</li> </ul>
     * @param spreadsheetEditorControl The spreadsheet editor control.
     */
    constructor(settings: object, spreadsheetEditorControl: Vintasoft.Imaging.Office.UI.WebSpreadsheetEditorControlJS);

    // METHODS

    /**
     * Creates and returns markup of UI element.
     * @param floatElementContainer A DOM-element, where floating elements must be placed.
     */
    render(floatElementContainer: object): object;

    /**
     * Creates and returns markup of UI element.
     */
    render(): object;

    /**
     * Edits the chart properties.
     */
    editChart(): void;

    /**
     * Updates this panel.
     */
    update(): void;

    /**
     * Returns array of nested UI elements.
     */
    getNestedElements(): Vintasoft.Imaging.UI.UIElements.WebUiElementJS[];

  }

  /**
   * A web UI panel that allows to add or edit hyperlink in XLSX cell.
   */
  class WebUiEditHyperlinkPanelJS extends Vintasoft.Imaging.UI.UIElements.WebUiElementContainerJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebUiEditHyperlinkPanelJS"] class.
     * @param settings The settings of panel. The settings parameter has the following properties: <br/> <ul> <li>cssClass (string): CSS class or classes that will be applied to the element. Example: "cssClass:'button remove'".</li> <li>css (object): Object, which contains the names and values of CSS properties. Example: "css:{'width':'100px', 'height':'50px'}".</li> <li>properties (object): Object, which contains the names and values of element attributes. Example: "properties:{'title':'Hello', 'id':'helloId'}" </li> <li>events (object): Object, which contains the callbacks of events. Each object property has the following parameters:<br /> <ul> <li>Property name - event name (Example: "click", "change", "mouseover" etc ).</li> <li>Property value - event callback OR object - {callback:callback, data: Object, that contains additional data that will be passed to the callback}.</li> </ul> Example:"events:{'click':function(){console.log('click');}, 'change':{callback:function(){console.log('change');}, data:{x:11} } }". </li> <li>states (object): <b>Important:</b> This value will be ignored - see remarks.</li> <li>title (string): Shortcut for 'title' attribute of element (equals - "properties:{'title':'some title'}"). <b>Important:</b> If 'states' is defined and active state [see="WebUiElementJS.get_ActiveState"] has title, the UI element will have title of active state. </li> <li>id (string): Shortcut for 'id' attribute of element (equals - "properties:{'id':'elementId'}").</li> <li>onClick (object): Shortcut for 'click' event callback.</li> <li>onChange (object): Shortcut for 'change' event callback.</li> <li>localizationId (string): Unique localization ID.</li> </ul>
     * @param spreadsheetEditorControl The spreadsheet editor control.
     */
    constructor(settings: object, spreadsheetEditorControl: Vintasoft.Imaging.Office.UI.WebSpreadsheetEditorControlJS);

    // METHODS

    /**
     * Updates this panel.
     * @param dialog A dialog that contains this panel.
     */
    update(dialog: Vintasoft.Imaging.UI.Dialogs.WebUiDialogJS): void;

    /**
     * Adds or edits a hyperlink in focused cell.
     */
    addHyperlink(): void;

  }

  /**
   * A web UI panel that allows to add or edit an URL hyperlink for focused cell.
   */
  class WebUiUrlHyperlinkPanelJS extends Vintasoft.Imaging.UI.UIElements.WebUiElementContainerJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebUiUrlHyperlinkPanelJS"] class.
     * @param settings The settings of panel. The settings parameter has the following properties: <br/> <ul> <li>cssClass (string): CSS class or classes that will be applied to the element. Example: "cssClass:'button remove'".</li> <li>css (object): Object, which contains the names and values of CSS properties. Example: "css:{'width':'100px', 'height':'50px'}".</li> <li>properties (object): Object, which contains the names and values of element attributes. Example: "properties:{'title':'Hello', 'id':'helloId'}" </li> <li>events (object): Object, which contains the callbacks of events. Each object property has the following parameters:<br /> <ul> <li>Property name - event name (Example: "click", "change", "mouseover" etc ).</li> <li>Property value - event callback OR object - {callback:callback, data: Object, that contains additional data that will be passed to the callback}.</li> </ul> Example:"events:{'click':function(){console.log('click');}, 'change':{callback:function(){console.log('change');}, data:{x:11} } }". </li> <li>states (object): <b>Important:</b> This value will be ignored - see remarks.</li> <li>title (string): Shortcut for 'title' attribute of element (equals - "properties:{'title':'some title'}"). <b>Important:</b> If 'states' is defined and active state [see="WebUiElementJS.get_ActiveState"] has title, the UI element will have title of active state. </li> <li>id (string): Shortcut for 'id' attribute of element (equals - "properties:{'id':'elementId'}").</li> <li>onClick (object): Shortcut for 'click' event callback.</li> <li>onChange (object): Shortcut for 'change' event callback.</li> <li>localizationId (string): Unique localization ID.</li> </ul>
     * @param spreadsheetEditorControl The spreadsheet editor control.
     */
    constructor(settings: object, spreadsheetEditorControl: Vintasoft.Imaging.Office.UI.WebSpreadsheetEditorControlJS);

    // METHODS

    /**
     * Adds an URL hyperlink in focused cell.
     */
    addUrlHyperlinkToFocusedCell(): void;

    /**
     * Sets an URL hyperlink in focused cell.
     */
    setUrlHyperlinkToFocusedCell(): void;

  }

  /**
   * A web UI panel that allows to add or edit a cell reference hyperlink in focused cell.
   */
  class WebUiCellReferenceHyperlinkPanelJS extends Vintasoft.Imaging.UI.UIElements.WebUiElementContainerJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebUiCellReferenceHyperlinkPanelJS"] class.
     * @param settings The settings of panel. The settings parameter has the following properties: <br/> <ul> <li>cssClass (string): CSS class or classes that will be applied to the element. Example: "cssClass:'button remove'".</li> <li>css (object): Object, which contains the names and values of CSS properties. Example: "css:{'width':'100px', 'height':'50px'}".</li> <li>properties (object): Object, which contains the names and values of element attributes. Example: "properties:{'title':'Hello', 'id':'helloId'}" </li> <li>events (object): Object, which contains the callbacks of events. Each object property has the following parameters:<br /> <ul> <li>Property name - event name (Example: "click", "change", "mouseover" etc ).</li> <li>Property value - event callback OR object - {callback:callback, data: Object, that contains additional data that will be passed to the callback}.</li> </ul> Example:"events:{'click':function(){console.log('click');}, 'change':{callback:function(){console.log('change');}, data:{x:11} } }". </li> <li>states (object): <b>Important:</b> This value will be ignored - see remarks.</li> <li>title (string): Shortcut for 'title' attribute of element (equals - "properties:{'title':'some title'}"). <b>Important:</b> If 'states' is defined and active state [see="WebUiElementJS.get_ActiveState"] has title, the UI element will have title of active state. </li> <li>id (string): Shortcut for 'id' attribute of element (equals - "properties:{'id':'elementId'}").</li> <li>onClick (object): Shortcut for 'click' event callback.</li> <li>onChange (object): Shortcut for 'change' event callback.</li> <li>localizationId (string): Unique localization ID.</li> </ul>
     * @param spreadsheetEditorControl The spreadsheet editor control.
     */
    constructor(settings: object, spreadsheetEditorControl: Vintasoft.Imaging.Office.UI.WebSpreadsheetEditorControlJS);

    // METHODS

    /**
     * Updates this panel.
     */
    update(): void;

    /**
     * Adds a cell reference hyperlink in focused cell.
     */
    addCellReferenceHyperlinkToFocusedCell(): void;

    /**
     * Sets a cell reference hyperlink in focused cell.
     */
    setCellReferenceHyperlinkToFocusedCell(): void;

  }

}

