(self["webpackChunkcliniva"] = self["webpackChunkcliniva"] || []).push([["src_app_widget_widget_module_ts"],{

/***/ 36897:
/*!***************************************************************!*\
  !*** ./src/app/widget/chart-widget/chart-widget.component.ts ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChartWidgetComponent": function() { return /* binding */ ChartWidgetComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-apexcharts */ 34256);
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-charts */ 86178);




const _c0 = ["chart"];
class ChartWidgetComponent {
    constructor() { }
    ngOnInit() {
        this.initChartReport1();
        this.initChartReport2();
        this.initChartReport3();
        this.initChartReport4();
        this.pieChart();
        this.radarChart();
        this.chartArea();
    }
    initChartReport1() {
        this.areaChartOptions2 = {
            elements: {
                point: {
                    radius: 0,
                    hitRadius: 5,
                    hoverRadius: 5,
                },
            },
            legend: {
                display: true,
                labels: {
                    fontColor: "#9aa0ac",
                },
                position: "top",
            },
            scales: {
                xAxes: [
                    {
                        display: false,
                    },
                ],
                yAxes: [
                    {
                        display: false,
                        ticks: {
                            beginAtZero: true,
                        },
                    },
                ],
            },
        };
        this.areaChartPlugins = [
            {
                afterLayout: (chart) => {
                    const ctx = chart.chart.ctx;
                    const gradientStroke = ctx.createLinearGradient(0, 0, 0, 150);
                    const dataset = chart.data.datasets[0];
                    gradientStroke.addColorStop(0, "#5555FF");
                    gradientStroke.addColorStop(1, "#9787FF");
                    dataset.backgroundColor = gradientStroke;
                    dataset.borderColor = "transparent";
                    dataset.pointBorderColor = "transparent";
                    dataset.pointBackgroundColor = "transparent";
                    dataset.lineTension = "0.4";
                    const gradientStroke2 = ctx.createLinearGradient(0, 0, 0, 150);
                    const dataset2 = chart.data.datasets[1];
                    gradientStroke2.addColorStop(0, "#FF55B8");
                    gradientStroke2.addColorStop(1, "#FF8787");
                    dataset2.backgroundColor = gradientStroke2;
                    dataset2.borderColor = "transparent";
                    dataset2.pointBorderColor = "transparent";
                    dataset2.pointBackgroundColor = "transparent";
                    dataset2.lineTension = "0.4";
                },
            },
        ];
        this.areaChartData = [
            {
                label: "Foods",
                data: [24, 18, 16, 18, 24, 36, 28],
            },
            {
                label: "Electronics",
                data: [20, 22, 30, 22, 18, 22, 30],
            },
        ];
        this.areaChartLabels = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
        // area chart end
    }
    initChartReport2() {
        this.radarChartPlugins = [
            {
                afterLayout: (chart) => {
                    const ctx = chart.chart.ctx;
                    const gradientStroke = ctx.createLinearGradient(0, 0, 0, 150);
                    const dataset = chart.data.datasets[0];
                    gradientStroke.addColorStop(0, "rgba(85, 85, 255, 0.9)");
                    gradientStroke.addColorStop(1, "rgba(151, 135, 255, 0.8)");
                    dataset.backgroundColor = gradientStroke;
                    dataset.borderColor = "transparent";
                    dataset.pointBackgroundColor = "transparent";
                    dataset.pointBorderColor = "transparent";
                    dataset.pointHoverBackgroundColor = "transparent";
                    dataset.pointHoverBorderColor = "transparent";
                    dataset.pointHitRadius = 50;
                    const gradientStroke2 = ctx.createLinearGradient(0, 0, 0, 150);
                    const dataset2 = chart.data.datasets[1];
                    gradientStroke2.addColorStop(0, "rgba(255, 85, 184, 0.9)");
                    gradientStroke2.addColorStop(1, "rgba(255, 135, 135, 0.8)");
                    dataset2.backgroundColor = gradientStroke2;
                    dataset2.borderColor = "transparent";
                    dataset2.pointBackgroundColor = "transparent";
                    dataset2.pointBorderColor = "transparent";
                    dataset2.pointHoverBackgroundColor = "transparent";
                    dataset2.pointHoverBorderColor = "transparent";
                    dataset2.pointHitRadius = 50;
                },
                beforeDatasetsDraw: (chart) => {
                    chart.ctx.shadowColor = "rgba(0, 0, 0, 0.25)";
                    chart.ctx.shadowBlur = 40;
                },
                afterDatasetsDraw: (chart) => {
                    chart.ctx.shadowColor = "rgba(0, 0, 0, 0)";
                    chart.ctx.shadowBlur = 0;
                },
            },
        ];
        this.radarChartLabels = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
        this.radarChartData = [
            { data: [25, 59, 90, 81, 60, 82, 52], label: "Product", fill: true },
            { data: [40, 100, 40, 90, 40, 90, 84], label: "Services", fill: true },
        ];
        this.radarChartType = "radar";
        this.radarChartColors = [
            {
                backgroundColor: ["rgba(109, 144, 232,0.8)"],
            },
            {
                backgroundColor: ["rgba(255, 140, 96,0.8)"],
            },
        ];
        this.radarChartOptions2 = {
            legend: {
                display: true,
                labels: {
                    fontColor: "#9aa0ac",
                },
                position: "top",
            },
            gridLines: {
                display: false,
            },
            scale: {
                ticks: {
                    maxTicksLimit: 1,
                    display: false,
                },
            },
        };
        // end radar chart
    }
    initChartReport3() {
        this.pieChartOptions = {
            series: [44, 55, 13, 43, 22],
            chart: {
                type: "donut",
                width: 200,
            },
            legend: {
                show: false,
            },
            dataLabels: {
                enabled: false,
            },
            labels: ["Science", "Mathes", "Economics", "History", "Music"],
            responsive: [
                {
                    breakpoint: 480,
                    options: {},
                },
            ],
        };
    }
    initChartReport4() {
        this.avgLecChartOptions = {
            series: [
                {
                    name: "Avg. Lecture",
                    data: [65, 72, 62, 73, 66, 74, 63, 67],
                },
            ],
            chart: {
                height: 350,
                type: "line",
                dropShadow: {
                    enabled: true,
                    color: "#000",
                    top: 18,
                    left: 7,
                    blur: 10,
                    opacity: 0.2,
                },
                toolbar: {
                    show: false,
                },
                foreColor: "#9aa0ac",
            },
            stroke: {
                curve: "smooth",
            },
            xaxis: {
                categories: ["Jan", "Feb", "March", "Apr", "May", "Jun", "July", "Aug"],
                title: {
                    text: "Weekday",
                },
            },
            yaxis: {
                title: {
                    text: "Avg. Lecture",
                },
            },
            fill: {
                type: "gradient",
                gradient: {
                    shade: "dark",
                    gradientToColors: ["#35fdd8"],
                    shadeIntensity: 1,
                    type: "horizontal",
                    opacityFrom: 1,
                    opacityTo: 1,
                    stops: [0, 100, 100, 100],
                },
            },
            markers: {
                size: 4,
                colors: ["#FFA41B"],
                strokeColors: "#fff",
                strokeWidth: 2,
                hover: {
                    size: 7,
                },
            },
            tooltip: {
                theme: "dark",
                marker: {
                    show: true,
                },
                x: {
                    show: true,
                },
            },
        };
    }
    pieChart() {
        this.circleChartOptions = {
            series: [76, 67, 61, 90],
            chart: {
                height: 275,
                type: "radialBar",
            },
            plotOptions: {
                radialBar: {
                    offsetY: 0,
                    startAngle: 0,
                    endAngle: 270,
                    hollow: {
                        margin: 5,
                        size: "30%",
                        background: "transparent",
                        image: undefined,
                    },
                    dataLabels: {
                        name: {
                            show: false,
                        },
                        value: {
                            show: false,
                        },
                    },
                },
            },
            colors: ["#FF4560", "#775DD0", "#00E396", "#FEB019"],
            labels: ["Vimeo", "Messenger", "Facebook", "LinkedIn"],
            legend: {
                show: true,
                floating: true,
                fontSize: "12px",
                position: "left",
                offsetX: 10,
                offsetY: 10,
                labels: {
                    useSeriesColors: true,
                },
                formatter: function (seriesName, opts) {
                    return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex];
                },
                itemMargin: {
                    horizontal: 3,
                },
            },
            responsive: [
                {
                    breakpoint: 480,
                    options: {
                        legend: {
                            show: false,
                        },
                    },
                },
            ],
        };
    }
    radarChart() {
        this.radarChartOptions = {
            series: [
                {
                    name: "Blue",
                    data: [80, 50, 30, 40, 100, 20],
                },
                {
                    name: "Green",
                    data: [20, 30, 40, 80, 20, 80],
                },
                {
                    name: "Orange",
                    data: [44, 76, 78, 13, 43, 10],
                },
            ],
            chart: {
                height: 240,
                type: "radar",
                toolbar: {
                    show: false,
                },
                dropShadow: {
                    enabled: true,
                    blur: 1,
                    left: 1,
                    top: 1,
                },
            },
            stroke: {
                width: 0,
            },
            fill: {
                opacity: 0.4,
            },
            markers: {
                size: 0,
            },
            xaxis: {
                categories: ["2011", "2012", "2013", "2014", "2015", "2016"],
            },
        };
    }
    chartArea() {
        this.areaChartOptions = {
            chart: {
                height: 240,
                type: "area",
                toolbar: {
                    show: false,
                },
                foreColor: "#9aa0ac",
            },
            legend: {
                show: false,
            },
            dataLabels: {
                enabled: false,
            },
            stroke: {
                curve: "smooth",
            },
            series: [
                {
                    name: "series1",
                    data: [31, 40, 28, 51, 42],
                },
                {
                    name: "series2",
                    data: [11, 32, 45, 32, 34],
                },
            ],
            xaxis: {
                type: "datetime",
                categories: ["1990", "1991", "1992", "1993", "1994"],
            },
            tooltip: {
                x: {
                    format: "dd/MM/yy HH:mm",
                },
            },
        };
    }
}
ChartWidgetComponent.??fac = function ChartWidgetComponent_Factory(t) { return new (t || ChartWidgetComponent)(); };
ChartWidgetComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: ChartWidgetComponent, selectors: [["app-chart-widget"]], viewQuery: function ChartWidgetComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????viewQuery"](_c0, 7);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????loadQuery"]()) && (ctx.chart = _t.first);
    } }, decls: 410, vars: 50, consts: [[1, "content"], [1, "container-fluid"], [1, "block-header"], [1, "row"], [1, "col-xs-12", "col-sm-12", "col-md-12", "col-lg-12"], [1, "breadcrumb", "breadcrumb-style"], [1, "breadcrumb-item"], [1, "page-title"], [1, "breadcrumb-item", "bcrumb-1"], ["routerLink", "/admin/dashboard/main"], [1, "fas", "fa-home"], [1, "breadcrumb-item", "bcrumb-2"], ["href", "#", "onClick", "return false;"], [1, "breadcrumb-item", "active"], [1, "col-xs-12", "col-sm-12", "col-md-4", "col-lg-4"], [1, "card"], [1, "header"], [1, "body"], ["id", "chart"], [3, "series", "chart", "plotOptions", "labels", "legend", "colors", "responsive"], [1, "col-4"], [1, "text-muted", "font-15", "text-truncate"], [1, "fas", "fa-arrow-circle-up", "col-green", "m-r-5"], [1, "fas", "fa-arrow-circle-down", "col-red", "m-r-5"], [1, "text-muted", "text-truncate"], [3, "series", "chart", "xaxis", "stroke", "markers", "fill"], [3, "series", "chart", "xaxis", "stroke", "tooltip", "dataLabels"], [1, "col-xl-3", "col-lg-6", "col-md-6", "col-sm-6", "col-xs-12"], [1, "card-statistic-4"], [1, "align-items-center", "justify-content-between"], [1, "col-lg-6", "col-md-6", "col-sm-6", "col-xs-6", "card-spacing"], [1, "card-content"], [1, "font-15"], [1, "mb-3", "font-18"], [1, "mb-0"], [1, "col-green"], [1, "col-lg-6", "col-md-6", "col-sm-6", "col-xs-6"], [1, "banner-img"], ["src", "assets/images/banner/1.png", "alt", ""], [1, "col-orange"], ["src", "assets/images/banner/2.png", "alt", ""], ["src", "assets/images/banner/3.png", "alt", ""], ["src", "assets/images/banner/4.png", "alt", ""], [1, "col-xl-8", "col-lg-8", "col-md-12", "col-sm-12"], [1, "card-body"], [1, "float-start"], [1, "text-muted"], [1, "text-muted", "font-12"], [1, "mb-5"], [3, "series", "chart", "xaxis", "stroke", "colors", "dataLabels", "legend", "markers", "grid", "yaxis", "tooltip", "title", "fill"], [1, "col-xl-4", "col-lg-4", "col-md-12", "col-sm-12"], [1, "apex-pie-center", 3, "series", "chart", "labels", "responsive", "dataLabels", "legend"], [1, "table-responsive", "m-t-15"], [1, "table", "align-items-center"], [1, "fa", "fa-circle", "col-cyan", "msr-2"], [1, "fa", "fa-circle", "col-blue", "msr-2"], [1, "fa", "fa-circle", "col-orange", "msr-2"], [1, "fa", "fa-circle", "col-green", "msr-2"], [1, "col-xl-6", "col-lg-6", "col-md-12", "col-sm-12"], [1, "recent-report__chart"], ["baseChart", "", 3, "chartType", "datasets", "labels", "options", "plugins", "legend"], [1, "axisData"], [1, "tick"], [1, "value", "productValue"], [1, "value", "serviceValue"], ["baseChart", "", 1, "chart", 3, "datasets", "labels", "options", "chartType", "plugins", "colors"], [1, "col-lg-3", "col-sm-6"], [1, "info-box7", "bg-c-blue", "order-info-box7"], [1, "info-box7-block"], [1, "m-b-20"], [1, "text-end"], [1, "fas", "fa-cart-plus", "float-start"], [1, "m-b-0"], [1, "info-box7", "bg-c-green", "order-info-box7"], [1, "fas", "fa-business-time", "float-start"], [1, "info-box7", "bg-c-yellow", "order-info-box7"], [1, "fas", "fa-chart-line", "float-start"], [1, "info-box7", "bg-c-pink", "order-info-box7"], [1, "fas", "fa-dollar-sign", "float-start"], [1, "col-12", "col-sm-6", "col-md-3"], [1, "d-flex", "justify-content-between"], [1, "text-info"], [1, "card-content", "mt-2"], [1, "progress", "skill-progress", "m-b-5", "w-100"], ["role", "progressbar", "aria-valuenow", "45", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "l-bg-purple", "width-per-45"], [1, "d-flex", "justify-content-between", "mt-2"], [1, "text-muted", "mb-0"], [1, "text-success"], ["role", "progressbar", "aria-valuenow", "45", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "l-bg-orange", "width-per-45"], [1, "text-danger"], ["role", "progressbar", "aria-valuenow", "45", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "l-bg-cyan", "width-per-45"], [1, "text-secondary"], ["role", "progressbar", "aria-valuenow", "45", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "l-bg-red", "width-per-45"]], template: function ChartWidgetComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "h4", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "Chart Widget");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](11, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, " Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "Widget");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "Chart Widget");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, "Chart Sample");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](26, "apx-chart", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "p", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, "Target");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](32, "i", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33, "$15.3k ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "p", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](36, "Last week");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](38, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](39, "$2.8k ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "p", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](42, "Last Month");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](44, "i", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](45, "$12.5k ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](50, "Chart Sample");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](53, "apx-chart", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "p", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](57, "Target");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](59, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](60, "$15.3k ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](62, "p", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](63, "Last week");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](64, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](65, "i", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](66, "$2.8k ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](67, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](68, "p", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](69, "Last Month");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](70, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](71, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](72, "$12.5k ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](73, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](74, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](75, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](76, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](77, "Chart Sample");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](78, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](79, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](80, "apx-chart", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](81, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](82, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](83, "p", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](84, "Target");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](85, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](86, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](87, "$15.3k ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](88, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](89, "p", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](90, "Last week");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](91, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](92, "i", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](93, "$2.8k ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](94, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](95, "p", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](96, "Last Month");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](97, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](98, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](99, "$12.5k ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](100, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](101, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](102, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](103, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](104, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](105, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](106, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](107, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](108, "h5", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](109, "New Students");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](110, "h2", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](111, "1,025");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](112, "p", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](113, "span", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](114, "10%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](115, " Increase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](116, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](117, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](118, "img", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](119, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](120, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](121, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](122, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](123, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](124, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](125, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](126, "h5", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](127, " Total Courses");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](128, "h2", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](129, "47");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](130, "p", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](131, "span", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](132, "09%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](133, " Decrease");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](134, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](135, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](136, "img", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](137, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](138, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](139, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](140, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](141, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](142, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](143, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](144, "h5", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](145, "Awards");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](146, "h2", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](147, "128");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](148, "p", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](149, "span", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](150, "18%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](151, " Increase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](152, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](153, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](154, "img", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](155, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](156, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](157, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](158, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](159, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](160, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](161, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](162, "h5", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](163, "Revenue");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](164, "h2", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](165, "$48,697");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](166, "p", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](167, "span", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](168, "42%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](169, " Increase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](170, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](171, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](172, "img", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](173, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](174, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](175, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](176, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](177, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](178, "h6", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](179, "Average Lecture Per Month");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](180, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](181, "65 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](182, "span", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](183, "(Average)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](184, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](185, "apx-chart", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](186, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](187, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](188, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](189, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](190, "Subject Chart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](191, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](192, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](193, "apx-chart", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](194, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](195, "table", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](196, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](197, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](198, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](199, "i", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](200, " Music");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](201, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](202, "23");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](203, "td", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](204, "+32%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](205, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](206, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](207, "i", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](208, "Science");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](209, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](210, "32");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](211, "td", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](212, "+12%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](213, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](214, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](215, "i", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](216, "Economics");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](217, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](218, "12");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](219, "td", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](220, "-12%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](221, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](222, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](223, "i", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](224, "Mathes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](225, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](226, "32");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](227, "td", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](228, "+3%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](229, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](230, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](231, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](232, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](233, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](234, "Recent Report");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](235, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](236, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](237, "canvas", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](238, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](239, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](240, " MON ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](241, "span", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](242, "24");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](243, "span", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](244, "20");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](245, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](246, " TUE ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](247, "span", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](248, "18");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](249, "span", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](250, "22");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](251, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](252, " WED ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](253, "span", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](254, "16");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](255, "span", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](256, "30");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](257, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](258, " THU ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](259, "span", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](260, "18");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](261, "span", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](262, "22");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](263, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](264, " FRI ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](265, "span", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](266, "24");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](267, "span", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](268, "18");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](269, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](270, " SAT ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](271, "span", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](272, "36");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](273, "span", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](274, "22");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](275, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](276, " SUN ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](277, "span", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](278, "28");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](279, "span", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](280, "30");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](281, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](282, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](283, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](284, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](285, "Recent Report");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](286, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](287, "canvas", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](288, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](289, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](290, "div", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](291, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](292, "h6", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](293, "Orders Received");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](294, "h2", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](295, "i", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](296, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](297, "358");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](298, "p", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](299, "18% Higher Then Last Month");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](300, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](301, "div", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](302, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](303, "h6", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](304, "Completed Orders");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](305, "h2", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](306, "i", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](307, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](308, "865");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](309, "p", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](310, "21% Higher Then Last Month");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](311, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](312, "div", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](313, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](314, "h6", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](315, "New Orders");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](316, "h2", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](317, "i", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](318, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](319, "128");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](320, "p", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](321, "37% Higher Then Last Month");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](322, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](323, "div", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](324, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](325, "h6", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](326, "Total Earning");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](327, "h2", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](328, "i", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](329, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](330, "$25698");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](331, "p", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](332, "10% Higher Then Last Month");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](333, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](334, "div", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](335, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](336, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](337, "div", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](338, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](339, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](340, "Todays Income");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](341, "p", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](342, "Income For Today");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](343, "h3", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](344, "$170");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](345, "div", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](346, "div", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](347, "div", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](348, "div", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](349, "p", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](350, "Change");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](351, "p", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](352, "75%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](353, "div", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](354, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](355, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](356, "div", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](357, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](358, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](359, "Total Revenue");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](360, "p", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](361, "Total Income");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](362, "h3", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](363, "$120");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](364, "div", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](365, "div", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](366, "div", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](367, "div", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](368, "p", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](369, "Change");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](370, "p", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](371, "25%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](372, "div", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](373, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](374, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](375, "div", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](376, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](377, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](378, "New Orders");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](379, "p", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](380, "Fresh New Order");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](381, "h3", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](382, "15");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](383, "div", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](384, "div", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](385, "div", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](386, "div", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](387, "p", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](388, "Change");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](389, "p", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](390, "50%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](391, "div", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](392, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](393, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](394, "div", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](395, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](396, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](397, "New Users");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](398, "p", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](399, "Joined New User");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](400, "h3", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](401, "12");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](402, "div", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](403, "div", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](404, "div", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](405, "div", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](406, "p", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](407, "Change");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](408, "p", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](409, "25%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("series", ctx.circleChartOptions.series)("chart", ctx.circleChartOptions.chart)("plotOptions", ctx.circleChartOptions.plotOptions)("labels", ctx.circleChartOptions.labels)("legend", ctx.circleChartOptions.legend)("colors", ctx.circleChartOptions.colors)("responsive", ctx.circleChartOptions.responsive);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("series", ctx.radarChartOptions.series)("chart", ctx.radarChartOptions.chart)("xaxis", ctx.radarChartOptions.xaxis)("stroke", ctx.radarChartOptions.stroke)("markers", ctx.radarChartOptions.markers)("fill", ctx.radarChartOptions.fill);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("series", ctx.areaChartOptions.series)("chart", ctx.areaChartOptions.chart)("xaxis", ctx.areaChartOptions.xaxis)("stroke", ctx.areaChartOptions.stroke)("tooltip", ctx.areaChartOptions.tooltip)("dataLabels", ctx.areaChartOptions.dataLabels);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](105);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("series", ctx.avgLecChartOptions.series)("chart", ctx.avgLecChartOptions.chart)("xaxis", ctx.avgLecChartOptions.xaxis)("stroke", ctx.avgLecChartOptions.stroke)("colors", ctx.avgLecChartOptions.colors)("dataLabels", ctx.avgLecChartOptions.dataLabels)("legend", ctx.avgLecChartOptions.legend)("markers", ctx.avgLecChartOptions.markers)("grid", ctx.avgLecChartOptions.grid)("yaxis", ctx.avgLecChartOptions.yaxis)("tooltip", ctx.avgLecChartOptions.tooltip)("title", ctx.avgLecChartOptions.title)("fill", ctx.avgLecChartOptions.fill);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("series", ctx.pieChartOptions.series)("chart", ctx.pieChartOptions.chart)("labels", ctx.pieChartOptions.labels)("responsive", ctx.pieChartOptions.responsive)("dataLabels", ctx.pieChartOptions.dataLabels)("legend", ctx.pieChartOptions.legend);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("chartType", "line")("datasets", ctx.areaChartData)("labels", ctx.areaChartLabels)("options", ctx.areaChartOptions2)("plugins", ctx.areaChartPlugins)("legend", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("datasets", ctx.radarChartData)("labels", ctx.radarChartLabels)("options", ctx.radarChartOptions2)("chartType", ctx.radarChartType)("plugins", ctx.radarChartPlugins)("colors", ctx.radarChartColors);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkWithHref, ng_apexcharts__WEBPACK_IMPORTED_MODULE_2__.ChartComponent, ng2_charts__WEBPACK_IMPORTED_MODULE_3__.BaseChartDirective], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjaGFydC13aWRnZXQuY29tcG9uZW50LnNhc3MifQ== */"] });


