/* This is the controller file. Its functions are called when 
a route is navigated to. These functions in turn call upon the 
database accessor to get the requested information out of the 
database to return to the front end. */

import Accessor from "../db_accessors/accessor.js";

export default class Controller {
  /* Function to get every single blog out of the database */
  static async getBlogs(req, res) {
    try {
      const blogs = await Accessor.getAllBlogs();
      res.json(blogs);
    } catch (e) {
      console.log("Failed due to:", e);
      res.json({ error: e });
    }
  }

  /* Function to add a new blog to the database */
  static async postBlog(req, res) {}

  /* Function to change the body of a blog. 
    The item to change is searched for by its unique id. */
  static async updateBlog(req, res) {}

  /* Function to delete a blog. The item to delete is
    searched for by its unique id. */
  static async deleteBlog(req, res) {}
}
