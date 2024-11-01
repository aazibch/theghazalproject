'use server';

function getSampleData() {
  return new Promise((resolve, reject) => {
    // Simulate an asynchronous task, e.g., fetching data
    setTimeout(() => {
      const data = { name: 'Sample', value: 42 };
      resolve(data); // Return sample data when resolved
    }, 2000); // Delay of 1 second to mimic async behavior
  });
}

export async function submitSignupData(prevState: any, formData: any) {
  console.log('[submitSignupData] prevState', prevState);
  console.log('[submitSignupData] formData', formData);

  await getSampleData();

  return;
}

// TODO: set proper types.
