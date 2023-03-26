import { collection, deleteDoc, doc, getDocs, query, setDoc, where } from "firebase/firestore/lite";
import { nanoid } from "nanoid";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { db } from "../firebase";

export const useFirestoreState = () => {
    const [data, setData] = useState([]);
    const [error, setError] = useState();
    const [loading, setLoading] = useState({});
    // const uid = auth.currentUser.uid;
    const { user } = useAuth();

    const getData = async () => {
        try {
            setLoading((prev) => ({ ...prev, getData: true }));
            const q = query(collection(db, "books"), where("uid", "==", user.uid));
            const querySnapshot = await getDocs(q);
            const datos = querySnapshot.docs.map((doc) => doc.data());
            setData(datos);
        } catch (error) {
            console.log(error);
            setError(error.code);
        } finally {
            setLoading((prev) => ({ ...prev, getData: false }));
        }
    };


    const addData = async (bookfav, bookid) => {
        try {
            setLoading((prev) => ({ ...prev, addData: true }));
            const newData = { nanoid: nanoid(6), bookfav: bookfav, bookid: bookid, uid: user.uid };
            const docRef = doc(db, "books", newData.nanoid);
            await setDoc(docRef, newData);
            setData([...data, newData]);
        } catch (error) {
            console.log(error);
            setError(error.code);
        } finally {
            setLoading((prev) => ({ ...prev, addData: false }));
        }
    };

    const deleteData = async (nanoid) => {
        try {
            setLoading((prev) => ({ ...prev, [nanoid]: true }));
            const docRef = doc(db, "books", nanoid);
            await deleteDoc(docRef);
            setData(data.filter((doc) => doc.nanoid !== nanoid));
        } catch (error) {
            console.log(error);
            setError(error.code);
        } finally {
            setLoading((prev) => ({ ...prev, [nanoid]: false }));
        }
    };

    return { data, error, loading, getData, addData, deleteData };
};
