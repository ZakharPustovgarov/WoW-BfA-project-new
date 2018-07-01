Vue.component('comment', {
    props:['inner'],
    template:`<div class="smbdcomment">
                <div class="person">
                    <h3>{{inner.user}}</h3>
                    <img src="../assets/anonymus.png" alt="anonymus">
                </div>
            
                <div class="comment">
                    <p>{{inner.comment}}</p>
                </div>
            </div>`
    })

    new Vue({
        el:'#comments',
        data:{comments:[],
            CommentId:0
        },
        methods: {
            addComment: function () {
                this.comments.push({
                    id: this.CommentId++,
                    user: this.user,
                    comment: this.comment
                })
                this.user = '',
                this.comment = ''
            }
        }
    })
