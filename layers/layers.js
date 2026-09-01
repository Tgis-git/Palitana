var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 0.938000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var lyr_Landsat9_SR_AllBands_2026_May_1 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Landsat9_SR_AllBands_2026_May<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Landsat9_SR_AllBands_2026_May_1.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [7984770.000000, 2445829.459945, 7995180.000000, 2453051.128227]
        })
    });
var lyr_Landsat9_SR_AllBands_2025_2 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Landsat9_SR_AllBands_2025<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Landsat9_SR_AllBands_2025_2.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [7984770.000000, 2445829.459945, 7995180.000000, 2453051.128227]
        })
    });
var lyr_Landsat8_SR_AllBands_2018_3 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Landsat8_SR_AllBands_2018<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Landsat8_SR_AllBands_2018_3.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [7984770.000000, 2445829.459945, 7995180.000000, 2453051.128227]
        })
    });
var lyr_Landsat7_SR_AllBands_2008_4 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Landsat7_SR_AllBands_2008<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Landsat7_SR_AllBands_2008_4.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [7984770.000000, 2445829.459945, 7995180.000000, 2453051.128227]
        })
    });
var lyr_Landsat7_SR_AllBands_1998_5 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Landsat7_SR_AllBands_1998<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Landsat7_SR_AllBands_1998_5.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [7984770.000000, 2445829.459945, 7995180.000000, 2453051.128227]
        })
    });
var lyr_Landsat7_SR_AllBands_1989_6 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Landsat7_SR_AllBands_1989<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Landsat7_SR_AllBands_1989_6.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [7984770.000000, 2445829.459945, 7995180.000000, 2453051.128227]
        })
    });
var lyr_Landsat3_MSS_AllBands_1980_7 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Landsat3_MSS_AllBands_1980<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Landsat3_MSS_AllBands_1980_7.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [7984740.000000, 2445829.459945, 7995180.000000, 2453051.128227]
        })
    });
var lyr_1980_FRG_8 = new ol.layer.Image({
        opacity: 1,
        
    title: '1980_FRG<br />\
    <img src="styles/legend/1980_FRG_8_0.png" /> Patch<br />\
    <img src="styles/legend/1980_FRG_8_1.png" /> Edge<br />\
    <img src="styles/legend/1980_FRG_8_2.png" /> Perforated<br />\
    <img src="styles/legend/1980_FRG_8_3.png" /> Core (<250 acres)<br />\
    <img src="styles/legend/1980_FRG_8_4.png" /> Core (>500 acres)<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/1980_FRG_8.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [7984615.292221, 2445673.029361, 7995324.250586, 2453237.726772]
        })
    });
var lyr_1989_FRG_9 = new ol.layer.Image({
        opacity: 1,
        
    title: '1989_FRG<br />\
    <img src="styles/legend/1989_FRG_9_0.png" /> Patch<br />\
    <img src="styles/legend/1989_FRG_9_1.png" /> Edge<br />\
    <img src="styles/legend/1989_FRG_9_2.png" /> Perforated<br />\
    <img src="styles/legend/1989_FRG_9_3.png" /> Core (<250 acres)<br />\
    <img src="styles/legend/1989_FRG_9_4.png" /> Core (250-500 acres) <br />\
    <img src="styles/legend/1989_FRG_9_5.png" /> Core (>500 acres)<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/1989_FRG_9.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [7984676.073103, 2445689.153156, 7995274.178265, 2453203.878618]
        })
    });
var lyr_1998_FRG_10 = new ol.layer.Image({
        opacity: 1,
        
    title: '1998_FRG<br />\
    <img src="styles/legend/1998_FRG_10_0.png" /> Patch<br />\
    <img src="styles/legend/1998_FRG_10_1.png" /> Edge<br />\
    <img src="styles/legend/1998_FRG_10_2.png" /> Perforated<br />\
    <img src="styles/legend/1998_FRG_10_3.png" /> Core (<250 acres)<br />\
    <img src="styles/legend/1998_FRG_10_4.png" /> Core (>500 acres)<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/1998_FRG_10.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [7984676.073103, 2445689.153156, 7995274.178265, 2453203.878618]
        })
    });
var lyr_2008_FRG_11 = new ol.layer.Image({
        opacity: 1,
        
    title: '2008_FRG<br />\
    <img src="styles/legend/2008_FRG_11_0.png" /> Patch<br />\
    <img src="styles/legend/2008_FRG_11_1.png" /> Edge<br />\
    <img src="styles/legend/2008_FRG_11_2.png" /> Perforated<br />\
    <img src="styles/legend/2008_FRG_11_3.png" /> Core (<250 acres)<br />\
    <img src="styles/legend/2008_FRG_11_4.png" /> Core (>500 acres)<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/2008_FRG_11.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [7984676.073103, 2445689.153156, 7995274.178272, 2453203.878623]
        })
    });
