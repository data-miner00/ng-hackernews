import { Injectable } from '@angular/core';
import {
    addDoc,
    arrayRemove,
    arrayUnion,
    collection,
    deleteDoc,
    doc,
    DocumentData,
    DocumentReference,
    Firestore,
    getDocs,
    setDoc,
    updateDoc,
} from '@angular/fire/firestore';

@Injectable({
    providedIn: 'root',
})
export class FirestoreService {
    constructor(private firestore: Firestore) {}

    async getByIdAsync(collectionName: string, id: string) {
        const docRef: DocumentReference<DocumentData> = doc(
            this.firestore,
            `${collectionName}/${id}`
        );

        return docRef;
    }

    async getAllAsync(collectionName: string) {
        return await getDocs(collection(this.firestore, collectionName));
    }

    async createAsync(collectionName: string, data: object) {
        const docRef = await addDoc(
            collection(this.firestore, collectionName),
            data
        );
        console.log('Document written with ID: ', docRef.id);
    }

    async createByIdAsync(collectionName: string, id: string, data: object) {
        const docRef: DocumentReference<DocumentData> = doc(
            this.firestore,
            collectionName,
            id
        );

        setDoc(docRef, data);
    }

    async updateAsync(collectionName: string, id: string, data: object) {
        const docRef: DocumentReference<DocumentData> = doc(
            this.firestore,
            collectionName,
            id
        );

        setDoc(docRef, data, { merge: true });
    }

    async addToArrayAsync(
        collectionName: string,
        id: string,
        fieldToAdd: string,
        ...itemsToAdd: any[]
    ) {
        const docRef: DocumentReference<DocumentData> = doc(
            this.firestore,
            collectionName,
            id
        );

        updateDoc(docRef, {
            [fieldToAdd]: arrayUnion(itemsToAdd),
        });
    }

    async removeFromArrayAsync(
        collectionName: string,
        id: string,
        fieldToRemove: string,
        ...itemsToRemove: any[]
    ) {
        const docRef: DocumentReference<DocumentData> = doc(
            this.firestore,
            collectionName,
            id
        );

        updateDoc(docRef, {
            [fieldToRemove]: arrayRemove(itemsToRemove),
        });
    }

    async deleteAsync(collectionName: string, id: string) {
        const docRef: DocumentReference<DocumentData> = doc(
            this.firestore,
            collectionName,
            id
        );

        deleteDoc(docRef);
    }
}
