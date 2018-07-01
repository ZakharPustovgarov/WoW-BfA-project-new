
            var title = new Vue({
                el:'.title',
                data: {
                    title:'НОЧНОРОЖДЁННЫЕ'
                }    
            })
            var text = new Vue({
                el:'.text',
                data: {
                    description:'Проведя 10 000 лет в изоляции под защитным барьером, эльфы Сурамара стали чрезвычайно зависимы от магической силы Ночного колодца. Чтобы защитить источник своей силы, лидеры ночнорожденных заключили сделку с Пылающим Легионом, ввергнув свое государство в гражданскую войну. Отвоевав свободу у своих хозяев-демонов, ночнорожденные присоединились к Орде в надежде вновь обрести свое место в Азероте.'
                }
            })
            
     
            var image =  new Vue({
                el:'#images',
                data: {
                    source1:'../assets/Nightborn1.png',
                    source2:'../assets/Nightborn2.png',
                    source3:'../assets/Nightborn3.png'
                }
            })

          var switcher = new Vue({
                el:'#gender-switcher',
                data: {
                    male:'../assets/Nightborn-male.png',
                    female:'../assets/Nightborn-female.png',
                    maleon:false,
                    femaleon:true
                }
            })