// appwrite general code 
import config from "../config/config";

import {Client, Account, ID} from "appwrite"

export class AuthService{

    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(config.appwriteURL)
            .setProject(config.projectID);
        this.account = new Account(this.client);
    }
// I need to wait until account is created so I use async here
//and it can fail also so use try and catch
    async createAccount({email, password, name}){
        try {
            const user = await this.account.createAccount(ID.unique(), email,password,name);
            if(user){
                this.loginUser(email,password);
            }else {
                return user
            }
        } catch (error) {
            throw error;
        }
    }

    async loginUser({email,password}){
        try {
            return await this.account.createEmailPasswordSession(email, password);
        } catch (error) {
            throw error;
        }
    }

    async getCurrentUser() {
        try{
        const res=  await this.account.get();
        console.log(res);
        return res;
        }
        catch (error){
            throw error;
        }
    }

    async logout(){
        //current -- deleteSession
        try {
            return await this.account.deleteSessions();
        } catch (error) {
            throw error
        }    
    }
}

const authService = new AuthService();
export default authService;