angular.module('templates-app', ['about/about.tpl.html', 'account/login.tpl.html', 'account/management.tpl.html', 'account/passwordChange.tpl.html', 'account/register.tpl.html', 'analyzer/analyzer.tpl.html', 'analyzer/analyzerTest.tpl.html', 'benchmark/benchmark.tpl.html', 'components/navbar.tpl.html', 'document/document.tpl.html', 'home/home.tpl.html']);

angular.module("about/about.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("about/about.tpl.html",
    "<div class=\"row\">\n" +
    "  <h1 class=\"page-header\">\n" +
    "    The Elevator Pitch\n" +
    "    <small>For the lazy and impatient.</small>\n" +
    "  </h1>\n" +
    "  <p>\n" +
    "    <code>ng-boilerplate</code> is an opinionated kickstarter for web\n" +
    "    development projects. It's an attempt to create a simple starter for new\n" +
    "    web sites and apps: just download it and start coding. The goal is to\n" +
    "    have everything you need to get started out of the box; of course it has\n" +
    "    slick styles and icons, but it also has a best practice directory structure\n" +
    "    to ensure maximum code reuse. And it's all tied together with a robust\n" +
    "    build system chock-full of some time-saving goodness.\n" +
    "  </p>\n" +
    "\n" +
    "  <h2>Why?</h2>\n" +
    "\n" +
    "  <p>\n" +
    "    Because my team and I make web apps, and \n" +
    "    last year AngularJS became our client-side framework of choice. We start\n" +
    "    websites the same way every time: create a directory structure, copy and\n" +
    "    ever-so-slightly tweak some config files from an older project, and yada\n" +
    "    yada, etc., and so on and so forth. Why are we repeating ourselves? We wanted a starting point; a set of\n" +
    "    best practices that we could identify our projects as embodying and a set of\n" +
    "    time-saving wonderfulness, because time is money.\n" +
    "  </p>\n" +
    "\n" +
    "  <p>\n" +
    "    There are other similar projects out there, but none of them suited our\n" +
    "    needs. Some are awesome but were just too much, existing more as reference\n" +
    "    implementations, when we really just wanted a kickstarter. Others were just\n" +
    "    too little, with puny build systems and unscalable architectures.  So we\n" +
    "    designed <code>ng-boilerplate</code> to be just right.\n" +
    "  </p>\n" +
    "\n" +
    "  <h2>What ng-boilerplate Is Not</h2>\n" +
    "\n" +
    "  <p>\n" +
    "    This is not an example of an AngularJS app. This is a kickstarter. If\n" +
    "    you're looking for an example of what a complete, non-trivial AngularJS app\n" +
    "    that does something real looks like, complete with a REST backend and\n" +
    "    authentication and authorization, then take a look at <code><a\n" +
    "        href=\"https://github.com/angular-app/angular-app/\">angular-app</a></code>, \n" +
    "    which does just that, and does it well.\n" +
    "  </p>\n" +
    "\n" +
    "  <h1 class=\"page-header\">\n" +
    "    So What's Included?\n" +
    "    <small>I'll try to be more specific than \"awesomeness\".</small>\n" +
    "  </h1>\n" +
    "  <p>\n" +
    "    This section is just a quick introduction to all the junk that comes\n" +
    "    pre-packaged with <code>ng-boilerplate</code>. For information on how to\n" +
    "    use it, see the <a\n" +
    "      href=\"https://github.com/joshdmiller/ng-boilerplate#readme\">project page</a> at\n" +
    "    GitHub.\n" +
    "  </p>\n" +
    "\n" +
    "  <p>\n" +
    "    The high-altitude view is that the base project includes \n" +
    "    <a href=\"http://getbootstrap.com\">Twitter Bootstrap</a>\n" +
    "    styles to quickly produce slick-looking responsive web sites and apps. It also\n" +
    "    includes <a href=\"http://angular-ui.github.com/bootstrap\">UI Bootstrap</a>,\n" +
    "    a collection of native AngularJS directives based on the aforementioned\n" +
    "    templates and styles. It also includes <a href=\"http://fortawesome.github.com/Font-Awesome/\">Font Awesome</a>,\n" +
    "    a wicked-cool collection of font-based icons that work swimmingly with all\n" +
    "    manner of web projects; in fact, all images on the site are actually font-\n" +
    "    based icons from Font Awesome. Neat! Lastly, this also includes\n" +
    "    <a href=\"http://joshdmiller.github.com/angular-placeholders\">Angular Placeholders</a>,\n" +
    "    a set of pure AngularJS directives to do client-side placeholder images and\n" +
    "    text to make mocking user interfaces super easy.\n" +
    "  </p>\n" +
    "\n" +
    "  <p>\n" +
    "    And, of course, <code>ng-boilerplate</code> is built on <a href=\"http://angularjs.org\">AngularJS</a>,\n" +
    "    by the far the best JavaScript framework out there! But if you don't know\n" +
    "    that already, then how did you get here? Well, no matter - just drink the\n" +
    "    Kool Aid. Do it. You know you want to.\n" +
    "  </p>\n" +
    "  \n" +
    "  <h2>Twitter Bootstrap</h2>\n" +
    "\n" +
    "  <p>\n" +
    "    You already know about this, right? If not, <a\n" +
    "      href=\"http://getbootstrap.com\">hop on over</a> and check it out; it's\n" +
    "    pretty sweet. Anyway, all that wonderful stylistic goodness comes built in.\n" +
    "    The LESS files are available for you to import in your main stylesheet as\n" +
    "    needed - no excess, no waste. There is also a dedicated place to override\n" +
    "    variables and mixins to suit your specific needs, so updating to the latest\n" +
    "    version of Bootstrap is as simple as: \n" +
    "  </p>\n" +
    "\n" +
    "  <pre>$ cd vendor/twitter-bootstrap<br />$ git pull origin master</pre>\n" +
    "\n" +
    "  <p>\n" +
    "    Boom! And victory is ours.\n" +
    "  </p>\n" +
    "\n" +
    "  <h2>UI Bootstrap</h2>\n" +
    "\n" +
    "  <p>\n" +
    "    What's better than Bootstrap styles? Bootstrap directives!  The fantastic <a href=\"http://angular-ui.github.com/bootstrap\">UI Bootstrap</a>\n" +
    "    library contains a set of native AngularJS directives that are endlessly\n" +
    "    extensible. You get the tabs, the tooltips, the accordions. You get your\n" +
    "    carousel, your modals, your pagination. And <i>more</i>.\n" +
    "    How about a quick demo? \n" +
    "  </p>\n" +
    "\n" +
    "  <ul>\n" +
    "    <li class=\"dropdown\">\n" +
    "      <a class=\"btn dropdown-toggle\">\n" +
    "        Click me!\n" +
    "      </a>\n" +
    "      <ul class=\"dropdown-menu\">\n" +
    "        <li ng-repeat=\"choice in dropdownDemoItems\">\n" +
    "          <a>{{choice}}</a>\n" +
    "        </li>\n" +
    "      </ul>\n" +
    "    </li>\n" +
    "  </ul>\n" +
    "\n" +
    "  <p>\n" +
    "    Oh, and don't include jQuery;  \n" +
    "    you don't need it.\n" +
    "    This is better.\n" +
    "    Don't be one of those people. <sup>*</sup>\n" +
    "  </p>\n" +
    "\n" +
    "  <p><small><sup>*</sup> Yes, there are exceptions.</small></p>\n" +
    "\n" +
    "  <h2>Font Awesome</h2>\n" +
    "\n" +
    "  <p>\n" +
    "    Font Awesome has earned its label. It's a set of open (!) icons that come\n" +
    "    distributed as a font (!) for super-easy, lightweight use. Font Awesome \n" +
    "    works really well with Twitter Bootstrap, and so fits right in here.\n" +
    "  </p>\n" +
    "\n" +
    "  <p>\n" +
    "    There is not a single image on this site. All of the little images and icons \n" +
    "    are drawn through Font Awesome! All it takes is a little class:\n" +
    "  </p>\n" +
    "\n" +
    "  <pre>&lt;i class=\"fa fa-flag\"&gt;&lt/i&gt</pre>\n" +
    "\n" +
    "  <p>\n" +
    "    And you get one of these: <i class=\"fa fa-flag\"> </i>. Neat!\n" +
    "  </p>\n" +
    "\n" +
    "  <h2>Placeholders</h2>\n" +
    "\n" +
    "  <p>\n" +
    "    Angular Placeholders is a simple library for mocking up text and images. You\n" +
    "    can automatically throw around some \"lorem ipsum\" text:\n" +
    "  </p>\n" +
    "\n" +
    "  <pre>&lt;p ph-txt=\"3s\"&gt;&lt;/p&gt;</pre>\n" +
    "\n" +
    "  <p>\n" +
    "    Which gives you this:\n" +
    "  </p>\n" +
    "\n" +
    "  <div class=\"pre\">\n" +
    "    &lt;p&gt;\n" +
    "    <p ph-txt=\"3s\"></p>\n" +
    "    &lt;/p&gt;\n" +
    "  </div>\n" +
    "\n" +
    "  <p>\n" +
    "    Even more exciting, you can also create placeholder images, entirely \n" +
    "    client-side! For example, this:\n" +
    "  </p>\n" +
    "  \n" +
    "  <pre>\n" +
    "&lt;img ph-img=\"50x50\" /&gt;\n" +
    "&lt;img ph-img=\"50x50\" class=\"img-polaroid\" /&gt;\n" +
    "&lt;img ph-img=\"50x50\" class=\"img-rounded\" /&gt;\n" +
    "&lt;img ph-img=\"50x50\" class=\"img-circle\" /&gt;</pre>\n" +
    "\n" +
    "  <p>\n" +
    "    Gives you this:\n" +
    "  </p>\n" +
    "\n" +
    "  <div>\n" +
    "    <img ph-img=\"50x50\" />\n" +
    "    <img ph-img=\"50x50\" class=\"img-polaroid\" />\n" +
    "    <img ph-img=\"50x50\" class=\"img-rounded\" />\n" +
    "    <img ph-img=\"50x50\" class=\"img-circle\" />\n" +
    "  </div>\n" +
    "\n" +
    "  <p>\n" +
    "    Which is awesome.\n" +
    "  </p>\n" +
    "\n" +
    "  <h1 class=\"page-header\">\n" +
    "    The Roadmap\n" +
    "    <small>Really? What more could you want?</small>\n" +
    "  </h1>\n" +
    "\n" +
    "  <p>\n" +
    "    This is a project that is <i>not</i> broad in scope, so there's not really\n" +
    "    much of a wish list here. But I would like to see a couple of things:\n" +
    "  </p>\n" +
    "\n" +
    "  <p>\n" +
    "    I'd like it to be a little simpler. I want this to be a universal starting\n" +
    "    point. If someone is starting a new AngularJS project, she should be able to\n" +
    "    clone, merge, or download its source and immediately start doing what she\n" +
    "    needs without renaming a bunch of files and methods or deleting spare parts\n" +
    "    ... like this page. This works for a first release, but I just think there\n" +
    "    is a little too much here right now.\n" +
    "  </p>\n" +
    "\n" +
    "  <p>\n" +
    "    I'd also like to see a simple generator. Nothing like <a href=\"yeoman.io\">\n" +
    "    Yeoman</a>, as there already is one of those, but just something that\n" +
    "    says \"I want Bootstrap but not Font Awesome and my app is called 'coolApp'.\n" +
    "    Gimme.\" Perhaps a custom download builder like UI Bootstrap\n" +
    "    has. Like that. Then again, perhaps some Yeoman generators wouldn't be out\n" +
    "    of line. I don't know. What do you think?\n" +
    "  </p>\n" +
    "\n" +
    "  <p>\n" +
    "    Naturally, I am open to all manner of ideas and suggestions. See the \"Can I\n" +
    "    Help?\" section below.\n" +
    "  </p>\n" +
    "\n" +
    "  <h2>The Tactical To Do List</h2>\n" +
    "\n" +
    "  <p>\n" +
    "    There isn't much of a demonstration of UI Bootstrap. I don't want to pollute\n" +
    "    the code with a demo for demo's sake, but I feel we should showcase it in\n" +
    "    <i>some</i> way.\n" +
    "  </p>\n" +
    "\n" +
    "  <p>\n" +
    "    <code>ng-boilerplate</code> should include end-to-end tests. This should\n" +
    "    happen soon. I just haven't had the time.\n" +
    "  </p>\n" +
    "\n" +
    "  <p>\n" +
    "    Lastly, this site should be prettier, but I'm no web designer. Throw me a\n" +
    "    bone here, people!\n" +
    "  </p>\n" +
    "\n" +
    "  <h2>Can I Help?</h2>\n" +
    "\n" +
    "  <p>\n" +
    "    Yes, please!\n" +
    "  </p>\n" +
    "\n" +
    "  <p>\n" +
    "    This is an opinionated kickstarter, but the opinions are fluid and\n" +
    "    evidence-based. Don't like the way I did something? Think you know of a\n" +
    "    better way? Have an idea to make this more useful? Let me know! You can\n" +
    "    contact me through all the usual channels or you can open an issue on the\n" +
    "    GitHub page. If you're feeling ambitious, you can even submit a pull\n" +
    "    request - how thoughtful of you!\n" +
    "  </p>\n" +
    "\n" +
    "  <p>\n" +
    "    So join the team! We're good people.\n" +
    "  </p>\n" +
    "</div>\n" +
    "\n" +
    "");
}]);

