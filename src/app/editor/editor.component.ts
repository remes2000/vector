import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SvgObject } from './_features/object/_interfaces';
import { ObjectType } from './_features/object/_enums';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditorComponent {
  objects: SvgObject[] = [
    {
      x: 50,
      y: 50,
      radius: 10,
      type: ObjectType.CIRCLE,
    },
    {
      x: 40,
      y: 100,
      width: 20,
      height: 50,
      type: ObjectType.RECTANGLE,
    },
    {
      x: 50,
      y: 200,
      radius: 10,
      type: ObjectType.CIRCLE,
    },
  ];
}
