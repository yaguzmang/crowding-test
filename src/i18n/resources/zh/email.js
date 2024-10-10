module.exports = {
  invitationAccepted: {
    subject: '用户 {{invitedUserName}} {{invitedUserSurname}} 已经接受您的邀请',
    textMessage: `尊敬的 {{recipientName}} {{recipientSurname}},

用户 {{invitedUserName}} {{invitedUserSurname}} 已接受您的邀请，加入{{assessmentName}} {{cycleName}} {{country}}，并担任 {{role}}。
{{- manageCollaboratorsUrl}}

全球森林资源评估报告小组`,
    htmlMessage: `尊敬的 {{recipientName}} {{recipientSurname}},
<br/><br/>
用户 {{invitedUserName}} {{invitedUserSurname}} 已接受您的邀请，加入{{assessmentName}} {{cycleName}} <b><a href="{{- manageCollaboratorsUrl}}">{{country}}</a></b>，并担任 {{role}}。
<br/><br/>
全球森林资源评估报告小组`,
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
