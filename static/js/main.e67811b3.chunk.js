(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,a){e.exports=a(21)},15:function(e,t,a){},18:function(e,t){function a(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}a.keys=function(){return[]},a.resolve=a,e.exports=a,a.id=18},21:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),s=a(9),r=(a(15),a(2)),i=a(3),c=a(5),o=a(4),d=a(6),m=a(1),u=a.n(m),h=(a(17),function(e){var t=e.duration;return l.a.createElement("nav",{className:"level is-mobile"},l.a.createElement("div",{className:"level-item has-text-centered"},l.a.createElement("div",null,l.a.createElement("p",{className:"heading"},"Days"),l.a.createElement("p",{className:"title"},Math.floor(t.asDays())))),l.a.createElement("div",{className:"level-item has-text-centered"},l.a.createElement("div",null,l.a.createElement("p",{className:"heading"},"Hours"),l.a.createElement("p",{className:"title"},t.hours().toString().padStart(2,"0")))),l.a.createElement("div",{className:"level-item has-text-centered"},l.a.createElement("div",null,l.a.createElement("p",{className:"heading"},"Minuts"),l.a.createElement("p",{className:"title"},t.minutes().toString().padStart(2,"0")))),l.a.createElement("div",{className:"level-item has-text-centered"},l.a.createElement("div",null,l.a.createElement("p",{className:"heading"},"Seconds"),l.a.createElement("p",{className:"title"},t.seconds().toString().padStart(2,"0")))))}),E=function(e){var t=e.pause,a=e.onTogglePaused;return l.a.createElement("div",{className:"field is-grouped is-grouped-centered"},l.a.createElement("p",{className:"control"},l.a.createElement("button",{className:"button is-danger is-outline is-rounded is medium",disabled:t,onClick:a},"Pause")),l.a.createElement("p",{className:"control"},l.a.createElement("button",{className:"button is-success is-outline is-rounded is medium",disabled:!t,onClick:a},"Resume")))},p=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,l=new Array(n),s=0;s<n;s++)l[s]=arguments[s];return(a=Object(c.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(l)))).state={date:"",valid:!0,dirty:!1},a.handleDateChange=function(e){var t=e.target.value,n=u()(t),l=n.isValid()&&n.isAfter(u()());a.setState({valid:l,date:t,dirty:!0}),l&&a.props.onDateRest(n)},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state,t=e.date,a=e.valid,n=e.dirty,s="input is-medium is-rounded";return a&&n&&(s+=" is-success"),!a&&n&&(s+=" is-danger"),l.a.createElement("div",{className:"field has-addons has-addons-centered",style:{marginBottom:"40px"}},l.a.createElement("p",{className:"control has-text-centered"},l.a.createElement("input",{className:s,value:t,onChange:this.handleDateChange,placeholder:"Type a Date..."}),!a&&l.a.createElement("i",{className:"help is-danger is-size-6"},"Pleas type a valid (! In the Future) date")))}}]),t}(n.Component),v=function(e){var t=e.active,a=e.onToggle,n=e.holidays;return l.a.createElement("div",{className:"modal "+(t?" is-active":"")},l.a.createElement("div",{className:"modal-background",onClick:a}),l.a.createElement("div",{className:"modal-card"},l.a.createElement("header",{className:"modal-card-head"},l.a.createElement("p",{className:"modal-card-title"},"Holidays"),l.a.createElement("button",{className:"delete","aria-label":"close",onClick:a})),l.a.createElement("section",{className:"modal-card-body"},l.a.createElement("table",{className:"table is-striped is-bordered is-fullwidth"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Date"),l.a.createElement("th",null,"Holiday"))),l.a.createElement("tbody",null,n.map(function(e,t){return l.a.createElement("tr",{key:t},l.a.createElement("td",null,e.calendar()),l.a.createElement("td",null,e.isHoliday()))}))))))},g=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,l=new Array(n),s=0;s<n;s++)l[s]=arguments[s];return(a=Object(c.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(l)))).state={currentDate:u()(),nextDate:u()({year:u()().year()+1}),paused:!1,showHolidays:!1},a.handleTogglePaused=function(){a.setState(function(e,t){var n=!e.paused;return n?a.pause():a.resume(),{paused:n}})},a.getHolidays=function(){var e=a.state,t=e.currentDate,n=e.nextDate;return u()(t).holidaysBetween(n)},a.handleDateRest=function(e){a.setState({nextDate:e})},a.handleHloidaysToggle=function(){a.setState({showHolidays:!a.state.showHolidays})},a.pause=function(){clearInterval(a.interval)},a.resume=function(){a.interval=setInterval(function(){a.setState({currentDate:u()()})},1e3)},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.resume()}},{key:"componentWillMount",value:function(){this.pause()}},{key:"getRemainingTime",value:function(){var e=this.state,t=e.currentDate,a=e.nextDate.diff(t);return u.a.duration(a)}},{key:"render",value:function(){var e=this.state,t=e.paused,a=e.nextDate,n=e.showHolidays,s=this.getRemainingTime(),r=this.getHolidays();return l.a.createElement("section",{className:"hero is-dark is-info is-bold is-fullheight has-text-centered"},l.a.createElement("div",{className:"hero-body"},l.a.createElement("div",{className:"container"},l.a.createElement("h1",{className:"title"},a.calendar()," is Coming Up !",l.a.createElement("button",{className:"button is-small is-rounded is-ligth",style:{margin:"5px 0 0 10px"},onClick:this.handleHloidaysToggle},"Holidays")),l.a.createElement("section",{className:"section"},l.a.createElement(h,{duration:s})),l.a.createElement(p,{onDateRest:this.handleDateRest}),l.a.createElement(E,{pause:t,onTogglePaused:this.handleTogglePaused}),l.a.createElement(v,{holidays:r,active:n,onToggle:this.handleHloidaysToggle}))))}}]),t}(n.Component);a(19);Object(s.render)(l.a.createElement(function(e){return l.a.createElement(g,null)},null),document.getElementById("root"))}},[[10,2,1]]]);
//# sourceMappingURL=main.e67811b3.chunk.js.map