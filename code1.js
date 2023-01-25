gdjs.Wave_32MapCode = {};
gdjs.Wave_32MapCode.forEachIndex2 = 0;

gdjs.Wave_32MapCode.forEachObjects2 = [];

gdjs.Wave_32MapCode.forEachTemporary2 = null;

gdjs.Wave_32MapCode.forEachTotalCount2 = 0;

gdjs.Wave_32MapCode.GDTopDownMapObjects1= [];
gdjs.Wave_32MapCode.GDTopDownMapObjects2= [];
gdjs.Wave_32MapCode.GDTopDownMapObjects3= [];
gdjs.Wave_32MapCode.GDTopDownMapObjects4= [];
gdjs.Wave_32MapCode.GDCameraRoomObjects1= [];
gdjs.Wave_32MapCode.GDCameraRoomObjects2= [];
gdjs.Wave_32MapCode.GDCameraRoomObjects3= [];
gdjs.Wave_32MapCode.GDCameraRoomObjects4= [];
gdjs.Wave_32MapCode.GDCharacterObjects1= [];
gdjs.Wave_32MapCode.GDCharacterObjects2= [];
gdjs.Wave_32MapCode.GDCharacterObjects3= [];
gdjs.Wave_32MapCode.GDCharacterObjects4= [];
gdjs.Wave_32MapCode.GDBarriersObjects1= [];
gdjs.Wave_32MapCode.GDBarriersObjects2= [];
gdjs.Wave_32MapCode.GDBarriersObjects3= [];
gdjs.Wave_32MapCode.GDBarriersObjects4= [];
gdjs.Wave_32MapCode.GDLaserObjects1= [];
gdjs.Wave_32MapCode.GDLaserObjects2= [];
gdjs.Wave_32MapCode.GDLaserObjects3= [];
gdjs.Wave_32MapCode.GDLaserObjects4= [];
gdjs.Wave_32MapCode.GDMinerObjects1= [];
gdjs.Wave_32MapCode.GDMinerObjects2= [];
gdjs.Wave_32MapCode.GDMinerObjects3= [];
gdjs.Wave_32MapCode.GDMinerObjects4= [];
gdjs.Wave_32MapCode.GDNewSpriteObjects1= [];
gdjs.Wave_32MapCode.GDNewSpriteObjects2= [];
gdjs.Wave_32MapCode.GDNewSpriteObjects3= [];
gdjs.Wave_32MapCode.GDNewSpriteObjects4= [];
gdjs.Wave_32MapCode.GDNewSprite2Objects1= [];
gdjs.Wave_32MapCode.GDNewSprite2Objects2= [];
gdjs.Wave_32MapCode.GDNewSprite2Objects3= [];
gdjs.Wave_32MapCode.GDNewSprite2Objects4= [];
gdjs.Wave_32MapCode.GDHealthBarObjects1= [];
gdjs.Wave_32MapCode.GDHealthBarObjects2= [];
gdjs.Wave_32MapCode.GDHealthBarObjects3= [];
gdjs.Wave_32MapCode.GDHealthBarObjects4= [];
gdjs.Wave_32MapCode.GDEnemySpawnerObjects1= [];
gdjs.Wave_32MapCode.GDEnemySpawnerObjects2= [];
gdjs.Wave_32MapCode.GDEnemySpawnerObjects3= [];
gdjs.Wave_32MapCode.GDEnemySpawnerObjects4= [];
gdjs.Wave_32MapCode.GDScoreBoardObjects1= [];
gdjs.Wave_32MapCode.GDScoreBoardObjects2= [];
gdjs.Wave_32MapCode.GDScoreBoardObjects3= [];
gdjs.Wave_32MapCode.GDScoreBoardObjects4= [];
gdjs.Wave_32MapCode.GDKillsObjects1= [];
gdjs.Wave_32MapCode.GDKillsObjects2= [];
gdjs.Wave_32MapCode.GDKillsObjects3= [];
gdjs.Wave_32MapCode.GDKillsObjects4= [];
gdjs.Wave_32MapCode.GDSheildObjects1= [];
gdjs.Wave_32MapCode.GDSheildObjects2= [];
gdjs.Wave_32MapCode.GDSheildObjects3= [];
gdjs.Wave_32MapCode.GDSheildObjects4= [];

gdjs.Wave_32MapCode.conditionTrue_0 = {val:false};
gdjs.Wave_32MapCode.condition0IsTrue_0 = {val:false};
gdjs.Wave_32MapCode.condition1IsTrue_0 = {val:false};
gdjs.Wave_32MapCode.condition2IsTrue_0 = {val:false};
gdjs.Wave_32MapCode.conditionTrue_1 = {val:false};
gdjs.Wave_32MapCode.condition0IsTrue_1 = {val:false};
gdjs.Wave_32MapCode.condition1IsTrue_1 = {val:false};
gdjs.Wave_32MapCode.condition2IsTrue_1 = {val:false};
gdjs.Wave_32MapCode.conditionTrue_2 = {val:false};
gdjs.Wave_32MapCode.condition0IsTrue_2 = {val:false};
gdjs.Wave_32MapCode.condition1IsTrue_2 = {val:false};
gdjs.Wave_32MapCode.condition2IsTrue_2 = {val:false};


