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
var sub_choose=document.getElementById("sub_choose")
var clear_button=document.getElementById("clear")

var chinese_l=true
var english_l=false

var num1=0
var num2=0
var num3=0
var num4=0
var num5=0
clear_button.addEventListener("click",function(){
    sub_choose.style.display="none"
    num5=0
    main_sub_choose.style.display="none"
    num1=0
    other_sub_choose.style.display="none"
    num2=0
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
        sub_choose.style.display="flex"
        num5=1
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