var lyr_2018_FRG_12 = new ol.layer.Image({
        opacity: 1,
        
    title: '2018_FRG<br />\
    <img src="styles/legend/2018_FRG_12_0.png" /> Patch<br />\
    <img src="styles/legend/2018_FRG_12_1.png" /> Edge<br />\
    <img src="styles/legend/2018_FRG_12_2.png" /> Perforated<br />\
    <img src="styles/legend/2018_FRG_12_3.png" /> Core (<250 acres)<br />\
    <img src="styles/legend/2018_FRG_12_4.png" /> Core (>500 acres)<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/2018_FRG_12.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [7984676.073103, 2445689.153156, 7995274.178272, 2453203.878623]
        })
    });
var lyr_2025_FRG_13 = new ol.layer.Image({
        opacity: 1,
        
    title: '2025_FRG<br />\
    <img src="styles/legend/2025_FRG_13_0.png" /> Patch<br />\
    <img src="styles/legend/2025_FRG_13_1.png" /> Edge<br />\
    <img src="styles/legend/2025_FRG_13_2.png" /> Perforated<br />\
    <img src="styles/legend/2025_FRG_13_3.png" /> Core (<250 acres)<br />\
    <img src="styles/legend/2025_FRG_13_4.png" /> Core (>500 acres)<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/2025_FRG_13.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [7984755.084040, 2445789.869989, 7995220.256726, 2453156.784284]
        })
    });
var lyr_2026_FRG_14 = new ol.layer.Image({
        opacity: 1,
        
    title: '2026_FRG<br />\
    <img src="styles/legend/2026_FRG_14_0.png" /> Patch<br />\
    <img src="styles/legend/2026_FRG_14_1.png" /> Edge<br />\
    <img src="styles/legend/2026_FRG_14_2.png" /> Perforated<br />\
    <img src="styles/legend/2026_FRG_14_3.png" /> Core (<250 acres)<br />\
    <img src="styles/legend/2026_FRG_14_4.png" /> Core (>500 acres)<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/2026_FRG_14.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [7984676.072993, 2445689.153048, 7995274.178264, 2453203.878587]
        })
    });
var lyr_1980_FNF_15 = new ol.layer.Image({
        opacity: 1,
        
    title: '1980_F&NF<br />\
    <img src="styles/legend/1980_FNF_15_0.png" /> 1<br />\
    <img src="styles/legend/1980_FNF_15_1.png" /> 2<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/1980_FNF_15.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [7984615.292221, 2445673.029361, 7995324.250586, 2453237.726772]
        })
    });
var lyr_1989_FNF_16 = new ol.layer.Image({
        opacity: 1,
        
    title: '1989_F&NF<br />\
    <img src="styles/legend/1989_FNF_16_0.png" /> 1<br />\
    <img src="styles/legend/1989_FNF_16_1.png" /> 2<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/1989_FNF_16.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [7984676.073103, 2445689.153156, 7995274.178263, 2453203.878515]
        })
    });
var lyr_1998_FNF_17 = new ol.layer.Image({
        opacity: 1,
        
    title: '1998_F&NF<br />\
    <img src="styles/legend/1998_FNF_17_0.png" /> 1<br />\
    <img src="styles/legend/1998_FNF_17_1.png" /> 2<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/1998_FNF_17.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [7984676.073103, 2445689.153156, 7995274.178263, 2453203.878515]
        })
    });
var lyr_2008_FNF_18 = new ol.layer.Image({
        opacity: 1,
        
    title: '2008_F&NF<br />\
    <img src="styles/legend/2008_FNF_18_0.png" /> 1<br />\
    <img src="styles/legend/2008_FNF_18_1.png" /> 2<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/2008_FNF_18.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [7984676.073103, 2445689.153156, 7995274.178265, 2453203.878623]
        })
    });
var lyr_2018_FNF_19 = new ol.layer.Image({
        opacity: 1,
        
    title: '2018_F&NF<br />\
    <img src="styles/legend/2018_FNF_19_0.png" /> 1<br />\
    <img src="styles/legend/2018_FNF_19_1.png" /> 2<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/2018_FNF_19.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [7984676.073103, 2445689.153156, 7995274.178265, 2453203.878623]
        })
    });
var lyr_2025_FNF_20 = new ol.layer.Image({
        opacity: 1,
        
    title: '2025_F&NF<br />\
    <img src="styles/legend/2025_FNF_20_0.png" /> 1<br />\
    <img src="styles/legend/2025_FNF_20_1.png" /> 2<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/2025_FNF_20.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [7984755.084040, 2445789.869989, 7995220.453539, 2453167.736062]
        })
    });
var lyr_2026_FNF_21 = new ol.layer.Image({
        opacity: 1,
        
    title: '2026_F&NF<br />\
    <img src="styles/legend/2026_FNF_21_0.png" /> 1<br />\
    <img src="styles/legend/2026_FNF_21_1.png" /> 2<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/2026_FNF_21.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [7984676.072993, 2445689.153048, 7995274.178263, 2453203.878517]
        })
    });