gdjs.Wave_32MapCode.mapOfGDgdjs_46Wave_9532MapCode_46GDHealthBarObjects1Objects = Hashtable.newFrom({"HealthBar": gdjs.Wave_32MapCode.GDHealthBarObjects1});
gdjs.Wave_32MapCode.mapOfGDgdjs_46Wave_9532MapCode_46GDNewSprite2Objects1Objects = Hashtable.newFrom({"NewSprite2": gdjs.Wave_32MapCode.GDNewSprite2Objects1});
gdjs.Wave_32MapCode.mapOfGDgdjs_46Wave_9532MapCode_46GDScoreBoardObjects1Objects = Hashtable.newFrom({"ScoreBoard": gdjs.Wave_32MapCode.GDScoreBoardObjects1});
gdjs.Wave_32MapCode.mapOfGDgdjs_46Wave_9532MapCode_46GDKillsObjects1Objects = Hashtable.newFrom({"Kills": gdjs.Wave_32MapCode.GDKillsObjects1});
gdjs.Wave_32MapCode.eventsList0 = function(runtimeScene) {

};gdjs.Wave_32MapCode.eventsList1 = function(runtimeScene) {

{



}


{



}


{

/* Reuse gdjs.Wave_32MapCode.GDCameraRoomObjects1 */

for(gdjs.Wave_32MapCode.forEachIndex2 = 0;gdjs.Wave_32MapCode.forEachIndex2 < gdjs.Wave_32MapCode.GDCameraRoomObjects1.length;++gdjs.Wave_32MapCode.forEachIndex2) {
gdjs.Wave_32MapCode.GDCameraRoomObjects2.length = 0;


gdjs.Wave_32MapCode.forEachTemporary2 = gdjs.Wave_32MapCode.GDCameraRoomObjects1[gdjs.Wave_32MapCode.forEachIndex2];
gdjs.Wave_32MapCode.GDCameraRoomObjects2.push(gdjs.Wave_32MapCode.forEachTemporary2);
if (true) {
{for(var i = 0, len = gdjs.Wave_32MapCode.GDCameraRoomObjects2.length ;i < len;++i) {
    gdjs.Wave_32MapCode.GDCameraRoomObjects2[i].returnVariable(gdjs.Wave_32MapCode.GDCameraRoomObjects2[i].getVariables().get("ID")).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("RoomCount")) + 1);
}
}{runtimeScene.getScene().getVariables().get("RoomCount").add(1);
}}
}

}


};gdjs.Wave_32MapCode.mapOfGDgdjs_46Wave_9532MapCode_46GDCharacterObjects1Objects = Hashtable.newFrom({"Character": gdjs.Wave_32MapCode.GDCharacterObjects1});
gdjs.Wave_32MapCode.mapOfGDgdjs_46Wave_9532MapCode_46GDCameraRoomObjects1Objects = Hashtable.newFrom({"CameraRoom": gdjs.Wave_32MapCode.GDCameraRoomObjects1});
gdjs.Wave_32MapCode.eventsList2 = function(runtimeScene) {

{



}


{


gdjs.Wave_32MapCode.condition0IsTrue_0.val = false;
gdjs.Wave_32MapCode.condition1IsTrue_0.val = false;
{
gdjs.Wave_32MapCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 0;
}if ( gdjs.Wave_32MapCode.condition0IsTrue_0.val ) {
{
{gdjs.Wave_32MapCode.conditionTrue_1 = gdjs.Wave_32MapCode.condition1IsTrue_0;
gdjs.Wave_32MapCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(20437628);
}
}}
if (gdjs.Wave_32MapCode.condition1IsTrue_0.val) {
gdjs.copyArray(gdjs.Wave_32MapCode.GDCharacterObjects2, gdjs.Wave_32MapCode.GDCharacterObjects3);

{for(var i = 0, len = gdjs.Wave_32MapCode.GDCharacterObjects3.length ;i < len;++i) {
    gdjs.Wave_32MapCode.GDCharacterObjects3[i].getBehavior("TopDownMovement").ignoreDefaultControls(false);
}
}{for(var i = 0, len = gdjs.Wave_32MapCode.GDCharacterObjects3.length ;i < len;++i) {
    gdjs.Wave_32MapCode.GDCharacterObjects3[i].getBehavior("TopDownMovement").setDeceleration(gdjs.Wave_32MapCode.GDCharacterObjects3[i].getBehavior("TopDownMovement").getDeceleration() * (100));
}
}{gdjs.evtTools.camera.setLayerTimeScale(runtimeScene, "", 1);
}}

}


{


gdjs.Wave_32MapCode.condition0IsTrue_0.val = false;
gdjs.Wave_32MapCode.condition1IsTrue_0.val = false;
{
gdjs.Wave_32MapCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 1;
}if ( gdjs.Wave_32MapCode.condition0IsTrue_0.val ) {
{
{gdjs.Wave_32MapCode.conditionTrue_1 = gdjs.Wave_32MapCode.condition1IsTrue_0;
gdjs.Wave_32MapCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(20439572);
}
}}
if (gdjs.Wave_32MapCode.condition1IsTrue_0.val) {
/* Reuse gdjs.Wave_32MapCode.GDCharacterObjects2 */
{for(var i = 0, len = gdjs.Wave_32MapCode.GDCharacterObjects2.length ;i < len;++i) {
    gdjs.Wave_32MapCode.GDCharacterObjects2[i].getBehavior("TopDownMovement").ignoreDefaultControls(true);
}
}{for(var i = 0, len = gdjs.Wave_32MapCode.GDCharacterObjects2.length ;i < len;++i) {
    gdjs.Wave_32MapCode.GDCharacterObjects2[i].getBehavior("TopDownMovement").setDeceleration(gdjs.Wave_32MapCode.GDCharacterObjects2[i].getBehavior("TopDownMovement").getDeceleration() / (100));
}
}{gdjs.evtTools.camera.setLayerTimeScale(runtimeScene, "", 0);
}}

}


};gdjs.Wave_32MapCode.eventsList3 = function(runtimeScene) {

{



}


{



}


{


{
gdjs.copyArray(gdjs.Wave_32MapCode.GDCameraRoomObjects1, gdjs.Wave_32MapCode.GDCameraRoomObjects2);

gdjs.copyArray(gdjs.Wave_32MapCode.GDCharacterObjects1, gdjs.Wave_32MapCode.GDCharacterObjects2);

{gdjs.evtTools.camera.setCameraX(runtimeScene, gdjs.evtTools.common.lerp(gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0), gdjs.evtTools.common.clamp((( gdjs.Wave_32MapCode.GDCharacterObjects2.length === 0 ) ? 0 :gdjs.Wave_32MapCode.GDCharacterObjects2[0].getPointX("")), (( gdjs.Wave_32MapCode.GDCameraRoomObjects2.length === 0 ) ? 0 :gdjs.Wave_32MapCode.GDCameraRoomObjects2[0].getX()) - 16 + (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) / 2), (( gdjs.Wave_32MapCode.GDCameraRoomObjects2.length === 0 ) ? 0 :gdjs.Wave_32MapCode.GDCameraRoomObjects2[0].getX()) + (( gdjs.Wave_32MapCode.GDCameraRoomObjects2.length === 0 ) ? 0 :gdjs.Wave_32MapCode.GDCameraRoomObjects2[0].getWidth()) + 16 - (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) / 2)), 0.1), "", 0);
}{gdjs.evtTools.camera.setCameraY(runtimeScene, gdjs.evtTools.common.lerp(gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0), gdjs.evtTools.common.clamp((( gdjs.Wave_32MapCode.GDCharacterObjects2.length === 0 ) ? 0 :gdjs.Wave_32MapCode.GDCharacterObjects2[0].getPointY("")), (( gdjs.Wave_32MapCode.GDCameraRoomObjects2.length === 0 ) ? 0 :gdjs.Wave_32MapCode.GDCameraRoomObjects2[0].getY()) - 16 + (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) / 2), (( gdjs.Wave_32MapCode.GDCameraRoomObjects2.length === 0 ) ? 0 :gdjs.Wave_32MapCode.GDCameraRoomObjects2[0].getY()) + (( gdjs.Wave_32MapCode.GDCameraRoomObjects2.length === 0 ) ? 0 :gdjs.Wave_32MapCode.GDCameraRoomObjects2[0].getHeight()) + 16 - (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) / 2)), 0.1), "", 0);
}{for(var i = 0, len = gdjs.Wave_32MapCode.GDCharacterObjects2.length ;i < len;++i) {
    gdjs.Wave_32MapCode.GDCharacterObjects2[i].returnVariable(gdjs.Wave_32MapCode.GDCharacterObjects2[i].getVariables().get("CurrentRoom")).setNumber((gdjs.RuntimeObject.getVariableNumber(((gdjs.Wave_32MapCode.GDCameraRoomObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Wave_32MapCode.GDCameraRoomObjects2[0].getVariables()).get("ID"))));
}
}
{ //Subevents
gdjs.Wave_32MapCode.eventsList2(runtimeScene);} //End of subevents
}

}


};gdjs.Wave_32MapCode.eventsList4 = function(runtimeScene) {

{


gdjs.Wave_32MapCode.condition0IsTrue_0.val = false;
{
{gdjs.Wave_32MapCode.conditionTrue_1 = gdjs.Wave_32MapCode.condition0IsTrue_0;
gdjs.Wave_32MapCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(20446244);
}
}if (gdjs.Wave_32MapCode.condition0IsTrue_0.val) {
gdjs.copyArray(gdjs.Wave_32MapCode.GDCharacterObjects1, gdjs.Wave_32MapCode.GDCharacterObjects2);

{runtimeScene.getScene().getVariables().get("ActiveRoom").setNumber((gdjs.RuntimeObject.getVariableNumber(((gdjs.Wave_32MapCode.GDCharacterObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Wave_32MapCode.GDCharacterObjects2[0].getVariables()).get("CurrentRoom"))));
}{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(0);
}}

}


};gdjs.Wave_32MapCode.eventsList5 = function(runtimeScene) {

{



}


{


gdjs.Wave_32MapCode.condition0IsTrue_0.val = false;
gdjs.Wave_32MapCode.condition1IsTrue_0.val = false;
{
gdjs.Wave_32MapCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("CurrentCamX")) == gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("OldCamX"));
}if ( gdjs.Wave_32MapCode.condition0IsTrue_0.val ) {
{
gdjs.Wave_32MapCode.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("CurrentCamY")) == gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("OldCamY"));
}}
if (gdjs.Wave_32MapCode.condition1IsTrue_0.val) {

{ //Subevents
gdjs.Wave_32MapCode.eventsList4(runtimeScene);} //End of subevents
}

}