angular.module("account/login.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("account/login.tpl.html",
    "<div ng-include=\"'components/navbar.tpl.html'\"></div>\n" +
    "<div class=\"top-content\">	\n" +
    "        <div class=\"inner-bg\" style=\"background-color:#ffffff;\">\n" +
    "            <div class=\"container\">\n" +
    "				<div class=\"row\">\n" +
    "				  <h1 class=\"page-header\">\n" +
    "				      Login\n" +
    "				  </h1>\n" +
    "				  <form ng-submit=\"login()\">\n" +
    "				      <div class=\"form-group row\">\n" +
    "				       <div class=\"col-xs-6\">\n" +
    "				          <label>Username:</label>\n" +
    "				          <input type=\"text\" ng-model=\"account.name\" class=\"form-control\" required maxlength=\"30\"/>\n" +
    "				       </div>\n" +
    "				      </div>\n" +
    "				      <div class=\"form-group row\">\n" +
    "				       <div class=\"col-xs-6\">\n" +
    "				          <label>Password:</label>\n" +
    "				          <input type=\"password\" ng-model=\"account.password\" class=\"form-control\" required maxlength=\"30\"/>\n" +
    "				       </div>\n" +
    "				      </div>\n" +
    "				      <div class=\"form-group row\">\n" +
    "				       <div class=\"col-xs-6\">\n" +
    "				      	<button class=\"btn btn-success\" type=\"submit\"> Login </button>\n" +
    "				       </div>\n" +
    "				      </div>\n" +
    "				  </form>\n" +
    "				</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</div>");
}]);

angular.module("account/management.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("account/management.tpl.html",
    "<div ng-include=\"'components/navbar.tpl.html'\"></div>\n" +
    "<div class=\"top-content\">	\n" +
    "  <div class=\"inner-bg\" style=\"background-color:#ffffff;\">\n" +
    "    <div class=\"container\">\n" +
    " 	 <h1 class=\"page-header\" align=\"center\">\n" +
    "      	Accounts Management\n" +
    " 	 </h1><br><br>\n" +
    " 	 <div class=\"row\">\n" +
    "        <div class=\"col-md-12\">\n" +
    " 	 		<div class=\"table-responsive\">\n" +
    "              <table class=\"table table-default\" style=\"border: 1px groove; border-color:#69FF7D\"\">\n" +
    "                   <thead>\n" +
    "                     <tr style=\"background-color:#84e1e1\">\n" +
    "                        <td align=\"center\"><b>Username</b></td>                                                  \n" +
    "                        <td align=\"center\"><b>Firstname</b></td>\n" +
    "                        <td align=\"center\"><b>Lastname</b></td>\n" +
    "                        <td align=\"center\"><b>Status</b></td>\n" +
    "                        <td align=\"center\"></td>                                             \n" +
    "                     </tr>\n" +
    "                   </thead>\n" +
    "                   <tbody>\n" +
    "                     <tr data-ng-repeat=\"account in accounts\" ng-class=\"{'selected':$index == selectedRow}\" data-ng-click=\"setClickedRow($index,account)\">\n" +
    "                         <td align=\"center\">{{account.username}}</td>\n" +
    "                         <td align=\"center\">{{account.firstName}}</td>\n" +
    "                         <td align=\"center\">{{account.lastName}}</td>\n" +
    "                         <td align=\"center\">{{account.status}}</td>\n" +
    "                         <td align=\"center\"><button type=\"submit\" class=\"btn btn-primary\" ng-click=\"removeAccount(account.account_id)\">Remove</button></td>\n" +
    "                     </tr>                \n" +
    "                   </tbody>\n" +
    "             </table>                  \n" +
    "  		   </div>  	\n" +
    "  	    </div>\n" +
    "  	 </div><br>\n" +
    "  	 <div class=\"row\">\n" +
    "            <div class=\"col-md-12\">                                      \n" +
    "                    <form class=\"form-horizontal\" role=\"form\">   \n" +
    "                        <div class=\"form-group\"> \n" +
    "                            <label class=\"control-label col-sm-1\" for=\"Username\">Username:</label>\n" +
    "                            <div class=\"col-sm-5\">                                                                               \n" +
    "                              <input type=\"text\" class=\"form-control\" required placeholder=\"Username\" maxlength=\"30\"  data-ng-model=\"Account.username\"/>\n" +
    "                            </div>   \n" +
    "                            <label class=\"control-label col-sm-1\" for=\"Password\">Password:</label>\n" +
    "                            <div class=\"col-sm-5\">                           \n" +
    "                                <input type=\"password\" class=\"form-control\" required placeholder=\"Password\" maxlength=\"30\"  data-ng-model=\"Account.password\"/>\n" +
    "                            </div>                         \n" +
    "                        </div>                    \n" +
    "                        <div class=\"form-group\">\n" +
    "                       		<label class=\"control-label col-sm-1\" for=\"FirstName\">F. name:</label>\n" +
    "                            <div class=\"col-sm-5\">                           \n" +
    "                                <input type=\"text\" class=\"form-control\" required placeholder=\"Firstname\" maxlength=\"30\"  data-ng-model=\"Account.firstName\"/>\n" +
    "                            </div>  \n" +
    "                             <label class=\"control-label col-sm-1\" for=\"LastName\">L. name:</label>\n" +
    "                            <div class=\"col-sm-5\"> \n" +
    "                                 <input type=\"text\" class=\"form-control\" required placeholder=\"Lastname\" maxlength=\"38\"  data-ng-model=\"Account.lastName\"/>\n" +
    "                            </div>                       \n" +
    "                        </div>                                                                                                                                                                 \n" +
    "                     </form>             \n" +
    "             </div>\n" +
    "        </div>\n" +
    "        <div class=\"row\">\n" +
    "                   <div class=\"col-md-12\">\n" +
    "                       <div style=\"background-color:#ffffff;\">\n" +
    "                             <form class=\"form-horizontal\" role=\"form\">\n" +
    "                                 <div class=\"form-group\">    \n" +
    "                                     <div class=\"col-sm-2\">                         \n" +
    "                                        <button type=\"submit\" class=\"btn btn-primary\" data-ng-click=\"createNewAccount()\">{{mode}}</button>   \n" +
    "                                      </div>                         \n" +
    "                                 </div>  \n" +
    "                             </form>\n" +
    "                       </div>\n" +
    "                  </div>\n" +
    "        </div>\n" +
    "     </div>\n" +
    "   </div>\n" +
    "</div>");
}]);