var lyr_1989over1980_22 = new ol.layer.Image({
        opacity: 1,
        
    title: '1989over1980<br />\
    <img src="styles/legend/1989over1980_22_0.png" /> VDF - VDF<br />\
    <img src="styles/legend/1989over1980_22_1.png" /> MDF - VDF<br />\
    <img src="styles/legend/1989over1980_22_2.png" /> VDF - MDF<br />\
    <img src="styles/legend/1989over1980_22_3.png" /> OF - VDF<br />\
    <img src="styles/legend/1989over1980_22_4.png" /> MDF- MDF<br />\
    <img src="styles/legend/1989over1980_22_5.png" /> VDF - OF<br />\
    <img src="styles/legend/1989over1980_22_6.png" /> SCRUB - VDF<br />\
    <img src="styles/legend/1989over1980_22_7.png" /> OF - MDF<br />\
    <img src="styles/legend/1989over1980_22_8.png" /> MDF - OF<br />\
    <img src="styles/legend/1989over1980_22_9.png" /> VDF - SCRUB<br />\
    <img src="styles/legend/1989over1980_22_10.png" /> SCRUB - MDF<br />\
    <img src="styles/legend/1989over1980_22_11.png" /> OF - OF<br />\
    <img src="styles/legend/1989over1980_22_12.png" /> MDF - SCRUB<br />\
    <img src="styles/legend/1989over1980_22_13.png" /> NF - MDF<br />\
    <img src="styles/legend/1989over1980_22_14.png" /> SCRUB - OF<br />\
    <img src="styles/legend/1989over1980_22_15.png" /> OF - SCRUB<br />\
    <img src="styles/legend/1989over1980_22_16.png" /> MDF - NF<br />\
    <img src="styles/legend/1989over1980_22_17.png" /> NF - OF<br />\
    <img src="styles/legend/1989over1980_22_18.png" /> SCRUB - SCRUB<br />\
    <img src="styles/legend/1989over1980_22_19.png" /> OF - NF<br />\
    <img src="styles/legend/1989over1980_22_20.png" /> NF - SCRUB<br />\
    <img src="styles/legend/1989over1980_22_21.png" /> SCRUB - NF<br />\
    <img src="styles/legend/1989over1980_22_22.png" /> NF - NF<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/1989over1980_22.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [7984677.328177, 2445729.450996, 7995263.936034, 2453171.085062]
        })
    });
var lyr_1998over1989_23 = new ol.layer.Image({
        opacity: 1,
        
    title: '1998over1989<br />\
    <img src="styles/legend/1998over1989_23_0.png" /> VDF-VDF<br />\
    <img src="styles/legend/1998over1989_23_1.png" /> MDF-VDF<br />\
    <img src="styles/legend/1998over1989_23_2.png" /> VDF-MDF<br />\
    <img src="styles/legend/1998over1989_23_3.png" /> MDF-MDF<br />\
    <img src="styles/legend/1998over1989_23_4.png" /> MDF-OF<br />\
    <img src="styles/legend/1998over1989_23_5.png" /> OF-OF<br />\
    <img src="styles/legend/1998over1989_23_6.png" /> MDF-SCRUB<br />\
    <img src="styles/legend/1998over1989_23_7.png" /> SCRUB-OF<br />\
    <img src="styles/legend/1998over1989_23_8.png" /> OF-SCRUB<br />\
    <img src="styles/legend/1998over1989_23_9.png" /> SCRUB-SCRUB<br />\
    <img src="styles/legend/1998over1989_23_10.png" /> OF-NF<br />\
    <img src="styles/legend/1998over1989_23_11.png" /> NF-SCRUB<br />\
    <img src="styles/legend/1998over1989_23_12.png" /> NF-NF<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/1998over1989_23.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [7984676.072993, 2445689.153048, 7995274.178263, 2453203.878517]
        })
    });
var lyr_2008over1998_24 = new ol.layer.Image({
        opacity: 1,
        
    title: '2008over1998<br />\
    <img src="styles/legend/2008over1998_24_0.png" /> VDF-VDF<br />\
    <img src="styles/legend/2008over1998_24_1.png" /> MDF-VDF<br />\
    <img src="styles/legend/2008over1998_24_2.png" /> MDF-MDF<br />\
    <img src="styles/legend/2008over1998_24_3.png" /> OF-VDF<br />\
    <img src="styles/legend/2008over1998_24_4.png" /> MDF-SCRUB<br />\
    <img src="styles/legend/2008over1998_24_5.png" /> OF-MDF<br />\
    <img src="styles/legend/2008over1998_24_6.png" /> MDF-NF<br />\
    <img src="styles/legend/2008over1998_24_7.png" /> OF-OF<br />\
    <img src="styles/legend/2008over1998_24_8.png" /> OF-SCRUB<br />\
    <img src="styles/legend/2008over1998_24_9.png" /> SCRUB-MDF<br />\
    <img src="styles/legend/2008over1998_24_10.png" /> OF-NF<br />\
    <img src="styles/legend/2008over1998_24_11.png" /> SCRUB-OF<br />\
    <img src="styles/legend/2008over1998_24_12.png" /> SCRUB-SCRUB<br />\
    <img src="styles/legend/2008over1998_24_13.png" /> SCRUB-NF<br />\
    <img src="styles/legend/2008over1998_24_14.png" /> NF-OF<br />\
    <img src="styles/legend/2008over1998_24_15.png" /> NF-SCRUB<br />\
    <img src="styles/legend/2008over1998_24_16.png" /> NF-NF<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/2008over1998_24.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [7984676.073103, 2445689.153156, 7995274.178263, 2453203.878515]
        })
    });
