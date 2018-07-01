$('.materials-videos > .more').click( function() {
    $('.materials-videos  .hidden-materials').slideToggle("slow");
    });
    
    $('.materials-screenshots > .more').click( function() {
    $('.materials-screenshots  .hidden-materials').slideToggle("slow");
    });
    
    $('.materials-illus > .more').click( function() {
    $('.materials-illus  .hidden-materials').slideToggle("slow");
    });

Vue.component('images', {
    props:['source'],
    template:`<div class="col-xs-12 col-md-6 col-lg-4 hidden-materials">
                <img :src="source.link">
            </div>`
    })
var screen = new Vue({
    el:'#screenshots',
    data:{
        screenshot:[
            {link:'../assets/screenshot5.jpg'},
            {link:'../assets/screenshot6.jpg'},
            {link:'../assets/screenshot7.jpg'},
            {link:'../assets/screenshot8.jpg'}
    ]
    }
})
var illus = new Vue({
    el:'#illustrations',
    data:{
        illustration:[
            {link:'../assets/illus5.jpg'},
            {link:'../assets/illus6.jpg'},
            {link:'../assets/illus7.jpg'},
            {link:'../assets/illus8.jpg'},
            {link:'../assets/illus9.jpg'},
            {link:'../assets/illus10.jpg'},
            {link:'../assets/illus11.jpg'}
    ]    
    }
})

