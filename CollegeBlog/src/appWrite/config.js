import conf from "../conf/conf";
import { Client , ID , Databases , Storage , Query } from "appwrite";

export class Service{
    client = new Client();
    databases;
    bucket;

    constructor(){
        this.client
            .setEndpoint(conf.appWriteUrl)
            .setProject(conf.appWriteProjectId);
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    // how to create post

    async createPost({title , slug , content , feauredImage , status , userId}){
        try{
            return await this.databases.createDocument(conf.appWriteDatabaseId, conf.appWriteCollectionId, slug , {
                title,
                content, 
                feauredImage,
                status,
                userId,
            });
        } catch(e){
            throw e;
        }
    }

    async updataPost(slug, {title, content , feauredImage , status}){
        try{
            return await this.databases.updateDocument(conf.appWriteDatabaseId, conf.appWriteCollectionId, slug , {
                title,
                content, 
                feauredImage,
                status,
            });
        } catch(e){
            throw e;
        }
    }

    async deletePost(slug){
        try{
            await this.databases.deleteDocument(conf.appWriteDatabaseId, conf.appWriteCollectionId, slug);
            return true;
        } catch(error){
            throw error;
        }
    }

    async getPost(slug){
        try {
            return await this.databases.getDocument(conf.appWriteDatabaseId, conf.appWriteCollectionId, slug);
        } catch (error) {
            throw error;
        }
    }

    async getAllPost(queries = [Query.equal("status", "active")]){
        try{
            await this.databases.listDocuments(
                conf.appWriteDatabaseId, 
                conf.appWriteCollectionId,
                queries
            )
        } catch(e){
            console.log("Appwrite service :: getAllPost :: error");
            return false;
        }
    }


    //file upload services

    async uploadFile(file){
        try{
            await this.bucket.createFile(
                conf.appWriteBucketId,
                ID.unique(),
                file
            )
        } catch{
            console.log("Appwrite service :: uploadFile :: error");
            return false;
        }
    }

    async deleteFile(fileId){
        try{
            await this.bucket.createFile(
                conf.appWriteBucketId,
                fileId
            )
            return true;
        } catch(e){
            console.log("Appwrite service :: deleteFile :: error");
            return false;
        }
    }

    getFilePreview(fileId){
        return this.bucket.getFilePreview(
            conf.appWriteBucketId,
            fileId
        )
    }

}



const service = new Service();

export default service;