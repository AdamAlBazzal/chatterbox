import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    // Extract the Authorization header from the incoming request
    const authHeader = request.headers.get("Authorization");

    // Ensure the Authorization header is present
    if (!authHeader) {
      return NextResponse.json(
        { error: "Authorization header is missing." },
        { status: 401 }
      );
    }

    const response = await fetch("http://localhost:8080/api/v1/accounts", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: authHeader,
      },
    });

    if (!response.ok) {
      return NextResponse.json(
        { error: "Failed to fetch data from the API." },
        { status: response.status }
      );
    }

    const data = await response.json();

    return NextResponse.json({
      data,
    });
  } catch (err) {
    // setError(err.message);
    return NextResponse.json({
      message: err,
    });
  }
}
