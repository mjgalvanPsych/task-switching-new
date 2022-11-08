/*********************** 
 * Task-Switching Test *
 ***********************/

import { PsychoJS } from './lib/core-2020.1.js';
import * as core from './lib/core-2020.1.js';
import { TrialHandler } from './lib/data-2020.1.js';
import { Scheduler } from './lib/util-2020.1.js';
import * as util from './lib/util-2020.1.js';
import * as visual from './lib/visual-2020.1.js';
import * as sound from './lib/sound-2020.1.js';

// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color('black'),
  units: 'height',
  waitBlanking: true
});

// store info about the experiment session:
let expName = 'task-switching';  // from the Builder filename that created this script
let expInfo = {'participant': '', 'session': '001'};

// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(setupRoutineBegin());
flowScheduler.add(setupRoutineEachFrame());
flowScheduler.add(setupRoutineEnd());
flowScheduler.add(instrTOPRoutineBegin());
flowScheduler.add(instrTOPRoutineEachFrame());
flowScheduler.add(instrTOPRoutineEnd());
flowScheduler.add(instrBOTRoutineBegin());
flowScheduler.add(instrBOTRoutineEachFrame());
flowScheduler.add(instrBOTRoutineEnd());
const phaseLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(phaseLoopBegin, phaseLoopScheduler);
flowScheduler.add(phaseLoopScheduler);
flowScheduler.add(phaseLoopEnd);
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  });


var frameDur;
function updateInfo() {
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2020.1.2';
  expInfo['OS'] = window.navigator.platform;

  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  
  return Scheduler.Event.NEXT;
}


