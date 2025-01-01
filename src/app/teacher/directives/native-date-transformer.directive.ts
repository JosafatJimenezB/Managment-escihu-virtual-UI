import { Directive, Injectable } from "@angular/core";
import { AbstractTuiValueTransformer, TuiDay } from "@taiga-ui/cdk";
import { TUI_DATE_VALUE_TRANSFORMER } from "@taiga-ui/kit";

type From = TuiDay | null;

type To = Date | null;


@Injectable()
class ExampleTransformer extends AbstractTuiValueTransformer<From, To> {
  fromControlValue(controlValue: To): From {
      return controlValue && TuiDay.fromLocalNativeDate(controlValue);
  }

  toControlValue(componentValue: From): To {

      if (!componentValue) {
          return null;
      }
      const dateWithoutTime = new Date(componentValue.year, componentValue.month - 1, componentValue.day);
      return dateWithoutTime;
      // return componentValue?.toLocalNativeDate() || null;
  }
}

@Directive({
  selector: 'tui-input-date[toNativeDate]',
  providers: [
      {
          provide: TUI_DATE_VALUE_TRANSFORMER,
          useClass: ExampleTransformer,
      },
  ],
})
export class NativeDateTransformerDirective {}