/***/ }),

/***/ 25636:
/*!*************************************************************!*\
  !*** ./src/app/widget/data-widget/data-widget.component.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DataWidgetComponent": function() { return /* binding */ DataWidgetComponent; }
/* harmony export */ });
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/drag-drop */ 77310);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/progress-bar */ 12178);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-perfect-scrollbar */ 99904);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ 51095);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/tabs */ 65939);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ 98295);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ 83166);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ 76627);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/checkbox */ 7539);













function DataWidgetComponent_ng_template_764_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "img", 242);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Sarah Smith ");
} }
function DataWidgetComponent_ng_template_845_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "img", 243);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Jalpa Joshi ");
} }
function DataWidgetComponent_ng_template_926_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "img", 244);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Mark Peter ");
} }
function DataWidgetComponent_div_1296_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "div", 255);
} }
function DataWidgetComponent_div_1296_mat_icon_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-icon", 256);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " arrow_downward ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function DataWidgetComponent_div_1296_mat_icon_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-icon", 257);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " arrow_upward ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function DataWidgetComponent_div_1296_mat_icon_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-icon", 258);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " remove");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
const _c0 = function (a0) { return { done: a0 }; };
const _c1 = function (a0, a1, a2) { return { "task-low": a0, "task-high": a1, "task-normal": a2 }; };
function DataWidgetComponent_div_1296_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 245);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 246);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "mat-icon", 247);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "drag_indicator");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "mat-checkbox", 248);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("change", function DataWidgetComponent_div_1296_Template_mat_checkbox_change_5_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r10); const task_r4 = restoredCtx.$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r9.toggle(task_r4, ctx_r9.sidenav); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](6, DataWidgetComponent_div_1296_div_6_Template, 1, 0, "div", 249);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 250);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 251);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](10, DataWidgetComponent_div_1296_mat_icon_10_Template, 2, 0, "mat-icon", 252);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](11, DataWidgetComponent_div_1296_mat_icon_11_Template, 2, 0, "mat-icon", 253);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](12, DataWidgetComponent_div_1296_mat_icon_12_Template, 2, 0, "mat-icon", 254);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const task_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("checked", !!task_r4.done);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](8, _c0, task_r4.done));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", task_r4.title, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction3"](10, _c1, task_r4.priority == "Low", task_r4.priority == "High", task_r4.priority == "Normal"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", (task_r4 == null ? null : task_r4.priority) == "Low");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", (task_r4 == null ? null : task_r4.priority) == "High");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", (task_r4 == null ? null : task_r4.priority) == "Normal");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", task_r4.priority, " ");
} }
class DataWidgetComponent {
    constructor() {
        // TODO start
        this.tasks = [
            {
                id: "1",
                title: "Submit Science Homework",
                done: true,
                priority: "High",
            },
            {
                id: "2",
                title: "Request for festivle holiday",
                done: false,
                priority: "High",
            },
            {
                id: "3",
                title: "Order new java book",
                done: false,
                priority: "Low",
            },
            {
                id: "4",
                title: "Remind for lunch in hotel",
                done: true,
                priority: "Normal",
            },
            {
                id: "5",
                title: "Pay Hostel Fees",
                done: false,
                priority: "High",
            },
            {
                id: "6",
                title: "Attend Seminar On Sunday",
                done: false,
                priority: "Normal",
            },
            {
                id: "7",
                title: "Renew bus pass",
                done: true,
                priority: "High",
            },
            {
                id: "8",
                title: "Issue book in library",
                done: false,
                priority: "High",
            },
            {
                id: "9",
                title: "Project report submit",
                done: false,
                priority: "Low",
            },
        ];
    }
    drop(event) {
        (0,_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__.moveItemInArray)(this.tasks, event.previousIndex, event.currentIndex);
    }
    toggle(task, nav) {
        task.done = !task.done;
    }
    // TODO end
    ngOnInit() { }
}
DataWidgetComponent.??fac = function DataWidgetComponent_Factory(t) { return new (t || DataWidgetComponent)(); };
DataWidgetComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: DataWidgetComponent, selectors: [["app-data-widget"]], decls: 1416, vars: 1, consts: [[1, "content"], [1, "container-fluid"], [1, "block-header"], [1, "row"], [1, "col-xs-12", "col-sm-12", "col-md-12", "col-lg-12"], [1, "breadcrumb", "breadcrumb-style"], [1, "breadcrumb-item"], [1, "page-title"], [1, "breadcrumb-item", "bcrumb-1"], ["routerLink", "/admin/dashboard/main"], [1, "fas", "fa-home"], [1, "breadcrumb-item", "bcrumb-2"], ["href", "#", "onClick", "return false;"], [1, "breadcrumb-item", "active"], [1, "col-xl-4", "col-lg-4", "col-md-12", "col-sm-12"], [1, "card"], [1, "header"], [1, "tableBody"], [1, "table-responsive"], [1, "table", "table-hover"], ["mode", "determinate", "value", "30", "color", "warn"], ["mode", "determinate", "value", "55"], ["mode", "determinate", "value", "67"], ["mode", "determinate", "value", "70"], ["mode", "determinate", "value", "24", "color", "warn"], ["mode", "determinate", "value", "77"], ["mode", "determinate", "value", "41", "color", "warn"], [1, "col-xs-12", "col-sm-12", "col-md-4", "col-lg-4"], [1, "body"], [1, "doc-file-type"], [1, "list-unstyled", 2, "position", "relative", "max-height", "285px", 3, "perfectScrollbar"], [1, "d-flex", "mb-3"], [1, "msr-3", "align-self-center", "img-icon", "primary-rgba", "text-primary"], [1, "far", "fa-file-word"], [1, "set-flex"], [1, "font-16", "mb-1"], [1, "ms-auto"], [1, "far", "fa-trash-alt", "psr-3"], [1, "far", "fa-arrow-alt-circle-down"], [1, "msr-3", "align-self-center", "img-icon", "success-rgba", "text-success"], [1, "far", "fa-file-excel"], [1, "msr-3", "align-self-center", "img-icon", "danger-rgba", "text-danger"], [1, "far", "fa-file-pdf"], [1, "msr-3", "align-self-center", "img-icon", "info-rgba", "text-info"], [1, "far", "fa-file-archive"], [1, "text-center", "p-t-20"], ["mat-stroked-button", "", "color", "primary"], [1, "card-body"], [1, "list-unstyled", "user-progress", "list-unstyled-border", "list-unstyled-noborder", 2, "position", "relative", "max-height", "335px", 3, "perfectScrollbar"], [1, "lecture-list"], ["alt", "image", "width", "40", "src", "assets/images/user/usrbig1.jpg", 1, "msr-3", "rounded-circle"], [1, "media-title", "font-16"], [1, "text-job", "text-muted", "mb-0"], ["alt", "image", "width", "40", "src", "assets/images/user/usrbig2.jpg", 1, "msr-3", "rounded-circle"], ["alt", "image", "width", "40", "src", "assets/images/user/usrbig3.jpg", 1, "msr-3", "rounded-circle"], ["alt", "image", "width", "40", "src", "assets/images/user/usrbig4.jpg", 1, "msr-3", "rounded-circle"], ["alt", "image", "width", "40", "src", "assets/images/user/usrbig5.jpg", 1, "msr-3", "rounded-circle"], ["alt", "image", "width", "40", "src", "assets/images/user/usrbig6.jpg", 1, "msr-3", "rounded-circle"], [1, "row", "clearfix"], [1, "col-xs-12", "col-sm-12", "col-md-8", "col-lg-8"], [1, "review-block"], [1, "review-img"], ["src", "assets/images/user/user1.jpg", "alt", ""], [1, "col"], [1, "m-b-15"], [1, "float-end", "m-r-10", "text-muted"], [1, "material-icons"], [1, "m-t-15", "m-b-15", "text-muted"], ["href", "#!"], [1, "material-icons", "m-r-10"], [1, "material-icons", "m-r-10", "col-red"], ["src", "assets/images/user/user2.jpg", "alt", ""], [1, "text-center", "m-b-5"], ["href", "#!", 1, "b-b-primary", "text-primary"], [1, "col-md-4", "col-sm-12", "col-12"], [1, "totalEarning"], ["id", "skills", 1, "tab-pane", "body"], [1, "list-unstyled"], [1, "mb-2"], [1, "progress-label"], [1, "float-end", "progress-percent", "label", "label-info", "m-b-5"], [1, "progress", "skill-progress", "m-b-20", "w-100"], ["role", "progressbar", "aria-valuenow", "45", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "l-bg-green", "width-per-45"], [1, "float-start", "progress-label"], [1, "float-end", "progress-percent", "label", "label-danger", "m-b-5"], ["role", "progressbar", "aria-valuenow", "27", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "l-bg-purple", "width-per-27"], [1, "float-end", "progress-percent", "label", "label-primary", "m-b-5"], ["role", "progressbar", "aria-valuenow", "25", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "l-bg-orange", "width-per-25"], [1, "float-end", "progress-percent", "label", "label-success", "m-b-5"], ["role", "progressbar", "aria-valuenow", "18", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "l-bg-cyan", "width-per-18"], [1, "float-end", "progress-percent", "label", "label-warning", "m-b-5"], ["role", "progressbar", "aria-valuenow", "13", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "l-bg-red", "width-per-13"], [1, "col-lg-4", "col-md-4", "col-sm-4", "col-xs-12"], [1, "box-part", "text-center"], [1, "fab", "fa-twitter", "fa-3x", "col-blue"], [1, "title", "p-t-15"], [1, "text", "p-b-10"], ["href", "#"], [1, "fab", "fa-instagram", "fa-3x", "col-red"], [1, "fab", "fa-facebook-f", "fa-3x", "col-blue"], [1, "col-xs-12", "col-sm-12", "col-md-6", "col-lg-6"], [1, "assign-style", 2, "position", "relative", "max-height", "400px", 3, "perfectScrollbar"], [1, "feedBody"], [1, "active-feed"], [1, "feed-user-img"], ["src", "assets/images/user/user1.jpg", "alt", "User-Profile-Image", 1, "img-radius"], [1, "feedLblStyle", "lblFileStyle"], [1, "text-muted", "float-end"], [1, "m-b-15", "m-t-15"], [1, "diactive-feed"], ["src", "assets/images/user/user2.jpg", "alt", "User-Profile-Image", 1, "img-radius"], [1, "feedLblStyle", "lblTaskStyle"], ["src", "assets/images/user/user3.jpg", "alt", "User-Profile-Image", 1, "img-radius"], [1, "feedLblStyle", "lblCommentStyle"], ["src", "assets/images/user/user4.jpg", "alt", "User-Profile-Image", 1, "img-radius"], [1, "feedLblStyle", "lblReplyStyle"], ["src", "assets/images/user/user5.jpg", "alt", "User-Profile-Image", 1, "img-radius"], ["src", "assets/images/user/user6.jpg", "alt", "User-Profile-Image", 1, "img-radius"], [1, "table", "table-hover", "dashboard-task-infos"], [1, "table-img"], [1, "label", "l-bg-green", "shadow-style"], [1, "progress", "shadow-style"], ["role", "progressbar", "aria-valuenow", "62", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "l-bg-green", "width-per-62"], [1, "label", "l-bg-purple", "shadow-style"], ["role", "progressbar", "aria-valuenow", "40", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "l-bg-purple", "width-per-40"], ["src", "assets/images/user/user3.jpg", "alt", ""], [1, "label", "l-bg-orange", "shadow-style"], ["role", "progressbar", "aria-valuenow", "72", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "l-bg-orange", "width-per-72"], ["src", "assets/images/user/user4.jpg", "alt", ""], [1, "label", "l-bg-cyan", "shadow-style"], ["role", "progressbar", "aria-valuenow", "95", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "l-bg-cyan", "width-per-95"], ["src", "assets/images/user/user5.jpg", "alt", ""], [1, "label", "bg-green", "shadow-style"], ["role", "progressbar", "aria-valuenow", "87", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "l-bg-green", "width-per-87"], ["id", "new-orders", 1, "media-list", "position-relative", 2, "position", "relative", "max-height", "390px", 3, "perfectScrollbar"], ["id", "new-orders-table", 1, "table", "table-hover", "table-xl", "mb-0"], [1, "border-top-0"], [1, "text-truncate"], [1, "list-unstyled", "order-list"], [1, "avatar", "avatar-sm"], ["src", "assets/images/user/user1.jpg", "alt", "user", 1, "rounded-circle"], ["src", "assets/images/user/user2.jpg", "alt", "user", 1, "rounded-circle"], ["src", "assets/images/user/user3.jpg", "alt", "user", 1, "rounded-circle"], [1, "badge"], ["mat-tab-label", ""], [1, "table-responsive", "mt-3"], [1, "badge", "col-green"], ["role", "progressbar", "aria-valuenow", "72", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "l-bg-green", "width-per-72"], [1, "badge", "col-red"], ["role", "progressbar", "aria-valuenow", "62", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "l-bg-red", "width-per-62"], [1, "badge", "col-purple"], [1, "col-lg-6", "col-md-6", "col-sm-6", "col-xs-12"], [1, "card", "profile-header"], [1, "col-lg-4", "col-md-4", "col-12"], [1, "profile-image", "float-md-right"], ["src", "assets/images/user/usrbig6.jpg", "alt", ""], [1, "col-lg-8", "col-md-8", "col-12"], [1, "m-t-0", "m-b-0"], [1, "job_post"], ["type", "button", 1, "btn", "btn-outline-success", "btn-border-radius", "msr-2"], ["type", "button", 1, "btn", "btn-outline-warning", "btn-border-radius"], ["src", "assets/images/user/usrbig1.jpg", "alt", ""], [1, "sl-item", "sl-primary"], [1, "sl-content"], [1, "text-muted"], [1, "fa", "fa-user", "position-left"], [1, "sl-item", "sl-danger"], [1, "sl-item", "sl-success"], [1, "sl-item", "sl-warning"], [1, "chat"], [1, "chat-header", "clearfix"], ["src", "assets/images/user/user2.jpg", "alt", "avatar"], [1, "chat-about"], [1, "chat-with"], [1, "chat-num-messages"], ["id", "chat-conversation", 1, "chat-history", 2, "position", "relative", "max-height", "270px", 3, "perfectScrollbar"], [1, "clearfix"], [1, "message-data", "text-end"], [1, "message-data-time"], [1, "message-data-name"], [1, "zmdi", "zmdi-circle", "me"], [1, "message", "other-message", "float-end"], [1, "message-data"], [1, "zmdi", "zmdi-circle", "online"], [1, "message", "my-message"], [1, "chat-message", "clearfix"], [1, "form-group"], [1, "form-line"], [1, "example-full-width"], ["matInput", "", "placeholder", "Enter text here.."], [1, "card-block"], [1, "row", "m-b-20"], [1, "col-auto", "p-r-0"], ["src", "assets/images/posts/post1.jpg", "alt", "user image", 1, "latest-posts-img"], [1, "text-muted", "m-b-5"], [1, "fa", "fa-play-circle-o"], ["src", "assets/images/posts/post2.jpg", "alt", "user image", 1, "latest-posts-img"], ["src", "assets/images/posts/post3.jpg", "alt", "user image", 1, "latest-posts-img"], [1, "text-center"], [1, "recent-comment"], [1, "notice-board"], ["src", "assets/images/user/user6.jpg", "alt", "...", 1, "notice-object"], [1, "notice-body"], [1, "notice-heading", "col-green"], ["src", "assets/images/user/user4.jpg", "alt", "...", 1, "notice-object"], [1, "notice-heading", "color-primary", "col-indigo"], [1, "comment-date"], ["src", "assets/images/user/user3.jpg", "alt", "...", 1, "notice-object"], [1, "notice-heading", "color-danger", "col-cyan"], [1, "notice-board", "no-border"], ["src", "assets/images/user/user7.jpg", "alt", "...", 1, "notice-object"], [1, "notice-heading", "color-info", "col-orange"], [1, "timeline"], [1, "timeline-badge", "primary"], ["src", "assets/images/user/user1.jpg", "alt", "...", 1, "notice-object"], [1, "timeline-panel"], [1, "timeline-heading"], [1, "timeline-title"], [1, "timeline-body"], ["src", "assets/images/user/user2.jpg", "alt", "...", 1, "notice-object"], ["src", "assets/images/user/user8.jpg", "alt", "...", 1, "notice-object"], ["cdkDropList", "", 1, "task-list", 2, "position", "relative", "max-height", "370px", 3, "perfectScrollbar", "cdkDropListDropped"], ["class", "task-box", "cdkDrag", "", 4, "ngFor", "ngForOf"], [1, "table", "table-borderless", "medicine-list"], [1, "fas", "fa-tablets", "pill-style"], [1, "text-end", "w-25"], [1, "badge-outline"], [1, "fas", "fa-capsules", "pill-style"], [1, "fas", "fa-syringe", "pill-style"], [1, "fas", "fa-pills", "pill-style"], [1, "plain-card"], [1, "card-inner"], [1, "tx-primary", "m-b-15"], [1, "row", "mb-2"], [1, "col-4"], [1, "font-14"], [1, "material-icons", "col-green"], [1, "material-icons", "col-orange"], [1, "progress", "shadow-style", "mb-2", "mt-3"], ["role", "progressbar", "aria-valuenow", "70", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "l-bg-green", "width-per-70"], [1, "plain-card", "mt-4"], ["role", "progressbar", "aria-valuenow", "50", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "l-bg-red", "width-per-50"], ["src", "assets/images/user/user1.jpg", "alt", "user"], ["src", "assets/images/user/user2.jpg", "alt", "user"], ["src", "assets/images/user/user3.jpg", "alt", "user"], ["cdkDrag", "", 1, "task-box"], ["cdkDragHandle", "", 1, "task-handle", "m-r-20"], ["aria-hidden", "false"], ["color", "primary", 1, "m-r-15", 3, "checked", "change"], ["class", "task-custom-placeholder", 4, "cdkDragPlaceholder"], ["matTooltip", "Title", 3, "ngClass"], [3, "ngClass"], ["matTooltip", "Low", "aria-hidden", "false", "class", "lbl-low", 4, "ngIf"], ["matTooltip", "High", "aria-hidden", "false", "class", "lbl-high", 4, "ngIf"], ["matTooltip", "Normal", "aria-hidden", "false", "class", "lbl-normal", 4, "ngIf"], [1, "task-custom-placeholder"], ["matTooltip", "Low", "aria-hidden", "false", 1, "lbl-low"], ["matTooltip", "High", "aria-hidden", "false", 1, "lbl-high"], ["matTooltip", "Normal", "aria-hidden", "false", 1, "lbl-normal"]], template: function DataWidgetComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "h4", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "Data Widget");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](11, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, " Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "Widget");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "Data Widget");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, "Your Progress");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "table", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, "Subject");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32, "Progress");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](34, "Duration");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](38, "Chemistry");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](40, "30%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](41, "mat-progress-bar", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](43, "2 Months");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](46, "Mathematics");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](48, "55%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](49, "mat-progress-bar", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](51, "3 Months");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](54, "Painting");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](56, "67%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](57, "mat-progress-bar", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](59, "1 Months");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](62, "Business studies");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](63, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](64, "70%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](65, "mat-progress-bar", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](66, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](67, "2 Months");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](68, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](69, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](70, "Biology");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](71, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](72, "24%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](73, "mat-progress-bar", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](74, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](75, "3 Months");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](76, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](77, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](78, "Computer studies");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](79, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](80, "77%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](81, "mat-progress-bar", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](82, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](83, "4 Months");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](84, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](85, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](86, "Geography");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](87, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](88, "41%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](89, "mat-progress-bar", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](90, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](91, "2 Months");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](92, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](93, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](94, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](95, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](96, "Assignments");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](97, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](98, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](99, "ul", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](100, "li", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](101, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](102, "i", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](103, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](104, "h5", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](105, "Java Programming");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](106, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](107, ".doc, 4.3 MB");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](108, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](109, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](110, "i", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](111, "i", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](112, "li", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](113, "span", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](114, "i", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](115, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](116, "h5", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](117, "Angular Theory");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](118, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](119, ".xls, 2.5 MB");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](120, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](121, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](122, "i", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](123, "i", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](124, "li", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](125, "span", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](126, "i", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](127, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](128, "h5", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](129, "Maths Sums Solution");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](130, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](131, ".pdf, 10.5 MB");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](132, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](133, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](134, "i", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](135, "i", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](136, "li", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](137, "span", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](138, "i", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](139, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](140, "h5", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](141, "Submit Science Journal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](142, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](143, ".zip, 53.2 MB");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](144, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](145, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](146, "i", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](147, "i", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](148, "li", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](149, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](150, "i", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](151, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](152, "h5", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](153, "Marketing Instructions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](154, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](155, ".doc, 5.3 MB");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](156, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](157, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](158, "i", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](159, "i", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](160, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](161, "button", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](162, "More Records");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](163, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](164, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](165, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](166, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](167, " Upcomming Appointments ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](168, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](169, "ul", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](170, "li", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](171, "img", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](172, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](173, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](174, "Cara Stevens");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](175, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](176, "M.B.B.S.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](177, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](178, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](179, "12 June '20");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](180, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](181, "09:00-10:00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](182, "li", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](183, "img", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](184, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](185, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](186, "Airi Satou");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](187, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](188, "M.S.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](189, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](190, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](191, "13 June '20");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](192, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](193, "11:00-12:00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](194, "li", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](195, "img", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](196, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](197, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](198, "Jens Brincker");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](199, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](200, "Geography");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](201, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](202, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](203, "15 June '20");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](204, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](205, "09:30-10:30");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](206, "li", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](207, "img", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](208, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](209, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](210, "Angelica Ramos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](211, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](212, "B.H.M.S.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](213, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](214, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](215, "16 June '20");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](216, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](217, "14:00-15:00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](218, "li", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](219, "img", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](220, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](221, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](222, "Cara Stevens");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](223, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](224, "M.B.B.S.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](225, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](226, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](227, "18 June '20");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](228, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](229, "11:00-12:30");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](230, "li", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](231, "img", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](232, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](233, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](234, "Jacob Ryan");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](235, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](236, "M.D.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](237, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](238, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](239, "22 June '20");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](240, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](241, "13:00-14:15");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](242, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](243, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](244, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](245, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](246, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](247, "Customer Review");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](248, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](249, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](250, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](251, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](252, "img", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](253, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](254, "h6", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](255, "Alis Smith ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](256, "span", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](257, " a week ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](258, "i", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](259, "star");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](260, "i", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](261, "star");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](262, "i", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](263, "star");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](264, "i", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](265, "star_half");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](266, "i", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](267, "star_border");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](268, "p", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](269, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel rutrum ex, at ornare mi. In quis scelerisque dui, eget rhoncus orci. Fusce et sodales ipsum. Nam id nunc euismod, aliquet arcu quis, mattis nisi.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](270, "a", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](271, "i", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](272, "thumb_up");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](273, "a", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](274, "i", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](275, "thumb_down");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](276, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](277, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](278, "img", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](279, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](280, "h6", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](281, "John Dio ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](282, "span", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](283, " a week ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](284, "i", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](285, "star");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](286, "i", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](287, "star_half");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](288, "i", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](289, "star_border");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](290, "i", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](291, "star_border");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](292, "i", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](293, "star_border");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](294, "p", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](295, "Nam quis ligula est. Nunc sed risus non turpis tristique tempor. Ut sollicitudin faucibus magna nec gravida. Suspendisse ullamcorper justo vel porta imperdiet. Nunc nec ipsum vel augue placerat faucibus. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](296, "a", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](297, "i", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](298, "thumb_up");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](299, "a", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](300, "i", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](301, "thumb_down");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](302, "div", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](303, "a", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](304, "View all Customer Reviews");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](305, "div", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](306, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](307, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](308, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](309, "Earning Source");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](310, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](311, "div", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](312, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](313, "$90,808");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](314, "div", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](315, "ul", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](316, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](317, "div", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](318, "span", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](319, "envato.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](320, "span", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](321, "17%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](322, "div", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](323, "div", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](324, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](325, "div", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](326, "span", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](327, "google.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](328, "span", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](329, "27%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](330, "div", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](331, "div", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](332, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](333, "div", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](334, "span", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](335, "yahoo.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](336, "span", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](337, "25%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](338, "div", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](339, "div", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](340, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](341, "div", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](342, "span", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](343, "store");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](344, "span", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](345, "18%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](346, "div", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](347, "div", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](348, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](349, "div", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](350, "span", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](351, "Others");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](352, "span", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](353, "13%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](354, "div", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](355, "div", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](356, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](357, "div", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](358, "div", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](359, "i", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](360, "div", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](361, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](362, "Twitter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](363, "div", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](364, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](365, "Lorem ipsum dolor sit amet, id quo eruditi eloquentiam. Assum decore te sed. Elitr scripta ocurreret qui ad.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](366, "a", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](367, "Learn More");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](368, "div", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](369, "div", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](370, "i", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](371, "div", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](372, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](373, "Instagram");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](374, "div", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](375, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](376, "Lorem ipsum dolor sit amet, id quo eruditi eloquentiam. Assum decore te sed. Elitr scripta ocurreret qui ad.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](377, "a", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](378, "Learn More");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](379, "div", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](380, "div", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](381, "i", 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](382, "div", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](383, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](384, "Facebook");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](385, "div", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](386, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](387, "Lorem ipsum dolor sit amet, id quo eruditi eloquentiam. Assum decore te sed. Elitr scripta ocurreret qui ad.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](388, "a", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](389, "Learn More");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](390, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](391, "div", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](392, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](393, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](394, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](395, "Activity");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](396, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](397, "div", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](398, "ul", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](399, "li", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](400, "div", 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](401, "img", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](402, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](403, "span", 106);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](404, "File");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](405, " Sarah Smith ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](406, "small", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](407, "6 hours ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](408, "p", 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](409, " hii John, I have upload doc related to task. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](410, "li", 109);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](411, "div", 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](412, "img", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](413, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](414, "span", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](415, "Task ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](416, " Jalpa Joshi ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](417, "small", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](418, "5 hours ago ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](419, "p", 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](420, " Please do as specify. Let me know if you have any query. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](421, "li", 109);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](422, "div", 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](423, "img", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](424, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](425, "span", 113);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](426, "comment");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](427, " Lina Smith ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](428, "small", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](429, "6 hours ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](430, "p", 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](431, " Hey, How are you?? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](432, "li", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](433, "div", 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](434, "img", 114);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](435, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](436, "span", 115);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](437, "Reply");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](438, " Jacob Ryan ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](439, "small", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](440, "7 hours ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](441, "p", 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](442, " I am fine. You?? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](443, "li", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](444, "div", 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](445, "img", 116);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](446, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](447, "span", 106);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](448, "File");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](449, " Sarah Smith ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](450, "small", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](451, "6 hours ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](452, "p", 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](453, " hii John, I have upload doc related to task. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](454, "li", 109);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](455, "div", 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](456, "img", 117);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](457, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](458, "span", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](459, "Task ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](460, " Jalpa Joshi ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](461, "small", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](462, "5 hours ago ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](463, "p", 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](464, " Please do as specify. Let me know if you have any query. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](465, "div", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](466, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](467, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](468, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](469, "Assign Task");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](470, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](471, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](472, "table", 118);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](473, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](474, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](475, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](476, "User");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](477, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](478, "Task");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](479, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](480, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](481, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](482, "Manager");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](483, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](484, "Progress");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](485, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](486, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](487, "td", 119);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](488, "img", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](489, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](490, "Task A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](491, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](492, "span", 120);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](493, "Doing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](494, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](495, "John Doe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](496, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](497, "div", 121);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](498, "div", 122);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](499, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](500, "td", 119);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](501, "img", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](502, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](503, "Task B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](504, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](505, "span", 123);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](506, "To Do");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](507, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](508, "John Doe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](509, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](510, "div", 121);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](511, "div", 124);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](512, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](513, "td", 119);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](514, "img", 125);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](515, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](516, "Task C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](517, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](518, "span", 126);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](519, "On Hold");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](520, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](521, "John Doe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](522, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](523, "div", 121);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](524, "div", 127);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](525, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](526, "td", 119);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](527, "img", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](528, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](529, "Task D");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](530, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](531, "span", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](532, "Wait Approvel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](533, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](534, "John Doe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](535, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](536, "div", 121);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](537, "div", 130);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](538, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](539, "td", 119);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](540, "img", 131);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](541, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](542, "Task E");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](543, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](544, "span", 132);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](545, "Suspended");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](546, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](547, "John Doe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](548, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](549, "div", 121);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](550, "div", 133);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](551, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](552, "td", 119);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](553, "img", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](554, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](555, "Task A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](556, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](557, "span", 132);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](558, "Doing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](559, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](560, "John Doe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](561, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](562, "div", 121);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](563, "div", 122);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](564, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](565, "td", 119);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](566, "img", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](567, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](568, "Task B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](569, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](570, "span", 123);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](571, "To Do");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](572, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](573, "John Doe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](574, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](575, "div", 121);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](576, "div", 124);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](577, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](578, "div", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](579, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](580, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](581, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](582, "New Orders");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](583, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](584, "div", 134);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](585, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](586, "table", 135);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](587, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](588, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](589, "th", 136);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](590, "Product");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](591, "th", 136);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](592, "Customers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](593, "th", 136);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](594, "Total");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](595, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](596, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](597, "td", 137);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](598, "iPhone X");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](599, "td", 137);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](600, "ul", 138);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](601, "li", 139);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](602, "img", 140);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](603, "li", 139);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](604, "img", 141);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](605, "li", 139);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](606, "img", 142);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](607, "li", 139);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](608, "span", 143);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](609, "+4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](610, "td", 137);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](611, "$8999");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](612, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](613, "td", 137);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](614, "Pixel 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](615, "td", 137);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](616, "ul", 138);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](617, "li", 139);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](618, "img", 140);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](619, "li", 139);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](620, "img", 141);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](621, "li", 139);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](622, "img", 142);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](623, "li", 139);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](624, "span", 143);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](625, "+4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](626, "td", 137);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](627, "$5550");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](628, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](629, "td", 137);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](630, "OnePlus");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](631, "td", 137);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](632, "ul", 138);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](633, "li", 139);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](634, "img", 140);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](635, "li", 139);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](636, "img", 141);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](637, "li", 139);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](638, "img", 142);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](639, "li", 139);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](640, "span", 143);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](641, "+4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](642, "td", 137);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](643, "$9000");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](644, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](645, "td", 137);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](646, "Galaxy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](647, "td", 137);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](648, "ul", 138);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](649, "li", 139);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](650, "img", 140);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](651, "li", 139);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](652, "img", 141);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](653, "li", 139);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](654, "img", 142);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](655, "li", 139);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](656, "span", 143);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](657, "+4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](658, "td", 137);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](659, "$7500");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](660, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](661, "td", 137);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](662, "Moto Z2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](663, "td", 137);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](664, "ul", 138);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](665, "li", 139);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](666, "img", 140);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](667, "li", 139);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](668, "img", 141);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](669, "li", 139);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](670, "img", 142);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](671, "li", 139);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](672, "span", 143);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](673, "+4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](674, "td", 137);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](675, "$8500");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](676, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](677, "td", 137);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](678, "iPhone X");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](679, "td", 137);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](680, "ul", 138);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](681, "li", 139);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](682, "img", 140);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](683, "li", 139);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](684, "img", 141);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](685, "li", 139);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](686, "img", 142);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](687, "li", 139);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](688, "span", 143);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](689, "+4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](690, "td", 137);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](691, "$8999");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](692, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](693, "td", 137);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](694, "iPhone X");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](695, "td", 137);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](696, "ul", 138);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](697, "li", 139);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](698, "img", 140);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](699, "li", 139);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](700, "img", 141);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](701, "li", 139);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](702, "img", 142);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](703, "li", 139);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](704, "span", 143);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](705, "+4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](706, "td", 137);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](707, "$8999");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](708, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](709, "td", 137);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](710, "Pixel 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](711, "td", 137);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](712, "ul", 138);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](713, "li", 139);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](714, "img", 140);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](715, "li", 139);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](716, "img", 141);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](717, "li", 139);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](718, "img", 142);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](719, "li", 139);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](720, "span", 143);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](721, "+4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](722, "td", 137);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](723, "$5550");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](724, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](725, "td", 137);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](726, "OnePlus");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](727, "td", 137);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](728, "ul", 138);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](729, "li", 139);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](730, "img", 140);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](731, "li", 139);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](732, "img", 141);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](733, "li", 139);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](734, "img", 142);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](735, "li", 139);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](736, "span", 143);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](737, "+4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](738, "td", 137);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](739, "$9000");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](740, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](741, "td", 137);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](742, "Galaxy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](743, "td", 137);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](744, "ul", 138);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](745, "li", 139);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](746, "img", 140);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](747, "li", 139);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](748, "img", 141);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](749, "li", 139);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](750, "img", 142);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](751, "li", 139);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](752, "span", 143);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](753, "+4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](754, "td", 137);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](755, "$7500");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](756, "div", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](757, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](758, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](759, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](760, "Task List");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](761, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](762, "mat-tab-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](763, "mat-tab");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](764, DataWidgetComponent_ng_template_764_Template, 2, 0, "ng-template", 144);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](765, "div", 145);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](766, "table", 118);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](767, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](768, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](769, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](770, "Task");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](771, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](772, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](773, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](774, "Manager");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](775, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](776, "Progress");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](777, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](778, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](779, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](780, "Task C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](781, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](782, "span", 146);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](783, "Completed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](784, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](785, "John Doe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](786, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](787, "div", 121);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](788, "div", 147);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](789, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](790, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](791, "Task A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](792, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](793, "span", 148);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](794, "On Process");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](795, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](796, "John Doe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](797, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](798, "div", 121);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](799, "div", 149);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](800, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](801, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](802, "Task B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](803, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](804, "span", 150);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](805, "On Hold");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](806, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](807, "John Doe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](808, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](809, "div", 121);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](810, "div", 124);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](811, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](812, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](813, "Task D");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](814, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](815, "span", 146);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](816, "Completed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](817, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](818, "John Doe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](819, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](820, "div", 121);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](821, "div", 147);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](822, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](823, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](824, "Task E");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](825, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](826, "span", 150);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](827, "On Hold");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](828, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](829, "John Doe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](830, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](831, "div", 121);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](832, "div", 124);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](833, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](834, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](835, "Task F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](836, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](837, "span", 150);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](838, "On Hold");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](839, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](840, "John Doe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](841, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](842, "div", 121);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](843, "div", 124);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](844, "mat-tab");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](845, DataWidgetComponent_ng_template_845_Template, 2, 0, "ng-template", 144);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](846, "div", 145);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](847, "table", 118);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](848, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](849, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](850, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](851, "Task");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](852, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](853, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](854, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](855, "Manager");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](856, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](857, "Progress");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](858, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](859, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](860, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](861, "Task D");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](862, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](863, "span", 148);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](864, "On Process");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](865, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](866, "John Doe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](867, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](868, "div", 121);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](869, "div", 149);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](870, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](871, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](872, "Task E");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](873, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](874, "span", 150);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](875, "On Hold");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](876, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](877, "John Doe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](878, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](879, "div", 121);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](880, "div", 124);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](881, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](882, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](883, "Task F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](884, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](885, "span", 146);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](886, "Completed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](887, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](888, "John Doe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](889, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](890, "div", 121);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](891, "div", 147);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](892, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](893, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](894, "Task G");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](895, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](896, "span", 148);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](897, "On Process");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](898, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](899, "John Doe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](900, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](901, "div", 121);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](902, "div", 149);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](903, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](904, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](905, "Task K");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](906, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](907, "span", 150);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](908, "On Hold");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](909, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](910, "John Doe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](911, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](912, "div", 121);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](913, "div", 124);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](914, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](915, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](916, "Task M");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](917, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](918, "span", 148);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](919, "On Process");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](920, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](921, "John Doe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](922, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](923, "div", 121);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](924, "div", 149);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](925, "mat-tab");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](926, DataWidgetComponent_ng_template_926_Template, 2, 0, "ng-template", 144);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](927, "div", 145);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](928, "table", 118);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](929, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](930, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](931, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](932, "Task");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](933, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](934, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](935, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](936, "Manager");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](937, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](938, "Progress");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](939, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](940, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](941, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](942, "Task E");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](943, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](944, "span", 150);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](945, "On Hold");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](946, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](947, "John Doe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](948, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](949, "div", 121);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](950, "div", 124);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](951, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](952, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](953, "Task D");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](954, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](955, "span", 148);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](956, "On Process");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](957, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](958, "John Doe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](959, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](960, "div", 121);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](961, "div", 149);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](962, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](963, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](964, "Task F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](965, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](966, "span", 146);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](967, "Completed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](968, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](969, "John Doe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](970, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](971, "div", 121);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](972, "div", 147);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](973, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](974, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](975, "Task L");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](976, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](977, "span", 148);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](978, "On Process");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](979, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](980, "John Doe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](981, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](982, "div", 121);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](983, "div", 149);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](984, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](985, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](986, "Task H");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](987, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](988, "span", 150);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](989, "On Hold");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](990, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](991, "John Doe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](992, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](993, "div", 121);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](994, "div", 124);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](995, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](996, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](997, "Task L");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](998, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](999, "span", 148);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1000, "On Process");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1001, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1002, "John Doe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1003, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1004, "div", 121);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1005, "div", 149);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1006, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1007, "div", 151);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1008, "div", 152);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1009, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1010, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1011, "div", 153);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1012, "div", 154);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1013, "img", 155);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1014, "div", 156);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1015, "h4", 157);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1016, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1017, "Sarah");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1018, " Smith");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1019, "span", 158);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1020, "Java Develper");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1021, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1022, "102, Svayam Appartment, new P.L. road, Rajkot-369852");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1023, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1024, "button", 159);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1025, "Follow");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1026, "button", 160);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1027, "Message");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1028, "div", 151);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1029, "div", 152);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1030, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1031, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1032, "div", 153);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1033, "div", 154);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1034, "img", 161);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1035, "div", 156);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1036, "h4", 157);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1037, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1038, "Sarah");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1039, " Smith");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1040, "span", 158);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1041, "Java Develper");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1042, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1043, "102, Svayam Appartment, new P.L. road, Rajkot-369852");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1044, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1045, "button", 159);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1046, "Follow");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1047, "button", 160);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1048, "Message");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1049, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1050, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1051, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1052, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1053, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1054, "Recent Activities");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1055, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1056, "div", 162);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1057, "div", 163);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1058, "small", 164);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1059, "i", 165);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1060, " 5 mins ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1061, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1062, "Lorem ipsum dolor sit amet conse ctetur which ascing elit users.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1063, "div", 166);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1064, "div", 163);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1065, "small", 164);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1066, "i", 165);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1067, " 8 mins ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1068, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1069, "Lorem ipsum dolor sit ametcon the sectetur that ascing elit users.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1070, "div", 167);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1071, "div", 163);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1072, "small", 164);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1073, "i", 165);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1074, " 10 mins ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1075, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1076, "Lorem ipsum dolor sit amet cons the ecte tur and adip ascing elit users.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1077, "div", 168);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1078, "div", 163);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1079, "small", 164);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1080, "i", 165);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1081, " 12 mins ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1082, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1083, "Lorem ipsum dolor sit amet consec tetur adip ascing elit users.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1084, "div", 162);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1085, "div", 163);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1086, "small", 164);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1087, "i", 165);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1088, " 5 mins ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1089, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1090, "Lorem ipsum dolor sit amet conse ctetur which ascing elit users.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1091, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1092, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1093, "div", 169);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1094, "div", 170);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1095, "img", 171);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1096, "div", 172);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1097, "div", 173);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1098, "Aiden Chavez");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1099, "div", 174);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1100, "2 new messages");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1101, "div", 175);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1102, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1103, "li", 176);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1104, "div", 177);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1105, "span", 178);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1106, "10:10 AM, Today");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1107, " \u00A0 \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1108, "span", 179);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1109, "Michael");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1110, "i", 180);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1111, "div", 181);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1112, " Hi Aiden, how are you? How is the project coming along? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1113, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1114, "div", 182);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1115, "span", 179);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1116, "i", 183);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1117, " Aiden");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1118, "span", 178);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1119, "10:12 AM, Today");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1120, "div", 184);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1121, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1122, "Are we meeting today? Project has been already finished and I have results to show you.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1123, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1124, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1125, "div", 182);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1126, "span", 179);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1127, "i", 183);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1128, " Aiden");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1129, "span", 178);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1130, "10:12 AM, Today");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1131, "div", 184);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1132, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1133, "Are we meeting today? Project has been already finished and I have results to show you.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1134, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1135, "li", 176);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1136, "div", 177);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1137, "span", 178);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1138, "10:10 AM, Today");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1139, " \u00A0 \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1140, "span", 179);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1141, "Michael");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1142, "i", 180);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1143, "div", 181);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1144, " Hi Aiden, how are you? How is the project coming along? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1145, "div", 185);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1146, "div", 186);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1147, "div", 187);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1148, "mat-form-field", 188);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1149, "input", 189);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1150, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1151, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1152, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1153, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1154, "Latest Posts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1155, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1156, "div", 190);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1157, "div", 191);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1158, "div", 192);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1159, "img", 193);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1160, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1161, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1162, "About Something");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1163, "p", 194);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1164, "i", 195);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1165, " Video | 10 minutes ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1166, "p", 164);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1167, "Lorem Ipsum is simply dummy text of the.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1168, "div", 191);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1169, "div", 192);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1170, "img", 196);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1171, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1172, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1173, "Relationship");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1174, "p", 194);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1175, "i", 195);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1176, " Video | 24 minutes ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1177, "p", 164);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1178, "Lorem Ipsum is simply dummy text of the.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1179, "div", 191);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1180, "div", 192);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1181, "img", 197);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1182, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1183, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1184, "Human body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1185, "p", 194);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1186, "i", 195);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1187, " Video | 53 minutes ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1188, "p", 164);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1189, "Lorem Ipsum is simply dummy text of the.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1190, "div", 198);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1191, "a", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1192, "View All Posts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1193, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1194, "div", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1195, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1196, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1197, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1198, "Notice Board");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1199, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1200, "div", 199);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1201, "div", 200);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1202, "div", 119);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1203, "img", 201);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1204, "div", 202);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1205, "h5", 203);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1206, "Airi Satou");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1207, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1208, "Lorem ipsum dolor sit amet, id quo eruditi eloquentiam.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1209, "small", 164);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1210, "7 hours ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1211, "div", 200);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1212, "div", 119);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1213, "img", 204);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1214, "div", 202);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1215, "h5", 205);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1216, "Sarah Smith");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1217, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1218, "Lorem ipsum dolor sit amet, id quo eruditi eloquentiam.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1219, "p", 206);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1220, "1 hour ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1221, "div", 200);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1222, "div", 119);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1223, "img", 207);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1224, "div", 202);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1225, "h5", 208);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1226, "Cara Stevens");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1227, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1228, "Lorem ipsum dolor sit amet, id quo eruditi eloquentiam.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1229, "div", 206);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1230, "Yesterday");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1231, "div", 209);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1232, "div", 119);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1233, "img", 210);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1234, "div", 202);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1235, "h5", 211);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1236, "Ashton Cox");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1237, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1238, "Lorem ipsum dolor sit amet, id quo eruditi eloquentiam.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1239, "div", 206);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1240, "Yesterday");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1241, "div", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1242, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1243, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1244, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1245, "Recent Activity");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1246, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1247, "ul", 212);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1248, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1249, "div", 213);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1250, "img", 214);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1251, "div", 215);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1252, "div", 216);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1253, "h5", 217);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1254, "Lorem ipsum dolor sit amet, id quo eruditi.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1255, "div", 218);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1256, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1257, "5 minutes ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1258, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1259, "div", 213);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1260, "img", 219);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1261, "div", 215);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1262, "div", 216);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1263, "h5", 217);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1264, "Lorem ipsum dolor sit amet, id quo eruditi.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1265, "div", 218);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1266, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1267, "10 minutes ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1268, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1269, "div", 213);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1270, "img", 220);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1271, "div", 215);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1272, "div", 216);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1273, "h5", 217);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1274, "Lorem ipsum dolor sit amet, id quo eruditi.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1275, "div", 218);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1276, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1277, "20 minutes ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1278, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1279, "div", 213);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1280, "img", 204);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1281, "div", 215);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1282, "div", 216);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1283, "h5", 217);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1284, "Lorem ipsum dolor sit amet, id quo eruditi.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1285, "div", 218);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1286, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1287, "35 minutes ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1288, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1289, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1290, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1291, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1292, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1293, "Todo List");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1294, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1295, "div", 221);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("cdkDropListDropped", function DataWidgetComponent_Template_div_cdkDropListDropped_1295_listener($event) { return ctx.drop($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1296, DataWidgetComponent_div_1296_Template, 14, 14, "div", 222);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1297, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1298, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1299, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1300, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1301, "Medications");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1302, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1303, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1304, "table", 223);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1305, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1306, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1307, "i", 224);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1308, " Econochlor (chloramphenicol-oral)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1309, "td", 225);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1310, "span", 226);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1311, "1 - 0 - 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1312, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1313, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1314, "i", 227);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1315, " Desmopressin tabs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1316, "td", 225);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1317, "span", 226);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1318, "1 - 1 - 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1319, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1320, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1321, "i", 228);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1322, " Abciximab-injection");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1323, "td", 225);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1324, "span", 226);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1325, "1 Daily");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1326, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1327, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1328, "i", 229);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1329, " Kevzara sarilumab");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1330, "td", 225);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1331, "span", 226);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1332, "0 - 0 - 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1333, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1334, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1335, "i", 227);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1336, " Gentamicin-topical");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1337, "td", 225);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1338, "span", 226);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1339, "1 - 0 - 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1340, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1341, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1342, "i", 224);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1343, " Paliperidone palmitate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1344, "td", 225);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1345, "span", 226);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1346, "1 - 1 - 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1347, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1348, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1349, "i", 228);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1350, " Sermorelin-injectable");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1351, "td", 225);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1352, "span", 226);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1353, "1 Daily");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1354, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1355, "button", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1356, "Report Adverse Effect");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1357, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1358, "div", 230);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1359, "div", 231);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1360, "h6", 232);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1361, "New Admission Report");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1362, "div", 233);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1363, "div", 234);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1364, "label", 235);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1365, "Today");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1366, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1367, "105");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1368, "i", 236);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1369, "trending_up");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1370, "div", 234);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1371, "label", 235);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1372, "This Week");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1373, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1374, "825");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1375, "i", 237);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1376, "trending_down");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1377, "div", 234);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1378, "label", 235);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1379, "This Month");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1380, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1381, "22,067");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1382, "i", 236);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1383, "trending_up");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1384, "div", 238);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1385, "div", 239);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1386, "70%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1387, "div", 240);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1388, "div", 231);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1389, "h6", 232);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1390, "Fees Collection Report");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1391, "div", 233);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1392, "div", 234);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1393, "label", 235);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1394, "Today");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1395, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1396, "$147");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1397, "i", 237);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1398, "trending_down");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1399, "div", 234);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1400, "label", 235);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1401, "This Week");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1402, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1403, "$968");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1404, "i", 236);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1405, "trending_up");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1406, "div", 234);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1407, "label", 235);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1408, "This Month");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1409, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1410, "$1,147");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1411, "i", 237);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1412, "trending_down");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1413, "div", 238);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1414, "div", 241);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1415, "50%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1296);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.tasks);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkWithHref, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_3__.MatProgressBar, ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__.PerfectScrollbarDirective, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButton, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__.MatTabGroup, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__.MatTab, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__.MatTabLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatFormField, _angular_material_input__WEBPACK_IMPORTED_MODULE_8__.MatInput, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__.CdkDropList, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__.CdkDrag, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__.CdkDragHandle, _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIcon, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_11__.MatCheckbox, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__.CdkDragPlaceholder, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkYXRhLXdpZGdldC5jb21wb25lbnQuc2FzcyJ9 */"] });


