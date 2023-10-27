﻿// Copyright 2014-2023 VintaSoft Ltd. All rights reserved.
// This software is protected by International copyright laws.
// Any copying, duplication, deployment, redistribution, modification or other
// disposition hereof is STRICTLY PROHIBITED without an express written license
// granted by VintaSoft Ltd. This notice may not be removed or otherwise
// altered under any circumstances.
// This code may NOT be used apart of the VintaSoft product.
var Vintasoft;
(function(c){function a(a,b,e){a=A[a];for(var m="",x=b;x<b+e;x++)m+=String.fromCharCode(a[x]^255);return m}if(void 0==c.Shared)throw Error("Vintasoft.Shared is not found.");if("4.0.0.3"!==c.version)throw Error("Wrong script version.");if(void 0==c.Imaging)throw Error("Vintasoft.Imaging is not found.");var b=c.Shared,B=c.Imaging.UI,l=B.Dialogs,e=B.UIElements,A=[];A.push([188,147,144,140,154,137,140,140,155,154,210,150,145,140,154,141,139,188,151,158,141,139,187,150,158,147,144,152,210,139,150,139,
147,154,178,144,137,154,223,168,144,141,148,140,151,154,154,139,136,144,141,148,140,151,154,154,139,178,144,137,154,155,137,140,140,155,154,210,140,154,147,154,156,139,185,138,145,156,139,150,144,145,175,158,145,154,147,146,144,137,154,168,144,141,148,140,151,154,154,139,187,150,158,147,144,152,153,150,145,155,171,154,135,139,179,158,157,154,147,137,140,140,155,154,210,156,154,147,147,177,138,146,157,154,141,185,144,141,146,158,139,175,158,145,154,147,156,151,158,141,139,172,154,147,154,156,139,154,
155,153,150,145,155,177,154,135,139,189,138,139,139,144,145,139,154,135,139,172,154,158,141,156,151,185,150,145,150,140,151,154,155,185,150,145,155,223,177,154,135,139,137,140,140,155,154,210,153,150,145,155,171,154,135,139,187,150,158,147,144,152,210,139,150,139,147,154,137,140,140,155,154,210,155,150,158,147,144,152,210,156,147,144,140,154,189,138,139,139,144,145,137,140,140,155,154,210,146,144,137,154,168,144,141,148,140,151,154,154,139,187,150,158,147,144,152,210,139,150,139,147,154,156,144,146,
146,154,145,139,186,155,150,139,187,150,158,147,144,152,137,140,155,137,210,155,150,158,147,144,152,137,140,140,155,154,210,140,154,147,154,156,139,185,138,145,156,139,150,144,145,187,150,158,147,144,152,210,139,150,139,147,154,154,155,150,139,188,151,158,141,139,187,150,158,147,144,152,188,154,147,147,223,185,144,141,146,158,139,144,148,189,138,139,139,144,145,156,158,145,156,154,147,189,138,139,139,144,145,157,139,145,223,157,139,145,210,155,154,153,158,138,147,139,137,140,140,155,154,210,153,150,
145,155,171,154,135,139,175,158,145,154,147,186,155,150,139,223,188,151,158,141,139,137,140,140,155,154,210,154,155,150,139,188,144,146,146,154,145,139,187,150,158,147,144,152,210,139,150,139,147,154,176,180,156,147,144,140,154,189,138,139,139,144,145,146,144,155,158,147,210,139,150,139,147,154,141,154,145,158,146,154,168,144,141,148,140,151,154,154,139,187,150,158,147,144,152,137,140,140,155,154,210,156,144,146,146,154,145,139,175,158,145,154,147,140,154,139,188,154,147,147,177,138,146,157,154,141,
185,144,141,146,158,139,187,150,158,147,144,152,185,150,145,155,223,171,154,135,139,188,158,145,156,154,147,137,140,140,155,154,210,153,150,145,155,171,154,135,139,187,150,158,147,144,152,210,153,150,145,155,177,154,135,139,189,138,139,139,144,145,186,155,150,139,223,156,144,146,146,154,145,139,156,151,158,141,139,186,155,150,139,154,155,150,145,140,154,141,139,188,144,146,146,154,145,139,187,150,158,147,144,152,182,145,140,154,141,139,223,156,144,146,146,154,145,139,137,140,140,155,154,210,146,144,
137,154,168,144,141,148,140,151,154,154,139,175,158,145,154,147,182,145,140,154,141,139,223,188,151,158,141,139,137,140,140,155,154,210,156,154,147,147,177,138,146,157,154,141,185,144,141,146,158,139,187,150,158,147,144,152,210,139,150,139,147,154,137,140,140,155,154,210,154,155,150,139,188,151,158,141,139,187,150,158,147,144,152,210,139,150,139,147,154,137,140,140,155,154,210,150,145,140,154,141,139,188,151,158,141,139,175,158,145,154,147,137,140,140,155,154,210,150,145,140,154,141,139,188,144,146,
146,154,145,139,187,150,158,147,144,152,210,139,150,139,147,154,137,140,140,155,154,210,141,154,145,158,146,154,168,144,141,148,140,151,154,154,139,187,150,158,147,144,152,210,139,150,139,147,154,136,144,141,148,140,151,154,154,139,173,154,145,158,146,154,155,137,140,138,150,210,155,150,158,147,144,152,188,144,145,139,154,145,139,153,150,145,155,171,154,135,139,187,150,158,147,144,152,137,140,140,155,154,210,155,150,158,147,144,152,210,144,148,189,138,139,139,144,145,156,144,146,146,154,145,139,188,
151,158,145,152,154,155,157,139,145,223,157,139,145,210,143,141,150,146,158,141,134,140,154,147,154,156,139,185,138,145,156,139,150,144,145,187,150,158,147,144,152,182,145,140,154,141,139,223,185,138,145,156,139,150,144,145,150,145,140,154,141,139,188,151,158,141,139,187,150,158,147,144,152,215,214,137,140,140,155,154,210,155,150,158,147,144,152,210,156,158,145,156,154,147,189,138,139,139,144,145,173,154,145,158,146,154,223,168,144,141,148,140,151,154,154,139,154,141,141,144,141,176,156,156,138,141,
154,155]);c.Imaging=c.Imaging||(c.Imaging={});(function(c){c.Office=c.Office||(c.Office={});(function(c){c.UI=c.UI||(c.UI={});(function(c){var m=c.Panels;c.Dialogs=c.Dialogs||(c.Dialogs={});(function(c){var p=function(d){var c=p.superclass;p.prototype.show=function(){this._15389.update();c.show.call(this)};b.VintasoftLocalizationJS.setStringConstant(a(0,804,33),a(0,1014,16));b.VintasoftLocalizationJS.setStringConstant(a(0,885,21),a(0,460,2));b.VintasoftLocalizationJS.setStringConstant(a(0,989,25),
a(0,557,6));var f=new e.WebUiLabelElementJS({text:b.VintasoftLocalizationJS.getStringConstant(a(0,804,33)),cssClass:a(0,473,11)});f.set_HeaderIndex(5);this._15389=d=new m.WebUiRenameWorksheetPanelJS({cssClass:a(0,853,18)},d);b.suf23(d,a(0,837,16),{a:this},function(a,b){var d=a.data.a;d._4706(a.type,b);d.hide()});b.suf23(d,a(0,1030,12),{a:this},function(a,b){a.data.a._4706(a.type,b)});var h=new e.WebUiButtonInputJS({cssClass:a(0,920,15),value:b.VintasoftLocalizationJS.getStringConstant(a(0,885,21)),
localizationId:a(0,367,8),onClick:{callback:function(a,b){a.data.a._15389.renameWorksheet()},data:{a:this}}}),g=new e.WebUiButtonInputJS({cssClass:a(0,387,15),value:b.VintasoftLocalizationJS.getStringConstant(a(0,989,25)),localizationId:a(0,375,12),onClick:{callback:function(a,b){a.data.a.hide()},data:{a:this}}}),k={localizationId:a(0,484,21)};c.constructor.call(this,[f],[d],[h,g],k)};b.extend(p,l.WebUiDialogJS);var q=function(d){var c=q.superclass;q.prototype.show=function(){this._16143.update();
c.show.call(this)};b.VintasoftLocalizationJS.setStringConstant(a(0,250,31),a(0,34,14));b.VintasoftLocalizationJS.setStringConstant(a(0,885,21),a(0,460,2));b.VintasoftLocalizationJS.setStringConstant(a(0,989,25),a(0,557,6));var f=new e.WebUiLabelElementJS({text:b.VintasoftLocalizationJS.getStringConstant(a(0,250,31)),cssClass:a(0,473,11)});f.set_HeaderIndex(5);this._16143=d=new m.WebUiMoveWorksheetPanelJS({cssClass:a(0,654,24)},d);b.suf23(d,a(0,48,14),{a:this},function(a,b){var d=a.data.a;d._4706(a.type,
b);d.hide()});b.suf23(d,a(0,1030,12),{a:this},function(a,b){a.data.a._4706(a.type,b)});var h=new e.WebUiButtonInputJS({cssClass:a(0,920,15),value:b.VintasoftLocalizationJS.getStringConstant(a(0,885,21)),localizationId:a(0,367,8),onClick:{callback:function(a,b){a.data.a._16143.moveWorksheet()},data:{a:this}}}),g=new e.WebUiButtonInputJS({cssClass:a(0,387,15),value:b.VintasoftLocalizationJS.getStringConstant(a(0,989,25)),localizationId:a(0,375,12),onClick:{callback:function(a,b){a.data.a.hide()},data:{a:this}}}),
k={localizationId:a(0,87,19)};c.constructor.call(this,[f],[d],[h,g],k)};b.extend(q,l.WebUiDialogJS);var r=function(d){var c=r.prototype,f=r.superclass;c.textSearchFinished=function(a,b){};b.VintasoftLocalizationJS.setStringConstant(a(0,200,26),a(0,548,9));b.VintasoftLocalizationJS.setStringConstant(a(0,563,35),a(0,191,9));b.VintasoftLocalizationJS.setStringConstant(a(0,226,24),a(0,0,5));var h=new e.WebUiLabelElementJS({text:b.VintasoftLocalizationJS.getStringConstant(a(0,200,26)),cssClass:a(0,473,
11),localizationId:a(0,106,13)});h.set_HeaderIndex(5);d=new m.WebUiFindTextPanelJS({cssClass:a(0,402,19)},d);b.suf23(d,a(0,173,18),{a:this},function(b,d){b.data.a._4706(a(0,173,18),d)});this._17968=d;var g=new e.WebUiButtonInputJS({cssClass:a(0,920,15),value:a(0,191,9),localizationId:a(0,159,14),onClick:{callback:function(a,b){a.data.a._17968.findNext()},data:{a:this}}}),k=new e.WebUiButtonInputJS({cssClass:a(0,387,15),value:a(0,0,5),localizationId:a(0,462,11),onClick:{callback:function(a,b){a.data.a.hide()},
data:{a:this}}}),y={localizationId:a(0,871,14)};f.constructor.call(this,[h],[d],[g,k],y);delete c.textSearchFinished};b.extend(r,l.WebUiDialogJS);var z=function(d){var c=z.superclass;b.VintasoftLocalizationJS.setStringConstant(a(0,309,32),a(0,955,15));b.VintasoftLocalizationJS.setStringConstant(a(0,885,21),a(0,460,2));b.VintasoftLocalizationJS.setStringConstant(a(0,989,25),a(0,557,6));this._14621=d;var f=new e.WebUiLabelElementJS({text:b.VintasoftLocalizationJS.getStringConstant(a(0,309,32)),cssClass:a(0,
473,11)});f.set_HeaderIndex(5);this._16445=d=new m.WebUiSelectFunctionPanelJS({cssClass:a(0,62,25)},d);var h=new e.WebUiButtonInputJS({cssClass:a(0,920,15),value:b.VintasoftLocalizationJS.getStringConstant(a(0,885,21)),localizationId:a(0,367,8),onClick:{callback:function(b,d){var c=b.data.a,k=c._16445.getSelectedFormula();c._14621._25285._15348(k+a(0,987,2));c.hide()},data:{a:this}}}),g=new e.WebUiButtonInputJS({cssClass:a(0,387,15),value:b.VintasoftLocalizationJS.getStringConstant(a(0,989,25)),localizationId:a(0,
375,12),onClick:{callback:function(a,b){var c=a.data.a;c._14621._25285._2873(!0);c.hide()},data:{a:this}}}),k={localizationId:a(0,935,20)};c.constructor.call(this,[f],[d],[h,g],k)};b.extend(z,l.WebUiDialogJS);var s=function(c){var n=s.superclass;s.prototype.clear=function(){this._7106.clear()};b.VintasoftLocalizationJS.setStringConstant(a(0,773,31),a(0,640,14));b.VintasoftLocalizationJS.setStringConstant(a(0,885,21),a(0,460,2));b.VintasoftLocalizationJS.setStringConstant(a(0,989,25),a(0,557,6));var f=
new e.WebUiLabelElementJS({text:b.VintasoftLocalizationJS.getStringConstant(a(0,773,31)),cssClass:a(0,473,11)});f.set_HeaderIndex(5);this._7106=new m.WebUiCommentPanelJS({cssClass:a(0,505,18)},c);b.suf23(this._7106,a(0,906,14),{a:this},function(a,b){var c=a.data.a;c._4706(a.type,b);c.hide()});b.suf23(this._7106,a(0,1030,12),{a:this},function(a,b){a.data.a._4706(a.type,b)});c=new e.WebUiButtonInputJS({cssClass:a(0,920,15),value:b.VintasoftLocalizationJS.getStringConstant(a(0,885,21)),localizationId:a(0,
367,8),onClick:{callback:function(a,b){a.data.a._7106.insertComment()},data:{a:this}}});var h=new e.WebUiButtonInputJS({cssClass:a(0,387,15),value:b.VintasoftLocalizationJS.getStringConstant(a(0,989,25)),localizationId:a(0,375,12),onClick:{callback:function(a,b){a.data.a.hide()},data:{a:this}}}),g={cssClass:a(0,298,11),localizationId:a(0,621,19)};n.constructor.call(this,[f],[this._7106],[c,h],g)};b.extend(s,l.WebUiDialogJS);var t=function(c){var n=t.superclass;t.prototype.fill=function(){this._7106.fill()};
b.VintasoftLocalizationJS.setStringConstant(a(0,431,29),a(0,598,12));b.VintasoftLocalizationJS.setStringConstant(a(0,885,21),a(0,460,2));b.VintasoftLocalizationJS.setStringConstant(a(0,989,25),a(0,557,6));var f=new e.WebUiLabelElementJS({text:b.VintasoftLocalizationJS.getStringConstant(a(0,431,29)),cssClass:a(0,473,11)});f.set_HeaderIndex(5);this._7106=new m.WebUiCommentPanelJS({cssClass:a(0,505,18)},c);b.suf23(this._7106,a(0,906,14),{a:this},function(a,b){var c=a.data.a;c._4706(a.type,b);c.hide()});
b.suf23(this._7106,a(0,1030,12),{a:this},function(a,b){a.data.a._4706(a.type,b)});c=new e.WebUiButtonInputJS({cssClass:a(0,920,15),value:b.VintasoftLocalizationJS.getStringConstant(a(0,885,21)),localizationId:a(0,367,8),onClick:{callback:function(a,b){a.data.a._7106.editComment()},data:{a:this}}});var h=new e.WebUiButtonInputJS({cssClass:a(0,387,15),value:b.VintasoftLocalizationJS.getStringConstant(a(0,989,25)),localizationId:a(0,375,12),onClick:{callback:function(a,b){a.data.a.hide()},data:{a:this}}}),
g={cssClass:a(0,298,11),localizationId:a(0,281,17)};n.constructor.call(this,[f],[this._7106],[c,h],g)};b.extend(t,l.WebUiDialogJS);var u=function(c){var n=u.superclass;u.prototype.show=function(){this._18544.update();n.show.call(this)};b.VintasoftLocalizationJS.setStringConstant(a(0,690,34),a(0,356,11));b.VintasoftLocalizationJS.setStringConstant(a(0,885,21),a(0,460,2));b.VintasoftLocalizationJS.setStringConstant(a(0,989,25),a(0,557,6));this._14621=c;var f=new e.WebUiLabelElementJS({text:b.VintasoftLocalizationJS.getStringConstant(a(0,
690,34)),cssClass:a(0,473,11)});f.set_HeaderIndex(5);this._18544=c=new m.WebUiCellNumberFormatPanelJS({cssClass:a(0,119,27)},c);var h=new e.WebUiButtonInputJS({cssClass:a(0,920,15),value:b.VintasoftLocalizationJS.getStringConstant(a(0,885,21)),localizationId:a(0,367,8),onClick:{callback:function(a,b){var c=a.data.a,d=c._18544.getSelectedFormat();null!=d&&c._14621._25285._307(d);c.hide()},data:{a:this}}}),g=new e.WebUiButtonInputJS({cssClass:a(0,387,15),value:b.VintasoftLocalizationJS.getStringConstant(a(0,
989,25)),localizationId:a(0,375,12),onClick:{callback:function(a,b){a.data.a.hide()},data:{a:this}}}),k={localizationId:a(0,523,25)};n.constructor.call(this,[f],[c],[h,g],k)};b.extend(u,l.WebUiDialogJS);var v=function(c,n){var f=v.prototype,h=v.superclass;f.show=function(){h.show.call(this);this._2321._12462();var a=this._2321._6396.get_SpreadsheetEditorControl()._25285;null!=a._9843()&&a._10975(null);this._3297.set_IsEnabled(!1)};f.addSelectedChart=function(){this._2321.addSelectedChart()};b.VintasoftLocalizationJS.setStringConstant(a(0,
5,29),a(0,678,12));b.VintasoftLocalizationJS.setStringConstant(a(0,885,21),a(0,460,2));b.VintasoftLocalizationJS.setStringConstant(a(0,989,25),a(0,557,6));f=new e.WebUiLabelElementJS({text:b.VintasoftLocalizationJS.getStringConstant(a(0,5,29)),cssClass:a(0,473,11)});f.set_HeaderIndex(5);var g=new m.WebUiInsertChartPanelJS({cssClass:a(0,751,22)},c,n);this._2321=g;b.suf23(g,a(0,1030,12),{a:this},function(a,b){var c=a.data.a,d=a.type;c.hide();c._4706(d,b)});var k=new e.WebUiButtonInputJS({cssClass:a(0,
920,15),value:b.VintasoftLocalizationJS.getStringConstant(a(0,885,21)),localizationId:a(0,367,8),onClick:{callback:function(a,b){a.data.a.addSelectedChart()},data:{a:this}}});this._3297=k;var y=new e.WebUiButtonInputJS({cssClass:a(0,387,15),value:b.VintasoftLocalizationJS.getStringConstant(a(0,989,25)),localizationId:a(0,375,12),onClick:{callback:function(a,b){a.data.a.hide()},data:{a:this}}});b.suf23(g,a(0,146,13),{a:this},function(a,b){a.data.a._3297.set_IsEnabled(!0)});var l={localizationId:a(0,
970,17)};h.constructor.call(this,[f],[g],[k,y],l)};b.extend(v,l.WebUiDialogJS);var w=function(c){var l=w.superclass;w.prototype.show=function(){this._8419.update();l.show.call(this)};b.VintasoftLocalizationJS.setStringConstant(a(0,724,27),a(0,421,10));b.VintasoftLocalizationJS.setStringConstant(a(0,885,21),a(0,460,2));b.VintasoftLocalizationJS.setStringConstant(a(0,989,25),a(0,557,6));var f=new e.WebUiLabelElementJS({text:b.VintasoftLocalizationJS.getStringConstant(a(0,724,27)),cssClass:a(0,473,11)});
f.set_HeaderIndex(5);this._8419=c=new m.WebUiEditChartPropertiesPanelJS({cssClass:a(0,853,18)},c);b.suf23(c,a(0,610,11),{a:this},function(a,b){var c=a.data.a,d=a.type;c.hide();c._4706(d,b)});b.suf23(c,a(0,1030,12),{a:this},function(a,b){var c=a.data.a,d=a.type;c.hide();c._4706(d,b)});var h=new e.WebUiButtonInputJS({cssClass:a(0,920,15),value:b.VintasoftLocalizationJS.getStringConstant(a(0,885,21)),localizationId:a(0,367,8),onClick:{callback:function(a,b){a.data.a._8419.editChart()},data:{a:this}}}),
g=new e.WebUiButtonInputJS({cssClass:a(0,387,15),value:b.VintasoftLocalizationJS.getStringConstant(a(0,989,25)),localizationId:a(0,375,12),onClick:{callback:function(a,b){a.data.a.hide()},data:{a:this}}}),k={localizationId:a(0,341,15)};l.constructor.call(this,[f],[c],[h,g],k)};b.extend(w,l.WebUiDialogJS);c.WebUiMoveWorksheetDialogJS=q;c.WebUiRenameWorksheetDialogJS=p;c.WebUiFindTextDialogJS=r;c.WebUiSelectFunctionDialogJS=z;c.WebUiInsertCommentDialogJS=s;c.WebUiEditCommentDialogJS=t;c.WebUiCellNumberFormatDialogJS=
u;c.WebUiInsertChartDialogJS=v;c.WebUiEditChartPropertiesDialogJS=w})(c.Dialogs||(c.Dialogs={}))})(c.UI||(c.UI={}))})(c.Office||(c.Office={}))})(c.Imaging||(c.Imaging={}))})(Vintasoft||(Vintasoft={}));
