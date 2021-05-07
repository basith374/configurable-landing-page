// import landingCover from './landing.jpg'
import bgLayer0 from './bg_layer_0.png'
import bgLayer1 from './bg_layer_1.png'
import bgLayer2 from './bg_layer_2.png'
import bgLayer3 from './bg_layer_3.png'
import picture from './00sachi1.png';

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
            component: 'landing_type_1',
            colorBG: '#111',
            colorTextLight: 'rgba(255,255,255,0.5)',
            colorText: '#fff',
            img: [bgLayer0, bgLayer1, bgLayer2, bgLayer3],
            name: 'Roshan',
            logo: 'Ro',
            title: 'Fullstack Engineer',
            desc: 'I always take responsibilities for the direction. I Look more broadly at the whole team.',
            buttonText: 'Know More About Me.',
            scale: 1.2
        },
        {
            component: 'gallery_type_1',
            colorBG: '#fff',
            colorText: '#222',
        },
        {
            component: 'what_i_know',
            items: [
                'nodejs',
                'express',
                'docker',
                'git',
                'github',
                'js',
                'mysql',
                'nginx',
                'npm',
                'postgres',
                'python',
                'ubuntu',
                'vscode',
                'webpack',
                'babel',
                'sass',
                'd3',
                'react',
                'photoshop',
                'xd',
                'ai',
                'redux',
                'angular',
                'aws',
                'figma',
                'firebase',
                'gcloud',
                'graphql',
                'heroku',
                'java',
                'laravel',
                'socketio',
                'threejs',
            ],
        },
        {
            component: 'blog_section',
            items: [
                {
                    image: 'https://miro.medium.com/max/1000/1*Q-qfKnYns8HnFK14iobkWw.jpeg',
                    title: 'Parallax Background',
                    content: 'This tutorial shows you how to add interactive parallax backgrounds to your website. You can move your mouse around and see the layers move around like below. You can move your mouse around and see the layers move around like below.',
                },
                {
                    image: 'https://miro.medium.com/max/1000/1*Q-qfKnYns8HnFK14iobkWw.jpeg',
                    title: 'Parallax Background',
                    content: 'This tutorial shows you how to add interactive parallax backgrounds to your website. You can move your mouse around and see the layers move around like below. You can move your mouse around and see the layers move around like below.',
                },
                {
                    image: 'https://miro.medium.com/max/1000/1*Q-qfKnYns8HnFK14iobkWw.jpeg',
                    title: 'Parallax Background',
                    content: 'This tutorial shows you how to add interactive parallax backgrounds to your website. You can move your mouse around and see the layers move around like below. You can move your mouse around and see the layers move around like below.',
                },
                {
                    image: 'https://miro.medium.com/max/1000/1*Q-qfKnYns8HnFK14iobkWw.jpeg',
                    title: 'Parallax Background',
                    content: 'This tutorial shows you how to add interactive parallax backgrounds to your website. You can move your mouse around and see the layers move around like below. You can move your mouse around and see the layers move around like below.',
                },
            ],
        },
        {
            component: 'about_me',
            content: [
                'I have over 4 years of industry experience as Creative visualization professional, and have been a part of UI/UX  designing, branding and typography projects for many exceptional companies during these years. I have a positive outlook towards life and working hard to achieve my dreams.',
                'I started to build up my power in 2016, from my school time I began taking an interest in arts and designing. By the time I had mastered in Drawing Concepts, Designing & Multimedia..',
            ],
            experience: [
                {
                    title: 'UI UX Visual Designer',
                    company: 'Intellicar Telematics',
                    time: '2019 Mar - 2021 (Present)',
                    place: 'Bangalore',
                },
                {
                    title: 'UI UX Visual Designer',
                    company: 'Intellicar Telematics',
                    time: '2019 Mar - 2021 (Present)',
                    place: 'Bangalore',
                },
                {
                    title: 'UI UX Visual Designer',
                    company: 'Intellicar Telematics',
                    time: '2019 Mar - 2021 (Present)',
                    place: 'Bangalore',
                },
            ],
            picture,
        },
    ]
}