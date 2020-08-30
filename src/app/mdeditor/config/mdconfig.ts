export class Mdconfig {

  public width = '100%';
  public height = '400';
  public path = './assets/md_editor/lib/';
  public codeFold: true;
  public searchReplace = true;
  public toolbar = true;
  public emoji = true;
  public taskList = false;
  public tex = false;
  public readOnly = false;
  public tocm = true;
  public watch = true;
  public previewCodeHighlight = true;
  public saveHTMLToTextarea = true;
  public markdown = '';
  public flowChart = false;
  public syncScrolling = true;
  public sequenceDiagram = false;
  public imageUpload = true;
  public imageFormats = ['jpg', 'jpeg', 'gif', 'png', 'bmp', 'webp'];
  public imageUploadURL = '';
  public htmlDecode = 'style,script,iframe';  // you can filter tags decode
  public editorFunction = '';
  constructor() {
  }

}
