﻿// Copyright 2014-2024 VintaSoft Ltd. All rights reserved.
// This software is protected by International copyright laws.
// Any copying, duplication, deployment, redistribution, modification or other
// disposition hereof is STRICTLY PROHIBITED without an express written license
// granted by VintaSoft Ltd. This notice may not be removed or otherwise
// altered under any circumstances.
// This code may NOT be used apart of the VintaSoft product.
var Vintasoft;
(function(d){function a(a,b,f){a=D[a];for(var l="",A=b;A<b+f;A++)l+=String.fromCharCode(a[A]^255);return l}if(void 0==d.Shared)throw Error("Vintasoft.Shared is not found.");if("4.1.3.1"!==d.version)throw Error("Wrong script version.");if(void 0==d.Imaging)throw Error("Vintasoft.Imaging is not found.");var b=d.Shared,E=d.Imaging.UI,m=E.Dialogs,f=E.UIElements,D=[];D.push([178,144,137,154,223,168,144,141,148,140,151,154,154,139,150,145,140,154,141,139,188,151,158,141,139,187,150,158,147,144,152,185,
150,145,155,223,177,154,135,139,137,140,140,155,154,210,141,154,145,158,146,154,168,144,141,148,140,151,154,154,139,187,150,158,147,144,152,210,139,150,139,147,154,137,140,140,155,154,210,156,154,147,147,177,138,146,157,154,141,185,144,141,146,158,139,175,158,145,154,147,182,145,140,154,141,139,223,156,144,146,146,154,145,139,215,214,137,140,140,155,154,210,146,144,137,154,168,144,141,148,140,151,154,154,139,187,150,158,147,144,152,210,139,150,139,147,154,137,140,140,155,154,210,154,155,150,139,183,
134,143,154,141,147,150,145,148,187,150,158,147,144,152,210,154,155,150,139,171,150,139,147,154,137,140,140,155,154,210,153,150,145,155,171,154,135,139,187,150,158,147,144,152,210,139,150,139,147,154,185,150,145,155,223,171,154,135,139,137,140,140,155,154,210,154,155,150,139,183,134,143,154,141,147,150,145,148,187,150,158,147,144,152,210,158,155,155,171,150,139,147,154,137,140,140,155,154,210,140,154,147,154,156,139,185,138,145,156,139,150,144,145,187,150,158,147,144,152,210,139,150,139,147,154,157,
139,145,223,157,139,145,210,143,141,150,146,158,141,134,186,155,150,139,223,156,144,146,146,154,145,139,144,148,189,138,139,139,144,145,188,158,145,156,154,147,176,180,154,155,150,139,188,151,158,141,139,187,150,158,147,144,152,172,154,147,154,156,139,223,155,154,153,150,145,154,155,223,145,158,146,154,137,140,140,155,154,210,156,154,147,147,177,138,146,157,154,141,185,144,141,146,158,139,187,150,158,147,144,152,210,139,150,139,147,154,136,144,141,148,140,151,154,154,139,173,154,145,158,146,154,155,
190,155,155,223,155,154,153,150,145,154,155,223,145,158,146,154,146,144,155,158,147,210,139,150,139,147,154,140,154,139,188,154,147,147,177,138,146,157,154,141,185,144,141,146,158,139,187,150,158,147,144,152,153,150,145,155,177,154,135,139,189,138,139,139,144,145,140,154,147,154,156,139,185,138,145,156,139,150,144,145,187,150,158,147,144,152,156,144,146,146,154,145,139,186,155,150,139,187,150,158,147,144,152,137,140,155,137,210,155,150,158,147,144,152,137,140,140,155,154,210,158,155,155,187,154,153,
150,145,154,155,177,158,146,154,187,150,158,147,144,152,210,158,155,155,171,150,139,147,154,156,144,146,146,154,145,139,188,151,158,145,152,154,155,186,155,150,139,223,188,151,158,141,139,150,145,140,154,141,139,188,144,146,146,154,145,139,187,150,158,147,144,152,137,140,140,155,154,210,155,150,158,147,144,152,210,144,148,189,138,139,139,144,145,156,147,144,140,154,189,138,139,139,144,145,158,155,155,187,154,153,150,145,154,155,177,158,146,154,187,150,158,147,144,152,156,151,158,141,139,172,154,147,
154,156,139,154,155,154,141,141,144,141,176,156,156,138,141,154,155,137,140,140,155,154,210,154,155,150,139,187,154,153,150,145,154,155,177,158,146,154,175,158,145,154,147,137,140,140,155,154,210,153,150,145,155,171,154,135,139,175,158,145,154,147,137,140,140,155,154,210,155,154,153,150,145,154,155,177,158,146,154,178,158,145,158,152,154,141,175,158,145,154,147,137,140,140,155,154,210,154,155,150,139,188,151,158,141,139,187,150,158,147,144,152,210,139,150,139,147,154,205,202,207,143,135,188,147,144,
140,154,137,140,140,155,154,210,140,154,147,154,156,139,185,138,145,156,139,150,144,145,175,158,145,154,147,182,145,140,154,141,139,223,185,138,145,156,139,150,144,145,173,154,145,158,146,154,223,168,144,141,148,140,151,154,154,139,186,155,150,139,223,183,134,143,154,141,147,150,145,148,156,151,158,141,139,186,155,150,139,154,155,156,158,145,156,154,147,189,138,139,139,144,145,190,155,155,223,183,134,143,154,141,147,150,145,148,137,140,140,155,154,210,155,154,153,150,145,154,155,177,158,146,154,178,
158,145,158,152,154,141,187,150,158,147,144,152,210,139,150,139,147,154,137,140,140,155,154,210,146,144,137,154,168,144,141,148,140,151,154,154,139,175,158,145,154,147,187,154,153,150,145,154,155,223,145,158,146,154,223,146,158,145,158,152,154,141,188,154,147,147,223,185,144,141,146,158,139,153,150,145,155,171,154,135,139,179,158,157,154,147,157,139,145,223,157,139,145,210,155,154,153,158,138,147,139,154,155,150,139,183,134,143,154,141,147,150,145,148,187,150,158,147,144,152,182,145,140,154,141,139,
223,188,151,158,141,139,153,150,145,155,171,154,135,139,187,150,158,147,144,152,137,140,140,155,154,210,150,145,140,154,141,139,188,151,158,141,139,187,150,158,147,144,152,210,139,150,139,147,154,137,140,140,155,154,210,150,145,140,154,141,139,188,144,146,146,154,145,139,187,150,158,147,144,152,210,139,150,139,147,154,136,144,141,148,140,151,154,154,139,178,144,137,154,155,137,140,140,155,154,210,156,144,146,146,154,145,139,175,158,145,154,147,137,140,140,155,154,210,155,150,158,147,144,152,210,156,
158,145,156,154,147,189,138,139,139,144,145,137,140,140,155,154,210,155,154,153,150,145,154,155,177,158,146,154,179,150,140,139,187,150,158,147,144,152,210,139,150,139,147,154,137,140,140,155,154,210,153,150,145,155,171,154,135,139,187,150,158,147,144,152,210,153,150,145,155,177,154,135,139,189,138,139,139,144,145,155,154,153,150,145,154,155,177,158,146,154,178,158,145,158,152,154,141,187,150,158,147,144,152,146,144,137,154,168,144,141,148,140,151,154,154,139,187,150,158,147,144,152,141,154,145,158,
146,154,168,144,141,148,140,151,154,154,139,187,150,158,147,144,152,139,154,135,139,172,154,158,141,156,151,185,150,145,150,140,151,154,155,137,140,140,155,154,210,155,150,158,147,144,152,210,156,147,144,140,154,189,138,139,139,144,145,137,140,138,150,210,155,150,158,147,144,152,188,144,145,139,154,145,139,140,154,147,154,156,139,187,154,153,150,145,154,155,177,158,146,154,187,150,158,147,144,152,137,140,140,155,154,210,154,155,150,139,188,144,146,146,154,145,139,187,150,158,147,144,152,210,139,150,
139,147,154,137,140,140,155,154,210,150,145,140,154,141,139,188,151,158,141,139,175,158,145,154,147]);d.Imaging=d.Imaging||(d.Imaging={});(function(d){d.Office=d.Office||(d.Office={});(function(d){d.UI=d.UI||(d.UI={});(function(d){var l=d.Panels;d.Dialogs=d.Dialogs||(d.Dialogs={});(function(d){var n=function(c){var d=n.superclass;n.prototype.show=function(){this._3251.update();d.show.call(this)};b.VintasoftLocalizationJS.setStringConstant(a(0,40,33),a(0,830,16));b.VintasoftLocalizationJS.setStringConstant(a(0,
602,21),a(0,324,2));b.VintasoftLocalizationJS.setStringConstant(a(0,1152,25),a(0,318,6));var e=new f.WebUiLabelElementJS({text:b.VintasoftLocalizationJS.getStringConstant(a(0,40,33)),cssClass:a(0,426,11)});e.set_HeaderIndex(5);this._3251=c=new l.WebUiRenameWorksheetPanelJS({cssClass:a(0,1351,18)},c);b.suf23(c,a(0,394,16),{a:this},function(a,b){var c=a.data.a;c._10617(a.type,b);c.hide()});b.suf23(c,a(0,667,12),{a:this},function(a,b){a.data.a._10617(a.type,b)});var g=new f.WebUiButtonInputJS({cssClass:a(0,
283,15),value:b.VintasoftLocalizationJS.getStringConstant(a(0,602,21)),localizationId:a(0,310,8),onClick:{callback:function(a,b){a.data.a._3251.renameWorksheet()},data:{a:this}}}),h=new f.WebUiButtonInputJS({cssClass:a(0,1E3,15),value:b.VintasoftLocalizationJS.getStringConstant(a(0,1152,25)),localizationId:a(0,871,12),onClick:{callback:function(a,b){a.data.a.hide()},data:{a:this}}}),k={localizationId:a(0,1288,21)};d.constructor.call(this,[e],[c],[g,h],k)};b.extend(n,m.WebUiDialogJS);var p=function(c){var d=
p.superclass;p.prototype.show=function(){this._1852.update();d.show.call(this)};b.VintasoftLocalizationJS.setStringConstant(a(0,116,31),a(0,0,14));b.VintasoftLocalizationJS.setStringConstant(a(0,602,21),a(0,324,2));b.VintasoftLocalizationJS.setStringConstant(a(0,1152,25),a(0,318,6));var e=new f.WebUiLabelElementJS({text:b.VintasoftLocalizationJS.getStringConstant(a(0,116,31)),cssClass:a(0,426,11)});e.set_HeaderIndex(5);this._1852=c=new l.WebUiMoveWorksheetPanelJS({cssClass:a(0,932,24)},c);b.suf23(c,
a(0,1120,14),{a:this},function(a,b){var c=a.data.a;c._10617(a.type,b);c.hide()});b.suf23(c,a(0,667,12),{a:this},function(a,b){a.data.a._10617(a.type,b)});var g=new f.WebUiButtonInputJS({cssClass:a(0,283,15),value:b.VintasoftLocalizationJS.getStringConstant(a(0,602,21)),localizationId:a(0,310,8),onClick:{callback:function(a,b){a.data.a._1852.moveWorksheet()},data:{a:this}}}),h=new f.WebUiButtonInputJS({cssClass:a(0,1E3,15),value:b.VintasoftLocalizationJS.getStringConstant(a(0,1152,25)),localizationId:a(0,
871,12),onClick:{callback:function(a,b){a.data.a.hide()},data:{a:this}}}),k={localizationId:a(0,1269,19)};d.constructor.call(this,[e],[c],[g,h],k)};b.extend(p,m.WebUiDialogJS);var q=function(c){var d=q.prototype,e=q.superclass;d.textSearchFinished=function(a,b){};b.VintasoftLocalizationJS.setStringConstant(a(0,182,26),a(0,208,9));b.VintasoftLocalizationJS.setStringConstant(a(0,1210,35),a(0,31,9));b.VintasoftLocalizationJS.setStringConstant(a(0,1327,24),a(0,785,5));var g=new f.WebUiLabelElementJS({text:b.VintasoftLocalizationJS.getStringConstant(a(0,
182,26)),cssClass:a(0,426,11),localizationId:a(0,987,13)});g.set_HeaderIndex(5);c=new l.WebUiFindTextPanelJS({cssClass:a(0,705,19)},c);b.suf23(c,a(0,1309,18),{a:this},function(b,c){b.data.a._10617(a(0,1309,18),c)});this._5809=c;var h=new f.WebUiButtonInputJS({cssClass:a(0,283,15),value:a(0,31,9),localizationId:a(0,462,14),onClick:{callback:function(a,b){a.data.a._5809.findNext()},data:{a:this}}}),k=new f.WebUiButtonInputJS({cssClass:a(0,1E3,15),value:a(0,785,5),localizationId:a(0,623,11),onClick:{callback:function(a,
b){a.data.a.hide()},data:{a:this}}}),B={localizationId:a(0,1046,14)};e.constructor.call(this,[g],[c],[h,k],B);delete d.textSearchFinished};b.extend(q,m.WebUiDialogJS);var C=function(c){var d=C.superclass;b.VintasoftLocalizationJS.setStringConstant(a(0,251,32),a(0,815,15));b.VintasoftLocalizationJS.setStringConstant(a(0,602,21),a(0,324,2));b.VintasoftLocalizationJS.setStringConstant(a(0,1152,25),a(0,318,6));this._10998=c;var e=new f.WebUiLabelElementJS({text:b.VintasoftLocalizationJS.getStringConstant(a(0,
251,32)),cssClass:a(0,426,11)});e.set_HeaderIndex(5);this._1053=c=new l.WebUiSelectFunctionPanelJS({cssClass:a(0,790,25)},c);var g=new f.WebUiButtonInputJS({cssClass:a(0,283,15),value:b.VintasoftLocalizationJS.getStringConstant(a(0,602,21)),localizationId:a(0,310,8),onClick:{callback:function(b,c){var d=b.data.a,k=d._1053.getSelectedFormula();d._10998._17230._10704(k+a(0,114,2));d.hide()},data:{a:this}}}),h=new f.WebUiButtonInputJS({cssClass:a(0,1E3,15),value:b.VintasoftLocalizationJS.getStringConstant(a(0,
1152,25)),localizationId:a(0,871,12),onClick:{callback:function(a,b){var c=a.data.a;c._10998._17230._23933(!0);c.hide()},data:{a:this}}}),k={localizationId:a(0,476,20)};d.constructor.call(this,[e],[c],[g,h],k)};b.extend(C,m.WebUiDialogJS);var r=function(c){var d=r.superclass;r.prototype.clear=function(){this._24336.clear()};b.VintasoftLocalizationJS.setStringConstant(a(0,1089,31),a(0,100,14));b.VintasoftLocalizationJS.setStringConstant(a(0,602,21),a(0,324,2));b.VintasoftLocalizationJS.setStringConstant(a(0,
1152,25),a(0,318,6));var e=new f.WebUiLabelElementJS({text:b.VintasoftLocalizationJS.getStringConstant(a(0,1089,31)),cssClass:a(0,426,11)});e.set_HeaderIndex(5);this._24336=new l.WebUiCommentPanelJS({cssClass:a(0,1134,18)},c);b.suf23(this._24336,a(0,559,14),{a:this},function(a,b){var c=a.data.a;c._10617(a.type,b);c.hide()});b.suf23(this._24336,a(0,667,12),{a:this},function(a,b){a.data.a._10617(a.type,b)});c=new f.WebUiButtonInputJS({cssClass:a(0,283,15),value:b.VintasoftLocalizationJS.getStringConstant(a(0,
602,21)),localizationId:a(0,310,8),onClick:{callback:function(a,b){a.data.a._24336.insertComment()},data:{a:this}}});var g=new f.WebUiButtonInputJS({cssClass:a(0,1E3,15),value:b.VintasoftLocalizationJS.getStringConstant(a(0,1152,25)),localizationId:a(0,871,12),onClick:{callback:function(a,b){a.data.a.hide()},data:{a:this}}}),h={cssClass:a(0,513,11),localizationId:a(0,583,19)};d.constructor.call(this,[e],[this._24336],[c,g],h)};b.extend(r,m.WebUiDialogJS);var s=function(c){var d=s.superclass;s.prototype.fill=
function(){this._24336.fill()};b.VintasoftLocalizationJS.setStringConstant(a(0,1392,29),a(0,298,12));b.VintasoftLocalizationJS.setStringConstant(a(0,602,21),a(0,324,2));b.VintasoftLocalizationJS.setStringConstant(a(0,1152,25),a(0,318,6));var e=new f.WebUiLabelElementJS({text:b.VintasoftLocalizationJS.getStringConstant(a(0,1392,29)),cssClass:a(0,426,11)});e.set_HeaderIndex(5);this._24336=new l.WebUiCommentPanelJS({cssClass:a(0,1134,18)},c);b.suf23(this._24336,a(0,559,14),{a:this},function(a,b){var c=
a.data.a;c._10617(a.type,b);c.hide()});b.suf23(this._24336,a(0,667,12),{a:this},function(a,b){a.data.a._10617(a.type,b)});c=new f.WebUiButtonInputJS({cssClass:a(0,283,15),value:b.VintasoftLocalizationJS.getStringConstant(a(0,602,21)),localizationId:a(0,310,8),onClick:{callback:function(a,b){a.data.a._24336.editComment()},data:{a:this}}});var g=new f.WebUiButtonInputJS({cssClass:a(0,1E3,15),value:b.VintasoftLocalizationJS.getStringConstant(a(0,1152,25)),localizationId:a(0,871,12),onClick:{callback:function(a,
b){a.data.a.hide()},data:{a:this}}}),h={cssClass:a(0,513,11),localizationId:a(0,496,17)};d.constructor.call(this,[e],[this._24336],[c,g],h)};b.extend(s,m.WebUiDialogJS);var t=function(c){var d=t.superclass;t.prototype.show=function(){this._20790.update();d.show.call(this)};b.VintasoftLocalizationJS.setStringConstant(a(0,360,34),a(0,976,11));b.VintasoftLocalizationJS.setStringConstant(a(0,602,21),a(0,324,2));b.VintasoftLocalizationJS.setStringConstant(a(0,1152,25),a(0,318,6));this._10998=c;var e=new f.WebUiLabelElementJS({text:b.VintasoftLocalizationJS.getStringConstant(a(0,
360,34)),cssClass:a(0,426,11)});e.set_HeaderIndex(5);this._20790=c=new l.WebUiCellNumberFormatPanelJS({cssClass:a(0,73,27)},c);var g=new f.WebUiButtonInputJS({cssClass:a(0,283,15),value:b.VintasoftLocalizationJS.getStringConstant(a(0,602,21)),localizationId:a(0,310,8),onClick:{callback:function(a,b){var c=a.data.a,d=c._20790.getSelectedFormat();null!=d&&c._10998._17230._26096(d);c.hide()},data:{a:this}}}),h=new f.WebUiButtonInputJS({cssClass:a(0,1E3,15),value:b.VintasoftLocalizationJS.getStringConstant(a(0,
1152,25)),localizationId:a(0,871,12),onClick:{callback:function(a,b){a.data.a.hide()},data:{a:this}}}),k={localizationId:a(0,437,25)};d.constructor.call(this,[e],[c],[g,h],k)};b.extend(t,m.WebUiDialogJS);var u=function(c,d){var e=u.prototype,g=u.superclass;e.show=function(){g.show.call(this);this._18906._3900();var a=this._18906._19475.get_SpreadsheetEditorControl()._17230;null!=a._23719()&&a._14755(null);this._7023.set_IsEnabled(!1)};e.addSelectedChart=function(){this._18906.addSelectedChart()};
b.VintasoftLocalizationJS.setStringConstant(a(0,1060,29),a(0,1034,12));b.VintasoftLocalizationJS.setStringConstant(a(0,602,21),a(0,324,2));b.VintasoftLocalizationJS.setStringConstant(a(0,1152,25),a(0,318,6));e=new f.WebUiLabelElementJS({text:b.VintasoftLocalizationJS.getStringConstant(a(0,1060,29)),cssClass:a(0,426,11)});e.set_HeaderIndex(5);var h=new l.WebUiInsertChartPanelJS({cssClass:a(0,1421,22)},c,d);this._18906=h;b.suf23(h,a(0,667,12),{a:this},function(a,b){var c=a.data.a,d=a.type;c.hide();
c._10617(d,b)});var k=new f.WebUiButtonInputJS({cssClass:a(0,283,15),value:b.VintasoftLocalizationJS.getStringConstant(a(0,602,21)),localizationId:a(0,310,8),onClick:{callback:function(a,b){a.data.a.addSelectedChart()},data:{a:this}}});this._7023=k;var B=new f.WebUiButtonInputJS({cssClass:a(0,1E3,15),value:b.VintasoftLocalizationJS.getStringConstant(a(0,1152,25)),localizationId:a(0,871,12),onClick:{callback:function(a,b){a.data.a.hide()},data:{a:this}}});b.suf23(h,a(0,654,13),{a:this},function(a,
b){a.data.a._7023.set_IsEnabled(!0)});var m={localizationId:a(0,14,17)};g.constructor.call(this,[e],[h],[k,B],m)};b.extend(u,m.WebUiDialogJS);var v=function(c){var d=v.superclass;v.prototype.show=function(){this._19295.update();d.show.call(this)};b.VintasoftLocalizationJS.setStringConstant(a(0,753,27),a(0,573,10));b.VintasoftLocalizationJS.setStringConstant(a(0,602,21),a(0,324,2));b.VintasoftLocalizationJS.setStringConstant(a(0,1152,25),a(0,318,6));var e=new f.WebUiLabelElementJS({text:b.VintasoftLocalizationJS.getStringConstant(a(0,
753,27)),cssClass:a(0,426,11)});e.set_HeaderIndex(5);this._19295=c=new l.WebUiEditChartPropertiesPanelJS({cssClass:a(0,1351,18)},c);b.suf23(c,a(0,860,11),{a:this},function(a,b){var c=a.data.a,d=a.type;c.hide();c._10617(d,b)});b.suf23(c,a(0,667,12),{a:this},function(a,b){var c=a.data.a,d=a.type;c.hide();c._10617(d,b)});var g=new f.WebUiButtonInputJS({cssClass:a(0,283,15),value:b.VintasoftLocalizationJS.getStringConstant(a(0,602,21)),localizationId:a(0,310,8),onClick:{callback:function(a,b){a.data.a._19295.editChart()},
data:{a:this}}}),h=new f.WebUiButtonInputJS({cssClass:a(0,1E3,15),value:b.VintasoftLocalizationJS.getStringConstant(a(0,1152,25)),localizationId:a(0,871,12),onClick:{callback:function(a,b){a.data.a.hide()},data:{a:this}}}),k={localizationId:a(0,326,15)};d.constructor.call(this,[e],[c],[g,h],k)};b.extend(v,m.WebUiDialogJS);var w=function(c){var d=w.superclass;w.prototype.show=function(){this._26017.update(this);d.show.call(this)};b.VintasoftLocalizationJS.setStringConstant(a(0,217,34),a(0,883,13));
b.VintasoftLocalizationJS.setStringConstant(a(0,147,35),a(0,846,14));b.VintasoftLocalizationJS.setStringConstant(a(0,602,21),a(0,324,2));b.VintasoftLocalizationJS.setStringConstant(a(0,1152,25),a(0,318,6));this._10998=c;var e=new f.WebUiLabelElementJS({text:b.VintasoftLocalizationJS.getStringConstant(a(0,217,34)),cssClass:a(0,426,11)});e.set_HeaderIndex(5);this._8381=e;this._26017=c=new l.WebUiEditHyperlinkPanelJS({css:{height:a(0,780,5)}},c);var g=new f.WebUiButtonInputJS({cssClass:a(0,283,15),value:b.VintasoftLocalizationJS.getStringConstant(a(0,
602,21)),localizationId:a(0,310,8),onClick:{callback:function(a,b){var c=a.data.a;c._26017.addHyperlink();c.hide()},data:{a:this}}}),h=new f.WebUiButtonInputJS({cssClass:a(0,1E3,15),value:b.VintasoftLocalizationJS.getStringConstant(a(0,1152,25)),localizationId:a(0,871,12),onClick:{callback:function(a,b){a.data.a.hide()},data:{a:this}}}),k={localizationId:a(0,1015,19)};d.constructor.call(this,[e],[c],[g,h],k)};b.extend(w,m.WebUiDialogJS);var x=function(c){var d=x.superclass;x.prototype.show=function(){this._6246.update();
d.show.call(this)};b.VintasoftLocalizationJS.setStringConstant(a(0,1177,33),a(0,341,19));b.VintasoftLocalizationJS.setStringConstant(a(0,602,21),a(0,324,2));b.VintasoftLocalizationJS.setStringConstant(a(0,1152,25),a(0,318,6));var e=new f.WebUiLabelElementJS({text:b.VintasoftLocalizationJS.getStringConstant(a(0,1177,33)),cssClass:a(0,426,11)});e.set_HeaderIndex(5);var g=new l.WebUiSelectDefinedNamePanelJS({cssClass:a(0,1351,18)},c);this._6246=g;this._10998=c;c=new f.WebUiButtonInputJS({cssClass:a(0,
283,15),value:b.VintasoftLocalizationJS.getStringConstant(a(0,602,21)),localizationId:a(0,310,8),onClick:{callback:function(a,b){var c=a.data.a,d=c._6246.getSelectedName();c._10998._17230._10704(d);c.hide()},data:{a:this}}});var h=new f.WebUiButtonInputJS({cssClass:a(0,1E3,15),value:b.VintasoftLocalizationJS.getStringConstant(a(0,1152,25)),localizationId:a(0,871,12),onClick:{callback:function(a,b){a.data.a.hide()},data:{a:this}}}),k={localizationId:a(0,1369,23)};d.constructor.call(this,[e],[g],[c,
h],k)};b.extend(x,m.WebUiDialogJS);var y=function(c){var d=y.superclass;y.prototype.show=function(){this._6305.update(null);d.show.call(this)};b.VintasoftLocalizationJS.setStringConstant(a(0,524,35),a(0,410,16));b.VintasoftLocalizationJS.setStringConstant(a(0,602,21),a(0,324,2));b.VintasoftLocalizationJS.setStringConstant(a(0,1152,25),a(0,318,6));var e=new f.WebUiLabelElementJS({text:b.VintasoftLocalizationJS.getStringConstant(a(0,524,35)),cssClass:a(0,426,11)});e.set_HeaderIndex(5);var g=new l.WebUiEditDefinedNamePanelJS({cssClass:a(0,
679,26)},c);this._6305=g;this._10998=c;c=new f.WebUiButtonInputJS({cssClass:a(0,283,15),value:b.VintasoftLocalizationJS.getStringConstant(a(0,602,21)),localizationId:a(0,310,8),onClick:{callback:function(a,b){var c=a.data.a;c._6305.applyChanges()&&c.hide()},data:{a:this}}});var h=new f.WebUiButtonInputJS({cssClass:a(0,1E3,15),value:b.VintasoftLocalizationJS.getStringConstant(a(0,1152,25)),localizationId:a(0,871,12),onClick:{callback:function(a,b){a.data.a.hide()},data:{a:this}}}),k={localizationId:a(0,
634,20)};d.constructor.call(this,[e],[g],[c,h],k)};b.extend(y,m.WebUiDialogJS);var z=function(c){var d=z.superclass;z.prototype.show=function(){this._15988.update();d.show.call(this)};b.VintasoftLocalizationJS.setStringConstant(a(0,896,36),a(0,956,20));b.VintasoftLocalizationJS.setStringConstant(a(0,1327,24),a(0,785,5));var e=new f.WebUiLabelElementJS({text:b.VintasoftLocalizationJS.getStringConstant(a(0,896,36)),cssClass:a(0,426,11)});e.set_HeaderIndex(5);var g=new l.WebUiDefinedNameManagerPanelJS({cssClass:a(0,
724,29)},c);this._15988=g;this._10998=c;c=new f.WebUiButtonInputJS({cssClass:a(0,1E3,15),value:b.VintasoftLocalizationJS.getStringConstant(a(0,1327,24)),localizationId:a(0,623,11),onClick:{callback:function(a,b){a.data.a.hide()},data:{a:this}}});var h={localizationId:a(0,1245,24)};d.constructor.call(this,[e],[g],[c],h)};b.extend(z,m.WebUiDialogJS);d.WebUiMoveWorksheetDialogJS=p;d.WebUiRenameWorksheetDialogJS=n;d.WebUiFindTextDialogJS=q;d.WebUiSelectFunctionDialogJS=C;d.WebUiInsertCommentDialogJS=
r;d.WebUiEditCommentDialogJS=s;d.WebUiCellNumberFormatDialogJS=t;d.WebUiInsertChartDialogJS=u;d.WebUiEditChartPropertiesDialogJS=v;d.WebUiEditHyperlinkDialogJS=w;d.WebUiSelectDefinedNameDialogJS=x;d.WebUiAddDefinedNameDialogJS=y;d.WebUiDefinedNameManagerDialogJS=z})(d.Dialogs||(d.Dialogs={}))})(d.UI||(d.UI={}))})(d.Office||(d.Office={}))})(d.Imaging||(d.Imaging={}))})(Vintasoft||(Vintasoft={}));
