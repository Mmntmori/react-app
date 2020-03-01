let initialState = {
    friendsData: [
        {
            name: 'Котик 1',
            id: 1,
            link: '',
            avatar: 'http://placekitten.com/120/130'
        }, {
            name: 'Котик 2',
            id: 2,
            link: '',
            avatar: 'http://placekitten.com/130/130'
        }, {
            name: 'Котик 3',
            id: 3,
            link: '',
            avatar: 'http://placekitten.com/120/110'
        }
    ]
}

const sidebarReducer = (state = initialState, action) => {
    return state;
}
export default sidebarReducer;