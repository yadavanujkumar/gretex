import { describe, it, expect, vi, beforeEach } from 'vitest';
import { POST } from './route';
import { prisma } from '@/lib/prisma';

// Mock prisma
vi.mock('@/lib/prisma', () => ({
  prisma: {
    contactSubmission: {
      create: vi.fn(),
    },
  },
}));

describe('POST /api/contact', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should return 400 if required fields are missing', async () => {
    const req = new Request('http://localhost:3000/api/contact', {
      method: 'POST',
      body: JSON.stringify({ name: 'Test' }),
      headers: {
        'x-forwarded-for': '127.0.0.1',
      },
    });

    const res = await POST(req);
    const data = await res.json();

    expect(res.status).toBe(400);
    expect(data.error).toBe('Missing required fields');
  });

  it('should return 201 dummy success if honeypot botField is filled', async () => {
    const req = new Request('http://localhost:3000/api/contact', {
      method: 'POST',
      body: JSON.stringify({
        name: 'Bot',
        email: 'bot@example.com',
        subject: 'Spam',
        message: 'Spam message',
        botField: 'I am a bot'
      }),
      headers: {
        'x-forwarded-for': '127.0.0.2',
      },
    });

    const res = await POST(req);
    const data = await res.json();

    expect(res.status).toBe(201);
    expect(data.success).toBe(true);
    expect(data.dummy).toBe(true);
    
    // Ensure prisma was not called for spam
    expect(prisma.contactSubmission.create).not.toHaveBeenCalled();
  });

  it('should return 201 and create submission for valid data', async () => {
    // Mock the prisma response
    (prisma.contactSubmission.create as any).mockResolvedValueOnce({
      id: 1,
      name: 'John',
      email: 'john@example.com',
      subject: 'Hello',
      message: 'World',
    });

    const req = new Request('http://localhost:3000/api/contact', {
      method: 'POST',
      body: JSON.stringify({
        name: 'John',
        email: 'john@example.com',
        subject: 'Hello',
        message: 'World',
      }),
      headers: {
        'x-forwarded-for': '127.0.0.3',
      },
    });

    const res = await POST(req);
    const data = await res.json();

    expect(res.status).toBe(201);
    expect(data.success).toBe(true);
    expect(prisma.contactSubmission.create).toHaveBeenCalledTimes(1);
  });
});
