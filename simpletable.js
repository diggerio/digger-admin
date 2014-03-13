module.exports = '<div>\n\n  \n        <table class="table table-hover">\n          <tbody>\n            <tr \n              class="hand" \n              ng-repeat="row in rows | searchContainers:search" \n              ng-class="{success:selected.diggerid()==row.diggerid()}" \n              ng-click="selectrow({container:row})">\n\n              <td>\n                <a id="{{ row.diggerid() }}"></a>\n                <div class="row">\n                  <div ng-class="{\'col-sm-5\':showsummary, \'col-sm-12\':!showsummary}">\n                    <h5>{{ row.title() }}</h5>\n                  </div>\n                  <div ng-if="showsummary" class="col-sm-7" style="margin-top:10px;">\n                    <resource-summary container="row" settings="summary_settings" />\n                  </div>\n                </div>\n                \n              </td>\n\n              <td width=1>\n                \n                <table><tr><td style="border-color:none;border-top:none;">\n                <button class="btn btn-mini pull-right" ng-class="{\'btn-success\':row.is(\'folder\'),\'btn-info\':!row.is(\'folder\')}" style="margin-right:10px;">\n                    <i title="Edit" ng-class="{\'fa-folder-open\':row.is(\'folder\'),\'fa-edit\':!row.is(\'folder\')}" class="icon-white fa"></i>\n                </button>\n                </td><td style="border-color:none;border-top:none;">\n                <button class="btn  btn-mini pull-right" style="margin-right:10px;" ng-click="deleterow({container:row}); $event.stopPropagation()">\n                    <i title="Delete" class="fa fa-trash-o icon-white"></i>  \n                </button>\n                </td></tr></table>\n           \n              </td>                                       \n            </tr>\n          </tbody>\n        </table>\n\n        \n        <!--<pagination rows="rows" num-pages="noOfPages" current-page="currentPage" class="pagination-small"></pagination>-->\n\n \n</div>';