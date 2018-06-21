#
# name : application.scss
#
# version 0.1 - EllenChia - 初版 <br>
#
class Application

  constructor: ()->
    @initialize()
    @bindEvent()

  initialize: ->
    _ComponentLoader = require("askdog:/components/helpers/loader/main");
    new _ComponentLoader();
    _Login = require("askdog:/components/login/view");
    new _Login();
    _Header = require("askdog:/widgets/header/view");
    new _Header();

  bindEvent: ->
    console.log ">>>>>>>>>>>>>>Application->bindEvent"


module.exports = Application