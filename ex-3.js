//  Start coding here
class User {
    constructor(id, name, email) {
        this.id = id;
        this.name = name;
        this.email = email;
    }
}

class postList {
    constructor(posts = []) {
        this.posts = posts;
    }

    addPost(post) {
        this.posts.push(post);
    }
    sharePost(postTitle) {
        console.log(`You've shared post ${postTitle} to your friend.`)
    }
}

class Post {
    constructor(id, title, content, comment= []) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.comment = comment;
    }

    addComment(comments) {
        this.comment.push(comments);
    }
}

class Comment {
    constructor(id, content, createdBy) {
        this.id = id;
        this.content = content;
        this.createdBy = createdBy;
        this.like = 0;
    }

    addLike() {
        this.like += 1;
    }
}

class Facebook {
    constructor(groupList = [], pageList = []) {
        this.groupList = groupList;
        this.pageList = pageList;
    }

    addGroup(groupName) {
        this.groupList.push(groupName);
    }

    addPage(pageName) {
        this.pageList.push(pageName);
    }
}

class FacebookPage {
    constructor(name) {
        this.name = name;
    }
}

class Notification {
    constructor(id ) {
        this.id = id;
    }

    send() {
        return console.log(`Notification: ${comment.createdBy} has just commented on this post—"${post.title}”`)
    }
}

const user = new User(1, 'Por', 'Por@example.com');
const post = new Post(1, 'Hello', 'Test Post');
const comment = new Comment(1, "this's test comment", user.name);
post.addComment(comment);

const notification = new Notification(1);
notification.send();

const fb = new Facebook();
fb.addGroup('Tech Group');
fb.addPage('TechUp');
console.log(fb);