// import React, { Component } from 'react'
// class Comment extends Component {
//     render() {
//         return(
//             <div style="padding: 50px 0px">
//             <div className="container">
//               <div className="customjumbotron">
//                   <div className="row">
    
//                           <div className="col-md-3">
//                               <profile-pic size="lg" image-url="'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXgxKQ2hBgl1BFKaZlHzfhdG86GUKZ0jIajau7PgSh12MZM9hO'" 
//                               className="ng-scope ng-isolate-scope admin_pic">
//                               <span className="profile-pic ng-binding circle-lg" 
//                               ng-bind="letters" ng-className="size_className"
//                              style={{background-image: 
//                                 'url(&quot;https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXgxKQ2hBgl1BFKaZlHzfhdG86GUKZ0jIajau7PgSh12MZM9hO&quot;)'
//                                 >
//                                 </span>
//                             </po
//                           </div>
//                           <div className="col-md-9">
//                               <p className="heading-2">Admin Name</p>
//                               <p className="heading-3 font-light">Welcome, Admin!</p>
//                           </div>
//                   </div>
    
//               </div>
    
//               <div className="row" style="margin-top:30px;">
//                     <div className="col-md-12">
//                         <div className="tab-container content-bg">
//                             <div className="scrollmenu">
//                                 <a data-toggle="tab" href="#cat">Manage Categories</a>
//                                 <a data-toggle="tab" href="#mod" className="active">Manage Users</a>
//                             </div>
//                         </div>
//                         <div className="tab-content">
//                           <div id="cat" className="tab-pane fade in active">
//                               <div className="row">
//                                   <div className="col-md-9">
//                                       <p className="heading-4">Manage Categories </p>
//                                   </div>
//                                   <div className="col-md-3" style="text-align:right">
//                                       <button style="margin-top:-10px;" type="button" className="btn btn-default" data-toggle="modal" data-target="#addCategory">ADD</button>
//                                   </div>
//                               </div>
    
    
//                             <div className="list-view-card ng-scope">
//                                 <div className="card-image">
//                                     <profile-pic size="md" image-url="'https://static1.squarespace.com/static/563186f5e4b0d916cf7ec6ce/t/563ad7a8e4b09a4c529b97e5/1446696874049/'" className="ng-isolate-scope"><span className="profile-pic ng-binding circle-md" ng-bind="letters" ng-className="size_className" style="background-image: url(&quot;https://static1.squarespace.com/static/563186f5e4b0d916cf7ec6ce/t/563ad7a8e4b09a4c529b97e5/1446696874049/&quot;);"></span></profile-pic>
//                                 </div>
//                                 <div className="card-details">
//                                     <div className="card-title heading-5" style="padding-top:12px"> Category 1</div>
//                                 </div>
//                             </div>
//                             <div className="list-view-card ng-scope">
//                                 <div className="card-image">
//                                     <profile-pic size="md" image-url="'https://static1.squarespace.com/static/563186f5e4b0d916cf7ec6ce/t/563ad7a8e4b09a4c529b97e5/1446696874049/'" className="ng-isolate-scope"><span className="profile-pic ng-binding circle-md" ng-bind="letters" ng-className="size_className" style="background-image: url(&quot;https://static1.squarespace.com/static/563186f5e4b0d916cf7ec6ce/t/563ad7a8e4b09a4c529b97e5/1446696874049/&quot;);"></span></profile-pic>
//                                 </div>
//                                 <div className="card-details">
//                                     <div className="card-title heading-5" style="padding-top:12px"> Category 2</div>
//                                 </div>
//                             </div>
//                             <div className="list-view-card ng-scope">
//                                 <div className="card-image">
//                                     <profile-pic size="md" image-url="'https://static1.squarespace.com/static/563186f5e4b0d916cf7ec6ce/t/563ad7a8e4b09a4c529b97e5/1446696874049/'" className="ng-isolate-scope"><span className="profile-pic ng-binding circle-md" ng-bind="letters" ng-className="size_className" style="background-image: url(&quot;https://static1.squarespace.com/static/563186f5e4b0d916cf7ec6ce/t/563ad7a8e4b09a4c529b97e5/1446696874049/&quot;);"></span></profile-pic>
//                                 </div>
//                                 <div className="card-details">
//                                     <div className="card-title heading-5" style="padding-top:12px"> Category 3</div>
//                                 </div>
//                             </div>
//                           </div>
//                           <div id="mod" className="tab-pane fade in active">
//                               <div className="row">
//                                   <div className="col-md-9">
//                                       <p className="heading-4">Manage Users </p>
//                                   </div>
//                                   <div className="col-md-3" style="text-align:right">
//                                       <input type="text" id="searchkey" onkeyup="myFunction()" placeholder="Search..." className="form-control">
//                                   </div>
//                               </div>
//                             <div className="table-container">
//                                 <table className="table table-responsive table-hover" id="users_table" style="background-color:white">
//                                     <tr>
//                                         <th className="first-column" sortable-column>
//                                             <div className="ellipsis">#</div>
//                                             <div className="header-icons">
//                                                 <span className="icon icon-up-arrow-solid"></span>
//                                                 <span className="icon icon-down-arrow-solid"></span>
//                                             </div>
//                                         </th>
//                                         <th sortable-column>
//                                             <div className="ellipsis">Name</div>
//                                             <div className="header-icons">
//                                                 <span className="icon icon-up-arrow-solid"></span>
//                                                 <span className="icon icon-down-arrow-solid"></span>
//                                             </div>
//                                         </th>
//                                         <th className="hidden-xxs" sortable-column>
//                                             <div className="ellipsis">Email</div>
//                                             <div className="header-icons">
//                                                 <span className="icon icon-up-arrow-solid"></span>
//                                                 <span className="icon icon-down-arrow-solid"></span>
//                                             </div>
//                                         </th>
//                                         <th className="hidden-xs">
//                                             <div className="ellipsis"></div>
//                                         </th>
    
