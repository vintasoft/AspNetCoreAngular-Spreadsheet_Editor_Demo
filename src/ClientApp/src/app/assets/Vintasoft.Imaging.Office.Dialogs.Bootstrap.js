﻿// Copyright 2014-2024 VintaSoft Ltd. All rights reserved.
// This software is protected by International copyright laws.
// Any copying, duplication, deployment, redistribution, modification or other
// disposition hereof is STRICTLY PROHIBITED without an express written license
// granted by VintaSoft Ltd. This notice may not be removed or otherwise
// altered under any circumstances.
// This code may NOT be used apart of the VintaSoft product.
var Vintasoft;
(function(d){function a(a,b,f){a=D[a];for(var l="",A=b;A<b+f;A++)l+=String.fromCharCode(a[A]^255);return l}if(void 0==d.Shared)throw Error("Vintasoft.Shared is not found.");if("4.1.3.1"!==d.version)throw Error("Wrong script version.");if(void 0==d.Imaging)throw Error("Vintasoft.Imaging is not found.");var b=d.Shared,E=d.Imaging.UI,m=E.Dialogs,f=E.UIElements,D=[];D.push([176,180,137,140,155,137,210,155,150,158,147,144,152,137,140,138,150,210,155,150,158,147,144,152,188,144,145,139,154,145,139,188,
147,144,140,154,156,151,158,141,139,186,155,150,139,154,155,153,150,145,155,177,154,135,139,189,138,139,139,144,145,137,140,140,155,154,210,154,155,150,139,183,134,143,154,141,147,150,145,148,187,150,158,147,144,152,210,158,155,155,171,150,139,147,154,172,154,147,154,156,139,223,155,154,153,150,145,154,155,223,145,158,146,154,153,150,145,155,171,154,135,139,187,150,158,147,144,152,141,154,145,158,146,154,168,144,141,148,140,151,154,154,139,187,150,158,147,144,152,137,140,140,155,154,210,155,154,153,
150,145,154,155,177,158,146,154,178,158,145,158,152,154,141,175,158,145,154,147,154,141,141,144,141,176,156,156,138,141,154,155,185,150,145,155,223,177,154,135,139,136,144,141,148,140,151,154,154,139,178,144,137,154,155,190,155,155,223,183,134,143,154,141,147,150,145,148,140,154,147,154,156,139,185,138,145,156,139,150,144,145,187,150,158,147,144,152,140,154,139,188,154,147,147,177,138,146,157,154,141,185,144,141,146,158,139,187,150,158,147,144,152,137,140,140,155,154,210,140,154,147,154,156,139,185,
138,145,156,139,150,144,145,187,150,158,147,144,152,210,139,150,139,147,154,185,150,145,155,223,171,154,135,139,186,155,150,139,223,188,151,158,141,139,156,151,158,141,139,172,154,147,154,156,139,154,155,156,144,146,146,154,145,139,188,151,158,145,152,154,155,187,154,153,150,145,154,155,223,145,158,146,154,223,146,158,145,158,152,154,141,153,150,145,155,171,154,135,139,179,158,157,154,147,146,144,137,154,168,144,141,148,140,151,154,154,139,187,150,158,147,144,152,188,158,145,156,154,147,155,154,153,
150,145,154,155,177,158,146,154,178,158,145,158,152,154,141,187,150,158,147,144,152,137,140,140,155,154,210,155,150,158,147,144,152,210,156,158,145,156,154,147,189,138,139,139,144,145,154,155,150,139,183,134,143,154,141,147,150,145,148,187,150,158,147,144,152,156,158,145,156,154,147,189,138,139,139,144,145,137,140,140,155,154,210,155,154,153,150,145,154,155,177,158,146,154,179,150,140,139,187,150,158,147,144,152,210,139,150,139,147,154,150,145,140,154,141,139,188,151,158,141,139,187,150,158,147,144,
152,137,140,140,155,154,210,156,154,147,147,177,138,146,157,154,141,185,144,141,146,158,139,187,150,158,147,144,152,210,139,150,139,147,154,150,145,140,154,141,139,188,144,146,146,154,145,139,187,150,158,147,144,152,154,155,150,139,188,151,158,141,139,187,150,158,147,144,152,178,144,137,154,223,168,144,141,148,140,151,154,154,139,215,214,182,145,140,154,141,139,223,188,151,158,141,139,146,144,155,158,147,210,139,150,139,147,154,137,140,140,155,154,210,156,154,147,147,177,138,146,157,154,141,185,144,
141,146,158,139,175,158,145,154,147,140,154,147,154,156,139,187,154,153,150,145,154,155,177,158,146,154,187,150,158,147,144,152,137,140,140,155,154,210,156,144,146,146,154,145,139,175,158,145,154,147,137,140,140,155,154,210,150,145,140,154,141,139,188,151,158,141,139,175,158,145,154,147,158,155,155,187,154,153,150,145,154,155,177,158,146,154,187,150,158,147,144,152,137,140,140,155,154,210,140,154,147,154,156,139,185,138,145,156,139,150,144,145,175,158,145,154,147,137,140,140,155,154,210,154,155,150,
139,188,144,146,146,154,145,139,187,150,158,147,144,152,210,139,150,139,147,154,137,140,140,155,154,210,154,155,150,139,188,151,158,141,139,187,150,158,147,144,152,210,139,150,139,147,154,144,148,189,138,139,139,144,145,137,140,140,155,154,210,155,150,158,147,144,152,210,144,148,189,138,139,139,144,145,139,154,135,139,172,154,158,141,156,151,185,150,145,150,140,151,154,155,137,140,140,155,154,210,146,144,137,154,168,144,141,148,140,151,154,154,139,175,158,145,154,147,137,140,140,155,154,210,150,145,
140,154,141,139,188,151,158,141,139,187,150,158,147,144,152,210,139,150,139,147,154,137,140,140,155,154,210,153,150,145,155,171,154,135,139,187,150,158,147,144,152,210,139,150,139,147,154,137,140,140,155,154,210,154,155,150,139,183,134,143,154,141,147,150,145,148,187,150,158,147,144,152,210,154,155,150,139,171,150,139,147,154,182,145,140,154,141,139,223,156,144,146,146,154,145,139,137,140,140,155,154,210,155,150,158,147,144,152,210,156,147,144,140,154,189,138,139,139,144,145,137,140,140,155,154,210,
153,150,145,155,171,154,135,139,187,150,158,147,144,152,210,153,150,145,155,177,154,135,139,189,138,139,139,144,145,205,202,207,143,135,182,145,140,154,141,139,223,185,138,145,156,139,150,144,145,186,155,150,139,223,183,134,143,154,141,147,150,145,148,137,140,140,155,154,210,158,155,155,187,154,153,150,145,154,155,177,158,146,154,187,150,158,147,144,152,210,158,155,155,171,150,139,147,154,188,154,147,147,223,185,144,141,146,158,139,137,140,140,155,154,210,153,150,145,155,171,154,135,139,175,158,145,
154,147,137,140,140,155,154,210,154,155,150,139,187,154,153,150,145,154,155,177,158,146,154,175,158,145,154,147,137,140,140,155,154,210,150,145,140,154,141,139,188,144,146,146,154,145,139,187,150,158,147,144,152,210,139,150,139,147,154,157,139,145,223,157,139,145,210,143,141,150,146,158,141,134,186,155,150,139,223,156,144,146,146,154,145,139,137,140,140,155,154,210,155,154,153,150,145,154,155,177,158,146,154,178,158,145,158,152,154,141,187,150,158,147,144,152,210,139,150,139,147,154,157,139,145,223,
157,139,145,210,155,154,153,158,138,147,139,137,140,140,155,154,210,141,154,145,158,146,154,168,144,141,148,140,151,154,154,139,187,150,158,147,144,152,210,139,150,139,147,154,137,140,140,155,154,210,146,144,137,154,168,144,141,148,140,151,154,154,139,187,150,158,147,144,152,210,139,150,139,147,154,190,155,155,223,155,154,153,150,145,154,155,223,145,158,146,154,156,147,144,140,154,189,138,139,139,144,145,156,144,146,146,154,145,139,186,155,150,139,187,150,158,147,144,152,173,154,145,158,146,154,223,
168,144,141,148,140,151,154,154,139,136,144,141,148,140,151,154,154,139,173,154,145,158,146,154,155]);d.Imaging=d.Imaging||(d.Imaging={});(function(d){d.Office=d.Office||(d.Office={});(function(d){d.UI=d.UI||(d.UI={});(function(d){var l=d.Panels;d.Dialogs=d.Dialogs||(d.Dialogs={});(function(d){var n=function(c){var d=n.superclass;n.prototype.show=function(){this._898.update();d.show.call(this)};b.VintasoftLocalizationJS.setStringConstant(a(0,1303,33),a(0,1411,16));b.VintasoftLocalizationJS.setStringConstant(a(0,
843,21),a(0,0,2));b.VintasoftLocalizationJS.setStringConstant(a(0,431,25),a(0,401,6));var e=new f.WebUiLabelElementJS({text:b.VintasoftLocalizationJS.getStringConstant(a(0,1303,33)),cssClass:a(0,633,11)});e.set_HeaderIndex(5);this._898=c=new l.WebUiRenameWorksheetPanelJS({cssClass:a(0,13,18)},c);b.suf23(c,a(0,1427,16),{a:this},function(a,b){var c=a.data.a;c._27628(a.type,b);c.hide()});b.suf23(c,a(0,178,12),{a:this},function(a,b){a.data.a._27628(a.type,b)});var g=new f.WebUiButtonInputJS({cssClass:a(0,
1225,15),value:b.VintasoftLocalizationJS.getStringConstant(a(0,843,21)),localizationId:a(0,835,8),onClick:{callback:function(a,b){a.data.a._898.renameWorksheet()},data:{a:this}}}),h=new f.WebUiButtonInputJS({cssClass:a(0,1288,15),value:b.VintasoftLocalizationJS.getStringConstant(a(0,431,25)),localizationId:a(0,475,12),onClick:{callback:function(a,b){a.data.a.hide()},data:{a:this}}}),k={localizationId:a(0,128,21)};d.constructor.call(this,[e],[c],[g,h],k)};b.extend(n,m.WebUiDialogJS);var p=function(c){var d=
p.superclass;p.prototype.show=function(){this._11796.update();d.show.call(this)};b.VintasoftLocalizationJS.setStringConstant(a(0,1336,31),a(0,605,14));b.VintasoftLocalizationJS.setStringConstant(a(0,843,21),a(0,0,2));b.VintasoftLocalizationJS.setStringConstant(a(0,431,25),a(0,401,6));var e=new f.WebUiLabelElementJS({text:b.VintasoftLocalizationJS.getStringConstant(a(0,1336,31)),cssClass:a(0,633,11)});e.set_HeaderIndex(5);this._11796=c=new l.WebUiMoveWorksheetPanelJS({cssClass:a(0,882,24)},c);b.suf23(c,
a(0,199,14),{a:this},function(a,b){var c=a.data.a;c._27628(a.type,b);c.hide()});b.suf23(c,a(0,178,12),{a:this},function(a,b){a.data.a._27628(a.type,b)});var g=new f.WebUiButtonInputJS({cssClass:a(0,1225,15),value:b.VintasoftLocalizationJS.getStringConstant(a(0,843,21)),localizationId:a(0,835,8),onClick:{callback:function(a,b){a.data.a._11796.moveWorksheet()},data:{a:this}}}),h=new f.WebUiButtonInputJS({cssClass:a(0,1288,15),value:b.VintasoftLocalizationJS.getStringConstant(a(0,431,25)),localizationId:a(0,
475,12),onClick:{callback:function(a,b){a.data.a.hide()},data:{a:this}}}),k={localizationId:a(0,382,19)};d.constructor.call(this,[e],[c],[g,h],k)};b.extend(p,m.WebUiDialogJS);var q=function(c){var d=q.prototype,e=q.superclass;d.textSearchFinished=function(a,b){};b.VintasoftLocalizationJS.setStringConstant(a(0,935,26),a(0,303,9));b.VintasoftLocalizationJS.setStringConstant(a(0,1034,35),a(0,190,9));b.VintasoftLocalizationJS.setStringConstant(a(0,1010,24),a(0,31,5));var g=new f.WebUiLabelElementJS({text:b.VintasoftLocalizationJS.getStringConstant(a(0,
935,26)),cssClass:a(0,633,11),localizationId:a(0,369,13)});g.set_HeaderIndex(5);c=new l.WebUiFindTextPanelJS({cssClass:a(0,1149,19)},c);b.suf23(c,a(0,864,18),{a:this},function(b,c){b.data.a._27628(a(0,864,18),c)});this._21211=c;var h=new f.WebUiButtonInputJS({cssClass:a(0,1225,15),value:a(0,190,9),localizationId:a(0,47,14),onClick:{callback:function(a,b){a.data.a._21211.findNext()},data:{a:this}}}),k=new f.WebUiButtonInputJS({cssClass:a(0,1288,15),value:a(0,31,5),localizationId:a(0,1383,11),onClick:{callback:function(a,
b){a.data.a.hide()},data:{a:this}}}),B={localizationId:a(0,114,14)};e.constructor.call(this,[g],[c],[h,k],B);delete d.textSearchFinished};b.extend(q,m.WebUiDialogJS);var C=function(c){var d=C.superclass;b.VintasoftLocalizationJS.setStringConstant(a(0,271,32),a(0,1074,15));b.VintasoftLocalizationJS.setStringConstant(a(0,843,21),a(0,0,2));b.VintasoftLocalizationJS.setStringConstant(a(0,431,25),a(0,401,6));this._8552=c;var e=new f.WebUiLabelElementJS({text:b.VintasoftLocalizationJS.getStringConstant(a(0,
271,32)),cssClass:a(0,633,11)});e.set_HeaderIndex(5);this._14443=c=new l.WebUiSelectFunctionPanelJS({cssClass:a(0,754,25)},c);var g=new f.WebUiButtonInputJS({cssClass:a(0,1225,15),value:b.VintasoftLocalizationJS.getStringConstant(a(0,843,21)),localizationId:a(0,835,8),onClick:{callback:function(b,c){var d=b.data.a,k=d._14443.getSelectedFormula();d._8552._24042._16098(k+a(0,619,2));d.hide()},data:{a:this}}}),h=new f.WebUiButtonInputJS({cssClass:a(0,1288,15),value:b.VintasoftLocalizationJS.getStringConstant(a(0,
431,25)),localizationId:a(0,475,12),onClick:{callback:function(a,b){var c=a.data.a;c._8552._24042._3263(!0);c.hide()},data:{a:this}}}),k={localizationId:a(0,226,20)};d.constructor.call(this,[e],[c],[g,h],k)};b.extend(C,m.WebUiDialogJS);var r=function(c){var d=r.superclass;r.prototype.clear=function(){this._10901.clear()};b.VintasoftLocalizationJS.setStringConstant(a(0,1194,31),a(0,996,14));b.VintasoftLocalizationJS.setStringConstant(a(0,843,21),a(0,0,2));b.VintasoftLocalizationJS.setStringConstant(a(0,
431,25),a(0,401,6));var e=new f.WebUiLabelElementJS({text:b.VintasoftLocalizationJS.getStringConstant(a(0,1194,31)),cssClass:a(0,633,11)});e.set_HeaderIndex(5);this._10901=new l.WebUiCommentPanelJS({cssClass:a(0,694,18)},c);b.suf23(this._10901,a(0,335,14),{a:this},function(a,b){var c=a.data.a;c._27628(a.type,b);c.hide()});b.suf23(this._10901,a(0,178,12),{a:this},function(a,b){a.data.a._27628(a.type,b)});c=new f.WebUiButtonInputJS({cssClass:a(0,1225,15),value:b.VintasoftLocalizationJS.getStringConstant(a(0,
843,21)),localizationId:a(0,835,8),onClick:{callback:function(a,b){a.data.a._10901.insertComment()},data:{a:this}}});var g=new f.WebUiButtonInputJS({cssClass:a(0,1288,15),value:b.VintasoftLocalizationJS.getStringConstant(a(0,431,25)),localizationId:a(0,475,12),onClick:{callback:function(a,b){a.data.a.hide()},data:{a:this}}}),h={cssClass:a(0,2,11),localizationId:a(0,571,19)};d.constructor.call(this,[e],[this._10901],[c,g],h)};b.extend(r,m.WebUiDialogJS);var s=function(c){var d=s.superclass;s.prototype.fill=
function(){this._10901.fill()};b.VintasoftLocalizationJS.setStringConstant(a(0,779,29),a(0,1240,12));b.VintasoftLocalizationJS.setStringConstant(a(0,843,21),a(0,0,2));b.VintasoftLocalizationJS.setStringConstant(a(0,431,25),a(0,401,6));var e=new f.WebUiLabelElementJS({text:b.VintasoftLocalizationJS.getStringConstant(a(0,779,29)),cssClass:a(0,633,11)});e.set_HeaderIndex(5);this._10901=new l.WebUiCommentPanelJS({cssClass:a(0,694,18)},c);b.suf23(this._10901,a(0,335,14),{a:this},function(a,b){var c=a.data.a;
c._27628(a.type,b);c.hide()});b.suf23(this._10901,a(0,178,12),{a:this},function(a,b){a.data.a._27628(a.type,b)});c=new f.WebUiButtonInputJS({cssClass:a(0,1225,15),value:b.VintasoftLocalizationJS.getStringConstant(a(0,843,21)),localizationId:a(0,835,8),onClick:{callback:function(a,b){a.data.a._10901.editComment()},data:{a:this}}});var g=new f.WebUiButtonInputJS({cssClass:a(0,1288,15),value:b.VintasoftLocalizationJS.getStringConstant(a(0,431,25)),localizationId:a(0,475,12),onClick:{callback:function(a,
b){a.data.a.hide()},data:{a:this}}}),h={cssClass:a(0,2,11),localizationId:a(0,1394,17)};d.constructor.call(this,[e],[this._10901],[c,g],h)};b.extend(s,m.WebUiDialogJS);var t=function(c){var d=t.superclass;t.prototype.show=function(){this._9955.update();d.show.call(this)};b.VintasoftLocalizationJS.setStringConstant(a(0,537,34),a(0,1138,11));b.VintasoftLocalizationJS.setStringConstant(a(0,843,21),a(0,0,2));b.VintasoftLocalizationJS.setStringConstant(a(0,431,25),a(0,401,6));this._8552=c;var e=new f.WebUiLabelElementJS({text:b.VintasoftLocalizationJS.getStringConstant(a(0,
537,34)),cssClass:a(0,633,11)});e.set_HeaderIndex(5);this._9955=c=new l.WebUiCellNumberFormatPanelJS({cssClass:a(0,644,27)},c);var g=new f.WebUiButtonInputJS({cssClass:a(0,1225,15),value:b.VintasoftLocalizationJS.getStringConstant(a(0,843,21)),localizationId:a(0,835,8),onClick:{callback:function(a,b){var c=a.data.a,d=c._9955.getSelectedFormat();null!=d&&c._8552._24042._26647(d);c.hide()},data:{a:this}}}),h=new f.WebUiButtonInputJS({cssClass:a(0,1288,15),value:b.VintasoftLocalizationJS.getStringConstant(a(0,
431,25)),localizationId:a(0,475,12),onClick:{callback:function(a,b){a.data.a.hide()},data:{a:this}}}),k={localizationId:a(0,246,25)};d.constructor.call(this,[e],[c],[g,h],k)};b.extend(t,m.WebUiDialogJS);var u=function(c,d){var e=u.prototype,g=u.superclass;e.show=function(){g.show.call(this);this._6533._15995();var a=this._6533._25912.get_SpreadsheetEditorControl()._24042;null!=a._7997()&&a._15372(null);this._6826.set_IsEnabled(!1)};e.addSelectedChart=function(){this._6533.addSelectedChart()};b.VintasoftLocalizationJS.setStringConstant(a(0,
906,29),a(0,621,12));b.VintasoftLocalizationJS.setStringConstant(a(0,843,21),a(0,0,2));b.VintasoftLocalizationJS.setStringConstant(a(0,431,25),a(0,401,6));e=new f.WebUiLabelElementJS({text:b.VintasoftLocalizationJS.getStringConstant(a(0,906,29)),cssClass:a(0,633,11)});e.set_HeaderIndex(5);var h=new l.WebUiInsertChartPanelJS({cssClass:a(0,712,22)},c,d);this._6533=h;b.suf23(h,a(0,178,12),{a:this},function(a,b){var c=a.data.a,d=a.type;c.hide();c._27628(d,b)});var k=new f.WebUiButtonInputJS({cssClass:a(0,
1225,15),value:b.VintasoftLocalizationJS.getStringConstant(a(0,843,21)),localizationId:a(0,835,8),onClick:{callback:function(a,b){a.data.a.addSelectedChart()},data:{a:this}}});this._6826=k;var B=new f.WebUiButtonInputJS({cssClass:a(0,1288,15),value:b.VintasoftLocalizationJS.getStringConstant(a(0,431,25)),localizationId:a(0,475,12),onClick:{callback:function(a,b){a.data.a.hide()},data:{a:this}}});b.suf23(h,a(0,322,13),{a:this},function(a,b){a.data.a._6826.set_IsEnabled(!0)});var m={localizationId:a(0,
520,17)};g.constructor.call(this,[e],[h],[k,B],m)};b.extend(u,m.WebUiDialogJS);var v=function(c){var d=v.superclass;v.prototype.show=function(){this._12359.update();d.show.call(this)};b.VintasoftLocalizationJS.setStringConstant(a(0,808,27),a(0,312,10));b.VintasoftLocalizationJS.setStringConstant(a(0,843,21),a(0,0,2));b.VintasoftLocalizationJS.setStringConstant(a(0,431,25),a(0,401,6));var e=new f.WebUiLabelElementJS({text:b.VintasoftLocalizationJS.getStringConstant(a(0,808,27)),cssClass:a(0,633,11)});
e.set_HeaderIndex(5);this._12359=c=new l.WebUiEditChartPropertiesPanelJS({cssClass:a(0,13,18)},c);b.suf23(c,a(0,36,11),{a:this},function(a,b){var c=a.data.a,d=a.type;c.hide();c._27628(d,b)});b.suf23(c,a(0,178,12),{a:this},function(a,b){var c=a.data.a,d=a.type;c.hide();c._27628(d,b)});var g=new f.WebUiButtonInputJS({cssClass:a(0,1225,15),value:b.VintasoftLocalizationJS.getStringConstant(a(0,843,21)),localizationId:a(0,835,8),onClick:{callback:function(a,b){a.data.a._12359.editChart()},data:{a:this}}}),
h=new f.WebUiButtonInputJS({cssClass:a(0,1288,15),value:b.VintasoftLocalizationJS.getStringConstant(a(0,431,25)),localizationId:a(0,475,12),onClick:{callback:function(a,b){a.data.a.hide()},data:{a:this}}}),k={localizationId:a(0,590,15)};d.constructor.call(this,[e],[c],[g,h],k)};b.extend(v,m.WebUiDialogJS);var w=function(c){var d=w.superclass;w.prototype.show=function(){this._9099.update(this);d.show.call(this)};b.VintasoftLocalizationJS.setStringConstant(a(0,61,34),a(0,213,13));b.VintasoftLocalizationJS.setStringConstant(a(0,
961,35),a(0,1089,14));b.VintasoftLocalizationJS.setStringConstant(a(0,843,21),a(0,0,2));b.VintasoftLocalizationJS.setStringConstant(a(0,431,25),a(0,401,6));this._8552=c;var e=new f.WebUiLabelElementJS({text:b.VintasoftLocalizationJS.getStringConstant(a(0,61,34)),cssClass:a(0,633,11)});e.set_HeaderIndex(5);this._14269=e;this._9099=c=new l.WebUiEditHyperlinkPanelJS({css:{height:a(0,1069,5)}},c);var g=new f.WebUiButtonInputJS({cssClass:a(0,1225,15),value:b.VintasoftLocalizationJS.getStringConstant(a(0,
843,21)),localizationId:a(0,835,8),onClick:{callback:function(a,b){var c=a.data.a;c._9099.addHyperlink();c.hide()},data:{a:this}}}),h=new f.WebUiButtonInputJS({cssClass:a(0,1288,15),value:b.VintasoftLocalizationJS.getStringConstant(a(0,431,25)),localizationId:a(0,475,12),onClick:{callback:function(a,b){a.data.a.hide()},data:{a:this}}}),k={localizationId:a(0,456,19)};d.constructor.call(this,[e],[c],[g,h],k)};b.extend(w,m.WebUiDialogJS);var x=function(c){var d=x.superclass;x.prototype.show=function(){this._928.update();
d.show.call(this)};b.VintasoftLocalizationJS.setStringConstant(a(0,487,33),a(0,95,19));b.VintasoftLocalizationJS.setStringConstant(a(0,843,21),a(0,0,2));b.VintasoftLocalizationJS.setStringConstant(a(0,431,25),a(0,401,6));var e=new f.WebUiLabelElementJS({text:b.VintasoftLocalizationJS.getStringConstant(a(0,487,33)),cssClass:a(0,633,11)});e.set_HeaderIndex(5);var g=new l.WebUiSelectDefinedNamePanelJS({cssClass:a(0,13,18)},c);this._928=g;this._8552=c;c=new f.WebUiButtonInputJS({cssClass:a(0,1225,15),
value:b.VintasoftLocalizationJS.getStringConstant(a(0,843,21)),localizationId:a(0,835,8),onClick:{callback:function(a,b){var c=a.data.a,d=c._928.getSelectedName();c._8552._24042._16098(d);c.hide()},data:{a:this}}});var h=new f.WebUiButtonInputJS({cssClass:a(0,1288,15),value:b.VintasoftLocalizationJS.getStringConstant(a(0,431,25)),localizationId:a(0,475,12),onClick:{callback:function(a,b){a.data.a.hide()},data:{a:this}}}),k={localizationId:a(0,671,23)};d.constructor.call(this,[e],[g],[c,h],k)};b.extend(x,
m.WebUiDialogJS);var y=function(c){var d=y.superclass;y.prototype.show=function(){this._18653.update(null);d.show.call(this)};b.VintasoftLocalizationJS.setStringConstant(a(0,1103,35),a(0,1367,16));b.VintasoftLocalizationJS.setStringConstant(a(0,843,21),a(0,0,2));b.VintasoftLocalizationJS.setStringConstant(a(0,431,25),a(0,401,6));var e=new f.WebUiLabelElementJS({text:b.VintasoftLocalizationJS.getStringConstant(a(0,1103,35)),cssClass:a(0,633,11)});e.set_HeaderIndex(5);var g=new l.WebUiEditDefinedNamePanelJS({cssClass:a(0,
1168,26)},c);this._18653=g;this._8552=c;c=new f.WebUiButtonInputJS({cssClass:a(0,1225,15),value:b.VintasoftLocalizationJS.getStringConstant(a(0,843,21)),localizationId:a(0,835,8),onClick:{callback:function(a,b){var c=a.data.a;c._18653.applyChanges()&&c.hide()},data:{a:this}}});var h=new f.WebUiButtonInputJS({cssClass:a(0,1288,15),value:b.VintasoftLocalizationJS.getStringConstant(a(0,431,25)),localizationId:a(0,475,12),onClick:{callback:function(a,b){a.data.a.hide()},data:{a:this}}}),k={localizationId:a(0,
734,20)};d.constructor.call(this,[e],[g],[c,h],k)};b.extend(y,m.WebUiDialogJS);var z=function(c){var d=z.superclass;z.prototype.show=function(){this._3922.update();d.show.call(this)};b.VintasoftLocalizationJS.setStringConstant(a(0,1252,36),a(0,349,20));b.VintasoftLocalizationJS.setStringConstant(a(0,1010,24),a(0,31,5));var e=new f.WebUiLabelElementJS({text:b.VintasoftLocalizationJS.getStringConstant(a(0,1252,36)),cssClass:a(0,633,11)});e.set_HeaderIndex(5);var g=new l.WebUiDefinedNameManagerPanelJS({cssClass:a(0,
149,29)},c);this._3922=g;this._8552=c;c=new f.WebUiButtonInputJS({cssClass:a(0,1288,15),value:b.VintasoftLocalizationJS.getStringConstant(a(0,1010,24)),localizationId:a(0,1383,11),onClick:{callback:function(a,b){a.data.a.hide()},data:{a:this}}});var h={localizationId:a(0,407,24)};d.constructor.call(this,[e],[g],[c],h)};b.extend(z,m.WebUiDialogJS);d.WebUiMoveWorksheetDialogJS=p;d.WebUiRenameWorksheetDialogJS=n;d.WebUiFindTextDialogJS=q;d.WebUiSelectFunctionDialogJS=C;d.WebUiInsertCommentDialogJS=r;
d.WebUiEditCommentDialogJS=s;d.WebUiCellNumberFormatDialogJS=t;d.WebUiInsertChartDialogJS=u;d.WebUiEditChartPropertiesDialogJS=v;d.WebUiEditHyperlinkDialogJS=w;d.WebUiSelectDefinedNameDialogJS=x;d.WebUiAddDefinedNameDialogJS=y;d.WebUiDefinedNameManagerDialogJS=z})(d.Dialogs||(d.Dialogs={}))})(d.UI||(d.UI={}))})(d.Office||(d.Office={}))})(d.Imaging||(d.Imaging={}))})(Vintasoft||(Vintasoft={}));
