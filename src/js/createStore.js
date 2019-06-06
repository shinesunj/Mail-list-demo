// var store = {}
function createStore(initialState){
    var state = initialState || {}
    var list = [];
    function getState(type) {
        return state[type];
    }
    function dispatch(action){
        state[action.type] = action.value;
        //调用之前订阅过得函数
        list.forEach(function(ele,index){
            ele();
        })
    }
    function subscribe (func) {
        list.push(func)
    }
    return {
        getState:getState,
        dispatch:dispatch,
        subscribe:subscribe
    }
}
var store = ceateStore({
    text:'',
    sex:'a'
});
