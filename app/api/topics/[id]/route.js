import connectMongoDb from "../../../../libs/mongodb";
import Topic from "../../../../models/topic";
import {NextResponse} from "next/server";


export async function PUT(request, { params }) {
    const { id } = params;
    console.log(id);
    const { newTitle: title, newDescription: description } = await request.json();
    console.log(title, description);
    await connectMongoDb();
    await Topic.findByIdAndUpdate(id, { title, description });
    return NextResponse.json({ message: "Topic updated" }, { status: 200 });
}

export async function GET(request, {params}){

    const {id} = params;
    console.log(id);
    await connectMongoDb();
    const topic = await Topic.findOne({_id : id});
    return NextResponse.json({topic} , {status:200});

}