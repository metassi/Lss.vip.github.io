var main_sub_btn=document.getElementById("main_sub_btn")
var other_sub_btn=document.getElementById("other_sub_btn")
var main_sub_choose=document.getElementById("main_sub_choose")
var other_sub_choose=document.getElementById("other_sub_choose")
var chinese_language=document.getElementById("chinese")
var english_language=document.getElementById("english")
var ut_text=document.getElementById("ut_text")
var link_button=document.getElementById("home")
var school_link=document.getElementById("school_link")
var subject_text=document.getElementById("subject_text")
var subject_text2=document.getElementById("subject_text2")
var subject_chinese=document.getElementById("subject_chinses_text")
var subject_english=document.getElementById("subject_english_text")
var subject_math=document.getElementById("subject_math_text")
var subject_phys=document.getElementById("subject_phys_text")
var subject_chem=document.getElementById("subject_chem_text")
var subject_bio=document.getElementById("subject_bio_text")
var subject_chis=document.getElementById("subject_chis_text")
var subject_hist=document.getElementById("subject_hist_text")
var subject_geo=document.getElementById("subject_geo_text")
var link_space=document.getElementById("link_space")
var function_button=document.getElementById('function_button')
var function_list=document.getElementById('function_list')
var ut_button=document.getElementById('ut_button')
var grammar_ai_button=document.getElementById('grammar_ai_button')
var grammar_ai=document.getElementById('grammar_ai')
var sub_choose=document.getElementById("sub_choose")
var clear_button=document.getElementById("clear")
var grammar_ai_input=document.getElementById('grammar_ai_input')
var grammar_ai_search_button=document.getElementById('grammar_ai_search_button')
var translate_text=document.getElementById("translate")
var future_text=document.getElementById("future")
var continuous_text=document.getElementById("continuous")
var past_text=document.getElementById("past")
var past_perfect_text=document.getElementById("past_perfect")
var participle_text=document.getElementById("participle")
var gerunds_text=document.getElementById("gerunds")

var azimuth_ai_search_button=document.getElementById("azimuth_ai_search_button")
var azimuth_ai_input=document.getElementById("azimuth_ai_input")
var azimuth_ai_output=document.getElementById("azimuth_ai_output")
var azimuth_ai_button=document.getElementById("azimuth_ai_button")
var azimuth_ai_show_void=document.getElementById("azimuth_ai_show_void")
var azimuth_text=document.getElementById("azimuth_text")
var chinese_l=true
var english_l=false

var num1=0
var num2=0
var num3=0
var num4=0
var num5=0
var num6=0
var num7=0

clear_button.addEventListener("click",function(){
    sub_choose.style.display="none"
    num5=0
    main_sub_choose.style.display="none"
    num1=0
    other_sub_choose.style.display="none"
    num2=0
    grammar_ai.style.display="none"
    num6=0
    azimuth_ai_show_void.style.display="none"
    num7=0
    translate_text.innerText=""
    future_text.innerText=""
    continuous_text.innerText=""
    past_text.innerText=""
    past_perfect_text.innerText=""
    participle_text.innerText=""
    gerunds_text.innerText=""
})
function_button.addEventListener("click",function(){
    if (num4==0){
        function_list.style.display="flex"
        num4=1
        }
    else{
        function_list.style.display="none"
        num4=0
        }
})

ut_button.addEventListener("click",function(){
    if (num5==0){
        grammar_ai.style.display="none"
        num6=0
        sub_choose.style.display="flex"
        num5=1
        azimuth_ai_show_void.style.display="none"
        num7=0
        
    }
    else{
        sub_choose.style.display="none"
        num5=0
    }
})

main_sub_btn.addEventListener("click",function(){
    //window.location="main_sub_page.html"
    if (num2==1){
        other_sub_choose.style.display="none"
        main_sub_choose.style.display="flex"
        num2=0
        num1=1
    }
    else if (num1==0){
        other_sub_choose.style.display="none"
        main_sub_choose.style.display="flex"
        num1=1
    }
    else{
        main_sub_choose.style.display="none"
        num1=0
        }
            

    })
