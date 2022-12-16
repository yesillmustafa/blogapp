const express = require("express");

const data = {
    title: "Popüler Kurslar",
    categories: ["Web Geliştirme", "Mobil Uygulamalar", "Veri Analizi", "Programlama", "Ofis Uygulamaları"],
    blogs: [
        {
            id: 1,
            title: "Komple Uygulamalı Web Geliştirme",
            description: "Sıfırdan ileri seviyeye Web Geliştirme:Html,Css,Sass,Flexbox,Bootstrap,Javascript,Angular,JQuery,Asp.Net Mvc&Core Mvc",
            img: "1.jpeg",
            homepage: true,
            verification: true
        },
        {
            id: 2,
            description: "Sıfırdan İleri Seviye Python Dersleri, Veritabanı,Veri Analizi, Bot Yazımı,Web Geliştirme(Django)",
            title: "Python ile Sıfırdan İleri Seviye Python Programlama",
            img: "2.jpeg",
            homepage: true,
            verification: true
        },
        {
            id: 3,
            title: "Sıfırdan İleri Seviye Modern Javascript Dersleri ES7+",
            description: "Moden javascript dersleri ile (ES6 & ES7+) Nodejs,Angular,React ve VueJs için sağlam bir temel oluşturun.",
            img: "3.jpeg",
            homepage: false,
            verification: true
        },
        {
            id: 4,
            title: "Sıfırdan Uygulamalı React Geliştirme: Hooks,Redux & Firebase",
            description: "En popüler frontend kütüphanesi React'i baştan sona uygulamalı projelerle öğren. Hooks, Redux, Webpack, Firebase ve fazlası.",
            img: "4.jpeg",
            homepage: true,
            verification: true
        }
        
    ]
}

const router = express.Router();

router.use("/blogs/:blogid", function(req, res) {
    res.render("users/blog-details", data);
});

router.use("/blogs", function(req, res) {
    res.render("users/blogs", data);
});

router.use("/", function(req, res) {
    res.render("users/index", data);
});

module.exports = router;