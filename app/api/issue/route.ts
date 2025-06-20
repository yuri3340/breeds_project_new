import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prismaClient';
import { IssueSchema } from "@/lib/zod-schema";

export async function POST(request: Request) {
  const data = await request.json();

  const validation = IssueSchema.safeParse(data);

  if (!validation.success) {
    return NextResponse.json({ message: '유효하지 않은 데이터입니다.', errors: validation.error.errors }, { status: 400 });
  }

  try {
    await prisma.issue.create({
      data: {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        description: data.description,
      },
    });

    return NextResponse.json({ message: '이슈 등록 완료!' }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: '등록 실패' }, { status: 500 });
  }
}
