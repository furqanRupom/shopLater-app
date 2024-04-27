import { NextRequest,NextResponse } from "next/server";


export const GET = async (request:NextRequest) => {
    const res = await fetch("https://api.escuelajs.co/api/v1/users");
    const users = await res.json();
    return NextResponse.json({success:true,message:"Users Fetched Successfully",data:users})
}