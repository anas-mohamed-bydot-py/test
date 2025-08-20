import mongoose from "mongoose"


export const db = async () => {
    return await mongoose.connect(process.env.uri).
        then(() => {
            console.log("DB Done");

        })
        .catch((err) => {
            console.log("DB failed", err);

        })
}