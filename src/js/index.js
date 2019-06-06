var personArr = [
    {
      name: "王港",
      src: "./src/img/1.png",
      des: "劲椎不好",
      sex: "m",
      age:18
    },
    {
      name: "王英",
      src: "./src/img/2.png",
      des: "我是谁",
      sex: "f",
      age:20
    },
    {
      name: "魏婉情",
      src: "./src/img/3.png",
      des: "我很好看",
      sex: "f",
      age:16
    },
    {
      name: "贾臻",
      src: "./src/img/4.png",
      des: "你没有见过我",
      sex: "m",
      age:17
    },
    {
      name: "刘飞翔",
      src: "./src/img/5.png",
      des: "瓜皮",
      sex: "m",
      age:25
    }
  ];

  
  function init(){
    RenderPage(personArr);
    // debounce( oInp,1000)
    oInp()
   
  }

  var oUl = document.getElementsByTagName('ul')[0];
  var oInput = document.getElementsByTagName('input')[0];
  var GfilterText = '';
  var filterSex = 'a';
  var state = {
    text:'',
    sex:'a'
  }
  // 数据渲染
  function RenderPage(data){
    var htmlStr = '';
    oUl.innerHTML = '';
    data.forEach(function(ele,index,self){
      htmlStr += '<li><img src="' +
      ele.src+'"><p class="name">' + 
      ele.name+'</p><p class="des">'+
      ele.des+'</p>'; 
    })
    oUl.innerHTML = htmlStr;
    
    // console.log(htmlStr)
  }

  // 添加行为
  function oInp(){
    oInput.oninput = debounce(function(){
      state.text = this.value;
      //  过滤之后得数组
      // var newArr =   filterArrByText(personArr,state.text);
      // var newArr2 = flterArrayBySex(newArr,state.sex);
     var action = {type:'text',value:this.value}
      RenderPage( lastFilterArr(personArr));
      // console.log(filterText)
      // console.log(newArr)

    },1000)
  }




// btn style

var oBtnArr = [].slice.call(document.getElementsByClassName('btn'));
var lastActiveBtn = oBtnArr[2]
oBtnArr.forEach(function(ele,index,self){
  // console.log(ele)
  ele.onclick = function () {
  
    // console.log(this)
    changeActive(this);
    state.sex = this.getAttribute('sex');
    // var newArr1 = filterArrByText(personArr,state.text);
    // var newArr2 = flterArrayBySex(newArr1,state.sex);
    RenderPage( lastFilterArr(personArr));
  }
  
})

function changeActive (curActiveBtn) {
  // oBtnArr.forEach(function(ele,index,self){
  //   ele.className = 'btn';
  // })
  lastActiveBtn.className = 'btn';
  curActiveBtn.className = 'btn active';
  lastActiveBtn = curActiveBtn;
}





  init()
