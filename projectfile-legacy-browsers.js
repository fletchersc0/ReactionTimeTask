/******************** 
 * Projectfile *
 ********************/


// store info about the experiment session:
let expName = 'projectfile';  // from the Builder filename that created this script
let expInfo = {
    'participant': `${util.pad(Number.parseFloat(util.randint(0, 999999)).toFixed(0), 6)}`,
    'session': '001',
};

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([0,0,0]),
  units: 'height',
  waitBlanking: true,
  backgroundImage: '',
  backgroundFit: 'none',
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); },flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(Press_spaceRoutineBegin());
flowScheduler.add(Press_spaceRoutineEachFrame());
flowScheduler.add(Press_spaceRoutineEnd());
const trial_statementLOOPLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trial_statementLOOPLoopBegin(trial_statementLOOPLoopScheduler));
flowScheduler.add(trial_statementLOOPLoopScheduler);
flowScheduler.add(trial_statementLOOPLoopEnd);




flowScheduler.add(FinishRoutineBegin());
flowScheduler.add(FinishRoutineEachFrame());
flowScheduler.add(FinishRoutineEnd());
flowScheduler.add(quitPsychoJS, 'Thank you for your patience.', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, 'Thank you for your patience.', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    // resources:
    {'name': 'stimuli.xlsx', 'path': 'stimuli.xlsx'},
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.INFO);


