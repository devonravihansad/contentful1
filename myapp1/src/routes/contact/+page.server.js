export const actions = {
  default: async ({ request }) => {
    const data = await request.formData();
    const name = data.get('name');
    const message = data.get('message');
    console.log(`Form Submitted - Name: ${name}, Message: ${message}`);
    
    return {
      success: true,
      message: 'Form submitted successfully!'
    }
  }
};