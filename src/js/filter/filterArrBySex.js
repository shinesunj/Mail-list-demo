function flterArrBySex(personArr,sex){
    if(sex == 'a'){
      return personArr;
    }else{
      return personArr.filter(function(ele,index,self){
        return ele.sex == sex;
      })
    } 
  }