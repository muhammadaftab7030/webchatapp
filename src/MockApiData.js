const users = [
    {
        id: 1,
        user_name : 'Adnan Rehman',
        profile_image: require('../src/assets/images/adnan.jpg'),
        messages: [
            {
            msg:['Hello! How are you?', 'What is your name?', 'What are doing?'],
            createdAt: ['8:33 AM', '8:45 AM','9:00 PM']
        },
        ]
    },
    {
        id: 2,
        user_name : 'Liyana Bharti',
        profile_image: require('../src/assets/images/liyana.jpg'),
        messages: [
            {
            msg:['Hi, Hows your going on?', 'What is current position?'],
            createdAt: ['8:30 PM','9:30 PM']
        },
        ]
    },
    {
        id: 3,
        user_name : 'Mac Toe',
        profile_image: require('../src/assets/images/mac.jpg'),
        messages: [
            {
            msg:['Hello! Mac Toe', 'We are from Sytems Limited'],
            createdAt: ['8:50 PM', '9:10 PM']
        },
        ]
    },
    {
        id: 4,
        user_name : 'Juli Maree',
        profile_image: require('../src/assets/images/juli.jpg'),
        messages: [
            {
            msg:['Greetings!', 'Ok!', 'Message received'],
            createdAt: ['8:20 PM', '8:50 PM', '9:30 PM']
        },
        ]
    },
    {
        id: 5,
        user_name : 'Rehan Zia',
        profile_image: require('../src/assets/images/rehan.jpg'),
        messages: [
            {
            msg:['Hello! How are you?', 'What is your father name?', 'Are you Married?'],
            createdAt: ['8:33 AM','3:07 PM', '5:00 PM']
        },
        ]
    }

]

export default users;