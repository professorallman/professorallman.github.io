> Don't re-invent the wheel  
> -common knowledge

I setout to create a blogging platform for myself for some ungodly reason. It all started when I went to create a github pages page. The suggestion was to use the Jekyll platform. It required installing ruby to run it, so instead of doing that I wrote my own in typescript.

My goal was simple enough, have one JSON file for wirering up a bunch of mardown files. I used angular and made a simple application I call Hyde [https://github.com/professorallman/hyde]

It's pretty straight forward and it works. Now that it's done all you have to do to use it update sitemap.json and tell it where your markdown file is

```javascript
{
    "featured":"/articles/helloworld.md",
    "categories":{
        "Web Development":[
            {
                "title":"Hyde, a work in progress",
                "category":"Web Development",
                "summary":"Woes in developing my own \"cms\"",
                "posted":"2018/07/24",
                "markdownLink":"/articles/webdev/hydeprogess.md"
            }
        ]
    }
}
```

I'm using a angular markdown plugin to do the actuall rendering to html instead of using the built in one that github has. One day I may try to call on it to get a consistent look. 

Besides not wanting to install ruby I also wanted to be able to blog right from github using their online editor, hence the choice of markdown. I'm also using the vscode markdown preview to see how this is going to turn out, it'l be interesting to see how the preview and what actually gets rendered by the angular plugin.

I also just realized vscode is not spell checking this markdown file as I type, huh, we'll have to see if there is a plugin for that as I'm a notoriously bad spellar.