{



}


{


gdjs.Wave_32MapCode.condition0IsTrue_0.val = false;
{
{gdjs.Wave_32MapCode.conditionTrue_1 = gdjs.Wave_32MapCode.condition0IsTrue_0;
gdjs.Wave_32MapCode.condition0IsTrue_1.val = false;
gdjs.Wave_32MapCode.condition1IsTrue_1.val = false;
{
{gdjs.Wave_32MapCode.conditionTrue_2 = gdjs.Wave_32MapCode.condition0IsTrue_1;
gdjs.Wave_32MapCode.conditionTrue_2.val = (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("CurrentCamX")) != gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("OldCamX")));
}
if( gdjs.Wave_32MapCode.condition0IsTrue_1.val ) {
    gdjs.Wave_32MapCode.conditionTrue_1.val = true;
}
}
{
{gdjs.Wave_32MapCode.conditionTrue_2 = gdjs.Wave_32MapCode.condition1IsTrue_1;
gdjs.Wave_32MapCode.conditionTrue_2.val = (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("CurrentCamY")) != gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("OldCamY")));
}
if( gdjs.Wave_32MapCode.condition1IsTrue_1.val ) {
    gdjs.Wave_32MapCode.conditionTrue_1.val = true;
}
}
{
}
}
}if (gdjs.Wave_32MapCode.condition0IsTrue_0.val) {
{runtimeScene.getScene().getVariables().get("OldCamX").setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("CurrentCamX")));
}{runtimeScene.getScene().getVariables().get("OldCamY").setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("CurrentCamY")));
}}

}


};gdjs.Wave_32MapCode.eventsList6 = function(runtimeScene) {

{



}


{

gdjs.copyArray(gdjs.Wave_32MapCode.GDCharacterObjects1, gdjs.Wave_32MapCode.GDCharacterObjects2);


gdjs.Wave_32MapCode.condition0IsTrue_0.val = false;
gdjs.Wave_32MapCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Wave_32MapCode.GDCharacterObjects2.length;i<l;++i) {
    if ( gdjs.Wave_32MapCode.GDCharacterObjects2[i].getVariableNumber(gdjs.Wave_32MapCode.GDCharacterObjects2[i].getVariables().get("CurrentRoom")) != gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("ActiveRoom")) ) {
        gdjs.Wave_32MapCode.condition0IsTrue_0.val = true;
        gdjs.Wave_32MapCode.GDCharacterObjects2[k] = gdjs.Wave_32MapCode.GDCharacterObjects2[i];
        ++k;
    }
}
gdjs.Wave_32MapCode.GDCharacterObjects2.length = k;}if ( gdjs.Wave_32MapCode.condition0IsTrue_0.val ) {
{
{gdjs.Wave_32MapCode.conditionTrue_1 = gdjs.Wave_32MapCode.condition1IsTrue_0;
gdjs.Wave_32MapCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(20442260);
}
}}
if (gdjs.Wave_32MapCode.condition1IsTrue_0.val) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(1);
}}

}


{



}


{


gdjs.Wave_32MapCode.condition0IsTrue_0.val = false;
{
gdjs.Wave_32MapCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 1;
}if (gdjs.Wave_32MapCode.condition0IsTrue_0.val) {
{runtimeScene.getScene().getVariables().get("CurrentCamX").setNumber(Math.round(gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0)));
}{runtimeScene.getScene().getVariables().get("CurrentCamY").setNumber(Math.round(gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0)));
}
{ //Subevents
gdjs.Wave_32MapCode.eventsList5(runtimeScene);} //End of subevents
}

}


};gdjs.Wave_32MapCode.eventsList7 = function(runtimeScene) {

{


gdjs.Wave_32MapCode.eventsList3(runtimeScene);
}


{


gdjs.Wave_32MapCode.eventsList6(runtimeScene);
}


};gdjs.Wave_32MapCode.eventsList8 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("CameraRoom"), gdjs.Wave_32MapCode.GDCameraRoomObjects1);
gdjs.copyArray(runtimeScene.getObjects("Character"), gdjs.Wave_32MapCode.GDCharacterObjects1);

