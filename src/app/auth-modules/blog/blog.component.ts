import { Component, OnInit } from '@angular/core';
import { BlogModel } from './models/blog.model';
import { Router, Route, ActivatedRoute } from '@angular/router';
import { BlogService } from './blog.service';

@Component({
    selector: 'app-blog',
    templateUrl: './blog.component.html'
})

export class BlogComponent implements OnInit {
    blog: BlogModel = new BlogModel();
    constructor(private route: ActivatedRoute, private service: BlogService) { }

    ngOnInit() {
        console.log('123123');
        this.route.params.subscribe(s => {
            console.log(s['blog_name']);
            this.blog.title = s['blog_name'];
            this.service.GetBlogSample(this.blog.title).subscribe(t => {
                this.blog.title = t.title;
                this.blog.tags = t.tags;
                this.blog.author = t.author;
                this.blog.content = t.content;
                this.blog.created_at = t.created_at;
                this.blog.last_update_at = t.last_update_at;
            }, err => this.blog = { title: 'No Post Available', no_content: true } as BlogModel);
        });

    }
}
