
Vue.component('voldun', {
    props:['bay'],
    template:`<div class="col-xs-12 col-md-6">
                <img :src="bay.link">
            </div>`
    })

var night = new Vue({
       el:'#night-voldun',
       data:{
           never:[
               {link:'../assets/voldun-night-1.jpg'},
               {link:'../assets/voldun-night-2.jpg'},
               {link:'../assets/voldun-night-3.jpg'},
               {link:'../assets/voldun-night-4.jpg'}
            ]

       }
})

var day = new Vue({
    el:'#day-voldun',
    data:{
        ever:[
            {link:'../assets/voldun-day-1.jpg'},
            {link:'../assets/voldun-day-2.jpg'},
            {link:'../assets/voldun-day-3.jpg'},
            {link:'../assets/voldun-day-4.jpg'}
         ]

    }
})
