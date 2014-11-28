!function(a){"use strict";"function"==typeof define&&define.amd?define(["jquery","angular","./jquery.fileupload-image","./jquery.fileupload-audio","./jquery.fileupload-video","./jquery.fileupload-validate"],a):a()}(function(){"use strict";angular.module("blueimp.fileupload",[]).provider("fileUpload",function(){var a,b=function(a){var b=angular.element(this).fileupload("option","scope");b.$evalAsync(a)},c=function(a,b){var c=b.files,d=c[0];angular.forEach(c,function(a,c){a._index=c,a.$state=function(){return b.state()},a.$processing=function(){return b.processing()},a.$progress=function(){return b.progress()},a.$response=function(){return b.response()}}),d.$submit=function(){return d.error?void 0:b.submit()},d.$cancel=function(){return b.abort()}};a=this.defaults={handleResponse:function(a,b){var c=b.result&&b.result.files;c?b.scope.replace(b.files,c):(b.errorThrown||"error"===b.textStatus)&&(b.files[0].error=b.errorThrown||b.textStatus)},add:function(a,b){if(a.isDefaultPrevented())return!1;var d=b.scope,e=[];angular.forEach(b.files,function(a){e.push(a)}),d.$apply(function(){c(d,b);var a=d.option("prependFiles")?"unshift":"push";Array.prototype[a].apply(d.queue,b.files)}),b.process(function(){return d.process(b)}).always(function(){d.$apply(function(){c(d,b),d.replace(e,b.files)})}).then(function(){(d.option("autoUpload")||b.autoUpload)&&b.autoUpload!==!1&&b.submit()})},progress:function(a,b){return a.isDefaultPrevented()?!1:void b.scope.$apply()},done:function(a,b){if(a.isDefaultPrevented())return!1;var c=this;b.scope.$apply(function(){b.handleResponse.call(c,a,b)})},fail:function(a,b){if(a.isDefaultPrevented())return!1;var c=this,d=b.scope;return"abort"===b.errorThrown?void d.clear(b.files):void d.$apply(function(){b.handleResponse.call(c,a,b)})},stop:b,processstart:b,processstop:b,getNumberOfFiles:function(){var a=this.scope;return a.queue.length-a.processing()},dataType:"json",autoUpload:!1},this.$get=[function(){return{defaults:a}}]}).provider("formatFileSizeFilter",function(){var a={units:[{size:1e9,suffix:" GB"},{size:1e6,suffix:" MB"},{size:1e3,suffix:" KB"}]};this.defaults=a,this.$get=function(){return function(b){if(!angular.isNumber(b))return"";for(var c,d,e=!0,f=0;e;){if(e=a.units[f],c=e.prefix||"",d=e.suffix||"",f===a.units.length-1||b>=e.size)return c+(b/e.size).toFixed(2)+d;f+=1}}}}).controller("FileUploadController",["$scope","$element","$attrs","$window","fileUpload",function(a,b,c,d,e){var f={progress:function(){return b.fileupload("progress")},active:function(){return b.fileupload("active")},option:function(a,c){return 1===arguments.length?b.fileupload("option",a):void b.fileupload("option",a,c)},add:function(a){return b.fileupload("add",a)},send:function(a){return b.fileupload("send",a)},process:function(a){return b.fileupload("process",a)},processing:function(a){return b.fileupload("processing",a)}};a.disabled=!d.jQuery.support.fileInput,a.queue=a.queue||[],a.clear=function(a){var b=this.queue,c=b.length,d=a,e=1;for(angular.isArray(a)&&(d=a[0],e=a.length);c;)if(c-=1,b[c]===d)return b.splice(c,e)},a.replace=function(a,b){var c,d,e=this.queue,f=a[0];for(c=0;c<e.length;c+=1)if(e[c]===f){for(d=0;d<b.length;d+=1)e[c+d]=b[d];return}},a.applyOnQueue=function(a){var b,c,d=this.queue.slice(0);for(b=0;b<d.length;b+=1)c=d[b],c[a]&&c[a]()},a.submit=function(){this.applyOnQueue("$submit")},a.cancel=function(){this.applyOnQueue("$cancel")},angular.extend(a,f),b.fileupload(angular.extend({scope:a},e.defaults)).on("fileuploadadd",function(b,c){c.scope=a}).on("fileuploadfail",function(a,b){if("abort"!==b.errorThrown&&b.dataType&&b.dataType.indexOf("json")===b.dataType.length-4)try{b.result=angular.fromJson(b.jqXHR.responseText)}catch(c){}}).on(["fileuploadadd","fileuploadsubmit","fileuploadsend","fileuploaddone","fileuploadfail","fileuploadalways","fileuploadprogress","fileuploadprogressall","fileuploadstart","fileuploadstop","fileuploadchange","fileuploadpaste","fileuploaddrop","fileuploaddragover","fileuploadchunksend","fileuploadchunkdone","fileuploadchunkfail","fileuploadchunkalways","fileuploadprocessstart","fileuploadprocess","fileuploadprocessdone","fileuploadprocessfail","fileuploadprocessalways","fileuploadprocessstop"].join(" "),function(b,c){a.$emit(b.type,c).defaultPrevented&&b.preventDefault()}).on("remove",function(){var b;for(b in f)f.hasOwnProperty(b)&&delete a[b]}),a.$watch(c.fileUpload,function(a){a&&b.fileupload("option",a)})}]).controller("FileUploadProgressController",["$scope","$attrs","$parse",function(a,b,c){var d=c(b.fileUploadProgress),e=function(){var b=d(a);b&&b.total&&(a.num=Math.floor(b.loaded/b.total*100))};e(),a.$watch(b.fileUploadProgress+".loaded",function(a,b){a!==b&&e()})}]).controller("FileUploadPreviewController",["$scope","$element","$attrs",function(a,b,c){a.$watch(c.fileUploadPreview+".preview",function(a){b.empty(),a&&b.append(a)})}]).directive("fileUpload",function(){return{controller:"FileUploadController",scope:!0}}).directive("fileUploadProgress",function(){return{controller:"FileUploadProgressController",scope:!0}}).directive("fileUploadPreview",function(){return{controller:"FileUploadPreviewController"}}).directive("download",function(){return function(a,b){b.on("dragstart",function(a){try{a.originalEvent.dataTransfer.setData("DownloadURL",["application/octet-stream",b.prop("download"),b.prop("href")].join(":"))}catch(c){}})}})});