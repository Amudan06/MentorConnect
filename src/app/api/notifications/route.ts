import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    message: 'Notifications fetched successfully!',
    data: [
      { id: 1, text: 'New mentor joined!' },
      { id: 2, text: 'Your session starts in 30 mins.' },
    ],
  });
}
