'use server';

// import { signIn } from 'next-auth/react';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

function getSampleData() {
  return new Promise((resolve, reject) => {
    // Simulate an asynchronous task, e.g., fetching data
    setTimeout(() => {
      const data = { name: 'Sample', value: 42 };
      resolve(data); // Return sample data when resolved
    }, 2000); // Delay of 2 second to mimic async behavior
  });
}

export async function submitSignupData(prevState: any, formData: any) {
  console.log('[submitSignupData] prevState', prevState);
  console.log('[submitSignupData] formData', formData, formData.fullName);

  await getSampleData();

  return;
}

export async function redirectAfterAuth() {
  revalidatePath('/', 'layout');
  redirect('/');
}

// TODO: set proper types.