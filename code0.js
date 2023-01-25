gdjs.MenuCode = {};
gdjs.MenuCode.GDBackgroundObjects1= [];
gdjs.MenuCode.GDBackgroundObjects2= [];
gdjs.MenuCode.GDHyperdriveObjects1= [];
gdjs.MenuCode.GDHyperdriveObjects2= [];
gdjs.MenuCode.GDStarWarsLogoObjects1= [];
gdjs.MenuCode.GDStarWarsLogoObjects2= [];
gdjs.MenuCode.GDSubTitleObjects1= [];
gdjs.MenuCode.GDSubTitleObjects2= [];
gdjs.MenuCode.GDStoryObjects1= [];
gdjs.MenuCode.GDStoryObjects2= [];
gdjs.MenuCode.GDStartObjects1= [];
gdjs.MenuCode.GDStartObjects2= [];
gdjs.MenuCode.GDStart2Objects1= [];
gdjs.MenuCode.GDStart2Objects2= [];
gdjs.MenuCode.GDSTARTObjects1= [];
gdjs.MenuCode.GDSTARTObjects2= [];
gdjs.MenuCode.GDHighScoreObjects1= [];
gdjs.MenuCode.GDHighScoreObjects2= [];

gdjs.MenuCode.conditionTrue_0 = {val:false};
gdjs.MenuCode.condition0IsTrue_0 = {val:false};
gdjs.MenuCode.condition1IsTrue_0 = {val:false};


gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDStart2Objects2Objects = Hashtable.newFrom({"Start2": gdjs.MenuCode.GDStart2Objects2});
gdjs.MenuCode.asyncCallback20410868 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(runtimeScene.getObjects("HighScore"), gdjs.MenuCode.GDHighScoreObjects2);
gdjs.copyArray(runtimeScene.getObjects("START"), gdjs.MenuCode.GDSTARTObjects2);
gdjs.copyArray(runtimeScene.getObjects("StarWarsLogo"), gdjs.MenuCode.GDStarWarsLogoObjects2);
gdjs.copyArray(asyncObjectsList.getObjects("Start"), gdjs.MenuCode.GDStartObjects2);

gdjs.copyArray(runtimeScene.getObjects("Story"), gdjs.MenuCode.GDStoryObjects2);
gdjs.copyArray(runtimeScene.getObjects("SubTitle"), gdjs.MenuCode.GDSubTitleObjects2);
gdjs.MenuCode.GDStart2Objects2.length = 0;

