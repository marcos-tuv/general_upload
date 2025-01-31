import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import mrnLogo from '../authenticator/mrn.png';

class PDFGenerator {
  constructor() {
    this.doc = new jsPDF('p', 'mm', 'a4');
  }

  async loadImage() {
    const image = new Image();
    image.src = mrnLogo;

    return new Promise((resolve) => {
      image.onload = () => {
        resolve(image);
      };
    });
  }

  async captureSection(sectionId) {
    const input = document.getElementById(sectionId);
    const canvas = await html2canvas(input);
    return { 
      imgData: canvas.toDataURL('image/png'), 
      height: canvas.height, 
      width: canvas.width 
    };
  }

  addPageNumber(pageNumber, totalPages) {
    const pageText = `${pageNumber} / ${totalPages}`;
    this.doc.setFontSize(10);
    this.doc.text(pageText, this.doc.internal.pageSize.width - 20, this.doc.internal.pageSize.height - 10);
  }

  async generatePDF() {
    const image = await this.loadImage();

    const imgWidth = 20;
    const imgHeight = (image.height * imgWidth) / image.width;
    this.doc.addImage(image, 'PNG', 10, 10, imgWidth, imgHeight);
    this.doc.setFontSize(16);

    // Total de páginas para o contador de páginas
    const totalPages = 4;

    // Captura da Página 1
    const page1 = await this.captureSection('page-1');
    // const pageHeight = this.doc.internal.pageSize.height;
    let position = imgHeight + 10;
    this.doc.addImage(page1.imgData, 'PNG', 0, position, 210, (page1.height * 210) / page1.width);
    this.addPageNumber(1, totalPages);

    // Nova página para a Página 2
    this.doc.addPage();
    const page2 = await this.captureSection('page-2');
    this.doc.addImage(page2.imgData, 'PNG', 0, 10, 210, (page2.height * 210) / page2.width);
    this.addPageNumber(2, totalPages);

    // Nova página para a Página 3
    this.doc.addPage();
    const page3 = await this.captureSection('page-3');
    this.doc.addImage(page3.imgData, 'PNG', 0, 10, 210, (page3.height * 210) / page3.width);
    this.addPageNumber(3, totalPages);

    this.doc.save('RH FORMS.pdf');
  }
}

export default PDFGenerator;
