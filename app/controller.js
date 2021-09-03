// Uses the db client from loader.js
import client from "./loader.js";

const userConnection = client.db("user_db").collection("users");

export default {
  async add(newUser) {
    const existingUser = await userConnection.findOne({email: newUser.email });
    
    return userConnection.insertOne(newUser);
  },
};