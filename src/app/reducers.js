import navigationReducer from './../features/navigation/navigationSlice';
import footerReducer from './../features/footer/footerSlice';
import usersReducer from './../features/components/form/usersSlice';
import industriesReducer from './../features/components/industry/industriesSlice';
import careersReducer from './../features/components/career/careersSlice';
import servicesReducer from './../features/components/services/servicesSlice';
import aboutReducer from './../features/components/about/aboutSlice';
import testimonialsReducer from './../features/components/testimonials/testimonialsSlice';
import articlesReducer from './../features/components/articles/articlesSlice';

const rootReducer =  {
    navigation: navigationReducer,
    footer: footerReducer,
    users: usersReducer,
    industries:industriesReducer,
    careers:careersReducer,
    services:servicesReducer,
    about:aboutReducer,
    testimonials:testimonialsReducer,
    articles:articlesReducer
}

export default rootReducer