var currentLoop;
var frameDur;
async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2024.2.4';
  expInfo['OS'] = window.navigator.platform;


  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  

  
  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["participant"]}_${expName}_${expInfo["date"]}`);
  psychoJS.experiment.field_separator = '\t';


  return Scheduler.Event.NEXT;
}


var Press_spaceClock;
var textPressSpaceToBeginMessage;
var Key_press_space;
var statement_trialClock;
var polygon;
var Statement_debug;
var key_resp_TRUE;
var key_resp_FALSE;
var blank300msClock;
var text_blank300ms;
var fact_checkClock;
var FinishClock;
var thankyouText;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "Press_space"
  Press_spaceClock = new util.Clock();
  textPressSpaceToBeginMessage = new visual.TextStim({
    win: psychoJS.window,
    name: 'textPressSpaceToBeginMessage',
    text: 'Press space to begin',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  Key_press_space = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "statement_trial"
  statement_trialClock = new util.Clock();
  polygon = new visual.ShapeStim ({
    win: psychoJS.window, name: 'polygon', 
    vertices: 'cross', size:[0.05, 0.05],
    ori: 0.0, 
    pos: [0, 0], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color('white'), 
    fillColor: new util.Color('white'), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: 0, 
    interpolate: true, 
  });
  
  Statement_debug = new visual.TextStim({
    win: psychoJS.window,
    name: 'Statement_debug',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  key_resp_TRUE = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  key_resp_FALSE = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "blank300ms"
  blank300msClock = new util.Clock();
  text_blank300ms = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_blank300ms',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Initialize components for Routine "fact_check"
  fact_checkClock = new util.Clock();
  // Initialize components for Routine "Finish"
  FinishClock = new util.Clock();
  thankyouText = new visual.TextStim({
    win: psychoJS.window,
    name: 'thankyouText',
    text: 'Please wait while we save your results....',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var Press_spaceMaxDurationReached;
var _Key_press_space_allKeys;
var Press_spaceMaxDuration;
var Press_spaceComponents;
function Press_spaceRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Press_space' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    Press_spaceClock.reset();
    routineTimer.reset();
    Press_spaceMaxDurationReached = false;
    // update component parameters for each repeat
    Key_press_space.keys = undefined;
    Key_press_space.rt = undefined;
    _Key_press_space_allKeys = [];
    psychoJS.experiment.addData('Press_space.started', globalClock.getTime());
    Press_spaceMaxDuration = null
    // keep track of which components have finished
    Press_spaceComponents = [];
    Press_spaceComponents.push(textPressSpaceToBeginMessage);
    Press_spaceComponents.push(Key_press_space);
    
    Press_spaceComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function Press_spaceRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Press_space' ---
    // get current time
    t = Press_spaceClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *textPressSpaceToBeginMessage* updates
    if (t >= 0 && textPressSpaceToBeginMessage.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textPressSpaceToBeginMessage.tStart = t;  // (not accounting for frame time here)
      textPressSpaceToBeginMessage.frameNStart = frameN;  // exact frame index
      
      textPressSpaceToBeginMessage.setAutoDraw(true);
    }
    
    
    // *Key_press_space* updates
    if (t >= 0.0 && Key_press_space.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Key_press_space.tStart = t;  // (not accounting for frame time here)
      Key_press_space.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { Key_press_space.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { Key_press_space.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { Key_press_space.clearEvents(); });
    }
    
    if (Key_press_space.status === PsychoJS.Status.STARTED) {
      let theseKeys = Key_press_space.getKeys({keyList: ['space'], waitRelease: false});
      _Key_press_space_allKeys = _Key_press_space_allKeys.concat(theseKeys);
      if (_Key_press_space_allKeys.length > 0) {
        Key_press_space.keys = _Key_press_space_allKeys[_Key_press_space_allKeys.length - 1].name;  // just the last key pressed
        Key_press_space.rt = _Key_press_space_allKeys[_Key_press_space_allKeys.length - 1].rt;
        Key_press_space.duration = _Key_press_space_allKeys[_Key_press_space_allKeys.length - 1].duration;
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
    Press_spaceComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Press_spaceRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Press_space' ---
    Press_spaceComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('Press_space.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(Key_press_space.corr, level);
    }
    psychoJS.experiment.addData('Key_press_space.keys', Key_press_space.keys);
    if (typeof Key_press_space.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('Key_press_space.rt', Key_press_space.rt);
        psychoJS.experiment.addData('Key_press_space.duration', Key_press_space.duration);
        routineTimer.reset();
        }
    
    Key_press_space.stop();
    // the Routine "Press_space" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var trial_statementLOOP;
function trial_statementLOOPLoopBegin(trial_statementLOOPLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trial_statementLOOP = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 5, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'stimuli.xlsx',
      seed: undefined, name: 'trial_statementLOOP'
    });
    psychoJS.experiment.addLoop(trial_statementLOOP); // add the loop to the experiment
    currentLoop = trial_statementLOOP;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    trial_statementLOOP.forEach(function() {
      snapshot = trial_statementLOOP.getSnapshot();
    
      trial_statementLOOPLoopScheduler.add(importConditions(snapshot));
      trial_statementLOOPLoopScheduler.add(statement_trialRoutineBegin(snapshot));
      trial_statementLOOPLoopScheduler.add(statement_trialRoutineEachFrame());
      trial_statementLOOPLoopScheduler.add(statement_trialRoutineEnd(snapshot));
      trial_statementLOOPLoopScheduler.add(blank300msRoutineBegin(snapshot));
      trial_statementLOOPLoopScheduler.add(blank300msRoutineEachFrame());
      trial_statementLOOPLoopScheduler.add(blank300msRoutineEnd(snapshot));
      trial_statementLOOPLoopScheduler.add(fact_checkRoutineBegin(snapshot));
      trial_statementLOOPLoopScheduler.add(fact_checkRoutineEachFrame());
      trial_statementLOOPLoopScheduler.add(fact_checkRoutineEnd(snapshot));
      trial_statementLOOPLoopScheduler.add(trial_statementLOOPLoopEndIteration(trial_statementLOOPLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function trial_statementLOOPLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trial_statementLOOP);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trial_statementLOOPLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var statement_trialMaxDurationReached;
var _key_resp_TRUE_allKeys;
var _key_resp_FALSE_allKeys;
var statement_trialMaxDuration;
var statement_trialComponents;
function statement_trialRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'statement_trial' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    statement_trialClock.reset(routineTimer.getTime());
    routineTimer.add(2.400000);
    statement_trialMaxDurationReached = false;
    // update component parameters for each repeat
    Statement_debug.setText(statement);
    key_resp_TRUE.keys = undefined;
    key_resp_TRUE.rt = undefined;
    _key_resp_TRUE_allKeys = [];
    key_resp_FALSE.keys = undefined;
    key_resp_FALSE.rt = undefined;
    _key_resp_FALSE_allKeys = [];
    psychoJS.experiment.addData('statement_trial.started', globalClock.getTime());
    statement_trialMaxDuration = null
    // keep track of which components have finished
    statement_trialComponents = [];
    statement_trialComponents.push(polygon);
    statement_trialComponents.push(Statement_debug);
    statement_trialComponents.push(key_resp_TRUE);
    statement_trialComponents.push(key_resp_FALSE);
    
    statement_trialComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function statement_trialRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'statement_trial' ---
    // get current time
    t = statement_trialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *polygon* updates
    if (t >= 0.0 && polygon.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      polygon.tStart = t;  // (not accounting for frame time here)
      polygon.frameNStart = frameN;  // exact frame index
      
      polygon.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (polygon.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      polygon.setAutoDraw(false);
    }
    
    
    // *Statement_debug* updates
    if (t >= 0.8 && Statement_debug.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Statement_debug.tStart = t;  // (not accounting for frame time here)
      Statement_debug.frameNStart = frameN;  // exact frame index
      
      Statement_debug.setAutoDraw(true);
    }
    
    frameRemains = 0.8 + 1.6 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (Statement_debug.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Statement_debug.setAutoDraw(false);
    }
    
    
    // *key_resp_TRUE* updates
    if (t >= 0.8 && key_resp_TRUE.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_TRUE.tStart = t;  // (not accounting for frame time here)
      key_resp_TRUE.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_TRUE.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_TRUE.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_TRUE.clearEvents(); });
    }
    
    frameRemains = 0.8 + 1.6 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (key_resp_TRUE.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      key_resp_TRUE.status = PsychoJS.Status.FINISHED;
        }
      
    if (key_resp_TRUE.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_TRUE.getKeys({keyList: ['f'], waitRelease: false});
      _key_resp_TRUE_allKeys = _key_resp_TRUE_allKeys.concat(theseKeys);
      if (_key_resp_TRUE_allKeys.length > 0) {
        key_resp_TRUE.keys = _key_resp_TRUE_allKeys[_key_resp_TRUE_allKeys.length - 1].name;  // just the last key pressed
        key_resp_TRUE.rt = _key_resp_TRUE_allKeys[_key_resp_TRUE_allKeys.length - 1].rt;
        key_resp_TRUE.duration = _key_resp_TRUE_allKeys[_key_resp_TRUE_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *key_resp_FALSE* updates
    if (t >= 0.8 && key_resp_FALSE.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_FALSE.tStart = t;  // (not accounting for frame time here)
      key_resp_FALSE.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_FALSE.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_FALSE.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_FALSE.clearEvents(); });
    }
    
    frameRemains = 0.8 + 1.6 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (key_resp_FALSE.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      key_resp_FALSE.status = PsychoJS.Status.FINISHED;
        }
      
    if (key_resp_FALSE.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_FALSE.getKeys({keyList: ['j'], waitRelease: false});
      _key_resp_FALSE_allKeys = _key_resp_FALSE_allKeys.concat(theseKeys);
      if (_key_resp_FALSE_allKeys.length > 0) {
        key_resp_FALSE.keys = _key_resp_FALSE_allKeys[_key_resp_FALSE_allKeys.length - 1].name;  // just the last key pressed
        key_resp_FALSE.rt = _key_resp_FALSE_allKeys[_key_resp_FALSE_allKeys.length - 1].rt;
        key_resp_FALSE.duration = _key_resp_FALSE_allKeys[_key_resp_FALSE_allKeys.length - 1].duration;
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
    statement_trialComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function statement_trialRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'statement_trial' ---
    statement_trialComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('statement_trial.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_TRUE.corr, level);
    }
    psychoJS.experiment.addData('key_resp_TRUE.keys', key_resp_TRUE.keys);
    if (typeof key_resp_TRUE.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_TRUE.rt', key_resp_TRUE.rt);
        psychoJS.experiment.addData('key_resp_TRUE.duration', key_resp_TRUE.duration);
        routineTimer.reset();
        }
    
    key_resp_TRUE.stop();
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_FALSE.corr, level);
    }
    psychoJS.experiment.addData('key_resp_FALSE.keys', key_resp_FALSE.keys);
    if (typeof key_resp_FALSE.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_FALSE.rt', key_resp_FALSE.rt);
        psychoJS.experiment.addData('key_resp_FALSE.duration', key_resp_FALSE.duration);
        routineTimer.reset();
        }
    
    key_resp_FALSE.stop();
    if (statement_trialMaxDurationReached) {
        statement_trialClock.add(statement_trialMaxDuration);
    } else {
        statement_trialClock.add(2.400000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var blank300msMaxDurationReached;
var blank300msMaxDuration;
var blank300msComponents;
function blank300msRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'blank300ms' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    blank300msClock.reset(routineTimer.getTime());
    routineTimer.add(0.300000);
    blank300msMaxDurationReached = false;
    // update component parameters for each repeat
    psychoJS.experiment.addData('blank300ms.started', globalClock.getTime());
    blank300msMaxDuration = null
    // keep track of which components have finished
    blank300msComponents = [];
    blank300msComponents.push(text_blank300ms);
    
    blank300msComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function blank300msRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'blank300ms' ---
    // get current time
    t = blank300msClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_blank300ms* updates
    if (t >= 0.0 && text_blank300ms.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_blank300ms.tStart = t;  // (not accounting for frame time here)
      text_blank300ms.frameNStart = frameN;  // exact frame index
      
      text_blank300ms.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 0.3 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_blank300ms.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_blank300ms.setAutoDraw(false);
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
    blank300msComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function blank300msRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'blank300ms' ---
    blank300msComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('blank300ms.stopped', globalClock.getTime());
    if (blank300msMaxDurationReached) {
        blank300msClock.add(blank300msMaxDuration);
    } else {
        blank300msClock.add(0.300000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var fact_checkMaxDurationReached;
var fact_checkMaxDuration;
var fact_checkComponents;
function fact_checkRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'fact_check' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    fact_checkClock.reset();
    routineTimer.reset();
    fact_checkMaxDurationReached = false;
    // update component parameters for each repeat
    psychoJS.experiment.addData('fact_check.started', globalClock.getTime());
    fact_checkMaxDuration = null
    // keep track of which components have finished
    fact_checkComponents = [];
    
    fact_checkComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function fact_checkRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'fact_check' ---
    // get current time
    t = fact_checkClock.getTime();
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
    fact_checkComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function fact_checkRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'fact_check' ---
    fact_checkComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('fact_check.stopped', globalClock.getTime());
    // the Routine "fact_check" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var FinishMaxDurationReached;
var FinishMaxDuration;
var FinishComponents;
function FinishRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Finish' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    FinishClock.reset(routineTimer.getTime());
    routineTimer.add(1.000000);
    FinishMaxDurationReached = false;
    // update component parameters for each repeat
    // Disable downloading results to browser
    psychoJS._saveResults = 0; 
    
    // Generate filename for results
    let filename = psychoJS._experiment._experimentName + '_' + psychoJS._experiment._datetime + '.csv';
    
    // Extract data object from experiment
    let dataObj = psychoJS._experiment._trialsData;
    
    // Convert data object to CSV
    let data = [Object.keys(dataObj[0])].concat(dataObj).map(it => {
        return Object.values(it).toString()
    }).join('\n')
    
    // Send data to OSF via DataPipe
    console.log('Saving data...');
    fetch('https://pipe.jspsych.org/api/data', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: '*/*',
        },
        body: JSON.stringify({
            experimentID: 'KcOGdOkPHvGH', // ⭑ UPDATE WITH YOUR DATAPIPE EXPERIMENT ID ⭑
            filename: filename,
            data: data,
        }),
    }).then(response => response.json()).then(data => {
        // Log response and force experiment end
        console.log(data);
        quitPsychoJS();
    })
    psychoJS.experiment.addData('Finish.started', globalClock.getTime());
    FinishMaxDuration = null
    // keep track of which components have finished
    FinishComponents = [];
    FinishComponents.push(thankyouText);
    
    FinishComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function FinishRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Finish' ---
    // get current time
    t = FinishClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *thankyouText* updates
    if (t >= 0.0 && thankyouText.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      thankyouText.tStart = t;  // (not accounting for frame time here)
      thankyouText.frameNStart = frameN;  // exact frame index
      
      thankyouText.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (thankyouText.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      thankyouText.setAutoDraw(false);
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
    FinishComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function FinishRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Finish' ---
    FinishComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('Finish.stopped', globalClock.getTime());
    if (FinishMaxDurationReached) {
        FinishClock.add(FinishMaxDuration);
    } else {
        FinishClock.add(1.000000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