angular.module("account/passwordChange.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("account/passwordChange.tpl.html",
    "<div ng-include=\"'components/navbar.tpl.html'\"></div>\n" +
    "<div class=\"top-content\">	\n" +
    "        <div class=\"inner-bg\" style=\"background-color:#ffffff;\">\n" +
    "            <div class=\"container\">\n" +
    "				<div class=\"row\">\n" +
    "				  <h1 class=\"page-header\">\n" +
    "				      Change password\n" +
    "				  </h1>\n" +
    "				  <form ng-submit=\"changePassword()\">\n" +
    "				      <div class=\"form-group row\">\n" +
    "				       <div class=\"col-xs-6\">\n" +
    "				          <label>Old password:</label>\n" +
    "				          <input type=\"password\" ng-model=\"oldPassword\" class=\"form-control\" required maxlength=\"30\"/>\n" +
    "				       </div>\n" +
    "				      </div>\n" +
    "				      <div class=\"form-group row\">\n" +
    "				       <div class=\"col-xs-6\">\n" +
    "				          <label>New password:</label>\n" +
    "				          <input type=\"password\" ng-model=\"newPassword\" class=\"form-control\" required maxlength=\"30\"/>\n" +
    "				       </div>\n" +
    "				      </div>\n" +
    "				      <div class=\"form-group row\">\n" +
    "				       <div class=\"col-xs-6\">\n" +
    "				          <label>New password confirmed:</label>\n" +
    "				          <input type=\"password\" ng-model=\"newPasswordRepeat\" class=\"form-control\" required maxlength=\"30\"/>\n" +
    "				       </div>\n" +
    "				      </div>\n" +
    "				      <div class=\"form-group row\">\n" +
    "				       <div class=\"col-xs-6\">\n" +
    "				      <button class=\"btn btn-success\" type=\"submit\"> Change </button>\n" +
    "				       </div>\n" +
    "				      </div>\n" +
    "				  </form>\n" +
    "				</div>\n" +
    "				<p><font size=\"3\" color=\"red\">{{errorMessage}}</font></p>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</div>");
}]);

angular.module("account/register.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("account/register.tpl.html",
    "<div ng-include=\"'components/navbar.tpl.html'\"></div>\n" +
    "<div class=\"top-content\">	\n" +
    "        <div class=\"inner-bg\" style=\"background-color:#ffffff;\">\n" +
    "            <div class=\"container\">\n" +
    "              <div class=\"col-md-12\">\n" +
    "				<div class=\"row\">\n" +
    "				  <h1 class=\"page-header\">\n" +
    "				      Register\n" +
    "				  </h1>\n" +
    "				  <form class=\"form-horizontal\" ng-submit=\"register()\">\n" +
    "				  <div class=\"form-group row\">\n" +
    "				      <div class=\"col-xs-6\">\n" +
    "				          <label>Username:</label>\n" +
    "				          <input type=\"text\" ng-model=\"account.username\" class=\"form-control\" required maxlength=\"40\" />\n" +
    "				      </div>\n" +
    "				  </div>\n" +
    "				  <div class=\"form-group row\">\n" +
    "				      <div class=\"col-xs-6\">\n" +
    "				          <label>Password:</label>\n" +
    "				          <input type=\"password\" ng-model=\"account.password\" class=\"form-control\" required maxlength=\"30\"/>\n" +
    "				      </div>\n" +
    "				  </div>\n" +
    "				  <div class=\"form-group row\">\n" +
    "				      <div class=\"col-xs-6\">\n" +
    "				          <label>Repeat password:</label>\n" +
    "				          <input type=\"password\" ng-model=\"passwordRepeat\" class=\"form-control\" required maxlength=\"30\"/>\n" +
    "				      </div>\n" +
    "				  </div>\n" +
    "				  <div class=\"form-group row\">\n" +
    "				      <div class=\"col-xs-6\">\n" +
    "				          <label>Firstname:</label>\n" +
    "				          <input type=\"text\" ng-model=\"account.firstName\" class=\"form-control\" required maxlength=\"30\"/>\n" +
    "				      </div>\n" +
    "				  </div>\n" +
    "				  <div class=\"form-group row\">\n" +
    "				      <div class=\"col-xs-6\">\n" +
    "				          <label>Lastname:</label>\n" +
    "				          <input type=\"text\" ng-model=\"account.lastName\" class=\"form-control\" required maxlength=\"38\"/>\n" +
    "				      </div>\n" +
    "				  </div>\n" +
    "				  <div class=\"form-group row\">\n" +
    "				  	  <div class=\"col-xs-3\">\n" +
    "				      	<button class=\"btn btn-success\" type=\"submit\">Register</button>\n" +
    "				      </div>\n" +
    "				  </div>\n" +
    "				  </form>\n" +
    "				</div>\n" +
    "				<p><font size=\"3\" color=\"red\">{{errorMessage}}</font></p>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "     </div>\n" +
    "</div>");
}]);

angular.module("analyzer/analyzer.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("analyzer/analyzer.tpl.html",
    "<div ng-include=\"'components/navbar.tpl.html'\"></div>\n" +
    "<div class=\"top-content\">	\n" +
    "        <div class=\"inner-bg\" style=\"background-color:#ffffff;\">\n" +
    "            <div class=\"container\">\n" +
    "				<div class=\"row\">\n" +
    "				 	 <h1 class=\"page-header\" align=\"center\">\n" +
    "				      	Analyzers Management \n" +
    "				 	 </h1><br><br>\n" +
    "				 	 <div>\n" +
    "				 	 <p> <font size=\"5\">Click <a href=\"https://github.com/salac91/LuceneAnalyzerJarPackaging/tree/master/NonStemmerSerbianAnalyzer\"> here </a> for example to how to package your analyzer into jar! </font> </p>  <br>\n" +
    "				 	 <form class=\"form-horizontal\">\n" +
    "					    <div class=\"form-group\">	\n" +
    "				 	      <div class=\"table-responsive\">								\n" +
    "						              <table class=\"table\" style=\"border: 1px groove; border-color:#F7F7F7\"\">\n" +
    "						                   <thead>					       \n" +
    "						                     <tr style=\"background-color:#96C2EE\">\n" +
    "						                        <td align=\"center\"><b>Name</b></td>\n" +
    "						                        <td align=\"center\"><b>Description</b></td>				                        					                      			                                                                  			                           					                                         \n" +
    "						                     </tr>\n" +
    "						                   </thead>\n" +
    "						                   <tbody>\n" +
    "						                     <tr data-ng-repeat=\"analyzer in analyzers\" ng-class=\"{'selected':$index == selectedRow}\" data-ng-click=\"setClickedRow($index,analyzer)\">\n" +
    "						                         <td align=\"center\">{{analyzer.name}}</td>								                    \n" +
    "						                         <td align=\"center\">{{analyzer.description}}</td>						                      		                       					                    \n" +
    "						                     </tr>                \n" +
    "						                   </tbody>\n" +
    "						              </table>  \n" +
    "						           </div>                \n" +
    "						    	</div>\n" +
    "						  	     <div class=\"form-group\">\n" +
    "								   <div class=\"col-xs-12\">\n" +
    "					  				  <button class=\"btn btn-success btn-lg\" ng-click=\"changeToAddMode()\" type=\"submit\"><i class=\"fa fa-plus\" aria-hidden=\"true\"></i> New Analyzer</button>\n" +
    "					  				   &nbsp;&nbsp;\n" +
    "					  				  <button ng-show=\"role == 'Admin'\" class=\"btn btn-danger btn-lg\" ng-click=\"removeAnalyzer()\" type=\"submit\"><i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i> Delete</button>\n" +
    "					  			   </div>\n" +
    "					    </div>\n" +
    "				   </form>\n" +
    "				</div>\n" +
    "				<p><font size=\"3\" color=\"red\">{{message}}</font></p>\n" +
    "				 	 \n" +
    "				 	<div ng-show=\"addMode\">\n" +
    "				 	 <br><br>			 	 		 	 \n" +
    "				 	 	<h3>\n" +
    "				      		Upload new analyzer here \n" +
    "				 	 	</h3><br>\n" +
    "				 	 	<p> <font size=\"3\"> Note: Name must be the same as the name of the class that extends Lucene Analyzer class</font> </p><br>\n" +
    "				 	 	<div>\n" +
    "					  	 	<form class=\"form-horizontal\" enctype=\"multipart/form-data\">\n" +
    "					  	 		<div class=\"form-group\">\n" +
    "					  	 			<label class=\"control-label col-sm-1\">Name:</label>\n" +
    "					  	 	    	<div class=\"col-sm-3\">\n" +
    "					  	 		   	     <input class=\"form-control\"  type=\"text\" ng-model=\"analyzer.name\"/>\n" +
    "					  	 		 	</div>					  	 		 \n" +
    "					  	 		</div>\n" +
    "					  	 		<div class=\"form-group\">\n" +
    "					  	 		    <label class=\"control-label col-sm-1\">Description:</label>\n" +
    "					  	 		    <div class=\"col-sm-4\">\n" +
    "					  	 		   	    <textarea rows=\"6\" cols=\"50\" class=\"form-control\" type=\"text\" ng-model=\"analyzer.description\"/>\n" +
    "					  	 		   	    </textarea>\n" +
    "					  	 		    </div>\n" +
    "					  	 	    </div>\n" +
    "					  	 	    <div class=\"form-group\">\n" +
    "					  	 	        <label class=\"control-label col-sm-1\">Jar file:</label>\n" +
    "					  	 	        <div class=\"col-sm-4\">\n" +
    "					   					<input type=\"file\" ng-model=\"analyzer.fileInput\" id=\"file\"/>\n" +
    "					   			    </div>\n" +
    "					   			</div>\n" +
    "					   			<div class=\"form-group row\">\n" +
    "					  				<button class=\"btn btn-primary\" ng-click=\"uploadFile()\" type=\"submit\">Upload</button>\n" +
    "					  				<button class=\"btn btn-primary\" ng-click=\"backFromAddMode()\" type=\"submit\">Back</button>\n" +
    "					  			</div>\n" +
    "							</form>\n" +
    "						</div>\n" +
    "				  	 <br>\n" +
    "				  </div>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "	  </div>\n" +
    "</div>");
}]);