//                                     </tr>
//                                     <tr>
//                                         <td>
//                                             <span className="ellipsis">
//                                                 1
//                                             </span>
//                                         </td>
//                                         <td>
//                                             <span className="ellipsis">
//                                                 Viral Shah
//                                             </span>
//                                         </td>
//                                         <td className="hidden-xxs">
//                                             <span className="ellipsis">
//                                                 shahviral9990@gmail.com
//                                             </span>
//                                         </td>
//                                         <td className="hidden-xs">
//                                             <select className="form-control" name="status">
//                                                 <option>None</option>
//                                                 <option>Category 1</option>
//                                                 <option>Category 2</option>
//                                                 <option>Category 3</option>
//                                             </select>
//                                         </td>
    
//                                     </tr>
//                                     <tr>
//                                         <td>
//                                             <span className="ellipsis">
//                                                 2
//                                             </span>
//                                         </td>
//                                         <td>
//                                             <span className="ellipsis">
//                                                 Jayant Rana
//                                             </span>
//                                         </td>
//                                         <td className="hidden-xxs">
//                                             <span className="ellipsis">
//                                                 jayantrana69@gmail.com
//                                             </span>
//                                         </td>
//                                         <td className="hidden-xs">
//                                             <select className="form-control" name="status">
//                                                 <option>Category 1</option>
//                                                 <option>None</option>
//                                                 <option>Category 2</option>
//                                                 <option>Category 3</option>
//                                             </select>
//                                         </td>
    
//                                     </tr>
//                                 </table>
//                             </div>
//                           </div>
//                         </div>
//                     </div>
//               </div>
    
//             </div>
//         </div>
    
//         <div id="addCategory" className="" role="dialog">
//           <div className="modal-dialog">
    
//             <!-- Modal content-->
//             <div className="modal-content">
//                 <div className="modal-header">
//                     <div className="modal-title heading-3" style="padding:10px 30px;">
//                         Add New Category
//                     </div>
//                 </div>
//                 <div className="modal-body" id="modal-body">
//                     <div className="form-group has-feedback">
//                         <label>Category Name</label>
//                         <input type="text" className="form-control" aria-describedby="input" placeholder="Enter the name of your category">
//                     </div>
//                     <div className="form-group has-feedbsack">
//                         <label>Enter Category Image</label>
//                         <input type="file" className="form-control">
//                     </div>
//                 </div>
//             </div>
    
