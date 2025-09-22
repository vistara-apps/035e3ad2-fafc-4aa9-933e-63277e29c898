import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    // Handle Farcaster frame interactions
    // This is a simplified implementation - in real app, you'd handle different button actions

    const frameResponse = {
      frames: [
        {
          version: 'vNext',
          image: `${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/frame-image.svg`,
          buttons: [
            {
              label: 'View Creator Profile',
              action: 'post',
              target: '/api/frame/profile',
            },
            {
              label: 'Send Tip',
              action: 'post',
              target: '/api/frame/tip',
            },
          ],
          input: {
            text: 'Enter tip amount (ETH)',
          },
          state: {
            creatorId: 'creator-123', // In real app, this would be dynamic
          },
        },
      ],
    };

    return NextResponse.json(frameResponse);
  } catch (error) {
    console.error('Frame interaction error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// Handle frame profile view
export async function GET() {
  // Return frame metadata for initial load
  const frameMetadata = {
    version: 'vNext',
    image: `${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/frame-image.svg`,
    buttons: [
      {
        label: 'Tip Creator',
        action: 'post',
        target: '/api/frame',
      },
    ],
  };

  return NextResponse.json(frameMetadata);
}

