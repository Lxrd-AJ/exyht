Ember.TEMPLATES["_editor"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var stack1, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\r\n");
  stack1 = helpers['if'].call(depth0, "commentFeature", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("  \r\n");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\r\n  ");
  stack1 = helpers['if'].call(depth0, "isCommentDivShown", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n\r\n\r\n  ");
  stack1 = helpers['if'].call(depth0, "isHideAddComment", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(15, program15, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n");
  return buffer;
  }
function program3(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\r\n  <div class=\"addCommentDiv\">\r\n\r\n   <div id=\"showError\"></div>\r\n\r\n   <h4><span class=\"pull-right\">\r\n\r\n   <button type=\"button\" class=\"btn btn-danger btn-xs\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "cancelAddComment", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">Cancel</button>\r\n   <button type=\"button\" class=\"btn btn-primary btn-xs\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "hideAddComment", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">Hide <i class=\"fa fa-chevron-up\"></i></button>\r\n   </span>\r\n   &nbsp; \r\n\r\n   ");
  stack1 = helpers['if'].call(depth0, "isReplying", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(6, program6, data),fn:self.program(4, program4, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n     \r\n   </h4>\r\n   <div class=\"container-fluid\">\r\n      <div class=\"row\">\r\n\r\n        <div class=\"col-lg-6\">\r\n        \r\n        <div class=\"btn-group btn-group-sm\">\r\n          <button type=\"button\" class=\"btn btn-default\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "insertBold", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push("><i class=\"fa fa-bold\"></i></button>\r\n          <button type=\"button\" class=\"btn btn-default\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "insertItalic", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push("><i class=\"fa fa-italic\"></i></button>\r\n          <button type=\"button\" class=\"btn btn-default\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "insertLink", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push("><i class=\"fa fa-link\"></i></button>\r\n          <button type=\"button\" class=\"btn btn-default\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "insertQuote", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push("><i class=\"fa fa-comment-o\"></i></button>\r\n          <button type=\"button\" class=\"btn btn-default\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "insertCode", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push("><i class=\"fa fa-code\"></i></button>\r\n          <button type=\"button\" class=\"btn btn-default\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "insertOrderedlist", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push("><i class=\"fa fa-list-ol\"></i></button>\r\n          <button type=\"button\" class=\"btn btn-default\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "insertUnorderedlist", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push("><i class=\"fa fa-list\"></i></button>\r\n    \r\n          <button type=\"button\" class=\"btn btn-default\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "insertHorizontalrule", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push("><i class=\"fa fa-minus\"></i></button>\r\n          <button type=\"button\" class=\"btn btn-default\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "insertStrikethrough", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push("><i class=\"fa fa-strikethrough\"></i></button>\r\n          <button type=\"button\" class=\"btn btn-default\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "insertSubscript", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push("><i class=\"fa fa-subscript\"></i></button>\r\n          <button type=\"button\" class=\"btn btn-default\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "insertSuperscript", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push("><i class=\"fa fa-superscript\"></i></button>\r\n\r\n          <div class=\"btn-group btn-group-sm\">\r\n            <button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\">\r\n              <i class=\"fa fa-header\"></i>\r\n              <span class=\"caret\"></span>\r\n            </button>\r\n            <ul class=\"dropdown-menu\" role=\"menu\">\r\n              <li role=\"presentation\"><a href=\"\"");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "insertHeading1", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">H1</a></li>\r\n              <li role=\"presentation\"><a href=\"\"");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "insertHeading2", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">H2</a></li>\r\n              <li role=\"presentation\"><a href=\"\"");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "insertHeading3", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">H3</a></li>\r\n            </ul>\r\n          </div>\r\n        </div>\r\n          ");
  data.buffer.push(escapeExpression((helper = helpers['auto-expanding-text-area'] || (depth0 && depth0['auto-expanding-text-area']),options={hash:{
    'class': ("form-control"),
    'maxlength': ("2000"),
    'row': ("7"),
    'value': ("typeComment")
  },hashTypes:{'class': "STRING",'maxlength': "STRING",'row': "STRING",'value': "ID"},hashContexts:{'class': depth0,'maxlength': depth0,'row': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "auto-expanding-text-area", options))));
  data.buffer.push("\r\n   \r\n          ");
  stack1 = helpers['if'].call(depth0, "showNewCommentLength", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(9, program9, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n          <div class=\"row\" style=\"margin-top:2px;\" >\r\n            <div class=\"col-xs-4\">\r\n              <label class=\"sr-only\" for=\"name\">Name:</label>\r\n                ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'class': ("form-control input-sm"),
    'type': ("text"),
    'id': ("name"),
    'value': ("name"),
    'placeholder': ("Name")
  },hashTypes:{'class': "STRING",'type': "STRING",'id': "STRING",'value': "ID",'placeholder': "STRING"},hashContexts:{'class': depth0,'type': depth0,'id': depth0,'value': depth0,'placeholder': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\r\n            </div>\r\n            <div class=\"col-xs-4\">\r\n              <label class=\"sr-only\" for=\"email\">Email:</label>\r\n                ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'class': ("form-control input-sm"),
    'type': ("email"),
    'id': ("email"),
    'value': ("email"),
    'placeholder': ("Email")
  },hashTypes:{'class': "STRING",'type': "STRING",'id': "STRING",'value': "ID",'placeholder': "STRING"},hashContexts:{'class': depth0,'type': depth0,'id': depth0,'value': depth0,'placeholder': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\r\n            </div>\r\n            <div class=\"col-xs-2\">\r\n                ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("hidden"),
    'value': ("actualPostIdForAddComment")
  },hashTypes:{'type': "STRING",'value': "ID"},hashContexts:{'type': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\r\n                ");
  stack1 = helpers['if'].call(depth0, "sendingCommentOn", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(13, program13, data),fn:self.program(11, program11, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n            </div>\r\n          </div>\r\n    \r\n      </div>\r\n        <div class=\"col-lg-6\" id=\"typingCommentDiv\" style=\"border:1px dashed #000;background-color:#ffffff;padding:1%;height:115px;overflow:auto;\">\r\n          ");
  data.buffer.push(escapeExpression((helper = helpers['format-markdown'] || (depth0 && depth0['format-markdown']),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "typeComment", options) : helperMissing.call(depth0, "format-markdown", "typeComment", options))));
  data.buffer.push("\r\n        </div>\r\n     </div>\r\n    </div>\r\n   </div>\r\n  ");
  return buffer;
  }
function program4(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\r\n    <small>Replying to&nbsp;\r\n      comment \r\n      by <img ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'src': ("view.ngravatarUrl")
  },hashTypes:{'src': "ID"},hashContexts:{'src': depth0},contexts:[],types:[],data:data})));
  data.buffer.push("/>\r\n       <strong>");
  stack1 = helpers._triageMustache.call(depth0, "currentCommenterNameToReply", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(":</strong>\r\n    </small>\r\n   ");
  return buffer;
  }

