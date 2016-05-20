import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
  selector: 'introduction',
  template: `
  <div class='introduction'>
    <p>练习与礼物</p>
    <ul>
      <li>家庭</li>
      <li>责任</li>
      <li>爱</li>
    </ul>
    <p>今天,我忽然想送你一个特别一点的礼物.</p>

    <p>为我们走过的这么多年.</p>

    <p>也为以后的那么多年.</p>

    <p>因为是突发奇想,所以时间非常紧张,可能会有点简陋.</p>

    <p>希望你能感受到我的心意.</p>

    <a class='btn btn-success' style="border: none" [routerLink]='["FiveTwoZero"]'>Let's get started!</a>
  </div>
  `,
  directives: [ROUTER_DIRECTIVES]
})
export class IntroductionComponent {

}