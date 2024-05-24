const Conf = {
    APPWRITE_ENDPOINT : String(import.meta.env.VITE_APPWRITE_URL),
    PROJECT_ID : String(import.meta.env.VITE_APPWRITE_PROJECT_ID ),
    DATABASE_ID : String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    COLLECTION_ID: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
    BUCKET_ID: String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
    apikey : String(import.meta.env.apikey)
}

export default Conf