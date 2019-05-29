import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

export { Todo } from './todo.interface';
export {Employee} from './employee.interface';
export{Department} from './department.interface';
@NgModule({
  imports: [CommonModule]
})
export class DatasModule {}
