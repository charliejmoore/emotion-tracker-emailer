function emailer() {
    var emailAddress = "myEmailAddress@gmail.com";
    var subject = "My email subject line";
    var message = "Any message body text";
    var htmlMessage = "Edit this as you wish. Make sure you include the <a href='https://link to my emotion tracker Google Form'>Link</a> to your form!" 
    MailApp.sendEmail(emailAddress, subject, message, {
        htmlBody: htmlMessage
    });
}

function createTimeDrivenTriggers() {
  ScriptApp.newTrigger('emailer')
  //sends email everyday at ~6pm
      .timeBased()
      .everyDays(1)
      .atHour(18)
      .create();
}
