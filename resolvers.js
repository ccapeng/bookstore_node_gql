import db from './db.js';

const resolvers = {
    Query: {
      hello: () => 'Hello world!',
      sayHello: (root,args,context,info) => {
        return `Hello ${args.name}`
      },

      categoryList:() =>{
        console.log("query categoryList");
        return db.categories.list();
      },
      category:(root,args,context,info) => {
        let id = parseInt(args.id, 10);
        console.log("query category", id);
        return db.categories.get(id);
      },
      publisherList:() => {
        console.log("query publisherList");
        return db.publishers.list();
      },
      publisher:(root,args,context,info) => {
        let id = parseInt(args.id, 10);
        console.log("query publisher", id);
        return db.publishers.get(id);
      },
      authorList:() => {
        console.log("query authorList");
        return db.authors.list()
      },
      author:(root,args,context,info) => {
        let id = parseInt(args.id, 10);
        console.log("query author", id);
        return db.authors.get(id);
      },
      bookList:() => {
        console.log("query bookList");
        return db.books.list();
      },
      book:(root,args,context,info) => {
        let id = parseInt(args.id, 10);
        console.log("query book", id);
        return db.books.get(id);
      }
    },
    Book: {
      category:(root,args,context,info) => {
        return db.categories.get(root.categoryId);
      },
      publisher:(root,args,context,info) => {
        return db.publishers.get(root.publisherId);
      },
      author:(root,args,context,info) => {
        return db.authors.get(root.authorId);
      }
    },
    Mutation: {
      createCategory:(root, args, context, info) => {
        let list = db.categories.list();
        let id = 0;
        for (let category of list) {
          let categoryId = parseInt(category.id, 10);
          if (categoryId > id) {
            id = categoryId;
          }
        }
        id += 1;
        let name = args.input.name;
        console.log("mutation createCategory", id, name);
        id = db.categories.create({id, name});
        return db.categories.get(id);
      },
      updateCategory:(root, args, context, info) => {
        let id = parseInt(args.id, 10);
        let name = args.input.name;
        console.log("mutation updateCategory", id, name);
        db.categories.update({id,name});
        return db.categories.get(id);
      },
      deleteCategory:(root, args, context, info) => {
        let id = parseInt(args.id, 10);
        console.log("mutation deleteCategory", id);
        let category =  db.categories.get(id);
        db.categories.delete(id);
        return category;
      },

      createPublisher:(root, args, context, info) => {
        let list = db.publishers.list();
        let id = 0;
        for (let publisher of list) {
          let publisherId = parseInt(publisher.id, 10);
          if (publisherId > id) {
            id = publisherId;
          }
        }
        id += 1;
        let name = args.input.name;
        console.log("mutation createPublisher", id, name);
        id = db.publishers.create({id, name});
        return db.publishers.get(id);
      },
      updatePublisher:(root, args, context, info) => {
        let id = parseInt(args.id, 10);
        let name = args.input.name;
        console.log("mutation updatePublisher", id, name);
        db.publishers.update({id,name});
        return db.publishers.get(id);
      },
      deletePublisher:(root, args, context, info) => {
        let id = parseInt(args.id, 10);
        console.log("mutation deletePublisher", id);
        let publisher =  db.publishers.get(id);
        db.publishers.delete(id);
        return publisher;
      },

      createAuthor:(root, args, context, info) => {
        let list = db.authors.list();
        let id = 0;
        for (let author of list) {
          let authorId = parseInt(author.id, 10);
          if (authorId > id) {
            id = authorId;
          }
        }
        id += 1;
        let firstName = args.input.firstName;
        let lastName = args.input.lastName;
        console.log("mutation createAuthor", id, firstName, lastName);
        id = db.authors.create({id, firstName, lastName});
        return db.authors.get(id);
      },
      updateAuthor:(root, args, context, info) => {
        let id = parseInt(args.id, 10);
        let firstName = args.input.firstName;
        let lastName = args.input.lastName;
        console.log("mutation updateAuthor", id, firstName, lastName);
        db.authors.update({id, firstName, lastName});
        return db.authors.get(id);
      },
      deleteAuthor:(root, args, context, info) => {
        let id = parseInt(args.id, 10);
        console.log("mutation deleteAuthor", id);
        let author =  db.authors.get(id);
        db.authors.delete(id);
        return author;
      },

      createBook:(root, args, context, info) => {
        let list = db.books.list();
        let id = 0;
        for (let book of list) {
          let bookId = parseInt(book.id, 10);
          if (bookId > id) {
            id = bookId;
          }
        }
        id += 1;
        let title = args.input.title;
        let categoryId = args.input.categoryId;
        let publisherId = args.input.publisherId;
        let authorId = args.input.authorId;
        console.log("mutation createBook", id, title, categoryId, publisherId, authorId);
        id = db.books.create({id, title, categoryId, publisherId, authorId});
        return db.books.get(id);
      },
      updateBook:(root, args, context, info) => {
        let id = parseInt(args.id, 10);
        let title = args.input.title;
        let categoryId = args.input.categoryId;
        let publisherId = args.input.publisherId;
        let authorId = args.input.authorId;
        console.log("mutation updateBook", id, title, categoryId, publisherId, authorId);
        db.books.update({id, title, categoryId, publisherId, authorId});
        return db.books.get(id);
      },
      deleteBook:(root, args, context, info) => {
        let id = parseInt(args.id, 10);
        console.log("mutation deleteBook", id);
        let book =  db.books.get(id);
        db.books.delete(id);
        return book;
      }

   }
};

export {
    resolvers
}