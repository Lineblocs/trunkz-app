import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://lineblocs.com/api/'
});

export function getTrunks() {
    return axiosInstance.get('trunk/list?page=1');
}

export function getDidNumbers() {
    return axiosInstance.get('did/listNumbers?all=1');
}

export function createTrunk(postData) {
    return axiosInstance.post('trunk', postData, false, true);
}