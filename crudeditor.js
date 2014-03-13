module.exports = '\n  <div class="settings" ng-cloak >\n\n\n    \n    <div class="row">\n    \n\n\n      <div class="col-sm-3" style="font-size:1.1em;">\n        \n        <div id="treeholder" class="hidden-print affix-top">\n          <digger-tree title="treetitle" filter="folder" iconfn="iconfn" container="resources_root" depth="10" />\n        </div>\n\n      </div>\n\n\n      <div class="col-sm-9" style="margin-top:10px;">\n\n        <div class="row" ng-hide="editing">\n          <div class="col-sm-6">\n\n\n                <input type="text" name="search" class="form-control col-sm-4" id="searchField" ng-model="itemsearch" placeholder="filter">\n              \n              \n              \n            </form>\n          </div>\n\n        </div>\n\n        <div class="row">\n          <form novalidate name="containerform">\n\n            <simple-editor>\n              \n                <digger-form fields="blueprint.fields" container="edit_container" fieldclass="input-xlarge" />\n              \n            </simple-editor>        \n\n\n          </form>\n\n        </div>\n\n        <div class="row" ng-show="(!editing && folders.length>0)" style="margin-top:20px;">\n          \n\n          <simple-table \n            selected="edit_container" \n            rows="folders" \n            title="Folders" \n            selectrow="editrow(container)" \n            deleterow="deleterow(container)" />\n\n        </div>\n\n        <div class="row" ng-show="(!editing && items.length>0)" style="margin-top:20px;">\n        \n          <!--\n            LIST OF FOLDERS\n           -->\n          <simple-table \n            showsummary="yes" \n            selected="edit_container" \n            rows="items" \n            search="itemsearch" \n            selectrow="editrow(container)" \n            deleterow="deleterow(container)">            \n          </simple-table>\n\n        </div>\n\n\n      </div>\n\n\n\n    </div>\n  </div>\n';