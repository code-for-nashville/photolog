const app = new Vue({
    el: "#app",

    data: {
        photos: []
    },
            console.log(photos)
    created () {
        fetch("/photos").then(resp => {
            return resp.json()

        }).then(photos => {
            console.log(photos)
            this.photos = photos
        })
    }
})
