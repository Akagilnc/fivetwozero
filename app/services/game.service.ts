import {Injectable} from 'angular2/core';
import {Content} from '../interfaces';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class GameService {
  private contentData: Array<Content>;
  private $contentChange: Observable<Content>;
  private $contentChangeNotifier: any;
  private currentContentIndex: number = 0;
  private totalSuccessContent: number = 0;
  private totalCompletedContent: number = 0;
  private score: number = 0;

  constructor() {
    this.$contentChange = Observable.create((observer:any) => {
      this.$contentChangeNotifier = observer;
      this.publishChangeContent();
    }).share();

    this.totalSuccessContent = 0;

    data.forEach((content, index) => {
      content.position = index + 1;
      content.isAnswered = false;
    });

    this.contentData = data;
  }



  getContents():Array<Content> {
    return this.contentData;
  }


  onContentChanged(): Observable<Content> {
    return this.$contentChange;
  }

  getCurrentContent():Content {
    return this.contentData[this.currentContentIndex];
  }

  nextContent() {
    if (this.currentContentIndex < this.contentData.length - 1) {
      this.currentContentIndex++;
      this.$contentChangeNotifier.next(this.getCurrentContent());
    }
  }

  previousContent() {
    if (this.currentContentIndex > 0) {
      this.currentContentIndex--;
      this.$contentChangeNotifier.next(this.getCurrentContent());
    }
  }


  publishChangeContent() {
    this.$contentChangeNotifier.next(this.getCurrentContent());
  }

  isLastContent() {
    return this.currentContentIndex == this.contentData.length - 1;
  }
}

