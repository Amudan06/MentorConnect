import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    message: 'Messages fetched successfully!',
    data: [
      { id: 1, sender: 'John', text: 'Hey, how’s the mentorship going?' },
      { id: 2, sender: 'Alice', text: 'Can we reschedule our call?' },
    ],
  });
}
