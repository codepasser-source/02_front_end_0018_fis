class ComponentLoader

  console.log ">>>>>>>>>>>>>>ComponentLoader"
  constructor: ()->
    @initialize()
    @bindEvent()

  initialize: ->
    console.log ">>>>>>>>>>>>>>ComponentLoader->initialize"

  bindEvent: ->
    console.log ">>>>>>>>>>>>>>ComponentLoader->bindEvent"


module.exports = ComponentLoader