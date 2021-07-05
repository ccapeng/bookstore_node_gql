import { gql } from 'apollo-server-express';

const typeDefs = gql`
  type Query {
    hello:String
    sayHello(name:String):String
    categoryList:[Category]
    category(id:ID!):Category
    publisherList:[Publisher]
    publisher(id:ID!):Publisher
    authorList:[Author]
    author(id:ID!):Author
    bookList:[Book]
    book(id:ID!):Book
  }
  type Category {
    id:ID!
    name:String
  }
  type Publisher {
    id:ID!
    name:String
  }
  type Author {
    id:ID!
    lastName:String
    firstName:String
  }
  type Book {
    id:ID!
    title:String
    category:Category
    publisher:Publisher
    author:Author
  }
  input CategoryInput {
    name:String!
  }
  input PublisherInput {
    name:String!
  }
  input AuthorInput {
    firstName:String
    lastName:String
  }
  input BookInput {
    title:String!
    categoryId:Int
    publisherId:Int
    authorId:Int
  }
  type Mutation {
    createCategory(input:CategoryInput):Category
    updateCategory(id:ID, input:CategoryInput):Category
    deleteCategory(id:ID):Category

    createPublisher(input:PublisherInput):Publisher
    updatePublisher(id:ID, input:PublisherInput):Publisher
    deletePublisher(id:ID):Publisher

    createAuthor(input:AuthorInput):Author
    updateAuthor(id:ID, input:AuthorInput):Author
    deleteAuthor(id:ID):Author
    
    createBook(input:BookInput):Book
    updateBook(id:ID, input:BookInput):Book
    deleteBook(id:ID):Book
  }
`;

export {
    typeDefs
}