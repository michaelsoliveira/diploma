import { Prisma } from "@prisma/client"
import { prismaClient } from "../database/prismaClient"

export const handleCreateDefault = async (projeto: any) => {
    const categorias: Prisma.CategoriaEspecieCreateInput[] = [
        {
        nome: 'Não definida',
        criterio_fuste: 999,
        criterio_dminc: 999,
        criterio_dmaxc: 999,
        criterio_n_min: 999,
        criterio_perc_min: 999,
        preservar: true,
        criterio_altura: 999,
        criterio_volume: 999,
        projeto: {
            connect: {
            id: projeto?.id
            }
        }
        },
        {
        nome: 'COMERCIAL 50+',
        criterio_fuste: 2,
        criterio_dminc: 50,
        criterio_dmaxc: 999,
        criterio_n_min: 3,
        criterio_perc_min: 10,
        preservar: false,
        criterio_altura: 999,
        criterio_volume: 999,
        projeto: {
            connect: {
            id: projeto?.id
            }
        }
        },
        {
        nome: 'COMERCIAL 55+',
        criterio_fuste: 2,
        criterio_dminc: 55,
        criterio_dmaxc: 999,
        criterio_n_min: 3,
        criterio_perc_min: 10,
        preservar: false,
        criterio_altura: 999,
        criterio_volume: 999,
        projeto: {
            connect: {
            id: projeto?.id
            }
        }
        },
        {
        nome: 'COMERCIAL 70+',
        criterio_fuste: 2,
        criterio_dminc: 70,
        criterio_dmaxc: 999,
        criterio_n_min: 3,
        criterio_perc_min: 10,
        preservar: false,
        criterio_altura: 999,
        criterio_volume: 999,
        projeto: {
            connect: {
            id: projeto?.id
            }
        }
        },
        {
        nome: 'VULNERAVEL 50+',
        criterio_fuste: 2,
        criterio_dminc: 50,
        criterio_dmaxc: 999,
        criterio_n_min: 4,
        criterio_perc_min: 15,
        preservar: false,
        criterio_altura: 999,
        criterio_volume: 999,
        projeto: {
            connect: {
            id: projeto?.id
            }
        }
        },
        {
        nome: 'VULNERAVEL 55+',
        criterio_fuste: 2,
        criterio_dminc: 55,
        criterio_dmaxc: 999,
        criterio_n_min: 4,
        criterio_perc_min: 15,
        preservar: false,
        criterio_altura: 999,
        criterio_volume: 999,
        projeto: {
            connect: {
            id: projeto?.id
            }
        }
        },
        {
        nome: 'VULNERAVEL 70+',
        criterio_fuste: 2,
        criterio_dminc: 70,
        criterio_dmaxc: 999,
        criterio_n_min: 4,
        criterio_perc_min: 15,
        preservar: false,
        criterio_altura: 999,
        criterio_volume: 999,
        projeto: {
            connect: {
            id: projeto?.id
            }
        }
        },
        {
        nome: 'PROTEGIDA',
        criterio_fuste: 999,
        criterio_dminc: 999,
        criterio_dmaxc: 999,
        criterio_n_min: 999,
        criterio_perc_min: 999,
        preservar: true,
        criterio_altura: 999,
        criterio_volume: 999,
        projeto: {
            connect: {
            id: projeto?.id
            }
        }
        },
        {
        nome: 'NÃO SELECIONADA',
        criterio_fuste: 999,
        criterio_dminc: 999,
        criterio_dmaxc: 999,
        criterio_n_min: 999,
        criterio_perc_min: 999,
        preservar: true,
        criterio_altura: 999,
        criterio_volume: 999,
        projeto: {
            connect: {
            id: projeto?.id
            }
        }
        }
    ]

    for (const categoria of categorias) {
        await prismaClient.categoriaEspecie.create({
            data: {
                ...categoria
            }
        })
    }

      const equacoesVolume: Prisma.EquacaoVolumeCreateInput[] = [
        {
          nome: 'Fator de forma',
          expressao: '0.7 * (3.141592 * (DAP ^ 2) / 40000 ) * ALTURA',
        },
        {
          nome: 'Equação de Volume Flona Tapajós',
          expressao: 'EXP(-8.86102 + 1.93181 * LN(DAP) + 0.78683 * LN(ALTURA))'
        },
      ]

      for (const eqVolume of equacoesVolume) {
        await prismaClient.equacaoVolume.create({
          data: {
            ...eqVolume,
            projeto: {
              connect: {
                id: projeto?.id
              }
            }
          },
          
        })
      }
}