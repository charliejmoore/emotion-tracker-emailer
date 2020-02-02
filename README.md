# emotion-tracker-emailer
Google Sheets/Forms powered daily emotion tracker script

Make a Google Form emotion tracker. The format of this is flexible and up to you. One idea is to have a series of emotions/traits you want to track "Happy", "Well Rested", "Depressed", etc with radio buttons/checkbox/text box/whatever for each emotion/trait. You'll probably want to do the 'view responses in Sheets' option under the 'responses' tab on the Google Form. 

Click on the three dot menu on the Google Form and go to Script Editor. Paste the code from this repo with the fields filled out customized to your email/form, and click 'Run -> Run Funtion -> CreateTimeDrivenTriggers' to kick off your daily emailer. You'll probably have to approve some permissions things like allowing the app to send emails as you and to run if you aren't there. 

To stop the emailer from running, you can delete the trigger for the Form at https://script.google.com/home/triggers. 