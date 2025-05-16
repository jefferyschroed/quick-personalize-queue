
// This is a mock API handler for development and testing purposes

export const queuePersonalization = async (request: Request) => {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  const body = await request.json();
  const { url, templateId } = body;
  
  // Validate required fields
  if (!url) {
    return new Response(
      JSON.stringify({ error: "URL is required" }),
      { 
        status: 400,
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
  }
  
  if (!templateId) {
    return new Response(
      JSON.stringify({ error: "Template ID is required" }),
      { 
        status: 400,
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
  }
  
  // Success response
  return new Response(
    JSON.stringify({
      message: `Personalization queued for URL: ${url} with template: ${templateId}`
    }),
    { 
      status: 200,
      headers: {
        "Content-Type": "application/json"
      }
    }
  );
};
