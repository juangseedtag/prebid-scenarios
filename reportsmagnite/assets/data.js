window.REPORT_DATA = {
  generated: "2026-10-02",
  cur: ["2026-09-26", "2026-10-02"],
  prv: ["2026-09-19", "2026-09-25"],
  dates: ["2026-09-19","2026-09-20","2026-09-21","2026-09-22","2026-09-23","2026-09-24","2026-09-25","2026-09-26","2026-09-27","2026-09-28","2026-09-29","2026-09-30","2026-10-01","2026-10-02"],
  daily: {
    md: {
      rev:  [73637,60342,53670,49490,46686,49844,56542,83022,61535,57649,55681,52266,48561,59114],
      imps: [29452997,26293815,23015721,22119544,19839598,21604067,22822971,29494058,28033992,26648540,27987271,28143985,30932285,34849876],
      reqs: [6210601244,6412609979,5972576902,5669386990,5597420569,6984350444,5936021061,6319070534,6649055861,6320657606,8219680798,7704142667,7638127187,7331333146],
      pubs: [7176,7245,7302,7591,7702,7977,8328,8208,8342,8323,8689,8676,8360,8199]
    },
    rb: {
      rev:  [178587,175302,178690,169167,156394,161181,166483,177501,168944,154145,148369,143728,134263,131972],
      imps: [146861638,150209655,151540671,142815544,133036164,137254379,133920936,133601302,138664166,133632082,128812920,129135683,124844608,123244171],
      reqs: [20770514529,21189053369,25316575832,24658123014,23482286738,22937259804,24141847009,20631828834,21174263601,25080159496,24153720909,23796383123,24758182101,23756022286],
      pubs: [13448,13697,13709,13807,13791,13793,14128,13946,14144,14240,14243,14183,14067,13835]
    }
  },
  // [editorial group, EG country, cur rev, prev rev, cur imps, prev imps]
  egInc: [
    ["media-tradecraft","US",86569,73320,18673994,18830170],
    ["reach","GB",8276,341,16003870,1654196],
    ["usatoday","US",7142,0,5625837,0],
    ["editoraglobo","BR",6084,248,14174645,678424],
    ["esimedia","GB",4792,1,1471354,349],
    ["pmc","US",31968,27399,4753155,4306956],
    ["raptive","US",16864,12690,4590466,3460136],
    ["1xl","GB",1435,0,2191270,0],
    ["theguardian","GB",36414,35047,11021225,11063231],
    ["unidadeditorial","ES",883,0,1776007,0]
  ],
  egDec: [
    ["mediavine","US",135249,155294,52330215,57631267],
    ["futurepublishing","GB",6178,9302,1833499,2214052],
    ["elconfidencial","ES",7580,8923,8735544,9389227],
    ["trusted-media-brands","US",6099,6948,1288474,1239729],
    ["autflo","MX",1000,1734,1744568,2631021],
    ["media-news-group","US",5485,6212,1022657,1067409],
    ["prisa","ES",3680,4281,16421858,13741031],
    ["italiaonline","IT",1415,1984,3747427,5531514],
    ["legacy","US",4340,4701,3012556,3326523],
    ["mso","DE",3687,3998,2303062,2530488]
  ],
  // [EG country, cur rev, prev rev, # editorial groups]
  country: [
    ["US",319973,311699,18],["GB",65387,51148,10],["ES",15509,15624,11],["BR",6084,248,1],["DE",4999,5049,2],
    ["NL",2734,2113,5],["IT",1482,2045,2],["MX",1104,1734,2],["CO",552,544,2],["AR",4,9,1]
  ],
  // [value, cur rev, prev rev, cur imps, prev imps]
  sourceType: {
    md: [["HeaderBidding",243131,245489,90172541,89417134],["PrebidServer",85456,66947,26754228,19860772],["Tam",62209,60688,17800622,15995166],["Tag",14032,11664,19852413,13383723],["SingleAdUnitTag",11471,4865,42808967,21912795],["Amp",1529,558,8701236,4579123]],
    rb: [["HeaderBidding",567681,618230,414738910,441511623],["PrebidServer",163311,216472,78721515,87567894],["Tag",152276,174554,215568870,243271076],["Tam",101538,102463,37292048,37715060],["SingleAdUnitTag",57712,64163,138079347,156503302],["Gob",9713,3351,5960813,5061215],["Amp",6691,6571,21573399,24008817]]
  },
  adUnitType: {
    md: [["inScreen",231461,199754,117961175,87665068],["inArticle",131816,138936,56412698,56684172],["inBanner",30118,29530,14819638,11979152],["inStream",12778,14631,2103124,2470483],["inImage",4721,1127,8171845,1962716],["inImageRestricted",4623,5398,3659853,3839701],["inTop",1612,255,2786408,391048],["inTerstitial",696,581,175199,156330]],
    rb: [["inScreen",593350,632058,478840186,514200759],["inBanner",174200,209244,174263531,184165100],["inArticle",149945,167296,114358183,124656363],["inImage",73279,86804,79209841,96531454],["inImageRestricted",30503,35381,35733720,39394081],["inTop",18557,22432,25299109,31468571],["inStream",14551,26294,3038324,3825509],["inTerstitial",4537,6293,1190935,1395012]]
  },
  // current-week daily revenue by ad unit type (Sep 26 .. Oct 2)
  auDaily: {
    md: {
      inScreen:[50962,32311,32164,28273,26412,25499,35840], inArticle:[24737,21638,18478,19218,17589,15133,15022],
      inBanner:[4121,4146,4178,4751,4738,4382,3802], inStream:[2024,2309,1514,1737,1513,1626,2056],
      inImage:[217,270,428,786,960,849,1211], inImageRestricted:[734,623,615,615,587,607,842],
      inTop:[147,134,184,217,307,356,267], inTerstitial:[80,103,88,84,159,108,73]
    },
    rb: {
      inScreen:[101864,95956,83874,81540,81201,75362,73554], inArticle:[24575,24043,21101,20811,20556,19310,19548],
      inBanner:[27821,25268,28597,26121,23237,21177,21979], inStream:[2825,2668,1997,1750,1652,2401,1258],
      inImage:[11557,12434,10927,10724,9700,9063,8874], inImageRestricted:[5204,4816,4410,4336,4310,3933,3494],
      inTop:[2878,2936,2736,2567,2519,2422,2500], inTerstitial:[778,822,504,519,553,596,765]
    }
  },
  // [publisher, EG, country, cur rev, prev rev, cur imps, prev imps]
  pubTop: [
    ["maxpreps.com","media-tradecraft","US",83041.8,70659.9,17256447,17631038],["theguardian.com","theguardian","GB",36414.2,35047.4,11021225,11063231],
    ["billboard.com","pmc","US",9907.2,3386.2,1077500,448257],["screenrant.com","mediavine","US",8970.1,11160.2,2440073,2768174],
    ["deadline.com","pmc","US",8883.2,9996.9,1551801,1611080],["juliasalbum.com","raptive","US",8034.0,4884.1,1926427,1104398],
    ["elconfidencial.com","elconfidencial","ES",7441.1,8748.0,8668557,9324517],["hollywoodreporter.com","pmc","US",7084.7,5989.1,1005872,902830],
    ["movieweb.com","mediavine","US",5826.4,5154.2,1227997,1283332],["tasteofhome.com","trusted-media-brands","US",4890.4,5788.6,979298,1020461],
    ["chowhound.com","mediavine","US",4509.6,2875.4,962531,728428],["independent.co.uk-esi","esimedia","GB",4410.6,0.1,1305327,35],
    ["legacy.com","legacy","US",4339.9,4701.1,3012556,3326523],["usatoday.com","usatoday","US",3651.5,0,2184922,0],
    ["revistaquem.globo.com","editoraglobo","BR",3498.9,73.1,6604620,137639],["chelseasmessyapron.com","raptive","US",3448.2,4418.9,1366870,1573163],
    ["truepeoplesearch.com","ezoic","US",3411.9,3560.8,1481600,1494600],["variety.com","pmc","US",2927.6,5701.6,481463,839028],
    ["insidethemagic.net","raptive","US",2795.9,981.5,775093,270627],["gamerant.com","mediavine","US",2681.5,3316.8,1116843,1266695],
    ["triblive.com","the-publisher-desk","US",2674.9,2712.3,765845,872707],["express.co.uk","reach","GB",2428.1,37.8,3345591,211101],
    ["positivebloom.com","mediavine","US",2264.3,2195.1,905686,961782],["edhrec.com","mediavine","US",2245.5,2001.9,1053595,960610],
    ["tvinsider.com","she-media","US",2242.3,2142.9,495297,481908],["chicagotribune.com_mng","media-news-group","US",2159.4,3096.5,309386,450908],
    ["aarp.org","media-tradecraft","US",2144.7,951.9,408789,112738],["myfamilytravels.com","mediavine","US",1885.2,1491.4,644583,559503],
    ["everafterinthewoods.com","mediavine","US",1820.7,1853.3,604591,675240],["thegeorgiagazette.com","ezoic","US",1779.7,1495.9,1067831,801902],
    ["saltandlavender.com","mediavine","US",1705.5,2029.7,512109,552103],["puckpedia.com","the-publisher-desk","US",1681.6,741.3,713018,278779],
    ["voetbalprimeur.nl/mobile","nextdaymediabv","NL",1618.0,1361.7,494809,479554],["thechunkychef.com","mediavine","US",1603.8,1648.4,332541,325789],
    ["texags.com","snack-media","GB",1546.2,1017.5,1465255,1045267],["dinnerthendessert.com","raptive","US",1413.6,1234.6,309297,260671],
    ["thecozycook.com","mediavine","US",1409.9,1645.7,344769,340105],["emmikochteinfach.de","mso","DE",1407.2,2079.4,608216,1145860],
    ["africanbites.com","mediavine","US",1400.5,912.6,112368,87298],["sporcle.com","media-tradecraft","US",1382.5,1284.9,1008753,883145],
    ["familydestinationsguide.com","mediavine","US",1335.7,1562.9,290596,430008],["decorhint.com","mediavine","US",1330.5,1114.8,447340,443872],
    ["jalopnik.com","mediavine","US",1312.4,2006.9,366249,414106],["animalsaroundtheglobe.com","mediavine","US",1250.2,1154.1,250438,222293],
    ["kentlive.news","reach","GB",1207.3,92.6,3279519,397219],["tamingtwins.com","mediavine","US",1195.4,1932.9,518819,688132],
    ["fastpeoplesearch.com","ezoic","US",1194.5,1390.2,1057258,1159988],["easyfamilyrecipes.com","raptive","US",1172.7,1170.6,212779,251277],
    ["gardenloversclub.com","mediavine","US",1136.5,2765.0,262453,648399],["ruralsprout.com","mediavine","US",1082.1,1031.3,298987,291746]
  ],
  pubMov: [
    ["maxpreps.com","media-tradecraft","US",83041.8,70659.9,17256447,17631038],["billboard.com","pmc","US",9907.2,3386.2,1077500,448257],
    ["independent.co.uk-esi","esimedia","GB",4410.6,0.1,1305327,35],["usatoday.com","usatoday","US",3651.5,0,2184922,0],
    ["revistaquem.globo.com","editoraglobo","BR",3498.9,73.1,6604620,137639],["juliasalbum.com","raptive","US",8034.0,4884.1,1926427,1104398],
    ["variety.com","pmc","US",2927.6,5701.6,481463,839028],["express.co.uk","reach","GB",2428.1,37.8,3345591,211101],
    ["screenrant.com","mediavine","US",8970.1,11160.2,2440073,2768174],["insidethemagic.net","raptive","US",2795.9,981.5,775093,270627],
    ["chowhound.com","mediavine","US",4509.6,2875.4,962531,728428],["gardenloversclub.com","mediavine","US",1136.5,2765.0,262453,648399],
    ["homesandgardens.com","futurepublishing","GB",782.4,2180.5,106451,219133],["theguardian.com","theguardian","GB",36414.2,35047.4,11021225,11063231],
    ["elconfidencial.com","elconfidencial","ES",7441.1,8748.0,8668557,9324517],["aarp.org","media-tradecraft","US",2144.7,951.9,408789,112738],
    ["kentlive.news","reach","GB",1207.3,92.6,3279519,397219],["deadline.com","pmc","US",8883.2,9996.9,1551801,1611080],
    ["hollywoodreporter.com","pmc","US",7084.7,5989.1,1005872,902830],["oglobo.globo.com","editoraglobo","BR",1054.7,34.2,3140584,94342],
    ["chelseasmessyapron.com","raptive","US",3448.2,4418.9,1366870,1573163],["puckpedia.com","the-publisher-desk","US",1681.6,741.3,713018,278779],
    ["chicagotribune.com_mng","media-news-group","US",2159.4,3096.5,309386,450908],["express.co.uk/news","reach","GB",971.0,38.2,2443147,227284],
    ["tasteofhome.com","trusted-media-brands","US",4890.4,5788.6,979298,1020461],["tennessean.com","usatoday","US",847.3,0,1358007,0],
    ["janespatisserie.com","mediavine","US",1046.3,1789.0,699939,1005555],["mumsnet.com","mumsnet","GB",741.8,1.5,416786,1129],
    ["tamingtwins.com","mediavine","US",1195.4,1932.9,518819,688132],["record.com.mx","autflo","MX",999.6,1734.1,1744568,2631021],
    ["marca.com_directo","unidadeditorial","ES",708.6,0,1247788,0],["jalopnik.com","mediavine","US",1312.4,2006.9,366249,414106],
    ["mirror.co.uk","reach","GB",732.3,43.5,1038247,151729],["emmikochteinfach.de","mso","DE",1407.2,2079.4,608216,1145860],
    ["movieweb.com","mediavine","US",5826.4,5154.2,1227997,1283332],["gamerant.com","mediavine","US",2681.5,3316.8,1116843,1266695],
    ["homedecorbliss.com","mediavine","US",625.8,1248.8,176623,335206],["manchestereveningnews.co.uk","reach","GB",587.9,0,342292,25],
    ["3bmeteo.com","italiaonline","IT",547.1,1114.1,2643350,4090805],["cruisewithleo.com","mediavine","US",117.1,660.2,38355,195483],
    ["texags.com","snack-media","GB",1546.2,1017.5,1465255,1045267],["extra.globo.com","editoraglobo","BR",596.2,93.7,1792925,271716],
    ["africanbites.com","mediavine","US",1400.5,912.6,112368,87298],["express.co.uk_amp","reach","GB",498.6,14.3,856626,82087],
    ["womanandhome.com","futurepublishing","GB",214.5,692.6,82394,203484],["detroitnews.com","usatoday","US",426.2,0,208539,0],
    ["findagrave.com","media-tradecraft","US",0,422.9,5,203249],["america-focus.com","ezoic","US",318.3,732.3,134239,330512],
    ["makeuseof.com","mediavine","US",951.4,1364.5,184264,318814],["hb_as.com","prisa","ES",798.1,1198.9,610513,821750]
  ],
  // publishers with MagniteDirect requests but 0 impressions and $0 this week: [publisher, EG, country, cur requests, prev requests]
  zero: [
    ["tuasaude.com/refinery89","refinery89","BR",34187245,0],["cnpj.biz","refinery89","BR",29537779,0],["tvguia.es","refinery89","ES",26456908,0],
    ["horoscoponegro.com/refinery89","refinery89","ES",24958514,0],["comprasparaguai.com.br","refinery89","BR",23957741,0],["IOL app","italiaonline","IT",23665280,15972240],
    ["fogaonet.com/refinery89","refinery89","BR",21669428,0],["libertaddigital.com/refinery89","refinery89","ES",19415466,0],["expansion.com","unidadeditorial","ES",15980399,0],
    ["europapress.es","refinery89","ES",13675788,0],["cokitos.com","refinery89","ES",12136777,0],["pronostics-turf.info","refinery89","FR",11975600,0],
    ["midiamax.com.br","refinery89","BR",11898877,0],["Snack-media App","snack-media","GB",11801390,5208609],["voetbalnieuws.be","refinery89","BE",11013049,0],
    ["abcnoticias.mx","refinery89","MX",10822872,0],["culturequizz.com_r89","refinery89","FR",10504030,0],["Libero webmail80","italiaonline","IT",10188198,10618135],
    ["wimoveis.com.br","refinery89","BR",9913189,0],["todamateria.com.br","refinery89","BR",9414284,0],["redactie24.be","refinery89","BE",9245257,0],
    ["pensador.com/refinery89","refinery89","BR",8497848,0],["vanguardia.com.mx/Refinery89","refinery89","MX",8414386,0],["wielernieuws.be","refinery89","BE",7842249,0],
    ["folhavitoria.com.br","refinery89","BR",7679416,0],["salamanca24horas.com","refinery89","ES",6357671,0],["deporvillage.com","refinery89","ES",6215283,0],
    ["7a0.com.br","refinery89","BR",6138202,0],["teletexto.com/refinery89","refinery89","ES",5460634,0],["formulatv.com/Refinery89","refinery89","ES",5289197,0],
    ["telva.com","unidadeditorial","ES",5190820,0],["sapo.pt","sapo","PT",5064600,122013023],["conjur.com.br","refinery89","BR",4913211,0],
    ["rfaf.es/refinery89","refinery89","ES",4697587,0],["powerpyx.com-usd","venatusmedia-usd","GB",4464758,0],["eliteguias.com/refinery89","refinery89","ES",4172597,0],
    ["walfoot.be","refinery89","BE",3790307,0],["es.worder.cat","refinery89","ES",3779335,0],["creusot-infos.com/Refinery89","refinery89","FR",3713057,0],
    ["pcbolsa.com","refinery89","ES",3699756,0],["hb_sport.es","pi360","ES",3699263,84571073],["cityam.com-cityam","1xl","GB",3686275,0],
    ["voetbal24.be","refinery89","BE",3584269,0],["tudosaladeaula.com","refinery89","BR",3541414,0],["typingtest.com","media-tradecraft","US",3526326,3696016],
    ["trovit.com.br","refinery89","BR",3323119,0],["bibliaon.com/refinery89","refinery89","BR",3252606,0],["culturaenserie.com","refinery89","ES",3213264,0],
    ["footnews.be","refinery89","BE",3076301,0],["shorturl.at","refinery89","US",3064602,0]
  ],
  // publishers that monetized last week and dropped to 0 this week: [publisher, EG, country, cur requests, prev requests, prev rev, prev imps]
  dropped: [
    ["followmeaway.com","mediavine","US",209480,1547881,8.2,3109],["needtoknowfacts.com","ezoic","US",77,681638,7.3,5050],["2news.com_blox","blox","US",110710,843794,6.7,4332],
    ["hometownsource.com_blox","blox","US",112455,347871,5.2,4370],["deerassociation.com","mediavine","US",163080,425436,2.7,1184],["dailystorymag.com","ezoic","US",527494,9610094,2.7,4570],
    ["schadeautos.nl","refinery89","NL",567630,2425988,2.2,9615],["feines-gemuese.com","mso","DE",115929,91028,1.7,2844],["spacedaily.com","mediavine","US",82227,656248,1.2,645],
    ["sofreshnsogreen.com","mediavine","US",129483,578055,1.1,546],["wyomingnews.com_blox","blox","US",184046,259447,1.0,842],["twowanderingsoles.com","mediavine","US",9969,342430,0.9,461],
    ["moeyskitchen.com","mso","DE",311940,451600,0.6,2880],["hobbyschneiderin24.net","mso","DE",27,226786,0.5,552],["online-tischreservierung.de","mso","DE",52468,67565,0.4,335],
    ["timesheraldonline.com","media-news-group","US",279377,250629,0.3,84],["tailgatermagazine.com","monumetric","US",51148,80854,0.2,221],["pointsandtravel.com","mediavine","US",125206,219549,0.2,116],
    ["getawaymavens.com","mediavine","US",159656,191826,0.2,72],["loadedradio.com","monumetric","US",32707,61928,0.2,89],["anexerciseinfrugality.com","mediavine","US",80473,92850,0.2,26],
    ["stevivor.com","mediavine","US",6182,226575,0.1,49],["dashofsavory.com","mediavine","US",59425,57197,0.1,28],["thewildwest3.com","monumetric","US",16754,26528,0.1,169],
    ["onegirlonekitchen.com","she-media","US",85312,97337,0.1,16],["adventuresofadisneydad.com","mediavine","US",139937,154415,0.1,27],["guidetolofoten.com","mediavine","US",516,70063,0.1,29],
    ["heritageacresmarket.com","mediavine","US",122779,138753,0.1,19],["alifeofheritage.com","mediavine","US",169275,201183,0.1,63],["lettiandco.com","mediavine","US",82050,115080,0.1,47],
    ["timescall.com","media-news-group","US",284256,288513,0.1,57],["rdpolytechathletics.ca","newormedia","US",108845,78271,0.1,287],["chaosisbliss.com","mediavine","US",128458,162406,0.1,13],
    ["sewmodernkids.com","mediavine","US",215104,375885,0.1,70],["mymoneyblog.com","mediavine","US",222294,144818,0.1,13],["petscribbles.com","mediavine","US",213799,278097,0.1,8],
    ["thoroughbredvillage.com.au","snack-media","AU",158486,200136,0.1,600],["vittana.org","mediavine","US",143912,202351,0.1,44],["dailynews.com","media-news-group","US",325464,283557,0.1,41],
    ["mrscriddleskitchen.com","mediavine","US",106958,151994,0.1,19],["itsahero.com","she-media","US",39248,45060,0.1,10],["alwaysmoodyblogs.com","mediavine","US",102798,194268,0.1,28],
    ["myspicykitchen.net","mediavine","US",176673,195666,0.1,47],["hastyreader.com","mediavine","US",73301,97976,0.1,74],["sewyourtv.com","mediavine","US",87939,100844,0.1,25],
    ["fernandmaple.com","she-media","US",129855,171884,0.1,40],["thatocgirl.com","she-media","US",21611,32194,0.1,15],["craftingwithkids.net","mediavine","US",200448,228376,0.1,8],
    ["thevanderveenhouse.com","mediavine","US",71525,143517,0.1,35],["hb_elblogsalmon.com","webedia-group-es","ES",231114,312280,0.1,81]
  ],
  // Editorial groups with the MagniteDirect line and 0 impressions / $0 this week:
  // [EG, country, publishers, cur requests, prev requests, cur rev, prev rev, cur imps, prev imps, status]
  egZero: [
    ["pi360","ES",96,40917640,464116055,0,0,0,0,"never"],
    ["blox","US",38,5076841,7009405,0,13.0,0,9561,"stopped"],
    ["sapo","PT",1,5064600,122013023,0,0,0,1,"stopped"],
    ["refinery89be","NL",1,50632,0,0,0,0,0,"never"],
    ["refinery89fr","NL",1,9426,0,0,0,0,0,"never"]
  ],
  egZeroCounts: { total: 55, zero: 5, stopped: 2, monetCur: 50, monetPrev: 41 },
  // daily MagniteDirect delivery for the zero EGs (Sep 19 .. Oct 2)
  egZeroDaily: {
    blox: { reqs: [768048,600362,1433429,1068006,1031169,870097,1238294,539483,436201,991527,727049,444901,1027585,910095], imps: [1465,1529,2165,2676,1720,6,0,0,0,0,0,0,0,0], rev: [2.64,2.7,2.73,2.87,2.02,0.01,0,0,0,0,0,0,0,0] },
    sapo: { reqs: [0,0,0,0,0,110317827,11695196,527000,670280,1004870,806140,641850,696300,718160], imps: [0,0,0,0,0,0,1,0,0,0,0,0,0,0], rev: [0,0,0,0,0,0,0,0,0,0,0,0,0,0] },
    pi360: { reqs: [0,0,0,0,0,387136015,76980040,3675109,7794927,6406181,5061991,5470806,6528145,5980481], imps: [0,0,0,0,0,0,0,0,0,0,0,0,0,0], rev: [0,0,0,0,0,0,0,0,0,0,0,0,0,0] }
  },
  // EGs with zero-delivery publishers inside: [EG, publishers on MD, zero-delivery pubs, pubs that stopped delivering this week, cur rev, prev rev]
  egZeroPubs: [
    ["mediavine",10055,1469,414,135249,155294],["she-media",984,707,104,4417,4454],["refinery89",649,621,5,398,143],["monumetric",740,356,93,782,800],
    ["ezoic",430,197,12,15338,15463],["newormedia",301,164,16,236,340],["mso",351,120,23,3687,3998],["snack-media",284,119,8,5985,5824],
    ["pi360",96,95,0,0,0],["audienzz",78,38,5,1311,1051],["usatoday",325,37,0,7142,0],["blox",38,35,6,0,13],
    ["media-news-group",85,32,12,5485,6212],["italiaonline",34,28,0,1415,1984],["1xl",135,26,0,1435,0],["nextdaymediabv",44,26,1,2335,1969],
    ["media-tradecraft",30,25,0,86569,73320],["raptive",34,21,0,16864,12690],["venatusmedia-usd",30,20,0,166,0],["alayans",50,14,1,304,17],
    ["the-publisher-desk",30,12,1,4717,3917],["webedia-group-es",60,12,5,300,277],["elespanol",38,6,1,411,580],["vocento",45,5,0,13,0],
    ["piemme",14,4,3,67,61],["clarin-ar",7,3,0,4,9],["prisa",24,3,0,3680,4281],["a360media",35,3,0,74,0],
    ["imagendigital",10,3,0,105,0],["atresmedia",33,3,1,740,28],["rba-es",17,3,2,1595,1346],["planetsport",20,3,0,951,89],
    ["trusted-media-brands",7,2,0,6099,6948],["reach",75,2,0,8276,341],["esimedia",5,2,0,4792,1],["unidadeditorial",10,2,0,883,0],
    ["barstoolsports",3,2,0,207,150],["futurepublishing",61,2,1,6178,9302],["refinery89fr",1,1,0,0,0],["caracoltv-co",5,1,0,9,0],
    ["refinery89be",1,1,0,0,0],["sapo",1,1,1,0,0],["eltiempo-es",2,1,0,3,172]
  ],
  zeroCounts: { zero: 4225, dropped: 51, total: 15337 },
  // top 10 EGs by combined MagniteDirect + Rubicon revenue: [EG, country, MD cur, MD prev, Rubicon cur, Rubicon prev]
  egVs: [
    ["mediavine","US",135249,155294,39511,41712],["playwire","US",0,0,54234,62764],["pmc","US",31968,27399,14911,17582],
    ["freestar","US",0,0,85483,77446],["theguardian","GB",36414,35047,27040,26678],["yahoo","US",0,0,38775,52307],
    ["bendingspoons","IT",0,0,43988,67447],["usatoday","US",7142,0,27115,28926],["media-tradecraft","US",86569,73320,38086,39464],
    ["traffective","DE",0,0,31839,38586]
  ],
  // new accounts: 14 daily values (Sep 19 .. Oct 2)
  newAccounts: [
    { name: "usatoday", activated: "2026-09-29", id: "695e60558b220900076469b6",
      md: [0,0,0,0,0,0,0,0,0,0,305.3,1237.7,2701.5,2897.5], mdImps: [0,0,0,0,0,0,0,0,0,0,189654,883594,2787936,1764653], mdPubs: 253,
      rb: [4782.4,4409.2,3873.4,3327.3,3566.2,4807.2,4160.2,4494.5,4502.1,3790.7,3957.8,3289.8,3575.0,3505.4], rbPubs: 291 },
    { name: "unidadeditorial", activated: "2026-09-29", id: "591b2b0dd5c166070016e919",
      md: [0,0,0,0,0,0,0,0,0,0,11.5,15.5,195.8,660.2], mdImps: [0,0,0,0,0,0,0,0,0,0,87562,65426,372968,1250051], mdPubs: 7,
      rb: [1866.4,1224.8,1461.3,1436.4,1452.7,1405.6,908.5,1327.7,1212.2,1104.8,1052.2,1152.5,1316.2,1065.2], rbPubs: 6 },
    { name: "1xl", activated: "2026-09-29", id: "6864dbc2aa0bba0008977819",
      md: [0,0,0,0,0,0,0,0,0,0,100.3,302.3,590.9,441.3], mdImps: [0,0,0,0,0,0,0,0,0,0,177312,537083,753806,723069], mdPubs: 100,
      rb: [1063.4,967.3,938.5,1085.9,1261.6,1054.6,982.7,1030.7,1015.0,1015.3,1105.2,929.8,1425.9,752.0], rbPubs: 101 },
    { name: "grahamediagroup", activated: "2026-09-29", id: "6973b665ee6ba30007fe1b6a",
      md: [0,0,0,0,0,0,0,0,0,0,20.1,71.7,115.4,266.1], mdImps: [0,0,0,0,0,0,0,0,0,0,6074,28911,65521,96507], mdPubs: 6,
      rb: [632.5,513.2,393.9,374.6,654.9,884.8,791.5,655.4,556.4,463.8,831.4,767.1,766.6,703.5], rbPubs: 6 },
    { name: "imagendigital", activated: "2026-09-29", id: "5a09ba809224240a00c88d0c",
      md: [0,0,0,0,0,0,0,0,0,0,4.3,49.1,22.7,28.7], mdImps: [0,0,0,0,0,0,0,0,0,0,46678,164475,220277,223788], mdPubs: 7,
      rb: [122.2,107.8,132.5,123.7,117.8,109.3,103.8,99.0,94.4,160.1,253.3,234.1,90.3,62.7], rbPubs: 7 }
  ],
  // Editorial groups that started delivering on MagniteDirect this week (prev week < $5): [EG, cur rev, prev rev]
  egStarted: [["usatoday",7142,0],["esimedia",4792,1],["1xl",1435,0],["unidadeditorial",883,0],["mumsnet",742,2],["grahamediagroup",473,0],
    ["venatusmedia-usd",166,0],["imagendigital",105,0],["a360media",74,0],["vocento",13,0],["newsweek",12,0],["caracoltv-co",9,0]],
  // revenue moving between lines: [EG, MD cur, MD prev, Rubicon cur, Rubicon prev]
  lineShift: [["editoraglobo",6084,248,5554,9146],["esimedia",4792,1,9056,10317]],
  // peak day of the top gaining EG: [EG, date, MD revenue]
  peak: ["media-tradecraft","2026-09-26",33309]
};
