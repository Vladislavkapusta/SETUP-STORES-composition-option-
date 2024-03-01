import { defineStore } from "pinia";
import { ref, watch } from "vue";

let data = [
    {id:1, name: 'ALEx', age:40},
    {id:2, name: 'George', age:20}
]

export const useUsersStore = defineStore('usersStore', () => {
    let users = ref(JSON.parse(localStorage.getItem('users')) ?? data)

    let AddNewUser = (name, age) =>{
        users.value.push({id:data.length+1, name:name, age:+age})
        console.log(data)
    }

    let DeleteUser =  (id) => {
        users.value = users.value.filter((user) => user.id !== id)
    }

    watch(
        () => users,
        () => {
            localStorage.setItem('users', JSON.stringify(users.value))
        },
        {deep: true}
    )

    return {
        users,
        AddNewUser,
        DeleteUser
    }
})