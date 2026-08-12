import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// In-memory rate limiter
const rateLimit = new Map<string, { count: number; timestamp: number }>();
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const MAX_REQUESTS = 5; // 5 requests per minute

export async function POST(request: Request) {
  try {
    // Rate Limiting
    const ip = request.headers.get('x-forwarded-for') || 'anonymous';
    const now = Date.now();
    const windowStart = now - RATE_LIMIT_WINDOW;
    
    // Clean up old entries occasionally
    if (Math.random() < 0.1) {
      for (const [key, value] of rateLimit.entries()) {
        if (value.timestamp < windowStart) rateLimit.delete(key);
      }
    }

    const currentRate = rateLimit.get(ip) || { count: 0, timestamp: now };
    
    if (currentRate.timestamp < windowStart) {
      currentRate.count = 1;
      currentRate.timestamp = now;
    } else {
      currentRate.count++;
    }
    
    rateLimit.set(ip, currentRate);

    if (currentRate.count > MAX_REQUESTS) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      );
    }

    const body = await request.json();
    const { name, email, subject, message, botField } = body;

    // Artificial delay to show off the beautiful loading state in the UI
    await new Promise((resolve) => setTimeout(resolve, 800));

    // Spam Protection (Honeypot)
    if (botField) {
      // Act like it succeeded to fool the bot
      return NextResponse.json({ success: true, dummy: true }, { status: 201 });
    }

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const submission = await prisma.contactSubmission.create({
      data: {
        name,
        email,
        subject,
        message,
      },
    });

    return NextResponse.json({ success: true, data: submission }, { status: 201 });
  } catch (error) {
    console.error('Contact submission error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
