﻿// Copyright 2014-2024 VintaSoft LLC. All rights reserved.
// This software is protected by International copyright laws.
// Any copying, duplication, deployment, redistribution, modification or other
// disposition hereof is STRICTLY PROHIBITED without an express written license
// granted by VintaSoft LLC. This notice may not be removed or otherwise
// altered under any circumstances.
// This code may NOT be used apart of the VintaSoft product.
var Vintasoft;
(function(d){function a(a,b,f){a=D[a];for(var l="",B=b;B<b+f;B++)l+=String.fromCharCode(a[B]^255);return l}if(void 0==d.Shared)throw Error("Vintasoft.Shared is not found.");if("4.3.0.1"!==d.version)throw Error("Wrong script version.");if(void 0==d.Imaging)throw Error("Vintasoft.Imaging is not found.");if("12.5.8.1"!==d.Imaging.version)throw Error("Wrong version of Vintasoft.Imaging script.");if(void 0==d.Imaging.Office)throw Error("Vintasoft.Imaging.Office is not found.");if("4.5.8.1"!==d.Imaging.Office.version)throw Error("Wrong version of Vintasoft.Imaging.Office script.");
var b=d.Shared,E=d.Imaging.UI,m=E.Dialogs,f=E.UIElements,D=[];D.push([150,145,140,154,141,139,188,151,158,141,139,187,150,158,147,144,152,185,150,145,155,223,177,154,135,139,137,140,140,155,154,210,154,155,150,139,183,134,143,154,141,147,150,145,148,187,150,158,147,144,152,210,154,155,150,139,171,150,139,147,154,136,144,141,148,140,151,154,154,139,173,154,145,158,146,154,155,188,147,144,140,154,186,155,150,139,223,188,151,158,141,139,137,140,140,155,154,210,155,154,153,150,145,154,155,177,158,146,
154,178,158,145,158,152,154,141,175,158,145,154,147,137,140,140,155,154,210,156,144,146,146,154,145,139,175,158,145,154,147,140,154,147,154,156,139,187,154,153,150,145,154,155,177,158,146,154,187,150,158,147,144,152,136,144,141,148,140,151,154,154,139,178,144,137,154,155,150,145,140,154,141,139,188,144,146,146,154,145,139,187,150,158,147,144,152,137,140,138,150,210,155,150,158,147,144,152,188,144,145,139,154,145,139,158,155,155,187,154,153,150,145,154,155,177,158,146,154,187,150,158,147,144,152,137,
140,140,155,154,210,155,150,158,147,144,152,210,156,147,144,140,154,189,138,139,139,144,145,137,140,140,155,154,210,154,155,150,139,188,144,146,146,154,145,139,187,150,158,147,144,152,210,139,150,139,147,154,205,202,207,143,135,215,214,137,140,140,155,154,210,140,154,147,154,156,139,185,138,145,156,139,150,144,145,187,150,158,147,144,152,210,139,150,139,147,154,157,139,145,223,157,139,145,210,155,154,153,158,138,147,139,176,180,167,179,172,167,223,155,144,156,138,146,154,145,139,223,150,140,223,145,
144,139,223,153,144,138,145,155,209,137,140,140,155,154,210,150,145,140,154,141,139,188,151,158,141,139,175,158,145,154,147,140,154,147,154,156,139,185,138,145,156,139,150,144,145,187,150,158,147,144,152,153,150,145,155,177,154,135,139,189,138,139,139,144,145,139,154,135,139,172,154,158,141,156,151,185,150,145,150,140,151,154,155,137,140,140,155,154,210,141,154,145,158,146,154,168,144,141,148,140,151,154,154,139,187,150,158,147,144,152,210,139,150,139,147,154,137,140,140,155,154,210,154,155,150,139,
188,151,158,141,139,187,150,158,147,144,152,210,139,150,139,147,154,156,147,144,140,154,189,138,139,139,144,145,154,141,141,144,141,176,156,156,138,141,154,155,190,155,155,223,183,134,143,154,141,147,150,145,148,137,140,140,155,154,210,156,154,147,147,177,138,146,157,154,141,185,144,141,146,158,139,187,150,158,147,144,152,210,139,150,139,147,154,182,145,140,154,141,139,223,188,151,158,141,139,188,158,145,156,154,147,187,154,153,150,145,154,155,223,145,158,146,154,223,146,158,145,158,152,154,141,137,
140,155,137,210,155,150,158,147,144,152,156,158,145,156,154,147,189,138,139,139,144,145,137,140,140,155,154,210,153,150,145,155,171,154,135,139,187,150,158,147,144,152,210,153,150,145,155,177,154,135,139,189,138,139,139,144,145,190,155,155,223,155,154,153,150,145,154,155,223,145,158,146,154,188,154,147,147,223,185,144,141,146,158,139,137,140,140,155,154,210,146,144,137,154,168,144,141,148,140,151,154,154,139,175,158,145,154,147,156,151,158,141,139,172,154,147,154,156,139,154,155,137,140,140,155,154,
210,155,154,153,150,145,154,155,177,158,146,154,179,150,140,139,187,150,158,147,144,152,210,139,150,139,147,154,178,144,137,154,223,168,144,141,148,140,151,154,154,139,154,155,150,139,188,151,158,141,139,187,150,158,147,144,152,137,140,140,155,154,210,155,150,158,147,144,152,210,156,158,145,156,154,147,189,138,139,139,144,145,137,140,140,155,154,210,155,150,158,147,144,152,210,144,148,189,138,139,139,144,145,157,139,145,223,157,139,145,210,143,141,150,146,158,141,134,137,140,140,155,154,210,154,155,
150,139,187,154,153,150,145,154,155,177,158,146,154,175,158,145,154,147,172,154,147,154,156,139,223,155,154,153,150,145,154,155,223,145,158,146,154,153,150,145,155,171,154,135,139,179,158,157,154,147,137,140,140,155,154,210,153,150,145,155,171,154,135,139,187,150,158,147,144,152,210,139,150,139,147,154,146,144,137,154,168,144,141,148,140,151,154,154,139,187,150,158,147,144,152,137,140,140,155,154,210,154,155,150,139,183,134,143,154,141,147,150,145,148,187,150,158,147,144,152,210,158,155,155,171,150,
139,147,154,137,140,140,155,154,210,153,150,145,155,171,154,135,139,175,158,145,154,147,137,140,140,155,154,210,155,154,153,150,145,154,155,177,158,146,154,178,158,145,158,152,154,141,187,150,158,147,144,152,210,139,150,139,147,154,141,154,145,158,146,154,168,144,141,148,140,151,154,154,139,187,150,158,147,144,152,137,140,140,155,154,210,146,144,137,154,168,144,141,148,140,151,154,154,139,187,150,158,147,144,152,210,139,150,139,147,154,182,145,140,154,141,139,223,185,138,145,156,139,150,144,145,140,
154,139,188,154,147,147,177,138,146,157,154,141,185,144,141,146,158,139,187,150,158,147,144,152,146,144,155,158,147,210,139,150,139,147,154,173,154,145,158,146,154,223,168,144,141,148,140,151,154,154,139,144,148,189,138,139,139,144,145,137,140,140,155,154,210,140,154,147,154,156,139,185,138,145,156,139,150,144,145,175,158,145,154,147,153,150,145,155,171,154,135,139,187,150,158,147,144,152,156,144,146,146,154,145,139,186,155,150,139,187,150,158,147,144,152,137,140,140,155,154,210,156,154,147,147,177,
138,146,157,154,141,185,144,141,146,158,139,175,158,145,154,147,185,150,145,155,223,171,154,135,139,156,151,158,141,139,186,155,150,139,154,155,186,155,150,139,223,156,144,146,146,154,145,139,156,144,146,146,154,145,139,188,151,158,145,152,154,155,182,145,140,154,141,139,223,156,144,146,146,154,145,139,137,140,140,155,154,210,150,145,140,154,141,139,188,144,146,146,154,145,139,187,150,158,147,144,152,210,139,150,139,147,154,137,140,140,155,154,210,158,155,155,187,154,153,150,145,154,155,177,158,146,
154,187,150,158,147,144,152,210,158,155,155,171,150,139,147,154,155,154,153,150,145,154,155,177,158,146,154,178,158,145,158,152,154,141,187,150,158,147,144,152,154,155,150,139,183,134,143,154,141,147,150,145,148,187,150,158,147,144,152,186,155,150,139,223,183,134,143,154,141,147,150,145,148,137,140,140,155,154,210,150,145,140,154,141,139,188,151,158,141,139,187,150,158,147,144,152,210,139,150,139,147,154]);d.Imaging=d.Imaging||(d.Imaging={});(function(d){d.Office=d.Office||(d.Office={});(function(d){d.UI=
d.UI||(d.UI={});(function(d){var l=d.Panels;d.Dialogs=d.Dialogs||(d.Dialogs={});(function(d){var n=function(c){var d=n.superclass;n.prototype.show=function(){this._26569.update();d.show.call(this)};b.VintasoftLocalizationJS.setStringConstant(a(0,443,33),a(0,1151,16));b.VintasoftLocalizationJS.setStringConstant(a(0,820,21),a(0,340,2));b.VintasoftLocalizationJS.setStringConstant(a(0,795,25),a(0,585,6));var e=new f.WebUiLabelElementJS({text:b.VintasoftLocalizationJS.getStringConstant(a(0,443,33)),cssClass:a(0,
1140,11)});e.set_HeaderIndex(5);this._26569=c=new l.WebUiRenameWorksheetPanelJS({cssClass:a(0,195,18)},c);b.suf23(c,a(0,61,16),{a:this},function(a,b){var c=a.data.a;c._29717(a.type,b);c.hide()});b.suf23(c,a(0,514,12),{a:this},function(a,b){a.data.a._29717(a.type,b)});var g=new f.WebUiButtonInputJS({cssClass:a(0,841,15),value:b.VintasoftLocalizationJS.getStringConstant(a(0,820,21)),localizationId:a(0,1167,8),onClick:{callback:function(a,b){a.data.a._26569.renameWorksheet()},data:{a:this}}}),h=new f.WebUiButtonInputJS({cssClass:a(0,
325,15),value:b.VintasoftLocalizationJS.getStringConstant(a(0,795,25)),localizationId:a(0,622,12),onClick:{callback:function(a,b){a.data.a.hide()},data:{a:this}}}),k={localizationId:a(0,1048,21)};d.constructor.call(this,[e],[c],[g,h],k)};b.extend(n,m.WebUiDialogJS);var p=function(c){var d=p.superclass;p.prototype.show=function(){this._25329.update();d.show.call(this)};b.VintasoftLocalizationJS.setStringConstant(a(0,1069,31),a(0,766,14));b.VintasoftLocalizationJS.setStringConstant(a(0,820,21),a(0,
340,2));b.VintasoftLocalizationJS.setStringConstant(a(0,795,25),a(0,585,6));var e=new f.WebUiLabelElementJS({text:b.VintasoftLocalizationJS.getStringConstant(a(0,1069,31)),cssClass:a(0,1140,11)});e.set_HeaderIndex(5);this._25329=c=new l.WebUiMoveWorksheetPanelJS({cssClass:a(0,696,24)},c);b.suf23(c,a(0,162,14),{a:this},function(a,b){var c=a.data.a;c._29717(a.type,b);c.hide()});b.suf23(c,a(0,514,12),{a:this},function(a,b){a.data.a._29717(a.type,b)});var g=new f.WebUiButtonInputJS({cssClass:a(0,841,
15),value:b.VintasoftLocalizationJS.getStringConstant(a(0,820,21)),localizationId:a(0,1167,8),onClick:{callback:function(a,b){a.data.a._25329.moveWorksheet()},data:{a:this}}}),h=new f.WebUiButtonInputJS({cssClass:a(0,325,15),value:b.VintasoftLocalizationJS.getStringConstant(a(0,795,25)),localizationId:a(0,622,12),onClick:{callback:function(a,b){a.data.a.hide()},data:{a:this}}}),k={localizationId:a(0,940,19)};d.constructor.call(this,[e],[c],[g,h],k)};b.extend(p,m.WebUiDialogJS);var q=function(c){var d=
q.prototype,e=q.superclass;d.textSearchFinished=function(a,b){};d.show=function(){if(null==this._21121._1314._4572()){var b=Error(a(0,342,27));this._29717(a(0,514,12),{error:b})}else e.show.call(this)};b.VintasoftLocalizationJS.setStringConstant(a(0,914,26),a(0,1258,9));b.VintasoftLocalizationJS.setStringConstant(a(0,634,35),a(0,17,9));b.VintasoftLocalizationJS.setStringConstant(a(0,233,24),a(0,77,5));this._21121=c;var g=new f.WebUiLabelElementJS({text:b.VintasoftLocalizationJS.getStringConstant(a(0,
914,26)),cssClass:a(0,1140,11),localizationId:a(0,901,13)});g.set_HeaderIndex(5);c=new l.WebUiFindTextPanelJS({cssClass:a(0,993,19)},c);b.suf23(c,a(0,425,18),{a:this},function(b,c){b.data.a._29717(a(0,425,18),c)});this._5272=c;var h=new f.WebUiButtonInputJS({cssClass:a(0,841,15),value:a(0,17,9),localizationId:a(0,411,14),onClick:{callback:function(a,b){a.data.a._5272.findNext()},data:{a:this}}}),k=new f.WebUiButtonInputJS({cssClass:a(0,325,15),value:a(0,77,5),localizationId:a(0,503,11),onClick:{callback:function(a,
b){a.data.a.hide()},data:{a:this}}}),C={localizationId:a(0,1200,14)};e.constructor.call(this,[g],[c],[h,k],C);delete d.textSearchFinished};b.extend(q,m.WebUiDialogJS);var r=function(c){var d=r.superclass;r.prototype.show=function(){if(null==this._21121._1314._4572()){var b=Error(a(0,342,27));this._29717(a(0,514,12),{error:b})}else d.show.call(this)};b.VintasoftLocalizationJS.setStringConstant(a(0,293,32),a(0,1100,15));b.VintasoftLocalizationJS.setStringConstant(a(0,820,21),a(0,340,2));b.VintasoftLocalizationJS.setStringConstant(a(0,
795,25),a(0,585,6));this._21121=c;var e=new f.WebUiLabelElementJS({text:b.VintasoftLocalizationJS.getStringConstant(a(0,293,32)),cssClass:a(0,1140,11)});e.set_HeaderIndex(5);this._7536=c=new l.WebUiSelectFunctionPanelJS({cssClass:a(0,1175,25)},c);var g=new f.WebUiButtonInputJS({cssClass:a(0,841,15),value:b.VintasoftLocalizationJS.getStringConstant(a(0,820,21)),localizationId:a(0,1167,8),onClick:{callback:function(b,c){var d=b.data.a,k=d._7536.getSelectedFormula();d._21121._1314._10772(k+a(0,291,2));
d.hide()},data:{a:this}}}),h=new f.WebUiButtonInputJS({cssClass:a(0,325,15),value:b.VintasoftLocalizationJS.getStringConstant(a(0,795,25)),localizationId:a(0,622,12),onClick:{callback:function(a,b){var c=a.data.a;c._21121._1314._23546(!0);c.hide()},data:{a:this}}}),k={localizationId:a(0,391,20)};d.constructor.call(this,[e],[c],[g,h],k)};b.extend(r,m.WebUiDialogJS);var s=function(c){var d=s.prototype,e=s.superclass;d.show=function(){if(null==this._21121._1314._4572()){var b=Error(a(0,342,27));this._29717(a(0,
514,12),{error:b})}else e.show.call(this)};d.clear=function(){this._23698.clear()};b.VintasoftLocalizationJS.setStringConstant(a(0,1318,31),a(0,1304,14));b.VintasoftLocalizationJS.setStringConstant(a(0,820,21),a(0,340,2));b.VintasoftLocalizationJS.setStringConstant(a(0,795,25),a(0,585,6));this._21121=c;d=new f.WebUiLabelElementJS({text:b.VintasoftLocalizationJS.getStringConstant(a(0,1318,31)),cssClass:a(0,1140,11)});d.set_HeaderIndex(5);this._23698=new l.WebUiCommentPanelJS({cssClass:a(0,121,18)},
c);b.suf23(this._23698,a(0,1290,14),{a:this},function(a,b){var c=a.data.a;c._29717(a.type,b);c.hide()});b.suf23(this._23698,a(0,514,12),{a:this},function(a,b){a.data.a._29717(a.type,b)});c=new f.WebUiButtonInputJS({cssClass:a(0,841,15),value:b.VintasoftLocalizationJS.getStringConstant(a(0,820,21)),localizationId:a(0,1167,8),onClick:{callback:function(a,b){a.data.a._23698.insertComment()},data:{a:this}}});var g=new f.WebUiButtonInputJS({cssClass:a(0,325,15),value:b.VintasoftLocalizationJS.getStringConstant(a(0,
795,25)),localizationId:a(0,622,12),onClick:{callback:function(a,b){a.data.a.hide()},data:{a:this}}}),h={cssClass:a(0,611,11),localizationId:a(0,176,19)};e.constructor.call(this,[d],[this._23698],[c,g],h)};b.extend(s,m.WebUiDialogJS);var t=function(c){var d=t.prototype,e=t.superclass;d.show=function(){if(null==this._21121._1314._4572()){var b=Error(a(0,342,27));this._29717(a(0,514,12),{error:b})}else e.show.call(this)};d.fill=function(){this._23698.fill()};b.VintasoftLocalizationJS.setStringConstant(a(0,
257,29),a(0,1278,12));b.VintasoftLocalizationJS.setStringConstant(a(0,820,21),a(0,340,2));b.VintasoftLocalizationJS.setStringConstant(a(0,795,25),a(0,585,6));this._21121=c;d=new f.WebUiLabelElementJS({text:b.VintasoftLocalizationJS.getStringConstant(a(0,257,29)),cssClass:a(0,1140,11)});d.set_HeaderIndex(5);this._23698=new l.WebUiCommentPanelJS({cssClass:a(0,121,18)},c);b.suf23(this._23698,a(0,1290,14),{a:this},function(a,b){var c=a.data.a;c._29717(a.type,b);c.hide()});b.suf23(this._23698,a(0,514,
12),{a:this},function(a,b){a.data.a._29717(a.type,b)});c=new f.WebUiButtonInputJS({cssClass:a(0,841,15),value:b.VintasoftLocalizationJS.getStringConstant(a(0,820,21)),localizationId:a(0,1167,8),onClick:{callback:function(a,b){a.data.a._23698.editComment()},data:{a:this}}});var g=new f.WebUiButtonInputJS({cssClass:a(0,325,15),value:b.VintasoftLocalizationJS.getStringConstant(a(0,795,25)),localizationId:a(0,622,12),onClick:{callback:function(a,b){a.data.a.hide()},data:{a:this}}}),h={cssClass:a(0,611,
11),localizationId:a(0,1214,17)};e.constructor.call(this,[d],[this._23698],[c,g],h)};b.extend(t,m.WebUiDialogJS);var u=function(c){var d=u.superclass;u.prototype.show=function(){if(null==this._21121._1314._4572()){var b=Error(a(0,342,27));this._29717(a(0,514,12),{error:b})}else this._13856.update(),d.show.call(this)};b.VintasoftLocalizationJS.setStringConstant(a(0,539,34),a(0,685,11));b.VintasoftLocalizationJS.setStringConstant(a(0,820,21),a(0,340,2));b.VintasoftLocalizationJS.setStringConstant(a(0,
795,25),a(0,585,6));this._21121=c;var e=new f.WebUiLabelElementJS({text:b.VintasoftLocalizationJS.getStringConstant(a(0,539,34)),cssClass:a(0,1140,11)});e.set_HeaderIndex(5);this._13856=c=new l.WebUiCellNumberFormatPanelJS({cssClass:a(0,1231,27)},c);var g=new f.WebUiButtonInputJS({cssClass:a(0,841,15),value:b.VintasoftLocalizationJS.getStringConstant(a(0,820,21)),localizationId:a(0,1167,8),onClick:{callback:function(a,b){var c=a.data.a,d=c._13856.getSelectedFormat();null!=d&&c._21121._1314._29627(d);
c.hide()},data:{a:this}}}),h=new f.WebUiButtonInputJS({cssClass:a(0,325,15),value:b.VintasoftLocalizationJS.getStringConstant(a(0,795,25)),localizationId:a(0,622,12),onClick:{callback:function(a,b){a.data.a.hide()},data:{a:this}}}),k={localizationId:a(0,1115,25)};d.constructor.call(this,[e],[c],[g,h],k)};b.extend(u,m.WebUiDialogJS);var v=function(c,d){var e=v.prototype,g=v.superclass;e.show=function(){if(null==this._21121._1314._4572()){var b=Error(a(0,342,27));this._29717(a(0,514,12),{error:b})}else g.show.call(this),
this._25670._20499(),b=this._25670._3958.get_SpreadsheetEditorControl()._1314,null!=b._5794()&&b._24050(null),this._29739.set_IsEnabled(!1)};e.addSelectedChart=function(){this._25670.addSelectedChart()};b.VintasoftLocalizationJS.setStringConstant(a(0,1441,29),a(0,573,12));b.VintasoftLocalizationJS.setStringConstant(a(0,820,21),a(0,340,2));b.VintasoftLocalizationJS.setStringConstant(a(0,795,25),a(0,585,6));this._21121=c;e=new f.WebUiLabelElementJS({text:b.VintasoftLocalizationJS.getStringConstant(a(0,
1441,29)),cssClass:a(0,1140,11)});e.set_HeaderIndex(5);var h=new l.WebUiInsertChartPanelJS({cssClass:a(0,369,22)},c,d);this._25670=h;b.suf23(h,a(0,514,12),{a:this},function(a,b){var c=a.data.a,d=a.type;c.hide();c._29717(d,b)});var k=new f.WebUiButtonInputJS({cssClass:a(0,841,15),value:b.VintasoftLocalizationJS.getStringConstant(a(0,820,21)),localizationId:a(0,1167,8),onClick:{callback:function(a,b){a.data.a.addSelectedChart()},data:{a:this}}});this._29739=k;var C=new f.WebUiButtonInputJS({cssClass:a(0,
325,15),value:b.VintasoftLocalizationJS.getStringConstant(a(0,795,25)),localizationId:a(0,622,12),onClick:{callback:function(a,b){a.data.a.hide()},data:{a:this}}});b.suf23(h,a(0,720,13),{a:this},function(a,b){a.data.a._29739.set_IsEnabled(!0)});var m={localizationId:a(0,0,17)};g.constructor.call(this,[e],[h],[k,C],m)};b.extend(v,m.WebUiDialogJS);var w=function(c){var d=w.superclass;w.prototype.show=function(){if(null==this._21121._1314._4572()){var b=Error(a(0,342,27));this._29717(a(0,514,12),{error:b})}else this._1034.update(),
d.show.call(this)};b.VintasoftLocalizationJS.setStringConstant(a(0,476,27),a(0,82,10));b.VintasoftLocalizationJS.setStringConstant(a(0,820,21),a(0,340,2));b.VintasoftLocalizationJS.setStringConstant(a(0,795,25),a(0,585,6));this._21121=c;var e=new f.WebUiLabelElementJS({text:b.VintasoftLocalizationJS.getStringConstant(a(0,476,27)),cssClass:a(0,1140,11)});e.set_HeaderIndex(5);this._1034=c=new l.WebUiEditChartPropertiesPanelJS({cssClass:a(0,195,18)},c);b.suf23(c,a(0,1267,11),{a:this},function(a,b){var c=
a.data.a,d=a.type;c.hide();c._29717(d,b)});b.suf23(c,a(0,514,12),{a:this},function(a,b){var c=a.data.a,d=a.type;c.hide();c._29717(d,b)});var g=new f.WebUiButtonInputJS({cssClass:a(0,841,15),value:b.VintasoftLocalizationJS.getStringConstant(a(0,820,21)),localizationId:a(0,1167,8),onClick:{callback:function(a,b){a.data.a._1034.editChart()},data:{a:this}}}),h=new f.WebUiButtonInputJS({cssClass:a(0,325,15),value:b.VintasoftLocalizationJS.getStringConstant(a(0,795,25)),localizationId:a(0,622,12),onClick:{callback:function(a,
b){a.data.a.hide()},data:{a:this}}}),k={localizationId:a(0,780,15)};d.constructor.call(this,[e],[c],[g,h],k)};b.extend(w,m.WebUiDialogJS);var x=function(c){var d=x.superclass;x.prototype.show=function(){if(null==this._21121._1314._4572()){var b=Error(a(0,342,27));this._29717(a(0,514,12),{error:b})}else this._23721.update(this),d.show.call(this)};b.VintasoftLocalizationJS.setStringConstant(a(0,959,34),a(0,526,13));b.VintasoftLocalizationJS.setStringConstant(a(0,26,35),a(0,1427,14));b.VintasoftLocalizationJS.setStringConstant(a(0,
820,21),a(0,340,2));b.VintasoftLocalizationJS.setStringConstant(a(0,795,25),a(0,585,6));this._21121=c;var e=new f.WebUiLabelElementJS({text:b.VintasoftLocalizationJS.getStringConstant(a(0,959,34)),cssClass:a(0,1140,11)});e.set_HeaderIndex(5);this._7997=e;this._23721=c=new l.WebUiEditHyperlinkPanelJS({css:{height:a(0,286,5)}},c);var g=new f.WebUiButtonInputJS({cssClass:a(0,841,15),value:b.VintasoftLocalizationJS.getStringConstant(a(0,820,21)),localizationId:a(0,1167,8),onClick:{callback:function(a,
b){var c=a.data.a;c._23721.addHyperlink();c.hide()},data:{a:this}}}),h=new f.WebUiButtonInputJS({cssClass:a(0,325,15),value:b.VintasoftLocalizationJS.getStringConstant(a(0,795,25)),localizationId:a(0,622,12),onClick:{callback:function(a,b){a.data.a.hide()},data:{a:this}}}),k={localizationId:a(0,1408,19)};d.constructor.call(this,[e],[c],[g,h],k)};b.extend(x,m.WebUiDialogJS);var y=function(c){var d=y.superclass;y.prototype.show=function(){if(null==this._21121._1314._4572()){var b=Error(a(0,342,27));
this._29717(a(0,514,12),{error:b})}else this._21496.update(),d.show.call(this)};b.VintasoftLocalizationJS.setStringConstant(a(0,733,33),a(0,882,19));b.VintasoftLocalizationJS.setStringConstant(a(0,820,21),a(0,340,2));b.VintasoftLocalizationJS.setStringConstant(a(0,795,25),a(0,585,6));var e=new f.WebUiLabelElementJS({text:b.VintasoftLocalizationJS.getStringConstant(a(0,733,33)),cssClass:a(0,1140,11)});e.set_HeaderIndex(5);var g=new l.WebUiSelectDefinedNamePanelJS({cssClass:a(0,195,18)},c);this._21496=
g;this._21121=c;c=new f.WebUiButtonInputJS({cssClass:a(0,841,15),value:b.VintasoftLocalizationJS.getStringConstant(a(0,820,21)),localizationId:a(0,1167,8),onClick:{callback:function(a,b){var c=a.data.a,d=c._21496.getSelectedName();c._21121._1314._10772(d);c.hide()},data:{a:this}}});var h=new f.WebUiButtonInputJS({cssClass:a(0,325,15),value:b.VintasoftLocalizationJS.getStringConstant(a(0,795,25)),localizationId:a(0,622,12),onClick:{callback:function(a,b){a.data.a.hide()},data:{a:this}}}),k={localizationId:a(0,
139,23)};d.constructor.call(this,[e],[g],[c,h],k)};b.extend(y,m.WebUiDialogJS);var z=function(c){var d=z.superclass;z.prototype.show=function(){if(null==this._21121._1314._4572()){var b=Error(a(0,342,27));this._29717(a(0,514,12),{error:b})}else this._18633.update(null),d.show.call(this)};b.VintasoftLocalizationJS.setStringConstant(a(0,1349,35),a(0,669,16));b.VintasoftLocalizationJS.setStringConstant(a(0,820,21),a(0,340,2));b.VintasoftLocalizationJS.setStringConstant(a(0,795,25),a(0,585,6));var e=
new f.WebUiLabelElementJS({text:b.VintasoftLocalizationJS.getStringConstant(a(0,1349,35)),cssClass:a(0,1140,11)});e.set_HeaderIndex(5);var g=new l.WebUiEditDefinedNamePanelJS({cssClass:a(0,856,26)},c);this._18633=g;this._21121=c;c=new f.WebUiButtonInputJS({cssClass:a(0,841,15),value:b.VintasoftLocalizationJS.getStringConstant(a(0,820,21)),localizationId:a(0,1167,8),onClick:{callback:function(a,b){var c=a.data.a;c._18633.applyChanges()&&c.hide()},data:{a:this}}});var h=new f.WebUiButtonInputJS({cssClass:a(0,
325,15),value:b.VintasoftLocalizationJS.getStringConstant(a(0,795,25)),localizationId:a(0,622,12),onClick:{callback:function(a,b){a.data.a.hide()},data:{a:this}}}),k={localizationId:a(0,213,20)};d.constructor.call(this,[e],[g],[c,h],k)};b.extend(z,m.WebUiDialogJS);var A=function(c){var d=A.superclass;A.prototype.show=function(){if(null==this._21121._1314._4572()){var b=Error(a(0,342,27));this._29717(a(0,514,12),{error:b})}else this._20502.update(),d.show.call(this)};b.VintasoftLocalizationJS.setStringConstant(a(0,
1012,36),a(0,591,20));b.VintasoftLocalizationJS.setStringConstant(a(0,233,24),a(0,77,5));var e=new f.WebUiLabelElementJS({text:b.VintasoftLocalizationJS.getStringConstant(a(0,1012,36)),cssClass:a(0,1140,11)});e.set_HeaderIndex(5);var g=new l.WebUiDefinedNameManagerPanelJS({cssClass:a(0,92,29)},c);this._20502=g;this._21121=c;c=new f.WebUiButtonInputJS({cssClass:a(0,325,15),value:b.VintasoftLocalizationJS.getStringConstant(a(0,233,24)),localizationId:a(0,503,11),onClick:{callback:function(a,b){a.data.a.hide()},
data:{a:this}}});var h={localizationId:a(0,1384,24)};d.constructor.call(this,[e],[g],[c],h)};b.extend(A,m.WebUiDialogJS);d.WebUiMoveWorksheetDialogJS=p;d.WebUiRenameWorksheetDialogJS=n;d.WebUiFindTextDialogJS=q;d.WebUiSelectFunctionDialogJS=r;d.WebUiInsertCommentDialogJS=s;d.WebUiEditCommentDialogJS=t;d.WebUiCellNumberFormatDialogJS=u;d.WebUiInsertChartDialogJS=v;d.WebUiEditChartPropertiesDialogJS=w;d.WebUiEditHyperlinkDialogJS=x;d.WebUiSelectDefinedNameDialogJS=y;d.WebUiAddDefinedNameDialogJS=z;
d.WebUiDefinedNameManagerDialogJS=A})(d.Dialogs||(d.Dialogs={}))})(d.UI||(d.UI={}))})(d.Office||(d.Office={}))})(d.Imaging||(d.Imaging={}))})(Vintasoft||(Vintasoft={}));
