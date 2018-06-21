class Login

  console.log ">>>>>>>>>>>>>>Login"
  constructor: ()->
    @initialize()
    @bindEvent()

  initialize: ->
    console.log ">>>>>>>>>>>>>>Login->initialize"
    tpl = __inline('template/dialog.hbst')
    context = {title: "My New Post", body: "This is my first post!"}
    console.log tpl(context)

  bindEvent: ->
    console.log ">>>>>>>>>>>>>>Login->bindEvent"


module.exports = Login