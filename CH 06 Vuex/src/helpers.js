function createAction(mutationName){
    return function({commit}, value){
        commit(mutationName, value);
    } 
}
  
function createActions(mutations){
    const actions = {};
    mutations.forEach(mutationName => {
        actions[mutationName] = createAction(mutationName);
    });
    return actions;
}

export { createAction, createActions }