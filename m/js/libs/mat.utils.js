var mat;!function(a){!function(a){var b=function(){function a(){}return a.createUniqueCopy=function(b){var c,d,e=[],f=b.length;for(c=0;f>c;c++)d=b[c],a.arrayContainsValue(e,d)||e.push(d);return e},a.arrayContainsValue=function(a,b){return-1!=a.indexOf(b)},a}();a.ArrayUtil=b;var c=function(){function a(){}return a.chkName=function(a){return a.length<=0?!1:!0},a.chkMobile=function(a){var b=!0;return a.length<=0?b=!1:isNaN(parseInt(a))?b=!1:("09"!=a.substr(0,2)||10!=a.length)&&(b=!1),b},a.chkEmail=function(a){return/\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/.test(a)},a.chkAddress=function(a,b,c){var d=!0;return a.length<=0||"居住地區"==a?d=!1:b.length<=0||"鄉鎮區"==b?d=!1:c.length<=0&&(d=!1),d},a.chkInvoice=function(a){var b=!0,c=String(a).toUpperCase();if(!c||c.length<10)b=!1;else if(c.substr(0,1)<"A"||c.substr(0,1)>"Z")b=!1;else if(c.substr(1,1)<"A"||c.substr(1,1)>"Z")b=!1;else for(var d=2;d<c.length;++d)isNaN(Number(c.substr(d,1)))&&(b=!1);return b},a.setLocation=function(a,b){var c=[];c[21]=["連江縣",["209南竿鄉","210北竿鄉","211莒光鄉","212東引鄉"]],c[20]=["金門縣",["890金沙鎮","891金湖鎮","892金寧鄉","893金城鎮","894烈嶼鄉","896烏坵"]],c[19]=["澎湖縣",["880馬公市","881西嶼鄉","882望安鄉","883七美鄉","884白沙鄉","885湖西鄉"]],c[18]=["宜蘭縣",["260宜蘭市","261頭城鎮","262礁溪鄉","263壯圍鄉","264員山鄉","265羅東鎮","266三星鄉","267大同鄉","268五結鄉","269冬山鄉","270蘇澳鎮","272南澳鄉"]],c[17]=["花蓮縣",["970花蓮市","971新城鄉","972秀林鄉","973吉安鄉","974壽豐鄉","975鳳林鎮","976光復鄉","977豐濱鄉","978瑞穗鄉","979萬榮鄉","981玉里鎮","982卓溪鄉","983富里鄉"]],c[16]=["屏東縣",["900屏東市","901三地門鄉","902霧臺鄉","903瑪家鄉","904九如鄉","905里港鄉","906高樹鄉","907鹽埔鄉","908長治鄉","909麟洛鄉","911竹田鄉","912內埔鄉","913萬丹鄉","920潮州鎮","921泰武鄉","922來義鄉","923萬巒鄉","924崁頂鄉","925新埤鄉","926南州鄉","927林邊鄉","928東港鎮","929琉球鄉","931佳冬鄉","932新園鄉","940枋寮鄉","941枋山鄉","942春日鄉","943獅子鄉","944車城鄉","945牡丹鄉","946恆春鎮","947滿州鄉"]],c[15]=["高雄市",["800新興區","801前金區","802苓雅區","803鹽埕區","804鼓山區","805旗津區","806前鎮區","807三民區","811楠梓區","812小港區","813左營區","814仁武區","815大社區","820岡山區","821路竹區","822阿蓮區","823田寮區","824燕巢區","825橋頭區","826梓官區","827彌陀區","828永安區","829湖內區","830鳳山市","831大寮區","832林園區","833鳥松區","840大樹區","842旗山區","843美濃區","844六龜區","845內門區","846杉林區","847甲仙區","848桃源區","849三民區","851茂林區","852茄萣區"]],c[14]=["台東縣",["950台東市","951綠島鄉","952蘭嶼鄉","953延平鄉","954卑南鄉","955鹿野鄉","956關山鄉","957海端鄉","958池上鄉","959東河鄉","961成功鎮","962長濱鄉","963太麻里鄉","964金峰鄉","965大武鄉","966達仁鄉"]],c[13]=["台南市",["700中區","701東區","702南區","703西區","704北區","708安平區","709安南區","710永康區","711歸仁區","712新化鎮","713左鎮區","714玉井區","715楠西區","716南化區","717仁德區","718關廟區","719龍崎區","720官田區","721麻豆鎮","722佳里鎮","723西港區","724七股區","725將軍區","726學甲鎮","727北門區","730新營區","731後壁區","732白河鎮","733東山區","734六甲區","735下營區","736柳營區","737鹽水鎮","741善化鎮","742大內區","743山上區","744新市區","745安定區"]],c[12]=["嘉義縣",["602番路鄉","603梅山鄉","604竹崎鄉","605阿里山鄉","606中埔鄉","607大埔鄉","608水上鄉","611鹿草鄉","612太保市","613朴子市","614東石鄉","615六腳鄉","616新港鄉","621民雄鄉","622大林鎮","623溪口鄉","624義竹鄉","625布袋鎮"]],c[11]=["嘉義市",["600西區","600東區"]],c[10]=["雲林縣",["630斗南鎮","631大埤鄉","632虎尾鎮","633土庫鎮","634褒忠鄉","635東勢鄉","636臺西鄉","637崙背鄉","638麥寮鄉","640斗六市","643林內鄉","646古坑鄉","647莿桐鄉","648西螺鎮","649二崙鄉","651北港鎮","652水林鄉","653口湖鄉","654四湖鄉","655元長鄉"]],c[9]=["南投縣",["540南投市","541中寮鄉","542草屯鎮","544國姓鄉","545埔里鎮","546仁愛鄉","551名間鄉","552集集鎮","553水里鄉","555魚池鄉","556信義鄉","557竹山鎮","558鹿谷鄉"]],c[8]=["彰化縣",["500彰化市","502芬園鄉","503花壇鄉","504秀水鄉","505鹿港鎮","506福興鄉","507線西鄉","508和美鎮","509伸港鄉","510員林鎮","511社頭鄉","512永靖鄉","513埔心鄉","514溪湖鎮","515大村鄉","516埔鹽鄉","520田中鎮","521北斗鎮","522田尾鄉","523埤頭鄉","524溪州鄉","525竹塘鄉","526二林鎮","527大城鄉","528芳苑鄉","530二水鄉"]],c[7]=["台中市",["400中區","401東區","402南區","403西區","404北區","406北屯區","407西屯區","408南屯區","411太平區","412大里區","413霧峰區","414烏日區","420豐原區","421后里區","422石岡區","423東勢區","424和平區","426新社區","427潭子區","428大雅區","429神岡區","432大肚區","433沙鹿區","434龍井區","435梧棲區","436清水區","437大甲區","438外埔區","439大安區"]],c[6]=["苗栗縣",["350竹南鎮","351頭份鎮","352三灣鄉","353南庄鄉","354獅潭鄉","356後龍鎮","357通霄鎮","358苑裡鎮","360苗栗市","361造橋鄉","362頭屋鄉","363公館鄉","364大湖鄉","365泰安鄉","366銅鑼鄉","367三義鄉","368西湖鄉","369卓蘭鎮"]],c[5]=["新竹縣",["302竹北市","303湖口鄉","304新豐鄉","305新埔鎮","306關西鎮","307芎林鄉","308寶山鄉","310竹東鎮","311五峰鄉","312橫山鄉","313尖石鄉","314北埔鄉","315峨眉鄉"]],c[4]=["新竹市",["300北區","300東區","300香山區"]],c[3]=["桃園縣",["320中壢市","324平鎮市","325龍潭鄉","326楊梅鎮","327新屋鄉","328觀音鄉","330桃園市","333龜山鄉","334八德市","335大溪鎮","336復興鄉","337大園鄉","338蘆竹鄉"]],c[2]=["新北市",["207萬里區","208金山區","220板橋區","221汐止區","222深坑區","223石碇區","224瑞芳區","226平溪區","227雙溪區","228貢寮區","231新店區","232坪林區","233烏來區","234永和區","235中和區","236土城區","237三峽區","238樹林區","239鶯歌區","241三重區","242新莊區","243泰山區","244林口區","247蘆洲區","248五股區","249八里區","251淡水區","252三芝區","253石門區"]],c[1]=["台北市",["100中正區","103大同區","104中山區","105松山區","106大安區","108萬華區","110信義區","111士林區","112北投區","114內湖區","115南港區","116文山區"]],c[0]=["基隆市",["200仁愛區","201信義區","202中正區","203中山區","204安樂區","205暖暖區","206七堵區"]],a.append("<option value='居住地區'>居住地區</option>"),b.append("<option value='鄉鎮區'>鄉鎮區</option>");for(var d=0;d<c.length;++d){var e="<option value='"+d+"'>"+c[d][0]+"</option>";a.append(e)}a.change(function(){if(b.html(""),"居住地區"===$(this).val())b.append("<option value='鄉鎮區'>鄉鎮區</option>");else for(var a=0;a<c[$(this).val()][1].length;++a){var d="<option value='"+a+"'>"+c[$(this).val()][1][a]+"</option>";b.append(d)}})},a.setDate=function(a,b,c){function d(a){var b=0,c=[];if(1==a||3==a||5==a||7==a||8==a||10==a||12==a)for(b=1;31>=b;b++)c.push(b);else if(2==a)for(b=1;29>=b;b++)c.push(b);else if(4==a||6==a||9==a||11==a)for(b=1;30>=b;b++)c.push(b);return c}for(var e="",f=[],g=1;12>=g;g++)f.push(d(g));if(a){a.append("<option value='西元/年'>西元/年</option>");for(var h=2012;h>1950;--h)e="<option value='"+h+"'>"+h+"</option>",a.append(e)}if(b){b.append("<option value='月'>月</option>");for(var i=1;12>=i;++i)e="<option value='"+i+"'>"+i+"</option>",b.append(e);b.change(function(){c.html("");var a=parseInt(b.find("option:selected").text());if(a)for(var d=0;d<f[a-1].length;d++)e="<option value='"+f[a-1][d]+"'>"+f[a-1][d]+"</option>",c.append(e);else c.append("<option value='日'>日</option>")})}c&&c.append("<option value='日'>日</option>")},a}();a.ValidUtil=c;var d=function(){function a(){}return a.random=function(a,b){return Math.random()*(b-a)+a},a.noRepeatRandom=function(b,c){var d=[],e=[],f=0,g=0;for(g=b;c>=g;g++)d.push(g);for(f=d.length,g=0;f>g;g++){var h=Math.floor(a.random(0,d.length));e.push(d[h]),d.splice(h,1)}return e},a.getPercent=function(a,b){return Number(a)/Number(b)*100},a.angle2Radians=function(a){return Number(a)/180*Math.PI},a.radians2Angle=function(a){return 180*Number(a)/Math.PI},a}();a.NumberUtil=d}(a.utils||(a.utils={}));a.utils}(mat||(mat={}));