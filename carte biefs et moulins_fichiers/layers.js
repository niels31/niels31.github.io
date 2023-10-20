var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_SeineetMarnebrassecondairesregroups_1 = new ol.format.GeoJSON();
var features_SeineetMarnebrassecondairesregroups_1 = format_SeineetMarnebrassecondairesregroups_1.readFeatures(json_SeineetMarnebrassecondairesregroups_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SeineetMarnebrassecondairesregroups_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SeineetMarnebrassecondairesregroups_1.addFeatures(features_SeineetMarnebrassecondairesregroups_1);
var lyr_SeineetMarnebrassecondairesregroups_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SeineetMarnebrassecondairesregroups_1, 
                style: style_SeineetMarnebrassecondairesregroups_1,
                interactive: false,
                title: '<img src="styles/legend/SeineetMarnebrassecondairesregroups_1.png" /> Seine et Marne bras secondaires regroupés'
            });
var format_SeineetMarnetoponymesmoulinsforgesrouesscieries_2 = new ol.format.GeoJSON();
var features_SeineetMarnetoponymesmoulinsforgesrouesscieries_2 = format_SeineetMarnetoponymesmoulinsforgesrouesscieries_2.readFeatures(json_SeineetMarnetoponymesmoulinsforgesrouesscieries_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SeineetMarnetoponymesmoulinsforgesrouesscieries_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SeineetMarnetoponymesmoulinsforgesrouesscieries_2.addFeatures(features_SeineetMarnetoponymesmoulinsforgesrouesscieries_2);
var lyr_SeineetMarnetoponymesmoulinsforgesrouesscieries_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SeineetMarnetoponymesmoulinsforgesrouesscieries_2, 
                style: style_SeineetMarnetoponymesmoulinsforgesrouesscieries_2,
                interactive: true,
                title: '<img src="styles/legend/SeineetMarnetoponymesmoulinsforgesrouesscieries_2.png" /> Seine et Marne toponymes moulins, forges, roues, scieries'
            });
var format_CentreValdeLoirebrassecondairesregroups_3 = new ol.format.GeoJSON();
var features_CentreValdeLoirebrassecondairesregroups_3 = format_CentreValdeLoirebrassecondairesregroups_3.readFeatures(json_CentreValdeLoirebrassecondairesregroups_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CentreValdeLoirebrassecondairesregroups_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CentreValdeLoirebrassecondairesregroups_3.addFeatures(features_CentreValdeLoirebrassecondairesregroups_3);
var lyr_CentreValdeLoirebrassecondairesregroups_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CentreValdeLoirebrassecondairesregroups_3, 
                style: style_CentreValdeLoirebrassecondairesregroups_3,
                interactive: false,
                title: '<img src="styles/legend/CentreValdeLoirebrassecondairesregroups_3.png" /> Centre Val-de-Loire bras secondaires regroupés'
            });
var format_CentreValdeLoiretoponymesmoulinsforgesscieriesroues_4 = new ol.format.GeoJSON();
var features_CentreValdeLoiretoponymesmoulinsforgesscieriesroues_4 = format_CentreValdeLoiretoponymesmoulinsforgesscieriesroues_4.readFeatures(json_CentreValdeLoiretoponymesmoulinsforgesscieriesroues_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CentreValdeLoiretoponymesmoulinsforgesscieriesroues_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CentreValdeLoiretoponymesmoulinsforgesscieriesroues_4.addFeatures(features_CentreValdeLoiretoponymesmoulinsforgesscieriesroues_4);
var lyr_CentreValdeLoiretoponymesmoulinsforgesscieriesroues_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CentreValdeLoiretoponymesmoulinsforgesscieriesroues_4, 
                style: style_CentreValdeLoiretoponymesmoulinsforgesscieriesroues_4,
                interactive: true,
                title: '<img src="styles/legend/CentreValdeLoiretoponymesmoulinsforgesscieriesroues_4.png" /> Centre Val-de-Loire toponymes moulins, forges, scieries, roues'
            });