function program6(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\r\n    <small>Commenting to&nbsp;\r\n      ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0,depth0,depth0],types:["STRING","ID","ID"],data:data},helper ? helper.call(depth0, "post", "actualOnlyCurrentSlug", "actualPostIdForAddComment", options) : helperMissing.call(depth0, "link-to", "post", "actualOnlyCurrentSlug", "actualPostIdForAddComment", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n    </small>\r\n   ");
  return buffer;
  }
function program7(depth0,data) {
  
  
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "actualTitleForAddComment", {hash:{
    'unescaped': ("true")
  },hashTypes:{'unescaped': "STRING"},hashContexts:{'unescaped': depth0},contexts:[depth0],types:["ID"],data:data})));
  }

function program9(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\r\n            <div style=\"text-align:center;padding:0.5%;\">");
  stack1 = helpers._triageMustache.call(depth0, "newCommentLength", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" to go for the post</div>\r\n          ");
  return buffer;
  }

function program11(depth0,data) {
  
  
  data.buffer.push("\r\n                  <button class=\"btn btn-primary btn-sm\">Submitting...</button>\r\n                ");
  }

function program13(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\r\n                  <button type=\"button\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "addComment", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" class=\"btn btn-success btn-sm\">Submit</button>\r\n                  ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'name': ("spam_bot"),
    'class': ("hidden"),
    'value': ("Leave it, if U're human")
  },hashTypes:{'type': "STRING",'name': "STRING",'class': "STRING",'value': "STRING"},hashContexts:{'type': depth0,'name': depth0,'class': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\r\n                ");
  return buffer;
  }

