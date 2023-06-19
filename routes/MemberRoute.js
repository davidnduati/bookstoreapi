const express = require('express')
const {getAllMembers,get1member,home,membersborredbook,createnewmember}=require('./memberController')

const router= express.Router();
router.get('/',home)
router.get('/members', getAllMembers);
router.get('/get1member/:id', get1member);
router.get('/memberwithborrowedbooks',membersborredbook)
router.post('/member',createnewmember)

module.exports = {
    router
};