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
            colorTheme2: 'linear-gradient(181.47deg, rgb(134 42 255) 1.25%, rgb(155 114 255) 98.75%)',
            colorBGStripe: 'linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%), #F9D144',
            colorTheme3: '#3E0D67',
            colorTextLight: '#838383',
            buttonTextColor: '#fff',
            img: landingCover,
            name: 'Anuprasad',
            title: 'a Digital Marketer',
            desc: 'I have a positive outlook towards life and working hard to achieve my dream',
            buttonText: 'My Work',
            headerConfig: {
                color: '#3E0D67',
                buttons: [
                    { name: 'Home.'},
                    { name: 'My Work.'},
                    { name: 'About Me.'},
                    { name: 'Contact me.'},
                    { name: 'My Resume', downloadButton: true },
                ]
            }
        },
        // {
        //     component: 'gallery_type_1',
        //     colorBG: '#fff',
        //     colorText: '#222',
        // },
        {
            component: 'gallery_type_1',
            colorBG: '#f3f3f3',
            colorText: '#222',
        },
        {
            component: 'footer_type_1',
            colorBG: '#fff',
            colorText: '#121212',
            colorTheme: '#3E0D67',
            buttonTextColor: '#fff',
            title: 'Contact Me',
            name: 'Sachin A K',
            contactInfo: {
                phoneno: '+91 9633 018 859',
                email: ' Sachucherupazhassi@gmail.com',
                address: 'HSR Layout Sector 1 , Bangalore'
            }
        },
    ]
}