function program15(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\r\n  <div class=\"addCommentDiv\" style=\"padding:1%;cursor:pointer;text-align:center;\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "showAddComment", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">\r\n   Show <i class=\"fa fa-chevron-down\"></i>\r\n  </div>\r\n  ");
  return buffer;
  }

  stack1 = helpers.unless.call(depth0, "readOnlyMode", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  else { data.buffer.push(''); }
  
});

Ember.TEMPLATES["_footer"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  
  data.buffer.push("\r\n    <p>\r\n        <a href=\"#topNavbar\"><i class=\"fa fa-arrow-up\"></i> Back to top</a>\r\n    </p>\r\n");
  }

  data.buffer.push("<div class=\"blog-footer\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'style': ("footerBgColor")
  },hashTypes:{'style': "STRING"},hashContexts:{'style': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\r\n        \r\n");
  stack1 = helpers['if'].call(depth0, "hasNavbar", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n    <p>Copyright &copy; ");
  stack1 = helpers._triageMustache.call(depth0, "currentYear", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" - All rights reserved</p>\r\n    <p class=\"small\">Exyht</p>\r\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["_navbar"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var stack1, self=this, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\r\n\r\n<div class=\"blog-masthead\" id=\"topNavbar\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'style': ("navBgColor")
  },hashTypes:{'style': "STRING"},hashContexts:{'style': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\r\n    <div class=\"container\">\r\n        <nav class=\"blog-nav\">\r\n          ");
  stack1 = helpers.each.call(depth0, "blogLinks", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n        </nav>\r\n    </div>\r\n</div>\r\n");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\r\n           ");
  stack1 = helpers['if'].call(depth0, "navUrl", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n          ");
  return buffer;
  }
function program3(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\r\n            ");
  stack1 = helpers['if'].call(depth0, "isBlogUrl", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(7, program7, data),fn:self.program(4, program4, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n           ");
  return buffer;
  }
function program4(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\r\n              ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'class': ("blog-nav-item active")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "index", options) : helperMissing.call(depth0, "link-to", "index", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n            ");
  return buffer;
  }
function program5(depth0,data) {
  
  var stack1;
  stack1 = helpers._triageMustache.call(depth0, "link_name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  else { data.buffer.push(''); }
  }

function program7(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\r\n              <a class=\"blog-nav-item\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'href': ("url")
  },hashTypes:{'href': "ID"},hashContexts:{'href': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">");
  stack1 = helpers._triageMustache.call(depth0, "link_name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</a>\r\n            ");
  return buffer;
  }

  stack1 = helpers['if'].call(depth0, "hasNavbar", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  else { data.buffer.push(''); }
  
});

Ember.TEMPLATES["_sidebar"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\r\n  <div class=\"row\">\r\n    <div class=\"sidebar-module col-xs-6\">\r\n      ");
  stack1 = helpers.unless.call(depth0, "image", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(4, program4, data),fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n  <div class=\"sidebar-module-inset col-xs-10\">\r\n    <h4>About</h4>\r\n      ");
  data.buffer.push(escapeExpression((helper = helpers['format-markdown'] || (depth0 && depth0['format-markdown']),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "about", options) : helperMissing.call(depth0, "format-markdown", "about", options))));
  data.buffer.push("\r\n  </div>\r\n  </div>\r\n");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\r\n        <img ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'src': ("hashedEmail")
  },hashTypes:{'src': "ID"},hashContexts:{'src': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" alt='person image'/>\r\n      ");
  return buffer;
  }

