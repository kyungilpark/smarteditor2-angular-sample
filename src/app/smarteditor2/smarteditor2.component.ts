import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-smarteditor2',
  templateUrl: './smarteditor2.component.html',
  styleUrls: ['./smarteditor2.component.css']
})
export class Smarteditor2Component implements OnInit {
  @Input() config: any;
  oEditors: any;

  constructor() { }

  ngOnInit() {
    if (!this.config) {
      this.config = {
        id: "ir1"
      };
    }

    if (window['nhn']) {
      this.initEditor();
    } else {
      this.loadScript();
    }
  }

  loadScript() {
    const url = '/assets/smarteditor2/js/service/HuskyEZCreator.js';
    const script = document.createElement('script');
    script.onload = () => {
      this.initEditor();
    };
    script.type = 'text/javascript';
    script.src = url;
    document.body.appendChild(script);
  }

  initEditor() {
    this.oEditors = [];
    window['nhn'].husky.EZCreator.createInIFrame({
      oAppRef: this.oEditors,
      elPlaceHolder: this.config.id,
      sSkinURI: "/assets/smarteditor2/SmartEditor2Skin.html",
      htParams : {
        bUseToolbar : true,				// 툴바 사용 여부 (true:사용/ false:사용하지 않음)
        bUseVerticalResizer : true,		// 입력창 크기 조절바 사용 여부 (true:사용/ false:사용하지 않음)
        bUseModeChanger : true,			// 모드 탭(Editor | HTML | TEXT) 사용 여부 (true:사용/ false:사용하지 않음)
        //bSkipXssFilter : true,		// client-side xss filter 무시 여부 (true:사용하지 않음 / 그외:사용)
        //aAdditionalFontList : aAdditionalFontSet,		// 추가 글꼴 목록
        fOnBeforeUnload : function(){
          //alert("완료!");
        },
        I18N_LOCALE : "ko_KR"
      }, //boolean
      fOnAppLoad : function(){
        //예제 코드
        //oEditors.getById["ir1"].exec("PASTE_HTML", ["로딩이 완료된 후에 본문에 삽입되는 text입니다."]);
      },
      fCreator: "createSEditor2"
    });
  }

}
