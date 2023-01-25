gdjs.Death_32ScreenCode = {};
gdjs.Death_32ScreenCode.GDBackgroundDeathObjects1= [];
gdjs.Death_32ScreenCode.GDBackgroundDeathObjects2= [];
gdjs.Death_32ScreenCode.GDNewBBTextObjects1= [];
gdjs.Death_32ScreenCode.GDNewBBTextObjects2= [];
gdjs.Death_32ScreenCode.GDNewBBText2Objects1= [];
gdjs.Death_32ScreenCode.GDNewBBText2Objects2= [];
gdjs.Death_32ScreenCode.GDNewSpriteObjects1= [];
gdjs.Death_32ScreenCode.GDNewSpriteObjects2= [];
gdjs.Death_32ScreenCode.GDNewBBText3Objects1= [];
gdjs.Death_32ScreenCode.GDNewBBText3Objects2= [];

gdjs.Death_32ScreenCode.conditionTrue_0 = {val:false};
gdjs.Death_32ScreenCode.condition0IsTrue_0 = {val:false};
gdjs.Death_32ScreenCode.condition1IsTrue_0 = {val:false};


gdjs.Death_32ScreenCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.Death_32ScreenCode.GDNewSpriteObjects1);

gdjs.Death_32ScreenCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Death_32ScreenCode.GDNewSpriteObjects1.length;i<l;++i) {
    if ( gdjs.Death_32ScreenCode.GDNewSpriteObjects1[i].getBehavior("button").isClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.Death_32ScreenCode.condition0IsTrue_0.val = true;
        gdjs.Death_32ScreenCode.GDNewSpriteObjects1[k] = gdjs.Death_32ScreenCode.GDNewSpriteObjects1[i];
        ++k;
    }
}
gdjs.Death_32ScreenCode.GDNewSpriteObjects1.length = k;}if (gdjs.Death_32ScreenCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Menu", false);
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("NewBBText3"), gdjs.Death_32ScreenCode.GDNewBBText3Objects1);
{for(var i = 0, len = gdjs.Death_32ScreenCode.GDNewBBText3Objects1.length ;i < len;++i) {
    gdjs.Death_32ScreenCode.GDNewBBText3Objects1[i].setBBText("Score: " + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(3)));
}
}}

}


{


{
{gdjs.evtTools.input.showCursor(runtimeScene);
}}

}


};

gdjs.Death_32ScreenCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Death_32ScreenCode.GDBackgroundDeathObjects1.length = 0;
gdjs.Death_32ScreenCode.GDBackgroundDeathObjects2.length = 0;
gdjs.Death_32ScreenCode.GDNewBBTextObjects1.length = 0;
gdjs.Death_32ScreenCode.GDNewBBTextObjects2.length = 0;
gdjs.Death_32ScreenCode.GDNewBBText2Objects1.length = 0;
gdjs.Death_32ScreenCode.GDNewBBText2Objects2.length = 0;
gdjs.Death_32ScreenCode.GDNewSpriteObjects1.length = 0;
gdjs.Death_32ScreenCode.GDNewSpriteObjects2.length = 0;
gdjs.Death_32ScreenCode.GDNewBBText3Objects1.length = 0;
gdjs.Death_32ScreenCode.GDNewBBText3Objects2.length = 0;

gdjs.Death_32ScreenCode.eventsList0(runtimeScene);

return;

}

gdjs['Death_32ScreenCode'] = gdjs.Death_32ScreenCode;
