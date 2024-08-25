let request: IDBOpenDBRequest;
let db: IDBDatabase;
let version = 1;

export interface Todo {
  id: number;
  title: string;
  date: Date;
  isCompleted: boolean;
  description: string;
}

export enum Stores {
  Todos = "todos",
}

const dbName = "dbTodo";

export const initDB = (): Promise<boolean> => {
  return new Promise((resolve) => {
    request = indexedDB.open(dbName, version);
    request.onupgradeneeded = () => {
      db = request.result;

      if (!db.objectStoreNames.contains(Stores.Todos)) {
        console.log("Creating todos store");
        db.createObjectStore(Stores.Todos, {
          keyPath: "id",
          autoIncrement: true,
        });
      }
    };

    request.onsuccess = (event) => {
      const successRes: IDBOpenDBRequest = event.target as IDBOpenDBRequest;
      db = successRes.result;
      version = db.version;
      resolve(true);
    };

    request.onerror = () => {
      console.error("Error opening db");
      resolve(false);
    };
  });
};

export const addData = <T>(
  storeName: string,
  data: T
): Promise<T | string | null> => {
  return new Promise((resolve) => {
    request = indexedDB.open(dbName, version);
    request.onsuccess = () => {
      db = request.result;
      const tx = db.transaction(storeName, "readwrite");
      const store = tx.objectStore(storeName);
      store.add(data);
      resolve(data);
    };

    request.onerror = () => {
      const error = request.error?.message;
      if (error) resolve(error);
      else resolve("Unknown error");
    };
  });
};

export const getData = <T>(storeName: Stores): Promise<T[]> => {
  return new Promise((resolve) => {
    request = indexedDB.open(dbName, version);
    request.onsuccess = (event) => {
      const successRes: IDBOpenDBRequest = event.target as IDBOpenDBRequest;
      db = successRes.result;
      const tx = db.transaction(storeName, "readonly");
      const store = tx.objectStore(storeName);
      const res = store.getAll();
      res.onsuccess = () => {
        resolve(res.result);
      };
    };
  });
};

export const deleteData = (storeName: Stores, id: string): Promise<boolean> => {
  return new Promise((resolve) => {
    request = indexedDB.open(dbName, version);
    request.onsuccess = () => {
      db = request.result;
      const tx = db.transaction(storeName, "readwrite");
      const store = tx.objectStore(storeName);
      store.delete(id);
      resolve(true);
    };

    request.onerror = () => {
      resolve(false);
    };
  });
};

export const updateData = <T>(
  storeName: Stores,
  data: T
): Promise<T | string | null> => {
  return new Promise((resolve) => {
    request = indexedDB.open(dbName, version);
    request.onsuccess = () => {
      db = request.result;
      const tx = db.transaction(storeName, "readwrite");
      const store = tx.objectStore(storeName);
      store.put(data);
      resolve(data);
    };

    request.onerror = () => {
      const error = request.error?.message;
      if (error) resolve(error);
      else resolve("Unknown error");
    };
  });
};