{for(var i = 0, len = gdjs.MenuCode.GDStarWarsLogoObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDStarWarsLogoObjects2[i].hide();
}
}{for(var i = 0, len = gdjs.MenuCode.GDSubTitleObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDSubTitleObjects2[i].hide();
}
}{gdjs.evtTools.sound.playMusic(runtimeScene, "8d82b5_Star_Wars_Main_Theme_Song.mp3", false, 100, 1);
}{for(var i = 0, len = gdjs.MenuCode.GDStoryObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDStoryObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.MenuCode.GDStartObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDStartObjects2[i].hide();
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDStart2Objects2Objects, (( gdjs.MenuCode.GDStartObjects2.length === 0 ) ? 0 :gdjs.MenuCode.GDStartObjects2[0].getPointX("")), (( gdjs.MenuCode.GDStartObjects2.length === 0 ) ? 0 :gdjs.MenuCode.GDStartObjects2[0].getPointY("")), "");
}{for(var i = 0, len = gdjs.MenuCode.GDStart2Objects2.length ;i < len;++i) {
    gdjs.MenuCode.GDStart2Objects2[i].setHeight((( gdjs.MenuCode.GDStartObjects2.length === 0 ) ? 0 :gdjs.MenuCode.GDStartObjects2[0].getHeight()));
}
}{for(var i = 0, len = gdjs.MenuCode.GDStart2Objects2.length ;i < len;++i) {
    gdjs.MenuCode.GDStart2Objects2[i].setWidth((( gdjs.MenuCode.GDStartObjects2.length === 0 ) ? 0 :gdjs.MenuCode.GDStartObjects2[0].getWidth()));
}
}{for(var i = 0, len = gdjs.MenuCode.GDSTARTObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDSTARTObjects2[i].setZOrder(gdjs.MenuCode.GDSTARTObjects2[i].getZOrder() + (100));
}
}{for(var i = 0, len = gdjs.MenuCode.GDHighScoreObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDHighScoreObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.MenuCode.GDHighScoreObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDHighScoreObjects2[i].setAlignment("center");
}
}}
gdjs.MenuCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
for (const obj of gdjs.MenuCode.GDStartObjects1) asyncObjectsList.addObject("Start", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.2), (runtimeScene) => (gdjs.MenuCode.asyncCallback20410868(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.MenuCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Start"), gdjs.MenuCode.GDStartObjects1);

gdjs.MenuCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MenuCode.GDStartObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDStartObjects1[i].getBehavior("button").isClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.MenuCode.condition0IsTrue_0.val = true;
        gdjs.MenuCode.GDStartObjects1[k] = gdjs.MenuCode.GDStartObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDStartObjects1.length = k;}if (gdjs.MenuCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.MenuCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("HighScore"), gdjs.MenuCode.GDHighScoreObjects1);
gdjs.copyArray(runtimeScene.getObjects("Start2"), gdjs.MenuCode.GDStart2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Story"), gdjs.MenuCode.GDStoryObjects1);
{for(var i = 0, len = gdjs.MenuCode.GDStoryObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDStoryObjects1[i].hide();
}
}{gdjs.evtTools.sound.preloadMusic(runtimeScene, "8d82b5_Star_Wars_Main_Theme_Song2.mp3");
}{for(var i = 0, len = gdjs.MenuCode.GDStart2Objects1.length ;i < len;++i) {
    gdjs.MenuCode.GDStart2Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.MenuCode.GDHighScoreObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDHighScoreObjects1[i].setBBText("HIGH SCORE: " + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(9)));
}
}{for(var i = 0, len = gdjs.MenuCode.GDHighScoreObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDHighScoreObjects1[i].hide();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Start2"), gdjs.MenuCode.GDStart2Objects1);

gdjs.MenuCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MenuCode.GDStart2Objects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDStart2Objects1[i].getBehavior("button").isClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.MenuCode.condition0IsTrue_0.val = true;
        gdjs.MenuCode.GDStart2Objects1[k] = gdjs.MenuCode.GDStart2Objects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDStart2Objects1.length = k;}if (gdjs.MenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Wave Map", false);
}}

}


};

gdjs.MenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MenuCode.GDBackgroundObjects1.length = 0;
gdjs.MenuCode.GDBackgroundObjects2.length = 0;
gdjs.MenuCode.GDHyperdriveObjects1.length = 0;
gdjs.MenuCode.GDHyperdriveObjects2.length = 0;
gdjs.MenuCode.GDStarWarsLogoObjects1.length = 0;
gdjs.MenuCode.GDStarWarsLogoObjects2.length = 0;
gdjs.MenuCode.GDSubTitleObjects1.length = 0;
gdjs.MenuCode.GDSubTitleObjects2.length = 0;
gdjs.MenuCode.GDStoryObjects1.length = 0;
gdjs.MenuCode.GDStoryObjects2.length = 0;
gdjs.MenuCode.GDStartObjects1.length = 0;
gdjs.MenuCode.GDStartObjects2.length = 0;
gdjs.MenuCode.GDStart2Objects1.length = 0;
gdjs.MenuCode.GDStart2Objects2.length = 0;
gdjs.MenuCode.GDSTARTObjects1.length = 0;
gdjs.MenuCode.GDSTARTObjects2.length = 0;
gdjs.MenuCode.GDHighScoreObjects1.length = 0;
gdjs.MenuCode.GDHighScoreObjects2.length = 0;

gdjs.MenuCode.eventsList1(runtimeScene);

return;

}

gdjs['MenuCode'] = gdjs.MenuCode;
