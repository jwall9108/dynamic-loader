import { Component, OnInit } from '@angular/core';
import { DynamicComponentData } from '@models/dynamic-component-data.model';
import { ComponentType } from '@shared/enum';
import { StateService } from '@services/state.service';
import { MatSnackBar, MatDialog, MatDialogRef } from '@angular/material';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  dynamicComponents: DynamicComponentData[] = [];

  constructor(private stateService: StateService, private snackBar: MatSnackBar, public dialog: MatDialog) { }

  ngOnInit() {
  }

  onAdd(type: ComponentType) {
    this.dynamicComponents.push(this.stateService.getMockData(type));
  }


  save() {
    const dialogRef = this.dialog.open(SaveDialogComponent);

    dialogRef.afterClosed().pipe(filter(result => result))
      .subscribe(result => {
        this.stateService.savePage(result, this.dynamicComponents);
        this.snackBar.open(`${result} Saved!`, '', {
          duration: 3000
        });
        this.clear();
      });
  }

  clear() {
    this.dynamicComponents = [];
  }
}


@Component({
  selector: 'app-save-dialog',
  template: `
  <div mat-dialog-content>
    <mat-form-field>
      <input matInput placeholder="Page Name" [(ngModel)]="pageName">
    </mat-form-field>
  </div>
  <div mat-dialog-actions>
    <button mat-flat-button color="primary" [mat-dialog-close]="pageName" cdkFocusInitial>Save</button>
  </div>
`,
})
export class SaveDialogComponent {
  pageName = '';

  constructor(
    public dialogRef: MatDialogRef<SaveDialogComponent>) { }

  onSave(): void {
    this.dialogRef.close(this.pageName);
  }
}
