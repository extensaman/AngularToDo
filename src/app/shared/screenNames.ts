import {MenuScreenName} from "../model/MenuScreenName";

export class ScreenNames {
  private _menuScreenNames: MenuScreenName[];
  private _filterScreenName: string;


  constructor(menuScreenNames: MenuScreenName[], filterScreenName: string) {
    this._menuScreenNames = menuScreenNames;
    this._filterScreenName = filterScreenName;
  }


  get menuScreenNames(): MenuScreenName[] {
    return this._menuScreenNames;
  }

  set menuScreenNames(value: MenuScreenName[]) {
    this._menuScreenNames = value;
  }

  get filterScreenName(): string {
    return this._filterScreenName;
  }

  set filterScreenName(value: string) {
    this._filterScreenName = value;
  }
}
