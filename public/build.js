const app = new Vue({
    el: "#app",
    data: {
        photos: []
    },
    created () {
        fetch("/photos").then(resp => {
            return resp.json()
        }).then(photos => {
            this.photos = photos
            console.log(photos)
        })
    }
})