angular.module("analyzer/analyzerTest.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("analyzer/analyzerTest.tpl.html",
    "<div ng-include=\"'components/navbar.tpl.html'\"></div>\n" +
    "<div class=\"top-content\">	\n" +
    "        <div class=\"inner-bg\" style=\"background-color:#ffffff;\">\n" +
    "            <div class=\"container\">\n" +
    "				<div class=\"row\">\n" +
    "				  <h1 class=\"page-header\" align=\"center\">\n" +
    "				      Test Analyzer\n" +
    "				  </h1><br><br>\n" +
    "				  \n" +
    "				  <div ng-show=\"haveBenchmark\" class=\"row\">\n" +
    "				     <form class=\"form-horizontal\" role=\"form\">\n" +
    "				        <div class=\"form-group\">\n" +
    "				          <label class=\"control-label col-sm-2\" style=\"font-size:18px\">Select Analyzer:</label>			      		        \n" +
    "				          <div class=\"col-sm-4\">\n" +
    "					          <select class=\"form-control\" ng-model=\"selectedAnalyzer\">\n" +
    "					          	<optgroup style=\"font-size:18px;\" label=\"Analyzers\">\n" +
    "					          		 <option ng-repeat=\"analyzer in analyzers\" value=\"{{analyzer.analyzer_Id}}\">{{analyzer.name}}</option>					         \n" +
    "					          	</optgroup>\n" +
    "					          </select>\n" +
    "					      </div>				    \n" +
    "				      </div><br><br>\n" +
    "				       <div class=\"form-group\">\n" +
    "				      	  <label class=\"control-label col-sm-2\" style=\"font-size:18px\">Select Benchmark:</label>\n" +
    "				      	   <label class=\"control-label col-sm-1\"></label>				\n" +
    "				          <div class=\"col-sm-1\"> \n" +
    "				      		<button class=\"btn btn-default btn-lg\" type=\"submit\" ng-click=\"previous()\" style=\"border:none;\"><i class=\"fa fa-backward\" aria-hidden=\"true\"></i></button>\n" +
    "				      	 </div>\n" +
    "				      	 <div class=\"col-sm-1\"> \n" +
    "				      		<button class=\"btn btn-default btn-lg\" type=\"submit\" ng-click=\"next()\" style=\"border:none;\"><i class=\"fa fa-forward\" aria-hidden=\"true\"></i></button>\n" +
    "				      	 </div>\n" +
    "				      </div><br>\n" +
    "				      <div class=\"table-responsive\">\n" +
    "					              <table class=\"table\" style=\"border: 1px groove; border-color:#F7F7F7\"\">\n" +
    "					              	   <thead>\n" +
    "					                     <tr style=\"background-color:#96C2EE\">\n" +
    "					                        <td align=\"center\"><b>Name</b></td>					                                                                  \n" +
    "					                        <td align=\"center\"><b>Analyzer</b></td> \n" +
    "					                        <td align=\"center\"><b>Directory</b></td> 				                                                      \n" +
    "					                     </tr>\n" +
    "					                   </thead>\n" +
    "					                   <tbody>				                   \n" +
    "					                     <tr>					      				                       \n" +
    "					                         <td align=\"center\">{{currentBenchmark.name}}</td>\n" +
    "					                         <td align=\"center\">{{currentBenchmark.alayzerName}}</td>	\n" +
    "					                         <td align=\"center\">{{currentBenchmark.directoryName}}</td>					                  	                      \n" +
    "					                     </tr> 				                                    \n" +
    "					                   </tbody>\n" +
    "					                   <thead>\n" +
    "					                     <tr style=\"background-color:#96C2EE\">\n" +
    "					                        <td align=\"center\"><b>Search Query</b></td>					                                                                  \n" +
    "					                        <td align=\"center\"><b>Search Type</b></td> \n" +
    "					                        <td></td> 				                                                      \n" +
    "					                     </tr>\n" +
    "					                   </thead>\n" +
    "					                   <tbody>				                   \n" +
    "					                     <tr data-ng-repeat=\"queryAndRelevantDocuments in currentBenchmark.queryAndRelevantDocumentsList\">					      				                       \n" +
    "					                         <td align=\"center\">{{queryAndRelevantDocuments.searchModel.text}}</td>\n" +
    "					                         <td align=\"center\">{{queryAndRelevantDocuments.searchModel.textSearchType}}</td>	\n" +
    "					                         <td></td>				                  	                      \n" +
    "					                     </tr> 		                                    \n" +
    "					                   </tbody>\n" +
    "					             </table>                  \n" +
    "					  	 </div><br>\n" +
    "				      	\n" +
    "				      <div class=\"form-group\">\n" +
    "				     	 <div class=\"col-sm-2\"> \n" +
    "				      		<button class=\"btn btn-success btn-lg\" type=\"submit\" ng-click=\"testAnalyzer()\">Test it !</button>\n" +
    "				      	 </div>\n" +
    "				      </div>\n" +
    "				  </form>\n" +
    "				  </div>\n" +
    "				  \n" +
    "				  <br><br>\n" +
    "				  <div ng-show=\"ready == true\" class=\"row\"> \n" +
    "				  <h2> Test Result </h2><br>\n" +
    "					  <div class=\"table-responsive\">\n" +
    "					              <table class=\"table\" style=\"border: 1px groove; border-color:#F7F7F7\"\">\n" +
    "					                   <thead>\n" +
    "					                     <tr style=\"background-color:#96C2EE\">\n" +
    "					                        <td align=\"center\"><b>Search Query</b></td>					                                                                  \n" +
    "					                        <td align=\"center\"><b>Search Type</b></td>\n" +
    "					                        <td align=\"center\"><b>Precision</b></td>\n" +
    "					                        <td align=\"center\"><b>Recall</b></td>\n" +
    "					                        <td align=\"center\"><b>Accuracy</b></td>\n" +
    "					                        <td align=\"center\"><b>F</b></td>  					                                                      \n" +
    "					                     </tr>\n" +
    "					                   </thead>\n" +
    "					                   <tbody>\n" +
    "					                     <tr data-ng-repeat=\"analysisResult in analysisResultList\" ng-class=\"{'selected':$index == selectedResult}\" data-ng-click=\"setSelectedResult($index,analysisResult)\">\n" +
    "					                         <td align=\"center\">{{analysisResult.searchModel.text}}</td>					                       \n" +
    "					                         <td align=\"center\">{{analysisResult.searchModel.textSearchType}}</td>\n" +
    "					                         <td align=\"center\">{{analysisResult.analysisResultModel.precision}}%</td>\n" +
    "					                         <td align=\"center\">{{analysisResult.analysisResultModel.retrieval}}%</td>\n" +
    "					                         <td align=\"center\">{{analysisResult.analysisResultModel.correctness}}%</td>\n" +
    "					                         <td align=\"center\">{{analysisResult.analysisResultModel.fmera}}</td>						                                       \n" +
    "					                     </tr>                \n" +
    "					                   </tbody>\n" +
    "					                   <thead>\n" +
    "					                     <tr style=\"background-color:#96C2EE\">\n" +
    "					                     	<td></td>	\n" +
    "					                     	<td></td>			                       \n" +
    "					                        <td align=\"center\"><b>Average Precision</b></td>\n" +
    "					                        <td align=\"center\"><b>Average Retrieval</b></td>\n" +
    "					                        <td align=\"center\"><b>Average Accuracy</b></td>\n" +
    "					                        <td align=\"center\"><b>Average F</b></td>   					                                                      \n" +
    "					                     </tr>\n" +
    "					                   </thead>\n" +
    "					                    <tbody>\n" +
    "					                     <tr>		\n" +
    "					                     	 <td></td>\n" +
    "					                     	 <td></td>		                      \n" +
    "					                         <td align=\"center\">{{average_precision}}%</td>\n" +
    "					                         <td align=\"center\">{{average_retrieval}}%</td>\n" +
    "					                         <td align=\"center\">{{average_correctness}}%</td>\n" +
    "					                         <td align=\"center\">{{average_fmera}}</td>					                                    \n" +
    "					                     </tr>                \n" +
    "					                   </tbody>\n" +
    "					             </table>                  \n" +
    "					  	 </div>					  						  	 					  					  	 \n" +
    "			   </div>\n" +
    "			   \n" +
    "			      <br>\n" +
    "				  <div ng-show=\"ready && showDetails\" class=\"row\">				 \n" +
    "				  <h2> Details [Testing Analyzer <---> Benchmark Analyzer]: </h2>\n" +
    "				  <div class=\"row\">\n" +
    "				   <form>\n" +
    "					     <div class=\"form-group\">\n" +
    "					     	 <div class=\"col-sm-3\"> \n" +
    "					      		 <input style=\"height: 18px; width:18px;\" type=\"checkbox\" ng-model=\"filterSelected\" ng-change=\"changeFilter()\" name=\"filter\" value=\"yes\"><b style=\"font-size:16px\"> Show only wrong ones </b> <br><br>\n" +
    "					      	 </div>\n" +
    "					      </div>\n" +
    "					  </form> \n" +
    "				  </div>\n" +
    "				     <div class=\"col-xs-6\">\n" +
    "					  <div class=\"table-responsive\">\n" +
    "					              <table class=\"table\" style=\"border: 1px groove; border-color:#F7F7F7\"\">\n" +
    "					                   <thead>					                  \n" +
    "					                     <tr style=\"background-color:#96C2EE\">\n" +
    "					                        <td align=\"center\"><b>Name</b></td>					                                                                  \n" +
    "					                        <td align=\"center\"><b>Relevant</b></td>				                    			                                                      \n" +
    "					                     </tr>\n" +
    "					                   </thead>\n" +
    "					                   <tbody>\n" +
    "					                     <tr data-ng-repeat=\"doc in allTestingkAnalyzerResultDocs | orderBy:sortType:sortReverse\">\n" +
    "					                         <td align=\"center\">{{doc.fileName}}</td>					                       \n" +
    "					                         <td ng-if=\"doc.relevant\" align=\"center\"> <input style=\"height: 22px; width:22px;\" disabled=\"disabled\" type=\"checkbox\" checked value=\"yes\"></td>  \n" +
    "					                         <td ng-if=\"!doc.relevant\" align=\"center\"> <input style=\"height: 22px; width:22px;\" disabled=\"disabled\" type=\"checkbox\" value=\"yes\"></td>          			                                       \n" +
    "					                     </tr>  				                                   \n" +
    "					                   </tbody>\n" +
    "					             </table>                  \n" +
    "					  	 </div>		\n" +
    "					</div>\n" +
    "					 <div class=\"col-xs-6\">  	 \n" +
    "					  	   <div class=\"table-responsive\">\n" +
    "					              <table class=\"table\" style=\"border: 1px groove; border-color:#F7F7F7\"\">\n" +
    "					                   <thead>					                  \n" +
    "					                     <tr style=\"background-color:#96C2EE\">\n" +
    "					                        <td align=\"center\"><b>Name</b></td>					                                                                  \n" +
    "					                        <td align=\"center\"><b>Relevant</b></td>				                    			                                                      \n" +
    "					                     </tr>\n" +
    "					                   </thead>\n" +
    "					                   <tbody>\n" +
    "					                     <tr data-ng-repeat=\"doc in allBenchmarkAnalyzerResultDocs | orderBy:sortType:sortReverse\">\n" +
    "					                         <td align=\"center\">{{doc.fileName}}</td>					                       \n" +
    "					                         <td ng-if=\"doc.relevant\" align=\"center\"> <input style=\"height: 22px; width:22px;\" disabled=\"disabled\" type=\"checkbox\" checked value=\"yes\"></td> \n" +
    "					                         <td ng-if=\"!doc.relevant\" align=\"center\"> <input style=\"height: 22px; width:22px;\" disabled=\"disabled\" type=\"checkbox\" value=\"yes\"></td>           			                                       \n" +
    "					                     </tr>                   \n" +
    "					                   </tbody>\n" +
    "					             </table>                  \n" +
    "					  	 </div>	\n" +
    "					 </div>					  						  	 					  					  	 \n" +
    "			   </div>\n" +
    "			   \n" +
    "			   <div ng-show=\"!haveBenchmark\" class=\"row\">\n" +
    "			   		<p style=\"font-size:22px\"><b>Sorry but you don't have any benchmark available. Create one <a ui-sref=\"benchmark\">here</a>.</b></p>\n" +
    "			   </div>\n" +
    "			   <br><br>\n" +
    "            </div>\n" +
    "      </div>\n" +
    "</div>");
}]);