var lyr_2018over2008_25 = new ol.layer.Image({
        opacity: 1,
        
    title: '2018over2008<br />\
    <img src="styles/legend/2018over2008_25_0.png" /> VDF-VDF<br />\
    <img src="styles/legend/2018over2008_25_1.png" /> MDF-VDF<br />\
    <img src="styles/legend/2018over2008_25_2.png" /> VDF-MDF<br />\
    <img src="styles/legend/2018over2008_25_3.png" /> MDF-MDF<br />\
    <img src="styles/legend/2018over2008_25_4.png" /> VDF-OF<br />\
    <img src="styles/legend/2018over2008_25_5.png" /> OF-MDF<br />\
    <img src="styles/legend/2018over2008_25_6.png" /> MDF-OF<br />\
    <img src="styles/legend/2018over2008_25_7.png" /> VDF-SCRUB<br />\
    <img src="styles/legend/2018over2008_25_8.png" /> NF-VDF<br />\
    <img src="styles/legend/2018over2008_25_9.png" /> SCRUB-MDF<br />\
    <img src="styles/legend/2018over2008_25_10.png" /> OF-OF<br />\
    <img src="styles/legend/2018over2008_25_11.png" /> MDF-SCRUB<br />\
    <img src="styles/legend/2018over2008_25_12.png" /> NF-MDF<br />\
    <img src="styles/legend/2018over2008_25_13.png" /> SCRUB-OF<br />\
    <img src="styles/legend/2018over2008_25_14.png" /> OF-SCRUB<br />\
    <img src="styles/legend/2018over2008_25_15.png" /> MDF-NF<br />\
    <img src="styles/legend/2018over2008_25_16.png" /> NF-OF<br />\
    <img src="styles/legend/2018over2008_25_17.png" /> SCRUB-SCRUB<br />\
    <img src="styles/legend/2018over2008_25_18.png" /> OF-NF<br />\
    <img src="styles/legend/2018over2008_25_19.png" /> NF-SCURB<br />\
    <img src="styles/legend/2018over2008_25_20.png" /> SCRUB-NF<br />\
    <img src="styles/legend/2018over2008_25_21.png" /> NF-NF<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/2018over2008_25.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [7984676.073103, 2445689.153156, 7995274.178263, 2453203.878515]
        })
    });
var lyr_2025over2018_26 = new ol.layer.Image({
        opacity: 1,
        
    title: '2025over2018<br />\
    <img src="styles/legend/2025over2018_26_0.png" /> VDF-VDF<br />\
    <img src="styles/legend/2025over2018_26_1.png" /> VDF-MDF<br />\
    <img src="styles/legend/2025over2018_26_2.png" /> MDF-VDF<br />\
    <img src="styles/legend/2025over2018_26_3.png" /> MDF-MDF<br />\
    <img src="styles/legend/2025over2018_26_4.png" /> MDF-OF<br />\
    <img src="styles/legend/2025over2018_26_5.png" /> MDF-SCRUB<br />\
    <img src="styles/legend/2025over2018_26_6.png" /> MDF-NF<br />\
    <img src="styles/legend/2025over2018_26_7.png" /> OF-OF<br />\
    <img src="styles/legend/2025over2018_26_8.png" /> OF-SCRUB<br />\
    <img src="styles/legend/2025over2018_26_9.png" /> OF-NF<br />\
    <img src="styles/legend/2025over2018_26_10.png" /> SCRUB - VDF<br />\
    <img src="styles/legend/2025over2018_26_11.png" /> SCRUB-MDF<br />\
    <img src="styles/legend/2025over2018_26_12.png" /> SCRUB-OF<br />\
    <img src="styles/legend/2025over2018_26_13.png" /> SCRUB-SCRUB<br />\
    <img src="styles/legend/2025over2018_26_14.png" /> SCRUB-NF<br />\
    <img src="styles/legend/2025over2018_26_15.png" /> NF-MDF<br />\
    <img src="styles/legend/2025over2018_26_16.png" /> NF-OF<br />\
    <img src="styles/legend/2025over2018_26_17.png" /> NF-SCRUB<br />\
    <img src="styles/legend/2025over2018_26_18.png" /> NF-NF<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/2025over2018_26.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [7984676.073103, 2445689.153156, 7995274.178263, 2453203.878515]
        })
    });