other_sub_btn.addEventListener("click", function(){
        //window.location="other_sub_page.html"
    if (num1==1){
        other_sub_choose.style.display="flex"
        main_sub_choose.style.display="none"
        num1=0
        num2=1
    }
    else if (num2==0){
        main_sub_choose.style.display="none"
        other_sub_choose.style.display="flex"
        num2=1
    }
    else{
        other_sub_choose.style.display="none"
        num2=0
    }
})
link_button.addEventListener("click",function(){
    if (num3==0){
        link_space.style.display="flex"
        num3=1
    }
    else{
        link_space.style.display="none"
        num3=0
    }
            
})
if (chinese_l){
    chinese_language.style.backgroundColor="green"
    english_language.style.backgroundColor="white"
    ut_text.innerText="統測"
    link_button.innerText="聯結"
    main_sub_btn.innerText="主科"
    other_sub_btn.innerText="副科"
    school_link.innerText="學校網站"
    subject_text.innerText="科目"
    subject_text2.innerText="科目"
    subject_chinese.innerText="中文"
    subject_english.innerText="英文"
    subject_math.innerText="數學"
    subject_phys.innerText="物理"
    subject_chem.innerText="化學"
    subject_bio.innerText="生物"
    subject_chis.innerText="中史"
    subject_hist.innerText="世史"
    subject_geo.innerText="地理"
    function_button.innerText="功能表"
    ut_button.innerText="統測溫習"
    clear_button.innerText="清除"
    azimuth_ai_button.innerText='方位角 AI'
    azimuth_text.innerText='--------------------方位角 AI--------------------'
}
chinese_language.addEventListener("click",function(){
    chinese_l=true
    chinese_language.style.backgroundColor="green"
    english_language.style.backgroundColor="white"
    ut_text.innerText="統測"
    link_button.innerText="聯結"
    main_sub_btn.innerText="主科"
    other_sub_btn.innerText="副科"
    school_link.innerText="學校網站"
    subject_text.innerText="科目"
    subject_text2.innerText="科目"
    subject_chinese.innerText="中文"
    subject_english.innerText="英文"
    subject_math.innerText="數學"
    subject_phys.innerText="物理"
    subject_chem.innerText="化學"
    subject_bio.innerText="生物"
    subject_chis.innerText="中史"
    subject_hist.innerText="世史"
    subject_geo.innerText="地理"
    function_button.innerText="功能表"
    ut_button.innerText="統測溫習"
    clear_button.innerText="清除"
    azimuth_ai_button.innerText='方位角 AI'
    azimuth_text.innerText='--------------------方位角 AI--------------------'
})


english_language.addEventListener("click",function(){
    english_l=false
    chinese_language.style.backgroundColor="white"
    english_language.style.backgroundColor="green"
    ut_text.innerText="UT"
    link_button.innerText="Links"
    main_sub_btn.innerText="Main Subject"
    other_sub_btn.innerText="Other Subject"
    school_link.innerText="School Website"
    subject_text.innerText="Subject"
    subject_text2.innerText="Subject"
    subject_chinese.innerText="Chinese"
    subject_english.innerText="English"
    subject_math.innerText="Math"
    subject_phys.innerText="Phys"
    subject_chem.innerText="Chem"
    subject_bio.innerText="Bio"
    subject_chis.innerText="Chis"
    subject_hist.innerText="Hist"
    subject_geo.innerText="Geo"
    function_button.innerText="Function"
    ut_button.innerText="UT Revision"
    clear_button.innerText="Clear"
    azimuth_ai_button.innerText='Azimuth AI'
    azimuth_text.innerText='Azimuth AI'
})
//subject button
subject_english.addEventListener("click",function(){
    window.location="ut_english.html"
})
subject_chinese.addEventListener("click",function(){
    window.location="ut_chinese.html"
})
subject_math.addEventListener("click",function(){
    window.location="ut_math.html"
})
subject_phys.addEventListener("click",function(){
    window.location="ut_phys.html"
})
subject_chem.addEventListener("click",function(){
    window.location="ut_chem.html"
})
subject_bio.addEventListener("click",function(){
    window.location="ut_bio.html"
})
subject_chis.addEventListener("click",function(){
    window.location="ut_chis.html"
})
subject_hist.addEventListener("click",function(){
    window.location="ut_hist.html"
})
subject_geo.addEventListener("click",function(){
    window.location="ut_geo.html"
})


//other function
grammar_ai_button.addEventListener("click",function(){
    if (num6==0){
        sub_choose.style.display="none"
        num5=0
        grammar_ai.style.display="flex"
        num6=1
        azimuth_ai_show_void.style.display="none"
        num7=0
    }
    else{
        grammar_ai.style.display="none"
        num6=0
    }
})
var word=["agree","choose","learn","proceed","tend","aim","decide","need","promise","volunteer",'ask','fail','plan','refuse','want','attempt','hope','prepare','seem','wish',
'admit', 'deny' ,'finish','mind','recommend','appreciate','dislike','imagine','miss','resist','avoid','enjoy','keep','practise','risk','consider','feel','mention','prevent','suggest','go','be']
// future = will + input
var continuous=["agreeing","choosing","learning","proceeding","tending","aiming","deciding","needing","promising","volunteering",'asking','failing','planning','refusing','wanting','attempting','hoping','preparing','seeming','wishing'
,'admitting', 'denying' ,'finishing','minding','recommending','appreciating','disliking','imagining','missing','resisting','avoiding','enjoying','keeping','practising','risking','considering','feeling','mentioning','preventing','suggesting','going','being']

