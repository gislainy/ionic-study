
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
    rules: ["gerente"]
  },
  {
    component: ListPage,
    segment: "list",
    name: "list",
    rules: ["gerente"]
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
];

const rolesGroup = {
  gerente: [
    "financeiro",
    "repca"
  ],
  administrador: [

  ],
  recepcao: [

  ]
}


function pode(userId: string, rules: Array<string>): Array<IPageList> {

  return PageList;
}

export {
  PageList
}