const itemModel = require('../model')
const fs = require('fs')
const path = require('path')
exports.getTiny = async(req,res) => {
    try {
        const listData =await itemModel.find()
        res.send({listData})
    } catch (error) {
        res.send({
            error: error.message
        })
    }
}

exports.img = async(req, res) => {
    try {
        const file = req.files
        for (let i = 0; i < file.length; i++) {
            var url = (`http://localhost:3001/${file[i].originalname}`)
        }
        res.send({url})
    } catch (error) {
        res.send({ error: error.message })
    }
}
exports.createTiny = async(req,res) => {
    try {
        const content =req.body.content
        const img = req.body.img
        console.log(img,'sss')
        var arrImg = img.split(',')
        console.log(arrImg,'sss')
        await itemModel.create({content:content,img:arrImg})
        res.send({'them thanh cong':content})
    } catch (error) {
        res.send({ error: error.message })
    }
}

exports.updateTiny = async(req,res) => {
    try {
        const content =req.body.content,
            id = req.body.id
            console.log(content,'id');
        await itemModel.findByIdAndUpdate(id,{content:content})
        res.send({'da sua':id})
    } catch (error) {
        res.send({ error: error.message })
    }
}
exports.deleteTiny = async(req,res) =>{
    try {
        const id = req.query.id
        arrImg = []
        const res = await itemModel.find()
        
        for (let i = 0; i < res.length;i++) {
            for (let j = 0; j < res[i].img.length;j++) {
                arrImg.push(res[i].img[j])
            }
        }
         const arr = await itemModel.findById(id)
         let arrDelete = arr.img
         for (let i = 0; i < arrDelete.length; i++) {
             console.log(arrDelete[i], 'sss');
            let sosanh = arrImg.filter(function (value) {
                return value !== arrDelete[i];
            })
            if ((arrImg.length - 1) === sosanh.length) {
                fs.unlink(path.join(`media/${arrDelete[i].slice(22)}`), () => {
                    console.log('xoa thanh cong')
                })
            }
            else {
                console.log('khong xoa anh')
            }

        }
        await itemModel.findByIdAndDelete(id)
        res.send({'da xoa':id})
    } catch (error) {
        res.send({ error: error.message })
    }
}