var past=["agreed","chose","learnt","proceeded","tended","aimed","decided","needed","promised","volunteered",'asked','failed','planned','refused','wanted','attempted','hoped','prepared','seemed','wished',
'admitted', 'denied' ,'finished','minded','recommended','appreciated','disliked','imagined','missed','resisted','avoided','enjoyed','kept','practised','risked','considered','felt','mentioned','prevented','suggested','went','was/were']
//past_perfect = had + participle

var participle=["agreed","chosen","learnt","proceeded","tended","aimed","decided","needed","promised","volunteered",'asked','failed','planned','refused','wanted','attempted','hoped','prepared','seemed','wished',
'admitted', 'denied' ,'finished','minded','recommended','appreciated','disliked','imagined','missed','resisted','avoided','enjoyed','kept','practised','risked','considered','felt','mentioned','prevented','suggested','gone','been']



var gerunds=["To-infinitives","To-infinitives","To-infinitives","To-infinitives","To-infinitives","To-infinitives","To-infinitives","To-infinitives","To-infinitives","To-infinitives","To-infinitives","To-infinitives","To-infinitives","To-infinitives","To-infinitives","To-infinitives","To-infinitives","To-infinitives","To-infinitives","To-infinitives",
"Gerunds","Gerunds","Gerunds","Gerunds","Gerunds","Gerunds","Gerunds","Gerunds","Gerunds","Gerunds","Gerunds","Gerunds","Gerunds","Gerunds","Gerunds","Gerunds","Gerunds","Gerunds","Gerunds","Gerunds","no-result","no-result"]



var translate=["同意 ( verb / 動詞 )","選擇 ( verb / 動詞 )","學習 ( verb / 動詞","繼續 ( verb / 動詞 )" ,"趨向 ( verb / 動詞 )","目的 ( verb / 動詞 )","決定 ( verb / 動詞 )","需要 ( verb / 動詞 )","承諾 ( verb / 動詞 )","志願(動詞)/志願者(名詞)","問 ( verb / 動詞 )","失敗 ( verb / 動詞 )","計劃 ( 動詞 /名詞)","拒絕 ( verb / 動詞 )","想 ( verb / 動詞 )","試圖 ( 動詞 / 名詞)","希望 ( 動詞 / 名詞)","準備 ( verb / 動詞 )","似乎 ( verb / 動詞 )","希望 ( verb / 動詞 )",
"承認 ( verb / 動詞 )","否定 ( verb / 動詞 )","結束 ( verb / 動詞","在乎 ( verb / 動詞 )" ,"推薦 ( verb / 動詞 )","欣賞 ( verb / 動詞 )","不喜歡 ( verb / 動詞 )","想像 ( verb / 動詞 )","錯過 ( verb / 動詞 )","抵抗 ( verb / 動詞 )","避免 ( verb / 動詞 )","享受 ( verb / 動詞 )","保持 ( 動詞 /名詞)","實踐 ( verb / 動詞 )","冒險(動詞)/風險(名詞)","考慮 ( verb / 動詞 )","感覺 ( verb / 動詞 )","提到 ( verb / 動詞 )","避免 ( verb / 動詞 )","建議 ( verb / 動詞 )","走 ( verb / 動詞 )","是 ( 助動詞 / 動詞 )"]





grammar_ai_search_button.addEventListener("click",function(){
    var num_g=0
    var input_text=grammar_ai_input
    for (var i=0;i<=word.length;i++){
        if (grammar_ai_input.value==word[i])
        {
            var translate_result=translate[i]
            var future_result=" will + "+input_text.value
            var continuous_result=continuous[i]
            var past_result=past[i]
            var participle_result=participle[i]
            var past_perfect_result=" had + "+participle[i]
            var gerunds_result=gerunds[i]

            translate_text.innerText="   "+translate_result
            future_text.innerText=future_result
            continuous_text.innerText="   "+continuous_result
            past_text.innerText="   "+past_result
            past_perfect_text.innerText=past_perfect_result
            participle_text.innerText="   "+participle_result
            gerunds_text.innerText="   "+gerunds_result
            num_g=1


        }
    }
    if (num_g==0){
        translate_text.innerText="  no-result"
        future_text.innerText="  no-result"
        continuous_text.innerText="  no-result"
        past_text.innerText="  no-result"
        past_perfect_text.innerText="  no-result"
        participle_text.innerText="  no-result"
        gerunds_text.innerText="  no-result"
    }
    
})



