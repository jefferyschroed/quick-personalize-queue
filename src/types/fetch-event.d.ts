
// Declaration file for FetchEvent type used in our mock API implementation
interface FetchEvent extends Event {
  request: Request;
  respondWith(response: Response | Promise<Response>): void;
}