gdjs.Wave_32MapCode.condition0IsTrue_0.val = false;
{
gdjs.Wave_32MapCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Wave_32MapCode.mapOfGDgdjs_46Wave_9532MapCode_46GDCharacterObjects1Objects, gdjs.Wave_32MapCode.mapOfGDgdjs_46Wave_9532MapCode_46GDCameraRoomObjects1Objects, false, runtimeScene, false);
}if (gdjs.Wave_32MapCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Wave_32MapCode.eventsList7(runtimeScene);} //End of subevents
}

}


};gdjs.Wave_32MapCode.mapOfGDgdjs_46Wave_9532MapCode_46GDBarriersObjects1Objects = Hashtable.newFrom({"Barriers": gdjs.Wave_32MapCode.GDBarriersObjects1});
gdjs.Wave_32MapCode.mapOfGDgdjs_46Wave_9532MapCode_46GDLaserObjects1Objects = Hashtable.newFrom({"Laser": gdjs.Wave_32MapCode.GDLaserObjects1});
gdjs.Wave_32MapCode.mapOfGDgdjs_46Wave_9532MapCode_46GDLaserObjects1Objects = Hashtable.newFrom({"Laser": gdjs.Wave_32MapCode.GDLaserObjects1});
gdjs.Wave_32MapCode.mapOfGDgdjs_46Wave_9532MapCode_46GDBarriersObjects1Objects = Hashtable.newFrom({"Barriers": gdjs.Wave_32MapCode.GDBarriersObjects1});
gdjs.Wave_32MapCode.mapOfGDgdjs_46Wave_9532MapCode_46GDLaserObjects1Objects = Hashtable.newFrom({"Laser": gdjs.Wave_32MapCode.GDLaserObjects1});
gdjs.Wave_32MapCode.mapOfGDgdjs_46Wave_9532MapCode_46GDMinerObjects1Objects = Hashtable.newFrom({"Miner": gdjs.Wave_32MapCode.GDMinerObjects1});
gdjs.Wave_32MapCode.mapOfGDgdjs_46Wave_9532MapCode_46GDLaserObjects1Objects = Hashtable.newFrom({"Laser": gdjs.Wave_32MapCode.GDLaserObjects1});
gdjs.Wave_32MapCode.mapOfGDgdjs_46Wave_9532MapCode_46GDMinerObjects1Objects = Hashtable.newFrom({"Miner": gdjs.Wave_32MapCode.GDMinerObjects1});
gdjs.Wave_32MapCode.mapOfGDgdjs_46Wave_9532MapCode_46GDMinerObjects1Objects = Hashtable.newFrom({"Miner": gdjs.Wave_32MapCode.GDMinerObjects1});
gdjs.Wave_32MapCode.mapOfGDgdjs_46Wave_9532MapCode_46GDMinerObjects1Objects = Hashtable.newFrom({"Miner": gdjs.Wave_32MapCode.GDMinerObjects1});
gdjs.Wave_32MapCode.mapOfGDgdjs_46Wave_9532MapCode_46GDCharacterObjects1Objects = Hashtable.newFrom({"Character": gdjs.Wave_32MapCode.GDCharacterObjects1});
gdjs.Wave_32MapCode.mapOfGDgdjs_46Wave_9532MapCode_46GDLaserObjects1Objects = Hashtable.newFrom({"Laser": gdjs.Wave_32MapCode.GDLaserObjects1});
gdjs.Wave_32MapCode.mapOfGDgdjs_46Wave_9532MapCode_46GDEnemySpawnerObjects1Objects = Hashtable.newFrom({"EnemySpawner": gdjs.Wave_32MapCode.GDEnemySpawnerObjects1});
gdjs.Wave_32MapCode.mapOfGDgdjs_46Wave_9532MapCode_46GDMinerObjects1Objects = Hashtable.newFrom({"Miner": gdjs.Wave_32MapCode.GDMinerObjects1});
gdjs.Wave_32MapCode.mapOfGDgdjs_46Wave_9532MapCode_46GDMinerObjects1Objects = Hashtable.newFrom({"Miner": gdjs.Wave_32MapCode.GDMinerObjects1});
gdjs.Wave_32MapCode.eventsList9 = function(runtimeScene) {

{



}


{


gdjs.Wave_32MapCode.condition0IsTrue_0.val = false;
{
gdjs.Wave_32MapCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Wave_32MapCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Barriers"), gdjs.Wave_32MapCode.GDBarriersObjects1);
gdjs.copyArray(runtimeScene.getObjects("CameraRoom"), gdjs.Wave_32MapCode.GDCameraRoomObjects1);
gdjs.copyArray(runtimeScene.getObjects("Character"), gdjs.Wave_32MapCode.GDCharacterObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.Wave_32MapCode.GDNewSprite2Objects1);
gdjs.copyArray(runtimeScene.getObjects("ScoreBoard"), gdjs.Wave_32MapCode.GDScoreBoardObjects1);
gdjs.Wave_32MapCode.GDHealthBarObjects1.length = 0;

gdjs.Wave_32MapCode.GDKillsObjects1.length = 0;

{for(var i = 0, len = gdjs.Wave_32MapCode.GDBarriersObjects1.length ;i < len;++i) {
    gdjs.Wave_32MapCode.GDBarriersObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Wave_32MapCode.GDCameraRoomObjects1.length ;i < len;++i) {
    gdjs.Wave_32MapCode.GDCameraRoomObjects1[i].hide();
}
}{runtimeScene.getScene().getVariables().get("RoomCount").setNumber(0);
}{gdjs.evtTools.window.setFullScreen(runtimeScene, false, true);
}{for(var i = 0, len = gdjs.Wave_32MapCode.GDCharacterObjects1.length ;i < len;++i) {
    gdjs.Wave_32MapCode.GDCharacterObjects1[i].setAnimationName("DownIdle");
}
}{gdjs.evtTools.input.hideCursor(runtimeScene);
}{for(var i = 0, len = gdjs.Wave_32MapCode.GDCharacterObjects1.length ;i < len;++i) {
    gdjs.Wave_32MapCode.GDCharacterObjects1[i].setAnimationFrame(0);
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Wave_32MapCode.mapOfGDgdjs_46Wave_9532MapCode_46GDHealthBarObjects1Objects, (( gdjs.Wave_32MapCode.GDCharacterObjects1.length === 0 ) ? 0 :gdjs.Wave_32MapCode.GDCharacterObjects1[0].getPointX("CENTER")) - 6, (( gdjs.Wave_32MapCode.GDCharacterObjects1.length === 0 ) ? 0 :gdjs.Wave_32MapCode.GDCharacterObjects1[0].getPointY("CENTER")) - 5, "");
}{for(var i = 0, len = gdjs.Wave_32MapCode.GDHealthBarObjects1.length ;i < len;++i) {
    gdjs.Wave_32MapCode.GDHealthBarObjects1[i].pauseAnimation();
}
}{for(var i = 0, len = gdjs.Wave_32MapCode.GDHealthBarObjects1.length ;i < len;++i) {
    gdjs.Wave_32MapCode.GDHealthBarObjects1[i].setAnimationFrame(0);
}
}{}{for(var i = 0, len = gdjs.Wave_32MapCode.GDScoreBoardObjects1.length ;i < len;++i) {
    gdjs.Wave_32MapCode.GDScoreBoardObjects1[i].setLayer("UI");
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Wave_32MapCode.mapOfGDgdjs_46Wave_9532MapCode_46GDScoreBoardObjects1Objects, (( gdjs.Wave_32MapCode.GDNewSprite2Objects1.length === 0 ) ? 0 :gdjs.Wave_32MapCode.GDNewSprite2Objects1[0].getPointX("Center")) - 67, (( gdjs.Wave_32MapCode.GDNewSprite2Objects1.length === 0 ) ? 0 :gdjs.Wave_32MapCode.GDNewSprite2Objects1[0].getPointY("Center")) - 10, "UI");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Wave_32MapCode.mapOfGDgdjs_46Wave_9532MapCode_46GDKillsObjects1Objects, 32 + 100, 32 + 50, "UI");
}{gdjs.evtTools.sound.playMusic(runtimeScene, "Mandalorian Boba Fett Theme The Book Of Boba Fett (EXTENDED SOUNDTRACK)2.mp3", true, 75, 1.1);
}{runtimeScene.getGame().getVariables().getFromIndex(3).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(7).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(8).setNumber(0);
}{gdjs.evtTools.sound.playMusic(runtimeScene, "8d82b5_Tie_Fighter_Flyby_Sound_Effect.mp3", false, 75, 1);
}{runtimeScene.getGame().getVariables().getFromIndex(10).setString("EE3");
}
{ //Subevents
gdjs.Wave_32MapCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


gdjs.Wave_32MapCode.eventsList8(runtimeScene);
}


{



}


{


{
gdjs.copyArray(runtimeScene.getObjects("Barriers"), gdjs.Wave_32MapCode.GDBarriersObjects1);
gdjs.copyArray(runtimeScene.getObjects("Character"), gdjs.Wave_32MapCode.GDCharacterObjects1);
{for(var i = 0, len = gdjs.Wave_32MapCode.GDCharacterObjects1.length ;i < len;++i) {
    gdjs.Wave_32MapCode.GDCharacterObjects1[i].separateFromObjectsList(gdjs.Wave_32MapCode.mapOfGDgdjs_46Wave_9532MapCode_46GDBarriersObjects1Objects, false);
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Character"), gdjs.Wave_32MapCode.GDCharacterObjects1);

gdjs.Wave_32MapCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Wave_32MapCode.GDCharacterObjects1.length;i<l;++i) {
    if ( gdjs.Wave_32MapCode.GDCharacterObjects1[i].getBehavior("TopDownMovement").getXVelocity() > 0 ) {
        gdjs.Wave_32MapCode.condition0IsTrue_0.val = true;
        gdjs.Wave_32MapCode.GDCharacterObjects1[k] = gdjs.Wave_32MapCode.GDCharacterObjects1[i];
        ++k;
    }
}
gdjs.Wave_32MapCode.GDCharacterObjects1.length = k;}if (gdjs.Wave_32MapCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Wave_32MapCode.GDCharacterObjects1 */
{for(var i = 0, len = gdjs.Wave_32MapCode.GDCharacterObjects1.length ;i < len;++i) {
    gdjs.Wave_32MapCode.GDCharacterObjects1[i].setAnimationName("RightIdle");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Character"), gdjs.Wave_32MapCode.GDCharacterObjects1);

gdjs.Wave_32MapCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Wave_32MapCode.GDCharacterObjects1.length;i<l;++i) {
    if ( gdjs.Wave_32MapCode.GDCharacterObjects1[i].getBehavior("TopDownMovement").getXVelocity() < 0 ) {
        gdjs.Wave_32MapCode.condition0IsTrue_0.val = true;
        gdjs.Wave_32MapCode.GDCharacterObjects1[k] = gdjs.Wave_32MapCode.GDCharacterObjects1[i];
        ++k;
    }
}
gdjs.Wave_32MapCode.GDCharacterObjects1.length = k;}if (gdjs.Wave_32MapCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Wave_32MapCode.GDCharacterObjects1 */
{for(var i = 0, len = gdjs.Wave_32MapCode.GDCharacterObjects1.length ;i < len;++i) {
    gdjs.Wave_32MapCode.GDCharacterObjects1[i].setAnimationName("LeftIdle");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Character"), gdjs.Wave_32MapCode.GDCharacterObjects1);

gdjs.Wave_32MapCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Wave_32MapCode.GDCharacterObjects1.length;i<l;++i) {
    if ( gdjs.Wave_32MapCode.GDCharacterObjects1[i].getBehavior("TopDownMovement").getYVelocity() > 0 ) {
        gdjs.Wave_32MapCode.condition0IsTrue_0.val = true;
        gdjs.Wave_32MapCode.GDCharacterObjects1[k] = gdjs.Wave_32MapCode.GDCharacterObjects1[i];
        ++k;
    }
}
gdjs.Wave_32MapCode.GDCharacterObjects1.length = k;}if (gdjs.Wave_32MapCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Wave_32MapCode.GDCharacterObjects1 */
{for(var i = 0, len = gdjs.Wave_32MapCode.GDCharacterObjects1.length ;i < len;++i) {
    gdjs.Wave_32MapCode.GDCharacterObjects1[i].setAnimationName("DownIdle");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Character"), gdjs.Wave_32MapCode.GDCharacterObjects1);

gdjs.Wave_32MapCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Wave_32MapCode.GDCharacterObjects1.length;i<l;++i) {
    if ( gdjs.Wave_32MapCode.GDCharacterObjects1[i].getBehavior("TopDownMovement").getYVelocity() < 0 ) {
        gdjs.Wave_32MapCode.condition0IsTrue_0.val = true;
        gdjs.Wave_32MapCode.GDCharacterObjects1[k] = gdjs.Wave_32MapCode.GDCharacterObjects1[i];
        ++k;
    }
}
gdjs.Wave_32MapCode.GDCharacterObjects1.length = k;}if (gdjs.Wave_32MapCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Wave_32MapCode.GDCharacterObjects1 */
{for(var i = 0, len = gdjs.Wave_32MapCode.GDCharacterObjects1.length ;i < len;++i) {
    gdjs.Wave_32MapCode.GDCharacterObjects1[i].setAnimationName("UpIdle");
}
}}

}


{


gdjs.Wave_32MapCode.condition0IsTrue_0.val = false;
{
{gdjs.Wave_32MapCode.conditionTrue_1 = gdjs.Wave_32MapCode.condition0IsTrue_0;
gdjs.Wave_32MapCode.condition0IsTrue_1.val = false;
gdjs.Wave_32MapCode.condition1IsTrue_1.val = false;
{
gdjs.Wave_32MapCode.condition0IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
if( gdjs.Wave_32MapCode.condition0IsTrue_1.val ) {
    gdjs.Wave_32MapCode.conditionTrue_1.val = true;
}
}
{
gdjs.Wave_32MapCode.condition1IsTrue_1.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if( gdjs.Wave_32MapCode.condition1IsTrue_1.val ) {
    gdjs.Wave_32MapCode.conditionTrue_1.val = true;
}
}
{
}
}
}if (gdjs.Wave_32MapCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Character"), gdjs.Wave_32MapCode.GDCharacterObjects1);
gdjs.copyArray(runtimeScene.getObjects("Laser"), gdjs.Wave_32MapCode.GDLaserObjects1);
{for(var i = 0, len = gdjs.Wave_32MapCode.GDCharacterObjects1.length ;i < len;++i) {
    gdjs.Wave_32MapCode.GDCharacterObjects1[i].getBehavior("FireBullet").FireTowardPosition((gdjs.Wave_32MapCode.GDCharacterObjects1[i].getPointX("firespot")), (gdjs.Wave_32MapCode.GDCharacterObjects1[i].getPointY("firespot")), gdjs.Wave_32MapCode.mapOfGDgdjs_46Wave_9532MapCode_46GDLaserObjects1Objects, gdjs.evtTools.input.getCursorX(runtimeScene, "", 0), gdjs.evtTools.input.getCursorY(runtimeScene, "", 0), 850, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.Wave_32MapCode.GDCharacterObjects1.length ;i < len;++i) {
    gdjs.Wave_32MapCode.GDCharacterObjects1[i].setAnimationFrame(2);
}
}}

}


{


gdjs.Wave_32MapCode.condition0IsTrue_0.val = false;
{
{gdjs.Wave_32MapCode.conditionTrue_1 = gdjs.Wave_32MapCode.condition0IsTrue_0;
gdjs.Wave_32MapCode.condition0IsTrue_1.val = false;
gdjs.Wave_32MapCode.condition1IsTrue_1.val = false;
{
gdjs.Wave_32MapCode.condition0IsTrue_1.val = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space"));
if( gdjs.Wave_32MapCode.condition0IsTrue_1.val ) {
    gdjs.Wave_32MapCode.conditionTrue_1.val = true;
}
}
{
gdjs.Wave_32MapCode.condition1IsTrue_1.val = !(gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left"));
if( gdjs.Wave_32MapCode.condition1IsTrue_1.val ) {
    gdjs.Wave_32MapCode.conditionTrue_1.val = true;
}
}
{
}
}
}if (gdjs.Wave_32MapCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Character"), gdjs.Wave_32MapCode.GDCharacterObjects1);
{for(var i = 0, len = gdjs.Wave_32MapCode.GDCharacterObjects1.length ;i < len;++i) {
    gdjs.Wave_32MapCode.GDCharacterObjects1[i].setAnimationFrame(0);
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.Wave_32MapCode.GDNewSpriteObjects1);
{for(var i = 0, len = gdjs.Wave_32MapCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.Wave_32MapCode.GDNewSpriteObjects1[i].setCenterPositionInScene(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0),gdjs.evtTools.input.getCursorY(runtimeScene, "", 0));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Barriers"), gdjs.Wave_32MapCode.GDBarriersObjects1);
gdjs.copyArray(runtimeScene.getObjects("Laser"), gdjs.Wave_32MapCode.GDLaserObjects1);

gdjs.Wave_32MapCode.condition0IsTrue_0.val = false;
{
gdjs.Wave_32MapCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Wave_32MapCode.mapOfGDgdjs_46Wave_9532MapCode_46GDLaserObjects1Objects, gdjs.Wave_32MapCode.mapOfGDgdjs_46Wave_9532MapCode_46GDBarriersObjects1Objects, false, runtimeScene, false);
}if (gdjs.Wave_32MapCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Wave_32MapCode.GDLaserObjects1 */
{for(var i = 0, len = gdjs.Wave_32MapCode.GDLaserObjects1.length ;i < len;++i) {
    gdjs.Wave_32MapCode.GDLaserObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{


gdjs.Wave_32MapCode.condition0IsTrue_0.val = false;
{
gdjs.Wave_32MapCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "e");
}if (gdjs.Wave_32MapCode.condition0IsTrue_0.val) {
{gdjs.evtTools.variable.toggleVariableBoolean(runtimeScene.getGame().getVariables().get("Inventory"));
}}

}


{


gdjs.Wave_32MapCode.condition0IsTrue_0.val = false;
{
gdjs.Wave_32MapCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().get("Inventory"), true);
}if (gdjs.Wave_32MapCode.condition0IsTrue_0.val) {
}

}


{


gdjs.Wave_32MapCode.condition0IsTrue_0.val = false;
{
gdjs.Wave_32MapCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().get("Inventory"), false);
}if (gdjs.Wave_32MapCode.condition0IsTrue_0.val) {
}

}


{



}


{


gdjs.Wave_32MapCode.condition0IsTrue_0.val = false;
{
gdjs.Wave_32MapCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Num1");
}if (gdjs.Wave_32MapCode.condition0IsTrue_0.val) {
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Laser"), gdjs.Wave_32MapCode.GDLaserObjects1);
gdjs.copyArray(runtimeScene.getObjects("Miner"), gdjs.Wave_32MapCode.GDMinerObjects1);

gdjs.Wave_32MapCode.condition0IsTrue_0.val = false;
{
gdjs.Wave_32MapCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Wave_32MapCode.mapOfGDgdjs_46Wave_9532MapCode_46GDLaserObjects1Objects, gdjs.Wave_32MapCode.mapOfGDgdjs_46Wave_9532MapCode_46GDMinerObjects1Objects, false, runtimeScene, false);
}if (gdjs.Wave_32MapCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Wave_32MapCode.GDLaserObjects1 */
/* Reuse gdjs.Wave_32MapCode.GDMinerObjects1 */
{for(var i = 0, len = gdjs.Wave_32MapCode.GDMinerObjects1.length ;i < len;++i) {
    gdjs.Wave_32MapCode.GDMinerObjects1[i].getBehavior("Health").Hit(1, true, true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.Wave_32MapCode.GDLaserObjects1.length ;i < len;++i) {
    gdjs.Wave_32MapCode.GDLaserObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Laser"), gdjs.Wave_32MapCode.GDLaserObjects1);
gdjs.copyArray(runtimeScene.getObjects("Miner"), gdjs.Wave_32MapCode.GDMinerObjects1);

gdjs.Wave_32MapCode.condition0IsTrue_0.val = false;
gdjs.Wave_32MapCode.condition1IsTrue_0.val = false;
{
gdjs.Wave_32MapCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Wave_32MapCode.mapOfGDgdjs_46Wave_9532MapCode_46GDLaserObjects1Objects, gdjs.Wave_32MapCode.mapOfGDgdjs_46Wave_9532MapCode_46GDMinerObjects1Objects, false, runtimeScene, false);
}if ( gdjs.Wave_32MapCode.condition0IsTrue_0.val ) {
{
gdjs.Wave_32MapCode.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) > 5000;
}}
if (gdjs.Wave_32MapCode.condition1IsTrue_0.val) {
/* Reuse gdjs.Wave_32MapCode.GDLaserObjects1 */
/* Reuse gdjs.Wave_32MapCode.GDMinerObjects1 */
{for(var i = 0, len = gdjs.Wave_32MapCode.GDMinerObjects1.length ;i < len;++i) {
    gdjs.Wave_32MapCode.GDMinerObjects1[i].getBehavior("Health").Hit(3, true, true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.Wave_32MapCode.GDLaserObjects1.length ;i < len;++i) {
    gdjs.Wave_32MapCode.GDLaserObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("Character"), gdjs.Wave_32MapCode.GDCharacterObjects1);
gdjs.copyArray(runtimeScene.getObjects("HealthBar"), gdjs.Wave_32MapCode.GDHealthBarObjects1);
{for(var i = 0, len = gdjs.Wave_32MapCode.GDHealthBarObjects1.length ;i < len;++i) {
    gdjs.Wave_32MapCode.GDHealthBarObjects1[i].setPosition((( gdjs.Wave_32MapCode.GDCharacterObjects1.length === 0 ) ? 0 :gdjs.Wave_32MapCode.GDCharacterObjects1[0].getPointX("Center")) - 24,(( gdjs.Wave_32MapCode.GDCharacterObjects1.length === 0 ) ? 0 :gdjs.Wave_32MapCode.GDCharacterObjects1[0].getPointY("Center")) - 55);
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("EnemySpawner"), gdjs.Wave_32MapCode.GDEnemySpawnerObjects1);
gdjs.copyArray(runtimeScene.getObjects("Miner"), gdjs.Wave_32MapCode.GDMinerObjects1);
{for(var i = 0, len = gdjs.Wave_32MapCode.GDEnemySpawnerObjects1.length ;i < len;++i) {
    gdjs.Wave_32MapCode.GDEnemySpawnerObjects1[i].getBehavior("ObjectSpawner").SetSpawnPeriod(5, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.Wave_32MapCode.GDEnemySpawnerObjects1.length ;i < len;++i) {
    gdjs.Wave_32MapCode.GDEnemySpawnerObjects1[i].getBehavior("ObjectSpawner").SetMaxQuantity(100, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.Wave_32MapCode.GDEnemySpawnerObjects1.length ;i < len;++i) {
    gdjs.Wave_32MapCode.GDEnemySpawnerObjects1[i].getBehavior("ObjectSpawner").SpawnObject(gdjs.Wave_32MapCode.mapOfGDgdjs_46Wave_9532MapCode_46GDMinerObjects1Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("Character"), gdjs.Wave_32MapCode.GDCharacterObjects1);
gdjs.copyArray(runtimeScene.getObjects("Miner"), gdjs.Wave_32MapCode.GDMinerObjects1);
{for(var i = 0, len = gdjs.Wave_32MapCode.GDMinerObjects1.length ;i < len;++i) {
    gdjs.Wave_32MapCode.GDMinerObjects1[i].getBehavior("Pathfinding").moveTo(runtimeScene, (( gdjs.Wave_32MapCode.GDCharacterObjects1.length === 0 ) ? 0 :gdjs.Wave_32MapCode.GDCharacterObjects1[0].getPointX("Center")) - 25, (( gdjs.Wave_32MapCode.GDCharacterObjects1.length === 0 ) ? 0 :gdjs.Wave_32MapCode.GDCharacterObjects1[0].getPointY("Center")) - 25);
}
}{for(var i = 0, len = gdjs.Wave_32MapCode.GDMinerObjects1.length ;i < len;++i) {
    gdjs.Wave_32MapCode.GDMinerObjects1[i].getBehavior("Pathfinding").setMaxSpeed(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Miner"), gdjs.Wave_32MapCode.GDMinerObjects1);

gdjs.Wave_32MapCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Wave_32MapCode.GDMinerObjects1.length;i<l;++i) {
    if ( gdjs.Wave_32MapCode.GDMinerObjects1[i].getBehavior("Health").IsDead((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.Wave_32MapCode.condition0IsTrue_0.val = true;
        gdjs.Wave_32MapCode.GDMinerObjects1[k] = gdjs.Wave_32MapCode.GDMinerObjects1[i];
        ++k;
    }
}
gdjs.Wave_32MapCode.GDMinerObjects1.length = k;}if (gdjs.Wave_32MapCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Wave_32MapCode.GDMinerObjects1 */
{for(var i = 0, len = gdjs.Wave_32MapCode.GDMinerObjects1.length ;i < len;++i) {
    gdjs.Wave_32MapCode.GDMinerObjects1[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getGame().getVariables().getFromIndex(3).add(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(5)));
}{runtimeScene.getGame().getVariables().getFromIndex(7).add(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(5)));
}{runtimeScene.getGame().getVariables().getFromIndex(8).add(1);
}{gdjs.evtTools.sound.playMusic(runtimeScene, "8d82b5_Star_Wars_Wilhelm_Scream_Sound_Effect.mp3", false, 50, gdjs.randomFloatInRange(1, 2));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Character"), gdjs.Wave_32MapCode.GDCharacterObjects1);
gdjs.copyArray(runtimeScene.getObjects("Miner"), gdjs.Wave_32MapCode.GDMinerObjects1);

gdjs.Wave_32MapCode.condition0IsTrue_0.val = false;
{
gdjs.Wave_32MapCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Wave_32MapCode.mapOfGDgdjs_46Wave_9532MapCode_46GDMinerObjects1Objects, gdjs.Wave_32MapCode.mapOfGDgdjs_46Wave_9532MapCode_46GDCharacterObjects1Objects, false, runtimeScene, false);
}if (gdjs.Wave_32MapCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Wave_32MapCode.GDCharacterObjects1 */
gdjs.copyArray(runtimeScene.getObjects("HealthBar"), gdjs.Wave_32MapCode.GDHealthBarObjects1);
/* Reuse gdjs.Wave_32MapCode.GDMinerObjects1 */
{for(var i = 0, len = gdjs.Wave_32MapCode.GDCharacterObjects1.length ;i < len;++i) {
    gdjs.Wave_32MapCode.GDCharacterObjects1[i].getBehavior("Health").Hit(1, false, true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.Wave_32MapCode.GDHealthBarObjects1.length ;i < len;++i) {
    gdjs.Wave_32MapCode.GDHealthBarObjects1[i].setAnimationFrame(gdjs.Wave_32MapCode.GDHealthBarObjects1[i].getAnimationFrame() + (1));
}
}{for(var i = 0, len = gdjs.Wave_32MapCode.GDMinerObjects1.length ;i < len;++i) {
    gdjs.Wave_32MapCode.GDMinerObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("HealthBar"), gdjs.Wave_32MapCode.GDHealthBarObjects1);

gdjs.Wave_32MapCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Wave_32MapCode.GDHealthBarObjects1.length;i<l;++i) {
    if ( gdjs.Wave_32MapCode.GDHealthBarObjects1[i].getAnimationFrame() == 11 ) {
        gdjs.Wave_32MapCode.condition0IsTrue_0.val = true;
        gdjs.Wave_32MapCode.GDHealthBarObjects1[k] = gdjs.Wave_32MapCode.GDHealthBarObjects1[i];
        ++k;
    }
}
gdjs.Wave_32MapCode.GDHealthBarObjects1.length = k;}if (gdjs.Wave_32MapCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Character"), gdjs.Wave_32MapCode.GDCharacterObjects1);
{for(var i = 0, len = gdjs.Wave_32MapCode.GDCharacterObjects1.length ;i < len;++i) {
    gdjs.Wave_32MapCode.GDCharacterObjects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Death Screen", false);
}{gdjs.evtTools.sound.playMusic(runtimeScene, "95fe7f6a064b3e17dce2774ad92cee83f877d2d6dda1cd16d79b876ca572911c_Death.aac", false, 100, 1);
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("Kills"), gdjs.Wave_32MapCode.GDKillsObjects1);
gdjs.copyArray(runtimeScene.getObjects("ScoreBoard"), gdjs.Wave_32MapCode.GDScoreBoardObjects1);
{for(var i = 0, len = gdjs.Wave_32MapCode.GDScoreBoardObjects1.length ;i < len;++i) {
    gdjs.Wave_32MapCode.GDScoreBoardObjects1[i].setText("Score: " + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(3)));
}
}{for(var i = 0, len = gdjs.Wave_32MapCode.GDKillsObjects1.length ;i < len;++i) {
    gdjs.Wave_32MapCode.GDKillsObjects1[i].setText("Kills: " + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(8)));
}
}}

}


{


gdjs.Wave_32MapCode.condition0IsTrue_0.val = false;
{
gdjs.Wave_32MapCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)) > gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6)) * 999;
}if (gdjs.Wave_32MapCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(4).add(15);
}{runtimeScene.getGame().getVariables().getFromIndex(5).add(25);
}{runtimeScene.getGame().getVariables().getFromIndex(7).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(11).add(1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Character"), gdjs.Wave_32MapCode.GDCharacterObjects1);

gdjs.Wave_32MapCode.condition0IsTrue_0.val = false;
gdjs.Wave_32MapCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Wave_32MapCode.GDCharacterObjects1.length;i<l;++i) {
    if ( gdjs.Wave_32MapCode.GDCharacterObjects1[i].getBehavior("FireBullet").HasJustFired((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.Wave_32MapCode.condition0IsTrue_0.val = true;
        gdjs.Wave_32MapCode.GDCharacterObjects1[k] = gdjs.Wave_32MapCode.GDCharacterObjects1[i];
        ++k;
    }
}
gdjs.Wave_32MapCode.GDCharacterObjects1.length = k;}if ( gdjs.Wave_32MapCode.condition0IsTrue_0.val ) {
{
gdjs.Wave_32MapCode.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(10)) == "EE3";
}}
if (gdjs.Wave_32MapCode.condition1IsTrue_0.val) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "blaster22.mp3", false, 35, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Character"), gdjs.Wave_32MapCode.GDCharacterObjects1);

gdjs.Wave_32MapCode.condition0IsTrue_0.val = false;
gdjs.Wave_32MapCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Wave_32MapCode.GDCharacterObjects1.length;i<l;++i) {
    if ( gdjs.Wave_32MapCode.GDCharacterObjects1[i].getBehavior("FireBullet").HasJustFired((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.Wave_32MapCode.condition0IsTrue_0.val = true;
        gdjs.Wave_32MapCode.GDCharacterObjects1[k] = gdjs.Wave_32MapCode.GDCharacterObjects1[i];
        ++k;
    }
}
gdjs.Wave_32MapCode.GDCharacterObjects1.length = k;}if ( gdjs.Wave_32MapCode.condition0IsTrue_0.val ) {
{
gdjs.Wave_32MapCode.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(10)) != "EE3";
}}
if (gdjs.Wave_32MapCode.condition1IsTrue_0.val) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "8d82b5_Stormtrooper_Rifle_Firing_Sound_Effect.mp3", false, 35, 1);
}}

}


{


gdjs.Wave_32MapCode.condition0IsTrue_0.val = false;
{
gdjs.Wave_32MapCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) > 5000;
}if (gdjs.Wave_32MapCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Character"), gdjs.Wave_32MapCode.GDCharacterObjects1);
{for(var i = 0, len = gdjs.Wave_32MapCode.GDCharacterObjects1.length ;i < len;++i) {
    gdjs.Wave_32MapCode.GDCharacterObjects1[i].getBehavior("FireBullet").SetCooldown(0.12, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.Wave_32MapCode.GDCharacterObjects1.length ;i < len;++i) {
    gdjs.Wave_32MapCode.GDCharacterObjects1[i].getBehavior("FireBullet").SetHeatPerShot(0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.Wave_32MapCode.GDCharacterObjects1.length ;i < len;++i) {
    gdjs.Wave_32MapCode.GDCharacterObjects1[i].getBehavior("FireBullet").SetReloadDuration(0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{runtimeScene.getGame().getVariables().getFromIndex(10).setString("E11");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("EnemySpawner"), gdjs.Wave_32MapCode.GDEnemySpawnerObjects1);
gdjs.copyArray(runtimeScene.getObjects("Laser"), gdjs.Wave_32MapCode.GDLaserObjects1);

gdjs.Wave_32MapCode.condition0IsTrue_0.val = false;
{
gdjs.Wave_32MapCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Wave_32MapCode.mapOfGDgdjs_46Wave_9532MapCode_46GDLaserObjects1Objects, gdjs.Wave_32MapCode.mapOfGDgdjs_46Wave_9532MapCode_46GDEnemySpawnerObjects1Objects, false, runtimeScene, false);
}if (gdjs.Wave_32MapCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Wave_32MapCode.GDEnemySpawnerObjects1 */
/* Reuse gdjs.Wave_32MapCode.GDLaserObjects1 */
{}{for(var i = 0, len = gdjs.Wave_32MapCode.GDLaserObjects1.length ;i < len;++i) {
    gdjs.Wave_32MapCode.GDLaserObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{


gdjs.Wave_32MapCode.condition0IsTrue_0.val = false;
{
gdjs.Wave_32MapCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) > gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(9));
}if (gdjs.Wave_32MapCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(9).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)));
}}

}


{


gdjs.Wave_32MapCode.condition0IsTrue_0.val = false;
{
gdjs.Wave_32MapCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) > 3000;
}if (gdjs.Wave_32MapCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("EnemySpawner"), gdjs.Wave_32MapCode.GDEnemySpawnerObjects1);
gdjs.copyArray(runtimeScene.getObjects("Miner"), gdjs.Wave_32MapCode.GDMinerObjects1);
{for(var i = 0, len = gdjs.Wave_32MapCode.GDEnemySpawnerObjects1.length ;i < len;++i) {
    gdjs.Wave_32MapCode.GDEnemySpawnerObjects1[i].getBehavior("ObjectSpawner").SetSpawnPeriod(3, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.Wave_32MapCode.GDEnemySpawnerObjects1.length ;i < len;++i) {
    gdjs.Wave_32MapCode.GDEnemySpawnerObjects1[i].getBehavior("ObjectSpawner").SpawnObject(gdjs.Wave_32MapCode.mapOfGDgdjs_46Wave_9532MapCode_46GDMinerObjects1Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{


gdjs.Wave_32MapCode.condition0IsTrue_0.val = false;
{
gdjs.Wave_32MapCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) > 15000;
}if (gdjs.Wave_32MapCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("EnemySpawner"), gdjs.Wave_32MapCode.GDEnemySpawnerObjects1);
gdjs.copyArray(runtimeScene.getObjects("Miner"), gdjs.Wave_32MapCode.GDMinerObjects1);
{for(var i = 0, len = gdjs.Wave_32MapCode.GDEnemySpawnerObjects1.length ;i < len;++i) {
    gdjs.Wave_32MapCode.GDEnemySpawnerObjects1[i].getBehavior("ObjectSpawner").SetSpawnPeriod(1, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.Wave_32MapCode.GDEnemySpawnerObjects1.length ;i < len;++i) {
    gdjs.Wave_32MapCode.GDEnemySpawnerObjects1[i].getBehavior("ObjectSpawner").SpawnObject(gdjs.Wave_32MapCode.mapOfGDgdjs_46Wave_9532MapCode_46GDMinerObjects1Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{


gdjs.Wave_32MapCode.condition0IsTrue_0.val = false;
{
gdjs.Wave_32MapCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)) != 0;
}if (gdjs.Wave_32MapCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Sheild"), gdjs.Wave_32MapCode.GDSheildObjects1);
{for(var i = 0, len = gdjs.Wave_32MapCode.GDSheildObjects1.length ;i < len;++i) {
    gdjs.Wave_32MapCode.GDSheildObjects1[i].hide();
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("Character"), gdjs.Wave_32MapCode.GDCharacterObjects1);
gdjs.copyArray(runtimeScene.getObjects("Sheild"), gdjs.Wave_32MapCode.GDSheildObjects1);
{for(var i = 0, len = gdjs.Wave_32MapCode.GDSheildObjects1.length ;i < len;++i) {
    gdjs.Wave_32MapCode.GDSheildObjects1[i].setPosition((( gdjs.Wave_32MapCode.GDCharacterObjects1.length === 0 ) ? 0 :gdjs.Wave_32MapCode.GDCharacterObjects1[0].getPointX("center")),(( gdjs.Wave_32MapCode.GDCharacterObjects1.length === 0 ) ? 0 :gdjs.Wave_32MapCode.GDCharacterObjects1[0].getPointY("center")));
}
}{for(var i = 0, len = gdjs.Wave_32MapCode.GDSheildObjects1.length ;i < len;++i) {
    gdjs.Wave_32MapCode.GDSheildObjects1[i].setOpacity(120);
}
}}

}


};

gdjs.Wave_32MapCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Wave_32MapCode.GDTopDownMapObjects1.length = 0;
gdjs.Wave_32MapCode.GDTopDownMapObjects2.length = 0;
gdjs.Wave_32MapCode.GDTopDownMapObjects3.length = 0;
gdjs.Wave_32MapCode.GDTopDownMapObjects4.length = 0;
gdjs.Wave_32MapCode.GDCameraRoomObjects1.length = 0;
gdjs.Wave_32MapCode.GDCameraRoomObjects2.length = 0;
gdjs.Wave_32MapCode.GDCameraRoomObjects3.length = 0;
gdjs.Wave_32MapCode.GDCameraRoomObjects4.length = 0;
gdjs.Wave_32MapCode.GDCharacterObjects1.length = 0;
gdjs.Wave_32MapCode.GDCharacterObjects2.length = 0;
gdjs.Wave_32MapCode.GDCharacterObjects3.length = 0;
gdjs.Wave_32MapCode.GDCharacterObjects4.length = 0;
gdjs.Wave_32MapCode.GDBarriersObjects1.length = 0;
gdjs.Wave_32MapCode.GDBarriersObjects2.length = 0;
gdjs.Wave_32MapCode.GDBarriersObjects3.length = 0;
gdjs.Wave_32MapCode.GDBarriersObjects4.length = 0;
gdjs.Wave_32MapCode.GDLaserObjects1.length = 0;
gdjs.Wave_32MapCode.GDLaserObjects2.length = 0;
gdjs.Wave_32MapCode.GDLaserObjects3.length = 0;
gdjs.Wave_32MapCode.GDLaserObjects4.length = 0;
gdjs.Wave_32MapCode.GDMinerObjects1.length = 0;
gdjs.Wave_32MapCode.GDMinerObjects2.length = 0;
gdjs.Wave_32MapCode.GDMinerObjects3.length = 0;
gdjs.Wave_32MapCode.GDMinerObjects4.length = 0;
gdjs.Wave_32MapCode.GDNewSpriteObjects1.length = 0;
gdjs.Wave_32MapCode.GDNewSpriteObjects2.length = 0;
gdjs.Wave_32MapCode.GDNewSpriteObjects3.length = 0;
gdjs.Wave_32MapCode.GDNewSpriteObjects4.length = 0;
gdjs.Wave_32MapCode.GDNewSprite2Objects1.length = 0;
gdjs.Wave_32MapCode.GDNewSprite2Objects2.length = 0;
gdjs.Wave_32MapCode.GDNewSprite2Objects3.length = 0;
gdjs.Wave_32MapCode.GDNewSprite2Objects4.length = 0;
gdjs.Wave_32MapCode.GDHealthBarObjects1.length = 0;
gdjs.Wave_32MapCode.GDHealthBarObjects2.length = 0;
gdjs.Wave_32MapCode.GDHealthBarObjects3.length = 0;
gdjs.Wave_32MapCode.GDHealthBarObjects4.length = 0;
gdjs.Wave_32MapCode.GDEnemySpawnerObjects1.length = 0;
gdjs.Wave_32MapCode.GDEnemySpawnerObjects2.length = 0;
gdjs.Wave_32MapCode.GDEnemySpawnerObjects3.length = 0;
gdjs.Wave_32MapCode.GDEnemySpawnerObjects4.length = 0;
gdjs.Wave_32MapCode.GDScoreBoardObjects1.length = 0;
gdjs.Wave_32MapCode.GDScoreBoardObjects2.length = 0;
gdjs.Wave_32MapCode.GDScoreBoardObjects3.length = 0;
gdjs.Wave_32MapCode.GDScoreBoardObjects4.length = 0;
gdjs.Wave_32MapCode.GDKillsObjects1.length = 0;
gdjs.Wave_32MapCode.GDKillsObjects2.length = 0;
gdjs.Wave_32MapCode.GDKillsObjects3.length = 0;
gdjs.Wave_32MapCode.GDKillsObjects4.length = 0;
gdjs.Wave_32MapCode.GDSheildObjects1.length = 0;
gdjs.Wave_32MapCode.GDSheildObjects2.length = 0;
gdjs.Wave_32MapCode.GDSheildObjects3.length = 0;
gdjs.Wave_32MapCode.GDSheildObjects4.length = 0;

gdjs.Wave_32MapCode.eventsList9(runtimeScene);

return;

}

gdjs['Wave_32MapCode'] = gdjs.Wave_32MapCode;
