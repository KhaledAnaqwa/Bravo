"use strict";(self.webpackChunkbravo=self.webpackChunkbravo||[]).push([[138],{6666:(u,g,n)=>{n.d(g,{g:()=>h});var t=n(7716),e=n(7461);let h=(()=>{class c{constructor(){this.chartOptions={series:[42,90,42,70,30],chart:{width:300,height:700,type:"polarArea"},colors:["#2ec4b6","#3F37C9","#227c9d","#4CC9F0","#7209B7"],labels:["Rose A","Rose B","Rose C","Rose A","Rose B"],fill:{opacity:1},stroke:{width:1,colors:void 0},yaxis:{show:!1},legend:{position:"bottom"},plotOptions:{polarArea:{rings:{strokeWidth:0}}},theme:{monochrome:{shadeTo:"light",shadeIntensity:.6}}}}ngOnChanges(l){this.Update(l.Top5DepartmentData.currentValue)}updateSeries(){this.chartOptions.series=[1,11,12,70,2]}Update(l){this.chartOptions.series=l.data,this.chartOptions.labels=l.labels}ngOnInit(){null!=this.Top5DepartmentData&&(this.chartOptions.series=this.Top5DepartmentData.data,this.chartOptions.labels=this.Top5DepartmentData.labels)}}return c.\u0275fac=function(l){return new(l||c)},c.\u0275cmp=t.Xpm({type:c,selectors:[["app-charts-widget10"]],inputs:{Top5DepartmentData:"Top5DepartmentData"},features:[t.TTD],decls:13,vars:11,consts:[[1,"card-header","border-0","pt-5"],[1,"card-title","align-items-start","flex-column"],[1,"card-label","fw-bolder","fs-3","mb-1"],[1,"text-muted","fw-bold","fs-7"],["data-kt-buttons","true",1,"card-toolbar"],["id","kt_charts_widget_10_Update_btn",1,"btn","btn-sm","btn-color-muted","btn-active","btn-active-primary","active","px-4","me-1",3,"click"],[1,"card-body"],["id","kt_charts_widget_10_chart",1,"card-rounded-bottom"],["chartRef",""],[3,"series","chart","colors","labels","title","theme","fill","yaxis","stroke","legend","plotOptions"]],template:function(l,s){1&l&&(t.TgZ(0,"div",0),t.TgZ(1,"h3",1),t.TgZ(2,"span",2),t._uU(3,"Department Sales"),t.qZA(),t.TgZ(4,"span",3),t._uU(5,"Top 5 Department"),t.qZA(),t.qZA(),t.TgZ(6,"div",4),t.TgZ(7,"a",5),t.NdJ("click",function(){return s.updateSeries()}),t._uU(8," Update "),t.qZA(),t.qZA(),t.qZA(),t.TgZ(9,"div",6),t.TgZ(10,"div",7,8),t._UZ(12,"apx-chart",9),t.qZA(),t.qZA()),2&l&&(t.xp6(12),t.Q6J("series",s.chartOptions.series)("chart",s.chartOptions.chart)("colors",s.chartOptions.colors)("labels",s.chartOptions.labels)("title",s.chartOptions.title)("theme",s.chartOptions.theme)("fill",s.chartOptions.fill)("yaxis",s.chartOptions.yaxis)("stroke",s.chartOptions.stroke)("legend",s.chartOptions.legend)("plotOptions",s.chartOptions.plotOptions))},directives:[e.x],styles:["#chart[_ngcontent-%COMP%]{max-width:350px;margin:105px auto;padding:0}"]}),c})()},693:(u,g,n)=>{n.d(g,{V:()=>o});var t=n(4733),e=n(7716),h=n(7461);let o=(()=>{class d{constructor(){this.chartOptions={},this.chartOptions=c()}ngOnChanges(s){this.Update(s.DailyOrdersData.currentValue),console.log(s.DailyOrdersData.currentValue)}Update(s){this.chartOptions.series[0].data=s.data,this.chartOptions.xaxis.categories=s.dates}ngOnInit(){this.chartOptions=c()}}return d.\u0275fac=function(s){return new(s||d)},d.\u0275cmp=e.Xpm({type:d,selectors:[["app-charts-widget3"]],inputs:{DailyOrdersData:"DailyOrdersData"},features:[e.TTD],decls:10,vars:15,consts:[[1,"card-header","border-0","pt-5"],[1,"card-title","align-items-start","flex-column"],[1,"card-label","fw-bolder","fs-3","mb-1"],[1,"text-muted","fw-bold","fs-7"],[1,"card-body"],["id","kt_charts_widget_3_chart"],["chartRef",""],[3,"series","chart","xaxis","yaxis","dataLabels","stroke","legend","fill","states","tooltip","colors","markers","plotOptions"]],template:function(s,a){1&s&&(e.TgZ(0,"div",0),e.TgZ(1,"h3",1),e.TgZ(2,"span",2),e._uU(3,"Order Transactions"),e.qZA(),e.TgZ(4,"span",3),e._uU(5,"From 1-12 Jan, 2022"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(6,"div",4),e.TgZ(7,"div",5,6),e._UZ(9,"apx-chart",7),e.qZA(),e.qZA()),2&s&&(e.xp6(7),e.Udp("height","350px"),e.xp6(2),e.Q6J("series",a.chartOptions.series)("chart",a.chartOptions.chart)("xaxis",a.chartOptions.xaxis)("yaxis",a.chartOptions.yaxis)("dataLabels",a.chartOptions.dataLabels)("stroke",a.chartOptions.stroke)("legend",a.chartOptions.legend)("fill",a.chartOptions.fill)("states",a.chartOptions.states)("tooltip",a.chartOptions.tooltip)("colors",a.chartOptions.colors)("markers",a.chartOptions.markers)("plotOptions",a.chartOptions.plotOptions))},directives:[h.x],encapsulation:2}),d})();function c(d){const l=(0,t.mK)("--bs-gray-500"),s=(0,t.mK)("--bs-gray-200"),a=(0,t.mK)("--bs-info");return{series:[{name:"# Order",data:[30,40,40,90,90,70,70]}],chart:{fontFamily:"inherit",type:"area",height:350,toolbar:{show:!1}},plotOptions:{},legend:{show:!1},dataLabels:{enabled:!1},fill:{type:"solid",opacity:1},stroke:{curve:"smooth",show:!0,width:3,colors:[a]},xaxis:{categories:["Feb","Mar","Apr","May","Jun","Jul","Aug"],axisBorder:{show:!1},axisTicks:{show:!1},labels:{style:{colors:l,fontSize:"12px"}},crosshairs:{position:"front",stroke:{color:a,width:1,dashArray:3}},tooltip:{enabled:!0,formatter:void 0,offsetY:0,style:{fontSize:"12px"}}},yaxis:{labels:{style:{colors:l,fontSize:"12px"}}},states:{normal:{filter:{type:"none",value:0}},hover:{filter:{type:"none",value:0}},active:{allowMultipleDataPointsSelection:!1,filter:{type:"none",value:0}}},tooltip:{style:{fontSize:"12px"},y:{formatter:function(r){return+r+" order"}}},colors:[(0,t.mK)("--bs-light-info")],grid:{borderColor:s,strokeDashArray:4,yaxis:{lines:{show:!0}}},markers:{strokeColors:a,strokeWidth:3}}}},1675:(u,g,n)=>{n.d(g,{_:()=>o});var t=n(4733),e=n(7716),h=n(7461);let o=(()=>{class d{constructor(){this.chartOptions={}}ngOnChanges(s){this.updateSeriesData(s.series.currentValue)}ngOnInit(){this.chartOptions={series:[],chart:{type:"donut",width:300,height:300},colors:[(0,t.mK)("--bs-blue"),(0,t.mK)("--bs-purple"),(0,t.mK)("--bs-cyan")],labels:["Afternoon","Evening","Morning"],legend:{position:"bottom"},responsive:[{breakpoint:480,options:{legend:{position:"bottom"}}}]},null!=this.series&&(this.chartOptions.series=this.series)}updateSeriesData(s){this.chartOptions.series=s}updateSeries(){this.chartOptions.series=this.updateSeriesFn()}}return d.\u0275fac=function(s){return new(s||d)},d.\u0275cmp=e.Xpm({type:d,selectors:[["app-charts-widget9"]],inputs:{series:"series",updateSeriesFn:"updateSeriesFn"},features:[e.TTD],decls:13,vars:6,consts:[[1,"card-header","border-0","pt-5"],[1,"card-title","align-items-start","flex-column"],[1,"card-label","fw-bolder","fs-3","mb-1"],[1,"text-muted","fw-bold","fs-7"],["data-kt-buttons","true",1,"card-toolbar"],["id","kt_charts_widget_9_Update_btn",1,"btn","btn-sm","btn-color-muted","btn-active","btn-active-primary","active","px-4","me-1",3,"click"],[1,"card-body"],["id","kt_charts_widget_9_chart",1,"card-rounded-bottom"],["chartRef",""],[3,"series","chart","labels","colors","legend","responsive"]],template:function(s,a){1&s&&(e.TgZ(0,"div",0),e.TgZ(1,"h3",1),e.TgZ(2,"span",2),e._uU(3,"Orders Time"),e.qZA(),e.TgZ(4,"span",3),e._uU(5,"Most time customers bought"),e.qZA(),e.qZA(),e.TgZ(6,"div",4),e.TgZ(7,"a",5),e.NdJ("click",function(){return a.updateSeries()}),e._uU(8," Update "),e.qZA(),e.qZA(),e.qZA(),e.TgZ(9,"div",6),e.TgZ(10,"div",7,8),e._UZ(12,"apx-chart",9),e.qZA(),e.qZA()),2&s&&(e.xp6(12),e.Q6J("series",a.chartOptions.series)("chart",a.chartOptions.chart)("labels",a.chartOptions.labels)("colors",a.chartOptions.colors)("legend",a.chartOptions.legend)("responsive",a.chartOptions.responsive))},directives:[h.x],encapsulation:2}),d})()},6669:(u,g,n)=>{n.d(g,{U:()=>s});var t=n(7716),e=n(8583),h=n(2789);function o(a,i){1&a&&t._UZ(0,"span",19),2&a&&t.Q6J("inlineSVG","./assets/media/icons/duotune/arrows/arr066.svg")}function c(a,i){1&a&&t._UZ(0,"span",20),2&a&&t.Q6J("inlineSVG","./assets/media/icons/duotune/general/gen024.svg")}function d(a,i){1&a&&t._UZ(0,"span",20),2&a&&t.Q6J("inlineSVG","./assets/media/icons/duotune/arrows/arr065.svg")}function l(a,i){if(1&a&&(t.TgZ(0,"div",9),t.TgZ(1,"div",10),t.TgZ(2,"div",11),t.TgZ(3,"a",12),t._uU(4),t.qZA(),t.TgZ(5,"div",13),t._uU(6),t.qZA(),t.qZA(),t.TgZ(7,"div",14),t.TgZ(8,"div",15),t._uU(9),t.qZA(),t.TgZ(10,"span",16),t.YNc(11,o,1,1,"span",17),t.YNc(12,c,1,1,"span",18),t.YNc(13,d,1,1,"span",18),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&a){const r=i.$implicit;t.xp6(4),t.hij(" ",r.name," "),t.xp6(2),t.Oqu(r.departmentname),t.xp6(3),t.Oqu(r.counts),t.xp6(1),t.Q6J("ngSwitch",r.growth),t.xp6(1),t.Q6J("ngSwitchCase",1),t.xp6(1),t.Q6J("ngSwitchCase",0),t.xp6(1),t.Q6J("ngSwitchCase",-1)}}let s=(()=>{class a{constructor(){this.color="",this.title=""}ngOnChanges(r){}update(r){this.items=r}OnInit(){null==this.items&&(this.items=[{name:"item1",departmentname:"Deli",counts:1,growth:0},{name:"item1",departmentname:"Deli",counts:1,growth:0},{name:"item1",departmentname:"Deli",counts:1,growth:0},{name:"item1",departmentname:"Deli",counts:1,growth:0},{name:"item1",departmentname:"Deli",counts:1,growth:0}])}}return a.\u0275fac=function(r){return new(r||a)},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-custom-mixed-widget1"]],inputs:{color:"color",title:"title",items:"items"},features:[t.TTD],decls:11,vars:5,consts:[[1,"card-body","p-0"],[1,"px-9","pt-7","card-rounded","h-275px","w-100",3,"ngClass"],[1,"d-flex","flex-stack"],[1,"m-0","text-white","fw-bolder","fs-3"],[1,"ms-1"],[1,"d-flex","flex-column","text-white","pt-8"],[1,"fw-bold","fs-7"],[1,"shadow-xs","card-rounded","mx-9","mb-9","px-6","py-9","position-relative","z-index-1","bg-white"],["class","d-flex align-items-center mb-3",4,"ngFor","ngForOf"],[1,"d-flex","align-items-center","mb-3"],[1,"d-flex","align-items-center","flex-wrap","w-100"],[1,"mb-1","pe-3","flex-grow-1"],["href","#",1,"fs-5","text-gray-800","text-hover-primary","fw-bolder"],[1,"text-gray-400","fw-bold","fs-7"],[1,"d-flex","align-items-center"],[1,"fw-bolder","fs-5","text-gray-800","pe-1"],[3,"ngSwitch"],["class","svg-icon svg-icon-5 svg-icon-success ms-1",3,"inlineSVG",4,"ngSwitchCase"],["class","svg-icon svg-icon-5 svg-icon-danger ms-1",3,"inlineSVG",4,"ngSwitchCase"],[1,"svg-icon","svg-icon-5","svg-icon-success","ms-1",3,"inlineSVG"],[1,"svg-icon","svg-icon-5","svg-icon-danger","ms-1",3,"inlineSVG"]],template:function(r,p){1&r&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"div",2),t.TgZ(3,"h3",3),t._uU(4),t.qZA(),t._UZ(5,"div",4),t.qZA(),t.TgZ(6,"div",5),t.TgZ(7,"span",6),t._uU(8,"Monthlly"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(9,"div",7),t.YNc(10,l,14,7,"div",8),t.qZA(),t.qZA()),2&r&&(t.xp6(1),t.Q6J("ngClass","bg-"+p.color),t.xp6(3),t.Oqu(p.title),t.xp6(5),t.Udp("margin-top","-170px"),t.xp6(1),t.Q6J("ngForOf",p.items))},directives:[e.mk,e.sg,e.RF,e.n9,h.d$],encapsulation:2}),a})()},706:(u,g,n)=>{n.d(g,{L:()=>d});var t=n(8583),e=n(9953),h=n(4733),o=n(7716),c=n(7461);let d=(()=>{class s{constructor(){this.chartColor="",this.chartOptions={},this.chartOptions=l(this.chartHeight,this.chartColor)}ngOnChanges(i){this.Update(i.SalesData.currentValue)}Update(i){this.chartOptions.series=i.data,this.chartOptions.xaxis.categories=i.dates,this.SalesSum=i.SalesSum}ngOnInit(){this.chartOptions=l(this.chartHeight,this.chartColor),null!=this.SalesData&&this.Update(this.SalesData)}}return s.\u0275fac=function(i){return new(i||s)},s.\u0275cmp=o.Xpm({type:s,selectors:[["app-mixed-widget11"]],inputs:{chartColor:"chartColor",chartHeight:"chartHeight",SalesData:"SalesData"},features:[o.TTD],decls:13,vars:20,consts:[[1,"card-body","p-0","d-flex","justify-content-between","flex-column","overflow-hidden"],[1,"d-flex","flex-stack","flex-wrap","flex-grow-1","px-9","pt-9","pb-3"],[1,"me-2"],[1,"fw-bolder","text-gray-800","d-block","fs-3"],[1,"text-gray-400","fw-bold"],[1,"fw-bolder","fs-3",3,"ngClass"],[1,"mixed-widget-10-chart"],["chartRef",""],[3,"series","chart","xaxis","yaxis","dataLabels","stroke","legend","fill","states","tooltip","colors","markers","plotOptions"]],template:function(i,r){1&i&&(o.TgZ(0,"div",0),o.TgZ(1,"div",1),o.TgZ(2,"div",2),o.TgZ(3,"span",3),o._uU(4,"Sales"),o.qZA(),o.TgZ(5,"span",4),o._uU(6,"Sep 1 - Sep 14 2021"),o.qZA(),o.qZA(),o.TgZ(7,"div",5),o._uU(8),o.ALo(9,"number"),o.qZA(),o.qZA(),o.TgZ(10,"div",6,7),o._UZ(12,"apx-chart",8),o.qZA(),o.qZA()),2&i&&(o.xp6(7),o.Q6J("ngClass","fs-3 text-"+r.chartColor),o.xp6(1),o.hij(" NIS ",o.xi3(9,17,r.SalesSum,".2-2")," "),o.xp6(2),o.Udp("height",r.chartHeight),o.xp6(2),o.Q6J("series",r.chartOptions.series)("chart",r.chartOptions.chart)("xaxis",r.chartOptions.xaxis)("yaxis",r.chartOptions.yaxis)("dataLabels",r.chartOptions.dataLabels)("stroke",r.chartOptions.stroke)("legend",r.chartOptions.legend)("fill",r.chartOptions.fill)("states",r.chartOptions.states)("tooltip",r.chartOptions.tooltip)("colors",r.chartOptions.colors)("markers",r.chartOptions.markers)("plotOptions",r.chartOptions.plotOptions))},directives:[t.mk,c.x],pipes:[t.JJ],encapsulation:2}),s})();function l(s,a){const i=(0,h.mK)("--bs-gray-500"),r=(0,h.mK)("--bs-gray-200"),p=(0,h.mK)("--bs-gray-300"),m=(0,h.mK)("--bs-"+a);return{series:[{name:"This Week",data:[50,60,70,80,60,50,70]},{name:"Last Week",data:[50,60,70,80,60,50,70]}],chart:{fontFamily:"inherit",type:"bar",height:s,toolbar:{show:!1}},plotOptions:{bar:{horizontal:!1,columnWidth:"50%",borderRadius:5}},legend:{show:e.I},dataLabels:{enabled:!1},stroke:{show:!0,width:2,colors:["transparent"]},xaxis:{categories:["1","2","3","4","5","6","7"],axisBorder:{show:!1},axisTicks:{show:!1},labels:{style:{colors:i,fontSize:"12px"}}},yaxis:{labels:{style:{colors:i,fontSize:"12px"}}},fill:{type:"solid"},states:{normal:{filter:{type:"none",value:0}},hover:{filter:{type:"none",value:0}},active:{allowMultipleDataPointsSelection:!1,filter:{type:"none",value:0}}},tooltip:{style:{fontSize:"12px"},y:{formatter:function(f){return"NIS "+(0,t.uf)(Number(f),"en-US","1.0-0")+" Sales"}}},colors:[m,p],grid:{padding:{top:10},borderColor:r,strokeDashArray:4,yaxis:{lines:{show:!0}}}}}},7138:(u,g,n)=>{n.d(g,{M:()=>a});var t=n(7716),e=n(1841);let h=(()=>{class i{constructor(p){this.httpClient=p,this.REST_API_SERVER="http://eo66wm2ug7ktzd3.m.pipedream.net/?fromData=1&toDate=2"}sendGetRequest(){return this.httpClient.get(this.REST_API_SERVER)}}return i.\u0275fac=function(p){return new(p||i)(t.LFG(e.eN))},i.\u0275prov=t.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})();var o=n(706),c=n(1675),d=n(6666),l=n(6669),s=n(693);let a=(()=>{class i{constructor(p,m){this.dataService=p,this.ngZone=m,this.OrderTimeData=[1.3,1.2,1.5],this.SalesData={data:[{name:"This Week",data:[60,90,70,80,60,50,80]},{name:"Last Week",data:[40,60,70,90,60,50,70]}],dates:["1/2","2/2","3/2","4/2","5/2","6/2","7/2"]},this.Top5DepartmentData={data:[33,50,23,2,10],labels:["Canned/Jarred Goods","Beverages","Deli","Department A","Department B"]},this.DailyOrdersData={data:[30,100,40,90,90,10,20],dates:["1/2","2/2","3/2","4/2","5/2","6/2","7/2"]},this.items=[{name:"item1",departmentname:"Deli",counts:1400,growth:0},{name:"item2",departmentname:"Deli",counts:1100,growth:1},{name:"item3",departmentname:"Deli",counts:1e3,growth:-1},{name:"item4",departmentname:"Deli",counts:900,growth:1},{name:"item5",departmentname:"Deli",counts:100,growth:-1}],this.json={DailyData:{data:[6512,6626,4644,3938,0,0,0],dates:["1/9","2/9","3/9","4/9","5/9","6/9","7/9"]},OrderTimeData:[0,83513,0],SalesData:{SalesSum:3433164.6500000004,data:[{data:[416384.54,417757.26,261051.74,169411.21,0,0,0],name:"This Week"},{data:[230627.96,312796.73,291304.43,286172.03,345351.01,349757.77,352549.97],name:"Last Week"}],dates:["1/9","2/9","3/9","4/9","5/9","6/9","7/9"]},Top5DepartmentData:{data:[133899,50789,42557,42025,30080],labels:["Beverages","Dairy","Canned/Jarred Goods","Paper Goods","Produce"]},Top5Items:[{counts:3665,departmentname:"Bakery",growth:1,name:"Bread Sarfande Kmaj"},{counts:3445,departmentname:"Produce",growth:1,name:"Produce 8 Nis"},{counts:3373,departmentname:"Produce",growth:-1,name:"Produce 5 Nis"},{counts:2738,departmentname:"Produce",growth:-1,name:"Produce 6 Nis"},{counts:2723,departmentname:"Deli",growth:0,name:"Tnuva Amek Cheese"}]}}ngOnInit(){setTimeout(()=>{this.dataService.sendGetRequest().subscribe({next:p=>{this.updateData(p)},error:p=>{this.updateData(this.json)}})},5e3)}updateSeries(p){return p}updateData(p){this.DailyOrdersData=p.DailyData,this.OrderTimeData=p.OrderTimeData,this.SalesData=p.SalesData,this.Top5DepartmentData=p.Top5DepartmentData,this.items=p.Top5Items}}return i.\u0275fac=function(p){return new(p||i)(t.Y36(h),t.Y36(t.R0b))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-dashboard"]],decls:13,vars:7,consts:[[1,"row","gy-5","g-xl-8"],[1,"col-xl-8"],["chartColor","primary","chartHeight","300px",1,"card","card-xxl-stretch","mb-xl-8",3,"SalesData"],[1,"col-xl-4"],["color","success","change","+100","title","Daily Sales","description","Your Weekly Sales Chart",1,"card","card-xl-stretch","mb-xl-8",3,"series","updateSeriesFn"],[1,"row","gy-5","gx-xl-4"],[1,"card","card-xl-stretch","mb-xl-8",3,"Top5DepartmentData"],[1,"col-xxl-4"],["color","primary","title","Top Items Sales",1,"card","card-xl-stretch","mb-xl-8",3,"items"],[1,"card","card-xl-stretch","mb-xl-8",3,"DailyOrdersData"]],template:function(p,m){1&p&&(t.TgZ(0,"div",0),t._uU(1),t.TgZ(2,"div",1),t._UZ(3,"app-mixed-widget11",2),t.qZA(),t.TgZ(4,"div",3),t._UZ(5,"app-charts-widget9",4),t.qZA(),t.qZA(),t.TgZ(6,"div",5),t.TgZ(7,"div",3),t._UZ(8,"app-charts-widget10",6),t.qZA(),t.TgZ(9,"div",7),t._UZ(10,"app-custom-mixed-widget1",8),t.qZA(),t.TgZ(11,"div",3),t._UZ(12,"app-charts-widget3",9),t.qZA(),t.qZA()),2&p&&(t.xp6(1),t.hij(" ",m.results," "),t.xp6(2),t.Q6J("SalesData",m.SalesData),t.xp6(2),t.Q6J("series",m.OrderTimeData)("updateSeriesFn",m.updateSeries),t.xp6(3),t.Q6J("Top5DepartmentData",m.Top5DepartmentData),t.xp6(2),t.Q6J("items",m.items),t.xp6(2),t.Q6J("DailyOrdersData",m.DailyOrdersData))},directives:[o.L,c._,d.g,l.U,s.V],styles:[""]}),i})()}}]);