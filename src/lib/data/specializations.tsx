import { ReactNode } from "react";
import { Shield, Server, Monitor, BarChart, Headphones, Brain, Star, Settings } from "lucide-react"; 

export interface Specialization {
  label: string;
  value: string;
  icon: ReactNode;
}

export const specializations: Specialization[] = [
  { label: "Backend", value: "backend", icon: <Server /> },
  { label: "IT admin", value: "it-admin", icon: <Monitor /> },
  { label: "SAP & ERP", value: "sap-erp", icon: <Settings /> },
  { label: "Business analytics", value: "business-analytics", icon: <BarChart /> },
  { label: "Helpdesk", value: "helpdesk", icon: <Headphones /> },
  { label: "Big data", value: "big-data", icon: <Brain /> },
  { label: "Project management", value: "project-management", icon: <Star /> },
  { label: "System analytics", value: "system-analytics", icon: <BarChart /> },
  { label: "Security", value: "security", icon: <Shield /> },
];