/***/ }),

/***/ 28389:
/*!*************************************************!*\
  !*** ./src/app/widget/widget-routing.module.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WidgetRoutingModule": function() { return /* binding */ WidgetRoutingModule; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _chart_widget_chart_widget_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chart-widget/chart-widget.component */ 36897);
/* harmony import */ var _data_widget_data_widget_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data-widget/data-widget.component */ 25636);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);





const routes = [
    {
        path: "",
        redirectTo: "chart-widget",
        pathMatch: "full",
    },
    {
        path: "chart-widget",
        component: _chart_widget_chart_widget_component__WEBPACK_IMPORTED_MODULE_0__.ChartWidgetComponent,
    },
    {
        path: "data-widget",
        component: _data_widget_data_widget_component__WEBPACK_IMPORTED_MODULE_1__.DataWidgetComponent,
    },
];
class WidgetRoutingModule {
}
WidgetRoutingModule.??fac = function WidgetRoutingModule_Factory(t) { return new (t || WidgetRoutingModule)(); };
WidgetRoutingModule.??mod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineNgModule"]({ type: WidgetRoutingModule });
WidgetRoutingModule.??inj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["????setNgModuleScope"](WidgetRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] }); })();


/***/ }),

/***/ 88503:
/*!*****************************************!*\
  !*** ./src/app/widget/widget.module.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WidgetModule": function() { return /* binding */ WidgetModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-perfect-scrollbar */ 99904);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _widget_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./widget-routing.module */ 28389);
