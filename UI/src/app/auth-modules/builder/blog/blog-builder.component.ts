import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { BlogBuilderService } from './blog-builder.service';
import { BlogModel } from './blog.model';

@Component({
  selector: 'app-blog-builder',
  templateUrl: './blog-builder.component.html'
})
export class BlogBuilderComponent implements OnInit {
  public Editor = ClassicEditor;
  post: BlogModel = new BlogModel();
  constructor(
    private route: ActivatedRoute,
    private service: BlogBuilderService
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe(q => this.loadData(q.name));
  }
  public onReady(editor) {
    editor.ui.view.editable.element.parentElement.insertBefore(
      editor.ui.view.toolbar.element,
      editor.ui.view.editable.element
    );
  }

  public onTagEdited($evt) {
    console.log($evt);
  }

  public submit() {
    this.service
      .postBlog(this.post._id, this.post)
      .toPromise()
      .then((response: any) => {
        this.loadData(response.data);
      });
  }
  //#region private methods
  private loadData(name: string) {
    this.service
      .getBlog(name)
      .toPromise()
      .then(t => {
        if (t) {
          this.post = t;
        }
      });
  }
  //#endregion
}
