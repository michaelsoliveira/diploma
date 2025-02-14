import 'express-async-errors'
// import express, { Router } from "express"
import { Request, Response } from "express";
import { UserController } from "../controllers/UserController"
import { AuthController } from "../controllers/AuthController"
import { Authentication } from "../middleware/auth.middleware"

import { can, is } from "../middleware/permission"
import { RoleController } from "../controllers/RoleController"
import { PermissionController } from "../controllers/PermissionController"

const express = require('express')
const multer = require('multer')
const routes = express.Router()

routes.get('/', function(request: Request, response: Response){
    return response.status(200).json({
        projeto: process.env.IO_PROJECT,
        app: process.env.IO_APP,
        version: process.env.IO_VERSION
    })
})

routes.get('/status', function(request: Request, response: Response){
    return response.status(200).json()
})
routes.get('/users', Authentication(), new UserController().findAll)
routes.get('/users/provider/find-by-email', Authentication(), new UserController().findByEmail)
routes.get('/users/:projetoId/:userId', Authentication(), new UserController().findOne)
routes.post('/users/create', new UserController().store)
routes.put('/users/:id', Authentication(), new UserController().update)
routes.get('/users/search', Authentication(), new UserController().search)
routes.delete('/users/:id', Authentication(), new UserController().delete)
routes.post('/users/create-role', Authentication(), is(['admin', 'gerente']), new UserController().createRole)
routes.post('/users/create-permission', Authentication(), is(['admin', 'gerente']), new UserController().createPermission)
routes.post('/users/create-role-permission/:roleId', Authentication(), is(['admin', 'gerente']), new UserController().createRolePermission)
routes.post('/users/create-acl/:userId', Authentication(), is(['admin', 'gerente']), new UserController().createUserACL)
routes.post('/users/send-email', new UserController().sendMail)

//Alterar senha
routes.post('/users/change-password', Authentication(), new UserController().updatePassword)

routes.get('/provider/find', new UserController().findProvider)
routes.post('/auth/login', new AuthController().login)
routes.get('/auth/oauth', new AuthController().googleAuth)
routes.get('/auth/google', new AuthController().googleAuth)
routes.get('/auth/me', Authentication(), new AuthController().getUserByToken)
routes.post('/auth/refresh', new AuthController().refreshToken)
routes.get('/auth/callback/github', new AuthController().signInCallback)

//Role
routes.post('/role/', Authentication(), new RoleController().store)
routes.get('/role', new RoleController().findAll)
routes.get('/role/search', Authentication(), new RoleController().search)
routes.get('/role/:id', Authentication(), new RoleController().findOne)
routes.put('/role/:id', Authentication(), new RoleController().update)
routes.delete('/role/single/:id', Authentication(), new RoleController().delete)
routes.delete('/role/multiples', Authentication(), new RoleController().deleteAll)

//Permission
routes.post('/permission/', Authentication(), new PermissionController().store)
routes.get('/permission/', Authentication(), new PermissionController().findAll)
routes.get('/permission/:id', Authentication(), new PermissionController().findOne)
routes.get('/permission/search/q', Authentication(), new PermissionController().search)
routes.put('/permission/:id', Authentication(), new PermissionController().update)
routes.delete('/permission/single/:id', Authentication(), new PermissionController().delete)
routes.delete('/permission/multiples', Authentication(), new PermissionController().deleteAll)

export default routes;