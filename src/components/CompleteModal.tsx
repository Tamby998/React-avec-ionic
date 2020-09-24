import React, { useContext } from "react";
import {IonButton, IonCol, IonContent, IonGrid, IonImg, IonRow, IonText} from '@ionic/react';
import ActivitiesContext, {Activity} from "../Data/activities-context";

interface CompleteModalProps {
    activity: Activity;
    dismissModal: () => void;
}

const CompleteModal: React.FC<CompleteModalProps> = (props) => {

    const activitiesCtxt = useContext(ActivitiesContext);

    const confirmCompletion = (activityId: string) => {
        activitiesCtxt.completeActivity(activityId);
        props.dismissModal();
    };

    return(
        <IonContent>
            <IonGrid className="ion-no-padding" >
                <IonRow>
                    <IonCol className="ion-no-padding">
                        <IonImg src={props.activity.imageUrl} />
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol className="ion-text-center">
                        <IonText>
                            <h2>{props.activity.title}</h2>
                        </IonText>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol className="ion-text-center ion-no-padding">
                        <IonText color='medium'>
                            <p>Are you sure you want to mark this activity as completed ?</p>
                        </IonText>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol className="ion-text-center">
                        <IonButton color="danger" fill="clear" onClick={props.dismissModal}>Cancel</IonButton>
                    </IonCol>
                    <IonCol className="ion-text-center">
                        <IonButton color="primary" fill="clear" onClick={() => confirmCompletion(props.activity.id)}>Complete</IonButton>
                    </IonCol>
                </IonRow>
            </IonGrid>
        </IonContent>
    );
};

export default CompleteModal;
