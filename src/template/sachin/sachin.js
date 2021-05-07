import landingCover from './img.png'

export default {
    background: {
        component: 'background_default',
        color: '#fff'
    },
    loading: {
        component: 'loading_default',
    },
    page: [
        {
            component: 'landing_type_2',
            colorBG: '#fff',
            colorTheme: '#F5C448',
            colorTheme2: 'linear-gradient(181.47deg, #FFD02A 1.25%, #FFD772 98.75%)',
            colorBGStripe: 'linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%), #F9D144',
            colorTheme3: '#3E0D67',
            colorTextLight: '#838383',
            buttonTextColor: '#fff',
            img: landingCover,
            name: 'Sachin',
            logo: 'Ri',
            title: 'a UI UX Designer',
            desc: 'I have a positive outlook towards life and working hard to achieve my dream',
            buttonText: 'My Work',
            headerButtons: [
                { name: 'Home'}
            ]
        },
        {
            component: 'gallery_type_1',
            colorBG: '#fff',
            colorText: '#222',
        },
    ]
}