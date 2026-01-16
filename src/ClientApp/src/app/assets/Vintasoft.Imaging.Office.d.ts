// Copyright 2014-2026 VintaSoft LLC. All rights reserved.
// This software is protected by International copyright laws.
// Any copying, duplication, deployment, redistribution, modification or other
// disposition hereof is STRICTLY PROHIBITED without an express written license
// granted by VintaSoft LLC. This notice may not be removed or otherwise
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
   * Specifies available types of underlines for text.
   */
  class WebTextUnderlineTypeEnumJS extends Vintasoft.Shared.WebEnumItemBaseJS {

    constructor(value: string);

  }

  /**
   * Specifies available types of strikeouts for text.
   */
  class WebTextStrikeoutTypeEnumJS extends Vintasoft.Shared.WebEnumItemBaseJS {

    constructor(value: string);

  }

  /**
   * Specifies available document view modes.
   */
  class WebDocumentViewModeEnumJS extends Vintasoft.Shared.WebEnumItemBaseJS {

    constructor(value: string);

  }

  /**
   * Specifies available horizontal alignments for paragraph.
   */
  class WebParagraphHorizontalAlignmentModeEnumJS extends Vintasoft.Shared.WebEnumItemBaseJS {

    constructor(value: string);

  }

  /**
   * Specifies available line spacing rules for paragraph.
   */
  class WebParagraphLineSpacingRuleEnumJS extends Vintasoft.Shared.WebEnumItemBaseJS {

    constructor(value: string);

  }

  /**
   * Specifies available modes, which define how user can interact in the spreadsheet visual editor.
   */
  class WebSpreadsheetVisualEditorInteractionModeEnumJS extends Vintasoft.Shared.WebEnumItemBaseJS {

    constructor(value: string);

  }


  // ===== CLASSES =====

  /**
   * Represents a JavaScript UI control that allows to display and edit (using mouse and keyboard) XSLX document in HTML5 web browser.
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
    get_UndoMaxActions(): number;

    /**
     * Sets the maximum number of undo actions.
     * @param value Maximum number of undo actions. The default value is 25.
     */
    set_UndoMaxActions(value: number): void;

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
    insertFormulaInFocusedCell(formula: string): void;

    /**
     * Clears contents (value and formula) of selected cells.
     */
    clearCellsContents(): void;

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
     * Removes hyperlinks from focused sheet drawing or selected cells.
     */
    removeHyperlinks(): void;

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
   * Represents a JavaScript UI control that allows to display and edit (using menu, footer, mouse and keyboard) XLSX document in HTML5 web browser.
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
    get_UndoMaxActions(): number;

    /**
     * Sets the maximum number of undo actions.
     * @param value Maximum number of undo actions. The default value is 25.
     */
    set_UndoMaxActions(value: number): void;

    /**
     * Gets the value, which defines how an XLSX page must be laid out.
     */
    get_XlsxPageLayoutSettingsType(): Vintasoft.Shared.WebXlsxPageLayoutSettingsTypeEnumJS;

    /**
     * Sets the value, which defines how an XLSX page must be laid out.
     * @param value [see="WebXlsxPageLayoutSettingsTypeEnumJS"] object, which defines how an XLSX page must be laid out. The default value is "UseWorksheetWidth".
     */
    set_XlsxPageLayoutSettingsType(value: Vintasoft.Shared.WebXlsxPageLayoutSettingsTypeEnumJS): void;

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
    exportXlsxToPdf(xlsxPageLayoutSettingsType: Vintasoft.Shared.WebXlsxPageLayoutSettingsTypeEnumJS, successFunc: Function, errorFunc: Function): void;

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
    switchToFullscreenMode(): void;

    /**
     * Exits the control's view from the full screen mode.
     */
    exitFromFullscreenMode(): void;

    /**
     * Updates the user interface of this control.
     */
    updateUI(): void;

  }

  /**
   * Represents the information about document.
   */
  class WebDocumentInformationPropertiesJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebDocumentInformationPropertiesJS"] class.
     */
    constructor();

    // PROPERTIES

    /**
     * Gets the name given to the document and its content.
     */
    get_Title(): string;

    /**
     * Sets the name given to the document and its content.
     * @param value The name given to the document and its content.
     */
    set_Title(value: string): void;

    /**
     * Gets the topic of the document content.
     */
    get_Subject(): string;

    /**
     * Sets the topic of the document content.
     * @param value The topic of the document content.
     */
    set_Subject(value: string): void;

    /**
     * Gets a value that identifies the individual or entity that created the document and its content.
     */
    get_Creator(): string;

    /**
     * Sets a value that identifies the individual or entity that created the document and its content.
     * @param value A value that identifies the individual or entity that created the document and its content.
     */
    set_Creator(value: string): void;

    /**
     * Gets a description of the content contained in the document.
     */
    get_Description(): string;

    /**
     * Sets a description of the content contained in the document.
     * @param value A description of the content contained in the document.
     */
    set_Description(value: string): void;

    /**
     * Gets the category of the document.
     */
    get_Category(): string;

    /**
     * Sets the category of the document.
     * @param value The category of the document.
     */
    set_Category(value: string): void;

    /**
     * Gets a value that defines a delimited set of keywords to support searching and indexing the document and its content.
     */
    get_Keywords(): string;

    /**
     * Sets a value that defines a delimited set of keywords to support searching and indexing the document and its content.
     * @param value A value that defines a delimited set of keywords to support searching and indexing the document and its content.
     */
    set_Keywords(value: string): void;

    /**
     * Gets a value that identifies the user who last modified the document content.
     */
    get_LastModifiedBy(): string;

    /**
     * Sets a value that identifies the user who last modified the document content.
     * @param value A value that identifies the user who last modified the document content.
     */
    set_LastModifiedBy(value: string): void;

    /**
     * Gets the date and time the document was created.
     */
    get_Created(): string;

    /**
     * Gets the date and time the document was last changed.
     */
    get_Modified(): string;

    /**
     * Gets the date and time the document content was last printed.
     */
    get_Printed(): string;

  }

  /**
   * Provides the properties of the document paragraph.
   */
  class WebDocumentParagraphPropertiesJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebDocumentParagraphPropertiesJS"] class.
     */
    constructor();

    // PROPERTIES

    /**
     * Gets the fill color of focused paragraph.
     */
    get_FillColor(): string;

    /**
     * Sets the fill color of selected paragraph.
     * @param value The string that represents HTML color ("black", "red", "transparent", "rgb(255,255,255)", "rgba(255,255,255,0.5)").
     */
    set_FillColor(value: string): void;

    /**
     * Gets the paragraph indentation.
     */
    get_Indentation(): Vintasoft.Imaging.Office.UI.WebDocumentParagraphIndentationPropertiesJS;

    /**
     * Sets the paragraph indentation.
     * @param value The paragraph indentation.
     */
    set_Indentation(value: Vintasoft.Imaging.Office.UI.WebDocumentParagraphIndentationPropertiesJS): void;

    /**
     * Gets the paragraph spacing.
     */
    get_Spacing(): Vintasoft.Imaging.Office.UI.WebDocumentParagraphSpacingPropertiesJS;

    /**
     * Sets the paragraph spacing.
     * @param value The paragraph spacing.
     */
    set_Spacing(value: Vintasoft.Imaging.Office.UI.WebDocumentParagraphSpacingPropertiesJS): void;

    /**
     * Gets the paragraph horizontal alignment of focused text.
     */
    get_HorizontalAlignment(): Vintasoft.Imaging.Office.UI.WebParagraphHorizontalAlignmentModeEnumJS;

    /**
     * Sets the paragraph horizontal alignment of selected text.
     * @param value An instance of [see="WebParagraphHorizontalAlignmentModeEnumJS"] type.
     */
    set_HorizontalAlignment(value: Vintasoft.Imaging.Office.UI.WebParagraphHorizontalAlignmentModeEnumJS): void;

    /**
     * Gets the paragraph numbering level.
     */
    get_NumberingLevel(): number;

    /**
     * Sets the paragraph numbering level.
     * @param value The paragraph numbering level.
     */
    set_NumberingLevel(value: number): void;

    /**
     * Gets a value indicating whether to ignore indents between paragraphs when paragraph styles match.
     */
    get_ContextualSpacing(): boolean;

    /**
     * Sets a value indicating whether to ignore indents between paragraphs when paragraph styles match.
     * @param value A value indicating whether to ignore indents between paragraphs when paragraph styles match.
     */
    set_ContextualSpacing(value: boolean): void;

    /**
     * Gets a value indicating whether the widow control for paragraph is enabled.
     */
    get_WidowControl(): boolean;

    /**
     * Sets a value indicating whether the widow control for paragraph is enabled.
     * @param value A value indicating whether the widow control for paragraph is enabled.
     */
    set_WidowControl(value: boolean): void;

    /**
     * Gets a value indicating whether next paragraph must not be separated from the current paragraph.
     */
    get_KeepNext(): boolean;

    /**
     * Sets a value indicating whether next paragraph must not be separated from the current paragraph.
     * @param value A value indicating whether next paragraph must not be separated from the current paragraph.
     */
    set_KeepNext(value: boolean): void;

    /**
     * Gets a value indicating whether the paragraph lines cannot be separated.
     */
    get_KeepLines(): boolean;

    /**
     * Sets a value indicating whether the paragraph lines cannot be separated.
     * @param value A value indicating whether the paragraph lines cannot be separated.
     */
    set_KeepLines(value: boolean): void;

    /**
     * Gets a value indicating whether the page break must be added before paragraph.
     */
    get_PageBreakBefore(): boolean;

    /**
     * Sets a value indicating whether the page break must be added before paragraph.
     * @param value A value indicating whether the page break must be added before paragraph.
     */
    set_PageBreakBefore(value: boolean): void;

  }

  /**
   * Provides the properties of the document paragraph spacing.
   */
  class WebDocumentParagraphSpacingPropertiesJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebDocumentParagraphSpacingPropertiesJS"] class.
     */
    constructor();

    // PROPERTIES

    /**
     * Gets the spacing before paragraph.
     */
    get_Before(): number;

    /**
     * Sets the spacing before paragraph.
     * @param value The spacing before paragraph.
     */
    set_Before(value: number): void;

    /**
     * Gets a value indicating whether the auto spacing is used before paragraph.
     */
    get_BeforeAutoSpacing(): boolean;

    /**
     * Sets a value indicating whether the auto spacing is used before paragraph.
     * @param value A value indicating whether the auto spacing is used before paragraph.
     */
    set_BeforeAutoSpacing(value: boolean): void;

    /**
     * Gets the spacing after paragraph.
     */
    get_After(): number;

    /**
     * Sets the spacing after paragraph.
     * @param value The spacing after paragraph.
     */
    set_After(value: number): void;

    /**
     * Gets a value indicating whether the auto spacing is used after paragraph.
     */
    get_AfterAutoSpacing(): boolean;

    /**
     * Sets a value indicating whether the auto spacing is used after paragraph.
     * @param value A value indicating whether the auto spacing is used after paragraph.
     */
    set_AfterAutoSpacing(value: boolean): void;

    /**
     * Gets the line spacing for paragraph.
     */
    get_Line(): number;

    /**
     * Sets the line spacing for paragraph.
     * @param value The line spacing for paragraph.
     */
    set_Line(value: number): void;

    /**
     * Gets the line spacing rule for paragraph.
     */
    get_LineRule(): Vintasoft.Imaging.Office.UI.WebParagraphLineSpacingRuleEnumJS;

    /**
     * Sets the line spacing rule for paragraph.
     * @param value An instance of [see="WebTextStrikeoutTypeEnumJS"] type.
     */
    set_LineRule(value: Vintasoft.Imaging.Office.UI.WebParagraphLineSpacingRuleEnumJS): void;

  }

  /**
   * Provides the properties of the document paragraph indentation.
   */
  class WebDocumentParagraphIndentationPropertiesJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebDocumentParagraphIndentationPropertiesJS"] class.
     */
    constructor();

    // PROPERTIES

    /**
     * Gets the paragraph first line indentation, in Device Independed Pixels (DIP).
     */
    get_FirstLine(): number;

    /**
     * Sets the paragraph first line indentation, in Device Independed Pixels (DIP).
     * @param value The paragraph first line indentation, in Device Independed Pixels (DIP).
     */
    set_FirstLine(value: number): void;

    /**
     * Gets the size, in Device Independed Pixels (DIP), of the indentation that should be removed for the first line of a paragraph.
     */
    get_Hanging(): number;

    /**
     * Sets the size, in Device Independed Pixels (DIP), of the indentation that should be removed for the first line of a paragraph.
     * @param value The size, in Device Independed Pixels (DIP), of the indentation that should be removed for the first line of a paragraph.
     */
    set_Hanging(value: number): void;

    /**
     * Gets the paragraph left indentation, in Device Independed Pixels (DIP).
     */
    get_Left(): number;

    /**
     * Sets the paragraph left indentation, in Device Independed Pixels (DIP).
     * @param value The paragraph left indentation, in Device Independed Pixels (DIP).
     */
    set_Left(value: number): void;

    /**
     * Gets the paragraph right indentation, in Device Independed Pixels (DIP).
     */
    get_Right(): number;

    /**
     * Sets the paragraph right indentation, in Device Independed Pixels (DIP).
     * @param value The paragraph right indentation, in Device Independed Pixels (DIP).
     */
    set_Right(value: number): void;

  }

  /**
   * Provides the properties of the document section.
   */
  class WebDocumentSectionPropertiesJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebDocumentSectionPropertiesJS"] class.
     */
    constructor();

    // PROPERTIES

    /**
     * Gets a value indicating whether page has portrait orientation.
     */
    get_IsPortraitOrientation(): boolean;

    /**
     * Sets a value indicating whether page has portrait orientation.
     * @param value A value indicating whether page has portrait orientation.
     */
    set_IsPortraitOrientation(value: boolean): void;

  }

  /**
   * Represents a JavaScript UI control that allows to display and edit (using mouse and keyboard) DOCX document in HTML5 web browser.
   */
  class WebDocumentEditorControlJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebDocumentEditorControlJS"] class.
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
     * Gets a value indicating whether the control has touch screen.
     */
    get_HasTouchScreen(): boolean;

    /**
     * Sets a value indicating whether the control has touch screen.
     * @param value Value indicating whether the control has touch screen.
     */
    set_HasTouchScreen(value: boolean): void;

    /**
     * Gets the information about document.
     */
    get_DocumentInformation(): Vintasoft.Imaging.Office.UI.WebDocumentInformationPropertiesJS;

    /**
     * Sets the information about document.
     * @param value The information about document.
     */
    set_DocumentInformation(value: Vintasoft.Imaging.Office.UI.WebDocumentInformationPropertiesJS): void;

    /**
     * Gets the font name for focused text.
     */
    get_FontName(): string;

    /**
     * Sets the font name for selected text.
     * @param value The font name for focused text.
     */
    set_FontName(value: string): void;

    /**
     * Gets the font size for focused text.
     */
    get_FontSize(): number;

    /**
     * Sets the font size for selected text.
     * @param value The font size for focused text.
     */
    set_FontSize(value: number): void;

    /**
     * Gets a value indicating whether focused text is bold.
     */
    get_IsTextBold(): boolean;

    /**
     * Sets a value indicating whether focused text is bold.
     * @param value A value indicating whether selected text must be bold.
     */
    set_IsTextBold(value: boolean): void;

    /**
     * Gets a value indicating whether focused text is italic.
     */
    get_IsTextItalic(): boolean;

    /**
     * Sets a value indicating whether focused text is italic.
     * @param value A value indicating whether selected text must be italic.
     */
    set_IsTextItalic(value: boolean): void;

    /**
     * Gets an underline type of selected text.
     */
    get_TextUnderline(): Vintasoft.Imaging.Office.UI.WebTextUnderlineTypeEnumJS;

    /**
     * Sets an underline type of selected text.
     * @param value An instance of [see="WebTextUnderlineTypeEnumJS"] type.
     */
    set_TextUnderline(value: Vintasoft.Imaging.Office.UI.WebTextUnderlineTypeEnumJS): void;

    /**
     * Gets a strikeout type of selected text.
     */
    get_TextStrikeout(): Vintasoft.Imaging.Office.UI.WebTextStrikeoutTypeEnumJS;

    /**
     * Sets a strikeout type of selected text.
     * @param value An instance of [see="WebTextStrikeoutTypeEnumJS"] type.
     */
    set_TextStrikeout(value: Vintasoft.Imaging.Office.UI.WebTextStrikeoutTypeEnumJS): void;

    /**
     * Gets a value indicating whether focused text is superscript.
     */
    get_IsTextSuperscript(): boolean;

    /**
     * Sets a value indicating whether focused text is superscript.
     * @param value A value indicating whether selected text must be superscript.
     */
    set_IsTextSuperscript(value: boolean): void;

    /**
     * Gets a value indicating whether focused text is subscript.
     */
    get_IsTextSubscript(): boolean;

    /**
     * Sets a value indicating whether focused text is subscript.
     * @param value A value indicating whether selected text must be subscript.
     */
    set_IsTextSubscript(value: boolean): void;

    /**
     * Gets the text color of focused text.
     */
    get_TextColor(): string;

    /**
     * Sets the text color of focused text.
     * @param value An instance of Vintasoft.Imaging.Primitives.WebVintasoftColorJS class OR string that represents HTML color ("black", "red", "transparent", "rgb(255,255,255)", "rgba(255,255,255,0.5)").
     */
    set_TextColor(value: object): void;

    /**
     * Gets the fill color of focused text.
     */
    get_TextFillColor(): string;

    /**
     * Sets the fill color of selected text.
     * @param value An instance of Vintasoft.Imaging.Primitives.WebVintasoftColorJS class OR string that represents HTML color ("black", "red", "transparent", "rgb(255,255,255)", "rgba(255,255,255,0.5)").
     */
    set_TextFillColor(value: object): void;

    /**
     * Gets the style name for focused text.
     */
    get_StyleName(): string;

    /**
     * Sets the style name for selected text.
     * @param value The style name for focused text.
     */
    set_StyleName(value: string): void;

    /**
     * Gets the document paragraph properties.
     */
    get_ParagraphProperties(): Vintasoft.Imaging.Office.UI.WebDocumentParagraphPropertiesJS;

    /**
     * Sets the document paragraph properties.
     * @param value The document paragraph properties.
     */
    set_ParagraphProperties(value: Vintasoft.Imaging.Office.UI.WebDocumentParagraphPropertiesJS): void;

    /**
     * Gets the paragraph numbering level count.
     */
    get_ParagraphNumberingLevelCount(): number;

    /**
     * Gets a value indicating whether the non-printable characters are visible.
     */
    get_ShowNonprintableCharacters(): boolean;

    /**
     * Sets a value indicating whether the non-printable characters are visible.
     * @param value A value indicating whether the non-printable characters are visible.
     */
    set_ShowNonprintableCharacters(value: boolean): void;

    /**
     * Gets the document section properties.
     */
    get_SectionProperties(): Vintasoft.Imaging.Office.UI.WebDocumentSectionPropertiesJS;

    /**
     * Sets the document section properties.
     * @param value The document section properties.
     */
    set_SectionProperties(value: Vintasoft.Imaging.Office.UI.WebDocumentSectionPropertiesJS): void;

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
     * Gets the page count.
     */
    get_PageCount(): number;

    /**
     * Gets the index of focused page.
     */
    get_FocusedPageIndex(): number;

    /**
     * Sets the index of focused page.
     * @param value The index of focused page.
     */
    set_FocusedPageIndex(value: number): void;

    /**
     * Gets the document view mode.
     */
    get_ViewMode(): Vintasoft.Imaging.Office.UI.WebDocumentViewModeEnumJS;

    /**
     * Sets the document view mode.
     * @param value An instance of [see="WebDocumentViewModeEnumJS"] type.
     */
    set_ViewMode(value: Vintasoft.Imaging.Office.UI.WebDocumentViewModeEnumJS): void;

    /**
     * Gets the count of pages in line.
     */
    get_PagesInLine(): number;

    /**
     * Sets the count of pages in line.
     * @param value The count of pages in line.
     */
    set_PagesInLine(value: number): void;

    /**
     * Gets the page padding in pixels.
     */
    get_PagePadding(): number;

    /**
     * Sets the page padding in pixels.
     * @param value The page padding in pixels.
     */
    set_PagePadding(value: number): void;

    // METHODS

    /**
     * Creates the new DOCX document.
     * @param successFunc Function that will be executed if request is executed successfully.
     * @param errorFunc Function that will be executed if request is failed.
     */
    createDocxDocument(successFunc: Function, errorFunc: Function): void;

    /**
     * Opens a document.
     * @param fileId An identifier of file.
     */
    openDocument(fileId: string): void;

    /**
     * Saves a document to the specified file.
     * @param fileId An identifier of file.
     */
    saveDocumentAs(fileId: string): void;

    /**
     * Exports opened DOCX document to PDF format.
     * @param successFunc Function that will be executed if request is executed successfully.
     * @param errorFunc Function that will be executed if request is failed.
     */
    exportDocxDocumentToPdf(successFunc: Function, errorFunc: Function): void;

    /**
     * Closes document.
     */
    closeDocument(): void;

    /**
     * Copies the selected content.
     */
    copyContent(): void;

    /**
     * Cuts the selected content.
     */
    cutContent(): void;

    /**
     * Pastes the content from buffer.
     */
    pasteContent(): void;

    /**
     * Pastes the text content from buffer.
     */
    pasteTextContent(): void;

    /**
     * Clears all formatting properties of selected content.
     */
    clearFormattingProperties(): void;

    /**
     * Increases the font size for selected text.
     */
    increaseFontSize(): void;

    /**
     * Decreases the font size for selected text.
     */
    decreaseFontSize(): void;

    /**
     * Returns the names of available styles.
     */
    getStyleNames(): string[];

    /**
     * Inserts the page break.
     */
    insertPageBreak(): void;

    /**
     * Starts the editing of page header.
     */
    editHeader(): void;

    /**
     * Removes the page header.
     */
    removeHeader(): void;

    /**
     * Starts the editing of page footer.
     */
    editFooter(): void;

    /**
     * Removes the page footer.
     */
    removeFooter(): void;

    /**
     * Moves to the specified page.
     * @param pageIndex The zero-based page index.
     */
    moveToPage(pageIndex: number): void;

    /**
     * Fits the view to the page.
     */
    zoomFitPage(): void;

    /**
     * Fits the view to the page width.
     */
    zoomFitPageWidth(): void;

  }

  /**
   * Represents settings for [see="WebDocumentEditorJS"] object.
   */
  class WebDocumentEditorSettingsJS extends Vintasoft.Imaging.UI.UIElements.WebUiControlSettingsJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebDocumentEditorSettingsJS"] class.
     * @param containerId An identifier of the page element, where the document editor control must be placed.
     * @param localizationId A localization identifier for [see="WebDocumentEditorJS"] object.
     */
    constructor(containerId: string, localizationId: string);

  }

  /**
   * Represents a JavaScript UI control that allows to display and edit (using menu, footer, mouse and keyboard) of DOCX document in HTML5 web browser.
   */
  class WebDocumentEditorJS extends Vintasoft.Imaging.UI.UIElements.WebUiControlJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebDocumentEditorJS"] class.
     * @param settings The settings for document editor.
     */
    constructor(settings: Vintasoft.Imaging.Office.UI.WebDocumentEditorSettingsJS);

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
     * Gets a value indicating whether the control has touch screen.
     */
    get_HasTouchScreen(): boolean;

    /**
     * Sets a value indicating whether the control has touch screen.
     * @param value Value indicating whether the control has touch screen.
     */
    set_HasTouchScreen(value: boolean): void;

    /**
     * Gets the document editor control, which is associated with this document editor.
     */
    get_DocumentEditorControl(): Vintasoft.Imaging.Office.UI.WebDocumentEditorControlJS;

    /**
     * Gets the information about document.
     */
    get_DocumentInformation(): Vintasoft.Imaging.Office.UI.WebDocumentInformationPropertiesJS;

    /**
     * Sets the information about document.
     * @param value The information about document.
     */
    set_DocumentInformation(value: Vintasoft.Imaging.Office.UI.WebDocumentInformationPropertiesJS): void;

    /**
     * Gets the font name for focused text.
     */
    get_FontName(): string;

    /**
     * Sets the font name for selected text.
     * @param value The font name for focused text.
     */
    set_FontName(value: string): void;

    /**
     * Gets the font size for focused text.
     */
    get_FontSize(): number;

    /**
     * Sets the font size for selected text.
     * @param value The font size for focused text.
     */
    set_FontSize(value: number): void;

    /**
     * Gets a value indicating whether focused text is bold.
     */
    get_IsTextBold(): boolean;

    /**
     * Sets a value indicating whether focused text is bold.
     * @param value A value indicating whether selected text must be bold.
     */
    set_IsTextBold(value: boolean): void;

    /**
     * Gets a value indicating whether focused text is italic.
     */
    get_IsTextItalic(): boolean;

    /**
     * Sets a value indicating whether focused text is italic.
     * @param value A value indicating whether selected text must be italic.
     */
    set_IsTextItalic(value: boolean): void;

    /**
     * Gets an underline type of selected text.
     */
    get_TextUnderline(): Vintasoft.Imaging.Office.UI.WebTextUnderlineTypeEnumJS;

    /**
     * Sets an underline type of selected text.
     * @param value An instance of [see="WebTextUnderlineTypeEnumJS"] type.
     */
    set_TextUnderline(value: Vintasoft.Imaging.Office.UI.WebTextUnderlineTypeEnumJS): void;

    /**
     * Gets a strikeout type of selected text.
     */
    get_TextStrikeout(): Vintasoft.Imaging.Office.UI.WebTextStrikeoutTypeEnumJS;

    /**
     * Sets a strikeout type of selected text.
     * @param value An instance of [see="WebTextStrikeoutTypeEnumJS"] type.
     */
    set_TextStrikeout(value: Vintasoft.Imaging.Office.UI.WebTextStrikeoutTypeEnumJS): void;

    /**
     * Gets a value indicating whether focused text is superscript.
     */
    get_IsTextSuperscript(): boolean;

    /**
     * Sets a value indicating whether focused text is superscript.
     * @param value A value indicating whether selected text must be superscript.
     */
    set_IsTextSuperscript(value: boolean): void;

    /**
     * Gets a value indicating whether focused text is subscript.
     */
    get_IsTextSubscript(): boolean;

    /**
     * Sets a value indicating whether focused text is subscript.
     * @param value A value indicating whether selected text must be subscript.
     */
    set_IsTextSubscript(value: boolean): void;

    /**
     * Gets the text color of focused text.
     */
    get_TextColor(): string;

    /**
     * Sets the text color of focused text.
     * @param value The string that represents HTML color ("black", "red", "transparent", "rgb(255,255,255)", "rgba(255,255,255,0.5)").
     */
    set_TextColor(value: string): void;

    /**
     * Gets the text fill color of focused text.
     */
    get_TextFillColor(): string;

    /**
     * Sets the text fill color of selected text.
     * @param value The string that represents HTML color ("black", "red", "transparent", "rgb(255,255,255)", "rgba(255,255,255,0.5)").
     */
    set_TextFillColor(value: string): void;

    /**
     * Gets the style name for focused text.
     */
    get_StyleName(): string;

    /**
     * Sets the style name for selected text.
     * @param value The style name for focused text.
     */
    set_StyleName(value: string): void;

    /**
     * Gets the document paragraph properties.
     */
    get_ParagraphProperties(): Vintasoft.Imaging.Office.UI.WebDocumentParagraphPropertiesJS;

    /**
     * Sets the document paragraph properties.
     * @param value The document paragraph properties.
     */
    set_ParagraphProperties(value: Vintasoft.Imaging.Office.UI.WebDocumentParagraphPropertiesJS): void;

    /**
     * Gets a value indicating whether the non-printable characters are visible.
     */
    get_ShowNonprintableCharacters(): boolean;

    /**
     * Sets a value indicating whether the non-printable characters are visible.
     * @param value A value indicating whether the non-printable characters are visible.
     */
    set_ShowNonprintableCharacters(value: boolean): void;

    /**
     * Gets the document section properties.
     */
    get_SectionProperties(): Vintasoft.Imaging.Office.UI.WebDocumentSectionPropertiesJS;

    /**
     * Sets the document section properties.
     * @param value The document section properties.
     */
    set_SectionProperties(value: Vintasoft.Imaging.Office.UI.WebDocumentSectionPropertiesJS): void;

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
     * Gets the page count.
     */
    get_PageCount(): number;

    /**
     * Gets the index of focused page.
     */
    get_FocusedPageIndex(): number;

    /**
     * Sets the index of focused page.
     * @param value The index of focused page.
     */
    set_FocusedPageIndex(value: number): void;

    /**
     * Gets the document view mode.
     */
    get_ViewMode(): Vintasoft.Imaging.Office.UI.WebDocumentViewModeEnumJS;

    /**
     * Sets the document view mode.
     * @param value An instance of [see="WebDocumentViewModeEnumJS"] type.
     */
    set_ViewMode(value: Vintasoft.Imaging.Office.UI.WebDocumentViewModeEnumJS): void;

    /**
     * Gets the count of pages in line.
     */
    get_PagesInLine(): number;

    /**
     * Sets the count of pages in line.
     * @param value The count of pages in line.
     */
    set_PagesInLine(value: number): void;

    /**
     * Gets the page padding in pixels.
     */
    get_PagePadding(): number;

    /**
     * Sets the page padding in pixels.
     * @param value The page padding in pixels.
     */
    set_PagePadding(value: number): void;

    // METHODS

    /**
     * Creates the new DOCX document.
     * @param successFunc Function that will be executed if request is executed successfully.
     * @param errorFunc Function that will be executed if request is failed.
     */
    createDocxDocument(successFunc: Function, errorFunc: Function): void;

    /**
     * Opens a document.
     * @param fileId An identifier of a file.
     */
    openDocument(fileId: string): void;

    /**
     * Saves a document to the specified file.
     * @param fileId An identifier of file.
     */
    saveDocumentAs(fileId: string): void;

    /**
     * Exports opened DOCX document to PDF format.
     * @param successFunc Function that will be executed if request is executed successfully.
     * @param errorFunc Function that will be executed if request is failed.
     */
    exportDocxDocumentToPdf(successFunc: Function, errorFunc: Function): void;

    /**
     * Closes document.
     */
    closeDocument(): void;

    /**
     * Copies the selected content.
     */
    copyContent(): void;

    /**
     * Cuts the selected content.
     */
    cutContent(): void;

    /**
     * Pastes the content from buffer.
     */
    pasteContent(): void;

    /**
     * Pastes the text content from buffer.
     */
    pasteTextContent(): void;

    /**
     * Clears all formatting properties of selected content.
     */
    clearFormattingProperties(): void;

    /**
     * Returns the names of available styles.
     */
    getStyleNames(): string[];

    /**
     * Inserts the page break.
     */
    insertPageBreak(): void;

    /**
     * Starts the editing of page header.
     */
    editHeader(): void;

    /**
     * Removes the page header.
     */
    removeHeader(): void;

    /**
     * Starts the editing of page footer.
     */
    editFooter(): void;

    /**
     * Removes the page footer.
     */
    removeFooter(): void;

    /**
     * Moves to the specified page.
     * @param pageIndex The zero-based page index.
     */
    moveToPage(pageIndex: number): void;

    /**
     * Fits the view to the page.
     */
    zoomFitPage(): void;

    /**
     * Fits the view to the page width.
     */
    zoomFitPageWidth(): void;

    /**
     * Updates the user interface of this control.
     */
    updateUI(): void;

    /**
     * Set the focus to the document editor control.
     */
    focus(): void;

    /**
     * Clears cache for current HTTP session.
     */
    clearSessionCache(): void;

  }

}

