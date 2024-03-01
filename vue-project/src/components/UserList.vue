<template>
    <div>
        <h2>User List</h2>
        <input placeholder="name" v-model="newName"/>
        <input placeholder="age" v-model="newAge"/>
        <button @click="Add">Add new user</button>
        <div v-for="user in usersStore.users" :key="user.id">
            {{ user.name }}
            {{ user.age }}
            {{ user.id }}
            <button @click="Delete(user.id)">X</button>
        </div>
    </div>
</template>

<script setup>
import { useUsersStore } from '@/stores/UserStore';
import { ref } from 'vue';
const usersStore = useUsersStore()

const newName = ref('')
const newAge = ref('')

function Add(){
        usersStore.AddNewUser(newName.value, newAge.value)
        console.log(newAge.value, newName.value)
        newAge.value = ''
        newName.value = ''
    }

function Delete(id){
        usersStore.DeleteUser(id)  
        console.log(id)
}
</script>