import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  findPvTreeList(): void {
    const pvListTree: any[] = [];
    const completePvList = [{filiais: ''}];
    const insertUserPv = {pv: {filiais: ''}};
    let found = false;

    completePvList.forEach(pv => {
        const filiais =  pv.filiais;
        if (!found) {
            if (pv.pv === insertUserPv.pv) {
                found = true;
            } else if (filiais && filiais.length > 0) {
                if (filiais && filiais.length > 0) {
                    filiais.forEach(f => {
                        if (f.pv === insertUserPv.pv) {
                            found = true;
                        }
                    });
                }
            }
        }
        if (found) {
            const m = Object.assign({}, pv);
            m.filiais = null;
            if (!m.desabilitado) {
                pvListTree.push(m);
            }
            if (filiais && filiais.length > 0) {
                filiais.forEach(f => {
                    pvListTree.push(Object.assign({}, f));
                });
            }
            this.pvList = pvListTree;
            return;
        }
    });
}
}