var setupClock;
var thisExp;
var instrTOPClock;
var text_instrTOP;
var key_resp_instrTOP;
var topExample;
var instrBOTClock;
var text_instrBOT;
var key_resp_instrBOT;
var botExample;
var instrClock;
var instrText;
var instrResp;
var phaseLoops;
var phaseLoopCounter;
var gridLineWidth;
var trialClock;
var responseNeeded;
var trialText;
var trialImage;
var key_resp;
var grid1;
var grid2;
var grid3;
var grid4;
var grid5;
var grid6;
var responseClock;
var respImage;
var globalClock;
var routineTimer;
function experimentInit() {
  // Initialize components for Routine "setup"
  setupClock = new util.Clock();
  thisExp = psychoJS.experiment;
  // Initialize components for Routine "instrTOP"
  instrTOPClock = new util.Clock();
  text_instrTOP = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_instrTOP',
    text: "In the TOP row (shape),\na diamond requires a 'x' button press,\na rectangle requires a 'm' button press.\n\nIn this row,\nIGNORE the filling (dots)\nof the shape!\n\nUse separate hands for each button if possible.\n\npress 'space' to continue",
    font: 'Arial',
    units: undefined, 
    pos: [0.3, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  key_resp_instrTOP = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  topExample = new visual.ImageStim({
    win : psychoJS.window,
    name : 'topExample', units : undefined, 
    image : 'topexample_2.png', mask : undefined,
    ori : 0, pos : [(- 0.5), 0], size : [0.5, 0.5],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -2.0 
  });
  // Initialize components for Routine "instrBOT"
  instrBOTClock = new util.Clock();
  text_instrBOT = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_instrBOT',
    text: "In the BOTTOM row (filling),\na filling of 2 dots requires a 'x' button press,\na filling of 3 dots requires a 'm' button press.\n\nIn this row,\nIGNORE the outer shape!\n\nUse separate hands for each button if possible.\n\npress 'space' to continue",
    font: 'Arial',
    units: undefined, 
    pos: [0.3, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  key_resp_instrBOT = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  botExample = new visual.ImageStim({
    win : psychoJS.window,
    name : 'botExample', units : undefined, 
    image : 'botexample_2.png', mask : undefined,
    ori : 0, pos : [(- 0.5), 0], size : [0.5, 0.5],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -2.0 
  });
  // Initialize components for Routine "instr"
  instrClock = new util.Clock();
  instrText = new visual.TextStim({
    win: psychoJS.window,
    name: 'instrText',
    text: 'Space to continue.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  instrResp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  phaseLoops = 3 // How many reps for phase loop
  phaseLoopCounter = -1;
  
  gridLineWidth = 10;
  // Initialize components for Routine "trial"
  trialClock = new util.Clock();
  responseNeeded = false; // Check if the response routine needs to run
  
  trialText = new visual.TextStim({
    win: psychoJS.window,
    name: 'trialText',
    text: 'Any text\n\nincluding line break',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.4), 0.4], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  trialImage = new visual.ImageStim({
    win : psychoJS.window,
    name : 'trialImage', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : [0.2, 0.2],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -2.0 
  });
  key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  grid1 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'grid1', 
    vertices: [[-[0.5, 0.5][0]/2.0, 0], [+[0.5, 0.5][0]/2.0, 0]],
    ori: 0, pos: [0, 0.25],
    lineWidth: gridLineWidth, lineColor: new util.Color(1.0),
    fillColor: new util.Color(1.0),
    opacity: 1, depth: -4, interpolate: true,
  });
  
  grid2 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'grid2', 
    vertices: [[-[0.5, 0.5][0]/2.0, 0], [+[0.5, 0.5][0]/2.0, 0]],
    ori: 0, pos: [0, 0],
    lineWidth: gridLineWidth, lineColor: new util.Color(1.0),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 1, depth: -5, interpolate: true,
  });
  
  grid3 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'grid3', 
    vertices: [[-[0.5, 0.5][0]/2.0, 0], [+[0.5, 0.5][0]/2.0, 0]],
    ori: 90, pos: [(- 0.25), 0.0],
    lineWidth: gridLineWidth, lineColor: new util.Color(1.0),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 1, depth: -6, interpolate: true,
  });
  
  grid4 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'grid4', 
    vertices: [[-[0.5, 0.5][0]/2.0, 0], [+[0.5, 0.5][0]/2.0, 0]],
    ori: 90, pos: [0, 0.0],
    lineWidth: gridLineWidth, lineColor: new util.Color(1.0),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 1, depth: -7, interpolate: true,
  });
  
  grid5 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'grid5', 
    vertices: [[-[0.5, 0.5][0]/2.0, 0], [+[0.5, 0.5][0]/2.0, 0]],
    ori: 90, pos: [0.25, 0.0],
    lineWidth: gridLineWidth, lineColor: new util.Color(1.0),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 1, depth: -8, interpolate: true,
  });
  
  grid6 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'grid6', 
    vertices: [[-[0.5, 0.5][0]/2.0, 0], [+[0.5, 0.5][0]/2.0, 0]],
    ori: 0, pos: [0, (- 0.25)],
    lineWidth: gridLineWidth, lineColor: new util.Color(1.0),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 1, depth: -9, interpolate: true,
  });
  
  // Initialize components for Routine "response"
  responseClock = new util.Clock();
  respImage = new visual.ImageStim({
    win : psychoJS.window,
    name : 'respImage', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : [0.5, 0.5],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : 0.0 
  });
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var setupComponents;
function setupRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'setup'-------
    t = 0;
    setupClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    // keep track of which components have finished
    setupComponents = [];
    
    for (const thisComponent of setupComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


var continueRoutine;
function setupRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'setup'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = setupClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of setupComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function setupRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'setup'-------
    for (const thisComponent of setupComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "setup" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_instrTOP_allKeys;
var instrTOPComponents;
function instrTOPRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'instrTOP'-------
    t = 0;
    instrTOPClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    key_resp_instrTOP.keys = undefined;
    key_resp_instrTOP.rt = undefined;
    _key_resp_instrTOP_allKeys = [];
    // keep track of which components have finished
    instrTOPComponents = [];
    instrTOPComponents.push(text_instrTOP);
    instrTOPComponents.push(key_resp_instrTOP);
    instrTOPComponents.push(topExample);
    
    for (const thisComponent of instrTOPComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function instrTOPRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'instrTOP'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = instrTOPClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_instrTOP* updates
    if (t >= 0.0 && text_instrTOP.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_instrTOP.tStart = t;  // (not accounting for frame time here)
      text_instrTOP.frameNStart = frameN;  // exact frame index
      
      text_instrTOP.setAutoDraw(true);
    }

    
    // *key_resp_instrTOP* updates
    if (t >= 0.0 && key_resp_instrTOP.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_instrTOP.tStart = t;  // (not accounting for frame time here)
      key_resp_instrTOP.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_instrTOP.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_instrTOP.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_instrTOP.clearEvents(); });
    }

    if (key_resp_instrTOP.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_instrTOP.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_instrTOP_allKeys = _key_resp_instrTOP_allKeys.concat(theseKeys);
      if (_key_resp_instrTOP_allKeys.length > 0) {
        key_resp_instrTOP.keys = _key_resp_instrTOP_allKeys[_key_resp_instrTOP_allKeys.length - 1].name;  // just the last key pressed
        key_resp_instrTOP.rt = _key_resp_instrTOP_allKeys[_key_resp_instrTOP_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *topExample* updates
    if (t >= 0.0 && topExample.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      topExample.tStart = t;  // (not accounting for frame time here)
      topExample.frameNStart = frameN;  // exact frame index
      
      topExample.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of instrTOPComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instrTOPRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'instrTOP'-------
    for (const thisComponent of instrTOPComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "instrTOP" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_instrBOT_allKeys;
var instrBOTComponents;
function instrBOTRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'instrBOT'-------
    t = 0;
    instrBOTClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    key_resp_instrBOT.keys = undefined;
    key_resp_instrBOT.rt = undefined;
    _key_resp_instrBOT_allKeys = [];
    // keep track of which components have finished
    instrBOTComponents = [];
    instrBOTComponents.push(text_instrBOT);
    instrBOTComponents.push(key_resp_instrBOT);
    instrBOTComponents.push(botExample);
    
    for (const thisComponent of instrBOTComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function instrBOTRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'instrBOT'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = instrBOTClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_instrBOT* updates
    if (t >= 0.0 && text_instrBOT.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_instrBOT.tStart = t;  // (not accounting for frame time here)
      text_instrBOT.frameNStart = frameN;  // exact frame index
      
      text_instrBOT.setAutoDraw(true);
    }

    
    // *key_resp_instrBOT* updates
    if (t >= 0.0 && key_resp_instrBOT.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_instrBOT.tStart = t;  // (not accounting for frame time here)
      key_resp_instrBOT.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_instrBOT.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_instrBOT.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_instrBOT.clearEvents(); });
    }

    if (key_resp_instrBOT.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_instrBOT.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_instrBOT_allKeys = _key_resp_instrBOT_allKeys.concat(theseKeys);
      if (_key_resp_instrBOT_allKeys.length > 0) {
        key_resp_instrBOT.keys = _key_resp_instrBOT_allKeys[_key_resp_instrBOT_allKeys.length - 1].name;  // just the last key pressed
        key_resp_instrBOT.rt = _key_resp_instrBOT_allKeys[_key_resp_instrBOT_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *botExample* updates
    if (t >= 0.0 && botExample.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      botExample.tStart = t;  // (not accounting for frame time here)
      botExample.frameNStart = frameN;  // exact frame index
      
      botExample.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of instrBOTComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instrBOTRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'instrBOT'-------
    for (const thisComponent of instrBOTComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "instrBOT" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var phase;
var currentLoop;
function phaseLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  phase = new TrialHandler({
    psychoJS: psychoJS,
    nReps: phaseLoops, method: TrialHandler.Method.RANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: undefined,
    seed: undefined, name: 'phase'
  });
  psychoJS.experiment.addLoop(phase); // add the loop to the experiment
  currentLoop = phase;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisPhase of phase) {
    const snapshot = phase.getSnapshot();
    thisScheduler.add(importConditions(snapshot));
    thisScheduler.add(instrRoutineBegin(snapshot));
    thisScheduler.add(instrRoutineEachFrame(snapshot));
    thisScheduler.add(instrRoutineEnd(snapshot));
    const trialsLoopScheduler = new Scheduler(psychoJS);
    thisScheduler.add(trialsLoopBegin, trialsLoopScheduler);
    thisScheduler.add(trialsLoopScheduler);
    thisScheduler.add(trialsLoopEnd);
    thisScheduler.add(endLoopIteration(thisScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


var trials;
function trialsLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  trials = new TrialHandler({
    psychoJS: psychoJS,
    nReps: totalTrials, method: TrialHandler.Method.RANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: undefined,
    seed: undefined, name: 'trials'
  });
  psychoJS.experiment.addLoop(trials); // add the loop to the experiment
  currentLoop = trials;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisTrial of trials) {
    const snapshot = trials.getSnapshot();
    thisScheduler.add(importConditions(snapshot));
    thisScheduler.add(trialRoutineBegin(snapshot));
    thisScheduler.add(trialRoutineEachFrame(snapshot));
    thisScheduler.add(trialRoutineEnd(snapshot));
    thisScheduler.add(responseRoutineBegin(snapshot));
    thisScheduler.add(responseRoutineEachFrame(snapshot));
    thisScheduler.add(responseRoutineEnd(snapshot));
    thisScheduler.add(endLoopIteration(thisScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


function trialsLoopEnd() {
  psychoJS.experiment.removeLoop(trials);

  return Scheduler.Event.NEXT;
}


function phaseLoopEnd() {
  psychoJS.experiment.removeLoop(phase);

  return Scheduler.Event.NEXT;
}


var _instrResp_allKeys;
var stimpositions;
var imageNames;
var responseImageNames;
var instructionText;
var numTrials;
var totalTrials;
var responseSwitches;
var corrAns;
var stimImage;
var instrComponents;
function instrRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'instr'-------
    t = 0;
    instrClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    instrResp.keys = undefined;
    instrResp.rt = undefined;
    _instrResp_allKeys = [];
    phaseLoopCounter += 1;
    
    stimpositions = [[(- 0.125), 0.125], [0.125, 0.125], [0.125, (- 0.125)], [(- 0.125), (- 0.125)]];
    imageNames = [ "diamond2.png", "diamond3.png", "square2.png", "square3.png"];
    responseImageNames = [ 'shape_response.png', 'filling_response.png' ];
    
    instructionText = [
        "Practice for SHAPE\nPress 'x' if you see a diamond. Press 'm' if you see a square.\n\nPress 'space' to continue",
        "Practice for FILLING\nPress 'x' if you see two dots. Press 'm' if you see three dots.\n\nPress 'space' to continue",
        "IN THE TOP HALF: Press 'x' if you see a diamond. Press 'm' if you see a square.\nIN THE BOTTOM HALF: Press 'x' if you see two dots. Press 'm' if you see three dots.\n\nPress 'space' to continue."
    ];
    
    instrText.text = instructionText[phaseLoopCounter];
    
    numTrials = [12,12,50]
    //numTrials = [1,1,5]
    
    
    totalTrials = numTrials[phaseLoopCounter];
    
    responseSwitches = new Array();
    corrAns = new Array();
    stimImage = new Array();
    
    for ( var i = 0; i < totalTrials/2; i++ ){
        responseSwitches[responseSwitches.length] = 0;
        responseSwitches[responseSwitches.length] = 1;
    }
    util.shuffle(responseSwitches);
    
    // Populate the corrAns array
    responseSwitches.forEach( function(item, index, array) {
        if ( item == 1 ) {
            corrAns.push('m');
        } else {
            corrAns.push('x');
        }
    });
    
    for ( var i = 0; i < responseSwitches.length; i++ ) {
        var posID;
        var imageName;
        if ( phaseLoopCounter == 0 ) {
            posID = i % 2;
        } else if ( phaseLoopCounter == 1 ) {
            posID = (i % 2) + 2;
        } else {
            posID = i % 4;
        }
    
        imageName = pickImg(posID, responseSwitches[i]);
        stimImage.push(imageName);
    }
    
    // Function to pick random images as a response
    function pickImg(pos, resp) {
        if ( pos == 0 || pos == 1 ) {
            if ( resp ) {
                return getRandom1or0() ? imageNames[2] : imageNames[3];
            } else {
                return getRandom1or0() ? imageNames[0] : imageNames[1];
            }
        } else {
            if ( resp ) {
                return getRandom1or0() ? imageNames[1] : imageNames[3];
            } else {
                return getRandom1or0() ? imageNames[0] : imageNames[2];
            }
        }
    }
    
    function getRandom1or0() {
        return Math.round( Math.random() );
    }
    
    console.log(responseSwitches);
    console.log(corrAns);
    console.log(stimImage);
    // keep track of which components have finished
    instrComponents = [];
    instrComponents.push(instrText);
    instrComponents.push(instrResp);
    
    for (const thisComponent of instrComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function instrRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'instr'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = instrClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *instrText* updates
    if (t >= 0.0 && instrText.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instrText.tStart = t;  // (not accounting for frame time here)
      instrText.frameNStart = frameN;  // exact frame index
      
      instrText.setAutoDraw(true);
    }

    
    // *instrResp* updates
    if (t >= 0.0 && instrResp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instrResp.tStart = t;  // (not accounting for frame time here)
      instrResp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { instrResp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { instrResp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { instrResp.clearEvents(); });
    }

    if (instrResp.status === PsychoJS.Status.STARTED) {
      let theseKeys = instrResp.getKeys({keyList: ['space'], waitRelease: false});
      _instrResp_allKeys = _instrResp_allKeys.concat(theseKeys);
      if (_instrResp_allKeys.length > 0) {
        instrResp.keys = _instrResp_allKeys[_instrResp_allKeys.length - 1].name;  // just the last key pressed
        instrResp.rt = _instrResp_allKeys[_instrResp_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of instrComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instrRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'instr'-------
    for (const thisComponent of instrComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "instr" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var stimposidx;
var stimpos;
var imageName;
var responseImage;
var feedbackColour;
var _key_resp_allKeys;
var trialComponents;
function trialRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'trial'-------
    t = 0;
    trialClock.reset(); // clock
    frameN = -1;
    routineTimer.add(10.000000);
    // update component parameters for each repeat
    const TOP = 0.25;
    const BOT = (-0.25);
    
    trialText.text = trials.thisN + "/" + trials.nTotal;
    
    if ( phaseLoopCounter == 0 ) {
        stimposidx = trials.thisN % 2;
    } else if ( phaseLoopCounter == 1 ) {
        stimposidx = (trials.thisN % 2) + 2;
    } else {
        stimposidx = trials.thisN % 4;
    }
    
    stimpos = stimpositions[stimposidx];
    imageName = stimImage[trials.thisN];
    
    // Set up the response image
    if ( stimposidx == 0 || stimposidx == 1) {
        responseImage = responseImageNames[0];
    } else {
        responseImage = responseImageNames[1];
    }
    
    feedbackColour = "white";
    
    
    
    trialImage.setPos(stimpos);
    trialImage.setImage(imageName);
    key_resp.keys = undefined;
    key_resp.rt = undefined;
    _key_resp_allKeys = [];
    // keep track of which components have finished
    trialComponents = [];
    trialComponents.push(trialText);
    trialComponents.push(trialImage);
    trialComponents.push(key_resp);
    trialComponents.push(grid1);
    trialComponents.push(grid2);
    trialComponents.push(grid3);
    trialComponents.push(grid4);
    trialComponents.push(grid5);
    trialComponents.push(grid6);
    
    for (const thisComponent of trialComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


var frameRemains;
function trialRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'trial'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = trialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    if ( key_resp.keys === 'x' || key_resp.keys === 'm' ) {
        if ( corrAns[trials.thisN] === key_resp.keys ) {
            feedbackColour = 'green';
            responseNeeded  = false;
            if (t > key_resp.rt + 0.5) {
                continueRoutine = false;
            }
        }
        if ( !(corrAns[trials.thisN] === key_resp.keys) ) {
            feedbackColour = 'red';
            responseNeeded = true;
            if (t > key_resp.rt + 0.5) {
                continueRoutine = false;
            }
        }
    }
    
    
    
    // *trialText* updates
    if (t >= 0.0 && trialText.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      trialText.tStart = t;  // (not accounting for frame time here)
      trialText.frameNStart = frameN;  // exact frame index
      
      trialText.setAutoDraw(true);
    }

    frameRemains = 0.0 + 10 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (trialText.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      trialText.setAutoDraw(false);
    }
    
    // *trialImage* updates
    if (t >= 0.0 && trialImage.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      trialImage.tStart = t;  // (not accounting for frame time here)
      trialImage.frameNStart = frameN;  // exact frame index
      
      trialImage.setAutoDraw(true);
    }

    frameRemains = 0.0 + 10 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (trialImage.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      trialImage.setAutoDraw(false);
    }
    
    // *key_resp* updates
    if (t >= 0.0 && key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp.tStart = t;  // (not accounting for frame time here)
      key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp.clearEvents(); });
    }

    frameRemains = 0.0 + 10 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (key_resp.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      key_resp.status = PsychoJS.Status.FINISHED;
  }

    if (key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp.getKeys({keyList: ['x', 'm'], waitRelease: false});
      _key_resp_allKeys = _key_resp_allKeys.concat(theseKeys);
      if (_key_resp_allKeys.length > 0) {
        key_resp.keys = _key_resp_allKeys[0].name;  // just the first key pressed
        key_resp.rt = _key_resp_allKeys[0].rt;
      }
    }
    
    
    // *grid1* updates
    if (t >= 0.0 && grid1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      grid1.tStart = t;  // (not accounting for frame time here)
      grid1.frameNStart = frameN;  // exact frame index
      
      grid1.setAutoDraw(true);
    }

    frameRemains = 0.0 + 10 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (grid1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      grid1.setAutoDraw(false);
    }
    
    if (grid1.status === PsychoJS.Status.STARTED){ // only update if being drawn
      grid1.setFillColor(new util.Color(feedbackColour));
      grid1.setLineColor(new util.Color(feedbackColour));
    }
    
    // *grid2* updates
    if (t >= 0.0 && grid2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      grid2.tStart = t;  // (not accounting for frame time here)
      grid2.frameNStart = frameN;  // exact frame index
      
      grid2.setAutoDraw(true);
    }

    frameRemains = 0.0 + 10 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (grid2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      grid2.setAutoDraw(false);
    }
    
    if (grid2.status === PsychoJS.Status.STARTED){ // only update if being drawn
      grid2.setLineColor(new util.Color(feedbackColour));
    }
    
    // *grid3* updates
    if (t >= 0.0 && grid3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      grid3.tStart = t;  // (not accounting for frame time here)
      grid3.frameNStart = frameN;  // exact frame index
      
      grid3.setAutoDraw(true);
    }

    frameRemains = 0.0 + 10 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (grid3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      grid3.setAutoDraw(false);
    }
    
    if (grid3.status === PsychoJS.Status.STARTED){ // only update if being drawn
      grid3.setLineColor(new util.Color(feedbackColour));
    }
    
    // *grid4* updates
    if (t >= 0.0 && grid4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      grid4.tStart = t;  // (not accounting for frame time here)
      grid4.frameNStart = frameN;  // exact frame index
      
      grid4.setAutoDraw(true);
    }

    frameRemains = 0.0 + 10 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (grid4.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      grid4.setAutoDraw(false);
    }
    
    if (grid4.status === PsychoJS.Status.STARTED){ // only update if being drawn
      grid4.setLineColor(new util.Color(feedbackColour));
    }
    
    // *grid5* updates
    if (t >= 0.0 && grid5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      grid5.tStart = t;  // (not accounting for frame time here)
      grid5.frameNStart = frameN;  // exact frame index
      
      grid5.setAutoDraw(true);
    }

    frameRemains = 0.0 + 10 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (grid5.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      grid5.setAutoDraw(false);
    }
    
    if (grid5.status === PsychoJS.Status.STARTED){ // only update if being drawn
      grid5.setLineColor(new util.Color(feedbackColour));
    }
    
    // *grid6* updates
    if (t >= 0.0 && grid6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      grid6.tStart = t;  // (not accounting for frame time here)
      grid6.frameNStart = frameN;  // exact frame index
      
      grid6.setAutoDraw(true);
    }

    frameRemains = 0.0 + 10 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (grid6.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      grid6.setAutoDraw(false);
    }
    
    if (grid6.status === PsychoJS.Status.STARTED){ // only update if being drawn
      grid6.setLineColor(new util.Color(feedbackColour));
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of trialComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trialRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'trial'-------
    for (const thisComponent of trialComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    thisExp.addData("correctAnswer", corrAns[trials.thisN]);
    thisExp.addData("gridLocation", stimpos);
    psychoJS.experiment.addData('key_resp.keys', key_resp.keys);
    if (typeof key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp.rt', key_resp.rt);
        }
    
    key_resp.stop();
    return Scheduler.Event.NEXT;
  };
}


var responseComponents;
function responseRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'response'-------
    t = 0;
    responseClock.reset(); // clock
    frameN = -1;
    routineTimer.add(2.000000);
    // update component parameters for each repeat
    respImage.setImage(responseImage);
    console.log("We're in the routine");
    
    console.log(trials.thisN%2);
    
    
    // keep track of which components have finished
    responseComponents = [];
    responseComponents.push(respImage);
    
    for (const thisComponent of responseComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function responseRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'response'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = responseClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *respImage* updates
    if (t >= 0.0 && respImage.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      respImage.tStart = t;  // (not accounting for frame time here)
      respImage.frameNStart = frameN;  // exact frame index
      
      respImage.setAutoDraw(true);
    }

    frameRemains = 0.0 + 2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (respImage.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      respImage.setAutoDraw(false);
    }
    if ( !responseNeeded ) {
        continueRoutine = false;
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of responseComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function responseRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'response'-------
    for (const thisComponent of responseComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    return Scheduler.Event.NEXT;
  };
}


function endLoopIteration(thisScheduler, loop) {
  // ------Prepare for next entry------
  return function () {
    if (typeof loop !== 'undefined') {
      // ------Check if user ended loop early------
      if (loop.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(loop);
        }
      thisScheduler.stop();
      } else {
        const thisTrial = loop.getCurrentTrial();
        if (typeof thisTrial === 'undefined' || !('isTrials' in thisTrial) || thisTrial.isTrials) {
          psychoJS.experiment.nextEntry(loop);
        }
      }
    return Scheduler.Event.NEXT;
    }
  };
}


function importConditions(trials) {
  return function () {
    psychoJS.importAttributes(trials.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  
  
  
  
  
  
  
  
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
