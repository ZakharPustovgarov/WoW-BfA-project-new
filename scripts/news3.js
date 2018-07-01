Vue.component('boralus', {
    props:['structures'],
    template:`<div class="col-xs-12 col-md-6 col-lg-4">
                <img :src="structures.link">
            </div>`
    })

Vue.component('boralus-changes', {
    props:['places'],
    template:`<div class="col-xs-12 col-md-6">
                <img :src="places.link">
            </div>`
    })

var prisioneers = new Vue({
       el:'#prison-boralus',
       data:{
           prisons:[
               {link:'../assets/boralus-prison-1.jpg'},
               {link:'../assets/boralus-prison-2.jpg'},
               {link:'../assets/boralus-prison-3.jpg'}
            ]

       }
})

var students = new Vue({
    el:'#academy-praudmur',
    data:{
        academy:[
            {link:'../assets/praudmur-academy-1.jpg'},
            {link:'../assets/praudmur-academy-2.jpg'},
            {link:'../assets/praudmur-academy-3.jpg'}
         ]

    }
})

var corners = new Vue({
    el:'#changes-boralus',
    data:{
        known:[
            {link:'../assets/boralus-changes-1.jpg'},
            {link:'../assets/boralus-changes-2.jpg'},
            {link:'../assets/boralus-changes-3.jpg'},
            {link:'../assets/boralus-changes-4.jpg'}
         ]

    }
})