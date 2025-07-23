const router = require("express").Router();
const blogController = require("../Controller/blogController");

router.post("/create", blogController.createBlog);
router.get("/get_all_blogs", blogController.getAllBlogs);
router.get("/get_single_blog/:id", blogController.getBlogById);
router.put("/update_blog/:id", blogController.updateBlog);

module.exports = router;
