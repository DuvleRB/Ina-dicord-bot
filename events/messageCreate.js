const studiedword = {};

module.exports = {
  name:"messageCreate",
  once:false,
  execute(message){
    
    let teach = (teachWord) =>{
      var teachsplitedMessage = teachWord.substr(7);
        var pattern = /\s/g;
        var teachMessage = teachsplitedMessage.split("/")[0];
        var teachAnswer = teachsplitedMessage.split("/")[1];
        if(teachWord.substr(6).length==0){
          message.reply({content:`어딜 공백을 사용하는거에요!`});
        }else if(teachMessage in studiedword){
        message.reply({content:`죄송하지만, 그 단어는 이미 배운거에요!`});
        } else {
          studiedword[teachMessage] = teachAnswer;
          message.reply({content:`알겠어요! `+teachMessage+`(이)라고 하면 `+teachAnswer+`(이)라고 답하는거에요!!`});
        };
    } //이나봇 학습 함수

    let forget = (forgetWord) =>{
      var forgetSplitedMessage = forgetWord.substr(7);
      if(forgetSplitedMessage in studiedword){
        message.reply({content:`알겠어요.. `+forgetSplitedMessage+`(이)라는 단어에 더이상 `+studiedword[forgetSplitedMessage]+`(이)라고 답하지 않을게요..`});
        delete studiedword[forgetSplitedMessage];
      }else{
        message.reply({content:`죄송하지만, 그 단어는 배우지 않은거에요..`});
      }
    }//이나봇 잊음 함수

    let teachlist = () =>{
      var teachWordList = "";
      if(Object.keys(studiedword).length == 0){
        message.reply({content:`이나는 아직 배운게 없는거에요!`});
      }else{
        for(key in studiedword){
          teachWordList = teachWordList + "단어 : "+key+"\n답장 : "+studiedword[key]+"\n\n"
        }
        message.reply({content:teachWordList});
      }
    }//이나봇 학습 리스트 함수
    
    if(message.content.startsWith("이나야")){
      const msg = message.content.substr(4);


    switch(true){
      case msg==='' :
        message.reply({content:`부르셨어요?`})
        break;

      case msg.includes('안녕') :
        message.reply({content:`안녕한거에요!`});
        break;

      case msg.includes('잘가') :
        message.reply({content:`안녕히가는거에요!`});
        break;
      
      case msg.includes('배워') :
        teach(message.content)
        break;
      
      case msg.includes('배움목록') :
        teachlist();
        break;

      case msg in studiedword :
        message.reply({content:studiedword[msg]});
        break;

      case msg.includes('잊어') :
        forget(message.content);
        break;
    
      case msg.includes('뭐해') :
        message.reply({content:`${message.author}님과 대화하는거에요!`})//message.author(수정 완료했지만, 유저를 멘션함.)
        break;
      
      default :
        message.reply({content:`믕?`})
    }//이나봇 응답
   }       
  }
}