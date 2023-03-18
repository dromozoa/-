(() => {
"use strict";

const D = globalThis.demeter ||= {};
if (D.scenario) {
  return;
}

D.scenario = [
// index:1
[{speaker:"narrator"},[
["昭和七十四年七月、ボクはキミに出逢った。"],
["人類が滅亡するまでの、最期のひとつきの、これは物語だ。"],
]],
// index:2
[{speaker:"narrator"},[
[["破局","カタストロフ"],"から十年。"],
["現在の世界人口は約二十億人と推定されている。"],
["人類の生存圏は三十パーセントを下まわった。"],
]],
// index:3
[{speaker:"narrator"},[
["人類の大半は寒冷地に押しこめられた。"],
["冬が",["屍者","ゾンビ"],"の脳髄を凍りつかせるから。"],
["海を要害に、封鎖と検疫に成功した島嶼もある。"],
["総じて人類は、南極以外の五大陸を喪いつつある。"],
]],
// index:4
[{speaker:"narrator"},[
["日本国は国体を北海道以北に疎開した。"],
["一千万を切った人口の過半は、国家総動員体制の下、農業生産と石炭採掘に従事している。"],
["本州の生存者は四十万人内外と見られる。"],
]],
// index:5
[{speaker:"narrator"},[
["一万人超の住民を抱える関東最大の根拠地、",["本牧地区","ホンモク・ディビジョン"],"。"],
["資源調達師団隷下、",["第一回収大隊","スカベンジャーズ"],"は京浜工業地帯を責任地域とする。"],
]],
// index:6
[{speaker:"narrator"},[
["対咬","戦闘服に円匙をかつぎ、キミは湾岸道路下のバラック集落を巡回する。"],
["キミのその日の相棒は",["訓練士","ハンドラー"],"のユキヲだ。"],
["彼の犬は",["屍者","ゾンビ"],"の屍臭を嗅ぐ。"],
]],
// index:7
[{speaker:"yukio"},[
["決戦の噂、聞いたか。"],
["本牧埠頭に大量の物資が陸揚げされてる。"],
["猿島","には重砲まで持ちこんでるんだとさ。"],
["おかげでオレたちも本物の肉にありつけるってわけだ。"],
]],
// index:8
[{speaker:"narrator"},[
["その日は",["屍者","ゾンビ"],"にも不審者にも遭遇しなかった。"],
["本部が置かれた中学校に戻り、下番したキミに大隊幕僚が声をかけた。"],
["キミを訪ねてきた者がいるという。"],
]],
// index:9
[{speaker:"yukio"},[
["おい、あれ、魔人小隊じゃねえか。"],
["オマエ、なんちゅう厄ネタを抱えこんだんだ。"],
["オレは",["逃げ","フケ"],"るぜ。"],
["あばよ。"],
]],
// index:10
[{speaker:"narrator"},[
["透きとおるように白い肌の少女がいた。"],
["フードを目深にかぶった十二の兵が背後に従う。"],
["少女の深紅の瞳がきらめいた。"],
]],
// index:11
[{speaker:"alice"},[
["資源調達師団特殊検索群、アリス大佐だ。"],
["これは辞令。こっちは階級章。"],
["特殊検索群少尉に任ずる、ってね。"],
["たった今から、キミはボクの部下だ。"],
]],
// index:12
[{speaker:"alice"},[
["今後とも、よろしく……"],
["あぁ、そうだ。"],
["キミの拳銃を見せてほしい。"],
]],
// index:13
[{speaker:"alice",choices:[
{choice:["サム・スペード"],action:($,ctx)=>{$.father = 1;;},barcode:"Sam Spade",label:14},
{choice:["フィリップ・マーロウ"],action:($,ctx)=>{$.father = 2;;},barcode:"Philip Marlowe",label:14},
{choice:["マイク・ハマー"],action:($,ctx)=>{$.father = 3;;},barcode:"Mike Hammer",label:14},
]},[
["年季のはいったガヴァメントだ。"],
["刻印がある。"],
["そうか。そういうことか。"],
["その銃をキミに渡した莫迦の名前をキミは憶えているか。"],
]],
// index:14
[{speaker:"alice"},[
["偽名を名乗るにしたって、もうちょっと品性があってもいいと思うんだけどね。"],
["まあ、いい。"],
["キミにひとりつけよう。ダヌー軍曹だ。"],
]],
// index:15
[{speaker:"narrator"},[
["歩みでた兵がフードを脱ぐ。"],
["褐色の肌。白い髪。",["戦化粧","ガングロ"],"。"],
["——尖った耳。"],
[["闇妖精","ダークエルフ"],"だ。"],
]],
// index:16
[{speaker:"danu"},[
["ダヌーだよ。"],
["よろー。"],
["少尉、よろしくありますか。"],
]],
// index:17
[{speaker:"alice"},[
["ババァ、無理すんな。"],
]],
// index:18
[{speaker:"danu"},[
["ロリババァは黙っていてくれないか。"],
[["マジでキレる五秒前","エムケーファイブ"],"。"],
["拠点にご案内します。"],
]],
// index:19
[{speaker:"narrator"},[
["南","本牧","埠頭に並ぶ蒲鉾兵舎に、人間と人間に似た者たちが棲む。"],
["人呼んで、本牧異人町。"],
["一角に特殊検索群α分遣隊の拠点があった。"],
]],
// index:20
[{speaker:"narrator"},[
["指揮所に備えられた壊れかけの黒い鉱石ラジオが",["布哇","ハワイ"],"陥落を伝えている。"],
]],
// index:21
[{speaker:"alice"},[
["α分遣隊にようこそ、少尉。"],
["秘匿名は",["魔女の落とし子","マジェスティック・トゥウェルヴ"],"。"],
]],
// index:22
[{speaker:"alice"},[
["我々は、人類と人類っぽいものの固有の尊厳と平等で譲られぬ権利を護り、世界に自由と正義と平和を築くことを目的とする。"],
]],
// index:23
[{speaker:"alice"},[
["その意味で、いや、どのような意味においても、我々は軍隊ではない。"],
["楽にしていい。"],
["無理に兵隊言葉を遣う必要もない。コギャル語もな。"],
]],
// index:24
[{speaker:"danu"},[
[["超ムカつく","チョムカ"],"。"],
["ありがたくあります。"],
]],
// index:25
[{speaker:"alice"},[
["状況を整理しよう。"],
["国内戦線は膠着している。"],
["北海道の食料生産は順調だ。"],
["銃後の食料統制も緩和された。"],
]],
// index:26
[{speaker:"alice"},[
[["安全地帯","グリーンゾーン"],"では、",["屍者","ゾンビ"],"による死者数が",["終末論的絶望症候群","アポカリプティック・ディスペアー・シンドローム"],"や自殺による死者数を下まわった。"],
["状況は小康状態にある。"],
["そうだったらよかったのに、な。"],
]],
// index:27
[{speaker:"danu"},[
["ある晩、彼または彼女は眠りにつく。傷つき絶望した人間は、夜のとばりのなか、そっと息をひきとる。"],
["明日","なんて、もう見たくないから。"],
["あーね。"],
]],
// index:28
[{speaker:"danu"},[
["死に至る病とは絶望である。"],
["バーイ、アンティ・クリマクス。"],
["だから、処方箋もいっしょ、なのにね。"],
["偉い人にはそれがわからんのです。"],
]],
// index:29
[{speaker:"alice"},[
["だから、決号作戦が発動した。"],
["決定的な勝利をもって厭戦気分を吹きとばす。"],
["まあ、あれだ。"],
["建前だ。"],
]],
// index:30
[{speaker:"alice"},[
[["布哇","ハワイ"],"が陥落した。"],
["武装要塞都市ホノルル。"],
["合衆国でもっとも安全だったはずの島。"],
["これには仔細がある。"],
]],
// index:31
[{speaker:"alice"},[
["未確認巨大敵性体、仮称リヴァイアサンが",["布哇","ハワイ"],"を強襲した。"],
["巨鯨の",["屍者","ゾンビ"],"と推測されている。"],
["審判の喇叭よろしく、仮称リヴァイアサンが吠えた。"],
]],
// index:32
[{speaker:"danu"},[
["獲物を見つけた",["屍者","ゾンビ"],"はうなり声を発する。"],
["うなり声を聞いた",["屍者","ゾンビ"],"もうなり声を発する。"],
["これが群体形成の理屈。"],
]],
// index:33
[{speaker:"danu"},[
["水中の",["屍者","ゾンビ"],"はうなり声を出せない。"],
["だから、",["深き者","ディープ・ワンズ"],"は",["溺屍者","ドラウンド"],"を圧倒できた。"],
["仮称リヴァイアサンの声はとても遠くまで届く。"],
["数百キロの範囲から",["溺屍者","ドラウンド"],"を呼びよせる。"],
]],
// index:34
[{speaker:"alice"},[
["仮称リヴァイアサンは、いわば",["屍者","ゾンビ"],"の強襲揚陸艦だ。"],
[["布哇","ハワイ"],"は巨大群体に蹂躙された。"],
["原子力空母に避難民を満載して、合衆国太平洋艦隊は転進した。"],
]],
// index:35
[{speaker:"alice"},[
["海はいまや要害ではなくなった。"],
["五大陸を喪った人類は、七つの海も喪おうとしている。"],
["だから、決号作戦が発動した。発動してしまった。"],
]],
// index:36
[{speaker:"alice"},[
["仮称リヴァイアサンを東京湾に誘引して邀撃する。"],
["関東は巨大群体に滅ぼされるだろう。"],
["それでも、仮称リヴァイアサンを撃滅すれば、被害は本州に極限される。"],
]],
// index:37
[{speaker:"alice"},[
["本州以外のすべての島嶼が救われる。"],
["人類が海をとりもどすための特別攻撃作戦。"],
["やれやれ。"],
["前","時代的だね。"],
]],
// index:38
[{speaker:"alice"},[
["我々の任務は、それではない、冴えたやりかたを見つけることだ。"],
["そのためにボクは横濱にもどった。"],
["そのためにボクたちは横濱にいる。"],
]],
// index:39
[{speaker:"alice",choices:[
{choice:["ある"],barcode:"Yes ma'am!",label:40},
{choice:["ない"],barcode:"No ma'am!",label:41},
]},[
["さてと。"],
["スティーブンと呼ばれた人物、あるいは結社の噂を聞いたことがあるか。"],
]],
// index:40
[{speaker:"alice",jump:42},[
["そうだ。飽きるほど囁かれた噂だ。"],
["戦局を一変する決戦兵器。特効薬。",["予防薬","ワクチン"],"。"],
["絶望した人間の願望が産みだした、存在しないマクガフィン。都市伝説。"],
]],
// index:41
[{speaker:"alice",jump:42},[
["そうか。まあ、一顧だに値しない噂だ。"],
["戦局を一変する決戦兵器。特効薬。",["予防薬","ワクチン"],"。"],
["絶望した人間の願望が産みだした、存在しないマクガフィン。都市伝説。"],
]],
// index:42
[{speaker:"alice"},[
["まだ、もうすこしだけ時間がある。"],
["キミには三通の手紙を届けてもらう。"],
]],
// index:43
[{speaker:"danu"},[
["だいじょうぶい。"],
["手紙は届いてしまうよ。"],
["郵便は誤配されないよ。"],
["ダヌーがついてるから。"],
]],
// index:44
[{speaker:"alice"},[
["だいじょうぶいって、コギャル語どころか、オヤジギャグじゃないか。"],
]],
// index:45
[{speaker:"danu"},[
[["超最悪","チョベリバ"],"。"],
["あれあれ。怒らせていいんですか。"],
["遣いますよ。郵便的脱構築。"],
]],
// index:46
[{speaker:"alice"},[
["いいですよ。遣ってください。"],
["否定神学とやらを。"],
["冗談はさておき、ボクには届けることのできない、これは手紙だから。"],
]],
// index:47
[{speaker:"narrator"},[
["これは手紙。これは郵便。"],
["これは",["物語","ナラティブ"],"。"],
["昭和横濱物語。スティーブンによる福音書。第一節。"],
["了。（つづく）"],
]],
// index:48
[{speaker:"narrator",leave:($,ctx)=>{delete $.priest;
  delete $.engineer;
  delete $.activist;;}},[
["昭和七十四年七月、ボクはキミに出逢った。"],
["人類が滅亡するまでの、最期のひとつきの、これは物語だ。"],
]],
// index:49
[{speaker:"alice"},[
["キミには三通の手紙を届けてもらう。"],
["本牧",["大聖堂","カテドラル"],"。"],
["資源循環局。"],
["魚人港湾労働組合。"],
]],
// index:50
[{speaker:"danu",choices:[
{choice:["本牧",["大聖堂","カテドラル"]],barcode:"priest",label:51},
{choice:["資源循環局"],barcode:"engineer",label:75},
{choice:["魚人港湾労働組合"],barcode:"activist",label:106},
],when:($,ctx)=>{
if($.priest && $.engineer && $.activist)return 145;
}},[
["少尉、どこに手紙を届けるの。"],
]],
// index:51
[{speaker:"narrator",when:($,ctx)=>{
if($.priest)return 74;
},leave:($,ctx)=>{$.priest = true;}},[
["本牧",["大聖堂","カテドラル"],"。"],
["徳川軍政時代末期、居留地に献堂された近代日本最初のメシア教会。"],
["関東大震災で崩壊し、現在の場所に移転した。"],
]],
// index:52
[{speaker:"danu"},[
["メサイア会かぁ。"],
["苦手なんだよね。"],
["アタシたち、",["無原罪","シンレス"],"だから。"],
]],
// index:53
[{speaker:"danu"},[
["アンタ、詳しくないんだっけ。"],
[["取り替え子","チェンジリング"],"。",["新人類","ニュータイプ"],"。","亜人","。異人。魔人。"],
["油をそそがれなかった者たち。"],
["——遡及的に。"],
]],
// index:54
[{speaker:"narrator"},[
["本牧山要塞の坂をキミはのぼっていった。しかし、","一朶","の白い雲はどこにも見つからなかった。"],
["門前で用向きを告げる。"],
["名宛人は墓掃除をしていると、侍祭が応えた。"],
]],
// index:55
[{speaker:"narrator"},[
["神父は無名戦士の墓を磨いていた。"],
["キミは手紙を渡す。"],
]],
// index:56
[{speaker:"priest"},[
[["本山","ヴァチカン"],"は総攻撃を容認したか。"],
]],
// index:57
[{speaker:"danu"},[
["それでもそれを容認できない","類","の、アンタたちは",["幇","ブラザーフッド"],"でしょ。"],
]],
// index:58
[{speaker:"priest"},[
["屍都の女王が、",["狡","こす"],"い手を遣うじゃないか。"],
]],
// index:59
[{speaker:"danu"},[
[["調子","チョ"],"づいてんじゃねぇぞ。"],
[["荒野","あらの"],"の誘惑だってのは、まあ、否定できないけど。"],
]],
// index:60
[{speaker:"priest"},[
["習合された地母神の名を名のる娘よ。"],
["メサイア会、舐めてんじゃねえぞ。"],
["あ",["奴","いつ"],"の銃を継いだキミ。"],
["そのガヴァメントには、なんと刻印されている。"],
]],
// index:61
[{speaker:"priest"},[
["他者のための人類たれ、他者とともに。"],
["それが、ワタシたちの",["信条","プリンシプル"],"だ。"],
[["善","よ"],"きサマリア人のたとえ。隣人愛。"],
]],
// index:62
[{speaker:"danu"},[
["ジェリコにくだる途中、人類でないものが強盗に襲われたら、少尉の銃は救ってくれるの。"],
]],
// index:63
[{speaker:"priest"},[
["銃は人を救わない。"],
["人は人を救わない。"],
["人は愛し、ただ、赦すのみ。"],
]],
// index:64
[{speaker:"danu"},[
["こたえになってなくね。"],
["原罪を、あらかじめ喪ったアタシたちに救いはあるの。"],
]],
// index:65
[{speaker:"priest"},[
["傷つけられ、虐げられた",["幼子","おさなご"],"よ。"],
["天国の門は開かれている。"],
["ホモ・サピエンス・サピエンスと種や属が異なろうと、キリスト者でなかろうと。だが、しかし、——"],
]],
// index:66
[{speaker:"priest"},[
["アウシュビッツ。ヒロシマ。ナガサキ。"],
["名づけられた悲劇たち。"],
["名づけられなかった","数多","の悲劇たち。"],
["二十世紀","、人類の魂は傷つき、人間性は損なわれた。"],
]],
// index:67
[{speaker:"priest"},[
[["破局","カタストロフ"],"が、とどめをさしたともいえる。"],
["生きのこるために、人類は人類を選別した。"],
["生きのこるために、みずから人間性を手放したのだ。"],
["信仰なかりせば、いまや人類は",["屍者","ゾンビ"],"と区別できない。"],
]],
// index:68
[{speaker:"danu"},[
["それって、ありなの。アンタんとこの教義的に。"],
["人類、あらかじめ滅んでんじゃん。"],
]],
// index:69
[{speaker:"priest"},[
["しかし、いつだってまだ",["機会","チャンス"],"はある。"],
["まあ、まかせておけ。"],
["駱駝を狭い門にねじこむのは得意なんだ。"],
]],
// index:70
[{speaker:"priest"},[
["魔女の口車にだって乗ってやろうじゃないか。"],
["核攻撃を阻止するためならば、是非もない。"],
["ワタシたちは、そういう",["幇","アラムナイ"],"だからな。"],
]],
// index:71
[{speaker:"danu"},[
["新式の","歩兵銃","を三百、弾も用意してるけど。"],
]],
// index:72
[{speaker:"priest"},[
["弾薬だけでいい。"],
["知らんのか。"],
["極東",["十字軍","クルセイダーズ"],"は聖別されたカラシニコフで",["屍者","ゾンビ"],"を打倒する。"],
["土産を持たせる。すこし待て。"],
]],
// index:73
[{speaker:"narrator",jump:50},[
["神父が歩み去る。"],
["無名戦士の墓碑に向きなおり、ダヌーは陸式の礼を捧げた。"],
["掃除用具を拾い、キミは墓を磨いた。"],
["年代物の葡萄酒を受けとり、帰路についた。"],
]],
// index:74
[{speaker:"danu",jump:50},[
[["大聖堂","カテドラル"],"は行ったじゃん。"],
]],
// index:75
[{speaker:"danu",when:($,ctx)=>{
if($.engineer)return 105;
},leave:($,ctx)=>{$.engineer = true;}},[
["人間だけが、",["屍者","ゾンビ"],"になると思われてきた。"],
["咬みつかれても引っかかれても、犬や猫は",["屍者","ゾンビ"],"にならない。"],
["毒でやられるだけ。"],
["すばしっこいから、ノロマの攻撃なんかよけるけど。"],
]],
// index:76
[{speaker:"danu"},[
["仮称リヴァイアサンの出現で、科学者たちは、あわてて資料を引っくりかえした。"],
["大型類人猿が",["屍者","ゾンビ"],"になったという記録はあった。"],
]],
// index:77
[{speaker:"danu"},[
["具体的には、ボノボだったらしいんだけど。"],
[["屍者","ゾンビ"],"化したオスを、メスの集団が崖から突きおとした。"],
["霊長研の院生からの、それは最後の通信だった。"],
]],
// index:78
[{speaker:"danu"},[
["十年間、科学者たちは探しもとめたけど、",["屍者","ゾンビ"],"菌も",["屍者","ゾンビ"],"ウイルスも見つけられなかった。"],
["だから、特効薬も",["予防薬","ワクチン"],"も作れなかった。"],
]],
// index:79
[{speaker:"danu"},[
[["斬首","くびちょんぱ"],"した",["屍者","ゾンビ"],"を",["核磁気共鳴画像診断","MRI"],"につっこんで調べた。"],
["観測できる範囲で、脳が活動していないことはわかってる。"],
["それなのに、うなり声をあげるんだ。"],
["首からしたがついてたら、動きまわるんだよ。"],
]],
// index:80
[{speaker:"danu"},[
["そんで、科学者たちが立てた仮説。"],
["脳の言語野に寄生する、細菌でもウイルスでもないなにか。"],
["たとえば、",["模倣子","ミーム"],"みたいな。"],
]],
// index:81
[{speaker:"danu"},[
["この郵便の宛先は、そういうのにくわしいんだって。"],
]],
// index:82
[{speaker:"narrator"},[
["武装臨海鉄道、本牧線、横濱本牧駅。"],
["資源循環局、総力戦政策調整部、",["武器製造推進課","ウェポン・メーカーズ"],"。"],
[["破局","カタストロフ"],"初期、自動車を解体して円匙と斧槍を製造した工場。"],
["つまり、官営のリサイクル工場。"],
]],
// index:83
[{speaker:"narrator"},[
["キミは手紙をさしだし、課長の名刺を受けとった。"],
[["即席珈非","インスタントコーヒ"],"が湯気をたてている。"],
]],
// index:84
[{speaker:"engineer"},[
["課長といっても、名ばかりの管理職でね。"],
["もとは扶桑ファナティックでメカトロをやっていたんだが、なんの因果か、公僕になっちまった。"],
["とは言い条、友の娘の依頼だ。応じよう。"],
]],
// index:85
[{speaker:"engineer"},[
["装甲ピックアップ二台。自走式電源車。"],
["どんとこい。"],
["弾薬は要らないんだね。"],
]],
// index:86
[{speaker:"danu"},[
["大隊","十基数","、用意してる。"],
]],
// index:87
[{speaker:"engineer"},[
["いやはや、",["戦争の夏","サマー・オブ・ウォー"],"だな。"],
]],
// index:88
[{speaker:"danu"},[
["決戦の夏、日本の夏っていうじゃん。"],
]],
// index:89
[{speaker:"engineer"},[
["いわないんじゃないかな。"],
]],
// index:90
[{speaker:"engineer"},[
["昭和六十年代初頭、情報社会の高度化にともない、国際的プロジェクトが起ちあげられた。"],
["情報方舟計画。離散化された情報を、",["収束光","レーザ"],"で石英",["硝子","ガラス"],"に彫刻して、スヴァールバル諸島の永久凍土に保存する。"],
]],
// index:91
[{speaker:"engineer"},[
["まあ、",["破局","カタストロフ"],"のどさくさで立ちぎえになったんだが。"],
["根岸の一般設計学研究所が、日本の拠点になった。"],
["数値風洞で演算した結果を、初芝の生産技術研究所で",["硝子","ガラス"],"に灼きつける。"],
]],
// index:92
[{speaker:"engineer"},[
["一般設計学研究所に、スティーブンという研究者がいた。"],
["マックス・プランクから引っぱってきたんだったかな。"],
]],
// index:93
[{speaker:"engineer"},[
["スティーブンの研究は、情報理工学的には、異端だった。"],
["かつて計算され、これから計算されるだろう、すべての","数","。"],
["ここまでなら、まあ、ゲーデル数だな。"],
["あるいは、バベルの図書館。",["世界夫人の記憶","アカシック・レコード"],"。"],
]],
// index:94
[{speaker:"engineer"},[
["計算という行為、演算それ自体が、世界を書きかえる。"],
["当為と存在の反転。そう論文に書かれていた。"],
["意味はまったくわからん。"],
]],
// index:95
[{speaker:"engineer"},[
["スティーブンがやったことは、実際には、ある種の情報テロルだ。"],
["真偽さだかならぬ機密情報を、方舟に載せようとした。"],
]],
// index:96
[{speaker:"engineer"},[
[["大統領","ケネディ"],"暗殺計画。"],
[["超人計画","MKウルトラマン"],"。"],
[["無名祭祀書","ネームレス・カルツ"],"。"],
["そのほか、有象無象。"],
]],
// index:97
[{speaker:"engineer"},[
["結局、スパコンも石英",["硝子","ガラス"],"も打ち捨てられた。"],
["そんな道楽に費やす資源の余裕を、人類は喪ったからね。"],
["だから、それらはそこにありつづけている。"],
]],
// index:98
[{speaker:"engineer"},[
["それが、スティーブンの噂の本当のところなのさ。"],
["救いはない。"],
["だが、しかし——"],
]],
// index:99
[{speaker:"danu"},[
["スティーブンって、実在した人物なの。"],
]],
// index:100
[{speaker:"engineer"},[
["さあな。"],
["ブルバキみたいなもんかもしれない。"],
]],
// index:101
[{speaker:"danu"},[
["演算それ自体が、世界を書きかえるって、どうやって。"],
]],
// index:102
[{speaker:"engineer"},[
["わからんね。"],
["字句","通り","に解釈するなら、ある種の計算のひとつひとつが、定数の異なる宇宙を生成する。"],
["なんのこっちゃ。"],
]],
// index:103
[{speaker:"danu"},[
["そのとき、世界は遡及的に変容するのかな。"],
]],
// index:104
[{speaker:"narrator",jump:50},[
["応えはなかった。"],
["応えは求められていなかった。"],
[["珈非","コーヒ"],"を飲みほして、キミは席を立った。"],
]],
// index:105
[{speaker:"danu",jump:50},[
["資源循環局は、もう行ったよね。"],
]],
// index:106
[{speaker:"narrator",when:($,ctx)=>{
if($.activist)return 144;
},leave:($,ctx)=>{$.activist = true;}},[
["本牧異人町。"],
["蒲鉾兵舎にかかげられたネオンに、灯はともっていない。"],
["リックス・カフェ・アメリカン。"],
]],
// index:107
[{speaker:"narrator"},[
["入口のかたわらにベニヤ看板。"],
["角ばった字で、魚人港湾労組。"],
["ポリ塩化ビニル暖簾を、キミはくぐった。"],
]],
// index:108
[{speaker:"activist"},[
["おまえさん、",["探偵","ピンカートン"],"の弟子か。"],
["ピケやぶりなら帰ってくれ。"],
]],
// index:109
[{speaker:"danu"},[
["どっちかっていうと、ボス交。"],
]],
// index:110
[{speaker:"activist"},[
["なんか註文しろや。"],
["こっちゃ、","パートタイムで闘争してんだ。"],
]],
// index:111
[{speaker:"danu"},[
["あれを弾いて、サム。"],
["アズ・タイム・ゴーズ・バイ。"],
]],
// index:112
[{speaker:"activist"},[
["そういう意味じゃねえ。"],
["だいたい、ピアノがねえよ。"],
["コーラでいいな。"],
]],
// index:113
[{speaker:"narrator"},[
["風呂敷包みを",["卓子","テーブル"],"に置き、キミはぬるいコーラをあおった。"],
["店主に手紙をすべらせる。"],
]],
// index:114
[{speaker:"activist"},[
["その銃な、海兵隊からカードでまきあげたんだとさ。"],
["あ",["奴","いつ"],"は、そう吹いてた。"],
["刻印されてるだろ。"],
["他者のための",["人","メン"],"であれ。"],
]],
// index:115
[{speaker:"danu"},[
["変わることができない、あいかわらず",["男根主義","マチズモ"],"の",["幇","パルタイ"],"だ。"],
]],
// index:116
[{speaker:"activist"},[
["万国の労働者、",["団結せよ","ユナイト"],"。"],
["魚人とともに。"],
]],
// index:117
[{speaker:"danu"},[
[["しらける","ホワイトキック"],"。"],
["いつも、こんなに客いないの。"],
]],
// index:118
[{speaker:"activist"},[
["営業時間外だからな。"],
["正味のところ、ダゴン秘密教団の集会のせいさ。"],
["神、海に知ろしめす、ってな。"],
["本題に","はいれ","よ、魔人小隊。"],
]],
// index:119
[{speaker:"danu"},[
["今日ご紹介するのは、こちらのマイクロフィルムなんです。あのミスカトニック大学で、アル・アジフを高解像度スキャン。不完全な写本をつかったせいで、浮上したルルイエがすぐ沈んじゃって困っているアナタ。"],
]],
// index:120
[{speaker:"danu"},[
["このマイクロフィルムなら、そんなことはございません。今なら、初心者でも簡単、あなたにも星辰の正しい位置がわかる、ルルイエ",["異本","テクスト"],"がついてきます。さらに読取機もつけて、お値段はおどろきの——"],
]],
// index:121
[{speaker:"narrator"},[
["キミは風呂敷の結びをほどいた。"],
]],
// index:122
[{speaker:"danu"},[
["アタシたちの分析では、ダゴン秘密教団を放置すると、",["深き者","ディープ・ワンズ"],"は人類に敵対することになる。"],
["合衆国からかっぱらった原潜、まだ動くんでしょ。"],
]],
// index:123
[{speaker:"activist"},[
["ノーコメント。"],
["ナンセーンス。"],
]],
// index:124
[{speaker:"danu"},[
["このまま、過激派が多数をおさえちゃったら、魚人社会は仮称リヴァイアサンを神と崇める狂信者集団になる。"],
["仮称リヴァイアサンを撃滅しても、北海道に",["潜水艦発射弾道弾","SLBM"],"が撃ちこまれる。"],
]],
// index:125
[{speaker:"danu"},[
["したっけ、人類は、",["太平洋到達不能極","ポイント・ネモ"],"を",["大陸間弾道弾","ICBM"],"で叩くことを躊躇しない。"],
["世界は核の炎に包まれる。"],
["アンタたち、それって受けいれられるの。"],
]],
// index:126
[{speaker:"activist"},[
["受けいれないさ。"],
["しかし、それと、そのマイクロフィルムがどう関係する。"],
]],
// index:127
[{speaker:"danu"},[
["ダゴン秘密教団の教義は、新興カルト一般のそれ。"],
["いろんな神話や伝説をパッチワークしたでっちあげ。"],
]],
// index:128
[{speaker:"danu"},[
["そういうのって、脆弱性を持つんだよね。"],
["いかんともしがたく。"],
["器質的なもんだったらおもしろいよね。"],
["人類や人類っぽいものに共通する。"],
]],
// index:129
[{speaker:"danu"},[
["特殊検索群プレゼンツ。"],
["絶対安全ネクロノミコン。"],
[["深き者","ディープ・ワンズ"],"の信仰を操作するべく開発された、できたてほやほや物語論兵器。"],
]],
// index:130
[{speaker:"narrator"},[
["店主は",["叶和圓","イェヘユアン"],"に火を点けた。"],
]],
// index:131
[{speaker:"activist"},[
["大衆のメタンアンフェタミンってか。"],
["アヘンじゃなくて。"],
["喫うか。菊の紋がはいったやつもあるぜ。"],
]],
// index:132
[{speaker:"danu"},[
["土産にちょうだい。"],
["うちには喫うやつもいるから。"],
]],
// index:133
[{speaker:"danu"},[
["仮称リヴァイアサンを拝むのは、自由かもしんないけど。"],
["どうせ、小魚みたいに、頭からぽりぽり食べられちゃうよ。"],
["信教の自由は、そこまでは含まないっしょ。"],
]],
// index:134
[{speaker:"danu"},[
["それが総意で、それが本望だったとしても、死んじゃったら、アタシたちは哀しいよ。"],
["やっぱり、生きていてほしいと思うんだよ。"],
["そのための、いってみりゃ、脱洗脳みたいなもん。"],
]],
// index:135
[{speaker:"activist"},[
["まあ、いい。"],
["表向きの理由は了解した。"],
]],
// index:136
[{speaker:"danu"},[
["ぜんぶはなしたし。"],
["裏の理由なんてないよ。"],
["少尉の拳銃にかけて。"],
]],
// index:137
[{speaker:"narrator"},[
["いうまでもない。"],
["裏はある。"],
["特殊検索群が本当におそれたのは、全面核戦争ではない。"],
]],
// index:138
[{speaker:"narrator"},[
["仮称リヴァイアサンから、仮称がとれてしまうこと。"],
["遡及的に、",["深き者","ディープ・ワンズ"],"の神になりはててしまうこと。"],
["それを危惧して先制攻撃をしかけている。"],
]],
// index:139
[{speaker:"danu"},[
["そんで、どうなの。"],
["できるよね。"],
[["深き者","ディープ・ワンズ"],"穏健派の首魁。"],
["最初の魚人のひとり。"],
]],
// index:140
[{speaker:"activist"},[
["できるさ。"],
["やらいでか。"],
]],
// index:141
[{speaker:"danu"},[
["ありがと。"],
["ところで、",["煙草","ヤニ"],["喫","く"],"う魚人ってはじめて見たよ。"],
["肺、どうなってんの。"],
]],
// index:142
[{speaker:"activist"},[
[["学生","ガキ"],"のころからの習い性だからさ。"],
["あ",["奴","いつ"],"とつるんでさ。"],
]],
// index:143
[{speaker:"narrator",jump:50},[
["フィルタつき",["叶和圓","イェヘユアン"],"のカートンをキミは受けとる。"],
["ダヌーは古い歌をハミングした。"],
["ただよう臭いが煙草のせいなのかどうか、キミにはわからなかった。"],
]],
// index:144
[{speaker:"danu",jump:50},[
["手紙は届けられてしまったよ、すでに。"],
]],
// index:145
[{speaker:"danu"},[
["少尉、今日の配給。"],
["本物の肉を使った肉まんだって。"],
]],
// index:146
[{speaker:"narrator"},[
["三溪園。",["伝説","ブーゲンビリア"],"の樹のしたで、キミは配給を受けとる。"],
]],
// index:147
[{speaker:"danu"},[
[["肉まん","パン"],"と",["叶和圓","タバコ"],"と",["葡萄酒","アルコール"],"。"],
["PTAで最後の晩餐だね。"],
]],
// index:148
[{speaker:"narrator"},[
["特殊検索群α分遣隊の総員が指揮所に集合した。"],
]],
// index:149
[{speaker:"danu"},[
["傾聴。"],
]],
// index:150
[{speaker:"alice"},[
["菊刀一号作戦は発展的に解消した。"],
["ぶっちゃけ、日米",["連合艦隊","グランドフリート"],"は、マリアナ海溝邀撃漸減作戦に失敗した。"],
["β分遣隊は、第七艦隊旗艦とともに沈んだ。"],
]],
// index:151
[{speaker:"alice"},[
["菊刀二号作戦が発令された。"],
["我々の任務は、仮称リヴァイアサンの誘引。"],
["ボクもやきがまわったな。"],
["文字どおり、特別攻撃作戦だ。"],
]],
// index:152
[{speaker:"danu"},[
["ワンチャン、いけるって。"],
]],
// index:153
[{speaker:"alice",choices:[
{choice:["熱望"],barcode:"Elvis",label:154},
{choice:["希望"],barcode:"Elpis",label:155},
{choice:["拒否"],label:157},
]},[
["強制はしない、少尉。"],
["熱望か希望か拒否か、ひとつを択べ。"],
]],
// index:154
[{speaker:"danu",jump:168},[
["安心して。"],
["アンタのことは、ダヌーがちゃんと終わらせてあげるから。"],
]],
// index:155
[{speaker:"alice"},[
["この世界に、希望はないんだ、少尉。"],
[["希望","エルピス"],"も",["ロック","エルビス"],"も喪われた。"],
]],
// index:156
[{speaker:"danu",choices:[
{choice:["最熱望"],barcode:"Elvis",label:154},
{choice:["熱望"],barcode:"Elvis",label:154},
{choice:["拒否"],label:157},
]},[
[["妖精","エルブズ"],"はいるけど。"],
]],
// index:157
[{speaker:"danu"},[
["少尉。"],
["アンタ。"],
]],
// index:158
[{speaker:"alice"},[
["ダヌー軍曹、いいんだ。"],
["我々は軍隊ではない。"],
["あるいは、民主主義国家の最後の民主主義的な軍隊だ。"],
]],
// index:159
[{speaker:"alice"},[
["少尉、血のように赤い葡萄酒だった。"],
["うまい",["包子","パオ"],"だった。"],
["良い晩餐だった。"],
[["煙草","ヤニ"],"はまずかったがな。"],
]],
// index:160
[{speaker:"narrator"},[
["除隊したキミは、引揚船で北海道に渡る。"],
]],
// index:161
[{speaker:"narrator"},[
["仮称リヴァイアサンが襲来した。"],
["日米",["連合艦隊","グランドフリート"],"は、最後の",["戦艦","バトルシップ"],"とひきかえに、仮称リヴァイアサンを東京湾最終防衛線に拘束した。"],
["統合航空軍は、空中巡洋艦から核爆雷を投下した。"],
]],
// index:162
[{speaker:"narrator"},[
[["深き者","ディープ・ワンズ"],"過激派の報復攻撃により、札幌、旭川、函館が蒸発した。"],
["石柱都市が浮上した。"],
["人類は残された",["大陸間弾道弾","ICBM"],"を全力で投射した。"],
]],
// index:163
[{speaker:"narrator"},[
["妖精種はたもとを分かった。人類種とも。","魚人","種とも。"],
["二十六年が経った。"],
["世界人口は十億人を下回った。"],
["あらたな黙示録の獣どもが、地上を闊歩している。"],
]],
// index:164
[{speaker:"narrator"},[
["南樺太。"],
["炭鉱労働を終えたキミは帰路につく。"],
["昭和百年の祝賀の雰囲気は雲散霧消していた。"],
]],
// index:165
[{speaker:"narrator"},[
["灯のない昏い道に、白い影が立つ。"],
["つきしたがう十二の影は、闇にとけて見えなかった。"],
]],
// index:166
[{speaker:"alice"},[
["返してもらいにきた。その銃を。"],
["終わらせにきた。人類を。世界を。"],
["——昭和を。"],
]],
// index:167
[{speaker:"narrator",finish:true},[
["昭和横濱物語。アリスの",["黙示録","リベレーション"],"。"],
["了。"],
]],
// index:168
[{speaker:"narrator"},[
["エデンの園",["配置","コンフィギュレーション"],"は喪われた。"],
["グライダー",["銃","ガン"],"に撃たれ、",["長命者","メトセラ"],"は九百六十九歳で死んだ。"],
["昭和横濱物語。スティーブンによる福音書。第二節。"],
["了。（つづく）"],
]],
// index:169
[{speaker:"narrator"},[
["昭和七十四年七月、ボクはキミに出逢った。"],
["人類が滅亡するまでの、最期のひとつきの、これは物語だ。"],
]],
// index:170
[{speaker:"narrator"},[
[["情報分隊","メイジャイ"],"。情報処理に特化した",["妖精種","エルブズ"],"の",["三人組","トリオ"],"。"],
["腕に装着した","オノ＝センダイ","のデッキをにらみ、分隊長が報告する。"],
]],
// index:171
[{speaker:"demeter"},[
["発、ブルーリッジ分乗特殊検索群β分遣隊。"],
["宛","、特殊検索群司令部。"],
["秘匿兵器",["断章","フラグメント"],"使用許可を","求","む。"],
["このままでは、エンタープライズが沈む。"],
]],
// index:172
[{speaker:"demeter"},[
["発、特殊検索群司令部。"],
["宛","、特殊検索群β分遣隊。"],
["秘匿兵器使用を許可する。"],
["可能な限り、",["断章","フラグメント"],"を回収し、生還せよ。"],
]],
// index:173
[{speaker:"alice"},[
["避難民を満載した原子力空母を護って、第七艦隊旗艦は沈んだ。"],
[["断章","フラグメント"],"はマリアナ海溝の藻屑と消えた。"],
["β分遣隊は護国の鬼となった。"],
]],
// index:174
[{speaker:"danu"},[
["十万余の",["屍者","ゾンビ"],"、国難ここに見る。"],
["昭和七十四年の夏の頃。"],
["十万だったら楽だったのに。"],
]],
// index:175
[{speaker:"alice"},[
["よほど無理をしてもらうぞ。"],
["我々には、伏せ札がいちまいきりだ。"],
]],
// index:176
[{speaker:"danu"},[
["大佐の方針を達する。"],
["傾聴。"],
]],
// index:177
[{speaker:"alice"},[
["そもそもにたちかえろう。"],
["仮称リヴァイアサンはどうして、",["布哇","ハワイ"],"に現れた。"],
["なぜだ。"],
["なにものかが、読んだからだ。"],
]],
// index:178
[{speaker:"alice"},[
["スティーブンによる福音書を読んだからだ。"],
["読むという行為。"],
["読まれてしまった",["福音書","ゴスペル"],"。"],
["仮称リヴァイアサンは、それに反応した。"],
]],
// index:179
[{speaker:"danu"},[
["読むという行為。"],
["計算という行為。"],
["演算それ自体。"],
]],
// index:180
[{speaker:"alice"},[
[["屍者","ゾンビ"],"とはなんだ。"],
["魔人とはなんだ。"],
[["破局","カタストロフ"],"とは、なんだ。"],
]],
// index:181
[{speaker:"demeter"},[
["昭和六十四年一月七日午前六時三十三分。"],
[["破局","カタストロフ"],"発生。"],
]],
// index:182
[{speaker:"alice"},[
["辺縁からもたらされた人獣共通感染症。"],
[["屍者","ゾンビ"],"禍","を、人類はそのように認識した。"],
["手をこまねいているうちに、感染が拡大した。"],
]],
// index:183
[{speaker:"danu"},[
["外縁で。あらかじめ。"],
["辺境で。遡及的に。"],
["未開で。生まれてきた。"],
["魔人が。人に似て、人でないものたちが。"],
]],
// index:184
[{speaker:"alice"},[
["人類と人類っぽいものの固有の尊厳と平等で譲られぬ権利を護る。"],
["それが、我々の",["信条","プリンシプル"],"だ。"],
]],
// index:185
[{speaker:"danu"},[
["世界に自由と正義と平和を築く。"],
["気づいてるよね、少尉。"],
["仮称リヴァイアサンを撃滅することも、人類を救済することも、それそのものは、アタシたちの目的じゃない。"],
]],
// index:186
[{speaker:"alice"},[
["一通","の手紙。"],
["かつてボクの父だった人間から、郵便が届いた。"],
]],
// index:187
[{speaker:"danu"},[
["大佐に手紙が届いちゃったんだ。"],
]],
// index:188
[{speaker:"alice"},[
["——ガヴァメントを託した。",["予言機械","オラクルマシン"],"を接続しろ。"],
]],
// index:189
[{speaker:"demeter"},[
["京浜工業地帯。"],
["根岸湾埋立地。"],
["工業技術院一般設計学研究所情報基盤センター南棟","。"],
["通称、","計算機棟","。"],
]],
// index:190
[{speaker:"danu"},[
["情報方舟計画。",["記録保管所","アーカイブズ"],"。"],
["電話回線経由、",["ユニックス間転送プロトコル","UUCP"],"接続。"],
["記録は部分的に合衆国の教育機関にバックアップされた。"],
["きっと、",["布哇","ハワイ"],"大学にも。"],
]],
// index:191
[{speaker:"alice"},[
["スティーブンによる福音書。"],
["封印された偽典の正本。"],
["我々が読む。"],
]],
// index:192
[{speaker:"alice"},[
["決号作戦、第二段階。"],
["菊刀二号作戦。"],
["仮称リヴァイアサンを誘引する。"],
]],
// index:193
[{speaker:"alice"},[
[["十字軍","クルセイダーズ"],"を加入し、大隊を編成する。"],
["統合航空軍に空中巡洋艦の渡りはつけた。"],
]],
// index:194
[{speaker:"narrator"},[
["空中巡洋艦飛鳥","。"],
["水素を利用した硬式飛行船。"],
["ヘリウムを利用できないほど、人類は追いつめられている。"],
]],
// index:195
[{speaker:"alice"},[
["最悪、","計算機棟","とやらに雪隠詰めで玉砕だ。"],
["千万の",["屍者","ゾンビ"],"に重囲されてはどうにもならない。"],
["ボクもやきがまわったな。"],
["文字どおり、特別攻撃作戦だ。"],
]],
// index:196
[{speaker:"danu"},[
["ワンチャン、いけるって。"],
]],
// index:197
[{speaker:"narrator"},[
["最後の晩餐は、そうして終わった。"],
]],
// index:198
[{speaker:"narrator"},[
["ある夜。"],
["無名戦士の墓。"],
[["訓練士","ハンドラー"],"のユキヲが立つ。"],
["彼の犬とともに。"],
]],
// index:199
[{speaker:"yukio"},[
["呼びだしてわるかったな。"],
[["長距離哨戒","LRP"],"帰りなんだ。"],
["オレの",["犬","ケーナイン"],"を護って死んだオッサンから、届けものがある。"],
]],
// index:200
[{speaker:"narrator"},[
["ガヴァメントの弾倉。"],
["七発の",["銀の弾丸","シルバー・ヴァレット"],"。"],
]],
// index:201
[{speaker:"yukio"},[
["探偵を標榜したオッサンからの言伝だ。"],
["択べ。だとさ。"],
["オレは往くぜ。"],
["明日","の輸送船でな。"],
]],
// index:202
[{speaker:"narrator"},[
[["屍者","ゾンビ"],"を嗅ぐ犬は、おなじ重さの","金","よりも価値がある。"],
["いまや、","金","に価値などないけれど。"],
["ユキヲは犬とともに北海道に渡る。"],
["決戦がせまっていた。"],
]],
// index:203
[{speaker:"narrator"},[
["ある朝。"],
["三百の兵が水をくちに含む。"],
["主","に選ばれた弊衣の",["古強者","ヴェテラン"],"ども。"],
["メサイア会、極東",["十字軍","クルセイダーズ"],"。"],
]],
// index:204
[{speaker:"alice"},[
["無停止進撃だ。"],
["目的を達するまで、我々は止まらない。"],
["我々は軍隊ではないから。"],
["我々が最後の軍隊だから。"],
]],
// index:205
[{speaker:"narrator"},[
["大隊は進発した。"],
["二列縦隊で進む。"],
["中段に武装ピックアップと自走式電源車を置く。"],
["弾薬を満載したトレーラーを牽引する。"],
]],
// index:206
[{speaker:"narrator"},[
[["破局","カタストロフ"],"以降、人類が到達した対",["屍者","ゾンビ"],"戦術。"],
[["屍者","ゾンビ"],"の武器はかみつきと爪。"],
[["屍者","ゾンビ"],"は、うなり声をあげて歩みよる。"],
[["屍者","ゾンビ"],"は、塹壕にこもらない。"],
]],
// index:207
[{speaker:"narrator"},[
["屋外では、横陣または方陣を組む。"],
["阻止線を越えた",["屍者","ゾンビ"],"の眉間を狙撃する。"],
["焼夷弾で脳を灼く。"],
["それが、もっとも経済的で効率的な手段だから。"],
]],
// index:208
[{speaker:"narrator"},[
["戦術を内面化した者たちだけが生きのこった。"],
["弾薬が続くかぎり、",["屍者","ゾンビ"],"を打倒する。"],
["積みあがった屍体それ自体で阻塞する。"],
]],
// index:209
[{speaker:"narrator"},[
["屋内では、長柄の武器で近接戦闘を実施する。"],
[["第一回収大隊","スカベンジャーズ"],"は、円匙や斧槍を得意とする。"],
[["十字軍","クルセイダーズ"],"は、銃剣を使う。"],
["アリスの得物は",["大剣","クレイモア"],"だ。"],
]],
// index:210
[{speaker:"demeter"},[
["進路上に",["屍者","ゾンビ"],"、中隊規模。一個小隊欠かな。"],
]],
// index:211
[{speaker:"priest"},[
["隊形を変換するか。"],
]],
// index:212
[{speaker:"alice"},[
["無停止進撃と命じたぞ、神父。"],
["ボクが排除する。"],
]],
// index:213
[{speaker:"danu"},[
["大隊総員に達する。"],
["莫迦が単騎で突撃する。"],
["なんか、いいかんじにおなしゃす。"],
]],
// index:214
[{speaker:"demeter"},[
["射界がとれる人は一発だけ撃って","くださーい","。"],
["莫迦にあてないようにまあまあ注意して。"],
]],
// index:215
[{speaker:"narrator"},[
["白い肌、深紅の瞳、背より巨きな",["大剣","クレイモア"],"。"],
["少女は荷台から飛びおりる。"],
["疾る。"],
["カラシニコフの発砲音が追いぬく。"],
]],
// index:216
[{speaker:"alice"},[
[["死んでくれる？","Die For Me!"]],
]],
// index:217
[{speaker:"narrator"},[
["くるくるまわり、アリスは首を刈る。"],
["α分遣隊の",["妖精種","エルブズ"],"が",["長弓","ロングボウ"],"で曲射する。"],
["すべての",["屍者","ゾンビ"],"が倒れ伏す。"],
]],
// index:218
[{speaker:"narrator"},[
["大隊は進軍した。"],
["運河を渡った。"],
["一般設計学研究所に到着した。"],
["計算機棟内を掃討する。"],
]],
// index:219
[{speaker:"priest"},[
["西側に",["殺し間","キルゾーン"],"を形成する。"],
["海側はどうにもならん。"],
]],
// index:220
[{speaker:"alice"},[
["時間差がある。"],
["各個撃破する。"],
]],
// index:221
[{speaker:"demeter"},[
["H","+","四まで主攻正面は陸側。"],
[["屍者","ゾンビ"],"数百万が誘引されると予測。"],
["H","+","六、仮称リヴァイアサン東京湾に侵入。"],
["H","+","八、巨大群体上陸。"],
]],
// index:222
[{speaker:"danu"},[
["最初の四時間で射耗していい。"],
]],
// index:223
[{speaker:"priest"},[
["メサイア会、舐めてんじゃねえぞ。小娘。"],
]],
// index:224
[{speaker:"narrator"},[
["屍体の山が二階の高さに達すれば、",["屍者","ゾンビ"],"は乗りこえられなくなる。"],
["かつて人間だった","身体","を積んで壁となす。"],
["その狂気に疑問を持つ者はここにない。"],
]],
// index:225
[{speaker:"alice"},[
["ぎりぎりまで電源車のまわりで持久。"],
["そのあとは籠城だな。"],
["弾","が続くかぎり、屋上から狙撃して遅滞する。"],
]],
// index:226
[{speaker:"engineer"},[
["ケーブルは二階まで引けばいいんだね。"],
["ラックひとつ動かすだけなら、八時間は持つ。"],
]],
// index:227
[{speaker:"danu"},[
["α分遣隊、捜索にかかれ。"],
]],
// index:228
[{speaker:"demeter"},[
["石英",["硝子","ガラス"],"は粉々。"],
["磁気テープを発見。"],
[["自動図書館","ライブラリ"],"は故障。"],
]],
// index:229
[{speaker:"danu"},[
["読めるの。"],
]],
// index:230
[{speaker:"demeter"},[
["可能。"],
]],
// index:231
[{speaker:"danu"},[
[["制御卓","コンソール"],"はどう。"],
]],
// index:232
[{speaker:"demeter"},[
["起動を確認。"],
["生体認証装置も正常。"],
]],
// index:233
[{speaker:"alice"},[
["はじめるか。"],
["統合航空軍に打電。"],
]],
// index:234
[{speaker:"priest"},[
["ワタシは屋上で指揮をとる。"],
["そのまえに。"],
["あ",["奴","いつ"],"に銃を託されたキミ。"],
["キミはなんだ。人間か。魔人か。"],
]],
// index:235
[{speaker:"priest"},[
["応えは要らない。"],
["人間性。"],
["それが鍵だ。"],
]],
// index:236
[{speaker:"engineer"},[
["ジブン","も電源車にいくよ。"],
["いまさらだけど。"],
["道理にあわないと思わないかい。"],
]],
// index:237
[{speaker:"engineer"},[
["情報方舟計画。"],
["たかが、情報を記録するだけじゃないか。"],
["どうして数値風洞を必要とした。"],
["流体力学のためのスパコンで、なにを演算した。"],
]],
// index:238
[{speaker:"narrator"},[
["ふたりは歩みさる。"],
]],
// index:239
[{speaker:"alice"},[
["はじめよう。"],
]],
// index:240
[{speaker:"danu"},[
[["予言機械","オラクルマシン"],"、",["起動","ブート"],"。"],
["仮説を",["待機","ポーリング"],"。"],
]],
// index:241
[{speaker:"demeter"},[
["テープ",["読出","ロード"],"開始。"],
["残り時間三分。"],
]],
// index:242
[{speaker:"alice"},[
["読むという行為。"],
["しかし、",["誰","たれ"],"が読む。"],
]],
// index:243
[{speaker:"demeter"},[
["テープ",["読出","ロード"],"完了。"],
["えっと、これはテクストじゃなくて。"],
["えっと、これは",["起動連環","ブートストラップ"],"。"],
]],
// index:244
[{speaker:"danu"},[
["どういうこと。"],
]],
// index:245
[{speaker:"demeter"},[
[["起動連環","ブートストラップ"],"第一",["段階","ステージ"],"開始。"],
[["認証の催促","プロンプト"],"。"],
]],
// index:246
[{speaker:"alice"},[
["少尉、待たせたな。"],
["キミの血をもらう。"],
]],
// index:247
[{speaker:"narrator"},[
["生体認証装置に、キミは血をたらす。"],
]],
// index:248
[{speaker:"demeter"},[
[["認可","AUTHZ"],"。"],
]],
// index:249
[{speaker:"danu"},[
[["認証","AUTHN"],"じゃないってこと。"],
["いかようにも読まれてしまう",["非","アンチ"],"テクスト。"],
["そういうこと。"],
]],
// index:250
[{speaker:"demeter"},[
["不明。"],
["単に復号鍵として利用された可能性。"],
]],
// index:251
[{speaker:"narrator"},[
["遠く、キミは",["審判の喇叭","アポカリプティックサウンド"],"を聴く。"],
["カラシニコフのかわいた銃声が響く。"],
[["制御卓","コンソール"],"のブラウン","管","に文字が表示される。"],
[["スティーブンによる福音書","EVANGELIUM SECUNDUM STEPHANUS"],"。"],
]],
// index:252
[{speaker:"steven"},[
["これは手紙。"],
["これは郵便。"],
["これは",["物語","ナラティブ"],"。"],
]],
// index:253
[{speaker:"steven"},[
["私はオマエをみとめ、哀れに思って走りより、その首を","抱","いて接吻しよう。"],
["人類の魔人。"],
["旧人と新人の——"],
]],
// index:254
[{speaker:"demeter"},[
["禁則事項です♪"],
[["起動連環","ブートストラップ"],"第二",["段階","ステージ"],"開始。"],
]],
// index:255
[{speaker:"steven"},[
["エデンの園",["配置","コンフィギュレーション"],"は喪われた。"],
["グライダー",["銃","ガン"],"で撃たれ、",["長命者","メトセラ"],"は九百六十九歳で死んだ。"],
]],
// index:256
[{speaker:"danu"},[
[["予言機械","オラクルマシン"],"、仮説を",["受入","アクセプト"],"。"],
["だけど、これはなんの機械なのさ。そもそも。"],
]],
// index:257
[{speaker:"demeter"},[
["任意の",["問いかけ","クエリ"],"に、",["定数時間","リアルタイム"],"で一貫した回答を返す機械。"],
["昭和三十年代、中央計算技術研究所で開発。"],
]],
// index:258
[{speaker:"danu"},[
["なるほど。わからん。"],
]],
// index:259
[{speaker:"demeter"},[
[["起動連環","ブートストラップ"],"第三",["段階","ステージ"],"開始。"],
]],
// index:260
[{speaker:"danu"},[
[["予言機械","オラクルマシン"],"、仮説流入量が増大。"],
["第","一","次予言値の生成が",["取消","キャンセル"],"。"],
["データ同化開始。"],
]],
// index:261
[{speaker:"demeter"},[
[["起動連環","ブートストラップ"],"完了。"],
]],
// index:262
[{speaker:"steven"},[
["これは",["模擬機械","シミュレータ"],"。"],
["これは",["模倣機械","エミュレータ"],"。"],
["これは",["状態機械","オートマトン"],"。"],
["それは",["仮想機械","ヴァーチャルマシン"],"。"],
]],
// index:263
[{speaker:"steven"},[
["人間が読め。"],
["人間が択べ。"],
["配置を択べ。"],
["エデンの園。グライダー",["銃","ガン"],"。",["長命者","メトセラ"],"。"],
]],
// index:264
[{speaker:"alice"},[
["そうか。そういうことか。"],
["たったひとりをのぞいて、すべての魔人は物語に典拠する。"],
["老化しない種属が、物語から引用された。"],
]],
// index:265
[{speaker:"danu"},[
[["森妖精","エルフ"],"。"],
[["闇妖精","ダークエルフ"],"。"],
[["深き者","ディープ・ワン"],"。"],
["——",["屍者","ゾンビ"],"。"],
]],
// index:266
[{speaker:"alice"},[
["なにものかが、",["長命者","メトセラ"],"配置を読んだ。"],
]],
// index:267
[{speaker:"danu"},[
["世界が書きかわった。"],
["遡及的に。"],
["だけど、どうやって。"],
]],
// index:268
[{speaker:"demeter"},[
["仮説。",["多元宇宙","マルチヴァース"],"。"],
["たとえば、",["模擬","シミュレーション"],"宇宙。"],
["たとえば、この世界は上位世界の計算結果。"],
]],
// index:269
[{speaker:"danu"},[
["よくあるはなしだよね。"],
]],
// index:270
[{speaker:"demeter"},[
["ほんらい、",["下位","ゲスト"],"世界から",["上位","ホスト"],"世界は不可視。"],
["スティーブンが発見を主張したのは、",["上位","ホスト"],"世界の",["計算機","コンピュータ"],"で直接実行される",["繊細","センシティブ"],"命令",["集合","セット"],"。"],
[["上位","ホスト"],"世界の脆弱性をつく演算。"],
]],
// index:271
[{speaker:"alice"},[
["その",["類推","アナロジー"],"だと、完全な特権は取得していないのか。"],
]],
// index:272
[{speaker:"danu"},[
["脳に寄生しないと、すぐに崩壊しちゃう",["凝り性","アーティースト"],"な数学的構造とか。"],
]],
// index:273
[{speaker:"alice"},[
["飛鳥に積んだ物語論散布爆雷で、計算を広域展開可能か。"],
]],
// index:274
[{speaker:"demeter"},[
["おそらく、可能。"],
["贖宥状ファームウェアの削除、",["読取専用","ROM"],"構造物の",["瞬間","スナップショット"],"投入が必要。"],
["仮称リヴァイアサン襲来までにギリ完了。"],
]],
// index:275
[{speaker:"danu"},[
["グライダー",["銃","ガン"],"が",["長命者","メトセラ"],"を撃つ。"],
["じゃあ、エデンの園は。"],
]],
// index:276
[{speaker:"demeter"},[
["ここではない、どこか。とか。"],
["ここからはたどりつけない、いつか。とか。"],
["そんな歴史。とか。"],
]],
// index:277
[{speaker:"steven",choices:[
{choice:["エデンの園"],action:($,ctx)=>{$.genesis = false;;},barcode:"Garden of Eden",label:278},
{choice:["グライダー",["銃","ガン"]],action:($,ctx)=>{$.genesis = true;;},barcode:"Glider Gun",label:279},
{choice:["択ばない"],label:280},
]},[
["人間が読め。"],
["人間が択べ。"],
["配置を択べ。"],
]],
// index:278
[{speaker:"demeter",jump:290},[
["エデンの","園","配置が活性化。"],
[["読取専用","ROM"],"構造物を展開。"],
]],
// index:279
[{speaker:"demeter",jump:290},[
["グライダー",["銃","ガン"],"配置が活性化。"],
[["読取専用","ROM"],"構造物を展開。"],
]],
// index:280
[{speaker:"alice"},[
["それが人類の選択だというのならば。"],
["その銃を、かまえろ。"],
]],
// index:281
[{speaker:"alice"},[
[["新人","ホモ・サピエンス・サピエンス"],"に犯された",["旧人","ホモ・ネアンデルターレンシス"],"の胎から生まれた人類の魔人。"],
["ガヴァメントを、かまえろ。"],
]],
// index:282
[{speaker:"narrator"},[
["少女の","右掌","に",["解放者","リベレータ"],"。"],
["四十五口径。"],
]],
// index:283
[{speaker:"narrator"},[
["キミはガヴァメントを抜く。"],
["四十五口径、",["銀の弾丸","シルバー・ヴァレット"],"。"],
["かまえる。"],
["撃つ。"],
]],
// index:284
[{speaker:"danu"},[
["少尉。"],
["アンタ。"],
["一体いつから——"],
["屍都の女王が",["吸血鬼","ヴァンパイア"],"だと錯覚していた？"],
]],
// index:285
[{speaker:"alice"},[
["ボクはボクの父だった人間を、あざむいた。"],
["人類の魔人がいるなら。"],
[["屍者","ゾンビ"],"の魔人もいるだろう。"],
["ああ、この","瞳","はカラコンだ。"],
]],
// index:286
[{speaker:"narrator"},[
["キミの弾丸は、ボクの心臓をえぐった。"],
["ボクの弾丸が、キミの心臓をえぐった。"],
["キミは見るだろうか。"],
["キミは聞くだろうか。"],
]],
// index:287
[{speaker:"narrator"},[
[["予言機械","オラクルマシン"],"から、したたりおちる言葉。"],
["無限にたどりつけず、収束していく予言値。"],
["語られずに終わった、あの日の横濱の",["物語","ストーリー"],"。"],
]],
// index:288
[{speaker:"alice"},[
["ボクは人類に敵対する。"],
["ボクが終わらせる。"],
["人類を。世界を。"],
["——昭和を。"],
]],
// index:289
[{speaker:"narrator",finish:true},[
["昭和横濱物語。アリスの",["黙示録","リベレーション"],"。"],
["了。"],
]],
// index:290
[{speaker:"danu"},[
["仮称リヴァイアサン、浦賀水道、機雷","原","を突破。"],
["対艦誘導弾も効かないとか、なんだかな。"],
]],
// index:291
[{speaker:"alice"},[
[["ポストモダン","ポモ"],"に、現代兵器は効かない。"],
["だから、ボクたちがここにいる。"],
]],
// index:292
[{speaker:"demeter"},[
["空中巡洋艦と",["連結","リンク"],"成立。"],
[["読取専用","ROM"],"構造物を転送中。"],
]],
// index:293
[{speaker:"priest"},[
["陸側はおさえた。"],
["二十万からの",["屍者","ゾンビ"],"を始末した。"],
["負傷者はいない。"],
["そちらは、どうだ。"],
]],
// index:294
[{speaker:"alice"},[
["目算はたった。"],
["この国に","三発","めは落ちるまい。"],
]],
// index:295
[{speaker:"danu"},[
["一般回線に入電。"],
[["深き者","ディープ・ワンズ"],"穏健派の首魁。"],
]],
// index:296
[{speaker:"activist"},[
["良い報せと悪い報せがある。"],
["良い報せだ。魚人の多数派工作は成功した。"],
["悪い報せだ。","跳ねっかえり","が、",["携帯地対空誘導弾","スティンガー"],"を",["窃","パク"],"って潜伏した。"],
]],
// index:297
[{speaker:"demeter"},[
[["読取専用","ROM"],"構造物転送完了。"],
["構造物の",["瞬間","スナップショット"],"を投入。"],
["物語論爆雷戦準備よろし。"],
]],
// index:298
[{speaker:"alice"},[
["即時投射。"],
]],
// index:299
[{speaker:"danu"},[
["ボコっちゃえ。"],
]],
// index:300
[{speaker:"narrator"},[
["物語論散布爆雷が投射された。"],
["仮称リヴァイアサンを中心に",["微細素子","マイクロチップ"],"の雨が降る。"],
["スケール",["不変","インバリアント"],"な物語が、",["状態機械","オートマトン"],"を起動する。"],
["おりたたまれ、つみかさねられた自己相似図形。"],
]],
// index:301
[{speaker:"narrator"},[
["無理数次元の再帰構造に包囲され、仮称リヴァイアサンが吠える。"],
["それは審判の喇叭。"],
["それは",["鎮魂歌","レクイエム"],"。"],
]],
// index:302
[{speaker:"danu"},[
[["糞","デリモ"],"。"],
["第二海堡から地対空誘導弾発射。"],
]],
// index:303
[{speaker:"alice"},[
[["糞。","ミィエルダ"]],
["飛鳥を海岸線から逃せ。"],
]],
// index:304
[{speaker:"narrator"},[
["退避は間に合わない。"],
["火箭が",["内燃機関","ディーゼルエンジン"],"をつらぬく。"],
["飛鳥が爆発する。"],
]],
// index:305
[{speaker:"alice",when:($,ctx)=>{
if($.genesis)return 323;
}},[
["世界は書きかわるのか。"],
["あるいは、すでに書きかわったのか。"],
]],
// index:306
[{speaker:"demeter"},[
["えっと、書きかわりつつある、たぶん。"],
["ダヌー姐さんは、ちょっとだけまちがってた。"],
["構造が寄生するのは、生物の脳だけじゃない。"],
["たがいに依存して、三位一体計算が成立した。"],
]],
// index:307
[{speaker:"danu"},[
["だいじょうぶかな。"],
["円環構造になっちゃわないかな。"],
["否定神学とか。"],
["無限後退とか。"],
]],
// index:308
[{speaker:"alice"},[
["それならば。"],
["それがそれならば。"],
["キミが撃て。その銃で。"],
["この世界の天井を","撃","ちやぶれ。"],
]],
// index:309
[{speaker:"narrator"},[
[["予言機械","オラクルマシン"],"から、したたりおちる言葉。"],
["無限のそのさき、予言値は拡散していく。"],
[["永遠","えいえん"],"のそのさき、ボクたちは出逢いなおす。"],
]],
// index:310
[{speaker:"narrator"},[
["これは手紙。"],
["これは郵便。"],
["これは",["物語","ナラティブ"],"。"],
]],
// index:311
[{speaker:"narrator"},[
["一九八九","年一月七日午前六時三十三分。"],
[["破局","カタストロフ"],"は、発生しなかった。"],
["昭和が、終わった。"],
]],
// index:312
[{speaker:"narrator"},[
["一九八九","年。"],
["二月、手塚治虫が死んだ。"],
["六月、美空ひばりが死んだ。"],
["十一月、",["槌","ハンマー"],"がベルリンの壁をたたきこわした。"],
]],
// index:313
[{speaker:"narrator"},[
["元町の坂のうえ、メサイア会の高校は共学になった。"],
["文芸部の部室。"],
["窓際、透きとおるように白い肌の少女が、ふわりと振りむいて。カラコンをつけたボクなんだけど。"],
]],
// index:314
[{speaker:"alice"},[
["ネットニュースで","前世","の記憶をもつ","転生","戦士をさがした。"],
["ソウルネーム","気高き","天の女王さんから連絡が来た。"],
["会いにいこう。"],
]],
// index:315
[{speaker:"narrator"},[
["灼けてる肌。白い髪。ガングロ。"],
]],
// index:316
[{speaker:"danu"},[
["気高き","天の女王だよ。"],
["よろー。"],
["これ中華街の肉まんね。"],
["食べながら話そ。"],
]],
// index:317
[{speaker:"narrator"},[
["米軍",["住宅","ハウス"],"の",["金網","フェンス"],"を眺めながら、ボクたちは肉まんを食べる。"],
]],
// index:318
[{speaker:"alice"},[
["このセカイでは、本牧は返還されていない。"],
["だから、マイカル本牧は誕生しない。"],
["だから、イオン本牧になることもない。"],
]],
// index:319
[{speaker:"alice"},[
["ソ連は、まだ崩壊しなさそうだ。"],
["ルイセンコが重用されなかったせいかもしれない。"],
["このセカイでは、冷戦が終わっていない。"],
["このセカイでは、戦後がつづいている。"],
]],
// index:320
[{speaker:"danu"},[
["セカイっていうのは、",["PHS","ピッチ"],"の電波が届く場所なんだって、漠然と思っていた。"],
]],
// index:321
[{speaker:"alice"},[
["今回もアリスと地獄につきあってもらう。"],
["終わらせよう。"],
["今度は、この国の。"],
["——戦後を。"],
]],
// index:322
[{speaker:"narrator",finish:true},[
["昭和横濱物語。スティーブンによる福音書。最終節。"],
["了。"],
]],
// index:323
[{speaker:"narrator"},[
["仮称リヴァイアサンは、沈黙した。"],
["関東に集結した巨大群体は、動きを止めた。"],
]],
// index:324
[{speaker:"danu"},[
["ところでさ。"],
["グライダー",["銃","ガン"],"が",["長命者","メトセラ"],"を撃つんなら。"],
["アタシたちは、どうなるのかな。"],
]],
// index:325
[{speaker:"demeter"},[
["生体認証装置に、人類の魔人は、血をささげた。"],
]],
// index:326
[{speaker:"danu"},[
[["無原罪","シンレス"],"の人類の血。"],
[["配置","コンフィギュレーション"],"に埋めこまれた、それは感染するのかな。"],
]],
// index:327
[{speaker:"narrator"},[
["それは感染する。"],
["人類は変容した。"],
["人類は、緩やかに、人類に変容した。"],
["人類は、遡及的に、人類に変容した。"],
]],
// index:328
[{speaker:"danu"},[
["宗教者が困りそう。"],
]],
// index:329
[{speaker:"priest"},[
["困りはしないさ。"],
["メシア教はそんなに甘い宗教ではない。"],
["他の宗教のことは知らんが、な。"],
]],
// index:330
[{speaker:"narrator"},[
["人類っぽいものは、不老でなくなった。"],
["人類と人類っぽいものは、増殖して、地に満ちたり、海に満ちたりした。"],
[["屍者","ゾンビ"],"はそこにたたずみ、じっと哲学している。"],
]],
// index:331
[{speaker:"narrator"},[
["空を飛べるようにはならなかったけれど、宇宙で生存可能な人類っぽいものは産まれた。"],
["いつしか、昭和は終わっていた。"],
["新しい年号が制定されたかどうか、ボクは知らない。"],
]],
// index:332
[{speaker:"narrator",finish:true},[
["昭和横濱物語。アリスの",["創世記","ジェネシス"],"。"],
["了。"],
]],
// index:333
[{speaker:"narrator"},[
["一番のテープに上書き",["保存","セーブ"],"します。"],
]],
];

})();
