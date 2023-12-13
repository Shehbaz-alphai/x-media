import { ChangeDetectorRef, Component, Input } from '@angular/core';
declare var $: any;
import { MatTooltip } from '@angular/material/tooltip';
import { BehaviourSubjectService } from '../../behaviour.subject.service';

@Component({
  selector: 'app-dynamic-table',
  templateUrl: './dynamic-table.component.html',
  styleUrl: './dynamic-table.component.css',
})
export class DynamicTableComponent {
  @Input() serviceName: string = '';
  @Input() packages: string[] = [];
  @Input() services: any[] = [];
  @Input() prices: any[] = [];
  @Input() list: any[] = [];
  isRow2Visible: boolean = false;
  isRowVisible: boolean = false;
  @Input() index: number = 0;
  service!:string;
  constructor(private cdr: ChangeDetectorRef,private bsServices: BehaviourSubjectService) {}
  ngOnInit() {}
  toggleRow2Visibility(index: number) {
    this.list.forEach((item, i) => {
      if (i !== index) {
        item.isVisible = false; // Close all other rows
      }
    });

    this.list[index].isVisible = !this.list[index].isVisible;
  }

  getIconValue(icon: any): string {
    if (typeof icon === 'boolean') {
      return icon ? 'true' : 'false';
    } else if (typeof icon === 'string') {
      return icon.toString();
    } else if (typeof icon === 'number') {
      return icon === 0 ? '0' : icon.toString();
    } else {
      return '';
    }
  }

  openModal() {
    this.isRowVisible = !this.isRowVisible;
  }

  closeModal(index: number) {
    this.list[index].isVisible = false;
  }

  // onOverlayClick(event: Event) {
  //   if (event.target === event.currentTarget) {
  //     this.closeModal();
  //   }
  // }
  addPrice(serviceName: string,tier:string, packages: string) {
    let updatedServiceName = serviceName;
    let updatedTier = tier;
    let updatedPrice = '';

    const result = updatedServiceName + ' ' + updatedTier + ' ' + updatedPrice + ' ' + packages;
    this.bsServices.services$.next(result)

  }
}
