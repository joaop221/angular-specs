import { Component } from '@angular/core';

@Component({
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss']
})
export class ListsComponent {

  hasPvNumber(pvNumber: number) {
    return (pv: any) => pv.pv === pvNumber
        ? true
        : (pv.filiais || [])
            .some(filial => filial.pv === pvNumber);
  }

  getInsertedPvFromSession() {
      const insertUserPv = { pv: 123};

      return [].find( this.hasPvNumber(insertUserPv.pv) );
  }

  getPvTreeList(): Pv[] {
      const insertedPvSession = this.getInsertedPvFromSession();

      if (insertedPvSession) {
          const newPvListTree: any[] = [];
          const filiais = insertedPvSession.filiais || [];

          if (!insertedPvSession.desabilitado) {
              newPvListTree.push({
                  ...insertedPvSession,
                  filiais: null
              });
          }

          return [
              ...newPvListTree,
              ...filiais.map(filialPv => ({ ...filialPv }))
          ];
      }

      return [];
  }
}