angular.module("benchmark/benchmark.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("benchmark/benchmark.tpl.html",
    "<div ng-include=\"'components/navbar.tpl.html'\"></div>\n" +
    "<div class=\"top-content\">	\n" +
    "        <div class=\"inner-bg\" style=\"background-color:#ffffff;\">\n" +
    "            <div class=\"container\">\n" +
    "				<div class=\"row\">\n" +
    "				  <h1 class=\"page-header\" align=\"center\">\n" +
    "				      Benchmarks Management\n" +
    "				  </h1><br><br>\n" +
    "				  <div>\n" +
    "					<form class=\"form-horizontal\">\n" +
    "					  <div class=\"form-group\">	\n" +
    "						   <div class=\"table-responsive\">\n" +
    "							              <table class=\"table\" style=\"border: 1px groove; border-color:#F7F7F7\"\">\n" +
    "							                   <thead>\n" +
    "							                     <tr style=\"background-color:#96C2EE\">\n" +
    "							                        <td align=\"center\"><b>Benchmark Name</b></td>					                                                                  \n" +
    "							                        <td align=\"center\"><b>Analyzer</b></td>    \n" +
    "							                        <td align=\"center\"><b>Directory Name</b></td>	                                                        \n" +
    "							                     </tr>\n" +
    "							                   </thead>\n" +
    "							                   <tbody>\n" +
    "							                     <tr data-ng-repeat=\"benchmark in benchmarks\" ng-class=\"{'selected':$index == selectedRow}\" data-ng-click=\"setClickedRow($index,benchmark)\">\n" +
    "							                         <td align=\"center\">{{benchmark.name}}</td>	\n" +
    "							                         <td align=\"center\">{{benchmark.alayzerName}}</td>	\n" +
    "							                         <td align=\"center\">{{benchmark.directoryName}}</td>							                      				                       				                        \n" +
    "							                     </tr>                \n" +
    "							                   </tbody>\n" +
    "							             </table>                  \n" +
    "							 </div>\n" +
    "				       </div>\n" +
    "				       <div class=\"form-group\">\n" +
    "								<div class=\"col-xs-12\">\n" +
    "					  				<button class=\"btn btn-success btn-lg\" ng-click=\"changeToAddMode()\" type=\"submit\"><i class=\"fa fa-plus\" aria-hidden=\"true\"></i> New Bench</button>\n" +
    "					  				 &nbsp;&nbsp;\n" +
    "					  				<button class=\"btn btn-danger btn-lg\" ng-click=\"removeBenchmark()\" type=\"submit\"><i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i> Delete</button>\n" +
    "					  			</div>\n" +
    "					    </div>\n" +
    "				   </form>\n" +
    "				</div>\n" +
    "				 <p><font size=\"3\" color=\"red\">{{message}}</font></p>\n" +
    "				 <div ng-show=\"modeCreateBenchmark\">\n" +
    "				  <br><h2>Create New Benchmark Here </h2><br>\n" +
    "				   <div class=\"row\">\n" +
    "				     <form class=\"form-horizontal\" role=\"form\">\n" +
    "				       <div class=\"form-group\">				  				   			      \n" +
    "				      	  <label class=\"control-label col-sm-1\">Name</label>\n" +
    "				          <div class=\"col-sm-2\">\n" +
    "				          	<input class=\"form-control\" required type=\"text\" ng-model = \"newBenchmark.name\"/>\n" +
    "				          </div>\n" +
    "				       </div>\n" +
    "				       <div class=\"form-group\">\n" +
    "				         <label class=\"control-label col-sm-1\">Analyzer</label>\n" +
    "				         <div class=\"col-sm-3\">\n" +
    "					          <select class=\"form-control\" ng-model=\"newBenchmark.analyzerType\">\n" +
    "					          	<optgroup style=\"font-size:18px;\" label=\"Analyzers\">\n" +
    "					          		 <option ng-repeat=\"analyzer in analyzers\" value=\"{{analyzer.analyzer_Id}}\">{{analyzer.name}}</option>					         \n" +
    "					          	</optgroup>\n" +
    "					          </select>\n" +
    "					      </div>\n" +
    "					   </div>\n" +
    "					   <div class=\"form-group\">\n" +
    "					      <label class=\"control-label col-sm-1\">Directory</label>					      \n" +
    "					      <div class=\"col-sm-3\">\n" +
    "					     	 <select class=\"form-control\" ng-model=\"newBenchmark.directoryName\">\n" +
    "					     	    <optgroup style=\"font-size:18px;\" label=\"Directories\">\n" +
    "								   <option ng-repeat=\"dir in directories\" value=\"{{dir.name}}\">{{dir.name}}</option>\n" +
    "								</optgroup>\n" +
    "							 </select>\n" +
    "					      </div>				\n" +
    "					   </div>	     			      \n" +
    "				      <div class=\"form-group\">	\n" +
    "				     	 <div class=\"col-sm-2\"> \n" +
    "				      		<button class=\"btn btn-success\" ng-click=\"createBenchmark()\" type=\"submit\">Create</button>\n" +
    "				      		<button class=\"btn btn-success\" ng-click=\"backFromCreateMode()\">Back</button>\n" +
    "				      	 </div>\n" +
    "				      </div>\n" +
    "				    </form>\n" +
    "				  </div>\n" +
    "				 </div>\n" +
    "				  \n" +
    "				 <div ng-show=\"modeCreateQuery\">\n" +
    "				  <br><h2>Create Search Query and Select Relevant Documents here</h2><br>\n" +
    "				  <div class=\"row\">\n" +
    "				     <form class=\"form-horizontal\" role=\"form\" ng-submit=\"searchDocs()\">				  				   			      \n" +
    "				      <div class=\"form-group\">\n" +
    "				      	  <label class=\"control-label col-sm-1\">Query:</label>\n" +
    "				          <div class=\"col-sm-2\">\n" +
    "				          	<input class=\"form-control\" type=\"text\" ng-model = \"model.text\"/>\n" +
    "				          </div>\n" +
    "				          <label class=\"control-label col-sm-1\">Type:</label>\n" +
    "				          <div class=\"col-sm-2\">	\n" +
    "					          <select class=\"form-control\" ng-model=\"model.textSearchType\">\n" +
    "					          	<optgroup style=\"font-size:18px;\" label=\"Search Type\">\n" +
    "					          		<option value=\"regular\">Regular</option>\n" +
    "					          		<option value=\"fuzzy\">Fuzzy</option>\n" +
    "					          		<option value=\"phrase\">Phrase</option>\n" +
    "					          		<option value=\"range\">Range</option>\n" +
    "					          		<option value=\"prefix\">Prefix</option>\n" +
    "					          	</optgroup>\n" +
    "					          </select>\n" +
    "					      </div>					     \n" +
    "				      </div>			      \n" +
    "				      	\n" +
    "				      <div class=\"form-group\">\n" +
    "				     	 <div class=\"col-sm-2\"> \n" +
    "				      		<button class=\"btn btn-success\" type=\"submit\"><i class=\"fa fa-search\" aria-hidden=\"true\"></i> Search</button>\n" +
    "				      	 </div>\n" +
    "				      </div>\n" +
    "				  </form>\n" +
    "				 </div>\n" +
    "				</div>\n" +
    "				  <br><br>\n" +
    "				  <div ng-show=\"ready == true\" class=\"row\"> \n" +
    "				  <h2> Result: </h2><br>\n" +
    "					  <div class=\"table-responsive\">\n" +
    "					              <table class=\"table\" style=\"border: 1px groove; border-color:#F7F7F7\"\">\n" +
    "					                   <thead>\n" +
    "					                     <tr style=\"background-color:#96C2EE\">\n" +
    "					                        <td align=\"center\"><b>File name</b></td>				                                                                  \n" +
    "					                        <td align=\"center\"><b>Highlight</b></td>    \n" +
    "					                        <td align=\"center\"><b>Relevant</b></td> \n" +
    "					                        <td></td>                                        \n" +
    "					                     </tr>\n" +
    "					                   </thead>\n" +
    "					                   <tbody>\n" +
    "					                     <tr data-ng-repeat=\"doc in resultDocs\">\n" +
    "					                         <td align=\"center\">{{doc.fileName}}</td>					                       \n" +
    "					                         <td align=\"center\" ng-bind-html=\"doc.highlight\"></td>\n" +
    "					                         <td align=\"center\"> <input style=\"height: 22px; width:22px;\" type=\"checkbox\" name=\"relavant\" checked value=\"yes\"></td>\n" +
    "					                         <td align=\"center\"><button type=\"submit\" class=\"btn btn-primary\" ng-click=\"getPdf(doc.location)\"><i class=\"fa fa-file-pdf-o\" aria-hidden=\"true\"></i></button></td>\n" +
    "					                     </tr>                \n" +
    "					                   </tbody>\n" +
    "					             </table>                  \n" +
    "					  	 </div>\n" +
    "					  <h2> Rest: </h2><br>\n" +
    "					  <div class=\"table-responsive\">\n" +
    "					              <table class=\"table\" style=\"border: 1px groove; border-color:#F7F7F7\"\">\n" +
    "					                   <thead>\n" +
    "					                     <tr style=\"background-color:#96C2EE\">\n" +
    "					                        <td align=\"center\"><b>File name</b></td>					                                                                  			                           \n" +
    "					                        <td align=\"center\"><b>Relevant</b></td>  \n" +
    "					                        <td></td>                                       \n" +
    "					                     </tr>\n" +
    "					                   </thead>\n" +
    "					                   <tbody>\n" +
    "					                     <tr data-ng-repeat=\"doc in restDocs\">\n" +
    "					                         <td align=\"center\">{{doc.fileName}}</td>					                       \n" +
    "					                         <td align=\"center\"> <input style=\"height: 20px; width:20px;\" type=\"checkbox\" checklist-model=\"relevant.docs\" checklist-value=\"doc.uid\"></td>\n" +
    "					                         <td align=\"center\"><button type=\"submit\" class=\"btn btn-primary\" ng-click=\"getPdf(doc.location)\"><i class=\"fa fa-file-pdf-o\" aria-hidden=\"true\"></i></button></td>\n" +
    "					                     </tr>                \n" +
    "					                   </tbody>\n" +
    "					             </table>                  \n" +
    "					  	 </div>\n" +
    "					</div>\n" +
    "					\n" +
    "				   <div ng-show=\"ready == true\" class=\"row\">\n" +
    "				     <form class=\"form-horizontal\" role=\"form\" ng-submit=\"saveBenchmark()\">\n" +
    "						<div class=\"form-group\">\n" +
    "				     	 <div class=\"col-sm-2\"> \n" +
    "				      		<button class=\"btn btn-success btn-lg\" type=\"submit\">Add To Benchmark</button>\n" +
    "				         </div>\n" +
    "				        </div>\n" +
    "				     </form>\n" +
    "				   </div>\n" +
    "				   <div ng-show=\"showSuggestions == true\" class=\"row\">\n" +
    "				    <div class=\"col-sm-6\"> \n" +
    "				     <h2> Did you mean this? </h2><br>\n" +
    "					  <div class=\"table-responsive\">\n" +
    "					              <table class=\"table\" style=\"border: 1px groove; border-color:#F7F7F7\"\">\n" +
    "					                   <thead>\n" +
    "					                     <tr style=\"background-color:#96C2EE\">	                          \n" +
    "					                        <td align=\"center\"><b>Search</b></td>                                         \n" +
    "					                     </tr>\n" +
    "					                   </thead>\n" +
    "					                   <tbody>\n" +
    "					                     <tr data-ng-repeat=\"highlight in highlights\">				                        \n" +
    "					                         <td align=\"center\"><a ng-click=\"moreSearch(highlight.value)\">{{highlight.value}}</a></td>\n" +
    "					                     </tr>                \n" +
    "					                   </tbody>\n" +
    "					             </table>                  \n" +
    "					  	   </div>\n" +
    "					 </div>\n" +
    "				   </div>\n" +
    "				   <div ng-show=\"modeCreateQuery\">\n" +
    "				   	<button  class=\"btn btn-link btn-lg\" ng-click=\"changeShowQueriesAndRelevantDocs()\">{{message2}}</button><br>\n" +
    "				   </div>\n" +
    "				    <div ng-show=\"showQueriesAndRelevantDocs && modeCreateQuery\" class=\"table-responsive\">\n" +
    "					              <br><table class=\"table\" style=\"border: 1px groove; border-color:#F7F7F7\"\">\n" +
    "					                   <thead>\n" +
    "					                     <tr style=\"background-color:#96C2EE\">\n" +
    "					                        <td align=\"center\"><b>Search Query</b></td>					                                                                  \n" +
    "					                        <td align=\"center\"><b>Search Type</b></td> \n" +
    "					                        <td align=\"center\"><b>All Docs</b></td>\n" +
    "					                        <td align=\"center\"><b>Relevant</b></td>  				                      \n" +
    "					                        <!--<td></td>  -->\n" +
    "					                        <td></td>                                  \n" +
    "					                     </tr>\n" +
    "					                   </thead>\n" +
    "					                   <tbody>\n" +
    "					                     <tr data-ng-repeat=\"queryAndRelevantDocs in queriesAndRelevantDocs\" ng-class=\"{'selected':$index == selectedQueryRow}\" data-ng-click=\"setSelectedQuery($index,queryAndRelevantDocs)\">\n" +
    "					                         <td align=\"center\">{{queryAndRelevantDocs.searchModel.text}}</td>	\n" +
    "					                         <td align=\"center\">{{queryAndRelevantDocs.searchModel.textSearchType}}</td>\n" +
    "					                         <td align=\"center\">{{queryAndRelevantDocs.allBenchmarkDocuments}}</td>	\n" +
    "					                         <td align=\"center\">{{queryAndRelevantDocs.numOfRelevant}}</td>					            \n" +
    "					                         <!--<td align=\"center\"><button type=\"submit\" class=\"btn btn-primary\" ng-click=\"\"><i class=\"fa fa-list\" aria-hidden=\"true\"></i></button></td> -->		                       				        \n" +
    "					                         <td align=\"center\"><button type=\"submit\" class=\"btn btn-danger\" ng-click=\"removeQueryAndRelevantDocs(queryAndRelevantDocs.queryAndRelevantDocuments_Id)\"><i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i></button></td>		                       				                        \n" +
    "					                     </tr>                \n" +
    "					                   </tbody>\n" +
    "					             </table>                  \n" +
    "					 </div>\n" +
    "					 \n" +
    "					  <div ng-show=\"showQueriesAndRelevantDocs && modeCreateQuery && showQueryRelevantDocs\" class=\"row\">\n" +
    "					  <h2> Relevant: </h2><br>\n" +
    "					    <div class=\"table-responsive\">\n" +
    "					              <table class=\"table\" style=\"border: 1px groove; border-color:#F7F7F7\"\">\n" +
    "					                   <thead>\n" +
    "					                     <tr style=\"background-color:#96C2EE\">\n" +
    "					                        <td align=\"center\"><b>File name</b></td>				                                                                     \n" +
    "					                        <td align=\"center\"><b>Relevant</b></td> \n" +
    "					                        <td></td>                                        \n" +
    "					                     </tr>\n" +
    "					                   </thead>\n" +
    "					                   <tbody>\n" +
    "					                     <tr data-ng-repeat=\"doc in relevantDocs\">\n" +
    "					                         <td align=\"center\">{{doc.fileName}}</td>					                       \n" +
    "					                         <td align=\"center\"> <input style=\"height: 22px; width:22px;\" type=\"checkbox\" checklist-model=\"relavantForThisQuery.docs\" checked checklist-value=\"doc.uid\"></td>\n" +
    "					                         <td align=\"center\"><button type=\"submit\" class=\"btn btn-primary\" ng-click=\"getPdf(doc.location)\"><i class=\"fa fa-file-pdf-o\" aria-hidden=\"true\"></i></button></td>\n" +
    "					                     </tr>                \n" +
    "					                   </tbody>\n" +
    "					             </table>                  \n" +
    "					  	 </div>\n" +
    "					  	 <h2> Rest: </h2><br>\n" +
    "					    <div class=\"table-responsive\">\n" +
    "					              <table class=\"table\" style=\"border: 1px groove; border-color:#F7F7F7\"\">\n" +
    "					                   <thead>\n" +
    "					                     <tr style=\"background-color:#96C2EE\">\n" +
    "					                        <td align=\"center\"><b>File name</b></td>				                                                                     \n" +
    "					                        <td align=\"center\"><b>Relevant</b></td> \n" +
    "					                        <td></td>                                        \n" +
    "					                     </tr>\n" +
    "					                   </thead>\n" +
    "					                   <tbody>\n" +
    "					                     <tr data-ng-repeat=\"doc in restDocs\">\n" +
    "					                         <td align=\"center\">{{doc.fileName}}</td>					                       \n" +
    "					                         <td align=\"center\"> <input style=\"height: 22px; width:22px;\" type=\"checkbox\" checklist-model=\"relavantForThisQuery.docs\" checklist-value=\"doc.uid\"></td>\n" +
    "					                         <td align=\"center\"><button type=\"submit\" class=\"btn btn-primary\" ng-click=\"getPdf(doc.location)\"><i class=\"fa fa-file-pdf-o\" aria-hidden=\"true\"></i></button></td>\n" +
    "					                     </tr>                \n" +
    "					                   </tbody>\n" +
    "					             </table>                  \n" +
    "					  	 </div>\n" +
    "					  	<div class=\"row\">\n" +
    "				    		 <form class=\"form-horizontal\" role=\"form\" ng-submit=\"changeRelevantDocs()\">\n" +
    "								<div class=\"form-group\">\n" +
    "				     				 <div class=\"col-sm-2\"> \n" +
    "				      					<button class=\"btn btn-success btn-lg\" type=\"submit\">Change</button>\n" +
    "				      			   </div>\n" +
    "				      			  </div>\n" +
    "				    		 </form>\n" +
    "				   </div>\n" +
    "					 </div>\n" +
    "					 \n" +
    "				</div>\n" +
    "            </div>\n" +
    "      </div>\n" +
    "</div>");
}]);

