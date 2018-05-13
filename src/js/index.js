import Vue from 'vue'

var app = new Vue({
    el: '#root',
    data: {
        message: 'Привет, Vue!',
        users: [],
        user: []
    },
    mounted: function () {
            async function fetchAsync () {
                return await (await fetch('http://127.0.0.1:8000/api/v1/users')).json();
            }

            fetchAsync().then(data => {
                console.log(data)
                this.users = data.data
                this.user = this.users.map(function (exact) {
                    return exact
                })
            })
    }
})

Vue.component('user-form', {
    props: ['info'],
    template: '<>'
})

