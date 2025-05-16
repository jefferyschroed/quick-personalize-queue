
import React, { useState } from "react";
import PersonalizationForm from "@/components/PersonalizationForm";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Personalization Queue</CardTitle>
          <CardDescription>
            Submit a website URL and template ID to queue personalization
          </CardDescription>
        </CardHeader>
        <CardContent>
          <PersonalizationForm />
        </CardContent>
      </Card>
    </div>
  );
};

export default Index;
