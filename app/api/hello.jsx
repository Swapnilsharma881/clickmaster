export async function GET() {
    return Response.json({ message: "This is a GET request" }, { status: 200 });
  
  }
  
  export async function POST() {
    return Response.json({ message: "This is a POST request" }, { status: 200 });
  }
  