module.exports = {
  invitationAccepted: {
    subject: 'لقد تم قبول الدعوة المقدمة من جانبكم   {{invitedUserSurname}} {{invitedUserName}}  المستخدم',
    textMessage: `{{recipientSurname}} {{recipientName}}  عزيزتي عزيزي /

{{country}} في {{role}}  ك  {{cycleName}} {{assessmentName}} لقد تم قبول الدعوة المقدمة من جانبكم {{invitedUserSurname}}  {{invitedUserName}} المستخدم
{{- manageCollaboratorsUrl}}

فريق التقييم العالمي للموارد الحرجيه`,
    htmlMessage: `{{recipientSurname}} {{recipientName}}  عزيزتي عزيزي /
<br/><br/>
<b><a href="{{- manageCollaboratorsUrl}}">{{country}}</a></b> في {{role}}  ك  {{cycleName}} {{assessmentName}} لقد تم قبول الدعوة المقدمة من جانبكم {{invitedUserSurname}}  {{invitedUserName}} المستخدم
<br/><br/>
فريق التقييم العالمي للموارد الحرجيه`,
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