var lyr_2026over2025_27 = new ol.layer.Image({
        opacity: 1,
        
    title: '2026over2025<br />\
    <img src="styles/legend/2026over2025_27_0.png" /> VDF-VDF<br />\
    <img src="styles/legend/2026over2025_27_1.png" /> VDF-MDF<br />\
    <img src="styles/legend/2026over2025_27_2.png" /> VDF-OF<br />\
    <img src="styles/legend/2026over2025_27_3.png" /> VDF-SCRUB<br />\
    <img src="styles/legend/2026over2025_27_4.png" /> MDF-VDF<br />\
    <img src="styles/legend/2026over2025_27_5.png" /> MDF-MDF<br />\
    <img src="styles/legend/2026over2025_27_6.png" /> MDF-OF<br />\
    <img src="styles/legend/2026over2025_27_7.png" /> MDF-SCRUB<br />\
    <img src="styles/legend/2026over2025_27_8.png" /> OF-VDF<br />\
    <img src="styles/legend/2026over2025_27_9.png" /> OF-MDF<br />\
    <img src="styles/legend/2026over2025_27_10.png" /> OF-OF<br />\
    <img src="styles/legend/2026over2025_27_11.png" /> OF-SCRUB<br />\
    <img src="styles/legend/2026over2025_27_12.png" /> OF-NF<br />\
    <img src="styles/legend/2026over2025_27_13.png" /> SCRUB-VDF<br />\
    <img src="styles/legend/2026over2025_27_14.png" /> SCRUB - MDF<br />\
    <img src="styles/legend/2026over2025_27_15.png" /> SCRUB - OF<br />\
    <img src="styles/legend/2026over2025_27_16.png" /> SCRUB - SCRUB<br />\
    <img src="styles/legend/2026over2025_27_17.png" /> SCRUB - NF<br />\
    <img src="styles/legend/2026over2025_27_18.png" /> NF-SCRUB<br />\
    <img src="styles/legend/2026over2025_27_19.png" /> NF-NF<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/2026over2025_27.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [7984676.073103, 2445689.153156, 7995274.178263, 2453203.878515]
        })
    });
var format_Forest_Type_2023_28 = new ol.format.GeoJSON();
var features_Forest_Type_2023_28 = format_Forest_Type_2023_28.readFeatures(json_Forest_Type_2023_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Forest_Type_2023_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Forest_Type_2023_28.addFeatures(features_Forest_Type_2023_28);
var lyr_Forest_Type_2023_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Forest_Type_2023_28, 
                style: style_Forest_Type_2023_28,
                popuplayertitle: 'Forest_Type_2023',
                interactive: true,
    title: 'Forest_Type_2023<br />\
    <img src="styles/legend/Forest_Type_2023_28_0.png" /> 3B/C2 Southern moist mixed deciduous forest<br />\
    <img src="styles/legend/Forest_Type_2023_28_1.png" /> 5/DS4 Dry Grassland<br />\
    <img src="styles/legend/Forest_Type_2023_28_2.png" /> 5/E 8c Salvadora-T amarix scrub<br />\
    <img src="styles/legend/Forest_Type_2023_28_3.png" /> 5/E1 Anogeissus pendula Foorest<br />\
    <img src="styles/legend/Forest_Type_2023_28_4.png" /> 5/E1 anogeissus pendula forest<br />\
    <img src="styles/legend/Forest_Type_2023_28_5.png" /> 5/E1 Anogeissus pendula forest<br />\
    <img src="styles/legend/Forest_Type_2023_28_6.png" /> 5/E1 Anogeissus pendula Forest<br />\
    <img src="styles/legend/Forest_Type_2023_28_7.png" /> 6/E4 Salvadora scrub<br />\
    <img src="styles/legend/Forest_Type_2023_28_8.png" /> Acacia senegal forest<br />\
    <img src="styles/legend/Forest_Type_2023_28_9.png" /> Water<br />' });
var format_Forest_cover_2023_1_29 = new ol.format.GeoJSON();
var features_Forest_cover_2023_1_29 = format_Forest_cover_2023_1_29.readFeatures(json_Forest_cover_2023_1_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Forest_cover_2023_1_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Forest_cover_2023_1_29.addFeatures(features_Forest_cover_2023_1_29);
var lyr_Forest_cover_2023_1_29 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Forest_cover_2023_1_29, 
                style: style_Forest_cover_2023_1_29,
                popuplayertitle: 'Forest_cover_2023_1',
                interactive: true,
    title: 'Forest_cover_2023_1<br />\
    <img src="styles/legend/Forest_cover_2023_1_29_0.png" /> MODERATELY DENSE FOREST (Tree Canopy density 40% & above but < 70%)<br />\
    <img src="styles/legend/Forest_cover_2023_1_29_1.png" /> OPEN FOREST (Tree Canopy density 10% & above but < 40%)<br />\
    <img src="styles/legend/Forest_cover_2023_1_29_2.png" /> SCRUB (Tree Canopy density < 10%)<br />\
    <img src="styles/legend/Forest_cover_2023_1_29_3.png" /> WATER<br />' });
var lyr_Seived_1980_30 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Seived_1980<br />\
    <img src="styles/legend/Seived_1980_30_0.png" /> Barren<br />\
    <img src="styles/legend/Seived_1980_30_1.png" /> Builtup<br />\
    <img src="styles/legend/Seived_1980_30_2.png" /> Dense Vegetation<br />\
    <img src="styles/legend/Seived_1980_30_3.png" /> Scrub/Sparse<br />\
    <img src="styles/legend/Seived_1980_30_4.png" /> Waterbody<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Seived_1980_30.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [7984615.292221, 2445673.029361, 7995324.250586, 2453237.726772]
        })
    });
