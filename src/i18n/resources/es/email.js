module.exports = {
  invitationAccepted: {
    subject: 'El usuario {{invitedUserName}} {{invitedUserSurname}} ha aceptado su invitación',
    textMessage: `Estimado/a {{recipientName}} {{recipientSurname}},

El usuario {{invitedUserName}} {{invitedUserSurname}} ha aceptado su invitación a {{assessmentName}} {{cycleName}} como {{role}} para {{country}}:
{{- manageCollaboratorsUrl}}

El equipo de FRA`,
    htmlMessage: `Estimado/a {{recipientName}} {{recipientSurname}},
<br/><br/>
El usuario {{invitedUserName}} {{invitedUserSurname}} ha aceptado su invitación a {{assessmentName}} {{cycleName}} como {{role}} para <b><a href="{{- manageCollaboratorsUrl}}">{{country}}</a></b>.
<br/><br/>
El equipo de FRA`,
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
