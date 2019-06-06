function filterArrByText(data,text){
    // console.log('aa')
    if(!text){
      return data;
    }else{
      return data.filter(function(ele,index,self){
          return ele.name.indexOf(text) != -1;
      })
    }
  }