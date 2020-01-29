let documents = {
  head: "<p>Head document</p>",
  body: "<p>Body document</p>",
  footer: "<p>Footer document</p>",
  date: "<p>Date document</p>",
  application: {
    head: "<p style='display: inline-block;'>Head application</p>",
    body: "<p style='display: inline-block;'>Body application</p>",
    footer: "<p style='display: inline-block;'>Footer application</p>",
    date: "<p style='display: inline-block;'>Date application</p>",
  },
  fillingDocument: function() {
    documents.head = `<img src="./media/image/document-head.png" alt="Document head">`;
    documents.body = `<img src="./media/image/document-body.png" alt="Document body">`;
    documents.footer = `<img src="./media/image/document-footer.png" alt="Document footer">`;
    documents.date = new Date(2020, 0, 29);
  },
  fillingApplication: function() {
    documents.application.head = `<img src="./media/image/application-head.png" alt="Application head">`;
    documents.application.body = `<img src="./media/image/application-body.png" alt="Application body">`;
    documents.application.footer = `<img src="./media/image/application-footer.png" alt="Application footer">`;
    documents.application.date = new Date(2020, 0, 30);
  },
  conclusionDocument: function() {
    document.write(`${documents.head}${documents.body}${documents.footer}${documents.date}<br><hr>`);
  },
  conclusionApplication: function() {
    document.write(`${documents.application.head}<br>${documents.application.body}<br>${documents.application.footer}<br>${documents.application.date} `);
  },
  conclusionAll: function(){
    this.conclusionDocument();
    this.conclusionApplication();
  },
};

