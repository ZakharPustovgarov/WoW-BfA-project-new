
          var text = new Vue({
                el:'.text',
                data: {
                    description:'На протяжении многих тысячелетий армия Света сражалась с полчищами Пылающего Легиона в Круговерти Пустоты. Самые преданные делу дренеи проходили особый ритуал, чтобы стать одним целым с энергией Света и войти в число озаренных. Когда озаренные одержали окончательную победу на Аргусе, у них появилась новая цель: защищать Азерот от любых угроз и помогать Альянсу в противостоянии Орде.'
                }
            })

            var title = new Vue({
                el:'.title',
                data: {
                    title:'ОЗАРЁННЫЕ ДРЕНЕИ'
                }    
            })
        
          var images = new Vue({
                el:'#images',
                data: {
                    source1:'../assets/DreneiOfLight1.png',
                    source2:'../assets/DreneiOfLight2.png',
                    source3:'../assets/DreneiOfLight2.png'
                }
            })
        
          var switcher = new Vue({
                el:'#gender-switcher',
                data: {
                    male:'../assets/DreneiOfLight-male.png',
                    female:'../assets/DreneiOfLight-female.png',
                    maleon:false,
                    femaleon:true

                }
            })