import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {/// nos da la ruta que quiere ingesar al usuario 
  //state la ruta completa 
  return false; //false lo protege
};