function program4(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\r\n        <img ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'src': ("image")
  },hashTypes:{'src': "ID"},hashContexts:{'src': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" alt='person image' height=\"170px\" width=\"170px\"/>\r\n      ");
  return buffer;
  }

function program6(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\r\n        <li ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'title': ("title")
  },hashTypes:{'title': "ID"},hashContexts:{'title': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "post", "", options) : helperMissing.call(depth0, "link-to", "post", "", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</li>\r\n      ");
  return buffer;
  }
function program7(depth0,data) {
  
  var helper, options;
  data.buffer.push(escapeExpression((helper = helpers['format-archive-date'] || (depth0 && depth0['format-archive-date']),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "created", options) : helperMissing.call(depth0, "format-archive-date", "created", options))));
  }

function program9(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\r\n        ");
  stack1 = helpers['if'].call(depth0, "elseUrl", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(10, program10, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n      ");
  return buffer;
  }
function program10(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\r\n          <li><a ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'href': ("url")
  },hashTypes:{'href': "ID"},hashContexts:{'href': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">");
  stack1 = helpers._triageMustache.call(depth0, "link_name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</a></li>\r\n        ");
  return buffer;
  }

  data.buffer.push("\r\n  <div class=\"col-sm-3 col-sm-offset-1 blog-sidebar\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'style': ("sidebarBgColor")
  },hashTypes:{'style': "STRING"},hashContexts:{'style': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\r\n");
  stack1 = helpers['with'].call(depth0, "sidebarAuthor", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n  <div class=\"row\">\r\n  <div class=\"sidebar-module col-xs-6\">\r\n    <h4>Archives</h4>\r\n    <ol class=\"list-unstyled\">\r\n      ");
  stack1 = helpers.each.call(depth0, "sidebarArchive", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(6, program6, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n    </ol>\r\n  </div>\r\n  </div>\r\n  <div class=\"row\">\r\n  <div class=\"sidebar-module col-xs-6\">\r\n    <h4>Elsewhere</h4>\r\n      <ol class=\"list-unstyled\">\r\n      ");
  stack1 = helpers.each.call(depth0, "blogLinks", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(9, program9, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n      </ol>\r\n  </div>\r\n</div>\r\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["application"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  
  data.buffer.push("\r\n         <div class=\"alert alert-warning\" role=\"alert\">\r\n          The Entire Blog is now in <strong>Read Only Mode</strong>\r\n         </div>\r\n        ");
  }

function program3(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\r\n          <img ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'src': ("blogLogo")
  },hashTypes:{'src': "ID"},hashContexts:{'src': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" height=\"70px\" width=\"70px\" max-width=\"300px\"/>\r\n        ");
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\r\n            ");
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "blogTitle", {hash:{
    'unescaped': ("true")
  },hashTypes:{'unescaped': "STRING"},hashContexts:{'unescaped': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\r\n          ");
  return buffer;
  }

  data.buffer.push("  <div class=\"container-full\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'style': ("bodyBgColor")
  },hashTypes:{'style': "STRING"},hashContexts:{'style': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\r\n  ");
  data.buffer.push(escapeExpression((helper = helpers.partial || (depth0 && depth0.partial),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "navbar", options) : helperMissing.call(depth0, "partial", "navbar", options))));
  data.buffer.push("\r\n    <div class=\"container\">\r\n      <div class=\"blog-header\">\r\n        ");
  stack1 = helpers['if'].call(depth0, "readOnlyMode", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n\r\n        <div class=\"media blog-title\">\r\n\r\n      <div class=\"pull-left\">\r\n        ");
  stack1 = helpers['if'].call(depth0, "hasLogo", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n      </div>\r\n      \r\n      <div class=\"media-body\">\r\n      \r\n        <h1 class=\"media-heading\">\r\n          ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "index", options) : helperMissing.call(depth0, "link-to", "index", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n        </h1>\r\n        <p class=\"lead blog-description\">\r\n          ");
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "blogSubTitle", {hash:{
    'unescaped': ("true")
  },hashTypes:{'unescaped': "STRING"},hashContexts:{'unescaped': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\r\n        </p>\r\n        ");
  data.buffer.push(escapeExpression((helper = helpers['format-markdown'] || (depth0 && depth0['format-markdown']),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "comment", options) : helperMissing.call(depth0, "format-markdown", "comment", options))));
  data.buffer.push("\r\n      </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        \r\n        ");
  stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n        ");
  data.buffer.push(escapeExpression((helper = helpers.partial || (depth0 && depth0.partial),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "sidebar", options) : helperMissing.call(depth0, "partial", "sidebar", options))));
  data.buffer.push("  \r\n      </div><!-- /.row -->\r\n    </div><!-- /.container -->\r\n\r\n    \r\n  </div> <!-- /container full -->\r\n  ");
  data.buffer.push(escapeExpression((helper = helpers.partial || (depth0 && depth0.partial),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "footer", options) : helperMissing.call(depth0, "partial", "footer", options))));
  data.buffer.push("\r\n  ");
  data.buffer.push(escapeExpression((helper = helpers.partial || (depth0 && depth0.partial),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "editor", options) : helperMissing.call(depth0, "partial", "editor", options))));
  data.buffer.push("\r\n");
  return buffer;
  
});

Ember.TEMPLATES["comments"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var stack1, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\r\n  <div class=\"media\">\r\n\r\n        <div class=\"pull-left\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'title': ("name")
  },hashTypes:{'title': "ID"},hashContexts:{'title': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\r\n          <img class=\"media-object\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'src': ("view.cgravatarUrl")
  },hashTypes:{'src': "ID"},hashContexts:{'src': depth0},contexts:[],types:[],data:data})));
  data.buffer.push("/>\r\n        </div>\r\n\r\n        <div class=\"media-body\">\r\n\r\n         <h5 class=\"media-heading\">\r\n             <strong>");
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "name", {hash:{
    'unescaped': ("true")
  },hashTypes:{'unescaped': "STRING"},hashContexts:{'unescaped': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("</strong>\r\n             <div class=\"pull-right\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'title': ("cdate")
  },hashTypes:{'title': "ID"},hashContexts:{'title': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">");
  data.buffer.push(escapeExpression((helper = helpers['format-date'] || (depth0 && depth0['format-date']),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "cdate", options) : helperMissing.call(depth0, "format-date", "cdate", options))));
  data.buffer.push("</div>\r\n             ");
  stack1 = helpers['if'].call(depth0, "replyToComment.commentHasReply", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n         </h5>\r\n          ");
  data.buffer.push(escapeExpression((helper = helpers['format-markdown'] || (depth0 && depth0['format-markdown']),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "comment", options) : helperMissing.call(depth0, "format-markdown", "comment", options))));
  data.buffer.push("\r\n        </div>\r\n        ");
  stack1 = helpers['if'].call(depth0, "readOnlyMode", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(6, program6, data),fn:self.program(4, program4, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n  </div>\r\n     \r\n  <hr />\r\n");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\r\n               <div class=\"pull-right small\" style=\"padding-right:1%;\">\r\n                 <i class=\"fa fa-share\"></i>&nbsp;\r\n                  <img ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'src': ("view.rgravatarUrl")
  },hashTypes:{'src': "ID"},hashContexts:{'src': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">&nbsp;\r\n                  ");
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "replyToComment.name", {hash:{
    'unescaped': ("true")
  },hashTypes:{'unescaped': "STRING"},hashContexts:{'unescaped': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\r\n               </div>\r\n             ");
  return buffer;
  }

function program4(depth0,data) {
  
  
  data.buffer.push("\r\n        <div>\r\n          <button class=\"btn btn-default\" type=\"button\" disabled=\"disabled\"><i class=\"fa fa-flag-o\"></i></button>\r\n          <button class=\"btn btn-info\" title=\"Reply to comment\" type=\"button\" disabled=\"disabled\"><i class=\"fa fa-reply\"></i> Reply</button>\r\n        </div>\r\n        ");
  }

function program6(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\r\n        <div>\r\n          ");
  stack1 = helpers['if'].call(depth0, "isFlagged", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(9, program9, data),fn:self.program(7, program7, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n          <button class=\"btn btn-info\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "replyToCommentTrue", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" title=\"Reply to comment\"><i class=\"fa fa-reply\"></i> Reply</button>\r\n        </div>\r\n        ");
  return buffer;
  }
function program7(depth0,data) {
  
  
  data.buffer.push("\r\n            <button class=\"btn btn-danger\" title=\"This comment's been flagged\" disabled=\"disabled\"><i class=\"fa fa-flag-o\"></i></button>\r\n          ");
  }

function program9(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\r\n            <button class=\"btn btn-default\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "flagComment", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" title=\"Flag this comment\"><i class=\"fa fa-flag-o\"></i></button>\r\n          ");
  return buffer;
  }

  stack1 = helpers['if'].call(depth0, "commentFeature", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  else { data.buffer.push(''); }
  
});

Ember.TEMPLATES["error"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<div class=\"col-sm-8 blog-main\">\r\n	<div class=\"alert alert-warning\" role=\"alert\" style=\"text-align:center;padding:2%;\">Error!</div>\r\n</div>");
  
});

