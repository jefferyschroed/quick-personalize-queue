
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Loader } from "lucide-react";

interface ApiResponse {
  message?: string;
  error?: string;
}

const PersonalizationForm = () => {
  const [url, setUrl] = useState("");
  const [templateId, setTemplateId] = useState("");
  const [status, setStatus] = useState<{
    type: "success" | "error" | "loading" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Client-side validation to match backend validation
    if (!url || url.trim() === "") {
      setStatus({
        type: "error",
        message: "Error: URL is required.",
      });
      return;
    }

    if (!templateId || templateId.trim() === "") {
      setStatus({
        type: "error",
        message: "Error: Template ID cannot be empty.",
      });
      return;
    }

    try {
      setStatus({ type: "loading", message: "Sending request..." });
      
      const response = await fetch("/api/queue-personalization", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url, templateId }),
      });

      const data: ApiResponse = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || "An unknown error occurred");
      }

      setStatus({
        type: "success",
        message: data.message || "Personalization queued successfully!",
      });
      
      // Clear fields on success
      setUrl("");
      setTemplateId("");
      
    } catch (error) {
      setStatus({
        type: "error",
        message: error instanceof Error ? error.message : "Failed to queue personalization",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="url">Website URL</Label>
        <Input
          id="url"
          type="text"
          placeholder="Enter website URL (e.g., https://www.example.com)"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="w-full"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="templateId">Template ID</Label>
        <Input
          id="templateId"
          type="text"
          placeholder="Enter Template ID (e.g., template_123)"
          value={templateId}
          onChange={(e) => setTemplateId(e.target.value)}
          className="w-full"
        />
      </div>

      <Button 
        type="submit" 
        className="w-full"
        disabled={status.type === "loading"}
      >
        {status.type === "loading" ? (
          <>
            <Loader className="mr-2 h-4 w-4 animate-spin" />
            Processing...
          </>
        ) : (
          "Queue Personalization"
        )}
      </Button>

      {status.message && status.type && (
        <Alert className={`mt-4 ${status.type === "error" ? "border-red-500 text-red-800 bg-red-50" : 
                               status.type === "success" ? "border-green-500 text-green-800 bg-green-50" : 
                               "border-blue-500 text-blue-800 bg-blue-50"}`}>
          <AlertDescription>{status.message}</AlertDescription>
        </Alert>
      )}
    </form>
  );
};

export default PersonalizationForm;