azimuth_ai_button.addEventListener("click",function(){
    if (num7==0){
        azimuth_ai_show_void.style.display="flex"
        num7=1
        sub_choose.style.display="none"
        num5=0
        grammar_ai.style.display="none"
        num6=0
    }
    else{
        azimuth_ai_show_void.style.display="none"
        num7=0
    }
    
})

azimuth_ai_search_button.addEventListener("click",function(){
    if (azimuth_ai_input.value[0]>=0 ){
        if (azimuth_ai_input.value<=89){
            var answer="N "+azimuth_ai_input.value+"° E"
            azimuth_ai_output.innerText=answer
        }
        else if (azimuth_ai_input.value==90){
            var answer="E"
            azimuth_ai_output.innerText=answer
        }
        else if (azimuth_ai_input.value>90&&azimuth_ai_input.value<180){
            var answer="S "+(90-(azimuth_ai_input.value-90))+"° E"
            azimuth_ai_output.innerText=answer
        }
        else if (azimuth_ai_input.value==180){
            var answer="S"
            azimuth_ai_output.innerText=answer
        }
        else if (azimuth_ai_input.value>180&&azimuth_ai_input.value<270){
            var answer="S "+(azimuth_ai_input.value-180)+"° W"
            azimuth_ai_output.innerText=answer
        }
        else if (azimuth_ai_input.value==270){
            var answer="W"
            azimuth_ai_output.innerText=answer
        }
        else if (azimuth_ai_input.value>270&&azimuth_ai_input.value<360){
            var answer="N "+(90-(azimuth_ai_input.value-270))+"° W"
            azimuth_ai_output.innerText=answer
        }
        else if (azimuth_ai_input.value==360){
            var answer="N"
            azimuth_ai_output.innerText=answer
        }
    }
    else{
        if(azimuth_ai_input.value[0]=="N" || azimuth_ai_input.value[0]=="n"){


            for (var i=1;i<=(azimuth_ai_input.value).length;i++){
                if (azimuth_ai_input.value[i]=="e" || azimuth_ai_input.value[i]=="E"){
                    var e=true
                }
                else if (azimuth_ai_input.value[i]=="w" || azimuth_ai_input.value[i]=="W"){
                    var w=true
                }

            }

            if(e==true && (azimuth_ai_input.value).length==3){
                var answer=azimuth_ai_input.value[1]
                azimuth_ai_output.innerText=answer+"°"
                e=false
            }
            else if(e==true && (azimuth_ai_input.value).length==4){
                var answer=(parseInt(azimuth_ai_input.value[1])*10)+parseInt(azimuth_ai_input.value[2]) 
                azimuth_ai_output.innerText=answer+"°"
                e=false
            }
            else if(w==true && (azimuth_ai_input.value).length==3){
                var answer=(90-(parseInt(azimuth_ai_input.value[1])))+270
                azimuth_ai_output.innerText=answer+"°"
                w=false
            }
            else if(w==true && (azimuth_ai_input.value).length==4){
                var answer=(90-((parseInt(azimuth_ai_input.value[1])*10)+parseInt(azimuth_ai_input.value[2])))+270
                azimuth_ai_output.innerText=answer+"°"
                w=false
            }
            
        }
        else if(azimuth_ai_input.value[0]=="s" || azimuth_ai_input.value[0]=="S"){


            for (var i=1;i<=(azimuth_ai_input.value).length;i++){
                if (azimuth_ai_input.value[i]=="e" || azimuth_ai_input.value[i]=="E"){
                    var e=true
                }
                else if (azimuth_ai_input.value[i]=="w" || azimuth_ai_input.value[i]=="W"){
                    var w=true
                }

            }

            if(e==true && (azimuth_ai_input.value).length==3){
                var answer=(90-(parseInt(azimuth_ai_input.value[1])))+90
                azimuth_ai_output.innerText=answer+"°"
                e=false
            }
            else if(e==true && (azimuth_ai_input.value).length==4){
                var answer=(90-(parseInt(azimuth_ai_input.value[1])*10+parseInt(azimuth_ai_input.value[2])))+90
                azimuth_ai_output.innerText=answer+"°"
                e=false
            }
            else if(w==true && (azimuth_ai_input.value).length==3){
                var answer=(parseInt(azimuth_ai_input.value[1]))+180
                azimuth_ai_output.innerText=answer+"°"
                w=false
            }
            else if(w==true && (azimuth_ai_input.value).length==4){
                var answer=(parseInt(azimuth_ai_input.value[1])*10+parseInt(azimuth_ai_input.value[2]))+180
                azimuth_ai_output.innerText=answer+"°"
                w=false
            }
            
        }

    }


})
