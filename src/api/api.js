import * as axios from 'axios'

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': '3b1c335e-d74d-4d0f-9f07-315ffb4de9e5'      
    }
})


export const getUsers = (currentPage, pageSize) => {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
}

export const deleteFollowing = (userId) => {
        return instance.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`).then(response => response.data)
}

export const setFollowing = (userId) => {
        return instance.post(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`).then(response => response.data)
}

export const authoriseMe = () => {
        return instance.get('https://social-network.samuraijs.com/api/1.0/auth/me',).then(response => response.data)
}

export const getUserProfileData = (userId) => {
        return instance.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`).then(response => response.data)
}

