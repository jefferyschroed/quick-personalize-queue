
// This is a mock API handler that simulates the backend Express.js API endpoint
// It implements the validation and response format expected by the frontend
// The actual backend will implement similar logic in Node.js/Express

export const queuePersonalization = async (request: Request) => {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  const body = await request.json();
  const { url, templateId } = body;
  
  // Validation according to backend requirements
  // Check if URL is present and non-empty
  if (!url || url.trim() === "") {
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
  
  // Check if Template ID is present and non-empty
  if (!templateId || templateId.trim() === "") {
    return new Response(
      JSON.stringify({ error: "Template ID cannot be empty" }),
      { 
        status: 400,
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
  }
  
  // Success response - matches the expected format from the backend task
  // Note: The actual backend will log: "INFO: Queued personalization for URL: {url} with template: {templateId}"
  return new Response(
    JSON.stringify({
      message: `Personalization queued successfully for URL: ${url}`
    }),
    { 
      status: 200,
      headers: {
        "Content-Type": "application/json"
      }
    }
  );
};
