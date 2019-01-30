import { Component, OnInit } from "@angular/core";
import * as ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { BlogBuilderService } from "./blog-builder.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-blog-builder",
  templateUrl: "./blog-builder.component.html"
})
export class BlogBuilderComponent implements OnInit {
  public Editor = ClassicEditor;
  post: any = { tags: [] };
  constructor(
    private route: ActivatedRoute,
    private service: BlogBuilderService
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe(q => {
      this.service
        .getBlog(q.name)
        .toPromise()
        .then(t => {
          if (t) {
            this.post = t;
          }
        });
    });
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
      .postBlog(this.post.title, this.post)
      .toPromise()
      .then(() => {
        console.log("ad");
      });
  }
}
