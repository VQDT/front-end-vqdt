import React from 'react';
import './StatusOption.css';

interface StatusOptionProps {
  variant?: "solid" | "outline";
  color?:
    | "default"
    | "approved"
    | "rejected"
    | "under_review"
    | "draft"
    | "pendent";
  size?: "small" | "medium" | "large";
  children: React.ReactNode;
}

const StatusOption: React.FC<StatusOptionProps> = ({ variant = "solid", color = "default", size, children }) => {
    return (
        <div className={`status-option ${variant} ${color} ${size}`}>
            {children}
        </div>
    );
};

export default StatusOption;
