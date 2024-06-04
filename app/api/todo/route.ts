import Task from "@/models/Task";
import dbConnect from "@/lib/db_connect";

export async function POST(req: Request) {

    // Connect to BD
    await dbConnect();
    
    // Process a POST request
    const { task } = await req.json();
    console.log(task)
    // try {
    //     const data = new Task({ task });

    //     await data.save();

    //     return Response.json({ message: "OK" });
    // } catch (error) {
    //     console.log("Error");
    // }
}
