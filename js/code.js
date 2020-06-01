var closeAboutMe = `<span class="am_close"></span>`;
var generalInfo = `<div class="minfo_bg">PERSONAL INFORMATION:</div>
<div class="lineblock">
    <div class="lineb">Full name:</div>
    <div class="val1">Kristine Agafonova</div>
</div>
<div class="lineblock">
    <div class="lineb">Date of Birth:</div>
    <div class="val1">June 16, 1988</div>
</div>
<div class="lineblock">
    <div class="lineb">Current city:</div>
    <div class="val1">Lyublino, Moscow, Russia</div>
</div>
<div class="lineblock">
    <div class="lineb">Nationality:</div>
    <div class="val1">Ukrainian</div>
</div>
<div class="lineblock">
    <div class="lineb">Family status:</div>
    <div class="val1">Single</div>
</div>
<div class="lineblock">
    <div class="lineb">Number Phone:</div>
    <div class="val1">+7 968 722 16 99</div>
</div>
<div class="lineblock">
    <div class="lineb">E-mail address:</div>
    <div class="val1">kristineAgafonova@gmail.com</div>
</div>`;

var education = `<div class="minfo_bg">EDUCATION:</div>
<div class="lineblock">
    <div class="lineb">University: Dniprodzerzhinsk Technical State University, 2012</div>
    <div class="val1">Specialist degree</div>
</div>
<div class="lineblock">
    <div class="lineb">Private IT Academy «Step», November 2013 – 2016 </div>
    <div class="val1">«Computer graphics and design»</div>
</div>
<div class="lineblock">
    <div class="lineb">Private IT Academy «Step», September 2014 – November 2015 </div>
    <div class="val1">«Development of WEB-Projects»</div>
</div>`

var experience = `<div class="minfo_bg">WORK EXPERIENCE:</div>
<div class="block_bg">
   <div class="wide">2015 Prepress Graphic Designer, Cantsopttorg LLC.</div>
   <div class="main_content">- Adapting design layouts per specification;<br>
   - Development and preparation of advertising original-layouts;<br>
   - Color correction, color separation, adjustment of customer files, layout changes;<br>
   - Trapping.</div>
</div>
<div class="block_bg">
   <div class="wide">2012 - 2015 Graphic Designer, Slavprom LLC/Ruban PE.</div>
   <div class="main_content">- Development and preparing advertising original-layouts per specification;<br>
   - Matching original-layouts;<br>
   - Color correction, color separation, adjustment of customer files, layout changes.
   </div>
</div>
<div class="block_bg">
   <div class="wide">2011 Designer, Dniprovsk Holding Company.</div>
   <div class="main_content">- Adapting design layouts per specification; <br>
   - Color correction, color separation, adjustment of customer files, layout changes.</div>
</div>
<div class="block_bg">
   <div class="wide">2011 Freelance</div>
   <div class="main_content">- Development and preparation of advertising original-layouts.<br><br><br>
   </div>
</div>`

function showAboutMe(content){
    $('#aboutMe').show();
    $('#aboutMe').html(closeAboutMe + content);
}

$('#generalInfo').click(function(){
    showAboutMe(generalInfo)
});

$('#education').click(function(){
    showAboutMe(education)    
});

$('#experience').click(function(){
    showAboutMe(experience)    
});

// $('.am_close').on('click', function(event){
//     console.log('zdtjzjt')
//     $('#aboutMe').hide();
// });

$('.am_close').click(function(event){
    console.log('zdtjzjt')
    $('#aboutMe').hide();
});