import Ubutton from '../Ubutton.vue'
import Header from '../Header.vue'
import FormUserReview from '../FormUserReview.vue'
import Rating from '../Rating.vue'

const components = [
    {component: Ubutton, name: "Ubutton"},
    {component: Header, name: "Header"},
    {component: FormUserReview, name: "FormUserReview"},
    {component: Rating, name: "Rating"},
]

export default{
    install: (app) => {
        components.forEach(
            ({component, name}) => app.component(name, component)
        )
    }
}
