import conf from "../conf/conf";
import { Client, Account, ID } from "appwrite";

export class AuthService {
  client = new Client();
  account;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);
    this.account = new Account(this.client);
  }

  //signup 

  async createAccount({ email, password, name }) {  //here we are using async-await but we can use normal promise also 
    //when we make function inside class then no need to use keyword function
    
    try{
        const userAccount= await this.account.create(ID.unique(),email,password,name);

        if(userAccount){

          //use created successful , no need to again login we can redirect it to login
          return this.login(email,password)
          
        }else{

          return userAccount 
        }
    }
    catch(error){
        
      throw error;

    }
  }

  //login

  async login({email,password}){

    try{
      return await this.account.createEmailSession(email,password);
    } 
    catch(error){
      throw error;
    }
  }

  //before going on home page check wheather user is logged in or not

  async getCurrentUser(){
    try{

      return await this.account.get()
    }
    catch (error){
      console.log(error);
    }
  }

  //logout

  async logout(){
    try{
      return await this.account.deleteSessions(); //all the sessions of user will be deleted
      // and user will be logged out from all devices
    }
    catch(error){
      throw error;
    }
  }
}

const authService = new AuthService();
export default authService;
