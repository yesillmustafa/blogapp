const express = require("express");

const db = require("../data/db");

const router = express.Router();

router.use("/blogs/category/:categoryid", async function(req,res) {
    const id = req.params.categoryid
    try{
        const [blogs,] = await db.execute("select * from blog where categoryid=?",[id])
        const [categories, ] = await db.execute("select * from category")
        const [selected, ] = await db.execute("select * from category where categoryid=?", [id])
        res.render("users/blogs", {
            blogs: blogs,
            title: selected[0].name,
            categories: categories,
            selectedCategory: id
        })
    }
    catch(err) {
        console.log(err)
    }
})

router.use("/blogs/:blogid", async function(req, res) {
    const id = req.params.blogid
    try{
        const [blogs,] = await db.execute("select * from blog where blogid=?",[id])
        const blog = blogs[0]
        if(blog){
            return res.render("users/blog-details", {
                title: blog.title,
                blog: blog
            });
        }
       
        res.redirect("/")
       
    }
    catch(err) {
        console.log(err)
    }
});

router.use("/blogs", async function(req, res) {

    try{
        const [blogs, ] = await db.execute("select * from blog where verification=1")
        const [categories, ] = await db.execute("select * from category")
        res.render("users/blogs", {
            blogs: blogs,
            title: "Tüm Kurslar",
            categories: categories,
            selectedCategory: null
        })
    }
    catch(err){
        console.log(err)
    }

});

router.use("/", async function(req, res) {
    try{
        const [blogs, ] = await db.execute("select * from blog where verification=1 and homepage=1")
        const [categories, ] = await db.execute("select * from category")
        res.render("users/index", {
            blogs: blogs,
            title: "Popüler Kurslar",
            categories: categories,
            selectedCategory: null
        })
    }
    catch(err){
        console.log(err)
    }
});

module.exports = router;