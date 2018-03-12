function genPDF() {
    
    var doc = new jsPDF();
    
    var specialElementHandlers = {
        '#hidediv' : function(element,render) {return true;}
    };
    
    doc.fromHTML($('#testdiv').get(0), 20,20,{
                 'width':500,
                'elementHandlers': specialElementHandlers
    });
    
    doc.save('Test.pdf');
    
};

function saveForm() {
    var doc = new jsPDF()
    var name = $('#name').val();
        var company = $('#company').val();
        var department = $('#department').val();
        var title = $('#title').val();
        
        doc.setFontSize(26);
        doc.setTextColor(92, 76, 76);
        
        doc.text(23, 81, name);
        doc.text(23, 122, company);
        doc.text(23, 162, department);
        doc.text(23, 202, title);
        doc.fromHTML($('#inputdiv').get(0), 20,20,{
                 'width':500
    });
         doc.save('test.pdf');
}