angular.module("components/navbar.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("components/navbar.tpl.html",
    "     <div class=\"navbar navbar-default\">\n" +
    "        <div class=\"navbar-header\">\n" +
    "          <button type=\"button\" class=\"navbar-toggle\" ng-init=\"menuCollapsed = true\"\n" +
    "            ng-click=\"menuCollapsed = ! menuCollapsed\">\n" +
    "            <span class=\"sr-only\">Toggle navigation</span>\n" +
    "            <span class=\"icon-bar\"></span>\n" +
    "            <span class=\"icon-bar\"></span>\n" +
    "            <span class=\"icon-bar\"></span>\n" +
    "          </button>\n" +
    "          <div class=\"navbar-brand\">\n" +
    "            <i class=\"fa fa-line-chart\" aria-hidden=\"true\"></i>        \n" +
    "          </div>\n" +
    "        </div>\n" +
    "        <div class=\"collapse navbar-collapse\" collapse=\"menuCollapsed\">\n" +
    "          <ul class=\"nav navbar-nav\">\n" +
    "           <li ng-show=\"!isLoggedIn\" ui-sref-active=\"active\">\n" +
    "              <a href ui-sref=\"login\" style=\"font-size:16px\">\n" +
    "                <i class=\"fa fa-sign-in\" aria-hidden=\"true\"></i> \n" +
    "                Login          \n" +
    "              </a>\n" +
    "            </li>\n" +
    "             <li ng-show=\"!isLoggedIn\" ui-sref-active=\"active\">\n" +
    "              <a href ui-sref=\"register\" style=\"font-size:16px\">\n" +
    "                <i class=\"fa fa-user-plus\" aria-hidden=\"true\"></i>  \n" +
    "                Register          \n" +
    "              </a>\n" +
    "            </li>\n" +
    "            <li ng-show=\"isLoggedIn\" ui-sref-active=\"active\">\n" +
    "              <a href ui-sref=\"home\" style=\"font-size:16px\">\n" +
    "                <i class=\"fa fa-home\"></i>  \n" +
    "                Home          \n" +
    "              </a>\n" +
    "            </li>\n" +
    "            <li ng-show=\"isLoggedIn\" ui-sref-active=\"active\">\n" +
    "              <a href ui-sref=\"uploadDocuments\" style=\"font-size:16px\">\n" +
    "                 <i class=\"fa fa-folder-open-o\" aria-hidden=\"true\"></i>  \n" +
    "                 Directories         \n" +
    "              </a>\n" +
    "            </li>\n" +
    "            <li ng-show=\"isLoggedIn\" ui-sref-active=\"active\">\n" +
    "              <a href ui-sref=\"benchmark\" style=\"font-size:16px\">\n" +
    "                 <i class=\"fa fa-list\" aria-hidden=\"true\"></i>\n" +
    "                 Benchmarks\n" +
    "              </a>\n" +
    "            </li>\n" +
    "             <li ng-show=\"isLoggedIn\" ui-sref-active=\"active\">\n" +
    "              <a href ui-sref=\"analyzerManagement\" style=\"font-size:16px\">\n" +
    "                 <i class=\"fa fa-cog\" aria-hidden=\"true\"></i>\n" +
    "                 Analyzers\n" +
    "              </a>\n" +
    "            </li>\n" +
    "            <li ng-show=\"isLoggedIn\" ui-sref-active=\"active\">\n" +
    "              <a href ui-sref=\"testAnalyzer\" style=\"font-size:16px\">\n" +
    "                 <i class=\"fa fa-bar-chart\" aria-hidden=\"true\"></i>\n" +
    "                 Test Analyzer\n" +
    "              </a>\n" +
    "            </li>\n" +
    "            <li ng-show=\"role == 'Admin' && isLoggedIn\" ui-sref-active=\"active\">\n" +
    "              <a href ui-sref=\"management\" style=\"font-size:16px\">\n" +
    "                 <i class=\"fa fa-users\" aria-hidden=\"true\"></i>\n" +
    "                 Accounts\n" +
    "              </a>\n" +
    "            </li>\n" +
    "             <li ng-show=\"role == 'User' && isLoggedIn\" ui-sref-active=\"active\">\n" +
    "              <a href ui-sref=\"passwordChange\" style=\"font-size:16px\">\n" +
    "                 <i class=\"fa fa-key\" aria-hidden=\"true\"></i>\n" +
    "                 Change Password\n" +
    "              </a>\n" +
    "            </li>\n" +
    "            </ul>\n" +
    "            <ul class=\"nav navbar-nav navbar-right\">      \n" +
    "             <li ng-show=\"isLoggedIn\" ui-sref-active=\"active\">\n" +
    "              <a ng-click=\"logout()\" style=\"font-size:16px\">\n" +
    "               <i class=\"fa fa-sign-out\" aria-hidden=\"true\"></i>            \n" +
    "                 Logout\n" +
    "              </a>\n" +
    "            </li>                   \n" +
    "          </ul>\n" +
    "        </div>\n" +
    "      </div>");
}]);