/* harmony import */ var _chart_widget_chart_widget_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chart-widget/chart-widget.component */ 36897);
/* harmony import */ var _data_widget_data_widget_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data-widget/data-widget.component */ 25636);
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-apexcharts */ 34256);
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng2-charts */ 86178);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ 98295);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ 83166);
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/drag-drop */ 77310);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ 76627);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/checkbox */ 7539);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ 51095);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/progress-bar */ 12178);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/tabs */ 65939);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);

















class WidgetModule {
}
WidgetModule.??fac = function WidgetModule_Factory(t) { return new (t || WidgetModule)(); };
WidgetModule.??mod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineNgModule"]({ type: WidgetModule });
WidgetModule.??inj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _widget_routing_module__WEBPACK_IMPORTED_MODULE_0__.WidgetRoutingModule,
            ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__.PerfectScrollbarModule,
            ng_apexcharts__WEBPACK_IMPORTED_MODULE_6__.NgApexchartsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatFormFieldModule,
            _angular_material_input__WEBPACK_IMPORTED_MODULE_9__.MatInputModule,
            _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_10__.DragDropModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__.MatIconModule,
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__.MatCheckboxModule,
            _angular_material_button__WEBPACK_IMPORTED_MODULE_13__.MatButtonModule,
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_14__.MatProgressBarModule,
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_15__.MatTabsModule,
            ng2_charts__WEBPACK_IMPORTED_MODULE_16__.ChartsModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["????setNgModuleScope"](WidgetModule, { declarations: [_chart_widget_chart_widget_component__WEBPACK_IMPORTED_MODULE_1__.ChartWidgetComponent, _data_widget_data_widget_component__WEBPACK_IMPORTED_MODULE_2__.DataWidgetComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _widget_routing_module__WEBPACK_IMPORTED_MODULE_0__.WidgetRoutingModule,
        ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__.PerfectScrollbarModule,
        ng_apexcharts__WEBPACK_IMPORTED_MODULE_6__.NgApexchartsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatFormFieldModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_9__.MatInputModule,
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_10__.DragDropModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__.MatIconModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__.MatCheckboxModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_13__.MatButtonModule,
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_14__.MatProgressBarModule,
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_15__.MatTabsModule,
        ng2_charts__WEBPACK_IMPORTED_MODULE_16__.ChartsModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_widget_widget_module_ts-es2015.js.map