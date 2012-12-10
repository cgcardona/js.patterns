'use strict';
class Halloween{
  constructor(){
  }

  trickOrTreat(mode?:string){
    if(mode == 'trick')
      alert('BOO!!!');
    else if(mode == 'treat')
      console.log('goodness');
    else
    {
      if(Math.random() < 0.5)
       this.trickOrTreat('trick'); 
      else
        console.log('goodness');
    }
  }
}
