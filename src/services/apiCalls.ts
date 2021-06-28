import axios from "axios";

import { User } from "../models/user";
import { UserLogin } from "../models/userLogin";

const baseApiUrl = "https://example-ecommerce.herokuapp.com/";

export function submitLogin(userLogin: UserLogin) {

    return axios({
        baseURL: baseApiUrl,
        url: "user/login",
        method: "post",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        data: {
            login: userLogin.login,
            password: userLogin.password
        }
    });
}

export function submitRegister(user: User) {

    return axios({
        baseURL: baseApiUrl,
        url: "user/customer/add",
        method: "post",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        data: {
            address: user.address,
            age: user.age,
            email: user.email,
            name: user.name,
            userPassword: user.password,
        }
    });
}

// login
// https://example-ecommerce.herokuapp.com/user/login

// listarProdutos
// https://example-ecommerce.herokuapp.com/product/list

// cadastrarUsuario
// https://example-ecommerce.herokuapp.com/user/customer/add