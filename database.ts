import { openDB } from 'idb';
import { Video } from '../types';

const DB_NAME = 'videoStorageDB';
const DB_VERSION = 1;
const STORE_NAME = 'videos';

export async function initDB() {
  const db = await openDB(DB_NAME, DB_VERSION, {
    upgrade(db) {
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, { keyPath: 'id' });
      }
    },
  });
  return db;
}

export async function getAllVideos() {
  const db = await initDB();
  return db.getAll(STORE_NAME);
}

export async function addVideo(videoData: Video) {
  const db = await initDB();
  return db.add(STORE_NAME, videoData);
}

export async function getVideo(id: number) {
  const db = await initDB();
  return db.get(STORE_NAME, id);
}

export async function deleteVideo(id: number) {
  const db = await initDB();
  return db.delete(STORE_NAME, id);
}

export async function updateVideo(video: Video) {
  const db = await initDB();
  return db.put(STORE_NAME, video);
}