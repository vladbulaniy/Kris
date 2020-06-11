
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
   <div class="year">2015</div>
   <div class="contentControl">
    <div class="collapse">+</div>
    <div class="expand">-</div>
   </div>   
   <div class="conteiner">
    <div class="title">Prepress Graphic Designer, Cantsopttorg LLC</div>
    <div class="content">
        - Adapting design layouts per specification;</br>
        - Development and preparation of advertising original-layouts;<br>
    - Color correction, color separation, adjustment of customer files, layout changes;<br>
    - Trapping.
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

$('#prepress').hover(() => {
    updateBGPicture('Background_for_prepress.jpg');
});

$('#fullCycle').hover(() => {
    updateBGPicture('Background_for_design_concept_full.jpg');
});

$('#drawingLayouts').hover(() => {
    updateBGPicture('Background_for_design_drawing.jpg');
});

$('#packagingDesign').hover(() => {
    updateBGPicture('Background_for_designl-01.jpg');
});

$('#polygraphy').hover(() => {
    updateBGPicture('Portfolio_WFile01-02.jpg');
});

$('#logosDesign').hover(() => {
    updateBGPicture('Background_for_logo_concept.png');
});


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
