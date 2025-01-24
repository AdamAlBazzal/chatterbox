import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { username, password } = await request.json();

    const response = await fetch("http://localhost:8080/api/v1/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });

    const data = await response.json();

    return NextResponse.json({
      status: data,
    });
  } catch (err) {
    // setError(err.message);
    return NextResponse.json({
      hello: err,
    });
  }
}
