import dbConnect from '@/lib/dbConnect';
import User from '@/models/User';
import { getServerSession } from 'next-auth';
import config from '../../../auth/[...nextauth]/config';

export async function GET() {
  try {
    const session = await getServerSession(config);

    if (!session) {
      return Response.json(
        {
          isSuccess: false,
          message: 'You are not signed in.'
        },
        { status: 404 }
      );
    }

    await dbConnect();

    const user = await User.findById(session!.user._id);

    const changedPasswordAfterToken = await user.changedPasswordAfterToken(
      session!.jwtIat
    );

    return Response.json({
      isSuccess: true,
      changedPasswordAfterToken
    });
  } catch (error) {
    return Response.json(
      { isSuccess: false, message: 'Something went wrong!' },
      { status: 500 }
    );
  }
}
