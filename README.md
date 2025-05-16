
# Website Personalization Queue

This project provides a frontend interface for a backend developer work sample. It allows users to queue website personalization by submitting a URL and template ID to a backend API.

## Frontend Implementation

The frontend consists of:

1. A form with fields for Website URL and Template ID
2. A submit button to queue personalization
3. Status feedback area showing success, error, or loading states

## API Integration

The frontend makes POST requests to `/api/queue-personalization` with the following format:

```json
{
  "url": "https://www.example.com",
  "templateId": "welcome_template"
}
```

### Expected API Responses

**Success Response (200 OK):**
```json
{
  "message": "Personalization queued successfully for URL: https://www.example.com"
}
```

**Error Responses (400 Bad Request):**
```json
{
  "error": "URL is required"
}
```

or

```json
{
  "error": "Template ID cannot be empty"
}
```

## Mock API for Development

During development, the application uses a mock API that:
1. Validates that URL and Template ID are provided and non-empty
2. Returns appropriate success or error responses
3. Simulates network delay

The mock API in `src/mocks/handlers.ts` implements the same validation logic that the backend developer will need to implement in their Express.js application.

## Backend Developer Task

Backend developers should implement an Express.js API endpoint that:
1. Accepts POST requests at `/api/queue-personalization`
2. Validates the input (URL and Template ID must be present and non-empty)
3. Logs a message to simulate queueing the job
4. Returns appropriate success or error responses

The frontend is already configured to work with this API once it's implemented.
