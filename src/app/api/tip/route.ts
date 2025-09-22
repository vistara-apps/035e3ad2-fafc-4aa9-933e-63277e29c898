import { NextRequest, NextResponse } from 'next/server';
import { Tip } from '@/types';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { tipperId, creatorId, amount, message, tierAchieved } = body;

    // Validate required fields
    if (!tipperId || !creatorId || !amount) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // In real app, this would:
    // 1. Validate the transaction on blockchain
    // 2. Update creator's goal progress
    // 3. Store tip record in database
    // 4. Trigger notifications

    const newTip: Tip = {
      tipId: `tip-${Date.now()}`,
      tipperId,
      creatorId,
      amount: parseFloat(amount),
      timestamp: new Date(),
      message: message || undefined,
      tierAchieved: tierAchieved || undefined,
      isPersonalized: !!message,
    };

    // Mock response - in real app, this would be stored and processed
    console.log('New tip received:', newTip);

    return NextResponse.json({
      success: true,
      data: {
        tip: newTip,
        message: 'Tip processed successfully',
      },
    });
  } catch (error) {
    console.error('Error processing tip:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}

