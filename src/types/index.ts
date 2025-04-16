import { ReactNode } from 'react';

// Define allowed alert types (enforce specific strings)
export type AlertType = 
  | "alert-danger" 
  | "alert-success" 
  | "alert-info" 
  | "alert-warning";

// Interface for each alert item
export interface AlertItem {
  type: AlertType;
  icon: ReactNode;  // JSX.Element also works
  title: string;
  description: ReactNode;
}

// Type alias for an array of AlertItem objects (helps with readability and reuse)
export type ComponentDetails = AlertItem[];
