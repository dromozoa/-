(() => {
"use strict";

const D = globalThis.demeter ||= {};
if (D.voiceSprites) {
  return;
}

D.voiceSprites = [
{"1":[0,1579],"2":[1979,3520],"3":[5899,3574],"4":[9873,1763],},
{"1":[0,824],"2":[1224,3520],"3":[5144,3574],"4":[9118,1763],},
{"1":[0,1763],"2":[2163,3520],"3":[6083,3574],"4":[10056,1763],},
{"1":[0,2574],"2":[2974,3419],},
{"1":[0,3699],"2":[4099,3614],"3":[8112,2795],},
{"1":[0,3888],"2":[4288,4704],},
{"1":[0,4379],"2":[4779,4904],"3":[10083,3134],},
{"1":[0,3904],"2":[4304,2344],"3":[7048,3555],"4":[11003,3840],},
{"1":[0,2390],"2":[2790,3939],"3":[7128,1384],"4":[8912,2435],},
{"1":[0,2635],"2":[3035,3715],"3":[7150,1584],"4":[9134,4163],},
{"1":[0,2523],"2":[2923,3328],"3":[6651,2310],"4":[9361,3184],},
{"1":[0,6203],"2":[6603,3168],},
{"1":[0,3664],"2":[4064,5043],"3":[9507,4190],},
{"1":[0,8854],},
{"1":[0,3923],"2":[4323,4224],"3":[8947,4384],},
{"1":[0,1054],"2":[1454,1430],},
{"1":[0,2699],},
{"1":[0,3614],"2":[4014,4683],},
{"1":[0,1648],"2":[2048,3624],"3":[6073,3240],},
{"1":[0,2734],"2":[3134,2595],"3":[6128,3774],"4":[10302,3955],},
{"1":[0,3160],"2":[3560,7374],"3":[11334,3195],},
{"1":[0,4864],"2":[5264,5395],},
{"1":[0,5504],"2":[5904,2734],"3":[9038,2243],},
{"1":[0,1795],"2":[2195,2560],"3":[5155,2400],"4":[7955,2739],},
{"1":[0,3024],"2":[3424,5014],"3":[8838,2155],},
{"1":[0,2323],"2":[2723,2464],"3":[5587,1040],"4":[7027,688],},
{"1":[0,2550],"2":[2950,3208],"3":[6558,2355],},
{"1":[0,3555],"2":[3955,2614],"3":[6968,2819],"4":[10187,2528],},
{"1":[0,1800],"2":[2200,1395],"3":[3995,1870],},
{"1":[0,1750],"2":[2150,1110],"3":[3659,2024],"4":[6083,3600],},
{"1":[0,4470],"2":[4870,1235],"3":[6504,2710],},
{"1":[0,1854],"2":[2254,3155],"3":[5808,1168],"4":[7376,1179],},
{"1":[0,979],"2":[1379,694],"3":[2472,2168],},
{"1":[0,1859],},
{"1":[0,2163],"2":[2563,1139],"3":[4102,1720],},
{"1":[0,5144],"2":[5545,2280],"3":[8224,3414],},
{"1":[0,4360],},
{"1":[0,2464],"2":[2864,2064],},
{"1":[0,9208],},
{"1":[0,5019],"2":[5419,1123],"3":[6942,3590],},
{"1":[0,870],"2":[1270,1315],},
{"1":[0,1574],"2":[1974,2075],"3":[4448,2480],"4":[7329,2390],},
{"1":[0,6464],"2":[6865,1974],"3":[9238,2208],},
{"1":[0,8024],"2":[8424,2440],"3":[11264,744],},
{"1":[0,2320],"2":[2720,2134],"3":[5254,3200],"4":[8854,2208],},
{"1":[0,2670],"2":[3070,3024],"3":[6494,1400],"4":[8294,955],},
{"1":[0,1448],"2":[1848,1888],"3":[4136,2675],"4":[7211,1424],},
{"1":[0,4408],"2":[4809,2150],"3":[7358,3504],},
{"1":[0,2670],"2":[3070,2734],"3":[6203,2104],},
{"1":[0,2454],"2":[2854,3315],"3":[6568,3120],"4":[10088,2779],},
{"1":[0,3774],"2":[4174,2363],"3":[6937,5134],},
{"1":[0,2110],"2":[2510,4003],"3":[6912,4083],},
{"1":[0,3259],"2":[3659,2523],"3":[6582,5240],},
{"1":[0,2579],"2":[2979,3179],"3":[6558,870],"4":[7827,1360],},
{"1":[0,4448],"2":[4849,2299],"3":[7547,2283],},
{"1":[0,870],"2":[1270,4499],},
{"1":[0,2739],"2":[3139,4128],"3":[7667,5168],},
{"1":[0,3470],"2":[3870,4128],"3":[8398,5168],},
{"1":[0,2414],"2":[2814,2435],},
{"1":[0,1024],"2":[1424,1750],"3":[3574,1803],"4":[5776,1504],},
{"1":[0,3859],},
{"1":[0,944],"2":[1344,2270],"3":[4014,2859],},
{"1":[0,2075],"2":[2475,1534],"3":[4408,4830],},
{"1":[0,2339],"2":[2739,1240],"3":[4379,4664],"4":[9443,1600],},
{"1":[0,3614],"2":[4014,4683],},
{"1":[0,2435],"2":[2835,1280],"3":[4515,1363],"4":[6278,1824],},
{"1":[0,2624],},
{"1":[0,1334],"2":[1734,5579],"3":[7713,3755],},
{"1":[0,1294],"2":[1694,1288],"3":[3382,2163],},
{"1":[0,2134],"2":[2534,4275],"3":[7208,2070],"4":[9678,1235],},
{"1":[0,6515],"2":[6915,1795],"3":[9110,3480],},
{"1":[0,2630],"2":[3030,1640],},
{"1":[0,2363],},
{"1":[0,4624],},
{"1":[0,2899],},
{"1":[0,1454],"2":[1854,3694],},
{"1":[0,2830],"2":[3230,2323],"3":[5952,1800],"4":[8152,3019],},
{"1":[0,2848],"2":[3248,2544],"3":[6192,2808],},
{"1":[0,6254],},
{"1":[0,1664],"2":[2064,1664],"3":[4128,2840],},
{"1":[0,1534],"2":[1934,3760],},
{"1":[0,2880],"2":[3280,1910],"3":[5590,6243],},
{"1":[0,2923],"2":[3323,1664],"3":[5387,2320],"4":[8107,4830],},
{"1":[0,2739],"2":[3139,3323],"3":[6862,3443],"4":[10704,3950],},
{"1":[0,3603],"2":[4003,2534],},
{"1":[0,2680],"2":[3080,1750],"3":[5230,2760],},
{"1":[0,2624],"2":[3024,3120],"3":[6545,2779],},
{"1":[0,3640],},
{"1":[0,1280],"2":[1681,1075],"3":[3155,4168],"4":[7723,2424],},
{"1":[0,1454],"2":[1854,4168],"3":[6422,3035],"4":[9857,3064],},
{"1":[0,1539],},
{"1":[0,2910],"2":[3310,3883],"3":[7593,1443],"4":[9435,3475],},
{"1":[0,5310],"2":[5710,3123],},
{"1":[0,2814],"2":[3214,3888],"3":[7502,3755],},
{"1":[0,6088],"2":[6488,3174],},
{"1":[0,3355],"2":[3755,4000],"3":[8155,2555],"4":[11110,3040],},
{"1":[0,2744],"2":[3144,4080],"3":[7625,1979],},
{"1":[0,3619],},
{"1":[0,4099],"2":[4499,4659],"3":[9558,4750],"4":[14707,2579],},
{"1":[0,3424],"2":[3824,2160],},
{"1":[0,2979],"2":[3379,5608],"3":[9387,3600],},
{"1":[0,3334],"2":[3734,939],"3":[5072,1555],},
{"1":[0,2390],},
{"1":[0,2283],},
{"1":[0,2899],},
{"1":[0,1363],},
{"1":[0,6403],"2":[6803,8470],},
{"1":[0,3454],"2":[3854,4008],"3":[8262,5480],},
{"1":[0,3859],"2":[4259,2563],},
{"1":[0,4299],"2":[4699,4379],"3":[9478,2995],"4":[12873,3390],},
{"1":[0,4208],"2":[4609,3595],"3":[8603,1523],},
{"1":[0,4368],"2":[4769,3984],},
{"1":[0,1544],"2":[1944,1323],"3":[3667,1280],"4":[5347,2115],},
{"1":[0,3400],"2":[3800,4368],"3":[8568,2830],},
{"1":[0,3299],"2":[3699,1179],"3":[5278,1520],},
{"1":[0,2803],},
{"1":[0,894],"2":[1294,2008],},
{"1":[0,3979],},
{"1":[0,974],"2":[1374,6574],"3":[8347,1110],},
{"1":[0,3563],},
{"1":[0,1294],"2":[1694,2003],"3":[4096,2840],},
{"1":[0,2643],},
{"1":[0,1390],"2":[1790,3734],"3":[5923,1544],},
{"1":[0,2128],"2":[2528,2560],"3":[5488,2790],},
{"1":[0,2128],"2":[2528,2720],"3":[5649,2790],},
{"1":[0,2288],"2":[2688,1830],},
{"1":[0,2288],},
{"1":[0,1584],"2":[1984,2208],},
{"1":[0,1739],"2":[2139,1483],},
{"1":[0,1494],"2":[1894,2008],"3":[4302,1160],},
{"1":[0,3894],"2":[4294,1819],},
{"1":[0,3544],"2":[3944,1904],"3":[6248,1454],"4":[8102,1579],},
{"1":[0,3744],},
{"1":[0,2264],"2":[2664,1264],},
{"1":[0,1155],"2":[1555,2320],},
{"1":[0,1603],"2":[2003,3664],"3":[6067,2715],"4":[9182,2435],},
{"1":[0,12830],},
{"1":[0,13600],},
{"1":[0,2195],},
{"1":[0,6699],"2":[7099,3560],},
{"1":[0,1083],"2":[1483,1123],},
{"1":[0,7515],"2":[7915,4883],},
{"1":[0,5195],"2":[5595,2310],"3":[8304,2635],},
{"1":[0,1123],"2":[1523,3984],},
{"1":[0,3960],"2":[4360,3203],},
{"1":[0,3070],"2":[3470,1563],"3":[5432,2374],"4":[8206,2704],},
{"1":[0,1968],"2":[2368,2019],"3":[4787,5584],},
{"1":[0,2035],},
{"1":[0,2115],"2":[2515,1139],"3":[4054,2963],},
{"1":[0,1310],"2":[1710,1835],},
{"1":[0,3523],"2":[3923,4344],"3":[8667,3254],},
{"1":[0,5915],"2":[6315,2814],"3":[9528,3528],},
{"1":[0,1190],"2":[1590,2024],},
{"1":[0,1390],"2":[1790,1643],"3":[3833,1768],},
{"1":[0,1110],"2":[1510,888],"3":[2798,4248],},
{"1":[0,3235],"2":[3635,3723],"3":[7758,2728],},
{"1":[0,1680],"2":[2080,1035],"3":[3515,1960],"4":[5875,1720],},
{"1":[0,944],"2":[1344,974],},
{"1":[0,835],"2":[1235,3094],"3":[4728,1819],},
{"1":[0,2254],"2":[2654,1374],},
{"1":[0,2824],"2":[3224,2160],"3":[5785,4120],},
{"1":[0,2768],},
{"1":[0,2080],"2":[2480,2400],},
{"1":[0,4480],},
{"1":[0,1803],"2":[2203,2163],},
{"1":[0,3803],},
{"1":[0,920],},
{"1":[0,2899],"2":[3299,5694],"3":[9393,3739],},
{"1":[0,2264],"2":[2664,3128],"3":[6192,1643],"4":[8235,2560],},
{"1":[0,1808],},
{"1":[0,2003],"2":[2403,3003],},
{"1":[0,1043],"2":[1443,3259],},
{"1":[0,3080],"2":[3480,2008],},
{"1":[0,1270],},
{"1":[0,830],"2":[1230,734],},
{"1":[0,1923],"2":[2323,1648],"3":[4371,3800],},
{"1":[0,2840],"2":[3240,1184],"3":[4824,1294],"4":[6518,1504],},
{"1":[0,3440],},
{"1":[0,2083],"2":[2483,7480],"3":[10363,4294],},
{"1":[0,6235],"2":[6635,1814],"3":[8848,3328],},
{"1":[0,4179],"2":[4579,1555],"3":[6534,2555],"4":[9489,3568],},
{"1":[0,1184],"2":[1584,2454],"3":[4438,3283],},
{"1":[0,3054],"2":[3454,3600],},
{"1":[0,2440],"2":[2840,2950],"3":[6190,955],},
{"1":[0,3155],"2":[3555,675],},
{"1":[0,2520],"2":[2920,4235],"3":[7555,4584],"4":[12539,1600],},
{"1":[0,3614],"2":[4014,4683],},
{"1":[0,3608],"2":[4008,4344],},
{"1":[0,4395],"2":[4795,2640],"3":[7835,2920],"4":[11155,2955],},
{"1":[0,2640],"2":[3040,3200],"3":[6641,2110],"4":[9150,4240],},
{"1":[0,4888],"2":[5288,2750],"3":[8438,2424],},
{"1":[0,2955],"2":[3355,2264],"3":[6019,1944],},
{"1":[0,1643],"2":[2043,2603],},
{"1":[0,1784],"2":[2184,920],},
{"1":[0,1600],"2":[2000,3115],"3":[5515,779],"4":[6694,2059],},
{"1":[0,2254],"2":[2654,1235],"3":[4288,1654],"4":[6342,2795],},
{"1":[0,1294],"2":[1694,1470],"3":[3563,1344],},
{"1":[0,1275],"2":[1675,1280],"3":[3355,1960],},
{"1":[0,4208],"2":[4609,1640],},
{"1":[0,3030],"2":[3430,3048],"3":[6878,3155],},
{"1":[0,1880],"2":[2280,2163],"3":[4843,1904],"4":[7147,3408],},
{"1":[0,4523],"2":[4923,2430],},
{"1":[0,2800],"2":[3200,2000],"3":[5600,7443],},
{"1":[0,1248],"2":[1649,3464],},
{"1":[0,2054],},
{"1":[0,3344],},
{"1":[0,1600],"2":[2000,1624],"3":[4024,6328],"4":[10752,2155],},
{"1":[0,2755],"2":[3155,3080],"3":[6635,3968],"4":[11003,2083],},
{"1":[0,1760],"2":[2160,1990],"3":[4550,1115],},
{"1":[0,2240],"2":[2640,1515],"3":[4555,2019],},
{"1":[0,3128],"2":[3528,3230],},
{"1":[0,2059],"2":[2459,2280],"3":[5139,3539],},
{"1":[0,3939],"2":[4339,2763],"3":[7502,1643],"4":[9544,2560],},
{"1":[0,1808],},
{"1":[0,2635],},
{"1":[0,763],"2":[1163,1424],"3":[2987,1710],"4":[5096,1430],},
{"1":[0,1379],"2":[1779,1403],"3":[3582,3235],},
{"1":[0,1464],"2":[1864,1843],},
{"1":[0,2323],"2":[2723,1403],"3":[4526,934],"4":[5859,1315],},
{"1":[0,3640],"2":[4040,2475],"3":[6915,2550],"4":[9864,1539],},
{"1":[0,835],"2":[1235,2344],"3":[3979,2275],"4":[6654,2608],},
{"1":[0,1400],"2":[1800,2904],"3":[5104,1819],"4":[7323,1950],},
{"1":[0,1603],"2":[2003,1560],"3":[3963,3374],"4":[7737,2614],},
{"1":[0,3883],"2":[4283,2150],"3":[6833,2710],"4":[9942,2283],},
{"1":[0,2875],"2":[3275,2715],"3":[6390,1694],"4":[8483,3659],},
{"1":[0,3000],"2":[3400,2915],"3":[6715,2643],},
{"1":[0,3510],"2":[3910,3270],"3":[7579,2430],"4":[10408,1864],},
{"1":[0,4504],},
{"1":[0,1643],},
{"1":[0,2595],"2":[2995,1320],},
{"1":[0,1744],"2":[2144,1923],"3":[4467,2283],},
{"1":[0,3099],"2":[3499,2579],},
{"1":[0,4160],"2":[4561,1950],"3":[6910,784],"4":[8094,2174],},
{"1":[0,1163],},
{"1":[0,2720],"2":[3120,2934],"3":[6454,1950],},
{"1":[0,1550],"2":[1950,1214],"3":[3563,2568],"4":[6531,2035],},
{"1":[0,2240],"2":[2640,1560],},
{"1":[0,1150],"2":[1550,1315],},
{"1":[0,2990],"2":[3390,2910],"3":[6699,4110],"4":[11208,3115],},
{"1":[0,2120],},
{"1":[0,3264],},
{"1":[0,4504],"2":[4904,2880],"3":[8184,2648],},
{"1":[0,2475],"2":[2875,1643],"3":[4918,3510],},
{"1":[0,2168],"2":[2568,3254],},
{"1":[0,2494],},
{"1":[0,1979],"2":[2379,1590],"3":[4368,1550],},
{"1":[0,880],},
{"1":[0,819],},
{"1":[0,1280],},
{"1":[0,1379],"2":[1779,2315],},
{"1":[0,955],"2":[1355,1723],},
{"1":[0,1934],"2":[2334,1054],"3":[3787,1979],"4":[6166,3043],},
{"1":[0,1224],"2":[1624,1099],"3":[3123,1240],},
{"1":[0,1800],"2":[2200,1099],"3":[3699,1894],},
{"1":[0,1670],"2":[2070,2819],"3":[5288,2400],"4":[8089,3483],},
{"1":[0,1363],},
{"1":[0,939],},
{"1":[0,1835],"2":[2235,1520],},
{"1":[0,1480],"2":[1880,1614],},
{"1":[0,1235],"2":[1635,1830],},
{"1":[0,1539],"2":[1939,2680],"3":[5019,2560],},
{"1":[0,1110],},
{"1":[0,2563],"2":[2963,1048],},
{"1":[0,1875],"2":[2275,1315],},
{"1":[0,3094],},
{"1":[0,840],},
{"1":[0,1614],"2":[2014,2544],"3":[4958,1200],},
{"1":[0,840],"2":[1240,2979],},
{"1":[0,3184],"2":[3584,2419],"3":[6403,2640],"4":[9443,1808],},
{"1":[0,1123],"2":[1523,1200],"3":[3123,1224],},
{"1":[0,5795],"2":[6195,1304],"3":[7899,1568],},
{"1":[0,1454],"2":[1854,2454],},
{"1":[0,2520],"2":[2920,4384],},
{"1":[0,2504],"2":[2904,3675],},
{"1":[0,4339],"2":[4739,4635],},
{"1":[0,1720],},
{"1":[0,2584],},
{"1":[0,2920],"2":[3320,2550],"3":[6270,1430],},
{"1":[0,1739],},
{"1":[0,1339],"2":[1739,1294],"3":[3432,1355],"4":[5187,1590],},
{"1":[0,1134],"2":[1534,1200],"3":[3134,1174],"4":[4707,2859],},
{"1":[0,2024],"2":[2424,4064],"3":[6888,3275],},
{"1":[0,715],"2":[1115,1115],"3":[2630,910],"4":[3939,888],},
{"1":[0,2579],},
{"1":[0,1600],"2":[2000,1184],"3":[3584,1750],},
{"1":[0,2083],"2":[2483,2384],"3":[5267,3704],},
{"1":[0,1560],},
{"1":[0,3480],"2":[3880,6843],"3":[11123,2600],},
{"1":[0,3683],},
{"1":[0,4894],},
{"1":[0,4643],},
{"1":[0,1694],"2":[2094,5504],"3":[7998,3075],},
{"1":[0,1968],"2":[2368,1960],},
{"1":[0,2630],"2":[3030,1819],"3":[5248,2608],"4":[8256,2019],},
{"1":[0,1134],"2":[1534,1200],"3":[3134,1174],},
{"1":[0,2203],"2":[2603,1934],},
{"1":[0,2203],"2":[2603,1934],},
{"1":[0,2470],"2":[2870,1894],},
{"1":[0,5283],"2":[5683,1763],},
{"1":[0,1944],"2":[2344,1360],},
{"1":[0,1710],"2":[2110,2590],"3":[5099,843],"4":[6342,614],},
{"1":[0,830],"2":[1230,734],"3":[2363,1283],"4":[4046,2774],},
{"1":[0,3035],"2":[3435,1675],"3":[5510,1680],"4":[7590,2155],},
{"1":[0,2934],"2":[3334,2920],"3":[6654,1430],"4":[8483,1464],},
{"1":[0,2734],"2":[3134,3139],"3":[6673,3315],},
{"1":[0,1910],"2":[2310,1254],"3":[3963,1875],"4":[6238,955],},
{"1":[0,3155],"2":[3555,675],},
{"1":[0,3859],"2":[4259,2968],},
{"1":[0,2339],"2":[2739,2294],},
{"1":[0,2504],"2":[2904,2208],},
{"1":[0,1443],"2":[1843,2243],"3":[4486,1275],"4":[6160,1624],},
{"1":[0,1264],"2":[1665,2128],},
{"1":[0,1624],"2":[2024,1960],},
{"1":[0,2000],"2":[2400,3603],"3":[6403,4384],},
{"1":[0,2240],"2":[2640,2510],"3":[5550,2694],},
{"1":[0,1168],},
{"1":[0,1024],},
{"1":[0,2555],"2":[2955,3350],"3":[6705,3819],"4":[10923,3139],},
{"1":[0,4374],"2":[4774,1688],"3":[6862,1390],},
{"1":[0,784],"2":[1185,2814],},
{"1":[0,824],"2":[1224,1910],},
{"1":[0,1400],"2":[1800,2200],"3":[4400,1419],},
{"1":[0,1683],"2":[2083,2259],},
{"1":[0,2979],"2":[3379,3030],"3":[6808,3563],"4":[10771,3883],},
{"1":[0,1203],"2":[1603,2064],"3":[4067,1448],"4":[5915,1379],},
{"1":[0,1019],"2":[1419,1355],"3":[3174,2094],"4":[5667,2190],},
{"1":[0,2734],"2":[3134,3099],"3":[6632,2950],},
{"1":[0,1139],"2":[1539,1203],"3":[3142,1240],},
{"1":[0,4283],"2":[4683,2440],"3":[7523,1760],},
{"1":[0,1963],"2":[2363,2339],"3":[5102,2488],"4":[7990,3603],},
{"1":[0,3974],"2":[4374,1384],"3":[6158,6494],},
{"1":[0,3939],"2":[4339,3520],"3":[8259,974],},
{"1":[0,3054],},
{"1":[0,1715],"2":[2115,694],"3":[3208,1955],"4":[5563,1408],},
{"1":[0,4048],},
{"1":[0,3035],"2":[3435,2848],"3":[6683,2680],},
{"1":[0,2568],"2":[2968,2710],"3":[6078,2710],"4":[9187,2640],},
{"1":[0,5259],},
{"1":[0,2408],"2":[2808,968],"3":[4176,1854],"4":[6430,960],},
{"1":[0,4704],"2":[5104,675],},
{"1":[0,2494],"2":[2894,3523],},
{"1":[0,1070],"2":[1470,2195],"3":[4064,2139],},
{"1":[0,4568],},
{"1":[0,1720],"2":[2120,3704],},
{"1":[0,1483],"2":[1883,1608],"3":[3891,3475],"4":[7766,3563],},
{"1":[0,1763],},
{"1":[0,1363],"2":[1763,2648],"3":[4811,2614],},
{"1":[0,2750],"2":[3150,5608],"3":[9158,3230],},
{"1":[0,5550],"2":[5950,2270],"3":[8619,3648],},
{"1":[0,3094],"2":[3494,675],},
{"1":[0,1384],"2":[1784,3739],"3":[5923,2990],},
{"1":[0,1390],"2":[1790,1728],"3":[3918,2459],},
{"1":[0,2408],"2":[2808,2643],},
{"1":[0,5534],},
{"1":[0,2475],"2":[2875,4270],"3":[7545,2624],"4":[10569,2104],},
{"1":[0,4235],"2":[4635,3464],},
{"1":[0,4168],"2":[4569,3870],},
{"1":[0,7534],"2":[7934,3648],},
{"1":[0,1350],"2":[1750,3190],"3":[5339,3808],"4":[9547,2355],},
{"1":[0,2163],},
{"1":[0,4134],},
{"1":[0,2243],},
{"1":[0,1480],},
{"1":[0,2430],},
{"1":[0,3459],"2":[3859,2390],"3":[6649,2808],},
{"1":[0,3464],"2":[3864,2934],"3":[7198,2243],},
{"1":[0,1294],"2":[1694,2128],"3":[4222,2640],"4":[7262,1875],},
{"1":[0,1840],"2":[2240,2944],"3":[5585,4270],},
{"1":[0,2904],"2":[3304,6299],"3":[10003,1304],},
{"1":[0,2150],"2":[2550,2344],"3":[5294,1395],},
{"1":[0,2464],"2":[2864,5315],"3":[8579,2699],},
{"1":[0,2454],"2":[2854,2470],"3":[5723,3414],},
{"1":[0,9190],"2":[9590,3923],},
{"1":[0,1259],},
{"1":[0,4379],"2":[4779,1923],},
{"1":[0,3040],"2":[3440,2854],"3":[6694,2054],},
{"1":[0,2459],"2":[2859,2648],"3":[5907,1104],},
{"1":[0,2715],"2":[3115,1579],},
{"1":[0,3248],"2":[3648,2203],"3":[6251,1123],},
{"1":[0,2259],"2":[2659,2054],"3":[5112,1299],},
{"1":[0,2339],"2":[2739,1144],},
{"1":[0,2339],"2":[2739,1144],},
{"1":[0,2475],"2":[2875,1144],},
{"1":[0,1664],"2":[2064,1643],},
{"1":[0,2464],"2":[2864,1008],},
{"1":[0,2475],"2":[2875,1008],},
{"1":[0,2603],"2":[3003,1008],},
{"1":[0,1710],"2":[2110,1928],"3":[4438,1768],"4":[6606,2054],},
];

})();
