module.exports = {
  invitationAccepted: {
    subject: 'Пользователь {{invitedUserName}} {{invitedUserSurname}} принял(а) ваше приглашение',
    textMessage: `Уважаемый (ая) {{recipientName}} {{recipientSurname}},

Пользователь {{invitedUserName}} {{invitedUserSurname}} принял(а) ваше приглашение на {{assessmentName}} {{cycleName}} в качестве {{role}} для {{country}}
{{- manageCollaboratorsUrl}}

Команда по ОЛР`,
    htmlMessage: `Уважаемый (ая) {{recipientName}} {{recipientSurname}},
<br/><br/>
Пользователь {{invitedUserName}} {{invitedUserSurname}} принял(а) ваше приглашение на {{assessmentName}} {{cycleName}} в качестве {{role}} для <b><a href="{{- manageCollaboratorsUrl}}">{{country}}</a></b>.
<br/><br/>
Команда по ОЛР`,
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
