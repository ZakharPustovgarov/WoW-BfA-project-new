
           var title = new Vue({
                el:'.title',
                data: {
                    title:'ЭЛЬФЫ БЕЗДНЫ'
                }    
            })
            var text = new Vue({
                el:'.text',
                data: {
                    description:'Многие пытались обуздать тлетворную магию Бездны, но для большинства эти попытки оканчивались лишь безумием. Аллерия Ветрокрылая твердо решила использовать эту силу на благо Азерота, и ей первой удалось не поддаться влиянию тьмы. Придя на помощь своим сородичам, из последних сил сопротивлявшимся мраку, Аллерия поклялась научить эльфов Бездны управлять темной энергией, чтобы те могли использовать свой новый дар во благо Альянса.'
                }
            })
       
          var image = new Vue({
                el:'#images',
                data: {
                    source1:'../assets/VoidElf1.png',
                    source2:'../assets/VoidElf2.png',
                    source3:'../assets/VoidElf3.png'
                }
            })
       
            var switcher =  new Vue({
                el:'#gender-switcher',
                data: {
                    male:'../assets/VoidElf-male.png',
                    female:'../assets/VoidElf-female.png',
                    maleon:true,
                    femaleon:false
                }
            })