﻿// Copyright 2014-2023 VintaSoft Ltd. All rights reserved.
// This software is protected by International copyright laws.
// Any copying, duplication, deployment, redistribution, modification or other
// disposition hereof is STRICTLY PROHIBITED without an express written license
// granted by VintaSoft Ltd. This notice may not be removed or otherwise
// altered under any circumstances.
// This code may NOT be used apart of the VintaSoft product.
var Vintasoft;
(function(c){function a(a,b,e){a=A[a];for(var l="",x=b;x<b+e;x++)l+=String.fromCharCode(a[x]^255);return l}if(void 0==c.Shared)throw Error("Vintasoft.Shared is not found.");if("4.1.0.3"!==c.version)throw Error("Wrong script version.");if(void 0==c.Imaging)throw Error("Vintasoft.Imaging is not found.");var b=c.Shared,B=c.Imaging.UI,m=B.Dialogs,e=B.UIElements,A=[];A.push([185,150,145,155,223,171,154,135,139,137,140,140,155,154,210,154,155,150,139,183,134,143,154,141,147,150,145,148,187,150,158,147,
144,152,210,154,155,150,139,171,150,139,147,154,144,148,189,138,139,139,144,145,156,158,145,156,154,147,189,138,139,139,144,145,205,202,207,143,135,157,139,145,223,157,139,145,210,143,141,150,146,158,141,134,146,144,155,158,147,210,139,150,139,147,154,188,158,145,156,154,147,150,145,140,154,141,139,188,144,146,146,154,145,139,187,150,158,147,144,152,153,150,145,155,171,154,135,139,187,150,158,147,144,152,137,140,140,155,154,210,141,154,145,158,146,154,168,144,141,148,140,151,154,154,139,187,150,158,
147,144,152,210,139,150,139,147,154,136,144,141,148,140,151,154,154,139,178,144,137,154,155,137,140,140,155,154,210,155,150,158,147,144,152,210,156,158,145,156,154,147,189,138,139,139,144,145,156,147,144,140,154,189,138,139,139,144,145,139,154,135,139,172,154,158,141,156,151,185,150,145,150,140,151,154,155,137,140,140,155,154,210,155,150,158,147,144,152,210,144,148,189,138,139,139,144,145,215,214,182,145,140,154,141,139,223,188,151,158,141,139,137,140,140,155,154,210,150,145,140,154,141,139,188,144,
146,146,154,145,139,187,150,158,147,144,152,210,139,150,139,147,154,137,140,140,155,154,210,153,150,145,155,171,154,135,139,175,158,145,154,147,176,180,178,144,137,154,223,168,144,141,148,140,151,154,154,139,156,144,146,146,154,145,139,186,155,150,139,187,150,158,147,144,152,137,140,140,155,154,210,146,144,137,154,168,144,141,148,140,151,154,154,139,187,150,158,147,144,152,210,139,150,139,147,154,137,140,140,155,154,210,154,155,150,139,188,151,158,141,139,187,150,158,147,144,152,210,139,150,139,147,
154,186,155,150,139,223,188,151,158,141,139,140,154,147,154,156,139,185,138,145,156,139,150,144,145,187,150,158,147,144,152,137,140,138,150,210,155,150,158,147,144,152,188,144,145,139,154,145,139,141,154,145,158,146,154,168,144,141,148,140,151,154,154,139,187,150,158,147,144,152,137,140,140,155,154,210,153,150,145,155,171,154,135,139,187,150,158,147,144,152,210,139,150,139,147,154,186,155,150,139,223,183,134,143,154,141,147,150,145,148,137,140,140,155,154,210,150,145,140,154,141,139,188,151,158,141,
139,187,150,158,147,144,152,210,139,150,139,147,154,156,144,146,146,154,145,139,188,151,158,145,152,154,155,137,140,140,155,154,210,154,155,150,139,188,144,146,146,154,145,139,187,150,158,147,144,152,210,139,150,139,147,154,137,140,140,155,154,210,150,145,140,154,141,139,188,151,158,141,139,175,158,145,154,147,137,140,140,155,154,210,140,154,147,154,156,139,185,138,145,156,139,150,144,145,175,158,145,154,147,137,140,140,155,154,210,153,150,145,155,171,154,135,139,187,150,158,147,144,152,210,153,150,
145,155,177,154,135,139,189,138,139,139,144,145,154,141,141,144,141,176,156,156,138,141,154,155,188,147,144,140,154,137,140,140,155,154,210,154,155,150,139,183,134,143,154,141,147,150,145,148,187,150,158,147,144,152,210,139,150,139,147,154,153,150,145,155,177,154,135,139,189,138,139,139,144,145,190,155,155,223,183,134,143,154,141,147,150,145,148,182,145,140,154,141,139,223,185,138,145,156,139,150,144,145,154,155,150,139,188,151,158,141,139,187,150,158,147,144,152,153,150,145,155,171,154,135,139,179,
158,157,154,147,188,154,147,147,223,185,144,141,146,158,139,154,155,150,139,183,134,143,154,141,147,150,145,148,187,150,158,147,144,152,137,140,140,155,154,210,156,154,147,147,177,138,146,157,154,141,185,144,141,146,158,139,187,150,158,147,144,152,210,139,150,139,147,154,137,140,155,137,210,155,150,158,147,144,152,173,154,145,158,146,154,223,168,144,141,148,140,151,154,154,139,137,140,140,155,154,210,155,150,158,147,144,152,210,156,147,144,140,154,189,138,139,139,144,145,186,155,150,139,223,156,144,
146,146,154,145,139,137,140,140,155,154,210,140,154,147,154,156,139,185,138,145,156,139,150,144,145,187,150,158,147,144,152,210,139,150,139,147,154,140,154,139,188,154,147,147,177,138,146,157,154,141,185,144,141,146,158,139,187,150,158,147,144,152,156,151,158,141,139,186,155,150,139,154,155,146,144,137,154,168,144,141,148,140,151,154,154,139,187,150,158,147,144,152,182,145,140,154,141,139,223,156,144,146,146,154,145,139,185,150,145,155,223,177,154,135,139,156,151,158,141,139,172,154,147,154,156,139,
154,155,157,139,145,223,157,139,145,210,155,154,153,158,138,147,139,150,145,140,154,141,139,188,151,158,141,139,187,150,158,147,144,152,137,140,140,155,154,210,154,155,150,139,183,134,143,154,141,147,150,145,148,187,150,158,147,144,152,210,158,155,155,171,150,139,147,154,136,144,141,148,140,151,154,154,139,173,154,145,158,146,154,155,137,140,140,155,154,210,156,154,147,147,177,138,146,157,154,141,185,144,141,146,158,139,175,158,145,154,147,137,140,140,155,154,210,146,144,137,154,168,144,141,148,140,
151,154,154,139,175,158,145,154,147,137,140,140,155,154,210,156,144,146,146,154,145,139,175,158,145,154,147]);c.Imaging=c.Imaging||(c.Imaging={});(function(c){c.Office=c.Office||(c.Office={});(function(c){c.UI=c.UI||(c.UI={});(function(c){var l=c.Panels;c.Dialogs=c.Dialogs||(c.Dialogs={});(function(c){var n=function(d){var c=n.superclass;n.prototype.show=function(){this._2585.update();c.show.call(this)};b.VintasoftLocalizationJS.setStringConstant(a(0,134,33),a(0,867,16));b.VintasoftLocalizationJS.setStringConstant(a(0,
235,21),a(0,320,2));b.VintasoftLocalizationJS.setStringConstant(a(0,181,25),a(0,95,6));var f=new e.WebUiLabelElementJS({text:b.VintasoftLocalizationJS.getStringConstant(a(0,134,33)),cssClass:a(0,84,11)});f.set_HeaderIndex(5);this._2585=d=new l.WebUiRenameWorksheetPanelJS({cssClass:a(0,441,18)},d);b.suf23(d,a(0,1108,16),{a:this},function(a,b){var d=a.data.a;d._6565(a.type,b);d.hide()});b.suf23(d,a(0,674,12),{a:this},function(a,b){a.data.a._6565(a.type,b)});var h=new e.WebUiButtonInputJS({cssClass:a(0,
69,15),value:b.VintasoftLocalizationJS.getStringConstant(a(0,235,21)),localizationId:a(0,44,8),onClick:{callback:function(a,b){a.data.a._2585.renameWorksheet()},data:{a:this}}}),g=new e.WebUiButtonInputJS({cssClass:a(0,1042,15),value:b.VintasoftLocalizationJS.getStringConstant(a(0,181,25)),localizationId:a(0,52,12),onClick:{callback:function(a,b){a.data.a.hide()},data:{a:this}}}),k={localizationId:a(0,459,21)};c.constructor.call(this,[f],[d],[h,g],k)};b.extend(n,m.WebUiDialogJS);var p=function(d){var c=
p.superclass;p.prototype.show=function(){this._7441.update();c.show.call(this)};b.VintasoftLocalizationJS.setStringConstant(a(0,353,31),a(0,322,14));b.VintasoftLocalizationJS.setStringConstant(a(0,235,21),a(0,320,2));b.VintasoftLocalizationJS.setStringConstant(a(0,181,25),a(0,95,6));var f=new e.WebUiLabelElementJS({text:b.VintasoftLocalizationJS.getStringConstant(a(0,353,31)),cssClass:a(0,84,11)});f.set_HeaderIndex(5);this._7441=d=new l.WebUiMoveWorksheetPanelJS({cssClass:a(0,1151,24)},d);b.suf23(d,
a(0,167,14),{a:this},function(a,b){var d=a.data.a;d._6565(a.type,b);d.hide()});b.suf23(d,a(0,674,12),{a:this},function(a,b){a.data.a._6565(a.type,b)});var h=new e.WebUiButtonInputJS({cssClass:a(0,69,15),value:b.VintasoftLocalizationJS.getStringConstant(a(0,235,21)),localizationId:a(0,44,8),onClick:{callback:function(a,b){a.data.a._7441.moveWorksheet()},data:{a:this}}}),g=new e.WebUiButtonInputJS({cssClass:a(0,1042,15),value:b.VintasoftLocalizationJS.getStringConstant(a(0,181,25)),localizationId:a(0,
52,12),onClick:{callback:function(a,b){a.data.a.hide()},data:{a:this}}}),k={localizationId:a(0,987,19)};c.constructor.call(this,[f],[d],[h,g],k)};b.extend(p,m.WebUiDialogJS);var q=function(d){var c=q.prototype,f=q.superclass;c.textSearchFinished=function(a,b){};b.VintasoftLocalizationJS.setStringConstant(a(0,480,26),a(0,0,9));b.VintasoftLocalizationJS.setStringConstant(a(0,639,35),a(0,1020,9));b.VintasoftLocalizationJS.setStringConstant(a(0,883,24),a(0,686,5));var h=new e.WebUiLabelElementJS({text:b.VintasoftLocalizationJS.getStringConstant(a(0,
480,26)),cssClass:a(0,84,11),localizationId:a(0,779,13)});h.set_HeaderIndex(5);d=new l.WebUiFindTextPanelJS({cssClass:a(0,301,19)},d);b.suf23(d,a(0,217,18),{a:this},function(b,d){b.data.a._6565(a(0,217,18),d)});this._25976=d;var g=new e.WebUiButtonInputJS({cssClass:a(0,69,15),value:a(0,1020,9),localizationId:a(0,722,14),onClick:{callback:function(a,b){a.data.a._25976.findNext()},data:{a:this}}}),k=new e.WebUiButtonInputJS({cssClass:a(0,1042,15),value:a(0,686,5),localizationId:a(0,206,11),onClick:{callback:function(a,
b){a.data.a.hide()},data:{a:this}}}),y={localizationId:a(0,120,14)};f.constructor.call(this,[h],[d],[g,k],y);delete c.textSearchFinished};b.extend(q,m.WebUiDialogJS);var z=function(d){var c=z.superclass;b.VintasoftLocalizationJS.setStringConstant(a(0,919,32),a(0,749,15));b.VintasoftLocalizationJS.setStringConstant(a(0,235,21),a(0,320,2));b.VintasoftLocalizationJS.setStringConstant(a(0,181,25),a(0,95,6));this._13722=d;var f=new e.WebUiLabelElementJS({text:b.VintasoftLocalizationJS.getStringConstant(a(0,
919,32)),cssClass:a(0,84,11)});f.set_HeaderIndex(5);this._10476=d=new l.WebUiSelectFunctionPanelJS({cssClass:a(0,614,25)},d);var h=new e.WebUiButtonInputJS({cssClass:a(0,69,15),value:b.VintasoftLocalizationJS.getStringConstant(a(0,235,21)),localizationId:a(0,44,8),onClick:{callback:function(b,d){var c=b.data.a,k=c._10476.getSelectedFormula();c._13722._23803._4550(k+a(0,256,2));c.hide()},data:{a:this}}}),g=new e.WebUiButtonInputJS({cssClass:a(0,1042,15),value:b.VintasoftLocalizationJS.getStringConstant(a(0,
181,25)),localizationId:a(0,52,12),onClick:{callback:function(a,b){var d=a.data.a;d._13722._23803._9733(!0);d.hide()},data:{a:this}}}),k={localizationId:a(0,421,20)};c.constructor.call(this,[f],[d],[h,g],k)};b.extend(z,m.WebUiDialogJS);var r=function(d){var c=r.superclass;r.prototype.clear=function(){this._10570.clear()};b.VintasoftLocalizationJS.setStringConstant(a(0,270,31),a(0,1006,14));b.VintasoftLocalizationJS.setStringConstant(a(0,235,21),a(0,320,2));b.VintasoftLocalizationJS.setStringConstant(a(0,
181,25),a(0,95,6));var f=new e.WebUiLabelElementJS({text:b.VintasoftLocalizationJS.getStringConstant(a(0,270,31)),cssClass:a(0,84,11)});f.set_HeaderIndex(5);this._10570=new l.WebUiCommentPanelJS({cssClass:a(0,1175,18)},d);b.suf23(this._10570,a(0,549,14),{a:this},function(a,b){var d=a.data.a;d._6565(a.type,b);d.hide()});b.suf23(this._10570,a(0,674,12),{a:this},function(a,b){a.data.a._6565(a.type,b)});d=new e.WebUiButtonInputJS({cssClass:a(0,69,15),value:b.VintasoftLocalizationJS.getStringConstant(a(0,
235,21)),localizationId:a(0,44,8),onClick:{callback:function(a,b){a.data.a._10570.insertComment()},data:{a:this}}});var h=new e.WebUiButtonInputJS({cssClass:a(0,1042,15),value:b.VintasoftLocalizationJS.getStringConstant(a(0,181,25)),localizationId:a(0,52,12),onClick:{callback:function(a,b){a.data.a.hide()},data:{a:this}}}),g={cssClass:a(0,856,11),localizationId:a(0,101,19)};c.constructor.call(this,[f],[this._10570],[d,h],g)};b.extend(r,m.WebUiDialogJS);var s=function(d){var c=s.superclass;s.prototype.fill=
function(){this._10570.fill()};b.VintasoftLocalizationJS.setStringConstant(a(0,563,29),a(0,907,12));b.VintasoftLocalizationJS.setStringConstant(a(0,235,21),a(0,320,2));b.VintasoftLocalizationJS.setStringConstant(a(0,181,25),a(0,95,6));var f=new e.WebUiLabelElementJS({text:b.VintasoftLocalizationJS.getStringConstant(a(0,563,29)),cssClass:a(0,84,11)});f.set_HeaderIndex(5);this._10570=new l.WebUiCommentPanelJS({cssClass:a(0,1175,18)},d);b.suf23(this._10570,a(0,549,14),{a:this},function(a,b){var d=a.data.a;
d._6565(a.type,b);d.hide()});b.suf23(this._10570,a(0,674,12),{a:this},function(a,b){a.data.a._6565(a.type,b)});d=new e.WebUiButtonInputJS({cssClass:a(0,69,15),value:b.VintasoftLocalizationJS.getStringConstant(a(0,235,21)),localizationId:a(0,44,8),onClick:{callback:function(a,b){a.data.a._10570.editComment()},data:{a:this}}});var h=new e.WebUiButtonInputJS({cssClass:a(0,1042,15),value:b.VintasoftLocalizationJS.getStringConstant(a(0,181,25)),localizationId:a(0,52,12),onClick:{callback:function(a,b){a.data.a.hide()},
data:{a:this}}}),g={cssClass:a(0,856,11),localizationId:a(0,336,17)};c.constructor.call(this,[f],[this._10570],[d,h],g)};b.extend(s,m.WebUiDialogJS);var t=function(d){var c=t.superclass;t.prototype.show=function(){this._4802.update();c.show.call(this)};b.VintasoftLocalizationJS.setStringConstant(a(0,822,34),a(0,792,11));b.VintasoftLocalizationJS.setStringConstant(a(0,235,21),a(0,320,2));b.VintasoftLocalizationJS.setStringConstant(a(0,181,25),a(0,95,6));this._13722=d;var f=new e.WebUiLabelElementJS({text:b.VintasoftLocalizationJS.getStringConstant(a(0,
822,34)),cssClass:a(0,84,11)});f.set_HeaderIndex(5);this._4802=d=new l.WebUiCellNumberFormatPanelJS({cssClass:a(0,1124,27)},d);var h=new e.WebUiButtonInputJS({cssClass:a(0,69,15),value:b.VintasoftLocalizationJS.getStringConstant(a(0,235,21)),localizationId:a(0,44,8),onClick:{callback:function(a,b){var d=a.data.a,c=d._4802.getSelectedFormat();null!=c&&d._13722._23803._20755(c);d.hide()},data:{a:this}}}),g=new e.WebUiButtonInputJS({cssClass:a(0,1042,15),value:b.VintasoftLocalizationJS.getStringConstant(a(0,
181,25)),localizationId:a(0,52,12),onClick:{callback:function(a,b){a.data.a.hide()},data:{a:this}}}),k={localizationId:a(0,951,25)};c.constructor.call(this,[f],[d],[h,g],k)};b.extend(t,m.WebUiDialogJS);var u=function(d,c){var f=u.prototype,h=u.superclass;f.show=function(){h.show.call(this);this._23339._3346();var a=this._23339._18755.get_SpreadsheetEditorControl()._23803;null!=a._20167()&&a._11632(null);this._19720.set_IsEnabled(!1)};f.addSelectedChart=function(){this._23339.addSelectedChart()};b.VintasoftLocalizationJS.setStringConstant(a(0,
520,29),a(0,258,12));b.VintasoftLocalizationJS.setStringConstant(a(0,235,21),a(0,320,2));b.VintasoftLocalizationJS.setStringConstant(a(0,181,25),a(0,95,6));f=new e.WebUiLabelElementJS({text:b.VintasoftLocalizationJS.getStringConstant(a(0,520,29)),cssClass:a(0,84,11)});f.set_HeaderIndex(5);var g=new l.WebUiInsertChartPanelJS({cssClass:a(0,592,22)},d,c);this._23339=g;b.suf23(g,a(0,674,12),{a:this},function(a,b){var d=a.data.a,c=a.type;d.hide();d._6565(c,b)});var k=new e.WebUiButtonInputJS({cssClass:a(0,
69,15),value:b.VintasoftLocalizationJS.getStringConstant(a(0,235,21)),localizationId:a(0,44,8),onClick:{callback:function(a,b){a.data.a.addSelectedChart()},data:{a:this}}});this._19720=k;var y=new e.WebUiButtonInputJS({cssClass:a(0,1042,15),value:b.VintasoftLocalizationJS.getStringConstant(a(0,181,25)),localizationId:a(0,52,12),onClick:{callback:function(a,b){a.data.a.hide()},data:{a:this}}});b.suf23(g,a(0,1029,13),{a:this},function(a,b){a.data.a._19720.set_IsEnabled(!0)});var m={localizationId:a(0,
1057,17)};h.constructor.call(this,[f],[g],[k,y],m)};b.extend(u,m.WebUiDialogJS);var v=function(d){var c=v.superclass;v.prototype.show=function(){this._16970.update();c.show.call(this)};b.VintasoftLocalizationJS.setStringConstant(a(0,384,27),a(0,411,10));b.VintasoftLocalizationJS.setStringConstant(a(0,235,21),a(0,320,2));b.VintasoftLocalizationJS.setStringConstant(a(0,181,25),a(0,95,6));var f=new e.WebUiLabelElementJS({text:b.VintasoftLocalizationJS.getStringConstant(a(0,384,27)),cssClass:a(0,84,11)});
f.set_HeaderIndex(5);this._16970=d=new l.WebUiEditChartPropertiesPanelJS({cssClass:a(0,441,18)},d);b.suf23(d,a(0,976,11),{a:this},function(a,b){var d=a.data.a,c=a.type;d.hide();d._6565(c,b)});b.suf23(d,a(0,674,12),{a:this},function(a,b){var d=a.data.a,c=a.type;d.hide();d._6565(c,b)});var h=new e.WebUiButtonInputJS({cssClass:a(0,69,15),value:b.VintasoftLocalizationJS.getStringConstant(a(0,235,21)),localizationId:a(0,44,8),onClick:{callback:function(a,b){a.data.a._16970.editChart()},data:{a:this}}}),
g=new e.WebUiButtonInputJS({cssClass:a(0,1042,15),value:b.VintasoftLocalizationJS.getStringConstant(a(0,181,25)),localizationId:a(0,52,12),onClick:{callback:function(a,b){a.data.a.hide()},data:{a:this}}}),k={localizationId:a(0,764,15)};c.constructor.call(this,[f],[d],[h,g],k)};b.extend(v,m.WebUiDialogJS);var w=function(d){var c=w.superclass;w.prototype.show=function(){this._26383.update(this);c.show.call(this)};b.VintasoftLocalizationJS.setStringConstant(a(0,1074,34),a(0,736,13));b.VintasoftLocalizationJS.setStringConstant(a(0,
9,35),a(0,506,14));b.VintasoftLocalizationJS.setStringConstant(a(0,235,21),a(0,320,2));b.VintasoftLocalizationJS.setStringConstant(a(0,181,25),a(0,95,6));this._13722=d;var f=new e.WebUiLabelElementJS({text:b.VintasoftLocalizationJS.getStringConstant(a(0,691,31)),cssClass:a(0,84,11)});f.set_HeaderIndex(5);this._19499=f;this._26383=d=new l.WebUiEditHyperlinkPanelJS({css:{height:a(0,64,5)}},d);var h=new e.WebUiButtonInputJS({cssClass:a(0,69,15),value:b.VintasoftLocalizationJS.getStringConstant(a(0,235,
21)),localizationId:a(0,44,8),onClick:{callback:function(a,b){var c=a.data.a;c._26383.addHyperlink();c.hide()},data:{a:this}}}),g=new e.WebUiButtonInputJS({cssClass:a(0,1042,15),value:b.VintasoftLocalizationJS.getStringConstant(a(0,181,25)),localizationId:a(0,52,12),onClick:{callback:function(a,b){a.data.a.hide()},data:{a:this}}}),k={localizationId:a(0,803,19)};c.constructor.call(this,[f],[d],[h,g],k)};b.extend(w,m.WebUiDialogJS);c.WebUiMoveWorksheetDialogJS=p;c.WebUiRenameWorksheetDialogJS=n;c.WebUiFindTextDialogJS=
q;c.WebUiSelectFunctionDialogJS=z;c.WebUiInsertCommentDialogJS=r;c.WebUiEditCommentDialogJS=s;c.WebUiCellNumberFormatDialogJS=t;c.WebUiInsertChartDialogJS=u;c.WebUiEditChartPropertiesDialogJS=v;c.WebUiEditHyperlinkDialogJS=w})(c.Dialogs||(c.Dialogs={}))})(c.UI||(c.UI={}))})(c.Office||(c.Office={}))})(c.Imaging||(c.Imaging={}))})(Vintasoft||(Vintasoft={}));
