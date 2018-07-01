
           var text = new Vue({
                el:'.text',
                data: {
                    description:'Таурены Крутогорья — потомки Хална, храброго героя, прославившегося во время Войны древних. Они почитают духов земли, реки и неба. После вторжения Легиона  доверие между племенами было подорвано, но теперь племена Крутогорья вновь объединили свои силы. Они готовы покинуть священную гору, чтобы примкнуть к своим калимдорским сородичам и стать союзниками Орды.'
                }
            })

             var title = new Vue({
                el:'.title',
                data: {
                    title:'ТАУРЕНЫ КРУТОГОРЬЯ'
                }    
            })
        
            var images = new Vue({
                el:'#images',
                data: {
                    source1:'../assets/HighmountainTauren1.png',
                    source2:'../assets/HighmountainTauren2.png',
                    source3:'../assets/HighmountainTauren3.png'
                }
            })
        
            var switcher = new Vue({
                el:'#gender-switcher',
                data: {
                    male:'../assets/HighmountainTauren-male.png',
                    female:'../assets/HighmountainTauren-female.png',
                    maleon:true,
                    femaleon:false
                }
            })