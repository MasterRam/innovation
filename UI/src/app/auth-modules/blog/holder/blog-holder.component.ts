import { Component, OnInit } from '@angular/core';
import { BlogModel } from '../../builder/blog/blog.model';
import { BlogService } from '../blog.service';

@Component({
    selector: 'app-blog-holder',
    templateUrl: './blog-holder.component.html',
    styles: [
        `
        .blog-list{
            overflow: auto;
            flex-wrap: nowrap;
            position: relative;
        }
        .blog-list:hover::before,.blog-list:hover::after{
            background: #04040459;
        }
        .blog-list:hover::before{
            left:50px;
            content: '\\2770';
        }
        .blog-list:hover::after{
            right:50px;
            content: '\\2771';
        }
        .blog-list::before, .blog-list::after {
            color: #e0e0e0;
            position: absolute;
            top: 100px;
            height: 50px;
            width: 50px;
            text-align: center;
            line-height: 45px;
            border-radius: 50%;
            font-size: 3rem;
            z-index:10;
        }
        `
    ]
})

export class BlogHolderComponent implements OnInit {
    constructor(private service: BlogService) { }
    public blogs: BlogModel[] = [];
    ngOnInit() {
        this.getBlogList();
    }
    getBlogList() {
        this.service.GetAllblogs().toPromise().then((Response: any) => {
            this.blogs = Response;
        });
    }
}
