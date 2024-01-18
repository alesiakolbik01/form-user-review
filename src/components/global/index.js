import Ubutton from '../Ubutton.vue'
import Header from '../Header.vue'
import FormUserReview from '../FormUserReview.vue'
import Rating from '../Rating.vue'
import InputFormElement from '../InputFormElement.vue'
import ErrorMessage from '../ErrorMessage.vue'
import Spinner from '../Spinner.vue'

const components = [
    {component: Ubutton, name: "Ubutton"},
    {component: Header, name: "Header"},
    {component: FormUserReview, name: "FormUserReview"},
    {component: Rating, name: "Rating"},
    {component: InputFormElement, name: "InputFormElement"},
    {component: ErrorMessage, name: "ErrorMessage"},
    {component: Spinner, name: "Spinner"},
]

export default{
    install: (app) => {
        components.forEach(
            ({component, name}) => app.component(name, component)
        )
    }
}
