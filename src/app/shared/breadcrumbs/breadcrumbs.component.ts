import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { RouterLinkActive } from "@angular/router";
import { Breadcrumb } from "../../dashboard/interfaces/breadcrumb.interface";

@Component({
  selector: 'breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BreadcrumbsComponent {

  constructor() {}

  @Input() items: Breadcrumb[] = [];
}