var format_Bourgognebrassecondairesregroups_5 = new ol.format.GeoJSON();
var features_Bourgognebrassecondairesregroups_5 = format_Bourgognebrassecondairesregroups_5.readFeatures(json_Bourgognebrassecondairesregroups_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bourgognebrassecondairesregroups_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bourgognebrassecondairesregroups_5.addFeatures(features_Bourgognebrassecondairesregroups_5);
var lyr_Bourgognebrassecondairesregroups_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Bourgognebrassecondairesregroups_5, 
                style: style_Bourgognebrassecondairesregroups_5,
                interactive: false,
                title: '<img src="styles/legend/Bourgognebrassecondairesregroups_5.png" /> Bourgogne bras secondaires regroupés'
            });
var format_Bourgognetoponymesmoulinsforgesscieriesroues_6 = new ol.format.GeoJSON();
var features_Bourgognetoponymesmoulinsforgesscieriesroues_6 = format_Bourgognetoponymesmoulinsforgesscieriesroues_6.readFeatures(json_Bourgognetoponymesmoulinsforgesscieriesroues_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bourgognetoponymesmoulinsforgesscieriesroues_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bourgognetoponymesmoulinsforgesscieriesroues_6.addFeatures(features_Bourgognetoponymesmoulinsforgesscieriesroues_6);
var lyr_Bourgognetoponymesmoulinsforgesscieriesroues_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Bourgognetoponymesmoulinsforgesscieriesroues_6, 
                style: style_Bourgognetoponymesmoulinsforgesscieriesroues_6,
                interactive: true,
                title: '<img src="styles/legend/Bourgognetoponymesmoulinsforgesscieriesroues_6.png" /> Bourgogne toponymes moulins, forges, scieries, roues'
            });
var format_essonebrassecondairesregroups_7 = new ol.format.GeoJSON();
var features_essonebrassecondairesregroups_7 = format_essonebrassecondairesregroups_7.readFeatures(json_essonebrassecondairesregroups_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_essonebrassecondairesregroups_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_essonebrassecondairesregroups_7.addFeatures(features_essonebrassecondairesregroups_7);
var lyr_essonebrassecondairesregroups_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_essonebrassecondairesregroups_7, 
                style: style_essonebrassecondairesregroups_7,
                interactive: false,
                title: '<img src="styles/legend/essonebrassecondairesregroups_7.png" /> essone bras secondaires regroupés'
            });
var format_essonetoponymesmoulinsforgesrouesscierie_8 = new ol.format.GeoJSON();
var features_essonetoponymesmoulinsforgesrouesscierie_8 = format_essonetoponymesmoulinsforgesrouesscierie_8.readFeatures(json_essonetoponymesmoulinsforgesrouesscierie_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_essonetoponymesmoulinsforgesrouesscierie_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_essonetoponymesmoulinsforgesrouesscierie_8.addFeatures(features_essonetoponymesmoulinsforgesrouesscierie_8);
var lyr_essonetoponymesmoulinsforgesrouesscierie_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_essonetoponymesmoulinsforgesrouesscierie_8, 
                style: style_essonetoponymesmoulinsforgesrouesscierie_8,
                interactive: true,
                title: '<img src="styles/legend/essonetoponymesmoulinsforgesrouesscierie_8.png" /> essone toponymes moulins, forges, roues, scierie'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_SeineetMarnebrassecondairesregroups_1.setVisible(true);lyr_SeineetMarnetoponymesmoulinsforgesrouesscieries_2.setVisible(true);lyr_CentreValdeLoirebrassecondairesregroups_3.setVisible(true);lyr_CentreValdeLoiretoponymesmoulinsforgesscieriesroues_4.setVisible(true);lyr_Bourgognebrassecondairesregroups_5.setVisible(true);lyr_Bourgognetoponymesmoulinsforgesscieriesroues_6.setVisible(true);lyr_essonebrassecondairesregroups_7.setVisible(true);lyr_essonetoponymesmoulinsforgesrouesscierie_8.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_SeineetMarnebrassecondairesregroups_1,lyr_SeineetMarnetoponymesmoulinsforgesrouesscieries_2,lyr_CentreValdeLoirebrassecondairesregroups_3,lyr_CentreValdeLoiretoponymesmoulinsforgesscieriesroues_4,lyr_Bourgognebrassecondairesregroups_5,lyr_Bourgognetoponymesmoulinsforgesscieriesroues_6,lyr_essonebrassecondairesregroups_7,lyr_essonetoponymesmoulinsforgesrouesscierie_8];
