﻿// Copyright 2014-2025 VintaSoft LLC. All rights reserved.
// This software is protected by International copyright laws.
// Any copying, duplication, deployment, redistribution, modification or other
// disposition hereof is STRICTLY PROHIBITED without an express written license
// granted by VintaSoft LLC. This notice may not be removed or otherwise
// altered under any circumstances.
// This code may NOT be used apart of the VintaSoft product.
var Vintasoft;
(function(c){function a(a,b,f){a=E[a];for(var l="",C=b;C<b+f;C++)l+=String.fromCharCode(a[C]^255);return l}if(void 0==c.Shared)throw Error("Vintasoft.Shared is not found.");if("4.4.0.1"!==c.version)throw Error("Wrong script version.");if(void 0==c.Imaging)throw Error("Vintasoft.Imaging is not found.");if("14.0.5.1"!==c.Imaging.version)throw Error("Wrong version of Vintasoft.Imaging script.");if(void 0==c.Imaging.Office)throw Error("Vintasoft.Imaging.Office is not found.");if("5.0.5.1"!==c.Imaging.Office.version)throw Error("Wrong version of Vintasoft.Imaging.Office script.");
var b=c.Shared,F=c.Imaging.UI,m=F.Dialogs,f=F.UIElements,E=[];E.push([136,144,141,148,140,151,154,154,139,178,144,137,154,155,150,145,150,139,150,158,147,150,133,154,155,185,150,145,155,223,171,154,135,139,136,144,141,148,140,151,154,154,139,173,154,145,158,146,154,155,157,139,145,223,157,139,145,210,155,154,153,158,138,147,139,155,154,153,150,145,154,155,177,158,146,154,178,158,145,158,152,154,141,187,150,158,147,144,152,205,202,207,143,135,137,140,140,155,154,210,140,154,147,154,156,139,185,138,
145,156,139,150,144,145,187,150,158,147,144,152,210,139,150,139,147,154,182,145,140,154,141,139,223,185,138,145,156,139,150,144,145,154,155,150,139,188,151,158,141,139,187,150,158,147,144,152,186,155,150,139,223,156,144,146,146,154,145,139,137,140,140,155,154,210,155,150,158,147,144,152,210,156,147,144,140,154,189,138,139,139,144,145,153,150,145,155,177,154,135,139,189,138,139,139,144,145,156,144,146,146,154,145,139,188,151,158,145,152,154,155,186,155,150,139,223,188,151,158,141,139,158,155,155,187,
154,153,150,145,154,155,177,158,146,154,187,150,158,147,144,152,137,140,140,155,154,210,158,155,155,187,154,153,150,145,154,155,177,158,146,154,187,150,158,147,144,152,210,158,155,155,171,150,139,147,154,137,140,155,137,210,155,150,158,147,144,152,186,155,150,139,223,183,134,143,154,141,147,150,145,148,172,154,147,154,156,139,223,155,154,153,150,145,154,155,223,145,158,146,154,139,154,135,139,172,154,158,141,156,151,185,150,145,150,140,151,154,155,137,140,140,155,154,210,141,154,145,158,146,154,168,
144,141,148,140,151,154,154,139,187,150,158,147,144,152,210,139,150,139,147,154,137,140,140,155,154,210,153,150,145,155,171,154,135,139,187,150,158,147,144,152,210,139,150,139,147,154,140,154,147,154,156,139,185,138,145,156,139,150,144,145,187,150,158,147,144,152,137,140,140,155,154,210,155,150,158,147,144,152,210,156,158,145,156,154,147,189,138,139,139,144,145,137,140,140,155,154,210,150,145,140,154,141,139,188,151,158,141,139,175,158,145,154,147,176,180,137,140,140,155,154,210,140,154,147,154,156,
139,185,138,145,156,139,150,144,145,175,158,145,154,147,137,140,140,155,154,210,154,155,150,139,183,134,143,154,141,147,150,145,148,187,150,158,147,144,152,210,158,155,155,171,150,139,147,154,137,140,140,155,154,210,154,155,150,139,188,144,146,146,154,145,139,187,150,158,147,144,152,210,139,150,139,147,154,144,148,189,138,139,139,144,145,137,140,140,155,154,210,156,154,147,147,177,138,146,157,154,141,185,144,141,146,158,139,187,150,158,147,144,152,210,139,150,139,147,154,137,140,140,155,154,210,155,
154,153,150,145,154,155,177,158,146,154,178,158,145,158,152,154,141,175,158,145,154,147,137,140,140,155,154,210,153,150,145,155,171,154,135,139,175,158,145,154,147,215,214,141,154,145,158,146,154,168,144,141,148,140,151,154,154,139,187,150,158,147,144,152,137,140,140,155,154,210,146,144,137,154,168,144,141,148,140,151,154,154,139,175,158,145,154,147,137,140,140,155,154,210,150,145,140,154,141,139,188,151,158,141,139,187,150,158,147,144,152,210,139,150,139,147,154,156,147,144,140,154,189,138,139,139,
144,145,150,145,140,154,141,139,188,144,146,146,154,145,139,187,150,158,147,144,152,137,140,140,155,154,210,156,154,147,147,177,138,146,157,154,141,185,144,141,146,158,139,175,158,145,154,147,153,150,145,155,171,154,135,139,179,158,157,154,147,182,145,140,154,141,139,223,188,151,158,141,139,137,140,138,150,210,155,150,158,147,144,152,188,144,145,139,154,145,139,190,155,155,223,183,134,143,154,141,147,150,145,148,156,144,146,146,154,145,139,186,155,150,139,187,150,158,147,144,152,137,140,140,155,154,
210,154,155,150,139,188,151,158,141,139,187,150,158,147,144,152,210,139,150,139,147,154,137,140,140,155,154,210,155,154,153,150,145,154,155,177,158,146,154,178,158,145,158,152,154,141,187,150,158,147,144,152,210,139,150,139,147,154,178,144,137,154,223,168,144,141,148,140,151,154,154,139,137,140,140,155,154,210,155,150,158,147,144,152,210,144,148,189,138,139,139,144,145,156,158,145,156,154,147,189,138,139,139,144,145,137,140,140,155,154,210,155,154,153,150,145,154,155,177,158,146,154,179,150,140,139,
187,150,158,147,144,152,210,139,150,139,147,154,156,151,158,141,139,186,155,150,139,154,155,188,154,147,147,223,185,144,141,146,158,139,137,140,140,155,154,210,156,144,146,146,154,145,139,175,158,145,154,147,153,150,145,155,171,154,135,139,187,150,158,147,144,152,150,145,140,154,141,139,188,151,158,141,139,187,150,158,147,144,152,173,154,145,158,146,154,223,168,144,141,148,140,151,154,154,139,137,140,140,155,154,210,154,155,150,139,187,154,153,150,145,154,155,177,158,146,154,175,158,145,154,147,185,
150,145,155,223,177,154,135,139,190,155,155,223,155,154,153,150,145,154,155,223,145,158,146,154,146,144,155,158,147,210,139,150,139,147,154,137,140,140,155,154,210,154,155,150,139,183,134,143,154,141,147,150,145,148,187,150,158,147,144,152,210,154,155,150,139,171,150,139,147,154,157,139,145,223,157,139,145,210,143,141,150,146,158,141,134,140,154,139,188,154,147,147,177,138,146,157,154,141,185,144,141,146,158,139,187,150,158,147,144,152,188,147,144,140,154,140,154,147,154,156,139,187,154,153,150,145,
154,155,177,158,146,154,187,150,158,147,144,152,154,155,150,139,183,134,143,154,141,147,150,145,148,187,150,158,147,144,152,137,140,140,155,154,210,150,145,140,154,141,139,188,144,146,146,154,145,139,187,150,158,147,144,152,210,139,150,139,147,154,167,179,172,167,223,155,144,156,138,146,154,145,139,223,150,140,223,145,144,139,223,153,144,138,145,155,209,187,154,153,150,145,154,155,223,145,158,146,154,223,146,158,145,158,152,154,141,137,140,140,155,154,210,153,150,145,155,171,154,135,139,187,150,158,
147,144,152,210,153,150,145,155,177,154,135,139,189,138,139,139,144,145,154,141,141,144,141,176,156,156,138,141,154,155,146,144,137,154,168,144,141,148,140,151,154,154,139,187,150,158,147,144,152,188,158,145,156,154,147,182,145,140,154,141,139,223,156,144,146,146,154,145,139,137,140,140,155,154,210,146,144,137,154,168,144,141,148,140,151,154,154,139,187,150,158,147,144,152,210,139,150,139,147,154]);c.Imaging=c.Imaging||(c.Imaging={});(function(c){c.Office=c.Office||(c.Office={});(function(c){c.UI=
c.UI||(c.UI={});(function(c){var l=c.Panels;c.Dialogs=c.Dialogs||(c.Dialogs={});(function(c){function n(b){if(null==b.get_RootControl().get_SpreadsheetEditorControl()._22445._28067()){var c=Error(a(0,1304,27));b._12368(a(0,1386,12),{error:c});return!1}return!0}var p=function(){var c=p.superclass;p.prototype.show=function(){n(this)&&(this._1064.update(),c.show.call(this))};b.VintasoftLocalizationJS.setStringConstant(a(0,347,33),a(0,1073,16));b.VintasoftLocalizationJS.setStringConstant(a(0,936,21),
a(0,473,2));b.VintasoftLocalizationJS.setStringConstant(a(0,426,25),a(0,1417,6));var d=new f.WebUiLabelElementJS({text:b.VintasoftLocalizationJS.getStringConstant(a(0,347,33)),cssClass:a(0,1140,11)});d.set_HeaderIndex(5);var e=new l.WebUiRenameWorksheetPanelJS({cssClass:a(0,811,18)});this._1064=e;b.suf23(e,a(0,34,16),{a:this},function(a,b){var c=a.data.a,D=a.type;c.hide();c._12368(D,b)});b.suf23(e,a(0,1386,12),{a:this},function(a,b){a.data.a._12368(a.type,b)});var g=new f.WebUiButtonInputJS({cssClass:a(0,
1186,15),value:b.VintasoftLocalizationJS.getStringConstant(a(0,936,21)),localizationId:a(0,563,8),onClick:{callback:function(a,b){a.data.a._1064.renameWorksheet()},data:{a:this}}}),h=new f.WebUiButtonInputJS({cssClass:a(0,50,15),value:b.VintasoftLocalizationJS.getStringConstant(a(0,426,25)),localizationId:a(0,957,12),onClick:{callback:function(a,b){a.data.a.hide()},data:{a:this}}}),k={localizationId:a(0,655,21)};c.constructor.call(this,[d],[e],[g,h],k)};b.extend(p,m.WebUiDialogJS);var q=function(){var c=
q.superclass;q.prototype.show=function(){n(this)&&(this._32834.update(),c.show.call(this))};b.VintasoftLocalizationJS.setStringConstant(a(0,1437,31),a(0,922,14));b.VintasoftLocalizationJS.setStringConstant(a(0,936,21),a(0,473,2));b.VintasoftLocalizationJS.setStringConstant(a(0,426,25),a(0,1417,6));var d=new f.WebUiLabelElementJS({text:b.VintasoftLocalizationJS.getStringConstant(a(0,1437,31)),cssClass:a(0,1140,11)});d.set_HeaderIndex(5);var e=new l.WebUiMoveWorksheetPanelJS({cssClass:a(0,676,24)});
this._32834=e;b.suf23(e,a(0,0,14),{a:this},function(a,b){var c=a.data.a,D=a.type;c.hide();c._12368(D,b)});b.suf23(e,a(0,1386,12),{a:this},function(a,b){a.data.a._12368(a.type,b)});var g=new f.WebUiButtonInputJS({cssClass:a(0,1186,15),value:b.VintasoftLocalizationJS.getStringConstant(a(0,936,21)),localizationId:a(0,563,8),onClick:{callback:function(a,b){a.data.a._32834.moveWorksheet()},data:{a:this}}}),h=new f.WebUiButtonInputJS({cssClass:a(0,50,15),value:b.VintasoftLocalizationJS.getStringConstant(a(0,
426,25)),localizationId:a(0,957,12),onClick:{callback:function(a,b){a.data.a.hide()},data:{a:this}}}),k={localizationId:a(0,1398,19)};c.constructor.call(this,[d],[e],[g,h],k)};b.extend(q,m.WebUiDialogJS);var r=function(){var c=r.prototype,d=r.superclass;c.textSearchFinished=function(a,b){};c.show=function(){n(this)&&d.show.call(this)};b.VintasoftLocalizationJS.setStringConstant(a(0,380,26),a(0,25,9));b.VintasoftLocalizationJS.setStringConstant(a(0,1351,35),a(0,1115,9));b.VintasoftLocalizationJS.setStringConstant(a(0,
168,24),a(0,1226,5));var e=new f.WebUiLabelElementJS({text:b.VintasoftLocalizationJS.getStringConstant(a(0,380,26)),cssClass:a(0,1140,11),localizationId:a(0,786,13)});e.set_HeaderIndex(5);var g=new l.WebUiFindTextPanelJS({cssClass:a(0,634,19)});b.suf23(g,a(0,329,18),{a:this},function(b,c){b.data.a._12368(a(0,329,18),c)});this._7934=g;var h=new f.WebUiButtonInputJS({cssClass:a(0,1186,15),value:a(0,1115,9),localizationId:a(0,192,14),onClick:{callback:function(a,b){a.data.a._7934.findNext()},data:{a:this}}}),
k=new f.WebUiButtonInputJS({cssClass:a(0,50,15),value:a(0,1226,5),localizationId:a(0,729,11),onClick:{callback:function(a,b){a.data.a.hide()},data:{a:this}}}),G={localizationId:a(0,1042,14)};d.constructor.call(this,[e],[g],[h,k],G);delete c.textSearchFinished};b.extend(r,m.WebUiDialogJS);var s=function(){var c=s.superclass;s.prototype.show=function(){n(this)&&c.show.call(this)};b.VintasoftLocalizationJS.setStringConstant(a(0,94,32),a(0,126,15));b.VintasoftLocalizationJS.setStringConstant(a(0,936,
21),a(0,473,2));b.VintasoftLocalizationJS.setStringConstant(a(0,426,25),a(0,1417,6));var d=new f.WebUiLabelElementJS({text:b.VintasoftLocalizationJS.getStringConstant(a(0,94,32)),cssClass:a(0,1140,11)});d.set_HeaderIndex(5);var e=new l.WebUiSelectFunctionPanelJS({cssClass:a(0,475,25)});this._37034=e;var g=new f.WebUiButtonInputJS({cssClass:a(0,1186,15),value:b.VintasoftLocalizationJS.getStringConstant(a(0,936,21)),localizationId:a(0,563,8),onClick:{callback:function(b,c){var d=b.data.a;d.hide();var e=
d._37034.getSelectedFormula();d.get_RootControl().get_SpreadsheetEditorControl()._22445._1332(e+a(0,653,2))},data:{a:this}}}),h=new f.WebUiButtonInputJS({cssClass:a(0,50,15),value:b.VintasoftLocalizationJS.getStringConstant(a(0,426,25)),localizationId:a(0,957,12),onClick:{callback:function(a,b){var c=a.data.a;c.hide();c.get_RootControl().get_SpreadsheetEditorControl()._22445._32794(!0)},data:{a:this}}}),k={localizationId:a(0,406,20)};c.constructor.call(this,[d],[e],[g,h],k)};b.extend(s,m.WebUiDialogJS);
var t=function(){var c=t.prototype,d=t.superclass;c.show=function(){n(this)&&(this.clear(),d.show.call(this))};c.clear=function(){this._9885.clear()};b.VintasoftLocalizationJS.setStringConstant(a(0,1273,31),a(0,1423,14));b.VintasoftLocalizationJS.setStringConstant(a(0,936,21),a(0,473,2));b.VintasoftLocalizationJS.setStringConstant(a(0,426,25),a(0,1417,6));c=new f.WebUiLabelElementJS({text:b.VintasoftLocalizationJS.getStringConstant(a(0,1273,31)),cssClass:a(0,1140,11)});c.set_HeaderIndex(5);this._9885=
new l.WebUiCommentPanelJS({cssClass:a(0,1024,18)});b.suf23(this._9885,a(0,206,14),{a:this},function(a,b){var c=a.data.a,d=a.type;c.hide();c._12368(d,b)});b.suf23(this._9885,a(0,1386,12),{a:this},function(a,b){a.data.a._12368(a.type,b)});var e=new f.WebUiButtonInputJS({cssClass:a(0,1186,15),value:b.VintasoftLocalizationJS.getStringConstant(a(0,936,21)),localizationId:a(0,563,8),onClick:{callback:function(a,b){a.data.a._9885.insertComment()},data:{a:this}}}),g=new f.WebUiButtonInputJS({cssClass:a(0,
50,15),value:b.VintasoftLocalizationJS.getStringConstant(a(0,426,25)),localizationId:a(0,957,12),onClick:{callback:function(a,b){a.data.a.hide()},data:{a:this}}}),h={cssClass:a(0,285,11),localizationId:a(0,740,19)};d.constructor.call(this,[c],[this._9885],[e,g],h)};b.extend(t,m.WebUiDialogJS);var u=function(){var c=u.prototype,d=u.superclass;c.show=function(){n(this)&&(this.fill(),d.show.call(this))};c.fill=function(){this._9885.fill()};b.VintasoftLocalizationJS.setStringConstant(a(0,534,29),a(0,
156,12));b.VintasoftLocalizationJS.setStringConstant(a(0,936,21),a(0,473,2));b.VintasoftLocalizationJS.setStringConstant(a(0,426,25),a(0,1417,6));c=new f.WebUiLabelElementJS({text:b.VintasoftLocalizationJS.getStringConstant(a(0,534,29)),cssClass:a(0,1140,11)});c.set_HeaderIndex(5);this._9885=new l.WebUiCommentPanelJS({cssClass:a(0,1024,18)});b.suf23(this._9885,a(0,206,14),{a:this},function(a,b){var c=a.data.a,d=a.type;c.hide();c._12368(d,b)});b.suf23(this._9885,a(0,1386,12),{a:this},function(a,b){a.data.a._12368(a.type,
b)});var e=new f.WebUiButtonInputJS({cssClass:a(0,1186,15),value:b.VintasoftLocalizationJS.getStringConstant(a(0,936,21)),localizationId:a(0,563,8),onClick:{callback:function(a,b){a.data.a._9885.editComment()},data:{a:this}}}),g=new f.WebUiButtonInputJS({cssClass:a(0,50,15),value:b.VintasoftLocalizationJS.getStringConstant(a(0,426,25)),localizationId:a(0,957,12),onClick:{callback:function(a,b){a.data.a.hide()},data:{a:this}}}),h={cssClass:a(0,285,11),localizationId:a(0,842,17)};d.constructor.call(this,
[c],[this._9885],[e,g],h)};b.extend(u,m.WebUiDialogJS);var v=function(){var c=v.superclass;v.prototype.show=function(){n(this)&&(this._37079.update(),c.show.call(this))};b.VintasoftLocalizationJS.setStringConstant(a(0,571,34),a(0,1013,11));b.VintasoftLocalizationJS.setStringConstant(a(0,936,21),a(0,473,2));b.VintasoftLocalizationJS.setStringConstant(a(0,426,25),a(0,1417,6));var d=new f.WebUiLabelElementJS({text:b.VintasoftLocalizationJS.getStringConstant(a(0,571,34)),cssClass:a(0,1140,11)});d.set_HeaderIndex(5);
var e=new l.WebUiCellNumberFormatPanelJS({cssClass:a(0,759,27)});this._37079=e;var g=new f.WebUiButtonInputJS({cssClass:a(0,1186,15),value:b.VintasoftLocalizationJS.getStringConstant(a(0,936,21)),localizationId:a(0,563,8),onClick:{callback:function(a,b){var c=a.data.a;c.hide();var d=c._37079.getSelectedFormat();null!=d&&c.get_RootControl().get_SpreadsheetEditorControl()._22445._18115(d)},data:{a:this}}}),h=new f.WebUiButtonInputJS({cssClass:a(0,50,15),value:b.VintasoftLocalizationJS.getStringConstant(a(0,
426,25)),localizationId:a(0,957,12),onClick:{callback:function(a,b){a.data.a.hide()},data:{a:this}}}),k={localizationId:a(0,1201,25)};c.constructor.call(this,[d],[e],[g,h],k)};b.extend(v,m.WebUiDialogJS);var w=function(c){var d=w.prototype,e=w.superclass;d.show=function(){n(this)&&(e.show.call(this),this._27029._27744(),this._37729||(this._37729=!0,this._3238.set_IsEnabled(!1)))};d.addSelectedChart=function(){this._27029.addSelectedChart()};b.VintasoftLocalizationJS.setStringConstant(a(0,700,29),
a(0,799,12));b.VintasoftLocalizationJS.setStringConstant(a(0,936,21),a(0,473,2));b.VintasoftLocalizationJS.setStringConstant(a(0,426,25),a(0,1417,6));this._37729=!1;d=new f.WebUiLabelElementJS({text:b.VintasoftLocalizationJS.getStringConstant(a(0,700,29)),cssClass:a(0,1140,11)});d.set_HeaderIndex(5);this._27029=c=new l.WebUiInsertChartPanelJS({cssClass:a(0,451,22)},c);b.suf23(c,a(0,1386,12),{a:this},function(a,b){var c=a.data.a,d=a.type;c.hide();c._12368(d,b)});var g=new f.WebUiButtonInputJS({cssClass:a(0,
1186,15),value:b.VintasoftLocalizationJS.getStringConstant(a(0,936,21)),localizationId:a(0,563,8),onClick:{callback:function(a,b){var c=a.data.a;c.hide();c.addSelectedChart()},data:{a:this}}});this._3238=g;var h=new f.WebUiButtonInputJS({cssClass:a(0,50,15),value:b.VintasoftLocalizationJS.getStringConstant(a(0,426,25)),localizationId:a(0,957,12),onClick:{callback:function(a,b){a.data.a.hide()},data:{a:this}}});b.suf23(c,a(0,14,11),{a:this},function(a,b){a.data.a._3238.set_IsEnabled(!0)});var k={localizationId:a(0,
1056,17)};e.constructor.call(this,[d],[c],[g,h],k)};b.extend(w,m.WebUiDialogJS);var x=function(){var c=x.superclass;x.prototype.show=function(){n(this)&&(this._4353.update(),c.show.call(this))};b.VintasoftLocalizationJS.setStringConstant(a(0,859,27),a(0,220,10));b.VintasoftLocalizationJS.setStringConstant(a(0,936,21),a(0,473,2));b.VintasoftLocalizationJS.setStringConstant(a(0,426,25),a(0,1417,6));var d=new f.WebUiLabelElementJS({text:b.VintasoftLocalizationJS.getStringConstant(a(0,859,27)),cssClass:a(0,
1140,11)});d.set_HeaderIndex(5);var e=new l.WebUiEditChartPropertiesPanelJS({cssClass:a(0,811,18)});this._4353=e;b.suf23(e,a(0,1002,11),{a:this},function(a,b){var c=a.data.a,d=a.type;c.hide();c._12368(d,b)});b.suf23(e,a(0,1386,12),{a:this},function(a,b){var c=a.data.a,d=a.type;c.hide();c._12368(d,b)});var g=new f.WebUiButtonInputJS({cssClass:a(0,1186,15),value:b.VintasoftLocalizationJS.getStringConstant(a(0,936,21)),localizationId:a(0,563,8),onClick:{callback:function(a,b){a.data.a._4353.editChart()},
data:{a:this}}}),h=new f.WebUiButtonInputJS({cssClass:a(0,50,15),value:b.VintasoftLocalizationJS.getStringConstant(a(0,426,25)),localizationId:a(0,957,12),onClick:{callback:function(a,b){a.data.a.hide()},data:{a:this}}}),k={localizationId:a(0,141,15)};c.constructor.call(this,[d],[e],[g,h],k)};b.extend(x,m.WebUiDialogJS);var y=function(){var c=y.superclass;y.prototype.show=function(){n(this)&&(this._4043.update(this),c.show.call(this))};b.VintasoftLocalizationJS.setStringConstant(a(0,500,34),a(0,829,
13));b.VintasoftLocalizationJS.setStringConstant(a(0,1151,35),a(0,296,14));b.VintasoftLocalizationJS.setStringConstant(a(0,936,21),a(0,473,2));b.VintasoftLocalizationJS.setStringConstant(a(0,426,25),a(0,1417,6));var d=new f.WebUiLabelElementJS({text:b.VintasoftLocalizationJS.getStringConstant(a(0,500,34)),cssClass:a(0,1140,11)});d.set_HeaderIndex(5);this._24428=d;var e=new l.WebUiEditHyperlinkPanelJS({css:{height:a(0,89,5)}});this._4043=e;var g=new f.WebUiButtonInputJS({cssClass:a(0,1186,15),value:b.VintasoftLocalizationJS.getStringConstant(a(0,
936,21)),localizationId:a(0,563,8),onClick:{callback:function(a,b){var c=a.data.a;c.hide();c._4043.addHyperlink()},data:{a:this}}}),h=new f.WebUiButtonInputJS({cssClass:a(0,50,15),value:b.VintasoftLocalizationJS.getStringConstant(a(0,426,25)),localizationId:a(0,957,12),onClick:{callback:function(a,b){a.data.a.hide()},data:{a:this}}}),k={localizationId:a(0,1254,19)};c.constructor.call(this,[d],[e],[g,h],k)};b.extend(y,m.WebUiDialogJS);var z=function(){var c=z.superclass;z.prototype.show=function(){n(this)&&
(this._25876.update(),c.show.call(this))};b.VintasoftLocalizationJS.setStringConstant(a(0,969,33),a(0,310,19));b.VintasoftLocalizationJS.setStringConstant(a(0,936,21),a(0,473,2));b.VintasoftLocalizationJS.setStringConstant(a(0,426,25),a(0,1417,6));var d=new f.WebUiLabelElementJS({text:b.VintasoftLocalizationJS.getStringConstant(a(0,969,33)),cssClass:a(0,1140,11)});d.set_HeaderIndex(5);var e=new l.WebUiSelectDefinedNamePanelJS({cssClass:a(0,811,18)});this._25876=e;var g=new f.WebUiButtonInputJS({cssClass:a(0,
1186,15),value:b.VintasoftLocalizationJS.getStringConstant(a(0,936,21)),localizationId:a(0,563,8),onClick:{callback:function(a,b){var c=a.data.a,d=c._25876.getSelectedName();null!=d&&(c.hide(),c.get_RootControl().get_SpreadsheetEditorControl()._22445._1332(d))},data:{a:this}}}),h=new f.WebUiButtonInputJS({cssClass:a(0,50,15),value:b.VintasoftLocalizationJS.getStringConstant(a(0,426,25)),localizationId:a(0,957,12),onClick:{callback:function(a,b){a.data.a.hide()},data:{a:this}}}),k={localizationId:a(0,
1231,23)};c.constructor.call(this,[d],[e],[g,h],k)};b.extend(z,m.WebUiDialogJS);var A=function(){var c=A.superclass;A.prototype.show=function(){n(this)&&(this._848.update(null),c.show.call(this))};b.VintasoftLocalizationJS.setStringConstant(a(0,250,35),a(0,1124,16));b.VintasoftLocalizationJS.setStringConstant(a(0,936,21),a(0,473,2));b.VintasoftLocalizationJS.setStringConstant(a(0,426,25),a(0,1417,6));var d=new f.WebUiLabelElementJS({text:b.VintasoftLocalizationJS.getStringConstant(a(0,250,35)),cssClass:a(0,
1140,11)});d.set_HeaderIndex(5);var e=new l.WebUiEditDefinedNamePanelJS({cssClass:a(0,1089,26)});this._848=e;var g=new f.WebUiButtonInputJS({cssClass:a(0,1186,15),value:b.VintasoftLocalizationJS.getStringConstant(a(0,936,21)),localizationId:a(0,563,8),onClick:{callback:function(a,b){var c=a.data.a;c._848.applyChanges()&&c.hide()},data:{a:this}}}),h=new f.WebUiButtonInputJS({cssClass:a(0,50,15),value:b.VintasoftLocalizationJS.getStringConstant(a(0,426,25)),localizationId:a(0,957,12),onClick:{callback:function(a,
b){a.data.a.hide()},data:{a:this}}}),k={localizationId:a(0,230,20)};c.constructor.call(this,[d],[e],[g,h],k)};b.extend(A,m.WebUiDialogJS);var B=function(){var c=B.superclass;B.prototype.show=function(){n(this)&&(this._16590.update(),c.show.call(this))};b.VintasoftLocalizationJS.setStringConstant(a(0,886,36),a(0,1331,20));b.VintasoftLocalizationJS.setStringConstant(a(0,168,24),a(0,1226,5));var d=new f.WebUiLabelElementJS({text:b.VintasoftLocalizationJS.getStringConstant(a(0,886,36)),cssClass:a(0,1140,
11)});d.set_HeaderIndex(5);var e=new l.WebUiDefinedNameManagerPanelJS({cssClass:a(0,605,29)});this._16590=e;var g=new f.WebUiButtonInputJS({cssClass:a(0,50,15),value:b.VintasoftLocalizationJS.getStringConstant(a(0,168,24)),localizationId:a(0,729,11),onClick:{callback:function(a,b){a.data.a.hide()},data:{a:this}}}),h={localizationId:a(0,65,24)};c.constructor.call(this,[d],[e],[g],h)};b.extend(B,m.WebUiDialogJS);c.WebUiMoveWorksheetDialogJS=q;c.WebUiRenameWorksheetDialogJS=p;c.WebUiFindTextDialogJS=
r;c.WebUiSelectFunctionDialogJS=s;c.WebUiInsertCommentDialogJS=t;c.WebUiEditCommentDialogJS=u;c.WebUiCellNumberFormatDialogJS=v;c.WebUiInsertChartDialogJS=w;c.WebUiEditChartPropertiesDialogJS=x;c.WebUiEditHyperlinkDialogJS=y;c.WebUiSelectDefinedNameDialogJS=z;c.WebUiAddDefinedNameDialogJS=A;c.WebUiDefinedNameManagerDialogJS=B})(c.Dialogs||(c.Dialogs={}))})(c.UI||(c.UI={}))})(c.Office||(c.Office={}))})(c.Imaging||(c.Imaging={}))})(Vintasoft||(Vintasoft={}));
