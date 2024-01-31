function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6EZbtFDSvL8":
        Script1();
        break;
      case "6heyESkhuhr":
        Script2();
        break;
      case "61U4ESfMxrL":
        Script3();
        break;
      case "6QQjxH9TimT":
        Script4();
        break;
      case "6bzq6hd09ZZ":
        Script5();
        break;
  }
}

window.InitExecuteScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script1 = function()
{
  const target = object('5cZYhvKeOvT');
const duration = 750;
const easing = 'ease-out';
const id = '6H1oNtLAyX9';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script2 = function()
{
  const target = object('6eJfw7V65Bx');
const duration = 750;
const easing = 'ease-out';
const id = '6H1oNtLAyX9';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script3 = function()
{
  const target = object('5x1ua42l54O');
const duration = 750;
const easing = 'ease-out';
const id = '6H1oNtLAyX9';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script4 = function()
{
  const target = object('64Xq8gvFzu2');
const duration = 750;
const easing = 'ease-out';
const id = '6H1oNtLAyX9';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script5 = function()
{
  const target = object('63JKTLwSire');
const duration = 750;
const easing = 'ease-out';
const id = '6H1oNtLAyX9';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

};
