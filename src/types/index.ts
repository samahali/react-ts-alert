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

// Interface for the entire array (optional but useful for documentation)
export interface ComponentDetails extends Array<AlertItem> {}