/*! For license information please see main.js.LICENSE.txt */
(()=>{"use strict";var e={"./src/styles.css":(e,t,r)=>{r.r(t)}},t={};function r(o){var s=t[o];if(void 0!==s)return s.exports;var n=t[o]={exports:{}};return e[o](n,n.exports,r),n.exports}r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var o={};(()=>{r.r(o);r("./src/styles.css");document.write("Hello, Webpack!");const e=document.querySelector(".data");(function(e,t,r=null){return new Promise(((o,s)=>{const n=new XMLHttpRequest;n.open(e,t),n.responseType="json",n.setRequestHeader("Content-Type","application/json"),n.onload=()=>{n.status>=400?s(n.response):o(n.response)},n.onerror=()=>{s(n.response)},n.send(JSON.stringify(r))}))})("GET","http://localhost:3000/contacts").then((t=>{e.innerHTML=JSON.stringify(t)}))})()})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiO2dFQUNJQSxFQUEyQixDQUFDLEVBR2hDLFNBQVNDLEVBQW9CQyxHQUU1QixJQUFJQyxFQUFlSCxFQUF5QkUsR0FDNUMsUUFBcUJFLElBQWpCRCxFQUNILE9BQU9BLEVBQWFFLFFBR3JCLElBQUlDLEVBQVNOLEVBQXlCRSxHQUFZLENBR2pERyxRQUFTLENBQUMsR0FPWCxPQUhBRSxFQUFvQkwsR0FBVUksRUFBUUEsRUFBT0QsUUFBU0osR0FHL0NLLEVBQU9ELE9BQ2YsQ0NyQkFKLEVBQW9CTyxFQUFLSCxJQUNILG9CQUFYSSxRQUEwQkEsT0FBT0MsYUFDMUNDLE9BQU9DLGVBQWVQLEVBQVNJLE9BQU9DLFlBQWEsQ0FBRUcsTUFBTyxXQUU3REYsT0FBT0MsZUFBZVAsRUFBUyxhQUFjLENBQUVRLE9BQU8sR0FBTyw4Q0NIOURDLFNBQVNDLE1BQU0sbUJBQ2YsTUFBTUMsRUFBY0YsU0FBU0csY0FBYyxVQUMzQyxTQUFxQkMsRUFBUUMsRUFBS0MsRUFBTyxNQUN2QyxPQUFPLElBQUlDLFNBQVEsQ0FBQ0MsRUFBU0MsS0FDM0IsTUFBTUMsRUFBTSxJQUFJQyxlQUNoQkQsRUFBSUUsS0FBS1IsRUFBUUMsR0FDakJLLEVBQUlHLGFBQWUsT0FDbkJILEVBQUlJLGlCQUFpQixlQUFnQixvQkFDckNKLEVBQUlLLE9BQVMsS0FDUEwsRUFBSU0sUUFBVSxJQUNoQlAsRUFBT0MsRUFBSU8sVUFFWFQsRUFBUUUsRUFBSU8sU0FDZCxFQUVGUCxFQUFJUSxRQUFVLEtBQ1pULEVBQU9DLEVBQUlPLFNBQVMsRUFFdEJQLEVBQUlTLEtBQUtDLEtBQUtDLFVBQVVmLEdBQU0sR0FFbEMsRUFDQWdCLENBQVcsTUFBTyxrQ0FBa0NDLE1BQUtDLElBQ3ZEdEIsRUFBWXVCLFVBQVlMLEtBQUtDLFVBQVVHLEVBQUsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLXNldC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWJwYWNrLXNldC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYnBhY2stc2V0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJy4vc3R5bGVzLmNzcyc7XG5cbmRvY3VtZW50LndyaXRlKCdIZWxsbywgV2VicGFjayEnKTtcbmNvbnN0IGRhdGFFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRhdGEnKTtcbmZ1bmN0aW9uIHVzZVJlcXVlc3QgKG1ldGhvZCwgdXJsLCBib2R5ID0gbnVsbCkge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGNvbnN0IHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgIHhoci5vcGVuKG1ldGhvZCwgdXJsKTtcbiAgICB4aHIucmVzcG9uc2VUeXBlID0gJ2pzb24nO1xuICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24vanNvbicpO1xuICAgIHhoci5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICBpZiAoeGhyLnN0YXR1cyA+PSA0MDApIHtcbiAgICAgICAgcmVqZWN0KHhoci5yZXNwb25zZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXNvbHZlKHhoci5yZXNwb25zZSk7XG4gICAgICB9XG4gICAgfTtcbiAgICB4aHIub25lcnJvciA9ICgpID0+IHtcbiAgICAgIHJlamVjdCh4aHIucmVzcG9uc2UpO1xuICAgIH07XG4gICAgeGhyLnNlbmQoSlNPTi5zdHJpbmdpZnkoYm9keSkpO1xuICB9KTtcbn07XG51c2VSZXF1ZXN0KCdHRVQnLCAnaHR0cDovL2xvY2FsaG9zdDozMDAwL2NvbnRhY3RzJykudGhlbihkYXRhID0+IHtcbiAgZGF0YUVsZW1lbnQuaW5uZXJIVE1MID0gSlNPTi5zdHJpbmdpZnkoZGF0YSk7XG59KTtcbiJdLCJuYW1lcyI6WyJfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18iLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwibW9kdWxlSWQiLCJjYWNoZWRNb2R1bGUiLCJ1bmRlZmluZWQiLCJleHBvcnRzIiwibW9kdWxlIiwiX193ZWJwYWNrX21vZHVsZXNfXyIsInIiLCJTeW1ib2wiLCJ0b1N0cmluZ1RhZyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwidmFsdWUiLCJkb2N1bWVudCIsIndyaXRlIiwiZGF0YUVsZW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwibWV0aG9kIiwidXJsIiwiYm9keSIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwieGhyIiwiWE1MSHR0cFJlcXVlc3QiLCJvcGVuIiwicmVzcG9uc2VUeXBlIiwic2V0UmVxdWVzdEhlYWRlciIsIm9ubG9hZCIsInN0YXR1cyIsInJlc3BvbnNlIiwib25lcnJvciIsInNlbmQiLCJKU09OIiwic3RyaW5naWZ5IiwidXNlUmVxdWVzdCIsInRoZW4iLCJkYXRhIiwiaW5uZXJIVE1MIl0sInNvdXJjZVJvb3QiOiIifQ==