var lyr_Seived_1989_31 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Seived_1989<br />\
    <img src="styles/legend/Seived_1989_31_0.png" /> Barren<br />\
    <img src="styles/legend/Seived_1989_31_1.png" /> Builtup<br />\
    <img src="styles/legend/Seived_1989_31_2.png" /> Dense Vegetation<br />\
    <img src="styles/legend/Seived_1989_31_3.png" /> Scrub/Sparse<br />\
    <img src="styles/legend/Seived_1989_31_4.png" /> Waterbody<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Seived_1989_31.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [7984676.073103, 2445689.153156, 7995274.178263, 2453203.878515]
        })
    });
var lyr_Seived_1998_32 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Seived_1998<br />\
    <img src="styles/legend/Seived_1998_32_0.png" /> Barren<br />\
    <img src="styles/legend/Seived_1998_32_1.png" /> Builtup<br />\
    <img src="styles/legend/Seived_1998_32_2.png" /> Dense Vegetation<br />\
    <img src="styles/legend/Seived_1998_32_3.png" /> Scrub/Sparse<br />\
    <img src="styles/legend/Seived_1998_32_4.png" /> Waterbody<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Seived_1998_32.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [7984676.073103, 2445689.153156, 7995274.178263, 2453203.878515]
        })
    });
var lyr_Seived_2008_33 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Seived_2008<br />\
    <img src="styles/legend/Seived_2008_33_0.png" /> Barren<br />\
    <img src="styles/legend/Seived_2008_33_1.png" /> Builtup<br />\
    <img src="styles/legend/Seived_2008_33_2.png" /> Dense Vegetation<br />\
    <img src="styles/legend/Seived_2008_33_3.png" /> Scrub/Sparse<br />\
    <img src="styles/legend/Seived_2008_33_4.png" /> Waterbody<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Seived_2008_33.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [7984676.073103, 2445689.153156, 7995274.178265, 2453203.878623]
        })
    });
var lyr_Seived_2018_34 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Seived_2018<br />\
    <img src="styles/legend/Seived_2018_34_0.png" /> Barren<br />\
    <img src="styles/legend/Seived_2018_34_1.png" /> Builtup<br />\
    <img src="styles/legend/Seived_2018_34_2.png" /> Dense Vegetation<br />\
    <img src="styles/legend/Seived_2018_34_3.png" /> Scrub/Sparse<br />\
    <img src="styles/legend/Seived_2018_34_4.png" /> Waterbody<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Seived_2018_34.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [7984676.073103, 2445689.153156, 7995274.178265, 2453203.878623]
        })
    });
var lyr_Seived_2025_35 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Seived_2025<br />\
    <img src="styles/legend/Seived_2025_35_0.png" /> Barren<br />\
    <img src="styles/legend/Seived_2025_35_1.png" /> Builtup<br />\
    <img src="styles/legend/Seived_2025_35_2.png" /> Dense Vegetation<br />\
    <img src="styles/legend/Seived_2025_35_3.png" /> Scrub/Sparse<br />\
    <img src="styles/legend/Seived_2025_35_4.png" /> Waterbody<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Seived_2025_35.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [7984755.084040, 2445789.869989, 7995220.453539, 2453167.736062]
        })
    });
var lyr_Seived_2026_36 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Seived_2026<br />\
    <img src="styles/legend/Seived_2026_36_0.png" /> Barren<br />\
    <img src="styles/legend/Seived_2026_36_1.png" /> Builtup<br />\
    <img src="styles/legend/Seived_2026_36_2.png" /> Dense Vegetation<br />\
    <img src="styles/legend/Seived_2026_36_3.png" /> Scrub/Sparse<br />\
    <img src="styles/legend/Seived_2026_36_4.png" /> Waterbody<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Seived_2026_36.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [7984676.072993, 2445689.153048, 7995274.178263, 2453203.878517]
        })
    });
var lyr_2026_37 = new ol.layer.Image({
        opacity: 1,
        
    title: '2026<br />\
    <img src="styles/legend/2026_37_0.png" /> VDF<br />\
    <img src="styles/legend/2026_37_1.png" /> MDF<br />\
    <img src="styles/legend/2026_37_2.png" /> OF<br />\
    <img src="styles/legend/2026_37_3.png" /> SCRUB<br />\
    <img src="styles/legend/2026_37_4.png" /> NF<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/2026_37.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [7984676.073103, 2445689.153156, 7995274.178263, 2453203.878515]
        })
    });
var lyr_2025_38 = new ol.layer.Image({
        opacity: 1,
        
    title: '2025<br />\
    <img src="styles/legend/2025_38_0.png" /> VDF<br />\
    <img src="styles/legend/2025_38_1.png" /> MDF<br />\
    <img src="styles/legend/2025_38_2.png" /> OF<br />\
    <img src="styles/legend/2025_38_3.png" /> SCRUB<br />\
    <img src="styles/legend/2025_38_4.png" /> NF<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/2025_38.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [7984676.073103, 2445689.153156, 7995274.178263, 2453203.878515]
        })
    });
