
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
        <div class="val1">Novomoskovsk, Dnipro, Ukraine</div>
    </div>
    <div class="lineblock">
        <div class="lineb">Nationality:</div>
        <div class="val1">Ukrainian</div>
    </div>
    <div class="lineblock">
        <div class="lineb">Family status:</div>
        <div class="val1">Maried</div>
    </div>
    <div class="lineblock">
        <div class="lineb">Number Phone:</div>
        <div class="val1">+38 097 178 23 90</div>
    </div>
    <div class="lineblock">
        <div class="lineb">E-mail address:</div>
        <div class="val1">kristineAgafonova@gmail.com</div>
    </div>`;

var education = `<div class="minfo_bg">EDUCATION:</div>

    <div class="block_bg">
        <div class="educationYear">2012</div>
        <div class="contentControl">
            <div class="collapse">+</div>
            <div class="expand">-</div>
        </div>   
        <div class="conteiner">
            <div class="title">University: Dniprodzerzhinsk Technical State University</div>
            <div class="content">
                Specialist degree
            </div>
        </div>
    </div>

    <div class="block_bg">
        <div class="educationYear">November 2013 – 2016</div>
        <div class="contentControl">
            <div class="collapse">+</div>
            <div class="expand">-</div>
        </div>   
        <div class="conteiner">
            <div class="title">Private IT Academy «Step»</div>
            <div class="content">
                Computer graphics and design    
            </div>
        </div>
    </div>

    <div class="block_bg">
        <div class="educationYear">September 2014 – November 2015</div>
        <div class="contentControl">
            <div class="collapse">+</div>
            <div class="expand">-</div>
        </div>   
        <div class="conteiner">
            <div class="title">Private IT Academy «Step»</div>
            <div class="content">
                Development of WEB-Projects    
            </div>
        </div>
    </div>
    `

var experience = `<div class="minfo_bg">WORK EXPERIENCE:</div>
<div class="block_bg">
   <div class="year">2022</div>
   <div class="contentControl">
    <div class="collapse">+</div>
    <div class="expand">-</div>
   </div>   
   <div class="conteiner">
    <div class="title">Administration internet-stores of online-platforms EPICENTR, ROZETKA</div>
    <div class="content">
        - Administration and coding of online-platforms EPICENTR, ROZETKA
    </div>
   </div>
</div>

<div class="block_bg">
   <div class="year">2020-2022</div>
   <div class="contentControl">
    <div class="collapse">+</div>
    <div class="expand">-</div>
   </div>   
   <div class="conteiner">
    <div class="title">Prepress Designer, TRELAX PACK LLC, Kropivniczkij</div>
    <div class="content">
        - Full cycle from design to end-products;<br>
        - Acceptance and revision of source files;<br>
        - Color correction layouts per standart;<br>
        - Prepress layouts per specification of flexographic and Rotogravure printing;<br>
        - Color correction, color separation, adjustment of clients' files, layout changes;<br>
        - СolorProof output;<br>
        - Drawing and revision of source layouts according to client's samples.<br>
        - Сooperation with repro studios, output of forms (cliches).
    </div>
   </div>
</div>

<div class="block_bg">
   <div class="year">2016-2020</div>
   <div class="contentControl">
    <div class="collapse">+</div>
    <div class="expand">-</div>
   </div>   
   <div class="conteiner">
    <div class="title">Prepress Designer, Synergy Group LLC, Dnipro</div>
    <div class="content">
        - Full cycle from design to end-products;<br>
        - Acceptance and revision of source files. Matching original-layouts;<br>
        - Color correction layouts per standart;<br>
        - Prepress layouts per specification of flexographic printing;<br>
        - Color correction, color separation, adjustment of clients' files, layout changes;<br>
        - СolorProof output;<br>
        - Drawing and revision of source layouts according to client's samples.
    </div>
   </div>
</div>

<div class="block_bg">
   <div class="year">2016</div>
   <div class="contentControl">
    <div class="collapse">+</div>
    <div class="expand">-</div>
   </div>   
   <div class="conteiner">
    <div class="title">Prepress Graphic Designer, Cantsopttorg LLC</div>
    <div class="content">
        - Adapting design layouts per specification;</br>
        - Development and preparation of original-layouts;<br>
        - Color correction, color separation, adjustment of clients' files, layout changes. Trapping;<br>
        - Development the layouts for duck tape.
    </div>
   </div>