Ember.TEMPLATES["index"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\r\n	");
  stack1 = helpers.unless.call(depth0, "no_post", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(5, program5, data),fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n    <div>");
  data.buffer.push(escapeExpression((helper = helpers['format-markdown'] || (depth0 && depth0['format-markdown']),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "body", options) : helperMissing.call(depth0, "format-markdown", "body", options))));
  data.buffer.push("\r\n    <span>\r\n    	");
  stack1 = helpers.unless.call(depth0, "no_post", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n    </span>\r\n    </div>\r\n    <hr />\r\n");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\r\n    	<h1>");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "post", "", options) : helperMissing.call(depth0, "link-to", "post", "", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h1>\r\n    ");
  return buffer;
  }
function program3(depth0,data) {
  
  
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "title", {hash:{
    'unescaped': ("true")
  },hashTypes:{'unescaped': "STRING"},hashContexts:{'unescaped': depth0},contexts:[depth0],types:["ID"],data:data})));
  }

function program5(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\r\n    	<h1>");
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "title", {hash:{
    'unescaped': ("true")
  },hashTypes:{'unescaped': "STRING"},hashContexts:{'unescaped': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("</h1>\r\n    ");
  return buffer;
  }

function program7(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\r\n      		<span class=\"pull-right\"><i class=\"fa fa-clock-o\"></i> ");
  data.buffer.push(escapeExpression((helper = helpers['format-archive-date'] || (depth0 && depth0['format-archive-date']),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "created", options) : helperMissing.call(depth0, "format-archive-date", "created", options))));
  data.buffer.push("</span>\r\n      		");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(8, program8, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "post", "", options) : helperMissing.call(depth0, "link-to", "post", "", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n      	");
  return buffer;
  }
function program8(depth0,data) {
  
  
  data.buffer.push("Continue reading...");
  }

  data.buffer.push("\r\n<div class=\"col-sm-8 blog-main\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'style': ("postBgColor")
  },hashTypes:{'style': "STRING"},hashContexts:{'style': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\r\n\r\n<div class=\"blog-post\">\r\n");
  stack1 = helpers.each.call(depth0, "posts", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n</div><!-- /.blog-post -->\r\n\r\n</div><!-- /.blog-main -->");
  return buffer;
  
});

