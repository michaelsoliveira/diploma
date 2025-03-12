import { Instituicao, Prisma } from "@prisma/client";
import { prismaClient } from "../database/prismaClient";

class InstituicaoService {
    async create(data: any): Promise<Instituicao> {
        const instituicaoExists = await prismaClient.instituicao.findFirst({
            where: {
                nome: data.nome
            }
        })

        if (instituicaoExists) {
            throw new Error('Já existe uma Instituição cadastrada com este nome')
        }

        const instituicao = await prismaClient.instituicao.create({
            data: {
                nome: data.nome,
                codigo_emec: data.codigo_emec            
            }
        })

        return instituicao
    }

    async update(id: string, data: any): Promise<Instituicao> {
        const { nome, codigo_emec, pessoa_juridica } = data
        const instituicao = (typeof pessoa_juridica === undefined) ? await prismaClient.instituicao.update({
            where: { id },
            data: {
                    nome,
                    codigo_emec
                } 
            }) : await prismaClient.instituicao.update({
            where: {
                id
            },
            data: {
                nome,
                codigo_emec,
                pessoa: {
                    update: {
                        tipo: 'J',
                        pessoaJuridica: {
                            create: {
                                nome_fantasia: pessoa_juridica.nome_fantasia,
                                razao_social: pessoa_juridica.razao_social
                            }
                        }
                    }
                }
            }
        })

        return instituicao
    }

    async delete(id: string): Promise<void> {
        await prismaClient.curso.delete({
            where: {
                id
            }
        })
        .then((response: any) => {
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
        
        const [instituicoes, total] = await prismaClient.$transaction([
            prismaClient.instituicao.findMany({
                where,
                take: perPage ? parseInt(perPage) : 50,
                skip: skip ? skip : 0,
                orderBy: {
                    ...orderByTerm
                },
            }),
            prismaClient.instituicao.count({where})
        ])

        return {
            data: instituicoes,
            perPage,
            page,
            skip,
            count: total,
        }
    }

    async deleteInstituicoes(instituicoes: string[]): Promise<any> {
          
        await prismaClient.instituicao.deleteMany({
            where: {
                id: { in: instituicoes}
            }
        })
        
    }

    async search(search: any) {
        const instituicoes = await prismaClient.instituicao.findMany({
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

        return instituicoes
    }

    async findById(id: string) : Promise<Instituicao | null> {
        const instituicao = await prismaClient.instituicao.findUnique({ where: { id } })

        return instituicao
    }
}

export default new InstituicaoService