var lyr_2018_39 = new ol.layer.Image({
        opacity: 1,
        
    title: '2018<br />\
    <img src="styles/legend/2018_39_0.png" /> VDF<br />\
    <img src="styles/legend/2018_39_1.png" /> MDF<br />\
    <img src="styles/legend/2018_39_2.png" /> OF<br />\
    <img src="styles/legend/2018_39_3.png" /> SCRUB<br />\
    <img src="styles/legend/2018_39_4.png" /> NF<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/2018_39.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [7984676.073103, 2445689.153156, 7995274.178263, 2453203.878515]
        })
    });
var lyr_2008_40 = new ol.layer.Image({
        opacity: 1,
        
    title: '2008<br />\
    <img src="styles/legend/2008_40_0.png" /> VDF<br />\
    <img src="styles/legend/2008_40_1.png" /> MDF<br />\
    <img src="styles/legend/2008_40_2.png" /> OF<br />\
    <img src="styles/legend/2008_40_3.png" /> SCRUB<br />\
    <img src="styles/legend/2008_40_4.png" /> NF<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/2008_40.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [7984676.073103, 2445689.153156, 7995274.178263, 2453203.878515]
        })
    });
var lyr_1998_41 = new ol.layer.Image({
        opacity: 1,
        
    title: '1998<br />\
    <img src="styles/legend/1998_41_0.png" /> VDF<br />\
    <img src="styles/legend/1998_41_1.png" /> MDF<br />\
    <img src="styles/legend/1998_41_2.png" /> OF<br />\
    <img src="styles/legend/1998_41_3.png" /> SCRUB<br />\
    <img src="styles/legend/1998_41_4.png" /> NF<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/1998_41.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [7984676.072993, 2445689.153048, 7995274.178263, 2453203.878517]
        })
    });
var lyr_1989_42 = new ol.layer.Image({
        opacity: 1,
        
    title: '1989<br />\
    <img src="styles/legend/1989_42_0.png" /> VDF<br />\
    <img src="styles/legend/1989_42_1.png" /> MDF<br />\
    <img src="styles/legend/1989_42_2.png" /> OF<br />\
    <img src="styles/legend/1989_42_3.png" /> SCRUB<br />\
    <img src="styles/legend/1989_42_4.png" /> NF<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/1989_42.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [7984676.072993, 2445689.153048, 7995274.178263, 2453203.878517]
        })
    });
var lyr_1980_43 = new ol.layer.Image({
        opacity: 1,
        
    title: '1980<br />\
    <img src="styles/legend/1980_43_0.png" /> VDF<br />\
    <img src="styles/legend/1980_43_1.png" /> MDF<br />\
    <img src="styles/legend/1980_43_2.png" /> OF<br />\
    <img src="styles/legend/1980_43_3.png" /> SCRUB<br />\
    <img src="styles/legend/1980_43_4.png" /> NF<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/1980_43.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [7984677.328177, 2445729.450996, 7995263.936034, 2453171.085062]
        })
    });
var format_Greenwash_44 = new ol.format.GeoJSON();
var features_Greenwash_44 = format_Greenwash_44.readFeatures(json_Greenwash_44, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Greenwash_44 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Greenwash_44.addFeatures(features_Greenwash_44);
var lyr_Greenwash_44 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Greenwash_44, 
                style: style_Greenwash_44,
                popuplayertitle: 'Greenwash',
                interactive: false,
                title: '<img src="styles/legend/Greenwash_44.png" /> Greenwash'
            });
var format_StudyArea_45 = new ol.format.GeoJSON();
var features_StudyArea_45 = format_StudyArea_45.readFeatures(json_StudyArea_45, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_StudyArea_45 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_StudyArea_45.addFeatures(features_StudyArea_45);
var lyr_StudyArea_45 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_StudyArea_45, 
                style: style_StudyArea_45,
                popuplayertitle: 'Study Area',
                interactive: false,
                title: '<img src="styles/legend/StudyArea_45.png" /> Study Area'
            });
var group_ForestCover = new ol.layer.Group({
                                layers: [lyr_2026_37,lyr_2025_38,lyr_2018_39,lyr_2008_40,lyr_1998_41,lyr_1989_42,lyr_1980_43,],
                                fold: 'close',
                                title: 'Forest Cover'});
var group_LULC = new ol.layer.Group({
                                layers: [lyr_Seived_1980_30,lyr_Seived_1989_31,lyr_Seived_1998_32,lyr_Seived_2008_33,lyr_Seived_2018_34,lyr_Seived_2025_35,lyr_Seived_2026_36,],
                                fold: 'close',
                                title: 'LULC'});
var group_FSI = new ol.layer.Group({
                                layers: [lyr_Forest_Type_2023_28,lyr_Forest_cover_2023_1_29,],
                                fold: 'close',
                                title: 'FSI'});
var group_Vegetation_change = new ol.layer.Group({
                                layers: [lyr_1989over1980_22,lyr_1998over1989_23,lyr_2008over1998_24,lyr_2018over2008_25,lyr_2025over2018_26,lyr_2026over2025_27,],
                                fold: 'close',
                                title: 'Vegetation_change'});
