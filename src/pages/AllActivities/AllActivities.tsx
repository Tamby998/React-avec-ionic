import React, { useContext, useState } from "react";
import classe from './AllActivities.module.css';
import {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonGrid, IonRow,
    IonCol,
    IonButtons,
    IonMenuButton,
    IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonItem, IonButton, IonModal, IonIcon
} from '@ionic/react';
import ActivitiesContext, {Activity} from "../../Data/activities-context";
import CompleteModal from "../../components/CompleteModal";
import {checkmarkOutline} from "ionicons/icons";
const AllActivities: React.FC = () => {

    const [activityComplete, setActivityComplete] = useState<Activity>();

    const activitiesCtxt = useContext(ActivitiesContext);

    const openCompleteModal = (activty: Activity) => {
        setActivityComplete(activty);
    };

    const closeModal = () => {
      setActivityComplete(undefined);
    };
    return(
        <React.Fragment>

        <IonModal isOpen={!!activityComplete} swipeToClose={true} >
            <CompleteModal activity = {activityComplete as Activity} dismissModal={closeModal} />
        </IonModal>

        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle>All activities</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonGrid>
                    {activitiesCtxt.activities.map(activity => (
                        <IonRow key={activity.id}>
                            <IonCol className="ion-text-center">
                                <IonCard>
                                    <img src={activity.imageUrl} alt="Activity" />
                                    <IonCardHeader>
                                        <IonCardTitle>{activity.hour}</IonCardTitle>
                                        <IonCardSubtitle>{activity.title}</IonCardSubtitle>
                                    </IonCardHeader>
                                    <IonCardContent>
                                        <p>{activity.description}</p>
                                        <IonItem lines="none">
                                            {   !activity.isCompleted ?
                                                <IonButton className={classe.FullWidth} fill="clear" onClick={() => openCompleteModal(activity)}>Confirm</IonButton>
                                            :
                                                <IonIcon color="success" className={classe.FullWidth} icon={checkmarkOutline} />
                                            }
                                        </IonItem>
                                    </IonCardContent>
                                </IonCard>
                            </IonCol>
                        </IonRow>

                    ))
                    }
                </IonGrid>
            </IonContent>
        </IonPage>
        </React.Fragment>
    );
};

export default AllActivities;
