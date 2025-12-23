import { NextResponse } from 'next/server';

// Add this line to make it compatible with static export
export const dynamic = 'force-static';

export async function GET() {
  return NextResponse.json({ 
    status: 'ok',
    timestamp: new Date().toISOString()
  });
}