angular.module("document/document.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("document/document.tpl.html",
    "<div ng-include=\"'components/navbar.tpl.html'\"></div>\n" +
    "<div class=\"top-content\">	\n" +
    "        <div class=\"inner-bg\" style=\"background-color:#ffffff;\">\n" +
    "            <div class=\"container\">\n" +
    "				<div class=\"row\">\n" +
    "				 	 <h1 class=\"page-header\" align=\"center\">\n" +
    "				      	Directories Management \n" +
    "				 	 </h1><br><br>\n" +
    "				 	 	<div>\n" +
    "					  	 	<form class=\"form-horizontal\">\n" +
    "					  	 	<div class=\"form-group\">					  	 								 \n" +
    "									 <div class=\"table-responsive\">								\n" +
    "						              <table class=\"table\" style=\"border: 1px groove; border-color:#F7F7F7\"\">\n" +
    "						                   <thead>					       \n" +
    "						                     <tr style=\"background-color:#96C2EE\">\n" +
    "						                        <td align=\"center\"><b>Name</b></td>\n" +
    "						                        <td ng-show=\"role == 'Admin'\" align=\"center\"><b>CreatedBy</b></td>				                        \n" +
    "						                        <td align=\"center\"><b>Creation Time</b></td>\n" +
    "						                        <td align=\"center\"><b>Files</b></td>				                                                                  			                           					                                         \n" +
    "						                     </tr>\n" +
    "						                   </thead>\n" +
    "						                   <tbody>\n" +
    "						                     <tr data-ng-repeat=\"dir in directories\" ng-class=\"{'selected':$index == selectedRow}\" data-ng-click=\"setClickedRow($index,dir)\">\n" +
    "						                         <td align=\"center\">{{dir.name}}</td>		\n" +
    "						                         <td ng-show=\"role == 'Admin'\" align=\"center\">{{dir.createdBy}}</td>	\n" +
    "						                         <td align=\"center\">({{dir.creationDate}})</td>	\n" +
    "						                         <td align=\"center\">({{dir.filesNumber}})</td>						                      		                       					                    \n" +
    "						                     </tr>                \n" +
    "						                   </tbody>\n" +
    "						              </table>                  \n" +
    "						  	        </div>\n" +
    "							</div>\n" +
    "							<div ng-hide=\"createMode || uploadMode\" class=\"form-group\">\n" +
    "								<div class=\"col-xs-12\">\n" +
    "					  				<button class=\"btn btn-success btn-lg\" ng-click=\"changeCreateMode()\" type=\"submit\"><i class=\"fa fa-plus\" aria-hidden=\"true\"></i> New Directory</button>\n" +
    "					  				 &nbsp;&nbsp;\n" +
    "					  				<button class=\"btn btn-primary btn-lg\" ng-click=\"changeToUploadMode()\" type=\"submit\"> <i class=\"fa fa-upload\" aria-hidden=\"true\"></i> Upload Files</button>\n" +
    "					  				 &nbsp;&nbsp;\n" +
    "					  				<button class=\"btn btn-danger btn-lg\" ng-click=\"removeDirectory()\" type=\"submit\"><i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i> Delete</button>\n" +
    "					  			</div>\n" +
    "					  		  </div>\n" +
    "					  		  <p><font size=\"3\" color=\"red\">{{message}}</font></p>\n" +
    "					  		  <br>		  		\n" +
    "					  	 	 <div ng-show=\"createMode\" class=\"form-group row\">						  	 	\n" +
    "						  	 	  <div class=\"col-xs-3\">			  	 \n" +
    "						  	 	    <label class=\"control-label\" style=\"font-size:18px;\">Directory Name:</label>				        	 \n" +
    "					          	    <input class=\"form-control\" type=\"text\" ng-model=\"directoryName\"/>\n" +
    "					          	  </div>				\n" +
    "				         	  </div>\n" +
    "				         	  <div ng-show=\"createMode\" class=\"form-group row\">\n" +
    "				         	   <div class=\"col-xs-3\">\n" +
    "					  				<button class=\"btn btn-primary\" ng-click=\"createNewDirectory()\" type=\"submit\">Create</button>\n" +
    "					  				<button class=\"btn btn-primary\" ng-click=\"changeCreateMode()\" type=\"submit\">Back</button>\n" +
    "					  		   </div>\n" +
    "					  		  </div>\n" +
    "							</form>\n" +
    "						</div>			 	 \n" +
    "				 	 	<h3 ng-show=\"uploadMode\">\n" +
    "				      		Upload new documents for analysis\n" +
    "				 	 	</h3>\n" +
    "				 	 	<div ng-show=\"uploadMode\">\n" +
    "					  	 	<form class=\"form-horizontal\" enctype=\"multipart/form-data\">\n" +
    "					  	 		<div class=\"form-group row\">\n" +
    "					  	 		 <div class=\"col-xs-3\">\n" +
    "					   				<input type=\"file\" webkitdirectory directory multiple ng-model=\"document.fileInput\" id=\"file\"/>\n" +
    "					   			 </div>\n" +
    "					   			</div>\n" +
    "					   			<div class=\"form-group row\">\n" +
    "					   			  <div class=\"col-xs-3\">\n" +
    "					  				<button class=\"btn btn-primary\" ng-click=\"uploadFile()\" type=\"submit\">Upload</button>\n" +
    "					  				<button class=\"btn btn-primary\" ng-click=\"backFromUploadMode()\" type=\"submit\">Back</button>\n" +
    "					  			  </div>\n" +
    "					  			</div>\n" +
    "							</form>\n" +
    "						</div>\n" +
    "				  	 <br>\n" +
    "				  	  <div ng-show=\"showFilesNames\" class=\"table-responsive\">								\n" +
    "						              <table class=\"table\" style=\"border: 1px groove; border-color:#F7F7F7\"\">\n" +
    "						                   <thead>					       \n" +
    "						                     <tr style=\"background-color:#96C2EE\">\n" +
    "						                        <td align=\"center\"><b>File Name</b></td>					                        					                      				                                                                  			                           					                                         \n" +
    "						                     </tr>\n" +
    "						                   </thead>\n" +
    "						                   <tbody>\n" +
    "						                     <tr data-ng-repeat=\"fileName in filesNames\">\n" +
    "						                         <td align=\"center\">{{fileName}}</td>								                         					                      		                       					                    \n" +
    "						                     </tr>                \n" +
    "						                   </tbody>\n" +
    "						              </table>                  \n" +
    "				     </div>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "	  </div>\n" +
    "</div>");
}]);

