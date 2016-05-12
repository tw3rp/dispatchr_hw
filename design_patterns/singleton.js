var TreeManager = {}; //contains all the trees is the singleton which is synced to the database on changes

/**
 *  onChange is a function which looks for any change in the client side and updated the database correspondingly
 *  @param {String} tree treeID
 *  @param {Object} oldValue Has an attribute name and a value
 *  @param {Object} newValue has an attribute name and new value
 *  @return {void}
 */
TreeManager.onChange(tree,oldValue,newValue){
  
}

/**
 *  onListen is an event listener on the client side which listens to any event from the server to update the change
 *  @param {String} event string representing the event
 *  @param {Object} oldValue Has an attribute name and a value
 *  @param {Object} newValue has an attribute name and new value
 *  @return {void}
 */
TreeManager.onEvent(event){

}

if (Meteor.isServer) {
  Trees.onC hange({
    //fire event 
  })
  
}


