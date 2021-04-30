const Demo = {
    data() {
        return {
            message: 'HELLO!oodddoooo'
        }
    }
}
Vue.createApp(Demo).mount('#demo')

const Type = {
    data() {
        return {
            type: 'Write'
        }
    }
}
Vue.createApp(Type).mount('#type')

const Random = {
    data() {
        return {
            random: Math.random().toFixed(3)
        }
    }
}
Vue.createApp(Random).mount('#random')

const Obj = {
    data() {
        return {
            myObject: {
                name: 'TMK',
                birthday: 'April 1',
                num: '4'
            }
        }
    }
}
Vue.createApp(Obj).mount('#obj')

const Counter = Vue.createApp({})
Counter.component('button-counter', {
    data() {
        return {
            count: 0
        }
    },
    template: 
    // `<button v-on:click="count++">
    //     点了{{ count }}次
    // </button>`
    '<button v-on:click="count++">点了{{ count }}次</button>'
})
Counter.mount('#counter')

var BC2 = {
    data() {
        return {
            count2: 0
        }
    },
    template: `
        <button v-on:click="count2++">
            点了{{ count2 }}次
        </button>`
}
const Counter2 = Vue.createApp({
    components: {
        'button-counter-2': BC2
    }
})
Counter2.mount('#counter2')

const Change = {
    data() {
        return {
            meter: 0,
            kilometer: 0
        }
    },
    watch: {
        meter: function(val) {
            this.kilometer = val / 1000,
            this.meter = val
        },
        kilometer: function(val) {
            this.meter = val * 1000,
            this.kilometer = val
        }
    }
}
Vue.createApp(Change).mount('#change')

const Enter = {
    methods: {
        submit(e) {
            alert('This is enter.')
        } 
    }
}
Vue.createApp(Enter).mount('#enter')

const Select = {
    data() {
        return {
            picked: 'two'
        }
    }
}
Vue.createApp(Select).mount('#select')

const Focus = Vue.createApp({})
Focus.directive('focus', {
    mounted(el) {
        el.focus()
    }
})
Focus.mount('#auto-focus')

const easySlot = Vue.createApp({})
easySlot.component('easy-slot', {
    template: `<p><strong>ERROR! </strong><slot></slot></p>`
})
easySlot.mount("#easy-slot")