var data:Array<Content> = [
  {
    content: "家对我来说,意义已经和之前不一样了。我感觉到了更多的责任" +
    "不管是你对你还是对女儿来说,都和之前发生了很多的变化。",
    answer: 'ぬ',
    displayAnswer: 'な, に, ぬ, ね, の',
    type: 'text',
    position : 1,
    imageUrl : 'https://www.vin65.com/assets/client/Image/Blog/2011/arrowup.jpg',
    youtubeVideoId : ''
  },
  {
    content: "对我来说,最珍贵的就是这个家,我指的是这个小家,你我她。",
    answer: 'と',
    displayAnswer: 'た,ち,つ,て,と',
    type: 'text',
    position : 2,
    imageUrl : 'http://keystonefamilysupportinc.com/assets/family-together.jpg',
    youtubeVideoId : ''
  },
  {
    content: "我有很多缺点,优点很少,你当年跟了我真是瞎了狗眼。",
    answer: 'う',
    displayAnswer: 'あ, い, う, え, お',
    type: 'text',
    position : 3,
    imageUrl : 'http://4.bp.blogspot.com/-QlmPBQgMIkY/U_Pzag6bjaI/AAAAAAAAD10/5DUKaFO5h_U/s1600/are%2Byou%2Bkidding%2Bme.jpg',
    youtubeVideoId : ''
  },
  {
    content: "但我觉得我在改变,虽然有点慢,有点晚,但我在努力",
    answer: 'ね',
    displayAnswer: 'な,に,ぬ,ね,の',
    type: 'text',
    position : 4,
    imageUrl : 'https://inspirationfeeed.files.wordpress.com/2013/06/99-steps-of-progress-by-maentis-21.jpg',
    youtubeVideoId : ''
  },
  {
    content: "你也一样,虽然你也有点懒,但是总的来说比我勤快多了是不。",
    answer: 'す',
    displayAnswer: 'さ, し, す, せ, そ',
    type: 'text',
    position : 5,
    imageUrl : 'http://www.justkidding.lk/wp-content/uploads/2015/08/JustKidding_Final1.png',
    youtubeVideoId : ''
  },
  {
    content: '对于这个家,最重要的是责任与信任。这一点,希望你与我没有分歧。',
    contentNode: '',
    answer: 'いぬ',
    displayAnswer: 'い, に, ぬ, ね, の',
    type: 'text',
    position: 6,
    imageUrl: 'http://roryvaden.com/blog/wp-content/uploads/2016/03/Trust.jpg',
    youtubeVideoId: '7WAQOUE74sk'
  },
  {
    content: '我之前走过好多弯路,浪费了好多时间,',
    contentNode: '',
    answer: 'とり',
    displayAnswer: 'た,ち,り,て,と',
    type: 'text',
    position: 7,
    imageUrl: 'http://www.marcandangel.com/images/6-ways-waste-life.jpg',
    youtubeVideoId: 'n4YaDxr73HI'
  },
  {
    content: '我会用剩下的一生去弥补。',
    contentNode: '',
    answer: 'うま',
    displayAnswer: 'あ, ま, う, え, お',
    type: 'text',
    position: 8,
    imageUrl: 'http://ecx.images-amazon.com/images/I/41yir5USP9L._SY300_.jpg',
    youtubeVideoId: 'bGW_2hJrLVY'
  },
  {
    content: '不管未来(我无法控制)怎样,我坚信我能带这个家走出我们目前所处的阶层。',
    contentNode: '',
    answer: 'ねこ',
    displayAnswer: 'な,に,こ,ね,の',
    type: 'text',
    position: 9,
    imageUrl: 'https://worldviewofjesus.files.wordpress.com/2015/02/evolution.jpg',
    youtubeVideoId: '3sU4_fmPDMo'
  },
  {
    content: '打破既有的东西总是很难。但是和你们在一起,我一定能做到。',
    contentNode: '',
    answer: 'りす',
    displayAnswer: 'さ, り, す, せ, そ',
    type: 'text',
    position: 10,
    imageUrl: 'http://www.womensmafia.com/wp-content/uploads/2013/10/baby_hands_with_mom_and_dad.jpg',
    youtubeVideoId: 'eqOvWOr9ayw'
  },
  {
    content: "在这里,也想给你提几个意见:",
    answer: 'な',
    displayAnswer: 'な,に,ぬ,ね,の',
    type: 'text',
    position : 11,
    imageUrl : 'http://static1.squarespace.com/static/5236e067e4b0a4a590e95ac4/t/5272609ce4b0a406b9062e2b/1383227548851/1366641333443.png',
    youtubeVideoId : ''
  },
  {
    content: "我做事往往有我的理由,当然我也会犯错。只是希望你多一点耐心和宽容,就像对孩子一样",
    answer: 'み',
    displayAnswer: 'ま,み,む,め,も',
    type: 'text',
    position : 12,
    imageUrl : 'http://photos2.meetupstatic.com/photos/event/7/9/c/d/event_50671181.jpeg',
    youtubeVideoId : ''
  },
  {
    content: "有时候我也会懒,也会耍赖,也会低迷,希望你能陪在我身边,给我鼓励",
    answer: 'え',
    displayAnswer: 'あ, い, う, え, お',
    type: 'text',
    position : 13,
    imageUrl : 'http://1.bp.blogspot.com/-88xtzUKghrc/T0hnYkSssJI/AAAAAAAABak/qU4BqavRj1Y/s1600/encouragement.jpg',
    youtubeVideoId : ''
  },
  {
    content: "对于意见不合的部分,先沟通,再决定,沟通 >> 想象。想象是误会滋生的土壤",
    answer: 'つ',
    displayAnswer: 'た,ち,つ,て,と',
    type: 'text',
    position : 14,
    imageUrl : 'http://rlv.zcache.com/silly_cute_cartoon_devil_with_pitchfork_flyer-r3acc0c03591f4be0817670827376bb1c_vgvyf_8byvr_324.jpg',
    youtubeVideoId : ''
  },
  {
    content: "对于我自己来说。我也有很多需要改变:",
    answer: 'ぎ',
    displayAnswer: 'が, ぎ, ぐ, げ, ご',
    type: 'text',
    position : 15,
    imageUrl : 'http://cdn.static-economist.com/sites/default/files/lead_2.jpg',
    youtubeVideoId : ''
  },
  {
    content: '变的更包容,特别是对自己看不上的东西,不要轻易去否定',
    contentNode: '',
    answer: 'さかな',
    displayAnswer: 'な,に,さ,か,の',
    type: 'text',
    position: 16,
    imageUrl: 'http://dreamatico.com/data_images/ocean/ocean-5.jpg',
    youtubeVideoId: 'Ha_VUkhZQHU'
  },
  {
    content: '控制脾气与火气。把最好的一面留给家人',
    contentNode: '',
    answer: 'ねずみ',
    displayAnswer: 'ま,み,む,ね,ず',
    type: 'text',
    position: 17,
    imageUrl: 'https://metaprocess.files.wordpress.com/2009/12/inner-calm.jpg',
    youtubeVideoId: '1QDTjlLcmYM'
  },
  {
    content: '努力赚钱,赚钱,赚更多的钱,物质基础决定上层建筑',
    contentNode: '',
    answer: 'かえる',
    displayAnswer: 'あ, か, う, え, る',
    type: 'text',
    position: 18,
    imageUrl: 'http://blogs-images.forbes.com/timmaurer/files/2015/06/rich.jpg',
    youtubeVideoId: 'kc6E_AkDiyo'
  },
  {
    content: '当一个好老公,好父亲,(这辈子可能当不了一个好儿子和好女婿。。。保密哦)。。。',
    contentNode: '',
    answer: 'きつね',
    displayAnswer: 'た,ね,つ,て,き',
    type: 'text',
    position: 19,
    imageUrl: 'http://wisebread.killeracesmedia.netdna-cdn.com/files/fruganomics/imagecache/605x340/blog-images/family-451554125.jpg',
    youtubeVideoId: '1SvbmghDFxw'
  },
  {
    content: '爱你的老公',
    contentNode: '',
    answer: 'うさぎ',
    displayAnswer: 'が, ぎ, ぐ,う,さ',
    type: 'text',
    position: 20,
    imageUrl: 'https://mindbodyspiritualawareness.com/wp-content/uploads/2015/05/i-love-you-hd-wallpaper-widescreen-wallpaper-love-you-picture-sayang-forever-always-allah-hd-widescreen.jpg',
    youtubeVideoId: 'Jsnc05_kiUA'
  }

];