</div>

<div class="block_bg">
   <div class="year">2012 - 2015</div>
   <div class="contentControl">
    <div class="collapse">+</div>
    <div class="expand">-</div>
   </div>   
   <div class="conteiner">
    <div class="title">Graphic Designer, Slavprom LLC/Ruban PE</div>
    <div class="content">
    - Development and preparing advertising original-layouts per specification;</br>
    - Matching original-layouts;</br>
    - Color correction, color separation, adjustment of customer files, layout changes.</div>
   </div>
</div>

<div class="block_bg">
   <div class="year">2011</div>
   <div class="contentControl">
    <div class="collapse">+</div>
    <div class="expand">-</div>
   </div>   
   <div class="conteiner">
    <div class="title">Designer, Dniprovsk Holding Company</div>
    <div class="content">
    - Adapting design layouts per specification;</br>
    - Color correction, color separation, adjustment of customer files, layout changes.</div>
   </div>
</div>

<div class="block_bg">
   <div class="year">2011</div>
   <div class="contentControl">
    <div class="collapse">+</div>
    <div class="expand">-</div>
   </div>   
   <div class="conteiner">
    <div class="title">Frelance</div>
    <div class="content">Development and preparation of advertising original-layouts</div>
   </div>
</div>

`

let initAccordeon = () => {
    $('.content').hide();
    $('.expand').hide();

    $('.block_bg .collapse').click((e) => {
        let document = $(e.target.parentElement.parentElement.parentElement);
        let allContentElements = document.find('.content');
        let allExpandElements = document.find('.expand');
        let allCollapseElements = document.find('.collapse');
        allContentElements.hide(500);
        allExpandElements.hide();
        allCollapseElements.show();
        let $this = $(e.target.parentElement.parentElement);
        $this.find('.content').show(500)
        $this.find('.expand').show();
        $this.find('.collapse').hide();
    })

}

function showAboutMe(content) {
    $('#aboutMeContainer').show();
    $('#aboutMe').html(content);
    $('.am_close').click(() => {
        $('#aboutMeContainer').hide();
    });
}

$('#generalInfo').click(function () {
    showAboutMe(generalInfo)
});

$('#education').click(function () {
    showAboutMe(education);
    initAccordeon();
});

$('#experience').click(function () {
    showAboutMe(experience)
    initAccordeon();
});

let updateBGPicture = (url) => {
    $('.ac_bgimage').hide();
    $('.ac_bgimage').attr('src', 'images/' + url);
    $('.ac_bgimage').fadeIn(1000);
}

// $('#prepress').hover(() => {
//     updateBGPicture('Background_for_prepress.jpg');
// });

// $('#fullCycle').hover(() => {
//     updateBGPicture('Background_for_design_concept_full.jpg');
// });

// $('#drawingLayouts').hover(() => {
//     updateBGPicture('Background_for_design_drawing.jpg');
// });


// $('#polygraphy').hover(() => {
//     updateBGPicture('Portfolio_WFile01-02.jpg');
// });

// $('#logosDesign').hover(() => {
//     updateBGPicture('Background_for_logo_concept.jpg');
// });


function showGallery(content) {
    $('#gallery').show();

    $('#gallery').load('./gallery/index1.html');

    $('.gal_close').click(() => {
        $('#gallery').hide();
    });
}

$('#prepress').click(() => {
    location.replace('./gallery/Prepress.html');
})

$('#fullCycle').click(() => {
    location.replace('./gallery/FullCycle.html');
})

$('#drawingLayouts').click(() => {
    location.replace('./gallery/DrawingLayouts.html');
})
$('#packagingDesign').click(() => {
    location.replace('./gallery/PackagingDesign.html');
})
$('#polygraphy').click(() => {
    location.replace('./gallery/Polygraphy.html');
})
$('#logosDesign').click(() => {
    location.replace('./gallery/LogosDesign.html');
})

$('#ru').click(() => {
    location.replace('./index_ru.html');    
})

$('#en').click(() => {
    location.replace('./index.html'); 
})
