import mongoose from "mongoose"


export const db = async () => {
    return await mongoose.connect(process.env.uri).
        then(() => {
            console.log("DB Done => ", process.env.uri);

        })
        .catch((err) => {
            console.log("DB failed", err);

        })
}