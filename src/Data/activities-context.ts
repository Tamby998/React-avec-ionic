import React from "react";

export  type ActivityType = 'DSC_1234' | 'DSC_1415' | 'DSC_1434'

export interface Activity{
    id: string;
    title: string;
    description: string;
    hour: string;
    activityType: ActivityType;
    imageUrl: string;
    isCompleted: boolean;
}
export interface ActivitiesContextModel {
    activities: Activity[];
    addActivity: (title: string, description: string, hour: string, activityType: ActivityType)=> void;
    completeActivity: (activityId: string) => void;
}
const ActivitiesContext = React.createContext<ActivitiesContextModel>({
    activities : [],
    addActivity: () => {},
    completeActivity: () => {}
});

export default ActivitiesContext;
