import { Curso, Prisma } from "@prisma/client";
import { prismaClient } from "../database/prismaClient";

class CursoService {
    async create(data: any): Promise<Curso> {
        const { nome, codigo_emec } = data
        const cursoExists = await prismaClient.curso.findFirst({
            where: {
                nome: data.nome
            }
        })

        if (cursoExists) {
            throw new Error('Já existe um Estado cadastrada com este nome ou UF')
        }

        const curso = await prismaClient.curso.create({
            data: {
                nome,
                codigo_emec
            }
        })

        return curso
    }

    async update(id: string, data: any): Promise<Curso> {
        const { nome, codigo_emec } = data
        const curso = await prismaClient.curso.update({
            where: {
                id
            },
            data: {
                nome,
                codigo_emec
            }
        })

        return curso
    }

    async delete(id: string): Promise<void> {
        await prismaClient.curso.delete({
            where: {
                id
            }
        })
        .then(response => {
            console.log(response)
        })
    }

    async getAll(query?: any): Promise<any> {
        const { perPage, page, search, orderBy, order } = query
        const skip = (page - 1) * perPage
        let orderByTerm = {}
        const where = search
            ? { 
                nome: {
                    mode: Prisma.QueryMode.insensitive,
                    contains: search
                }
            }
            : {};
        
        const orderByElement = orderBy ? orderBy.split('.') : {}
        
        if (orderByElement.length == 2) {
            orderByTerm = {
                [orderByElement[1]]: order
            }
        } else {
            orderByTerm = {
                [orderByElement]: order
            }
        }
        
        const [cursos, total] = await prismaClient.$transaction([
            prismaClient.curso.findMany({
                where,
                take: perPage ? parseInt(perPage) : 50,
                skip: skip ? skip : 0,
                orderBy: {
                    ...orderByTerm
                },
            }),
            prismaClient.curso.count({where})
        ])

        return {
            data: cursos,
            perPage,
            page,
            skip,
            count: total,
        }
    }

    async deleteCursos(cursos: string[]): Promise<any> {
          
        await prismaClient.curso.deleteMany({
            where: {
                id: { in: cursos}
            }
        })
        
    }

    async search(search: any) {
        const alunos = await prismaClient.curso.findMany({
            where: {
                nome: {
                    mode: Prisma.QueryMode.insensitive,
                    contains: search
                }
            },
            orderBy: {
                nome: 'asc'
            },
        })

        return alunos
    }

    async findById(id: string) : Promise<Curso | null> {
        const curso = await prismaClient.curso.findUnique({ where: { id } })

        return curso
    }
}

export default new CursoService