angular.module("home/home.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("home/home.tpl.html",
    "<div ng-include=\"'components/navbar.tpl.html'\"></div>\n" +
    "<br>\n" +
    "<div class=\"jumbotron\">\n" +
    "  <h1>Free Analyzer Testing Tool</h1><br>\n" +
    "\n" +
    "  <p class=\"lead\">\n" +
    "  	Welcome to free site where you can test performance of your analyzers  \n" +
    "  </p><br><br>\n" +
    "  \n" +
    "  <div class=\"btn-group\" ng-hide=\"isLoggedIn\">\n" +
    "    <a ui-sref=\"login\" class=\"btn btn-large btn-default\">\n" +
    "      <i class=\"fa fa-sign-in\" aria-hidden=\"true\"></i>\n" +
    "      Login\n" +
    "    </a>\n" +
    "    <a ui-sref=\"register\" class=\"btn btn-large btn-success\">\n" +
    "    <i class=\"fa fa-user-plus\" aria-hidden=\"true\"></i>\n" +
    "      Register\n" +
    "    </a>\n" +
    "\n" +
    "  </div>\n" +
    "\n" +
    "    <div class=\"btn-group\" ng-show=\"isLoggedIn\">\n" +
    "    		\n" +
    "    	 <a ng-show=\"role == 'Admin' || role == 'User'\" ui-sref=\"uploadDocuments\" class=\"btn btn-large btn-success\">\n" +
    "  				 <i class=\"fa fa-folder-open-o\" aria-hidden=\"true\"></i>\n" +
    "    			 Directories\n" +
    "    	 </a>\n" +
    "    	 \n" +
    "    	  <a  ui-sref=\"benchmark\" class=\"btn btn-large btn-success\">\n" +
    "  				  <i class=\"fa fa-list\" aria-hidden=\"true\"></i>\n" +
    "    			  Benchmarks\n" +
    "    	 </a>\n" +
    "    	 \n" +
    "    	 <a  ui-sref=\"analyzerManagement\" class=\"btn btn-large btn-success\">\n" +
    "  				  <i class=\"fa fa-bar-chart\" aria-hidden=\"true\"></i>\n" +
    "    			  Analyzers\n" +
    "    	 </a>\n" +
    "    	 \n" +
    "    	  <a  ui-sref=\"testAnalyzer\" class=\"btn btn-large btn-success\">\n" +
    "  				  <i class=\"fa fa-bar-chart\" aria-hidden=\"true\"></i>\n" +
    "    			  Test Analyzer\n" +
    "    	 </a>\n" +
    "\n" +
    "		    <a ng-show=\"role == 'Admin'\" ui-sref=\"management\" class=\"btn btn-large btn-success\">\n" +
    "		      <i class=\"fa fa-users\" aria-hidden=\"true\"></i>\n" +
    "		      Accounts\n" +
    "		    </a>\n" +
    "		    \n" +
    "		    <a ng-show=\"role == 'User'\" ui-sref=\"passwordChange\" class=\"btn btn-large btn-success\">\n" +
    "		      <i class=\"fa fa-key\" aria-hidden=\"true\"></i>\n" +
    "		      New Password\n" +
    "		    </a>    		   		        \n" +
    "    </div>\n" +
    "    <!--\n" +
    "    <ul class=\"nav nav-pills nav-stacked\">\n" +
    "	  <li class=\"active\"><a href=\"#\">Home</a></li>\n" +
    "	  <li><a href=\"#\">Menu 1</a></li>\n" +
    "	  <li><a href=\"#\">Menu 2</a></li>\n" +
    "	  <li><a href=\"#\">Menu 3</a></li>\n" +
    "	</ul>\n" +
    "	-->\n" +
    "    <br><br> <br><br> <br><br>\n" +
    "</div>");
}]);