// NAMESPACE
declare module Vintasoft.Imaging.Office.UI.Panels {

  // ===== CLASSES =====

  /**
   * A web UI panel that allows to display a document editor control.
   */
  class WebUiDocumentEditorPanelJS extends Vintasoft.Imaging.UI.Panels.WebUiPanelJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebUiDocumentEditorPanelJS"] class.
     * @param settings The settings of panel. The settings parameter has the following properties: <br/> <ul> <li>cssClass (string): CSS class or classes that will be applied to the element. Example: "cssClass:'button remove'".</li> <li>css (object): Object, which contains the names and values of CSS properties. Example: "css:{'width':'100px', 'height':'50px'}".</li> <li>properties (object): Object, which contains the names and values of element attributes. Example: "properties:{'title':'Hello', 'id':'helloId'}" </li> <li>events (object): Object, which contains the callbacks of events. Each object property has the following parameters:<br /> <ul> <li>Property name - event name (Example: "click", "change", "mouseover" etc ).</li> <li>Property value - event callback OR object - {callback:callback, data: Object, that contains additional data that will be passed to the callback}.</li> </ul> Example:"events:{'click':function(){console.log('click');}, 'change':{callback:function(){console.log('change');}, data:{x:11} } }". </li> <li>states (object): <b>Important:</b> This value will be ignored - see remarks.</li> <li>title (string): Shortcut for 'title' attribute of element (equals - "properties:{'title':'some title'}"). <b>Important:</b> If 'states' is defined and active state [see="WebUiElementJS.get_ActiveState"] has title, the UI element will have title of active state. </li> <li>id (string): Shortcut for 'id' attribute of element (equals - "properties:{'id':'elementId'}").</li> <li>onClick (object): Shortcut for 'click' event callback.</li> <li>onChange (object): Shortcut for 'change' event callback.</li> <li>localizationId (string): Unique localization ID.</li> </ul>
     */
    constructor(settings: object);

