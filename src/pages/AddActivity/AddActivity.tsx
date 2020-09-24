import React, { useRef, useContext, useState } from 'react';
import {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonGrid,
    IonRow,
    IonCol,
    IonButtons,
    IonMenuButton, IonSegment, IonSegmentButton, IonLabel, IonItem, IonInput, IonDatetime, IonButton, IonToast
} from '@ionic/react';
import { useHistory } from 'react-router-dom';
import ActivitiesContext, {ActivityType} from "../../Data/activities-context";
const AddActivity: React.FC = () => {

    const history = useHistory();

    const titleInput = useRef<HTMLIonInputElement>(null);
    const descriptionInput = useRef<HTMLIonInputElement>(null);
    const activityTypeInput = useRef<HTMLIonSegmentElement>(null);
    const hourInput = useRef<HTMLIonDatetimeElement>(null);

    const activitiesCtxt = useContext(ActivitiesContext);

    const [toastMsg, setToastMsg] = useState<string>('');

    const addActivity = () => {
        const title = titleInput.current?.value as string;
        const description = descriptionInput.current?.value as string;
        const activityType = activityTypeInput.current?.value as ActivityType;
        const startDate = new Date(hourInput.current?.value as string);
        const startHour = startDate.getHours() + '+' + startDate.getMinutes();

        if (title && description && activityType && startHour) {
            activitiesCtxt.addActivity(title, description, startHour, activityType);
            setToastMsg('Tafiditra soa amantsara ny evenements nao! ✔✔ ');
            history.replace('/all-activities');
        }
    };

    return(
        <React.Fragment>
            <IonToast isOpen={!!toastMsg} message={toastMsg} duration={4000} color="medium" onDidDismiss={()=> setToastMsg('')} />
            <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle>Add activity</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonGrid>
                    <IonRow>
                        <IonCol className="ion-text-center">
                            <IonSegment ref={activityTypeInput}>
                                <IonSegmentButton value="DSC_1234">
                                    <IonLabel>Eglise</IonLabel>
                                </IonSegmentButton>
                                <IonSegmentButton value="DSC_1415">
                                    <IonLabel>sakafo</IonLabel>
                                </IonSegmentButton>
                                <IonSegmentButton value="DSC_1434">
                                    <IonLabel>Sary</IonLabel>
                                </IonSegmentButton>
                            </IonSegment>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <IonItem>
                                <IonLabel position="floating">Activity Title</IonLabel>
                                <IonInput ref={titleInput} type="text"></IonInput>
                            </IonItem>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <IonItem>
                                <IonLabel position="floating">Activity Description</IonLabel>
                                <IonInput ref={descriptionInput} type="text"></IonInput>
                            </IonItem>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <IonItem>
                                <IonLabel position="floating">Starting hour</IonLabel>
                                <IonDatetime ref={hourInput} display-format = "h:mm A" picker-format="h:mm A" value={new Date().toISOString()}/>
                            </IonItem>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol className="ion-text-center ion-margin-top">
                            <IonButton onClick={addActivity} expand="block" >Add Activity</IonButton>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>
        </React.Fragment>
    );
};
export default AddActivity;
