import mongoose from "mongoose";

export async function connect(){
    try {
        await mongoose.connect
    ("mongodb://localhost/mongodbgraphql",{
    useNewUrlParser: true
});
console.log(">>> DB esta conectada");
    } catch  {
        console.log("Algo ha ido mal");
        console.log(e);
    }
}
