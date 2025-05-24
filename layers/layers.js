ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([-20037508.342789, -20037508.342789, 20037508.342789, 20037508.342789]);
var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_SuburbBoundary_1 = new ol.format.GeoJSON();
var features_SuburbBoundary_1 = format_SuburbBoundary_1.readFeatures(json_SuburbBoundary_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SuburbBoundary_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SuburbBoundary_1.addFeatures(features_SuburbBoundary_1);
var lyr_SuburbBoundary_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SuburbBoundary_1, 
                style: style_SuburbBoundary_1,
                popuplayertitle: 'Suburb Boundary ',
                interactive: true,
                title: '<img src="styles/legend/SuburbBoundary_1.png" /> Suburb Boundary '
            });
var format_TreatmentCentres_2 = new ol.format.GeoJSON();
var features_TreatmentCentres_2 = format_TreatmentCentres_2.readFeatures(json_TreatmentCentres_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TreatmentCentres_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TreatmentCentres_2.addFeatures(features_TreatmentCentres_2);
var lyr_TreatmentCentres_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TreatmentCentres_2, 
                style: style_TreatmentCentres_2,
                popuplayertitle: 'Treatment Centres ',
                interactive: true,
                title: '<img src="styles/legend/TreatmentCentres_2.png" /> Treatment Centres '
            });
var format_Dams_clipped_3 = new ol.format.GeoJSON();
var features_Dams_clipped_3 = format_Dams_clipped_3.readFeatures(json_Dams_clipped_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Dams_clipped_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Dams_clipped_3.addFeatures(features_Dams_clipped_3);
var lyr_Dams_clipped_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Dams_clipped_3, 
                style: style_Dams_clipped_3,
                popuplayertitle: 'Dams_clipped',
                interactive: true,
                title: '<img src="styles/legend/Dams_clipped_3.png" /> Dams_clipped'
            });
var format_Bulk_Water_Dams_4 = new ol.format.GeoJSON();
var features_Bulk_Water_Dams_4 = format_Bulk_Water_Dams_4.readFeatures(json_Bulk_Water_Dams_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bulk_Water_Dams_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bulk_Water_Dams_4.addFeatures(features_Bulk_Water_Dams_4);
var lyr_Bulk_Water_Dams_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bulk_Water_Dams_4, 
                style: style_Bulk_Water_Dams_4,
                popuplayertitle: 'Bulk_Water_Dams',
                interactive: true,
                title: '<img src="styles/legend/Bulk_Water_Dams_4.png" /> Bulk_Water_Dams'
            });
var format_WaterQualityperSamplingStation_5 = new ol.format.GeoJSON();
var features_WaterQualityperSamplingStation_5 = format_WaterQualityperSamplingStation_5.readFeatures(json_WaterQualityperSamplingStation_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WaterQualityperSamplingStation_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WaterQualityperSamplingStation_5.addFeatures(features_WaterQualityperSamplingStation_5);
var lyr_WaterQualityperSamplingStation_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WaterQualityperSamplingStation_5, 
                style: style_WaterQualityperSamplingStation_5,
                popuplayertitle: 'Water Quality per Sampling Station ',
                interactive: true,
    title: 'Water Quality per Sampling Station <br />\
    <img src="styles/legend/WaterQualityperSamplingStation_5_0.png" /> High<br />\
    <img src="styles/legend/WaterQualityperSamplingStation_5_1.png" /> Low<br />\
    <img src="styles/legend/WaterQualityperSamplingStation_5_2.png" /> Medium<br />' });