lyr_SeineetMarnebrassecondairesregroups_1.set('fieldAliases', {'ID': 'ID', 'CODE_HYDRO': 'CODE_HYDRO', 'CODE_PAYS': 'CODE_PAYS', 'NATURE': 'NATURE', 'FICTIF': 'FICTIF', 'POS_SOL': 'POS_SOL', 'ETAT': 'ETAT', 'DATE_CREAT': 'DATE_CREAT', 'DATE_MAJ': 'DATE_MAJ', 'DATE_APP': 'DATE_APP', 'DATE_CONF': 'DATE_CONF', 'SOURCE': 'SOURCE', 'ID_SOURCE': 'ID_SOURCE', 'ACQU_PLANI': 'ACQU_PLANI', 'PREC_PLANI': 'PREC_PLANI', 'ACQU_ALTI': 'ACQU_ALTI', 'PREC_ALTI': 'PREC_ALTI', 'SRC_COORD': 'SRC_COORD', 'SRC_ALTI': 'SRC_ALTI', 'STATUT': 'STATUT', 'PERSISTANC': 'PERSISTANC', 'FOSSE': 'FOSSE', 'NAVIGABL': 'NAVIGABL', 'SALINITE': 'SALINITE', 'NUM_ORDRE': 'NUM_ORDRE', 'CLA_ORDRE': 'CLA_ORDRE', 'ORIGINE': 'ORIGINE', 'PER_ORDRE': 'PER_ORDRE', 'SENS_ECOUL': 'SENS_ECOUL', 'RES_COULAN': 'RES_COULAN', 'DELIMIT': 'DELIMIT', 'LARGEUR': 'LARGEUR', 'BRAS': 'BRAS', 'COMMENT': 'COMMENT', 'CODE_CARTH': 'CODE_CARTH', 'ID_C_EAU': 'ID_C_EAU', 'ID_S_HYDRO': 'ID_S_HYDRO', 'ID_ENT_TR': 'ID_ENT_TR', 'NOM_C_EAU': 'NOM_C_EAU', 'NOM_ENT_TR': 'NOM_ENT_TR', });
lyr_SeineetMarnetoponymesmoulinsforgesrouesscieries_2.set('fieldAliases', {'ID': 'ID', 'CLASSE': 'CLASSE', 'NATURE': 'NATURE', 'GRAPHIE': 'GRAPHIE', 'SOURCE': 'SOURCE', 'STATUT_TOP': 'STATUT_TOP', 'DATE_TOP': 'DATE_TOP', 'LANGUE': 'LANGUE', });
lyr_CentreValdeLoirebrassecondairesregroups_3.set('fieldAliases', {'ID': 'ID', 'CODE_HYDRO': 'CODE_HYDRO', 'CODE_PAYS': 'CODE_PAYS', 'NATURE': 'NATURE', 'FICTIF': 'FICTIF', 'POS_SOL': 'POS_SOL', 'ETAT': 'ETAT', 'DATE_CREAT': 'DATE_CREAT', 'DATE_MAJ': 'DATE_MAJ', 'DATE_APP': 'DATE_APP', 'DATE_CONF': 'DATE_CONF', 'SOURCE': 'SOURCE', 'ID_SOURCE': 'ID_SOURCE', 'ACQU_PLANI': 'ACQU_PLANI', 'PREC_PLANI': 'PREC_PLANI', 'ACQU_ALTI': 'ACQU_ALTI', 'PREC_ALTI': 'PREC_ALTI', 'SRC_COORD': 'SRC_COORD', 'SRC_ALTI': 'SRC_ALTI', 'STATUT': 'STATUT', 'PERSISTANC': 'PERSISTANC', 'FOSSE': 'FOSSE', 'NAVIGABL': 'NAVIGABL', 'SALINITE': 'SALINITE', 'NUM_ORDRE': 'NUM_ORDRE', 'CLA_ORDRE': 'CLA_ORDRE', 'ORIGINE': 'ORIGINE', 'PER_ORDRE': 'PER_ORDRE', 'SENS_ECOUL': 'SENS_ECOUL', 'RES_COULAN': 'RES_COULAN', 'DELIMIT': 'DELIMIT', 'LARGEUR': 'LARGEUR', 'BRAS': 'BRAS', 'COMMENT': 'COMMENT', 'CODE_CARTH': 'CODE_CARTH', 'ID_C_EAU': 'ID_C_EAU', 'ID_S_HYDRO': 'ID_S_HYDRO', 'ID_ENT_TR': 'ID_ENT_TR', 'NOM_C_EAU': 'NOM_C_EAU', 'NOM_ENT_TR': 'NOM_ENT_TR', });
lyr_CentreValdeLoiretoponymesmoulinsforgesscieriesroues_4.set('fieldAliases', {'ID': 'ID', 'CLASSE': 'CLASSE', 'NATURE': 'NATURE', 'GRAPHIE': 'GRAPHIE', 'SOURCE': 'SOURCE', 'STATUT_TOP': 'STATUT_TOP', 'DATE_TOP': 'DATE_TOP', 'LANGUE': 'LANGUE', });
lyr_Bourgognebrassecondairesregroups_5.set('fieldAliases', {'ID': 'ID', 'CODE_HYDRO': 'CODE_HYDRO', 'CODE_PAYS': 'CODE_PAYS', 'NATURE': 'NATURE', 'FICTIF': 'FICTIF', 'POS_SOL': 'POS_SOL', 'ETAT': 'ETAT', 'DATE_CREAT': 'DATE_CREAT', 'DATE_MAJ': 'DATE_MAJ', 'DATE_APP': 'DATE_APP', 'DATE_CONF': 'DATE_CONF', 'SOURCE': 'SOURCE', 'ID_SOURCE': 'ID_SOURCE', 'ACQU_PLANI': 'ACQU_PLANI', 'PREC_PLANI': 'PREC_PLANI', 'ACQU_ALTI': 'ACQU_ALTI', 'PREC_ALTI': 'PREC_ALTI', 'SRC_COORD': 'SRC_COORD', 'SRC_ALTI': 'SRC_ALTI', 'STATUT': 'STATUT', 'PERSISTANC': 'PERSISTANC', 'FOSSE': 'FOSSE', 'NAVIGABL': 'NAVIGABL', 'SALINITE': 'SALINITE', 'NUM_ORDRE': 'NUM_ORDRE', 'CLA_ORDRE': 'CLA_ORDRE', 'ORIGINE': 'ORIGINE', 'PER_ORDRE': 'PER_ORDRE', 'SENS_ECOUL': 'SENS_ECOUL', 'RES_COULAN': 'RES_COULAN', 'DELIMIT': 'DELIMIT', 'LARGEUR': 'LARGEUR', 'BRAS': 'BRAS', 'COMMENT': 'COMMENT', 'CODE_CARTH': 'CODE_CARTH', 'ID_C_EAU': 'ID_C_EAU', 'ID_S_HYDRO': 'ID_S_HYDRO', 'ID_ENT_TR': 'ID_ENT_TR', 'NOM_C_EAU': 'NOM_C_EAU', 'NOM_ENT_TR': 'NOM_ENT_TR', });
lyr_Bourgognetoponymesmoulinsforgesscieriesroues_6.set('fieldAliases', {'ID': 'ID', 'CLASSE': 'CLASSE', 'NATURE': 'NATURE', 'GRAPHIE': 'GRAPHIE', 'SOURCE': 'SOURCE', 'STATUT_TOP': 'STATUT_TOP', 'DATE_TOP': 'DATE_TOP', 'LANGUE': 'LANGUE', });
lyr_essonebrassecondairesregroups_7.set('fieldAliases', {'ID': 'ID', 'CODE_HYDRO': 'CODE_HYDRO', 'CODE_PAYS': 'CODE_PAYS', 'NATURE': 'NATURE', 'FICTIF': 'FICTIF', 'POS_SOL': 'POS_SOL', 'ETAT': 'ETAT', 'DATE_CREAT': 'DATE_CREAT', 'DATE_MAJ': 'DATE_MAJ', 'DATE_APP': 'DATE_APP', 'DATE_CONF': 'DATE_CONF', 'SOURCE': 'SOURCE', 'ID_SOURCE': 'ID_SOURCE', 'ACQU_PLANI': 'ACQU_PLANI', 'PREC_PLANI': 'PREC_PLANI', 'ACQU_ALTI': 'ACQU_ALTI', 'PREC_ALTI': 'PREC_ALTI', 'SRC_COORD': 'SRC_COORD', 'SRC_ALTI': 'SRC_ALTI', 'STATUT': 'STATUT', 'PERSISTANC': 'PERSISTANC', 'FOSSE': 'FOSSE', 'NAVIGABL': 'NAVIGABL', 'SALINITE': 'SALINITE', 'NUM_ORDRE': 'NUM_ORDRE', 'CLA_ORDRE': 'CLA_ORDRE', 'ORIGINE': 'ORIGINE', 'PER_ORDRE': 'PER_ORDRE', 'SENS_ECOUL': 'SENS_ECOUL', 'RES_COULAN': 'RES_COULAN', 'DELIMIT': 'DELIMIT', 'LARGEUR': 'LARGEUR', 'BRAS': 'BRAS', 'COMMENT': 'COMMENT', 'CODE_CARTH': 'CODE_CARTH', 'ID_C_EAU': 'ID_C_EAU', 'ID_S_HYDRO': 'ID_S_HYDRO', 'ID_ENT_TR': 'ID_ENT_TR', 'NOM_C_EAU': 'NOM_C_EAU', 'NOM_ENT_TR': 'NOM_ENT_TR', });
lyr_essonetoponymesmoulinsforgesrouesscierie_8.set('fieldAliases', {'ID': 'ID', 'CLASSE': 'CLASSE', 'NATURE': 'NATURE', 'GRAPHIE': 'GRAPHIE', 'SOURCE': 'SOURCE', 'STATUT_TOP': 'STATUT_TOP', 'DATE_TOP': 'DATE_TOP', 'LANGUE': 'LANGUE', });
lyr_SeineetMarnebrassecondairesregroups_1.set('fieldImages', {'ID': '', 'CODE_HYDRO': '', 'CODE_PAYS': '', 'NATURE': '', 'FICTIF': '', 'POS_SOL': '', 'ETAT': '', 'DATE_CREAT': '', 'DATE_MAJ': '', 'DATE_APP': '', 'DATE_CONF': '', 'SOURCE': '', 'ID_SOURCE': '', 'ACQU_PLANI': '', 'PREC_PLANI': '', 'ACQU_ALTI': '', 'PREC_ALTI': '', 'SRC_COORD': '', 'SRC_ALTI': '', 'STATUT': '', 'PERSISTANC': '', 'FOSSE': '', 'NAVIGABL': '', 'SALINITE': '', 'NUM_ORDRE': '', 'CLA_ORDRE': '', 'ORIGINE': '', 'PER_ORDRE': '', 'SENS_ECOUL': '', 'RES_COULAN': '', 'DELIMIT': '', 'LARGEUR': '', 'BRAS': '', 'COMMENT': '', 'CODE_CARTH': '', 'ID_C_EAU': '', 'ID_S_HYDRO': '', 'ID_ENT_TR': '', 'NOM_C_EAU': '', 'NOM_ENT_TR': '', });
lyr_SeineetMarnetoponymesmoulinsforgesrouesscieries_2.set('fieldImages', {'ID': 'TextEdit', 'CLASSE': 'TextEdit', 'NATURE': 'TextEdit', 'GRAPHIE': 'TextEdit', 'SOURCE': 'TextEdit', 'STATUT_TOP': 'TextEdit', 'DATE_TOP': 'DateTime', 'LANGUE': 'TextEdit', });
lyr_CentreValdeLoirebrassecondairesregroups_3.set('fieldImages', {'ID': '', 'CODE_HYDRO': '', 'CODE_PAYS': '', 'NATURE': '', 'FICTIF': '', 'POS_SOL': '', 'ETAT': '', 'DATE_CREAT': '', 'DATE_MAJ': '', 'DATE_APP': '', 'DATE_CONF': '', 'SOURCE': '', 'ID_SOURCE': '', 'ACQU_PLANI': '', 'PREC_PLANI': '', 'ACQU_ALTI': '', 'PREC_ALTI': '', 'SRC_COORD': '', 'SRC_ALTI': '', 'STATUT': '', 'PERSISTANC': '', 'FOSSE': '', 'NAVIGABL': '', 'SALINITE': '', 'NUM_ORDRE': '', 'CLA_ORDRE': '', 'ORIGINE': '', 'PER_ORDRE': '', 'SENS_ECOUL': '', 'RES_COULAN': '', 'DELIMIT': '', 'LARGEUR': '', 'BRAS': '', 'COMMENT': '', 'CODE_CARTH': '', 'ID_C_EAU': '', 'ID_S_HYDRO': '', 'ID_ENT_TR': '', 'NOM_C_EAU': '', 'NOM_ENT_TR': '', });
lyr_CentreValdeLoiretoponymesmoulinsforgesscieriesroues_4.set('fieldImages', {'ID': 'TextEdit', 'CLASSE': 'TextEdit', 'NATURE': 'TextEdit', 'GRAPHIE': 'TextEdit', 'SOURCE': 'TextEdit', 'STATUT_TOP': 'TextEdit', 'DATE_TOP': 'DateTime', 'LANGUE': 'TextEdit', });
lyr_Bourgognebrassecondairesregroups_5.set('fieldImages', {'ID': '', 'CODE_HYDRO': '', 'CODE_PAYS': '', 'NATURE': '', 'FICTIF': '', 'POS_SOL': '', 'ETAT': '', 'DATE_CREAT': '', 'DATE_MAJ': '', 'DATE_APP': '', 'DATE_CONF': '', 'SOURCE': '', 'ID_SOURCE': '', 'ACQU_PLANI': '', 'PREC_PLANI': '', 'ACQU_ALTI': '', 'PREC_ALTI': '', 'SRC_COORD': '', 'SRC_ALTI': '', 'STATUT': '', 'PERSISTANC': '', 'FOSSE': '', 'NAVIGABL': '', 'SALINITE': '', 'NUM_ORDRE': '', 'CLA_ORDRE': '', 'ORIGINE': '', 'PER_ORDRE': '', 'SENS_ECOUL': '', 'RES_COULAN': '', 'DELIMIT': '', 'LARGEUR': '', 'BRAS': '', 'COMMENT': '', 'CODE_CARTH': '', 'ID_C_EAU': '', 'ID_S_HYDRO': '', 'ID_ENT_TR': '', 'NOM_C_EAU': '', 'NOM_ENT_TR': '', });
lyr_Bourgognetoponymesmoulinsforgesscieriesroues_6.set('fieldImages', {'ID': 'TextEdit', 'CLASSE': 'TextEdit', 'NATURE': 'TextEdit', 'GRAPHIE': 'TextEdit', 'SOURCE': 'TextEdit', 'STATUT_TOP': 'TextEdit', 'DATE_TOP': 'DateTime', 'LANGUE': 'TextEdit', });
lyr_essonebrassecondairesregroups_7.set('fieldImages', {'ID': '', 'CODE_HYDRO': '', 'CODE_PAYS': '', 'NATURE': '', 'FICTIF': '', 'POS_SOL': '', 'ETAT': '', 'DATE_CREAT': '', 'DATE_MAJ': '', 'DATE_APP': '', 'DATE_CONF': '', 'SOURCE': '', 'ID_SOURCE': '', 'ACQU_PLANI': '', 'PREC_PLANI': '', 'ACQU_ALTI': '', 'PREC_ALTI': '', 'SRC_COORD': '', 'SRC_ALTI': '', 'STATUT': '', 'PERSISTANC': '', 'FOSSE': '', 'NAVIGABL': '', 'SALINITE': '', 'NUM_ORDRE': '', 'CLA_ORDRE': '', 'ORIGINE': '', 'PER_ORDRE': '', 'SENS_ECOUL': '', 'RES_COULAN': '', 'DELIMIT': '', 'LARGEUR': '', 'BRAS': '', 'COMMENT': '', 'CODE_CARTH': '', 'ID_C_EAU': '', 'ID_S_HYDRO': '', 'ID_ENT_TR': '', 'NOM_C_EAU': '', 'NOM_ENT_TR': '', });
lyr_essonetoponymesmoulinsforgesrouesscierie_8.set('fieldImages', {'ID': 'TextEdit', 'CLASSE': 'TextEdit', 'NATURE': 'TextEdit', 'GRAPHIE': 'TextEdit', 'SOURCE': 'TextEdit', 'STATUT_TOP': 'TextEdit', 'DATE_TOP': 'DateTime', 'LANGUE': 'TextEdit', });
lyr_SeineetMarnebrassecondairesregroups_1.set('fieldLabels', {'ID': 'no label', 'CODE_HYDRO': 'no label', 'CODE_PAYS': 'no label', 'NATURE': 'no label', 'FICTIF': 'no label', 'POS_SOL': 'no label', 'ETAT': 'no label', 'DATE_CREAT': 'no label', 'DATE_MAJ': 'no label', 'DATE_APP': 'no label', 'DATE_CONF': 'no label', 'SOURCE': 'no label', 'ID_SOURCE': 'no label', 'ACQU_PLANI': 'no label', 'PREC_PLANI': 'no label', 'ACQU_ALTI': 'no label', 'PREC_ALTI': 'no label', 'SRC_COORD': 'no label', 'SRC_ALTI': 'no label', 'STATUT': 'no label', 'PERSISTANC': 'no label', 'FOSSE': 'no label', 'NAVIGABL': 'no label', 'SALINITE': 'no label', 'NUM_ORDRE': 'no label', 'CLA_ORDRE': 'no label', 'ORIGINE': 'no label', 'PER_ORDRE': 'no label', 'SENS_ECOUL': 'no label', 'RES_COULAN': 'no label', 'DELIMIT': 'no label', 'LARGEUR': 'no label', 'BRAS': 'no label', 'COMMENT': 'no label', 'CODE_CARTH': 'no label', 'ID_C_EAU': 'no label', 'ID_S_HYDRO': 'no label', 'ID_ENT_TR': 'no label', 'NOM_C_EAU': 'no label', 'NOM_ENT_TR': 'no label', });
lyr_SeineetMarnetoponymesmoulinsforgesrouesscieries_2.set('fieldLabels', {'ID': 'no label', 'CLASSE': 'no label', 'NATURE': 'no label', 'GRAPHIE': 'inline label', 'SOURCE': 'no label', 'STATUT_TOP': 'no label', 'DATE_TOP': 'no label', 'LANGUE': 'no label', });
lyr_CentreValdeLoirebrassecondairesregroups_3.set('fieldLabels', {'ID': 'no label', 'CODE_HYDRO': 'no label', 'CODE_PAYS': 'no label', 'NATURE': 'no label', 'FICTIF': 'no label', 'POS_SOL': 'no label', 'ETAT': 'no label', 'DATE_CREAT': 'no label', 'DATE_MAJ': 'no label', 'DATE_APP': 'no label', 'DATE_CONF': 'no label', 'SOURCE': 'no label', 'ID_SOURCE': 'no label', 'ACQU_PLANI': 'no label', 'PREC_PLANI': 'no label', 'ACQU_ALTI': 'no label', 'PREC_ALTI': 'no label', 'SRC_COORD': 'no label', 'SRC_ALTI': 'no label', 'STATUT': 'no label', 'PERSISTANC': 'no label', 'FOSSE': 'no label', 'NAVIGABL': 'no label', 'SALINITE': 'no label', 'NUM_ORDRE': 'no label', 'CLA_ORDRE': 'no label', 'ORIGINE': 'no label', 'PER_ORDRE': 'no label', 'SENS_ECOUL': 'no label', 'RES_COULAN': 'no label', 'DELIMIT': 'no label', 'LARGEUR': 'no label', 'BRAS': 'no label', 'COMMENT': 'no label', 'CODE_CARTH': 'no label', 'ID_C_EAU': 'no label', 'ID_S_HYDRO': 'no label', 'ID_ENT_TR': 'no label', 'NOM_C_EAU': 'no label', 'NOM_ENT_TR': 'no label', });
lyr_CentreValdeLoiretoponymesmoulinsforgesscieriesroues_4.set('fieldLabels', {'ID': 'no label', 'CLASSE': 'no label', 'NATURE': 'no label', 'GRAPHIE': 'inline label', 'SOURCE': 'no label', 'STATUT_TOP': 'no label', 'DATE_TOP': 'no label', 'LANGUE': 'no label', });
lyr_Bourgognebrassecondairesregroups_5.set('fieldLabels', {'ID': 'no label', 'CODE_HYDRO': 'no label', 'CODE_PAYS': 'no label', 'NATURE': 'no label', 'FICTIF': 'no label', 'POS_SOL': 'no label', 'ETAT': 'no label', 'DATE_CREAT': 'no label', 'DATE_MAJ': 'no label', 'DATE_APP': 'no label', 'DATE_CONF': 'no label', 'SOURCE': 'no label', 'ID_SOURCE': 'no label', 'ACQU_PLANI': 'no label', 'PREC_PLANI': 'no label', 'ACQU_ALTI': 'no label', 'PREC_ALTI': 'no label', 'SRC_COORD': 'no label', 'SRC_ALTI': 'no label', 'STATUT': 'no label', 'PERSISTANC': 'no label', 'FOSSE': 'no label', 'NAVIGABL': 'no label', 'SALINITE': 'no label', 'NUM_ORDRE': 'no label', 'CLA_ORDRE': 'no label', 'ORIGINE': 'no label', 'PER_ORDRE': 'no label', 'SENS_ECOUL': 'no label', 'RES_COULAN': 'no label', 'DELIMIT': 'no label', 'LARGEUR': 'no label', 'BRAS': 'no label', 'COMMENT': 'no label', 'CODE_CARTH': 'no label', 'ID_C_EAU': 'no label', 'ID_S_HYDRO': 'no label', 'ID_ENT_TR': 'no label', 'NOM_C_EAU': 'no label', 'NOM_ENT_TR': 'no label', });
lyr_Bourgognetoponymesmoulinsforgesscieriesroues_6.set('fieldLabels', {'ID': 'inline label', 'CLASSE': 'no label', 'NATURE': 'no label', 'GRAPHIE': 'inline label', 'SOURCE': 'no label', 'STATUT_TOP': 'no label', 'DATE_TOP': 'no label', 'LANGUE': 'no label', });
lyr_essonebrassecondairesregroups_7.set('fieldLabels', {'ID': 'no label', 'CODE_HYDRO': 'no label', 'CODE_PAYS': 'no label', 'NATURE': 'no label', 'FICTIF': 'no label', 'POS_SOL': 'no label', 'ETAT': 'no label', 'DATE_CREAT': 'no label', 'DATE_MAJ': 'no label', 'DATE_APP': 'no label', 'DATE_CONF': 'no label', 'SOURCE': 'no label', 'ID_SOURCE': 'no label', 'ACQU_PLANI': 'no label', 'PREC_PLANI': 'no label', 'ACQU_ALTI': 'no label', 'PREC_ALTI': 'no label', 'SRC_COORD': 'no label', 'SRC_ALTI': 'no label', 'STATUT': 'no label', 'PERSISTANC': 'no label', 'FOSSE': 'no label', 'NAVIGABL': 'no label', 'SALINITE': 'no label', 'NUM_ORDRE': 'no label', 'CLA_ORDRE': 'no label', 'ORIGINE': 'no label', 'PER_ORDRE': 'no label', 'SENS_ECOUL': 'no label', 'RES_COULAN': 'no label', 'DELIMIT': 'no label', 'LARGEUR': 'no label', 'BRAS': 'no label', 'COMMENT': 'no label', 'CODE_CARTH': 'no label', 'ID_C_EAU': 'no label', 'ID_S_HYDRO': 'no label', 'ID_ENT_TR': 'no label', 'NOM_C_EAU': 'no label', 'NOM_ENT_TR': 'no label', });
lyr_essonetoponymesmoulinsforgesrouesscierie_8.set('fieldLabels', {'ID': 'no label', 'CLASSE': 'no label', 'NATURE': 'no label', 'GRAPHIE': 'inline label', 'SOURCE': 'no label', 'STATUT_TOP': 'no label', 'DATE_TOP': 'no label', 'LANGUE': 'no label', });
lyr_essonetoponymesmoulinsforgesrouesscierie_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});