//           </div>
//         </div>
    
    
//         <script src="../lib/angular/angular.min.js"></script>
//         <script src="../lib/angular-sanitize/angular-sanitize.min.js"></script>
//         <script src="../lib/angular-bootstrap/ui-bootstrap-tpls.min.js"></script>
//         <script src="../lib/ng-file-upload/ng-file-upload-all.min.js"></script>
//         <script src="../lib/angularjs-slider/dist/rzslider.min.js"></script>
//         <script src="../lib/angular-drag-and-drop-lists/angular-drag-and-drop-lists.min.js"></script>
//         <script src="../lib/mobile-drag-drop/release/index.min.js"></script>
//         <script src="../lib/angular-ui-select/dist/select.js"></script>
//         <script src="../lib/angular-ui-router/release/angular-ui-router.min.js"></script>
//         <script src="../lib/angular-breadcrumb/release/angular-breadcrumb.min.js"></script>
//         <script src="../lib/angular-animate/angular-animate.min.js"></script>
//         <script src="../lib/d3/d3.min.js"></script>
//         <script src="../lib/nvd3/build/nv.d3.min.js"></script>
//         <script src="../lib/angular-nvd3/dist/angular-nvd3.js"></script>
//         <script src="../lib/ment.io/dist/mentio.min.js"></script>
    
//         <script>
//             /*To stop the scrolling in mobile*/
//             MobileDragDrop.polyfill({
//                 dragImageTranslateOverride: MobileDragDrop.scrollBehaviourDragImageTranslateOverride
//             });
//         </script>
//         <script src="./app.js"></script>
//         <script src="./controller/app.controller.js"></script>
//         <script src="./controller/table-data.controller.js"></script>
//         <script src="./directives/autogrow.directive.js"></script>
//         <script src="./directives/profile-pic.directive.js"></script>
//         <script src="./directives/indeterminate-checkbox.directive.js"></script>
//         <script src="./directives/infinite-loader.directive.js"></script>
//         <script src="./services/alert.service.js"></script>
//         <script src="./directives/chip.directive.js"></script>
//         <script src="./directives/tag.directive.js"></script>
//         <script src="./directives/countdown-timer.directive.js"></script>
//         <script src="./directives/button-loader.directive.js"></script>
//         <script src="./directives/allowed-pattern.directive.js"></script>
//         <script src="./directives/alert.directive.js"></script>
//         <script src="./directives/resizable.directive.js"></script>
//         <script src="./directives/image-option-preview.directive.js"></script>
//         <script src="./directives/table-sort.directive.js"></script>
//         <script src="./directives/attachment.directive.js"></script>
//         <script src="./directives/dynamic-popup.directive.js"></script>
//         <script src="./directives/loader.directive.js"></script>
//         <script src="./configs/ui-select.tpl.js"></script>
//         <script src="./directives/password.directive.js"></script>
//         <script src="./directives/custom-table.directive.js"></script>
//         <script src="./services/password-strength.service.js"></script>
//         <script src="./services/custom-table.service.js"></script>
//         <script src="./controller/app.controller.js"></script>
//         <script src="./controller/infinite-loader.controller.js"></script>
//         <script src="./controller/ui-select.controller.js"></script>
//         <script src="./example/breadcrumbs.js"></script>
    
    
//         <script>
//         function myFunction() {
//           // Declare variables
//           var input, filter, table, tr, td, i;
//           input = document.getElementById("searchkey");
//           filter = input.value.toUpperCase();
//           table = document.getElementById("users_table");
//           tr = table.getElementsByTagName("tr");
    
//           // Loop through all table rows, and hide those who don't match the search query
//           for (i = 0; i < tr.length; i++) {
//             td = tr[i].getElementsByTagName("td")[1];
//             if (td) {
//               if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
//                 tr[i].style.display = "";
//               } else {
//                 tr[i].style.display = "none";
//               }
//             }
//           }
//         }
//         </script>

//         )
//     }
// }