Ember.TEMPLATES["loading"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<div class=\"col-sm-8 blog-main\">\r\n	<div class=\"alert alert-warning loadingError\" role=\"alert\" style=\"text-align:center;padding:2%;\">Loading...</div>\r\n</div>");
  
});

Ember.TEMPLATES["post"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, self=this, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\r\n        	<div class=\"pull-left\">");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0,depth0,depth0],types:["STRING","ID","ID"],data:data},helper ? helper.call(depth0, "post", "prevTitleSlug", "previousId", options) : helperMissing.call(depth0, "link-to", "post", "prevTitleSlug", "previousId", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</div>\r\n	  	");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("<i class=\"fa fa-arrow-left\"></i> ");
  stack1 = helpers._triageMustache.call(depth0, "prevTitle", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  return buffer;
  }

function program4(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\r\n	    	<div class=\"pull-right\">");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0,depth0,depth0],types:["STRING","ID","ID"],data:data},helper ? helper.call(depth0, "post", "nextTitleSlug", "nextId", options) : helperMissing.call(depth0, "link-to", "post", "nextTitleSlug", "nextId", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</div>\r\n	  	");
  return buffer;
  }
function program5(depth0,data) {
  
  var buffer = '', stack1;
  stack1 = helpers._triageMustache.call(depth0, "nextTitle", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" <i class=\"fa fa-arrow-right\"></i>");
  return buffer;
  }