var format_InformalSettlements_6 = new ol.format.GeoJSON();
var features_InformalSettlements_6 = format_InformalSettlements_6.readFeatures(json_InformalSettlements_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_InformalSettlements_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_InformalSettlements_6.addFeatures(features_InformalSettlements_6);
var lyr_InformalSettlements_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_InformalSettlements_6, 
                style: style_InformalSettlements_6,
                popuplayertitle: 'Informal Settlements ',
                interactive: true,
                title: '<img src="styles/legend/InformalSettlements_6.png" /> Informal Settlements '
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_SuburbBoundary_1.setVisible(true);lyr_TreatmentCentres_2.setVisible(true);lyr_Dams_clipped_3.setVisible(true);lyr_Bulk_Water_Dams_4.setVisible(true);lyr_WaterQualityperSamplingStation_5.setVisible(true);lyr_InformalSettlements_6.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_SuburbBoundary_1,lyr_TreatmentCentres_2,lyr_Dams_clipped_3,lyr_Bulk_Water_Dams_4,lyr_WaterQualityperSamplingStation_5,lyr_InformalSettlements_6];
lyr_SuburbBoundary_1.set('fieldAliases', {'Suburb Name': 'Suburb Name', '2018 Consumption (kl/month)': '2018 Consumption (kl/month)', 'Flushable Toilets Connected to Sewage (%)': 'Flushable Toilets Connected to Sewage (%)', 'Consumer Type': 'Consumer Type', 'Average Monthly Water Bill': 'Average Monthly Water Bill', });
lyr_TreatmentCentres_2.set('fieldAliases', {'Suburb ': 'Suburb ', 'Country ': 'Country ', 'Treated Water (kL) ': 'Treated Water (kL) ', });
lyr_Dams_clipped_3.set('fieldAliases', {'id': 'id', 'official_p': 'official_p', 'official_1': 'official_1', 'official_2': 'official_2', 'official_3': 'official_3', 'official_4': 'official_4', 'official_5': 'official_5', 'official_6': 'official_6', 'official_7': 'official_7', 'official_8': 'official_8', 'official_9': 'official_9', 'officia_10': 'officia_10', 'officia_11': 'officia_11', 'officia_12': 'officia_12', 'officia_13': 'officia_13', 'officia_14': 'officia_14', 'officia_15': 'officia_15', 'officia_16': 'officia_16', 'officia_17': 'officia_17', 'officia_18': 'officia_18', 'officia_19': 'officia_19', 'officia_20': 'officia_20', 'officia_21': 'officia_21', });
lyr_Bulk_Water_Dams_4.set('fieldAliases', {'id': 'id', 'objectid': 'objectid', 'gis_key': 'gis_key', 'sap_key': 'sap_key', 'name': 'name', 'lctn': 'lctn', 'rvr': 'rvr', 'lu_ownr': 'lu_ownr', 'lu_oprt': 'lu_oprt', 'wtw': 'wtw', 'cpct': 'cpct', 'cpct_ds': 'cpct_ds', 'wall': 'wall', 'cnst': 'cnst', 'lu_sync': 'lu_sync', 'sap_obj_ty': 'sap_obj_ty', 'sap_descr': 'sap_descr', 'sap_usr_st': 'sap_usr_st', 'sap_floc_o': 'sap_floc_o', 'fin_key': 'fin_key', 'mnt_auth': 'mnt_auth', 'globalid': 'globalid', 'created_us': 'created_us', 'created_da': 'created_da', 'last_edite': 'last_edite', 'last_edi_1': 'last_edi_1', 'edit_date': 'edit_date', 'sync_date': 'sync_date', 'shape_leng': 'shape_leng', 'shape_area': 'shape_area', });
lyr_WaterQualityperSamplingStation_5.set('fieldAliases', {'Type of Sample ': 'Type of Sample ', 'Water Source ': 'Water Source ', 'Name of Water Source ': 'Name of Water Source ', 'Frequency of Monitoring ': 'Frequency of Monitoring ', 'Name of Sampling Station ': 'Name of Sampling Station ', 'Parameters ': 'Parameters ', 'Concentration of Parameter (/kl) ': 'Concentration of Parameter (/kl) ', 'Water Quality': 'Water Quality', });
lyr_InformalSettlements_6.set('fieldAliases', {'Region': 'Region', 'Suburb': 'Suburb', });
lyr_SuburbBoundary_1.set('fieldImages', {'Suburb Name': 'TextEdit', '2018 Consumption (kl/month)': 'TextEdit', 'Flushable Toilets Connected to Sewage (%)': 'TextEdit', 'Consumer Type': 'TextEdit', 'Average Monthly Water Bill': 'TextEdit', });
lyr_TreatmentCentres_2.set('fieldImages', {'Suburb ': 'TextEdit', 'Country ': 'TextEdit', 'Treated Water (kL) ': '', });
lyr_Dams_clipped_3.set('fieldImages', {'id': '', 'official_p': '', 'official_1': '', 'official_2': '', 'official_3': '', 'official_4': '', 'official_5': '', 'official_6': '', 'official_7': '', 'official_8': '', 'official_9': '', 'officia_10': '', 'officia_11': '', 'officia_12': '', 'officia_13': '', 'officia_14': '', 'officia_15': '', 'officia_16': '', 'officia_17': '', 'officia_18': '', 'officia_19': '', 'officia_20': '', 'officia_21': '', });
lyr_Bulk_Water_Dams_4.set('fieldImages', {'id': '', 'objectid': '', 'gis_key': '', 'sap_key': '', 'name': '', 'lctn': '', 'rvr': '', 'lu_ownr': '', 'lu_oprt': '', 'wtw': '', 'cpct': '', 'cpct_ds': '', 'wall': '', 'cnst': '', 'lu_sync': '', 'sap_obj_ty': '', 'sap_descr': '', 'sap_usr_st': '', 'sap_floc_o': '', 'fin_key': '', 'mnt_auth': '', 'globalid': '', 'created_us': '', 'created_da': '', 'last_edite': '', 'last_edi_1': '', 'edit_date': '', 'sync_date': '', 'shape_leng': '', 'shape_area': '', });
lyr_WaterQualityperSamplingStation_5.set('fieldImages', {'Type of Sample ': 'TextEdit', 'Water Source ': 'TextEdit', 'Name of Water Source ': 'TextEdit', 'Frequency of Monitoring ': 'TextEdit', 'Name of Sampling Station ': 'TextEdit', 'Parameters ': 'TextEdit', 'Concentration of Parameter (/kl) ': 'TextEdit', 'Water Quality': 'TextEdit', });
lyr_InformalSettlements_6.set('fieldImages', {'Region': 'TextEdit', 'Suburb': 'TextEdit', });
lyr_SuburbBoundary_1.set('fieldLabels', {'Suburb Name': 'inline label - always visible', '2018 Consumption (kl/month)': 'inline label - always visible', 'Flushable Toilets Connected to Sewage (%)': 'inline label - always visible', 'Consumer Type': 'inline label - always visible', 'Average Monthly Water Bill': 'inline label - always visible', });
lyr_TreatmentCentres_2.set('fieldLabels', {'Suburb ': 'no label', 'Country ': 'inline label - always visible', 'Treated Water (kL) ': 'no label', });
lyr_Dams_clipped_3.set('fieldLabels', {'id': 'no label', 'official_p': 'no label', 'official_1': 'no label', 'official_2': 'no label', 'official_3': 'no label', 'official_4': 'no label', 'official_5': 'no label', 'official_6': 'no label', 'official_7': 'no label', 'official_8': 'no label', 'official_9': 'no label', 'officia_10': 'no label', 'officia_11': 'no label', 'officia_12': 'no label', 'officia_13': 'no label', 'officia_14': 'no label', 'officia_15': 'no label', 'officia_16': 'no label', 'officia_17': 'no label', 'officia_18': 'no label', 'officia_19': 'no label', 'officia_20': 'no label', 'officia_21': 'no label', });
lyr_Bulk_Water_Dams_4.set('fieldLabels', {'id': 'no label', 'objectid': 'no label', 'gis_key': 'no label', 'sap_key': 'no label', 'name': 'no label', 'lctn': 'no label', 'rvr': 'no label', 'lu_ownr': 'no label', 'lu_oprt': 'no label', 'wtw': 'no label', 'cpct': 'no label', 'cpct_ds': 'no label', 'wall': 'no label', 'cnst': 'no label', 'lu_sync': 'no label', 'sap_obj_ty': 'no label', 'sap_descr': 'no label', 'sap_usr_st': 'no label', 'sap_floc_o': 'no label', 'fin_key': 'no label', 'mnt_auth': 'no label', 'globalid': 'no label', 'created_us': 'no label', 'created_da': 'no label', 'last_edite': 'no label', 'last_edi_1': 'no label', 'edit_date': 'no label', 'sync_date': 'no label', 'shape_leng': 'no label', 'shape_area': 'no label', });
lyr_WaterQualityperSamplingStation_5.set('fieldLabels', {'Type of Sample ': 'inline label - always visible', 'Water Source ': 'inline label - always visible', 'Name of Water Source ': 'inline label - always visible', 'Frequency of Monitoring ': 'inline label - always visible', 'Name of Sampling Station ': 'inline label - always visible', 'Parameters ': 'inline label - always visible', 'Concentration of Parameter (/kl) ': 'inline label - always visible', 'Water Quality': 'inline label - always visible', });
lyr_InformalSettlements_6.set('fieldLabels', {'Region': 'inline label - always visible', 'Suburb': 'inline label - always visible', });
lyr_InformalSettlements_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});