    // PROPERTIES

    /**
     * Gets the spreadsheet editor control, which is associated with this panel.
     */
    get_DocumentEditorControl(): Vintasoft.Imaging.Office.UI.WebDocumentEditorControlJS;

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
     */
    constructor(settings: object);

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
     */
    constructor(settings: object);

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
     */
    constructor(settings: object);

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
     */
    constructor(settings: object);

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
     */
    constructor(settings: object);

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
     */
    constructor(settings: object);

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
     * @param templateChartFileId The name of file that contains templates of supported charts.
     */
    constructor(settings: object, templateChartFileId: string);

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
     */
    constructor(settings: object);

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
     */
    constructor(settings: object);

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
     */
    constructor(settings: object);

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
     */
    constructor(settings: object);

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

  /**
   * A web UI panel that allows to select defined name.
   */
  class WebUiSelectDefinedNamePanelJS extends Vintasoft.Imaging.UI.Panels.WebUiPanelJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebUiSelectDefinedNamePanelJS"] class.
     * @param settings The settings of panel. The settings parameter has the following properties: <br/> <ul> <li>cssClass (string): CSS class or classes that will be applied to the element. Example: "cssClass:'button remove'".</li> <li>css (object): Object, which contains the names and values of CSS properties. Example: "css:{'width':'100px', 'height':'50px'}".</li> <li>properties (object): Object, which contains the names and values of element attributes. Example: "properties:{'title':'Hello', 'id':'helloId'}" </li> <li>events (object): Object, which contains the callbacks of events. Each object property has the following parameters:<br /> <ul> <li>Property name - event name (Example: "click", "change", "mouseover" etc ).</li> <li>Property value - event callback OR object - {callback:callback, data: Object, that contains additional data that will be passed to the callback}.</li> </ul> Example:"events:{'click':function(){console.log('click');}, 'change':{callback:function(){console.log('change');}, data:{x:11} } }". </li> <li>states (object): <b>Important:</b> This value will be ignored - see remarks.</li> <li>title (string): Shortcut for 'title' attribute of element (equals - "properties:{'title':'some title'}"). <b>Important:</b> If 'states' is defined and active state [see="WebUiElementJS.get_ActiveState"] has title, the UI element will have title of active state. </li> <li>id (string): Shortcut for 'id' attribute of element (equals - "properties:{'id':'elementId'}").</li> <li>onClick (object): Shortcut for 'click' event callback.</li> <li>onChange (object): Shortcut for 'change' event callback.</li> <li>localizationId (string): Unique localization ID.</li> </ul>
     */
    constructor(settings: object);