function program7(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\r\n      		<div class=\"breadcrumb\">\r\n	  		");
  stack1 = helpers['if'].call(depth0, "commentsLength", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(8, program8, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n        	");
  stack1 = helpers._triageMustache.call(depth0, "view.pageViewCount", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n      		</div>\r\n	  		<hr />\r\n\r\n	  		");
  stack1 = helpers.each.call(depth0, "item", "in", "comments", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(10, program10, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n\r\n	  		");
  stack1 = helpers['if'].call(depth0, "readOnlyMode", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(14, program14, data),fn:self.program(12, program12, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n		");
  return buffer;
  }
function program8(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\r\n        		");
  stack1 = helpers._triageMustache.call(depth0, "model.comments.length", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" ");
  data.buffer.push(escapeExpression((helper = helpers['format-comment-number'] || (depth0 && depth0['format-comment-number']),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "model.comments.length", options) : helperMissing.call(depth0, "format-comment-number", "model.comments.length", options))));
  data.buffer.push(" &nbsp;&nbsp;\r\n      		");
  return buffer;
  }

function program10(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\r\n	    		");
  data.buffer.push(escapeExpression((helper = helpers.render || (depth0 && depth0.render),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "comments", "item", options) : helperMissing.call(depth0, "render", "comments", "item", options))));
  data.buffer.push("\r\n	  		");
  return buffer;
  }

function program12(depth0,data) {
  
  
  data.buffer.push("\r\n	    		<button class=\"btn btn-info pull-right\" type=\"button\" disabled=\"disabled\"><i class=\"fa fa-plus-circle\"></i> Add comment</button>\r\n	  		");
  }

function program14(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\r\n	    		");
  stack1 = helpers['if'].call(depth0, "hasPost", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(15, program15, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n	  		");
  return buffer;
  }
function program15(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\r\n	      			<button class=\"btn btn-info pull-right\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "addCommentTrue", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push("><i class=\"fa fa-plus-circle\"></i> Add comment</button>\r\n	    		");
  return buffer;
  }

  data.buffer.push("\r\n	<div class=\"col-sm-8 blog-main\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'style': ("postBgColor")
  },hashTypes:{'style': "STRING"},hashContexts:{'style': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\r\n    <div class=\"blog-post\">\r\n    <h1>");
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "title", {hash:{
    'unescaped': ("true")
  },hashTypes:{'unescaped': "STRING"},hashContexts:{'unescaped': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("</h1>\r\n     ");
  stack1 = helpers._triageMustache.call(depth0, "view.postCreated", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n	<hr />\r\n\r\n	<div>");
  data.buffer.push(escapeExpression((helper = helpers['format-markdown'] || (depth0 && depth0['format-markdown']),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "post", options) : helperMissing.call(depth0, "format-markdown", "post", options))));
  data.buffer.push("</div>\r\n\r\n	  	");
  stack1 = helpers['if'].call(depth0, "isPrevId", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n\r\n	  	");
  stack1 = helpers['if'].call(depth0, "isNextId", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(4, program4, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n\r\n	  	<br />\r\n	 	");
  stack1 = helpers['if'].call(depth0, "commentFeature", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n    </div><!-- /.blog-post -->\r\n\r\n</div><!-- /.blog-main -->");
  return buffer;
  
});