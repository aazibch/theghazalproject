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

    const user = await User.findById(session!.user._id).select(
      '+passwordChangeDate'
    );

    const changedPasswordAfterSignIn = await user.changedPasswordAfterSignIn(
      session!.signInDate
    );

    const userObj = user.toObject();
    delete userObj.passwordChangeDate;

    return Response.json({
      isSuccess: true,
      changedPasswordAfterSignIn,
      user: { ...userObj, _id: userObj._id.toString() }
    });
  } catch (error) {
    return Response.json(
      { isSuccess: false, message: 'Something went wrong!' },
      { status: 500 }
    );
  }
}
