
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

/** acomodacao */
import { AcomodacaoAddPage } from '../pages/acomodacao-add/acomodacao-add';
import { AcomodacaoEditPage } from '../pages/acomodacao-edit/acomodacao-edit';
import { AcomodacaoListPage } from '../pages/acomodacao-list/acomodacao-list';

/**reserva */
import { ReservaAddPage } from '../pages/reserva-add/reserva-add';
import { ReservaEditPage } from '../pages/reserva-edit/reserva-edit';
import { ReservaListPage } from '../pages/reserva-list/reserva-list';
import { ReservaConfirmPage } from '../pages/reserva-confirm/reserva-confirm';

/**financeiro */
import { FinanceiroListPage } from '../pages/financeiro-list/financeiro-list';
import { FinanceiroDespesaAddPage } from '../pages/financeiro-despesa-add/financeiro-despesa-add';
import { FinanceiroReceitaAddPage } from '../pages/financeiro-receita-add/financeiro-receita-add';


/**usuario */
import { UsuarioListPage } from '../pages/usuario-list/usuario-list';
import { UsuarioAddPage } from '../pages/usuario-add/usuario-add';
import { UsuarioEditPage } from '../pages/usuario-edit/usuario-edit';


const PageList = [
  {
    component: HomePage,
    segment: "home",
    name: "home",
    rules: ["qualquerUsuarioLogado"]
  },
  {
    component: ListPage,
    segment: "list",
    name: "list",
    rules: ["qualquerUsuarioLogado"]
  },
  {
    component: AcomodacaoAddPage,
    segment: "acomodacao-add",
    name: "Adicinar Acomodacão",
    rules: ["recepcao"]
  },
  {
    component: AcomodacaoEditPage,
    segment: "acomodacao-add",
    name: "Editar Acomodacão",
    rules: ["recepcao"]
  },
  {
    component: AcomodacaoListPage,
    segment: "acomodacao-list",
    name: "Listagem de Acomodacão",
    rules: ["recepcao"]
  },
  {
    component: ReservaListPage,
    segment: "reserva-list",
    name: "Listagem de Reserva",
    rules: ["recepcao"]
  },
  {
    component: ReservaAddPage,
    segment: "reserva-add",
    name: "Adicionar Reserva",
    rules: ["recepcao"]
  },
  {
    component: ReservaEditPage,
    segment: "reserva-edit",
    name: "Editar Reserva",
    rules: ["recepcao"]
  },
  {
    component: ReservaConfirmPage,
    segment: "reserva-confirm",
    name: "Confirmar Reserva",
    rules: ["gerente"]
  },
  {
    component: FinanceiroListPage,
    segment: "financeiro-list",
    name: "Listagem Financeiro",
    rules: ["gerente", "financeiro"]
  },
  {
    component: FinanceiroDespesaAddPage,
    segment: "financeiro-despesa-add",
    name: "Adicioanar Despesa Financeiro",
    rules: ["gerente", "financeiro"]
  },
  {
    component: FinanceiroReceitaAddPage,
    segment: "financeiro-receita-add",
    name: "Adicionar Receita Financeiro",
    rules: ["gerente", "financeiro"]
  },
  {
    component: UsuarioListPage,
    segment: "usuario-list",
    name: "Listagem de Usuario",
    rules: ["gerente", "financeiro", "administrador"]
  },
  {
    component: UsuarioAddPage,
    segment: "usuario-add",
    name: "Adicionar Usuario",
    rules: ["administrador"]
  },
  {
    component: UsuarioEditPage,
    segment: "usuario-edit",
    name: "Editar Usuario",
    rules: ["administrador"]
  },
];

interface IPageList {
  component: any,
  segment: string,
  name: string,
  rules: Array<string>
}

const userList = [
  {
    _id: 'userGislainyId',
    email: 'gislainycrisostomo@gmail.com',
    roles: ["gerente"]
  },
  {
    _id: 'userJoseId',
    email: 'joseneto.design@gmail.com',
    roles: ["administrador"]
  },
  {
    _id: 'userMarcelloId',
    email: 'marcellovcs@gmail.com',
    roles: ["recepcao"]
  },
  {
    _id: 'userRamonId',
    email: 'ramonhenrique@gmail.com',
    roles: ["gerente", "financeiro"]
  },
];

const rolesGroup = {
  gerente: [
    "gerente",
    "recepcao"
  ],
  administrador: [
    "gerente",
    "financeiro",
    "administrador",
    "recepcao",
  ],
  recepcao: [
    "recepcao",
  ],
  financeiro: [
    "financeiro"
  ]
}


function pode(userId: string): Array<IPageList> {
  debugger
  const user = userList.filter(u => u._id === userId)[0];
  const permissoes = [];
  Object.keys(rolesGroup).forEach(r => {
    if (user.roles.some(_r => _r == r)) {
      rolesGroup[r].forEach(_r => {
        if (permissoes.every(p => _r != p))
          permissoes.push(_r)
      })
    };
  });
  const hasPermissoesPages = [];
  PageList.forEach(p => {
    p.rules.some(r => {
      if(r == "qualquerUsuarioLogado") {
        hasPermissoesPages.push(p); 
        return true;
      } else if(permissoes.indexOf(r) >= 0) {
        hasPermissoesPages.push(p); 
        return true;
      }
    });
  })
  return hasPermissoesPages;
}

export {
  pode
}