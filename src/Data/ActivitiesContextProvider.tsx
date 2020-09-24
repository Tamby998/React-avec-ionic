import React, { useState } from "react";
import ActivitiesContext, {ActivitiesContextModel, Activity, ActivityType} from "./activities-context";

const ActivitiesContextProvider: React.FC = (props) => {

    const [activities, setActivities] = useState<Activity[]>(
        [
            {
                id: Math.random().toString(),
                title: 'Fandraisana Katekomenina',
                description: 'FJKM Talata Ampano Fanavaozana, Mama, Felan"Avo, Koloina, Patekosta 2020',
                hour:'07:55',
                activityType: 'DSC_1234',
                imageUrl: './assets/images/DSC_1234.jpg',
                isCompleted: false
            },
            {
                id: Math.random().toString(),
                title: 'Fiaraha-Misakafo',
                description: 'Tato antrano Bebe, Koloina, Felan"NyAvo, Patekosta 2020',
                hour:'10:00',
                activityType: 'DSC_1415',
                imageUrl: './assets/images/DSC_1415.jpg',
                isCompleted: false
            },
            {
                id: Math.random().toString(),
                title: 'Naka Sary',
                description: 'Teo antokotany Mama, Dada, Patekosta 2020',
                hour:'13:00',
                activityType: 'DSC_1434',
                imageUrl: './assets/images/DSC_1434.jpg',
                isCompleted: false
            },
            {
                id: Math.random().toString(),
                title: 'Application React-Ionic',
                description: 'Author: HERIHARSON Tamby Mampionona',
                hour:'17:57',
                activityType: 'DSC_1434',
                imageUrl: './assets/images/DSC_1434.jpg',
                isCompleted: false
            }
        ]
    );

    const addActivity = (title: string, description: string, hour: string, activityType: ActivityType) => {
      let imageUrl = '';
      switch (activityType) {
          case "DSC_1234":
              imageUrl = './assets/images/DSC_1234.jpg'
              break;
          case "DSC_1415":
              imageUrl = './assets/images/DSC_1415.jpg'
              break;
          case "DSC_1434":
              imageUrl = './assets/images/DSC_1434.jpg'
              break;
          default:
              imageUrl = './assets/images/DSC_1434.jpg'
              break;
      };
      const newActivity: Activity = {
          id: Math.random().toString(),
          title,
          description,
          hour,
          activityType,
          imageUrl,
          isCompleted: false
      };
      setActivities( currActivities => {
          return[...currActivities, newActivity]
      });
    };

    const completeActivity = (activityId: string) => {
        setActivities(currActivities => {
            const updatedActivities = [...currActivities];
            const selectedActivityIndex = activities.findIndex(act => act.id === activityId);
            const updatedActivity = {...updatedActivities[selectedActivityIndex], isCompleted: true};
            updatedActivities[selectedActivityIndex] = updatedActivity;
            return updatedActivities;
        });
    };

    const activitiesContext: ActivitiesContextModel = {
        activities,
        addActivity,
        completeActivity
    };

    return(
        <ActivitiesContext.Provider value={activitiesContext}>
            {props.children}
        </ActivitiesContext.Provider>

    );
};
export default ActivitiesContextProvider;