var group_ForestNonForest = new ol.layer.Group({
                                layers: [lyr_1980_FNF_15,lyr_1989_FNF_16,lyr_1998_FNF_17,lyr_2008_FNF_18,lyr_2018_FNF_19,lyr_2025_FNF_20,lyr_2026_FNF_21,],
                                fold: 'close',
                                title: 'Forest&NonForest'});
var group_FRAGSTAT = new ol.layer.Group({
                                layers: [lyr_1980_FRG_8,lyr_1989_FRG_9,lyr_1998_FRG_10,lyr_2008_FRG_11,lyr_2018_FRG_12,lyr_2025_FRG_13,lyr_2026_FRG_14,],
                                fold: 'close',
                                title: 'FRAGSTAT'});
var group_FCC = new ol.layer.Group({
                                layers: [lyr_Landsat9_SR_AllBands_2026_May_1,lyr_Landsat9_SR_AllBands_2025_2,lyr_Landsat8_SR_AllBands_2018_3,lyr_Landsat7_SR_AllBands_2008_4,lyr_Landsat7_SR_AllBands_1998_5,lyr_Landsat7_SR_AllBands_1989_6,lyr_Landsat3_MSS_AllBands_1980_7,],
                                fold: 'close',
                                title: 'FCC'});

lyr_GoogleSatellite_0.setVisible(true);lyr_Landsat9_SR_AllBands_2026_May_1.setVisible(false);lyr_Landsat9_SR_AllBands_2025_2.setVisible(false);lyr_Landsat8_SR_AllBands_2018_3.setVisible(false);lyr_Landsat7_SR_AllBands_2008_4.setVisible(false);lyr_Landsat7_SR_AllBands_1998_5.setVisible(false);lyr_Landsat7_SR_AllBands_1989_6.setVisible(false);lyr_Landsat3_MSS_AllBands_1980_7.setVisible(false);lyr_1980_FRG_8.setVisible(false);lyr_1989_FRG_9.setVisible(false);lyr_1998_FRG_10.setVisible(false);lyr_2008_FRG_11.setVisible(false);lyr_2018_FRG_12.setVisible(false);lyr_2025_FRG_13.setVisible(false);lyr_2026_FRG_14.setVisible(false);lyr_1980_FNF_15.setVisible(false);lyr_1989_FNF_16.setVisible(false);lyr_1998_FNF_17.setVisible(false);lyr_2008_FNF_18.setVisible(false);lyr_2018_FNF_19.setVisible(false);lyr_2025_FNF_20.setVisible(false);lyr_2026_FNF_21.setVisible(false);lyr_1989over1980_22.setVisible(false);lyr_1998over1989_23.setVisible(false);lyr_2008over1998_24.setVisible(false);lyr_2018over2008_25.setVisible(false);lyr_2025over2018_26.setVisible(false);lyr_2026over2025_27.setVisible(false);lyr_Forest_Type_2023_28.setVisible(false);lyr_Forest_cover_2023_1_29.setVisible(false);lyr_Seived_1980_30.setVisible(false);lyr_Seived_1989_31.setVisible(false);lyr_Seived_1998_32.setVisible(false);lyr_Seived_2008_33.setVisible(false);lyr_Seived_2018_34.setVisible(false);lyr_Seived_2025_35.setVisible(false);lyr_Seived_2026_36.setVisible(false);lyr_2026_37.setVisible(false);lyr_2025_38.setVisible(false);lyr_2018_39.setVisible(false);lyr_2008_40.setVisible(false);lyr_1998_41.setVisible(false);lyr_1989_42.setVisible(false);lyr_1980_43.setVisible(false);lyr_Greenwash_44.setVisible(false);lyr_StudyArea_45.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,group_FCC,group_FRAGSTAT,group_ForestNonForest,group_Vegetation_change,group_FSI,group_LULC,group_ForestCover,lyr_Greenwash_44,lyr_StudyArea_45];
lyr_Forest_Type_2023_28.set('fieldAliases', {'id': 'id', 'Type': 'Type', });
lyr_Forest_cover_2023_1_29.set('fieldAliases', {'Type': 'Type', 'ID': 'ID', });
lyr_Greenwash_44.set('fieldAliases', {'id': 'id', });
lyr_StudyArea_45.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'area': 'area', });
lyr_Forest_Type_2023_28.set('fieldImages', {'id': '', 'Type': '', });
lyr_Forest_cover_2023_1_29.set('fieldImages', {'Type': '', 'ID': '', });
lyr_Greenwash_44.set('fieldImages', {'id': '', });
lyr_StudyArea_45.set('fieldImages', {'Name': '', 'descriptio': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMo': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', 'area': '', });
lyr_Forest_Type_2023_28.set('fieldLabels', {'id': 'hidden field', 'Type': 'inline label - always visible', });
lyr_Forest_cover_2023_1_29.set('fieldLabels', {'Type': 'inline label - always visible', 'ID': 'hidden field', });
lyr_Greenwash_44.set('fieldLabels', {'id': 'no label', });
lyr_StudyArea_45.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'area': 'no label', });
lyr_StudyArea_45.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});