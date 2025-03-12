const session = false;

const cadastro = [
  {
      name: 'Pessoa',
      description: 'Unidade de Manejo Florestal',
      href: '/pessoa'
  },
  {
      name: 'Escola',
      description: 'Unidade de Produção Anual',
      href: '/escola'
      
  },
  {
      name: 'Niveis',
      description: 'Equações de Volumes',
      href: '/equacao',
  }
]

const solutions = [
    {
        name: 'Inventário Florestal',
        description: 'Get a better understanding of where your traffic is coming from.',
        href: '#'
    },
    {
        name: 'Manejo Florestal',
        description: 'Speak directly to your customers in a more meaningful way.',
        href: '#',
    },
    { name: 'Segurança', description: "Your customers' data will be safe and secure.", href: '#' },
    {
        name: 'Integração com GIS',
        description: "Connect with third-party tools that you're already using.",
        href: '#',
    },
    {
        name: 'Mapeamento',
        description: 'Build strategic funnels that will drive your customers to convert',
        href: '#'
    },
]

export const defaultNavigation = [
    { name: 'Home', href: '/', current: false, visible: !session, subMenu: false, subMenuItems: [] },
    { name: 'Cadastro', href: '#', current: false, visible: !session, subMenu: true, subMenuItems: cadastro },
    { name: 'Soluções', href: '#', current: false, visible: !!session, subMenu: true, subMenuItems: solutions },
]

export const userNavigation = [
    { name: `Perfil (michael)`, href: '#' },
    { name: 'Alterar Senha', href: '/user/change-password' },
    { name: 'Logout', href: '#', click: () => {}},
]