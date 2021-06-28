import axios from "axios";
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
            "Connection": "keep-alive"
        },
        data: {
            login: userLogin.login,
            password: userLogin.password
        }
    });
}

// login
// https://example-ecommerce.herokuapp.com/user/login

// listarProdutos
// https://example-ecommerce.herokuapp.com/product/list

// cadastrarUsuario
// https://example-ecommerce.herokuapp.com/user/customer/add