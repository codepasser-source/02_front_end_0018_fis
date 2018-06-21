class Header

  console.log ">>>>>>>>>>>>>>Header"
  constructor: ()->
    @initialize()
    @bindEvent()

  initialize: ->
    console.log ">>>>>>>>>>>>>>Header->initialize"
    tpl = __inline('template/view.hbst')
    context = {title: "My New Post", body: "This is my first post!"}
    console.log tpl(context)
    console.log $(".widgets-header-placeholder")
    $(".widgets-header-placeholder").append(tpl(context));

  bindEvent: ->
    console.log ">>>>>>>>>>>>>>Header->bindEvent"


module.exports = Header