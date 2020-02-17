let state = {
    sideBar: {
        friendsData: [
            {
                name: 'Котик 1',
                link: '',
                avatar: 'http://placekitten.com/120/130'
            },{
                name: 'Котик 2',
                link: '',
                avatar: 'http://placekitten.com/130/130'
            },{
                name: 'Котик 3',
                link: '',
                avatar: 'http://placekitten.com/120/120'
            }
        ]
    },
    
    profilePage: {
        postsData: [
            { id: 1, author: 'Котик', text: 'ПРИВЕТ Я ТВОЙ ПЕРВЫЙ ПОСТ', likesCount: '4' },
            { id: 2, author: 'Котик', text: 'ПРИВЕТ Я ТВОЙ ВТОРОЙ ПОСТ', likesCount: '9' },
            { id: 3, author: 'Котик', text: 'ПРИВЕТ Я ТВОЙ ТРЕТИЙ ПОСТ', likesCount: '22' },
            { id: 4, author: 'Котик', text: 'ПРИВЕТ Я ТВОЙ ЧЕТВЁРТЫЙ ПОСТ', likesCount: '12' }
        ]    
    },
    dialogsPage: {
        dialogsData: [
            { id: 1, name: 'Котик 1' },
            { id: 2, name: 'Котик 2' },
            { id: 3, name: 'Котик 3' },
            { id: 4, name: 'Котик 4' }
        ],
        messagesData: [
            { id: 1, message: 'Hi'},
            { id: 2, message: 'How r you?'},
            { id: 3, message: 'i\'m fine. and u? xoxo'},
            { id: 4, message: 'wow, u\'r cute' }
        ]
    }
}

export let addPost = (postMessage) => {
    let newPost = {
        id: 5,
        author: 'Котик',
        text: postMessage,
        likesCount: '0'
    }
    console.log(postMessage);
    

    state.profilePage.postsData.push(newPost);
}

export default state