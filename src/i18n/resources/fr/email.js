module.exports = {
  invitationAccepted: {
    subject: 'L’utilisateur {{invitedUserName}} {{invitedUserSurname}} a accepté votre invitation',
    textMessage: `Cher/Chère {{recipientName}} {{recipientSurname}},

L’utilisateur {{invitedUserName}} {{invitedUserSurname}} a accepté votre invitation à participer à {{assessmentName}} {{cycleName}} en tant que {{role}} pour le/la {{- country}}
{{- manageCollaboratorsUrl}}

L’équipe FRA`,
    htmlMessage: `Cher/Chère {{recipientName}} {{recipientSurname}},
<br/><br/>
L’utilisateur {{invitedUserName}} {{invitedUserSurname}} a accepté votre invitation à participer à {{assessmentName}} {{cycleName}} en tant que {{role}} pour le/la <b><a href="{{- manageCollaboratorsUrl}}">{{country}}</a></b>.
<br/><br/>
L’équipe FRA`,
  },
  remindReviewer: {
    subject: 'Reminder: One or more countries are pending review',
    messageHeader: 'Dear {{recipientName}},',
    messageFooter: `
    Please provide your comments and send the report back to “Editing”, or proceed with approval if there are no further issues.
    <br />
    Thank you.`,
    messageBodyText: `
    The {{assessmentName}} {{cycleName}} country report for countries: {{- countries}} have been “In review” over a week.
   

{{- countryUrls}}

    `,
    messageBodyHTML: `
    <br/>
    The {{assessmentName}} {{cycleName}} country reports for<br />
    {{- countryLinks}}<br />
    have been “In review” more than a week.<br/>
    `,
  },
};
