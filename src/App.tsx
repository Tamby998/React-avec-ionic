import React from 'react';
import {
    IonApp,
    IonRouterOutlet,
    IonMenu,
    IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonIcon, IonLabel, IonItem,IonMenuToggle
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import {Redirect, Route} from "react-router";
import AllActivities from "./pages/AllActivities/AllActivities";
import AddActivity from "./pages/AddActivity/AddActivity";
import {bodyOutline, newspaperOutline} from 'ionicons/icons';
import ActivitiesContextProvider from "./Data/ActivitiesContextProvider";

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
        <IonMenu side='start' contentId='scheduleAppM1'>
            <IonHeader>
                <IonToolbar color='primary'>
                    <IonTitle>Schedule App</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                    <IonList>
                        <IonMenuToggle>
                            <IonItem routerLink="/all-activities" routerDirection="none" lines="none" >
                                <IonIcon color="medium" slot="start" icon={bodyOutline} />
                                <IonLabel>All activities</IonLabel>
                            </IonItem>
                        </IonMenuToggle>
                        <IonMenuToggle>
                            <IonItem routerLink="/add-activity" routerDirection="none" lines="none" >
                                <IonIcon color="medium" slot="start" icon={newspaperOutline} />
                                <IonLabel>Add Activity</IonLabel>
                            </IonItem>
                        </IonMenuToggle>
                    </IonList>
            </IonContent>
        </IonMenu>
        <ActivitiesContextProvider>
            <IonRouterOutlet id="scheduleAppM1">
                <Route path="/all-activities" component={AllActivities} exact/>
                <Route path="/add-activity" component={AddActivity} exact/>
                <Redirect to="/all-activities" />
            </IonRouterOutlet>
        </ActivitiesContextProvider>
    </IonReactRouter>
  </IonApp>
);

export default App;
