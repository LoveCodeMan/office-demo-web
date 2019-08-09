import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'inspur-office-system';

  ngOnInit(): void {
    this.autoHeight()
  }

  autoHeight() {
    var winHeight = 0
    if (window.innerHeight) winHeight = window.innerHeight
    else if (document.body && document.body.clientHeight)
      winHeight = document.body.clientHeight
    //  通过深入Document内部对body进行检测，获取浏览器窗口高度
    if (document.documentElement && document.documentElement.clientHeight)
      winHeight = document.documentElement.clientHeight
    // 设置Div的高度等于浏览器的高度
    document.getElementById('wrapper').style.height = winHeight + 'px'
  }
}
