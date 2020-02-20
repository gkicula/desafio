import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/produto' },
  { path: 'produto', loadChildren: () => import('./pages/produto/produto.module').then(m => m.ProdutoModule) },
  { path: 'solicitacao', loadChildren: () => import('./pages/solicitacao/solicitacao.module').then(m => m.SolicitacaoModule) }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