    // METHODS

    /**
     * Updates this panel.
     */
    update(): void;

    /**
     * Returns the name of selected defined name.
     */
    getSelectedName(): string;

    /**
     * Returns an array of nested UI elements.
     */
    getNestedElements(): Vintasoft.Imaging.UI.UIElements.WebUiElementJS[];

  }

  /**
   * A web UI panel that allows to edit a defined name.
   */
  class WebUiEditDefinedNamePanelJS extends Vintasoft.Imaging.UI.Panels.WebUiPanelJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebUiEditDefinedNamePanelJS"] class.
     * @param settings The settings of panel. The settings parameter has the following properties: <br/> <ul> <li>cssClass (string): CSS class or classes that will be applied to the element. Example: "cssClass:'button remove'".</li> <li>css (object): Object, which contains the names and values of CSS properties. Example: "css:{'width':'100px', 'height':'50px'}".</li> <li>properties (object): Object, which contains the names and values of element attributes. Example: "properties:{'title':'Hello', 'id':'helloId'}" </li> <li>events (object): Object, which contains the callbacks of events. Each object property has the following parameters:<br /> <ul> <li>Property name - event name (Example: "click", "change", "mouseover" etc ).</li> <li>Property value - event callback OR object - {callback:callback, data: Object, that contains additional data that will be passed to the callback}.</li> </ul> Example:"events:{'click':function(){console.log('click');}, 'change':{callback:function(){console.log('change');}, data:{x:11} } }". </li> <li>states (object): <b>Important:</b> This value will be ignored - see remarks.</li> <li>title (string): Shortcut for 'title' attribute of element (equals - "properties:{'title':'some title'}"). <b>Important:</b> If 'states' is defined and active state [see="WebUiElementJS.get_ActiveState"] has title, the UI element will have title of active state. </li> <li>id (string): Shortcut for 'id' attribute of element (equals - "properties:{'id':'elementId'}").</li> <li>onClick (object): Shortcut for 'click' event callback.</li> <li>onChange (object): Shortcut for 'change' event callback.</li> <li>localizationId (string): Unique localization ID.</li> </ul>
     */
    constructor(settings: object);

    // METHODS

    /**
     * Updates this panel.
     * @param name Name of defined name that must be edited in this panel; <b>null</b> - panel must create new defined name.
     */
    update(name: string): void;

    /**
     * Applies changes in panel to a defined name.
     */
    applyChanges(): void;

    /**
     * Returns an array of nested UI elements.
     */
    getNestedElements(): Vintasoft.Imaging.UI.UIElements.WebUiElementJS[];

  }

  /**
   * A web UI panel that allows to manage (add, edit, delete) the defined names.
   */
  class WebUiDefinedNameManagerPanelJS extends Vintasoft.Imaging.UI.Panels.WebUiPanelJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebUiDefinedNameManagerPanelJS"] class.
     * @param settings The settings of panel. The settings parameter has the following properties: <br/> <ul> <li>cssClass (string): CSS class or classes that will be applied to the element. Example: "cssClass:'button remove'".</li> <li>css (object): Object, which contains the names and values of CSS properties. Example: "css:{'width':'100px', 'height':'50px'}".</li> <li>properties (object): Object, which contains the names and values of element attributes. Example: "properties:{'title':'Hello', 'id':'helloId'}" </li> <li>events (object): Object, which contains the callbacks of events. Each object property has the following parameters:<br /> <ul> <li>Property name - event name (Example: "click", "change", "mouseover" etc ).</li> <li>Property value - event callback OR object - {callback:callback, data: Object, that contains additional data that will be passed to the callback}.</li> </ul> Example:"events:{'click':function(){console.log('click');}, 'change':{callback:function(){console.log('change');}, data:{x:11} } }". </li> <li>states (object): <b>Important:</b> This value will be ignored - see remarks.</li> <li>title (string): Shortcut for 'title' attribute of element (equals - "properties:{'title':'some title'}"). <b>Important:</b> If 'states' is defined and active state [see="WebUiElementJS.get_ActiveState"] has title, the UI element will have title of active state. </li> <li>id (string): Shortcut for 'id' attribute of element (equals - "properties:{'id':'elementId'}").</li> <li>onClick (object): Shortcut for 'click' event callback.</li> <li>onChange (object): Shortcut for 'change' event callback.</li> <li>localizationId (string): Unique localization ID.</li> </ul>
     */
    constructor(settings: object);

    // METHODS

    /**
     * Updates this panel.
     */
    update(): void;

    /**
     * Returns the name of selected defined name.
     */
    getSelectedName(): string;

    /**
     * Returns array of nested UI elements.
     */
    getNestedElements(): Vintasoft.Imaging.UI.UIElements.WebUiElementJS[];

  }

  /**
   * A web UI panel that allows to view and edit properties for text, which is selected in document.
   */
  class WebUiDocumentTextPropertiesPanelJS extends Vintasoft.Imaging.UI.UIElements.WebUiElementContainerJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebUiDocumentTextPropertiesPanelJS"] class.
     * @param settings The settings of panel. The settings parameter has the following properties: <br/> <ul> <li>cssClass (string): CSS class or classes that will be applied to the element. Example: "cssClass:'button remove'".</li> <li>css (object): Object, which contains the names and values of CSS properties. Example: "css:{'width':'100px', 'height':'50px'}".</li> <li>properties (object): Object, which contains the names and values of element attributes. Example: "properties:{'title':'Hello', 'id':'helloId'}" </li> <li>events (object): Object, which contains the callbacks of events. Each object property has the following parameters:<br /> <ul> <li>Property name - event name (Example: "click", "change", "mouseover" etc ).</li> <li>Property value - event callback OR object - {callback:callback, data: Object, that contains additional data that will be passed to the callback}.</li> </ul> Example:"events:{'click':function(){console.log('click');}, 'change':{callback:function(){console.log('change');}, data:{x:11} } }". </li> <li>states (object): <b>Important:</b> This value will be ignored - see remarks.</li> <li>title (string): Shortcut for 'title' attribute of element (equals - "properties:{'title':'some title'}"). <b>Important:</b> If 'states' is defined and active state [see="WebUiElementJS.get_ActiveState"] has title, the UI element will have title of active state. </li> <li>id (string): Shortcut for 'id' attribute of element (equals - "properties:{'id':'elementId'}").</li> <li>onClick (object): Shortcut for 'click' event callback.</li> <li>onChange (object): Shortcut for 'change' event callback.</li> <li>localizationId (string): Unique localization ID.</li> </ul>
     */
    constructor(settings: object);

    // METHODS

    /**
     * Updated the UI of this panel.
     */
    updateUI(): void;

    /**
     * Applies the UI settings to the settings of web document editor.
     */
    applyUI(): void;

    /**
     * Returns array of nested UI elements.
     */
    getNestedElements(): Vintasoft.Imaging.UI.UIElements.WebUiElementJS[];

  }

  /**
   * A web UI panel that allows to view and edit properties for paragraph, which is selected in document.
   */
  class WebUiDocumentParagraphPropertiesPanelJS extends Vintasoft.Imaging.UI.UIElements.WebUiElementContainerJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebUiDocumentParagraphPropertiesPanelJS"] class.
     * @param settings The settings of panel. The settings parameter has the following properties: <br/> <ul> <li>cssClass (string): CSS class or classes that will be applied to the element. Example: "cssClass:'button remove'".</li> <li>css (object): Object, which contains the names and values of CSS properties. Example: "css:{'width':'100px', 'height':'50px'}".</li> <li>properties (object): Object, which contains the names and values of element attributes. Example: "properties:{'title':'Hello', 'id':'helloId'}" </li> <li>events (object): Object, which contains the callbacks of events. Each object property has the following parameters:<br /> <ul> <li>Property name - event name (Example: "click", "change", "mouseover" etc ).</li> <li>Property value - event callback OR object - {callback:callback, data: Object, that contains additional data that will be passed to the callback}.</li> </ul> Example:"events:{'click':function(){console.log('click');}, 'change':{callback:function(){console.log('change');}, data:{x:11} } }". </li> <li>states (object): <b>Important:</b> This value will be ignored - see remarks.</li> <li>title (string): Shortcut for 'title' attribute of element (equals - "properties:{'title':'some title'}"). <b>Important:</b> If 'states' is defined and active state [see="WebUiElementJS.get_ActiveState"] has title, the UI element will have title of active state. </li> <li>id (string): Shortcut for 'id' attribute of element (equals - "properties:{'id':'elementId'}").</li> <li>onClick (object): Shortcut for 'click' event callback.</li> <li>onChange (object): Shortcut for 'change' event callback.</li> <li>localizationId (string): Unique localization ID.</li> </ul>
     */
    constructor(settings: object);

    // METHODS

    /**
     * Updates the UI of this panel from settings of web document editor.
     */
    updateUI(): void;

    /**
     * Applies the UI settings to the settings of web document editor.
     */
    applyUI(): void;

    /**
     * Returns array of nested UI elements.
     */
    getNestedElements(): Vintasoft.Imaging.UI.UIElements.WebUiElementJS[];

  }

  /**
   * A web UI panel that allows to view and edit settings for indentation of document paragraph.
   */
  class WebUiDocumentParagraphIndentationSettingsPanelJS extends Vintasoft.Imaging.UI.UIElements.WebUiElementContainerJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebUiDocumentParagraphIndentationSettingsPanelJS"] class.
     * @param settings The settings of panel. The settings parameter has the following properties: <br/> <ul> <li>cssClass (string): CSS class or classes that will be applied to the element. Example: "cssClass:'button remove'".</li> <li>css (object): Object, which contains the names and values of CSS properties. Example: "css:{'width':'100px', 'height':'50px'}".</li> <li>properties (object): Object, which contains the names and values of element attributes. Example: "properties:{'title':'Hello', 'id':'helloId'}" </li> <li>events (object): Object, which contains the callbacks of events. Each object property has the following parameters:<br /> <ul> <li>Property name - event name (Example: "click", "change", "mouseover" etc ).</li> <li>Property value - event callback OR object - {callback:callback, data: Object, that contains additional data that will be passed to the callback}.</li> </ul> Example:"events:{'click':function(){console.log('click');}, 'change':{callback:function(){console.log('change');}, data:{x:11} } }". </li> <li>states (object): <b>Important:</b> This value will be ignored - see remarks.</li> <li>title (string): Shortcut for 'title' attribute of element (equals - "properties:{'title':'some title'}"). <b>Important:</b> If 'states' is defined and active state [see="WebUiElementJS.get_ActiveState"] has title, the UI element will have title of active state. </li> <li>id (string): Shortcut for 'id' attribute of element (equals - "properties:{'id':'elementId'}").</li> <li>onClick (object): Shortcut for 'click' event callback.</li> <li>onChange (object): Shortcut for 'change' event callback.</li> <li>localizationId (string): Unique localization ID.</li> </ul>
     */
    constructor(settings: object);

    // METHODS

    /**
     * Returns array of nested UI elements.
     */
    getNestedElements(): Vintasoft.Imaging.UI.UIElements.WebUiElementJS[];

    /**
     * Updates the UI of this panel from settings of web document editor.
     * @param paragraphProperties The document paragraph properties.
     */
    updateUI(paragraphProperties: Vintasoft.Imaging.Office.UI.WebDocumentParagraphPropertiesJS): void;

    /**
     * Applies the UI settings to the settings of web document editor.
     * @param paragraphProperties The document paragraph properties.
     */
    applyUI(paragraphProperties: Vintasoft.Imaging.Office.UI.WebDocumentParagraphPropertiesJS): void;

  }

  /**
   * A web UI panel that allows to view and edit settings for line spacing of document paragraph.
   */
  class WebUiDocumentParagraphLineSpacingSettingsPanelJS extends Vintasoft.Imaging.UI.UIElements.WebUiElementContainerJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebUiDocumentParagraphLineSpacingSettingsPanelJS"] class.
     * @param settings The settings of panel. The settings parameter has the following properties: <br/> <ul> <li>cssClass (string): CSS class or classes that will be applied to the element. Example: "cssClass:'button remove'".</li> <li>css (object): Object, which contains the names and values of CSS properties. Example: "css:{'width':'100px', 'height':'50px'}".</li> <li>properties (object): Object, which contains the names and values of element attributes. Example: "properties:{'title':'Hello', 'id':'helloId'}" </li> <li>events (object): Object, which contains the callbacks of events. Each object property has the following parameters:<br /> <ul> <li>Property name - event name (Example: "click", "change", "mouseover" etc ).</li> <li>Property value - event callback OR object - {callback:callback, data: Object, that contains additional data that will be passed to the callback}.</li> </ul> Example:"events:{'click':function(){console.log('click');}, 'change':{callback:function(){console.log('change');}, data:{x:11} } }". </li> <li>states (object): <b>Important:</b> This value will be ignored - see remarks.</li> <li>title (string): Shortcut for 'title' attribute of element (equals - "properties:{'title':'some title'}"). <b>Important:</b> If 'states' is defined and active state [see="WebUiElementJS.get_ActiveState"] has title, the UI element will have title of active state. </li> <li>id (string): Shortcut for 'id' attribute of element (equals - "properties:{'id':'elementId'}").</li> <li>onClick (object): Shortcut for 'click' event callback.</li> <li>onChange (object): Shortcut for 'change' event callback.</li> <li>localizationId (string): Unique localization ID.</li> </ul>
     */
    constructor(settings: object);

    // METHODS

    /**
     * Returns array of nested UI elements.
     */
    getNestedElements(): Vintasoft.Imaging.UI.UIElements.WebUiElementJS[];

    /**
     * Updates the UI of this panel from settings of web document editor.
     * @param paragraphProperties The document paragraph properties.
     */
    updateUI(paragraphProperties: Vintasoft.Imaging.Office.UI.WebDocumentParagraphPropertiesJS): void;

    /**
     * Applies the UI settings to the settings of web document editor.
     * @param paragraphProperties The document paragraph properties.
     */
    applyUI(paragraphProperties: Vintasoft.Imaging.Office.UI.WebDocumentParagraphPropertiesJS): void;

  }

  /**
   * A web UI panel that allows to view and edit the pagination settings for document paragraph.
   */
  class WebUiDocumentParagraphPaginationSettingsPanelJS extends Vintasoft.Imaging.UI.UIElements.WebUiElementContainerJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebUiDocumentParagraphPaginationSettingsPanelJS"] class.
     * @param settings The settings of panel. The settings parameter has the following properties: <br/> <ul> <li>cssClass (string): CSS class or classes that will be applied to the element. Example: "cssClass:'button remove'".</li> <li>css (object): Object, which contains the names and values of CSS properties. Example: "css:{'width':'100px', 'height':'50px'}".</li> <li>properties (object): Object, which contains the names and values of element attributes. Example: "properties:{'title':'Hello', 'id':'helloId'}" </li> <li>events (object): Object, which contains the callbacks of events. Each object property has the following parameters:<br /> <ul> <li>Property name - event name (Example: "click", "change", "mouseover" etc ).</li> <li>Property value - event callback OR object - {callback:callback, data: Object, that contains additional data that will be passed to the callback}.</li> </ul> Example:"events:{'click':function(){console.log('click');}, 'change':{callback:function(){console.log('change');}, data:{x:11} } }". </li> <li>states (object): <b>Important:</b> This value will be ignored - see remarks.</li> <li>title (string): Shortcut for 'title' attribute of element (equals - "properties:{'title':'some title'}"). <b>Important:</b> If 'states' is defined and active state [see="WebUiElementJS.get_ActiveState"] has title, the UI element will have title of active state. </li> <li>id (string): Shortcut for 'id' attribute of element (equals - "properties:{'id':'elementId'}").</li> <li>onClick (object): Shortcut for 'click' event callback.</li> <li>onChange (object): Shortcut for 'change' event callback.</li> <li>localizationId (string): Unique localization ID.</li> </ul>
     */
    constructor(settings: object);

    // METHODS

    /**
     * Returns array of nested UI elements.
     */
    getNestedElements(): Vintasoft.Imaging.UI.UIElements.WebUiElementJS[];

    /**
     * Updates the UI of this panel from settings of web document editor.
     * @param paragraphProperties The document paragraph properties.
     */
    updateUI(paragraphProperties: Vintasoft.Imaging.Office.UI.WebDocumentParagraphPropertiesJS): void;

    /**
     * Applies the UI settings to the settings of web document editor.
     * @param paragraphProperties The document paragraph properties.
     */
    applyUI(paragraphProperties: Vintasoft.Imaging.Office.UI.WebDocumentParagraphPropertiesJS): void;

  }

  /**
   * A web UI panel that allows to select the style for bulleted list on a document page.
   */
  class WebUiDocumentBulletedListStylesPanelJS extends Vintasoft.Imaging.UI.UIElements.WebUiElementContainerJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebUiDocumentBulletedListStylesPanelJS"] class.
     * @param settings The settings of panel. The settings parameter has the following properties: <br/> <ul> <li>cssClass (string): CSS class or classes that will be applied to the element. Example: "cssClass:'button remove'".</li> <li>css (object): Object, which contains the names and values of CSS properties. Example: "css:{'width':'100px', 'height':'50px'}".</li> <li>properties (object): Object, which contains the names and values of element attributes. Example: "properties:{'title':'Hello', 'id':'helloId'}" </li> <li>events (object): Object, which contains the callbacks of events. Each object property has the following parameters:<br /> <ul> <li>Property name - event name (Example: "click", "change", "mouseover" etc ).</li> <li>Property value - event callback OR object - {callback:callback, data: Object, that contains additional data that will be passed to the callback}.</li> </ul> Example:"events:{'click':function(){console.log('click');}, 'change':{callback:function(){console.log('change');}, data:{x:11} } }". </li> <li>states (object): <b>Important:</b> This value will be ignored - see remarks.</li> <li>title (string): Shortcut for 'title' attribute of element (equals - "properties:{'title':'some title'}"). <b>Important:</b> If 'states' is defined and active state [see="WebUiElementJS.get_ActiveState"] has title, the UI element will have title of active state. </li> <li>id (string): Shortcut for 'id' attribute of element (equals - "properties:{'id':'elementId'}").</li> <li>onClick (object): Shortcut for 'click' event callback.</li> <li>onChange (object): Shortcut for 'change' event callback.</li> <li>localizationId (string): Unique localization ID.</li> </ul>
     */
    constructor(settings: object);

    // METHODS

    /**
     * Returns array of nested UI elements.
     */
    getNestedElements(): Vintasoft.Imaging.UI.UIElements.WebUiElementJS[];

    /**
     * Updates the UI of this panel from settings of web document editor.
     */
    updateUI(): void;

  }

  /**
   * A web UI panel that allows to select the style for numbered list on a document page.
   */
  class WebUiDocumentNumberedListStylesPanelJS extends Vintasoft.Imaging.UI.UIElements.WebUiElementContainerJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebUiDocumentNumberedListStylesPanelJS"] class.
     * @param settings The settings of panel. The settings parameter has the following properties: <br/> <ul> <li>cssClass (string): CSS class or classes that will be applied to the element. Example: "cssClass:'button remove'".</li> <li>css (object): Object, which contains the names and values of CSS properties. Example: "css:{'width':'100px', 'height':'50px'}".</li> <li>properties (object): Object, which contains the names and values of element attributes. Example: "properties:{'title':'Hello', 'id':'helloId'}" </li> <li>events (object): Object, which contains the callbacks of events. Each object property has the following parameters:<br /> <ul> <li>Property name - event name (Example: "click", "change", "mouseover" etc ).</li> <li>Property value - event callback OR object - {callback:callback, data: Object, that contains additional data that will be passed to the callback}.</li> </ul> Example:"events:{'click':function(){console.log('click');}, 'change':{callback:function(){console.log('change');}, data:{x:11} } }". </li> <li>states (object): <b>Important:</b> This value will be ignored - see remarks.</li> <li>title (string): Shortcut for 'title' attribute of element (equals - "properties:{'title':'some title'}"). <b>Important:</b> If 'states' is defined and active state [see="WebUiElementJS.get_ActiveState"] has title, the UI element will have title of active state. </li> <li>id (string): Shortcut for 'id' attribute of element (equals - "properties:{'id':'elementId'}").</li> <li>onClick (object): Shortcut for 'click' event callback.</li> <li>onChange (object): Shortcut for 'change' event callback.</li> <li>localizationId (string): Unique localization ID.</li> </ul>
     */
    constructor(settings: object);

    // METHODS

    /**
     * Returns array of nested UI elements.
     */
    getNestedElements(): Vintasoft.Imaging.UI.UIElements.WebUiElementJS[];

    /**
     * Updates the UI of this panel from settings of web document editor.
     */
    updateUI(): void;

  }

  /**
   * A web UI panel that allows to view and edit information about document.
   */
  class WebUiDocumentInfoPanelJS extends Vintasoft.Imaging.UI.UIElements.WebUiElementContainerJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebUiDocumentInfoPanelJS"] class.
     * @param settings The settings of panel. The settings parameter has the following properties: <br/> <ul> <li>cssClass (string): CSS class or classes that will be applied to the element. Example: "cssClass:'button remove'".</li> <li>css (object): Object, which contains the names and values of CSS properties. Example: "css:{'width':'100px', 'height':'50px'}".</li> <li>properties (object): Object, which contains the names and values of element attributes. Example: "properties:{'title':'Hello', 'id':'helloId'}" </li> <li>events (object): Object, which contains the callbacks of events. Each object property has the following parameters:<br /> <ul> <li>Property name - event name (Example: "click", "change", "mouseover" etc ).</li> <li>Property value - event callback OR object - {callback:callback, data: Object, that contains additional data that will be passed to the callback}.</li> </ul> Example:"events:{'click':function(){console.log('click');}, 'change':{callback:function(){console.log('change');}, data:{x:11} } }". </li> <li>states (object): <b>Important:</b> This value will be ignored - see remarks.</li> <li>title (string): Shortcut for 'title' attribute of element (equals - "properties:{'title':'some title'}"). <b>Important:</b> If 'states' is defined and active state [see="WebUiElementJS.get_ActiveState"] has title, the UI element will have title of active state. </li> <li>id (string): Shortcut for 'id' attribute of element (equals - "properties:{'id':'elementId'}").</li> <li>onClick (object): Shortcut for 'click' event callback.</li> <li>onChange (object): Shortcut for 'change' event callback.</li> <li>localizationId (string): Unique localization ID.</li> </ul>
     */
    constructor(settings: object);

    // METHODS

    /**
     * Returns array of nested UI elements.
     */
    getNestedElements(): Vintasoft.Imaging.UI.UIElements.WebUiElementJS[];

    /**
     * Updates the UI of this panel from settings of web document editor.
     */
    updateUI(): void;

    /**
     * Applies the UI settings to the settings of web document editor.
     */
    applyUI(): void;

  }

  /**
   * A web UI panel that allows to view and edit settings of document editor.
   */
  class WebUiDocumentEditorSettingsPanelJS extends Vintasoft.Imaging.UI.UIElements.WebUiElementContainerJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebUiDocumentEditorSettingsPanelJS"] class.
     * @param settings The settings of panel. The settings parameter has the following properties: <br/> <ul> <li>cssClass (string): CSS class or classes that will be applied to the element. Example: "cssClass:'button remove'".</li> <li>css (object): Object, which contains the names and values of CSS properties. Example: "css:{'width':'100px', 'height':'50px'}".</li> <li>properties (object): Object, which contains the names and values of element attributes. Example: "properties:{'title':'Hello', 'id':'helloId'}" </li> <li>events (object): Object, which contains the callbacks of events. Each object property has the following parameters:<br /> <ul> <li>Property name - event name (Example: "click", "change", "mouseover" etc ).</li> <li>Property value - event callback OR object - {callback:callback, data: Object, that contains additional data that will be passed to the callback}.</li> </ul> Example:"events:{'click':function(){console.log('click');}, 'change':{callback:function(){console.log('change');}, data:{x:11} } }". </li> <li>states (object): <b>Important:</b> This value will be ignored - see remarks.</li> <li>title (string): Shortcut for 'title' attribute of element (equals - "properties:{'title':'some title'}"). <b>Important:</b> If 'states' is defined and active state [see="WebUiElementJS.get_ActiveState"] has title, the UI element will have title of active state. </li> <li>id (string): Shortcut for 'id' attribute of element (equals - "properties:{'id':'elementId'}").</li> <li>onClick (object): Shortcut for 'click' event callback.</li> <li>onChange (object): Shortcut for 'change' event callback.</li> <li>localizationId (string): Unique localization ID.</li> </ul>
     */
    constructor(settings: object);

    // METHODS

    /**
     * Returns array of nested UI elements.
     */
    getNestedElements(): Vintasoft.Imaging.UI.UIElements.WebUiElementJS[];

    /**
     * Updates the UI of this panel from settings of web document editor.
     */
    updateUI(): void;

    /**
     * Applies the UI settings to the settings of web document editor.
     */
    applyUI(): void;

  }

  /**
   * A web UI panel that allows to view and change the page view settings of document editor.
   */
  class WebUiDocumentEditorViewSettingsPanelJS extends Vintasoft.Imaging.UI.UIElements.WebUiElementContainerJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebUiDocumentEditorViewSettingsPanelJS"] class.
     * @param settings The settings of panel. The settings parameter has the following properties: <br/> <ul> <li>cssClass (string): CSS class or classes that will be applied to the element. Example: "cssClass:'button remove'".</li> <li>css (object): Object, which contains the names and values of CSS properties. Example: "css:{'width':'100px', 'height':'50px'}".</li> <li>properties (object): Object, which contains the names and values of element attributes. Example: "properties:{'title':'Hello', 'id':'helloId'}" </li> <li>events (object): Object, which contains the callbacks of events. Each object property has the following parameters:<br /> <ul> <li>Property name - event name (Example: "click", "change", "mouseover" etc ).</li> <li>Property value - event callback OR object - {callback:callback, data: Object, that contains additional data that will be passed to the callback}.</li> </ul> Example:"events:{'click':function(){console.log('click');}, 'change':{callback:function(){console.log('change');}, data:{x:11} } }". </li> <li>states (object): <b>Important:</b> This value will be ignored - see remarks.</li> <li>title (string): Shortcut for 'title' attribute of element (equals - "properties:{'title':'some title'}"). <b>Important:</b> If 'states' is defined and active state [see="WebUiElementJS.get_ActiveState"] has title, the UI element will have title of active state. </li> <li>id (string): Shortcut for 'id' attribute of element (equals - "properties:{'id':'elementId'}").</li> <li>onClick (object): Shortcut for 'click' event callback.</li> <li>onChange (object): Shortcut for 'change' event callback.</li> <li>localizationId (string): Unique localization ID.</li> </ul>
     */
    constructor(settings: object);

    // METHODS

    /**
     * Returns array of nested UI elements.
     */
    getNestedElements(): Vintasoft.Imaging.UI.UIElements.WebUiElementJS[];

    /**
     * Updates the UI of this panel from settings of web document editor.
     */
    updateUI(): void;

    /**
     * Applies the UI settings to the settings of web document editor.
     */
    applyUI(): void;

  }

  /**
   * A web UI panel that allows to view and edit settings of document page.
   */
  class WebUiDocumentPageSettingsPanelJS extends Vintasoft.Imaging.UI.UIElements.WebUiElementContainerJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebUiDocumentPageSettingsPanelJS"] class.
     * @param settings The settings of panel. The settings parameter has the following properties: <br/> <ul> <li>cssClass (string): CSS class or classes that will be applied to the element. Example: "cssClass:'button remove'".</li> <li>css (object): Object, which contains the names and values of CSS properties. Example: "css:{'width':'100px', 'height':'50px'}".</li> <li>properties (object): Object, which contains the names and values of element attributes. Example: "properties:{'title':'Hello', 'id':'helloId'}" </li> <li>events (object): Object, which contains the callbacks of events. Each object property has the following parameters:<br /> <ul> <li>Property name - event name (Example: "click", "change", "mouseover" etc ).</li> <li>Property value - event callback OR object - {callback:callback, data: Object, that contains additional data that will be passed to the callback}.</li> </ul> Example:"events:{'click':function(){console.log('click');}, 'change':{callback:function(){console.log('change');}, data:{x:11} } }". </li> <li>states (object): <b>Important:</b> This value will be ignored - see remarks.</li> <li>title (string): Shortcut for 'title' attribute of element (equals - "properties:{'title':'some title'}"). <b>Important:</b> If 'states' is defined and active state [see="WebUiElementJS.get_ActiveState"] has title, the UI element will have title of active state. </li> <li>id (string): Shortcut for 'id' attribute of element (equals - "properties:{'id':'elementId'}").</li> <li>onClick (object): Shortcut for 'click' event callback.</li> <li>onChange (object): Shortcut for 'change' event callback.</li> <li>localizationId (string): Unique localization ID.</li> </ul>
     */
    constructor(settings: object);

    // METHODS

    /**
     * Returns array of nested UI elements.
     */
    getNestedElements(): Vintasoft.Imaging.UI.UIElements.WebUiElementJS[];

    /**
     * Updates the UI of this panel from settings of web document editor.
     */
    updateUI(): void;

    /**
     * Applies the UI settings to the settings of web document editor.
     */
    applyUI(): void;

  }

  /**
   * A web UI panel that allows to view and edit the columns settings of document page.
   */
  class WebUiDocumentPageColumnsSettingsPanelJS extends Vintasoft.Imaging.UI.UIElements.WebUiElementContainerJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebUiDocumentPageColumnsSettingsPanelJS"] class.
     * @param settings The settings of panel. The settings parameter has the following properties: <br/> <ul> <li>cssClass (string): CSS class or classes that will be applied to the element. Example: "cssClass:'button remove'".</li> <li>css (object): Object, which contains the names and values of CSS properties. Example: "css:{'width':'100px', 'height':'50px'}".</li> <li>properties (object): Object, which contains the names and values of element attributes. Example: "properties:{'title':'Hello', 'id':'helloId'}" </li> <li>events (object): Object, which contains the callbacks of events. Each object property has the following parameters:<br /> <ul> <li>Property name - event name (Example: "click", "change", "mouseover" etc ).</li> <li>Property value - event callback OR object - {callback:callback, data: Object, that contains additional data that will be passed to the callback}.</li> </ul> Example:"events:{'click':function(){console.log('click');}, 'change':{callback:function(){console.log('change');}, data:{x:11} } }". </li> <li>states (object): <b>Important:</b> This value will be ignored - see remarks.</li> <li>title (string): Shortcut for 'title' attribute of element (equals - "properties:{'title':'some title'}"). <b>Important:</b> If 'states' is defined and active state [see="WebUiElementJS.get_ActiveState"] has title, the UI element will have title of active state. </li> <li>id (string): Shortcut for 'id' attribute of element (equals - "properties:{'id':'elementId'}").</li> <li>onClick (object): Shortcut for 'click' event callback.</li> <li>onChange (object): Shortcut for 'change' event callback.</li> <li>localizationId (string): Unique localization ID.</li> </ul>
     */
    constructor(settings: object);

    // METHODS

    /**
     * Returns array of nested UI elements.
     */
    getNestedElements(): Vintasoft.Imaging.UI.UIElements.WebUiElementJS[];

    /**
     * Updates the UI of this panel from settings of web document editor.
     */
    updateUI(): void;

    /**
     * Applies the UI settings to the settings of web document editor.
     */
    applyUI(): void;

  }

  /**
   * A web UI panel that allows to print pages of DOCX document, which is shown in web document editor.
   */
  class WebUiPrintDocxDocumentSettingsPanelJS extends Vintasoft.Imaging.UI.UIElements.WebUiElementContainerJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebUiPrintDocxDocumentSettingsPanelJS"] class.
     * @param settings The settings of panel. The settings parameter has the following properties: <br/> <ul> <li>cssClass (string): CSS class or classes that will be applied to the element. Example: "cssClass:'button remove'".</li> <li>css (object): Object, which contains the names and values of CSS properties. Example: "css:{'width':'100px', 'height':'50px'}".</li> <li>properties (object): Object, which contains the names and values of element attributes. Example: "properties:{'title':'Hello', 'id':'helloId'}" </li> <li>events (object): Object, which contains the callbacks of events. Each object property has the following parameters:<br /> <ul> <li>Property name - event name (Example: "click", "change", "mouseover" etc ).</li> <li>Property value - event callback OR object - {callback:callback, data: Object, that contains additional data that will be passed to the callback}.</li> </ul> Example:"events:{'click':function(){console.log('click');}, 'change':{callback:function(){console.log('change');}, data:{x:11} } }". </li> <li>states (object): An instance of [see="WebUiElementStateCollectionJS"] class.</li> <li>title (string): Shortcut for 'title' attribute of element (equals - "properties:{'title':'some title'}"). <b>Important:</b> If 'states' is defined and active state [see="WebUiElementJS.get_ActiveState"] has title, the UI element will have title of active state. </li> <li>id (string): Shortcut for 'id' attribute of element (equals - "properties:{'id':'elementId'}").</li> <li>onClick (object): Shortcut for 'click' event callback.</li> <li>onChange (object): Shortcut for 'change' event callback.</li> <li>localizationId (string): Unique localization ID.</li> </ul>
     */
    constructor(settings: object);

    // METHODS

    /**
     * Returns array of nested UI elements.
     */
    getNestedElements(): Vintasoft.Imaging.UI.UIElements.WebUiElementJS[];

    /**
     * Prints images.
     */
    print(): void;

    /**
     * Aborts printing.
     */
    abort(): void;

  }

}

