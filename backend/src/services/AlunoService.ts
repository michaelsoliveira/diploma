import { Aluno, Prisma } from "@prisma/client";
import { prismaClient } from "../database/prismaClient";

class AlunoService {
    async create(data: any): Promise<Aluno> {
        
        const alunoExists = await prismaClient.aluno.findFirst({
            where: {
                pessoa: {
                    pessoaFisica: {
                        nome: data.nome
                    }
                }
            }
        })

        if (alunoExists) {
            throw new Error('Já existe um Estado cadastrada com este nome ou UF')
        }

        const aluno = await prismaClient.aluno.create({
            data: {
                pessoa: {
                    create: {
                        pessoaFisica: {
                            create: {
                                nome: data.nome,
                                data_nascimento: new Date(data.data_nascimento).toLocaleDateString('pt-BR')
                            }
                        },
                        telefone: {
                            create: {
                                ddd: data.ddd
                            }
                        }
                    }
                },
                curso: {
                    connect: {
                        id: data.curso
                    }
                }    
            }
        })

        return aluno
    }

    async update(id: string, data: any): Promise<Aluno> {
        const aluno = await prismaClient.aluno.update({
            where: {
                id
            },
            data: {
                pessoa: {
                    update: {
                        pessoaFisica: {
                            update: {
                                nome: data.nome,
                                data_nascimento: new Date(data.data_nascimento).toLocaleDateString('pt-BR')
                            }
                        },
                        telefone: {
                            create: {
                                ddd: data.ddd
                            }
                        }
                    }
                },
                curso: {
                    connect: {
                        id: data.curso
                    }
                }    
            }
        })

        return aluno
    }

    async delete(id: string): Promise<void> {
        await prismaClient.aluno.delete({
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
            ? {OR: [{ 
                pessoa: {
                    pessoaFisica: {
                        nome: {
                            mode: Prisma.QueryMode.insensitive,
                            contains: search}
                    }
                }}, {pessoa: {
                    pessoaFisica: {
                        cpf: {
                            mode: Prisma.QueryMode.insensitive,
                            contains: search}
                    }
                }}]}
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
        
        const [alunos, total] = await prismaClient.$transaction([
            prismaClient.aluno.findMany({
                where,
                take: perPage ? parseInt(perPage) : 50,
                skip: skip ? skip : 0,
                orderBy: {
                    ...orderByTerm
                },
            }),
            prismaClient.aluno.count({where})
        ])

        return {
            data: alunos,
            perPage,
            page,
            skip,
            count: total,
        }
    }

    async deleteAlunos(alunos: string[]): Promise<any> {
          
        await prismaClient.aluno.deleteMany({
            where: {
                id: { in: alunos}
            }
        })
        
    }

    async search(text: any) {
        const alunos = await prismaClient.aluno.findMany({
            where: {
                OR: [{pessoa:{
                    pessoaFisica: {
                        nome: {
                            mode: Prisma.QueryMode.insensitive, 
                            contains: text}
                    }
                }}, {
                    pessoa:{
                        pessoaFisica: {
                            cpf: { contains: text }
                        }
                    }
                }]
            },
            orderBy: {
                pessoa: {
                    pessoaFisica: {
                        nome: 'asc'
                    }
                }
            },
        })

        return alunos
    }

    async findById(id: string) : Promise<Aluno | null> {
        const aluno = await prismaClient.aluno.findUnique({ where: { id } })

        return aluno
    }
}

export default new AlunoService