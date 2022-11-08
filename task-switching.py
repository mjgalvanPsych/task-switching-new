#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
This experiment was created using PsychoPy3 Experiment Builder (v2020.1.2),
    on Sun 09 Aug 2020 04:22:08 PM
If you publish work using this script the most relevant publication is:

    Peirce J, Gray JR, Simpson S, MacAskill M, Höchenberger R, Sogo H, Kastman E, Lindeløv JK. (2019) 
        PsychoPy2: Experiments in behavior made easy Behav Res 51: 195. 
        https://doi.org/10.3758/s13428-018-01193-y

"""

from __future__ import absolute_import, division

from psychopy import locale_setup
from psychopy import prefs
from psychopy import sound, gui, visual, core, data, event, logging, clock
from psychopy.constants import (NOT_STARTED, STARTED, PLAYING, PAUSED,
                                STOPPED, FINISHED, PRESSED, RELEASED, FOREVER)

import numpy as np  # whole numpy lib is available, prepend 'np.'
from numpy import (sin, cos, tan, log, log10, pi, average,
                   sqrt, std, deg2rad, rad2deg, linspace, asarray)
from numpy.random import random, randint, normal, shuffle
import os  # handy system and path functions
import sys  # to get file system encoding

from psychopy.hardware import keyboard



# Ensure that relative paths start from the same directory as this script
_thisDir = os.path.dirname(os.path.abspath(__file__))
os.chdir(_thisDir)

# Store info about the experiment session
psychopyVersion = '2020.1.2'
expName = 'task-switching-distanced-keys'  # from the Builder filename that created this script
expInfo = {'participant': '', 'session': '001'}
dlg = gui.DlgFromDict(dictionary=expInfo, sortKeys=False, title=expName)
if dlg.OK == False:
    core.quit()  # user pressed cancel
expInfo['date'] = data.getDateStr()  # add a simple timestamp
expInfo['expName'] = expName
expInfo['psychopyVersion'] = psychopyVersion

# Data file name stem = absolute path + name; later add .psyexp, .csv, .log, etc
filename = _thisDir + os.sep + u'data/%s_%s_%s' % (expInfo['participant'], expName, expInfo['date'])

# An ExperimentHandler isn't essential but helps with data saving
thisExp = data.ExperimentHandler(name=expName, version='',
    extraInfo=expInfo, runtimeInfo=None,
    originPath='/home/cthucl/psych-proj/task-switching/task-switching.py',
    savePickle=True, saveWideText=True,
    dataFileName=filename)
# save a log file for detail verbose info
logFile = logging.LogFile(filename+'.log', level=logging.EXP)
logging.console.setLevel(logging.WARNING)  # this outputs to the screen, not a file

endExpNow = False  # flag for 'escape' or other condition => quit the exp
frameTolerance = 0.001  # how close to onset before 'same' frame

# Start Code - component code to be run before the window creation

# Setup the Window
win = visual.Window(
    size=[1366, 768], fullscr=True, screen=0, 
    winType='pyglet', allowGUI=False, allowStencil=False,
    monitor='testMonitor', color='black', colorSpace='rgb',
    blendMode='avg', useFBO=True, 
    units='height')
# store frame rate of monitor if we can measure it
expInfo['frameRate'] = win.getActualFrameRate()
if expInfo['frameRate'] != None:
    frameDur = 1.0 / round(expInfo['frameRate'])
else:
    frameDur = 1.0 / 60.0  # could not measure, so guess

# create a default keyboard (e.g. to check for escape)
defaultKeyboard = keyboard.Keyboard()

# Initialize components for Routine "setup"
setupClock = core.Clock()

# Initialize components for Routine "instrTOP"
instrTOPClock = core.Clock()
text_instrTOP = visual.TextStim(win=win, name='text_instrTOP',
    text="In the TOP row (shape),\na diamond requires a 'x' button press,\na rectangle requires a 'm' button press.\n\nIn this row,\nIGNORE the filling (dots)\nof the shape!\n\nUse separate hands for each button if possible.\n\npress 'space' to continue",
    font='Arial',
    pos=(0.3, 0), height=0.05, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);
key_resp_instrTOP = keyboard.Keyboard()
topExample = visual.ImageStim(
    win=win,
    name='topExample', 
    image='topexample_2.png', mask=None,
    ori=0, pos=(-0.5, 0), size=(0.5, 0.5),
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=128, interpolate=True, depth=-2.0)

# Initialize components for Routine "instrBOT"
instrBOTClock = core.Clock()
text_instrBOT = visual.TextStim(win=win, name='text_instrBOT',
    text="In the BOTTOM row (filling),\na filling of 2 dots requires a 'x' button press,\na filling of 3 dots requires a 'm' button press.\n\nIn this row,\nIGNORE the outer shape!\n\nUse separate hands for each button if possible.\n\npress 'space' to continue",
    font='Arial',
    pos=(0.3, 0), height=0.05, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);
key_resp_instrBOT = keyboard.Keyboard()
botExample = visual.ImageStim(
    win=win,
    name='botExample', 
    image='botexample_2.png', mask=None,
    ori=0, pos=(-0.5, 0), size=(0.5, 0.5),
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=128, interpolate=True, depth=-2.0)

# Initialize components for Routine "instr"
instrClock = core.Clock()
instrText = visual.TextStim(win=win, name='instrText',
    text='Space to continue.',
    font='Arial',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);
instrResp = keyboard.Keyboard()

# Initialize components for Routine "trial"
trialClock = core.Clock()
stimpositions =  [[-.25, .25], [.25, .25], [.25, -.25], [-.25, -.25]];
trialText = visual.TextStim(win=win, name='trialText',
    text='Any text\n\nincluding line break',
    font='Arial',
    pos=(-0.4, 0.4), height=0.1, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-1.0);
trialImage = visual.ImageStim(
    win=win,
    name='trialImage', 
    image='sin', mask=None,
    ori=0, pos=[0,0], size=(0.2, 0.2),
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=128, interpolate=True, depth=-2.0)
key_resp = keyboard.Keyboard()
grid1 = visual.Line(
    win=win, name='grid1',
    start=(-(0.5, 0.5)[0]/2.0, 0), end=(+(0.5, 0.5)[0]/2.0, 0),
    ori=0, pos=(0, 0.25),
    lineWidth=gridLineWidth, lineColor=1.0, lineColorSpace='rgb',
    fillColor=1.0, fillColorSpace='rgb',
    opacity=1, depth=-4.0, interpolate=True)
grid2 = visual.Line(
    win=win, name='grid2',
    start=(-(0.5, 0.5)[0]/2.0, 0), end=(+(0.5, 0.5)[0]/2.0, 0),
    ori=0, pos=(0, 0),
    lineWidth=gridLineWidth, lineColor=1.0, lineColorSpace='rgb',
    fillColor=[1,1,1], fillColorSpace='rgb',
    opacity=1, depth=-5.0, interpolate=True)
grid3 = visual.Line(
    win=win, name='grid3',
    start=(-(0.5, 0.5)[0]/2.0, 0), end=(+(0.5, 0.5)[0]/2.0, 0),
    ori=90, pos=(-0.25, 0.0),
    lineWidth=gridLineWidth, lineColor=1.0, lineColorSpace='rgb',
    fillColor=[1,1,1], fillColorSpace='rgb',
    opacity=1, depth=-6.0, interpolate=True)
grid4 = visual.Line(
    win=win, name='grid4',
    start=(-(0.5, 0.5)[0]/2.0, 0), end=(+(0.5, 0.5)[0]/2.0, 0),
    ori=90, pos=(0, 0.0),
    lineWidth=gridLineWidth, lineColor=1.0, lineColorSpace='rgb',
    fillColor=[1,1,1], fillColorSpace='rgb',
    opacity=1, depth=-7.0, interpolate=True)
grid5 = visual.Line(
    win=win, name='grid5',
    start=(-(0.5, 0.5)[0]/2.0, 0), end=(+(0.5, 0.5)[0]/2.0, 0),
    ori=90, pos=(0.25, 0.0),
    lineWidth=gridLineWidth, lineColor=1.0, lineColorSpace='rgb',
    fillColor=[1,1,1], fillColorSpace='rgb',
    opacity=1, depth=-8.0, interpolate=True)
grid6 = visual.Line(
    win=win, name='grid6',
    start=(-(0.5, 0.5)[0]/2.0, 0), end=(+(0.5, 0.5)[0]/2.0, 0),
    ori=0, pos=(0, -0.25),
    lineWidth=gridLineWidth, lineColor=1.0, lineColorSpace='rgb',
    fillColor=[1,1,1], fillColorSpace='rgb',
    opacity=1, depth=-9.0, interpolate=True)

# Initialize components for Routine "response"
responseClock = core.Clock()
respImage = visual.ImageStim(
    win=win,
    name='respImage', 
    image='sin', mask=None,
    ori=0, pos=(0, 0), size=(0.5, 0.5),
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=128, interpolate=True, depth=0.0)

# Create some handy timers
globalClock = core.Clock()  # to track the time since experiment started
routineTimer = core.CountdownTimer()  # to track time remaining of each (non-slip) routine 

# ------Prepare to start Routine "setup"-------
continueRoutine = True
# update component parameters for each repeat
# keep track of which components have finished
setupComponents = []
for thisComponent in setupComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
setupClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "setup"-------
while continueRoutine:
    # get current time
    t = setupClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=setupClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in setupComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "setup"-------
for thisComponent in setupComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# the Routine "setup" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# ------Prepare to start Routine "instrTOP"-------
continueRoutine = True
# update component parameters for each repeat
key_resp_instrTOP.keys = []
key_resp_instrTOP.rt = []
_key_resp_instrTOP_allKeys = []
# keep track of which components have finished
instrTOPComponents = [text_instrTOP, key_resp_instrTOP, topExample]
for thisComponent in instrTOPComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
instrTOPClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "instrTOP"-------
while continueRoutine:
    # get current time
    t = instrTOPClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=instrTOPClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *text_instrTOP* updates
    if text_instrTOP.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_instrTOP.frameNStart = frameN  # exact frame index
        text_instrTOP.tStart = t  # local t and not account for scr refresh
        text_instrTOP.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_instrTOP, 'tStartRefresh')  # time at next scr refresh
        text_instrTOP.setAutoDraw(True)
    
    # *key_resp_instrTOP* updates
    waitOnFlip = False
    if key_resp_instrTOP.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        key_resp_instrTOP.frameNStart = frameN  # exact frame index
        key_resp_instrTOP.tStart = t  # local t and not account for scr refresh
        key_resp_instrTOP.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(key_resp_instrTOP, 'tStartRefresh')  # time at next scr refresh
        key_resp_instrTOP.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(key_resp_instrTOP.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(key_resp_instrTOP.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if key_resp_instrTOP.status == STARTED and not waitOnFlip:
        theseKeys = key_resp_instrTOP.getKeys(keyList=['space'], waitRelease=False)
        _key_resp_instrTOP_allKeys.extend(theseKeys)
        if len(_key_resp_instrTOP_allKeys):
            key_resp_instrTOP.keys = _key_resp_instrTOP_allKeys[-1].name  # just the last key pressed
            key_resp_instrTOP.rt = _key_resp_instrTOP_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # *topExample* updates
    if topExample.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        topExample.frameNStart = frameN  # exact frame index
        topExample.tStart = t  # local t and not account for scr refresh
        topExample.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(topExample, 'tStartRefresh')  # time at next scr refresh
        topExample.setAutoDraw(True)
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in instrTOPComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "instrTOP"-------
for thisComponent in instrTOPComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# the Routine "instrTOP" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# ------Prepare to start Routine "instrBOT"-------
continueRoutine = True
# update component parameters for each repeat
key_resp_instrBOT.keys = []
key_resp_instrBOT.rt = []
_key_resp_instrBOT_allKeys = []
# keep track of which components have finished
instrBOTComponents = [text_instrBOT, key_resp_instrBOT, botExample]
for thisComponent in instrBOTComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
instrBOTClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "instrBOT"-------
while continueRoutine:
    # get current time
    t = instrBOTClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=instrBOTClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *text_instrBOT* updates
    if text_instrBOT.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_instrBOT.frameNStart = frameN  # exact frame index
        text_instrBOT.tStart = t  # local t and not account for scr refresh
        text_instrBOT.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_instrBOT, 'tStartRefresh')  # time at next scr refresh
        text_instrBOT.setAutoDraw(True)
    
    # *key_resp_instrBOT* updates
    waitOnFlip = False
    if key_resp_instrBOT.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        key_resp_instrBOT.frameNStart = frameN  # exact frame index
        key_resp_instrBOT.tStart = t  # local t and not account for scr refresh
        key_resp_instrBOT.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(key_resp_instrBOT, 'tStartRefresh')  # time at next scr refresh
        key_resp_instrBOT.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(key_resp_instrBOT.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(key_resp_instrBOT.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if key_resp_instrBOT.status == STARTED and not waitOnFlip:
        theseKeys = key_resp_instrBOT.getKeys(keyList=['space'], waitRelease=False)
        _key_resp_instrBOT_allKeys.extend(theseKeys)
        if len(_key_resp_instrBOT_allKeys):
            key_resp_instrBOT.keys = _key_resp_instrBOT_allKeys[-1].name  # just the last key pressed
            key_resp_instrBOT.rt = _key_resp_instrBOT_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # *botExample* updates
    if botExample.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        botExample.frameNStart = frameN  # exact frame index
        botExample.tStart = t  # local t and not account for scr refresh
        botExample.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(botExample, 'tStartRefresh')  # time at next scr refresh
        botExample.setAutoDraw(True)
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in instrBOTComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "instrBOT"-------
for thisComponent in instrBOTComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# the Routine "instrBOT" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# set up handler to look after randomisation of conditions etc
phase = data.TrialHandler(nReps=phaseLoops, method='random', 
    extraInfo=expInfo, originPath=-1,
    trialList=[None],
    seed=None, name='phase')
thisExp.addLoop(phase)  # add the loop to the experiment
thisPhase = phase.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisPhase.rgb)
if thisPhase != None:
    for paramName in thisPhase:
        exec('{} = thisPhase[paramName]'.format(paramName))

for thisPhase in phase:
    currentLoop = phase
    # abbreviate parameter names if possible (e.g. rgb = thisPhase.rgb)
    if thisPhase != None:
        for paramName in thisPhase:
            exec('{} = thisPhase[paramName]'.format(paramName))
    
    # ------Prepare to start Routine "instr"-------
    continueRoutine = True
    # update component parameters for each repeat
    instrResp.keys = []
    instrResp.rt = []
    _instrResp_allKeys = []
    if condsFile == "tSwitchCond1.xlsx":
        instrText.text = "Press 'b' if you see a square. Press 'm' if you see a diamond. Press 'space' to continue"
    elif condsFile == "tSwitchCond2.xlsx":
        instrText.text = "Press 'b' if you see two dots. Press 'm' if you see three dots. Press 'space' to continue"
    elif condsFile == "tSwitchCond3.xlsx":
        instrText.text = "IN THE TOP HALF:Press 'b' if you see a square. Press 'm' if you see a diamond. IN THE BOTTOM HALF: Press 'b' if you see two dots. Press 'm' if you see three dots. Press 'space' to continue."
    else:
        instrText.text = "Press 'space' to continue"
    # keep track of which components have finished
    instrComponents = [instrText, instrResp]
    for thisComponent in instrComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    instrClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "instr"-------
    while continueRoutine:
        # get current time
        t = instrClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=instrClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *instrText* updates
        if instrText.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            instrText.frameNStart = frameN  # exact frame index
            instrText.tStart = t  # local t and not account for scr refresh
            instrText.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(instrText, 'tStartRefresh')  # time at next scr refresh
            instrText.setAutoDraw(True)
        
        # *instrResp* updates
        waitOnFlip = False
        if instrResp.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            instrResp.frameNStart = frameN  # exact frame index
            instrResp.tStart = t  # local t and not account for scr refresh
            instrResp.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(instrResp, 'tStartRefresh')  # time at next scr refresh
            instrResp.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(instrResp.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(instrResp.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if instrResp.status == STARTED and not waitOnFlip:
            theseKeys = instrResp.getKeys(keyList=['space'], waitRelease=False)
            _instrResp_allKeys.extend(theseKeys)
            if len(_instrResp_allKeys):
                instrResp.keys = _instrResp_allKeys[-1].name  # just the last key pressed
                instrResp.rt = _instrResp_allKeys[-1].rt
                # a response ends the routine
                continueRoutine = False
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in instrComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "instr"-------
    for thisComponent in instrComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # the Routine "instr" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # set up handler to look after randomisation of conditions etc
    trials = data.TrialHandler(nReps=totalTrials, method='random', 
        extraInfo=expInfo, originPath=-1,
        trialList=[None],
        seed=None, name='trials')
    thisExp.addLoop(trials)  # add the loop to the experiment
    thisTrial = trials.trialList[0]  # so we can initialise stimuli with some values
    # abbreviate parameter names if possible (e.g. rgb = thisTrial.rgb)
    if thisTrial != None:
        for paramName in thisTrial:
            exec('{} = thisTrial[paramName]'.format(paramName))
    
    for thisTrial in trials:
        currentLoop = trials
        # abbreviate parameter names if possible (e.g. rgb = thisTrial.rgb)
        if thisTrial != None:
            for paramName in thisTrial:
                exec('{} = thisTrial[paramName]'.format(paramName))
        
        # ------Prepare to start Routine "trial"-------
        continueRoutine = True
        routineTimer.add(10.000000)
        # update component parameters for each repeat
        trialText.text = trials.thisN
        trialImage.setPos(stimpos)
        trialImage.setImage(imageName)
        key_resp.keys = []
        key_resp.rt = []
        _key_resp_allKeys = []
        # keep track of which components have finished
        trialComponents = [trialText, trialImage, key_resp, grid1, grid2, grid3, grid4, grid5, grid6]
        for thisComponent in trialComponents:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        trialClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
        frameN = -1
        
        # -------Run Routine "trial"-------
        while continueRoutine and routineTimer.getTime() > 0:
            # get current time
            t = trialClock.getTime()
            tThisFlip = win.getFutureFlipTime(clock=trialClock)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *trialText* updates
            if trialText.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                trialText.frameNStart = frameN  # exact frame index
                trialText.tStart = t  # local t and not account for scr refresh
                trialText.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(trialText, 'tStartRefresh')  # time at next scr refresh
                trialText.setAutoDraw(True)
            if trialText.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > trialText.tStartRefresh + 10-frameTolerance:
                    # keep track of stop time/frame for later
                    trialText.tStop = t  # not accounting for scr refresh
                    trialText.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(trialText, 'tStopRefresh')  # time at next scr refresh
                    trialText.setAutoDraw(False)
            
            # *trialImage* updates
            if trialImage.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                trialImage.frameNStart = frameN  # exact frame index
                trialImage.tStart = t  # local t and not account for scr refresh
                trialImage.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(trialImage, 'tStartRefresh')  # time at next scr refresh
                trialImage.setAutoDraw(True)
            if trialImage.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > trialImage.tStartRefresh + 10-frameTolerance:
                    # keep track of stop time/frame for later
                    trialImage.tStop = t  # not accounting for scr refresh
                    trialImage.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(trialImage, 'tStopRefresh')  # time at next scr refresh
                    trialImage.setAutoDraw(False)
            
            # *key_resp* updates
            waitOnFlip = False
            if key_resp.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                key_resp.frameNStart = frameN  # exact frame index
                key_resp.tStart = t  # local t and not account for scr refresh
                key_resp.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(key_resp, 'tStartRefresh')  # time at next scr refresh
                key_resp.status = STARTED
                # keyboard checking is just starting
                waitOnFlip = True
                win.callOnFlip(key_resp.clock.reset)  # t=0 on next screen flip
                win.callOnFlip(key_resp.clearEvents, eventType='keyboard')  # clear events on next screen flip
            if key_resp.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > key_resp.tStartRefresh + 10-frameTolerance:
                    # keep track of stop time/frame for later
                    key_resp.tStop = t  # not accounting for scr refresh
                    key_resp.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(key_resp, 'tStopRefresh')  # time at next scr refresh
                    key_resp.status = FINISHED
            if key_resp.status == STARTED and not waitOnFlip:
                theseKeys = key_resp.getKeys(keyList=['x', 'm'], waitRelease=False)
                _key_resp_allKeys.extend(theseKeys)
                if len(_key_resp_allKeys):
                    key_resp.keys = _key_resp_allKeys[0].name  # just the first key pressed
                    key_resp.rt = _key_resp_allKeys[0].rt
            
            # *grid1* updates
            if grid1.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                grid1.frameNStart = frameN  # exact frame index
                grid1.tStart = t  # local t and not account for scr refresh
                grid1.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(grid1, 'tStartRefresh')  # time at next scr refresh
                grid1.setAutoDraw(True)
            if grid1.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > grid1.tStartRefresh + 10-frameTolerance:
                    # keep track of stop time/frame for later
                    grid1.tStop = t  # not accounting for scr refresh
                    grid1.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(grid1, 'tStopRefresh')  # time at next scr refresh
                    grid1.setAutoDraw(False)
            if grid1.status == STARTED:  # only update if drawing
                grid1.setFillColor(feedbackColour, log=False)
                grid1.setLineColor(feedbackColour, log=False)
            
            # *grid2* updates
            if grid2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                grid2.frameNStart = frameN  # exact frame index
                grid2.tStart = t  # local t and not account for scr refresh
                grid2.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(grid2, 'tStartRefresh')  # time at next scr refresh
                grid2.setAutoDraw(True)
            if grid2.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > grid2.tStartRefresh + 10-frameTolerance:
                    # keep track of stop time/frame for later
                    grid2.tStop = t  # not accounting for scr refresh
                    grid2.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(grid2, 'tStopRefresh')  # time at next scr refresh
                    grid2.setAutoDraw(False)
            if grid2.status == STARTED:  # only update if drawing
                grid2.setLineColor(feedbackColour, log=False)
            
            # *grid3* updates
            if grid3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                grid3.frameNStart = frameN  # exact frame index
                grid3.tStart = t  # local t and not account for scr refresh
                grid3.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(grid3, 'tStartRefresh')  # time at next scr refresh
                grid3.setAutoDraw(True)
            if grid3.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > grid3.tStartRefresh + 10-frameTolerance:
                    # keep track of stop time/frame for later
                    grid3.tStop = t  # not accounting for scr refresh
                    grid3.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(grid3, 'tStopRefresh')  # time at next scr refresh
                    grid3.setAutoDraw(False)
            if grid3.status == STARTED:  # only update if drawing
                grid3.setLineColor(feedbackColour, log=False)
            
            # *grid4* updates
            if grid4.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                grid4.frameNStart = frameN  # exact frame index
                grid4.tStart = t  # local t and not account for scr refresh
                grid4.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(grid4, 'tStartRefresh')  # time at next scr refresh
                grid4.setAutoDraw(True)
            if grid4.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > grid4.tStartRefresh + 10-frameTolerance:
                    # keep track of stop time/frame for later
                    grid4.tStop = t  # not accounting for scr refresh
                    grid4.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(grid4, 'tStopRefresh')  # time at next scr refresh
                    grid4.setAutoDraw(False)
            if grid4.status == STARTED:  # only update if drawing
                grid4.setLineColor(feedbackColour, log=False)
            
            # *grid5* updates
            if grid5.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                grid5.frameNStart = frameN  # exact frame index
                grid5.tStart = t  # local t and not account for scr refresh
                grid5.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(grid5, 'tStartRefresh')  # time at next scr refresh
                grid5.setAutoDraw(True)
            if grid5.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > grid5.tStartRefresh + 10-frameTolerance:
                    # keep track of stop time/frame for later
                    grid5.tStop = t  # not accounting for scr refresh
                    grid5.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(grid5, 'tStopRefresh')  # time at next scr refresh
                    grid5.setAutoDraw(False)
            if grid5.status == STARTED:  # only update if drawing
                grid5.setLineColor(feedbackColour, log=False)
            
            # *grid6* updates
            if grid6.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                grid6.frameNStart = frameN  # exact frame index
                grid6.tStart = t  # local t and not account for scr refresh
                grid6.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(grid6, 'tStartRefresh')  # time at next scr refresh
                grid6.setAutoDraw(True)
            if grid6.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > grid6.tStartRefresh + 10-frameTolerance:
                    # keep track of stop time/frame for later
                    grid6.tStop = t  # not accounting for scr refresh
                    grid6.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(grid6, 'tStopRefresh')  # time at next scr refresh
                    grid6.setAutoDraw(False)
            if grid6.status == STARTED:  # only update if drawing
                grid6.setLineColor(feedbackColour, log=False)
            
            # check for quit (typically the Esc key)
            if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                core.quit()
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in trialComponents:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # -------Ending Routine "trial"-------
        for thisComponent in trialComponents:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        trials.addData('trialText.started', trialText.tStartRefresh)
        trials.addData('trialText.stopped', trialText.tStopRefresh)
        trials.addData('trialImage.started', trialImage.tStartRefresh)
        trials.addData('trialImage.stopped', trialImage.tStopRefresh)
        # check responses
        if key_resp.keys in ['', [], None]:  # No response was made
            key_resp.keys = None
        trials.addData('key_resp.keys',key_resp.keys)
        if key_resp.keys != None:  # we had a response
            trials.addData('key_resp.rt', key_resp.rt)
        trials.addData('key_resp.started', key_resp.tStartRefresh)
        trials.addData('key_resp.stopped', key_resp.tStopRefresh)
        
        # ------Prepare to start Routine "response"-------
        continueRoutine = True
        routineTimer.add(2.000000)
        # update component parameters for each repeat
        respImage.setImage(responseImage)
        # keep track of which components have finished
        responseComponents = [respImage]
        for thisComponent in responseComponents:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        responseClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
        frameN = -1
        
        # -------Run Routine "response"-------
        while continueRoutine and routineTimer.getTime() > 0:
            # get current time
            t = responseClock.getTime()
            tThisFlip = win.getFutureFlipTime(clock=responseClock)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *respImage* updates
            if respImage.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                respImage.frameNStart = frameN  # exact frame index
                respImage.tStart = t  # local t and not account for scr refresh
                respImage.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(respImage, 'tStartRefresh')  # time at next scr refresh
                respImage.setAutoDraw(True)
            if respImage.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > respImage.tStartRefresh + 2-frameTolerance:
                    # keep track of stop time/frame for later
                    respImage.tStop = t  # not accounting for scr refresh
                    respImage.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(respImage, 'tStopRefresh')  # time at next scr refresh
                    respImage.setAutoDraw(False)
            continueRoutine = False;
            
            # check for quit (typically the Esc key)
            if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                core.quit()
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in responseComponents:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # -------Ending Routine "response"-------
        for thisComponent in responseComponents:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        thisExp.nextEntry()
        
    # completed totalTrials repeats of 'trials'
    
# completed phaseLoops repeats of 'phase'


# Flip one final time so any remaining win.callOnFlip() 
# and win.timeOnFlip() tasks get executed before quitting
win.flip()

# these shouldn't be strictly necessary (should auto-save)
thisExp.saveAsWideText(filename+'.csv')
thisExp.saveAsPickle(filename)
logging.flush()
# make sure everything is closed down
thisExp.abort()  # or data files will save again on exit
win.close()
core.quit()
