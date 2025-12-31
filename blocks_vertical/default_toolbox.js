/**
 * @license
 * Visual Blocks Editor
 *
 * Copyright 2016 Massachusetts Institute of Technology
 * All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

goog.provide('Blockly.Blocks.defaultToolbox');

goog.require('Blockly.Blocks');

/**
 * @fileoverview Provide a default toolbox XML.
 */

Blockly.Blocks.defaultToolbox = `<xml style="display: none">
<sep gap="36"/>

    <category name="%{BKY_CATEGORY_MOTION}" id="motion" colour="#4C97FF" secondaryColour="#3373CC">
        
        <block type="motion_movesteps" id="motion_movesteps_root_root_root">
            <value name="STEPS">
                <shadow type="math_number">
                    <field name="NUM">10</field>
                </shadow>
            </value>
        </block>
        <block type="motion_turnright" id="motion_turnright_root_root_root">
            <value name="DEGREES">
                <shadow type="math_number">
                    <field name="NUM">15</field>
                </shadow>
            </value>
        </block>
        <block type="motion_turnleft" id="motion_turnleft_root_root_root">
            <value name="DEGREES">
                <shadow type="math_number">
                    <field name="NUM">15</field>
                </shadow>
            </value>
        </block>
        <sep gap="36"/>
        <block type="motion_goto" id="motion_goto_root_root_root">
            <value name="TO">
                <shadow type="motion_goto_menu">
                </shadow>
            </value>
        </block>
        <block type="motion_gotoxy" id="motion_gotoxy_root_root_root">
            <value name="X">
                <shadow id="movex" type="math_number">
                    <field name="NUM">0</field>
                </shadow>
            </value>
            <value name="Y">
                <shadow id="movey" type="math_number">
                    <field name="NUM">0</field>
                </shadow>
            </value>
        </block>
        <block type="motion_changebyxy" id="motion_changebyxy_root_root_root">
            <value name="DX">
                <shadow type="math_number">
                    <field name="NUM">10</field>
                </shadow>
            </value>
            <value name="DY">
                <shadow type="math_number">
                    <field name="NUM">10</field>
                </shadow>
            </value>
        </block>
        <block type="motion_glideto" id="motion_glideto_root_root_root">
            <value name="SECS">
                <shadow type="math_number">
                    <field name="NUM">1</field>
                </shadow>
            </value>
            <value name="TO">
                <shadow type="motion_glideto_menu">
                </shadow>
            </value>
        </block>
        <block type="motion_glidesecstoxy" id="motion_glidesecstoxy_root_root_root">
            <value name="SECS">
                <shadow type="math_number">
                    <field name="NUM">1</field>
                </shadow>
            </value>
            <value name="X">
                <shadow id="glidex" type="math_number">
                    <field name="NUM">0</field>
                </shadow>
            </value>
            <value name="Y">
                <shadow id="glidey" type="math_number">
                    <field name="NUM">0</field>
                </shadow>
            </value>
        </block>
        <sep gap="36"/>
        <block type="motion_pointindirection" id="motion_pointindirection_root_root_root">
            <value name="DIRECTION">
                <shadow type="math_angle">
                    <field name="NUM">90</field>
                </shadow>
            </value>
        </block>
        <block type="motion_pointtowards" id="motion_pointtowards_root_root_root">
            <value name="TOWARDS">
                <shadow type="motion_pointtowards_menu">
                </shadow>
            </value>
        </block>
        <block type="motion_pointtowardsxy" id="motion_pointtowardsxy_root_root_root">
            <value name="X">
                <shadow type="math_number">
                    <field name="NUM">0</field>
                </shadow>
            </value>
            <value name="Y">
                <shadow type="math_number">
                    <field name="NUM">0</field>
                </shadow>
            </value>
        </block>
        <sep gap="36"/>
        <block type="motion_changexby" id="motion_changexby_root_root_root">
            <value name="DX">
                <shadow type="math_number">
                    <field name="NUM">10</field>
                </shadow>
            </value>
        </block>
        <block type="motion_setx" id="motion_setx_root_root_root">
            <value name="X">
                <shadow id="setx" type="math_number">
                    <field name="NUM">0</field>
                </shadow>
            </value>
        </block>
        <block type="motion_changeyby" id="motion_changeyby_root_root_root">
            <value name="DY">
                <shadow type="math_number">
                    <field name="NUM">10</field>
                </shadow>
            </value>
        </block>
        <block type="motion_sety" id="motion_sety_root_root_root">
            <value name="Y">
                <shadow id="sety" type="math_number">
                    <field name="NUM">0</field>
                </shadow>
            </value>
        </block>
        <sep gap="36"/>
        <block type="motion_ifonedgebounce" id="motion_ifonedgebounce_root_root_root"/>
        <block type="motion_ifonspritebounce" id="motion_ifonspritebounce_root_root_root">
            <value name="SPRITE">
                <shadow type="motion_pointtowards_menu"/>
            </value>
        </block>
        <sep gap="36"/>
        <block type="motion_setrotationstyle" id="motion_setrotationstyle_root_root_root"/>
        <block type="motion_move_sprite_to_scene_side" id="motion_move_sprite_to_scene_side_root_root_root"/>
        <sep gap="36"/>
        <block id="5I9nI;7P)jdiR-_X;/%l_xposition_root_root_root" type="motion_xposition"/>
        <block id="5I9nI;7P)jdiR-_X;/%l_yposition_root_root_root" type="motion_yposition"/>
        <block id="5I9nI;7P)jdiR-_X;/%l_direction_root_root_root" type="motion_direction"/>
        <sep gap="36"/>
    </category>
    
<sep gap="36"/>

    <category name="%{BKY_CATEGORY_LOOKS}" id="looks" colour="#9966FF" secondaryColour="#774DCB">
        
        <block type="looks_sayforsecs" id="looks_sayforsecs_root_root_root">
            <value name="MESSAGE">
                <shadow type="text">
                    <field name="TEXT">Hello!</field>
                </shadow>
            </value>
            <value name="SECS">
                <shadow type="math_number">
                    <field name="NUM">2</field>
                </shadow>
            </value>
        </block>
        <block type="looks_say" id="looks_say_root_root_root">
            <value name="MESSAGE">
                <shadow type="text">
                    <field name="TEXT">Hello!</field>
                </shadow>
            </value>
        </block>
        <block type="looks_thinkforsecs" id="looks_thinkforsecs_root_root_root">
            <value name="MESSAGE">
                <shadow type="text">
                    <field name="TEXT">Hmm...</field>
                </shadow>
            </value>
            <value name="SECS">
                <shadow type="math_number">
                    <field name="NUM">2</field>
                </shadow>
            </value>
        </block>
        <block type="looks_think" id="looks_think_root_root_root">
            <value name="MESSAGE">
                <shadow type="text">
                    <field name="TEXT">Hmm...</field>
                </shadow>
            </value>
        </block>
        <block type="looks_stoptalking" id="looks_stoptalking_root_root_root"/>
        <sep gap="36"/>
        <block type="looks_setFont" id="looks_setFont_root_root_root">
            <value name="font">
                <shadow type="text">
                    <field name="TEXT">Helvetica</field>
                </shadow>
            </value>
            <value name="size">
                <shadow type="math_number">
                    <field name="NUM">14</field>
                </shadow>
            </value>
        </block>
        <block type="looks_setColor" id="looks_setColor_root_root_root">
            <field name="prop">BUBBLE_STROKE</field>
            <value name="color">
                <shadow type="colour_picker"/>
            </value>
        </block>
        <block type="looks_setShape" id="looks_setShape_root_root_root">
            <field name="prop">STROKE_WIDTH</field>
            <value name="color">
                <shadow type="math_number">
                    <field name="NUM">0</field>
                </shadow>
            </value>
        </block>
        <block id="5I9nI;7P)jdiR-_X;/%l_sayWidth_root_root_root" type="looks_sayWidth"/>
        <block id="5I9nI;7P)jdiR-_X;/%l_sayHeight_root_root_root" type="looks_sayHeight"/>
        <sep gap="36"/>
        
        
            <block id="5I9nI;7P)jdiR-_X;/%l_switchcostumeto_root_root_root" type="looks_switchcostumeto">
                <value name="COSTUME">
                    <shadow type="looks_costume">
                        <field name="COSTUME">costume1</field>
                    </shadow>
                </value>
            </block>
            <block type="looks_nextcostume" id="looks_nextcostume_root_root_root"/>
            <block type="looks_getinputofcostume" id="looks_getinputofcostume_root_root_root">
                <value name="INPUT">
                    <shadow type="looks_getinput_menu"/>
                </value>
                <value name="COSTUME">
                    <shadow type="looks_costume">
                        <field name="COSTUME">costume1</field>
                    </shadow>
                </value>
            </block>
            <sep gap="36"/>
            <block type="looks_switchbackdropto" id="looks_switchbackdropto_root_root_root">
                <value name="BACKDROP">
                    <shadow type="looks_backdrops">
                        <field name="BACKDROP">backdrop1</field>
                    </shadow>
                </value>
            </block>
            <block type="looks_nextbackdrop" id="looks_nextbackdrop_root_root_root"/>
            <sep gap="36"/>
            <block type="looks_changesizeby" id="looks_changesizeby_root_root_root">
                <value name="CHANGE">
                    <shadow type="math_number">
                        <field name="NUM">10</field>
                    </shadow>
                </value>
            </block>
            <block type="looks_setsizeto" id="looks_setsizeto_root_root_root">
                <value name="SIZE">
                    <shadow type="math_number">
                        <field name="NUM">100</field>
                    </shadow>
                </value>
            </block>
            <sep gap="36"/>
            <block type="looks_setStretch" id="looks_setStretch_root_root_root">
                <value name="X">
                    <shadow type="math_number">
                        <field name="NUM">100</field>
                    </shadow>
                </value>
                <value name="Y">
                    <shadow type="math_number">
                        <field name="NUM">100</field>
                    </shadow>
                </value>
            </block>
            <block type="looks_changeStretch" id="looks_changeStretch_root_root_root">
                <value name="X">
                    <shadow type="math_number">
                        <field name="NUM">15</field>
                    </shadow>
                </value>
                <value name="Y">
                    <shadow type="math_number">
                        <field name="NUM">0</field>
                    </shadow>
                </value>
            </block>
            <block id="5I9nI;7P)jdiR-_X;/%l_stretchGetX_root_root_root" type="looks_stretchGetX"/>
            <block id="5I9nI;7P)jdiR-_X;/%l_stretchGetY_root_root_root" type="looks_stretchGetY"/>
        
        <sep gap="36"/>
        <block type="looks_changeeffectby" id="looks_changeeffectby_root_root_root">
            <value name="CHANGE">
                <shadow type="math_number">
                    <field name="NUM">25</field>
                </shadow>
            </value>
        </block>
        <block type="looks_seteffectto" id="looks_seteffectto_root_root_root">
            <value name="VALUE">
                <shadow type="math_number">
                    <field name="NUM">0</field>
                </shadow>
            </value>
        </block>
        <block type="looks_setTintColor" id="looks_setTintColor_root_root_root">
            <value name="color">
                <shadow type="colour_picker"/>
            </value>
        </block>
        <block type="looks_cleargraphiceffects" id="looks_cleargraphiceffects_root_root_root"/>
        <block id="5I9nI;7P)jdiR-_X;/%l_getEffectValue_root_root_root" type="looks_getEffectValue"/>
        <block id="5I9nI;7P)jdiR-_X;/%l_tintColor_root_root_root" type="looks_tintColor"/>
        <sep gap="36"/>
        
            <block type="looks_show" id="looks_show_root_root_root"/>
            <block type="looks_hide" id="looks_hide_root_root_root"/>
            <block id="5I9nI;7P)jdiR-_X;/%l_getSpriteVisible_root_root_root" type="looks_getSpriteVisible"/>
            <sep gap="36"/>
            <block type="looks_changeVisibilityOfSpriteShow" id="looks_changeVisibilityOfSpriteShow_root_root_root">
                <value name="VISIBLE_OPTION">
                    <shadow type="looks_changeVisibilityOfSprite_menu"/>
                </value>
            </block>
            <block type="looks_changeVisibilityOfSpriteHide" id="looks_changeVisibilityOfSpriteHide_root_root_root">
                <value name="VISIBLE_OPTION">
                    <shadow type="looks_changeVisibilityOfSprite_menu"/>
                </value>
            </block>
            <block type="looks_getOtherSpriteVisible" id="looks_getOtherSpriteVisible_root_root_root">
                <value name="VISIBLE_OPTION">
                    <shadow type="looks_getOtherSpriteVisible_menu"/>
                </value>
            </block>
            <sep gap="36"/>
            <block type="looks_gotofrontback" id="looks_gotofrontback_root_root_root"/>
            <block type="looks_goforwardbackwardlayers" id="looks_goforwardbackwardlayers_root_root_root">
                <value name="NUM">
                    <shadow type="math_integer">
                        <field name="NUM">1</field>
                    </shadow>
                </value>
            </block>
            <block type="looks_layersSetLayer" id="looks_layersSetLayer_root_root_root">
                <value name="NUM">
                    <shadow type="math_integer">
                        <field name="NUM">1</field>
                    </shadow>
                </value>
            </block>
            <block type="looks_goTargetLayer" id="looks_goTargetLayer_root_root_root">
                <value name="VISIBLE_OPTION">
                    <shadow type="looks_getOtherSpriteVisible_menu"/>
                </value>
            </block>
            <block id="5I9nI;7P)jdiR-_X;/%l_layersGetLayer_root_root_root" type="looks_layersGetLayer"/>
            <sep gap="36"/>
        
        
            <block id="5I9nI;7P)jdiR-_X;/%l_costumenumbername_root_root_root" type="looks_costumenumbername"/>
            <block id="backdropnumbername_root_root_root" type="looks_backdropnumbername"/>
            <block id="5I9nI;7P)jdiR-_X;/%l_size_root_root_root" type="looks_size"/>
        
        <sep gap="36"/>
    </category>
    
<sep gap="36"/>

    <category name="%{BKY_CATEGORY_SOUND}" id="sound" colour="#D65CD6" secondaryColour="#BD42BD">
        <block id="5I9nI;7P)jdiR-_X;/%l_sound_playuntildone_root_root_root" type="sound_playuntildone">
            <value name="SOUND_MENU">
                <shadow type="sound_sounds_menu">
                    <field name="SOUND_MENU">Squawk</field>
                </shadow>
            </value>
        </block>
        <block id="5I9nI;7P)jdiR-_X;/%l_sound_play_at_seconds_until_done_root_root_root" type="sound_play_at_seconds_until_done">
            <value name="VALUE">
                <shadow type="math_number">
                    <field name="NUM">5</field>
                </shadow>
            </value>
            <value name="SOUND_MENU">
                <shadow type="sound_sounds_menu">
                    <field name="SOUND_MENU">Squawk</field>
                </shadow>
            </value>
        </block>
        <sep gap="36"/>
        <block id="5I9nI;7P)jdiR-_X;/%l_sound_play_root_root_root" type="sound_play">
            <value name="SOUND_MENU">
                <shadow type="sound_sounds_menu">
                    <field name="SOUND_MENU">Squawk</field>
                </shadow>
            </value>
        </block>
        <block id="5I9nI;7P)jdiR-_X;/%l_sound_play_at_seconds_root_root_root" type="sound_play_at_seconds">
            <value name="VALUE">
                <shadow type="math_number">
                    <field name="NUM">5</field>
                </shadow>
            </value>
            <value name="SOUND_MENU">
                <shadow type="sound_sounds_menu">
                    <field name="SOUND_MENU">Squawk</field>
                </shadow>
            </value>
        </block>
        <block id="5I9nI;7P)jdiR-_X;/%l_sound_stop_root_root_root" type="sound_stop">
            <value name="SOUND_MENU">
                <shadow type="sound_sounds_menu">
                    <field name="SOUND_MENU">Squawk</field>
                </shadow>
            </value>
        </block>
        <block type="sound_playallsounds" id="sound_playallsounds_root_root_root"/>
        <block type="sound_stopallsounds" id="sound_stopallsounds_root_root_root"/>
        <sep gap="36"/>
        <block id="5I9nI;7P)jdiR-_X;/%l_sound_set_stop_fadeout_to_root_root_root" type="sound_set_stop_fadeout_to">
            <value name="VALUE">
                <shadow type="math_number">
                    <field name="NUM">1</field>
                </shadow>
            </value>
            <value name="SOUND_MENU">
                <shadow type="sound_sounds_menu">
                    <field name="SOUND_MENU">Squawk</field>
                </shadow>
            </value>
        </block>
        <sep gap="36"/>
        <block id="5I9nI;7P)jdiR-_X;/%l_sound_isSoundPlaying_root_root_root" type="sound_isSoundPlaying">
            <value name="SOUND_MENU">
                <shadow type="sound_sounds_menu">
                    <field name="SOUND_MENU">Squawk</field>
                </shadow>
            </value>
        </block>
        <block id="5I9nI;7P)jdiR-_X;/%l_sound_getLength_root_root_root" type="sound_getLength">
            <value name="SOUND_MENU">
                <shadow type="sound_sounds_menu">
                    <field name="SOUND_MENU">Squawk</field>
                </shadow>
            </value>
        </block>
        <sep gap="36"/>
        <block type="sound_changeeffectby" id="sound_changeeffectby_root_root_root">
            <value name="VALUE">
                <shadow type="math_number">
                    <field name="NUM">10</field>
                </shadow>
            </value>
        </block>
        <block type="sound_seteffectto" id="sound_seteffectto_root_root_root">
            <value name="VALUE">
                <shadow type="math_number">
                    <field name="NUM">100</field>
                </shadow>
            </value>
        </block>
        <block type="sound_cleareffects" id="sound_cleareffects_root_root_root"/>
        <block id="5I9nI;7P)jdiR-_X;/%l_soundgetEffectValue_root_root_root" type="sound_getEffectValue"/>
        <sep gap="36"/>
        <block type="sound_changevolumeby" id="sound_changevolumeby_root_root_root">
            <value name="VOLUME">
                <shadow type="math_number">
                    <field name="NUM">-10</field>
                </shadow>
            </value>
        </block>
        <block type="sound_setvolumeto" id="sound_setvolumeto_root_root_root">
            <value name="VOLUME">
                <shadow type="math_number">
                    <field name="NUM">100</field>
                </shadow>
            </value>
        </block>
        <block id="5I9nI;7P)jdiR-_X;/%l_volume_root_root_root" type="sound_volume"/>
        <sep gap="36"/>
    </category>
    
<sep gap="36"/>

    <category name="%{BKY_CATEGORY_EVENTS}" id="events" colour="#FFD500" secondaryColour="#CC9900">
        <block type="event_whenflagclicked" id="event_whenflagclicked_root_root_root"/>
        <block type="event_whenstopclicked" id="event_whenstopclicked_root_root_root"/>
        <sep gap="36"/>
        <block type="event_always" id="event_always_root_root_root"/>
        <block type="event_whenanything" id="event_whenanything_root_root_root">
            <value name="ANYTHING">
                <shadow type="checkbox"/>
            </value>
        </block>
        <sep gap="36"/>
        <block type="event_whenkeypressed" id="event_whenkeypressed_root_root_root"/>
        <block type="event_whenkeyhit" id="event_whenkeyhit_root_root_root"/>
        <block type="event_whenmousescrolled" id="event_whenmousescrolled_root_root_root"/>
        
            <block type="event_whenthisspriteclicked" id="event_whenthisspriteclicked_root_root_root"/>
        
        <block type="event_whenbackdropswitchesto" id="event_whenbackdropswitchesto_root_root_root">
        </block>
        <sep gap="36"/>
        <block type="event_whengreaterthan" id="event_whengreaterthan_root_root_root">
            <value name="VALUE">
                <shadow type="math_number">
                    <field name="NUM">10</field>
                </shadow>
            </value>
        </block>
        <sep gap="36"/>
        <block type="event_whenbroadcastreceived" id="event_whenbroadcastreceived_root_root_root">
        </block>
        <block type="event_broadcast" id="event_broadcast_root_root_root">
            <value name="BROADCAST_INPUT">
                <shadow type="event_broadcast_menu"/>
            </value>
        </block>
        <block type="event_broadcastandwait" id="event_broadcastandwait_root_root_root">
            <value name="BROADCAST_INPUT">
              <shadow type="event_broadcast_menu"/>
            </value>
        </block>
        <sep gap="36"/>
    </category>
    
<sep gap="36"/>

    <category name="%{BKY_CATEGORY_CONTROL}" id="control" colour="#FFAB19" secondaryColour="#CF8B17">
        <block type="control_wait" id="control_wait_root_root_root">
            <value name="DURATION">
                <shadow type="math_positive_number">
                    <field name="NUM">1</field>
                </shadow>
            </value>
        </block>
        <block type="control_waitsecondsoruntil" id="control_waitsecondsoruntil_root_root_root">
            <value name="DURATION">
                <shadow type="math_positive_number">
                    <field name="NUM">1</field>
                </shadow>
            </value>
            <value name="CONDITION">
                <shadow type="checkbox"/>
            </value>
        </block>
        <sep gap="36"/>
        <block type="control_repeat" id="control_repeat_root_root_root">
            <value name="TIMES">
                <shadow type="math_whole_number">
                    <field name="NUM">10</field>
                </shadow>
            </value>
        </block>
        <block id="forever_root_root_root" type="control_forever"/>
        <block id="for_each_root_root_root" type="control_for_each">
            <value name="VALUE">
                <shadow type="math_whole_number">
                    <field name="NUM">10</field>
                </shadow>
            </value>
        </block>
        <block type="control_exitLoop" id="control_exitLoop_root_root_root"/>
        <block type="control_continueLoop" id="control_continueLoop_root_root_root"/>
        <sep gap="36"/>
        <block type="control_switch" id="control_switch_root_root_root"/>
        <block type="control_switch_default" id="control_switch_default_root_root_root"/>
        <block type="control_exitCase" id="control_exitCase_root_root_root"/>
        <block type="control_case_next" id="control_case_next_root_root_root">
            <value name="CONDITION">
                <shadow type="text">
                    <field name="TEXT">ello</field>
                </shadow>
            </value>
        </block>
        <block type="control_case" id="control_case_root_root_root">
            <value name="CONDITION">
                <shadow type="text">
                    <field name="TEXT">ello</field>
                </shadow>
            </value>
        </block>
        <sep gap="36"/>
        <block type="control_expandableIf" id="control_expandableIf_root_root_root">
            <mutation branches="1" ends-in-else="false"/>
            <value name="BOOL1">
                <shadow type="checkbox"/>
            </value>
        </block>
        <block type="control_expandableIf" id="control_expandableIf_root_root_root">
            <mutation branches="2" ends-in-else="true"/>
            <value name="BOOL1">
                <shadow type="checkbox"/>
            </value>
        </block>
        <block type="control_if_return_else_return" id="control_if_return_else_return_root_root_root">
            <value name="boolean">
                <shadow type="checkbox"/>
            </value>
            <value name="TEXT1">
                <shadow type="text">
                    <field name="TEXT">foo</field>
                </shadow>
            </value>
            <value name="TEXT2">
                <shadow type="text">
                    <field name="TEXT">bar</field>
                </shadow>
            </value>
        </block>
        <sep gap="36"/>
        <block id="wait_until_root_root_root" type="control_wait_until">
            <value name="CONDITION">
                <shadow type="checkbox"/>
            </value>
        </block>
        <block id="repeat_until_root_root_root" type="control_repeat_until">
            <value name="CONDITION">
                <shadow type="checkbox"/>
            </value>
        </block>
        <block id="while_root_root_root" type="control_while">
            <value name="CONDITION">
                <shadow type="checkbox"/>
            </value>
        </block>
        <sep gap="36"/>
        <block type="control_all_at_once" id="control_all_at_once_root_root_root"/>
        <block type="control_run_as_sprite" id="control_run_as_sprite_root_root_root">
            <value name="RUN_AS_OPTION">
                <shadow type="control_run_as_sprite_menu"/>
            </value>
        </block>
        <sep gap="36"/>
        <block type="control_try_catch" id="control_try_catch_root_root_root"/>
        <block type="control_throw_error" id="control_throw_error_root_root_root">
            <value name="ERROR">
                <shadow type="text">
                    <field name="TEXT">Hello!</field>
                </shadow>
            </value>
        </block>
        <block type="control_error" id="control_error_root_root_root"/>
        <sep gap="36"/>
        <block type="control_backToGreenFlag" id="control_backToGreenFlag_root_root_root"/>
        <block type="control_stop_sprite" id="control_stop_sprite_root_root_root">
            <value name="STOP_OPTION">
                <shadow type="control_stop_sprite_menu"/>
            </value>
        </block>
        <block type="control_stop" id="control_stop_root_root_root"/>
        <sep gap="36"/>
        
            <block type="control_start_as_clone" id="control_start_as_clone_root_root_root"/>
            <block type="control_create_clone_of" id="control_create_clone_of_root_root_root">
                <value name="CLONE_OPTION">
                    <shadow type="control_create_clone_of_menu"/>
                </value>
            </block>
            <block type="control_delete_clones_of" id="control_delete_clones_of_root_root_root">
                <value name="CLONE_OPTION">
                    <shadow type="control_create_clone_of_menu"/>
                </value>
            </block>
            <block type="control_delete_this_clone" id="control_delete_this_clone_root_root_root"/>
            <block type="control_is_clone" id="control_is_clone_root_root_root"/>
        
        
        <sep gap="36"/>
    </category>
    
<sep gap="36"/>

    <category name="%{BKY_CATEGORY_SENSING}" id="sensing" colour="#4CBFE6" secondaryColour="#2E8EB8">
        
            <block type="sensing_touchingobject" id="sensing_touchingobject_root_root_root">
                <value name="TOUCHINGOBJECTMENU">
                    <shadow type="sensing_touchingobjectmenu"/>
                </value>
            </block>
            <block type="sensing_objecttouchingobject" id="sensing_objecttouchingobject_root_root_root">
                <value name="FULLTOUCHINGOBJECTMENU">
                    <shadow type="sensing_fulltouchingobjectmenu"/>
                </value>
                <value name="SPRITETOUCHINGOBJECTMENU">
                    <shadow type="sensing_touchingobjectmenusprites"/>
                </value>
            </block>
            <block type="sensing_objecttouchingclonesprite" id="sensing_objecttouchingclonesprite_root_root_root">
                <value name="FULLTOUCHINGOBJECTMENU">
                    <shadow type="sensing_fulltouchingobjectmenu"/>
                </value>
                <value name="SPRITETOUCHINGOBJECTMENU">
                    <shadow type="sensing_touchingobjectmenusprites"/>
                </value>
            </block>
            <block type="sensing_touchingcolor" id="sensing_touchingcolor_root_root_root">
                <value name="COLOR">
                    <shadow type="colour_picker"/>
                </value>
            </block>
            <block type="sensing_coloristouchingcolor" id="sensing_coloristouchingcolor_root_root_root">
                <value name="COLOR">
                    <shadow type="colour_picker"/>
                </value>
                <value name="COLOR2">
                    <shadow type="colour_picker"/>
                </value>
            </block>
            <sep gap="36"/>
            <block type="sensing_getxyoftouchingsprite" id="sensing_getxyoftouchingsprite_root_root_root">
                <value name="SPRITE">
                    <shadow type="sensing_distancetomenu"/>
                </value>
            </block>
            <block type="sensing_distanceto" id="sensing_distanceto_root_root_root">
                <value name="DISTANCETOMENU">
                    <shadow type="sensing_distancetomenu"/>
                </value>
            </block>
            <block type="sensing_distanceTo" id="sensing_distanceTo_root_root_root">
                <value name="x1">
                    <shadow type="text">
                        <field name="TEXT">10</field>
                    </shadow>
                </value>
                <value name="y1">
                    <shadow type="text">
                        <field name="TEXT">-10</field>
                    </shadow>
                </value>
                <value name="x2">
                    <shadow type="text">
                        <field name="TEXT">-10</field>
                    </shadow>
                </value>
                <value name="y2">
                    <shadow type="text">
                        <field name="TEXT">10</field>
                    </shadow>
                </value>
            </block>
            <block type="sensing_directionTo" id="sensing_directionTo_root_root_root">
                <value name="x1">
                    <shadow type="text">
                        <field name="TEXT">10</field>
                    </shadow>
                </value>
                <value name="y1">
                    <shadow type="text">
                        <field name="TEXT">-10</field>
                    </shadow>
                </value>
                <value name="x2">
                    <shadow type="text">
                        <field name="TEXT">-10</field>
                    </shadow>
                </value>
                <value name="y2">
                    <shadow type="text">
                        <field name="TEXT">10</field>
                    </shadow>
                </value>
            </block>
            <sep gap="36"/>
        
        
            <block id="askandwait_root_root_root" type="sensing_askandwait">
                <value name="QUESTION">
                    <shadow type="text">
                        <field name="TEXT">What's your name?</field>
                    </shadow>
                </value>
            </block>
        
        <block id="answer_root_root_root" type="sensing_answer"/>
        <block type="sensing_thing_is_text" id="sensing_thing_is_text_root_root_root">
            <value name="TEXT1">
                <shadow type="text">
                    <field name="TEXT">world</field>
                </shadow>
            </value>
        </block>
        <block type="sensing_thing_is_number" id="sensing_thing_is_number_root_root_root">
            <value name="TEXT1">
                <shadow type="text">
                    <field name="TEXT">10</field>
                </shadow>
            </value>
        </block>
        <sep gap="36"/>
        <block type="sensing_keypressed" id="sensing_keypressed_root_root_root">
            <value name="KEY_OPTION">
                <shadow type="sensing_keyoptions"/>
            </value>
        </block>
        <block type="sensing_keyhit" id="sensing_keyhit_root_root_root">
            <value name="KEY_OPTION">
                <shadow type="sensing_keyoptions"/>
            </value>
        </block>
        <block type="sensing_mousescrolling" id="sensing_mousescrolling_root_root_root">
            <value name="SCROLL_OPTION">
                <shadow type="sensing_scrolldirections"/>
            </value>
        </block>
        <sep gap="36"/>
        <block type="sensing_mousedown" id="sensing_mousedown_root_root_root"/>
        <block type="sensing_mouseclicked" id="sensing_mouseclicked_root_root_root"/>
        <block type="sensing_mousex" id="sensing_mousex_root_root_root"/>
        <block type="sensing_mousey" id="sensing_mousey_root_root_root"/>
        <sep gap="36"/>
        <block type="sensing_setclipboard" id="sensing_setclipboard_root_root_root">
            <value name="ITEM">
                <shadow type="text">
                    <field name="TEXT">Hello!</field>
                </shadow>
            </value>
        </block>
        <block type="sensing_getclipboard" id="sensing_getclipboard_root_root_root"/>
        
            <sep gap="36"/>
            <block type="sensing_setdragmode" id="sensing_setdragmode_root_root_root"/>
            <block id="5I9nI;7P)jdiR-_X;/%l_getdragmode_root_root_root" type="sensing_getdragmode"/>
            <sep gap="36"/>
        
        <sep gap="36"/>
        <block id="loudness_root_root_root" type="sensing_loudness"/>
        <block id="loud_root_root_root" type="sensing_loud"/>
        <sep gap="36"/>
        <block type="sensing_resettimer" id="sensing_resettimer_root_root_root"/>
        <block id="timer_root_root_root" type="sensing_timer"/>
        <sep gap="36"/>
        <block type="sensing_set_of" id="sensing_set_of_root_root_root">
            <value name="OBJECT">
                <shadow id="sensing_of_object_menu" type="sensing_of_object_menu"/>
            </value>
            <value name="VALUE">
                <shadow type="text">
                    <field name="TEXT">0</field>
                </shadow>
            </value>
        </block>
        <block id="of_root_root_root" type="sensing_of">
            <value name="OBJECT">
                <shadow id="sensing_of_object_menu" type="sensing_of_object_menu"/>
            </value>
        </block>
        <sep gap="36"/>
        <block id="current_root_root_root" type="sensing_current"/>
        <block type="sensing_dayssince2000" id="sensing_dayssince2000_root_root_root"/>
        <sep gap="36"/>
        <block type="sensing_mobile" id="sensing_mobile_root_root_root"/>
        <block type="sensing_fingerdown" id="sensing_fingerdown_root_root_root">
            <value name="FINGER_OPTION">
                <shadow id="sensing_fingeroptions" type="sensing_fingeroptions"/>
            </value>
        </block>
        <block type="sensing_fingertapped" id="sensing_fingertapped_root_root_root">
            <value name="FINGER_OPTION">
                <shadow id="sensing_fingeroptions" type="sensing_fingeroptions"/>
            </value>
        </block>
        <block type="sensing_fingerx" id="sensing_fingerx_root_root_root">
            <value name="FINGER_OPTION">
                <shadow id="sensing_fingeroptions" type="sensing_fingeroptions"/>
            </value>
        </block>
        <block type="sensing_fingery" id="sensing_fingery_root_root_root">
            <value name="FINGER_OPTION">
                <shadow id="sensing_fingeroptions" type="sensing_fingeroptions"/>
            </value>
        </block>
        <sep gap="36"/>
        <button text="Help Manual" callbackKey="OPEN_USERNAME_DOCS" isLaterDefined="true"/>
        <block type="sensing_username" id="sensing_username_root_root_root"/>
        <block type="sensing_loggedin" id="sensing_loggedin_root_root_root"/>
        <sep gap="36"/>
    </category>
    
<sep gap="36"/>

    <category name="%{BKY_CATEGORY_OPERATORS}" id="operators" colour="#40BF4A" secondaryColour="#389438">
        <block type="operator_add" id="operator_add_root_root_root">
            <value name="NUM1">
                <shadow type="math_number">
                    <field name="NUM"/>
                </shadow>
            </value>
            <value name="NUM2">
                <shadow type="math_number">
                    <field name="NUM"/>
                </shadow>
            </value>
        </block>
        <block type="operator_subtract" id="operator_subtract_root_root_root">
            <value name="NUM1">
                <shadow type="math_number">
                    <field name="NUM"/>
                </shadow>
            </value>
            <value name="NUM2">
                <shadow type="math_number">
                    <field name="NUM"/>
                </shadow>
            </value>
        </block>
        <block type="operator_multiply" id="operator_multiply_root_root_root">
            <value name="NUM1">
                <shadow type="math_number">
                    <field name="NUM"/>
                </shadow>
            </value>
            <value name="NUM2">
                <shadow type="math_number">
                    <field name="NUM"/>
                </shadow>
            </value>
        </block>
        <block type="operator_divide" id="operator_divide_root_root_root">
            <value name="NUM1">
                <shadow type="math_number">
                    <field name="NUM"/>
                </shadow>
            </value>
            <value name="NUM2">
                <shadow type="math_number">
                    <field name="NUM"/>
                </shadow>
            </value>
        </block>
        <block type="operator_power" id="operator_power_root_root_root">
            <value name="NUM1">
                <shadow type="math_number">
                    <field name="NUM"/>
                </shadow>
            </value>
            <value name="NUM2">
                <shadow type="math_number">
                    <field name="NUM"/>
                </shadow>
            </value>
        </block>
        <block type="operator_expandableMath" id="operator_expandableMath_root_root_root">
            <mutation inputcount="2" menuvalues="+"/>
            <value name="NUM1">
                <shadow type="math_number"><field name="NUM">0</field></shadow>
            </value>
            <value name="NUM2">
                <shadow type="math_number"><field name="NUM">0</field></shadow>
            </value>
        </block>
        <block type="operator_advMathExpanded" id="operator_advMathExpanded_root_root_root">
            <value name="ONE">
                <shadow type="math_number">
                    <field name="NUM">3</field>
                </shadow>
            </value>
            <value name="TWO">
                <shadow type="math_number">
                    <field name="NUM">2</field>
                </shadow>
            </value>
            <field name="OPTION">root</field>
            <value name="THREE">
                <shadow type="math_number">
                    <field name="NUM">16</field>
                </shadow>
            </value>
        </block>
        <sep gap="36"/>
        <block type="operator_random" id="operator_random_root_root_root">
            <value name="FROM">
                <shadow type="math_number">
                    <field name="NUM">1</field>
                </shadow>
            </value>
            <value name="TO">
                <shadow type="math_number">
                    <field name="NUM">10</field>
                </shadow>
            </value>
        </block>
        <block type="operator_constrainnumber" id="operator_constrainnumber_root_root_root">
            <value name="inp">
                <shadow type="math_number">
                    <field name="NUM">50</field>
                </shadow>
            </value>
            <value name="min">
                <shadow type="math_number">
                    <field name="NUM">1</field>
                </shadow>
            </value>
            <value name="max">
                <shadow type="math_number">
                    <field name="NUM">100</field>
                </shadow>
            </value>
        </block>
        <block type="operator_lerpFunc" id="operator_lerpFunc_root_root_root">
            <value name="ONE">
                <shadow type="math_number">
                    <field name="NUM">1</field>
                </shadow>
            </value>
            <value name="TWO">
                <shadow type="math_number">
                    <field name="NUM">3</field>
                </shadow>
            </value>
            <value name="AMOUNT">
                <shadow type="math_number">
                    <field name="NUM">0.5</field>
                </shadow>
            </value>
        </block>
        <sep gap="36"/>
        <block type="operator_gt" id="operator_gt_root_root_root">
            <value name="OPERAND1">
                <shadow type="text">
                    <field name="TEXT"/>
                </shadow>
            </value>
            <value name="OPERAND2">
                <shadow type="text">
                    <field name="TEXT">50</field>
                </shadow>
            </value>
        </block>
        <block type="operator_gtorequal" id="operator_gtorequal_root_root_root">
            <value name="OPERAND1">
                <shadow type="text">
                    <field name="TEXT"/>
                </shadow>
            </value>
            <value name="OPERAND2">
                <shadow type="text">
                    <field name="TEXT">50</field>
                </shadow>
            </value>
        </block>
        <block type="operator_lt" id="operator_lt_root_root_root">
            <value name="OPERAND1">
                <shadow type="text">
                    <field name="TEXT"/>
                </shadow>
            </value>
            <value name="OPERAND2">
                <shadow type="text">
                    <field name="TEXT">50</field>
                </shadow>
            </value>
        </block>
        <block type="operator_ltorequal" id="operator_ltorequal_root_root_root">
            <value name="OPERAND1">
                <shadow type="text">
                    <field name="TEXT"/>
                </shadow>
            </value>
            <value name="OPERAND2">
                <shadow type="text">
                    <field name="TEXT">50</field>
                </shadow>
            </value>
        </block>
        <block type="operator_equals" id="operator_equals_root_root_root">
            <value name="OPERAND1">
                <shadow type="text">
                    <field name="TEXT"/>
                </shadow>
            </value>
            <value name="OPERAND2">
                <shadow type="text">
                    <field name="TEXT">50</field>
                </shadow>
            </value>
        </block>
        <block type="operator_notequal" id="operator_notequal_root_root_root">
            <value name="OPERAND1">
                <shadow type="text">
                    <field name="TEXT"/>
                </shadow>
            </value>
            <value name="OPERAND2">
                <shadow type="text">
                    <field name="TEXT">50</field>
                </shadow>
            </value>
        </block>
        <block type="operator_expandableCompare" id="operator_expandableCompare_root_root_root">
        <mutation inputcount="2" menuvalues=""/>
            <value name="INPUT1">
                <shadow type="text"><field name="TEXT"/></shadow>
            </value>
            <value name="INPUT2">
                <shadow type="text"><field name="TEXT"/></shadow>
            </value>
        </block>
        <sep gap="36"/>
        <block type="operator_trueBoolean" id="operator_trueBoolean_root_root_root"/>
        <block type="operator_falseBoolean" id="operator_falseBoolean_root_root_root"/>
        <sep gap="36"/>
        <block type="operator_and" id="operator_and_root_root_root">
            <value name="OPERAND1">
                <shadow type="checkbox"/>
            </value>
            <value name="OPERAND2">
                <shadow type="checkbox"/>
            </value>
        </block>
        <block type="operator_or" id="operator_or_root_root_root">
            <value name="OPERAND1">
                <shadow type="checkbox"/>
            </value>
            <value name="OPERAND2">
                <shadow type="checkbox"/>
            </value>
        </block>
        <block type="operator_not" id="operator_not_root_root_root">
            <value name="OPERAND">
                <shadow type="checkbox"/>
            </value>
        </block>
        <block type="operator_expandableBool" id="operator_expandableBool_root_root_root">
            <mutation inputcount="2" menuvalues=""/>
            <value name="BOOL1">
                <shadow type="checkbox"><field name="CHECKBOX"/></shadow>
            </value>
            <value name="BOOL2">
                <shadow type="checkbox"><field name="CHECKBOX"/></shadow>
            </value>
        </block>
        <sep gap="36"/>
        
            <block type="operator_newLine" id="operator_newLine_root_root_root"/>
            <block type="operator_tabCharacter" id="operator_tabCharacter_root_root_root"/>
            <sep gap="36"/>
            <block type="operator_join" id="operator_join_root_root_root">
                <value name="STRING1">
                    <shadow type="text">
                        <field name="TEXT">apple </field>
                    </shadow>
                </value>
                <value name="STRING2">
                    <shadow type="text">
                        <field name="TEXT">banana</field>
                    </shadow>
                </value>
            </block>
            <block type="operator_expandablejoininputs" id="operator_expandablejoininputs_root_root_root">
                <mutation inputcount="2"/>
                <value name="INPUT1">
                    <shadow type="text">
                        <field name="TEXT">apple</field>
                    </shadow>
                </value>
                <value name="INPUT2">
                    <shadow type="text">
                        <field name="TEXT">banana</field>
                    </shadow>
                </value>
            </block>
            <sep gap="36"/>
            <block type="operator_indexOfTextInText" id="operator_indexOfTextInText_root_root_root">
                <value name="TEXT1">
                    <shadow type="text">
                        <field name="TEXT">world</field>
                    </shadow>
                </value>
                <value name="TEXT2">
                    <shadow type="text">
                        <field name="TEXT">Hello world!</field>
                    </shadow>
                </value>
            </block>
            <block type="operator_lastIndexOfTextInText" id="operator_lastIndexOfTextInText_root_root_root">
                <value name="TEXT1">
                    <shadow type="text">
                        <field name="TEXT">world</field>
                    </shadow>
                </value>
                <value name="TEXT2">
                    <shadow type="text">
                        <field name="TEXT">Hello world!</field>
                    </shadow>
                </value>
            </block>
            <sep gap="36"/>
            <block type="operator_letter_of" id="operator_letter_of_root_root_root">
                <value name="LETTER">
                    <shadow type="math_whole_number">
                        <field name="NUM">1</field>
                    </shadow>
                </value>
                <value name="STRING">
                    <shadow type="text">
                        <field name="TEXT">apple</field>
                    </shadow>
                </value>
            </block>
            <block type="operator_getLettersFromIndexToIndexInTextFixed" id="operator_getLettersFromIndexToIndexInTextFixed_root_root_root">
                <value name="INDEX1">
                    <shadow type="math_number">
                        <field name="NUM">2</field>
                    </shadow>
                </value>
                <value name="INDEX2">
                    <shadow type="math_number">
                        <field name="NUM">3</field>
                    </shadow>
                </value>
                <value name="TEXT">
                    <shadow type="text">
                        <field name="TEXT">Hello!</field>
                    </shadow>
                </value>
            </block>
            <block type="operator_length" id="operator_length_root_root_root">
                <value name="STRING">
                    <shadow type="text">
                        <field name="TEXT">apple</field>
                    </shadow>
                </value>
            </block>
            <sep gap="36"/>
            <block type="operator_contains" id="operator_contains_root_root_root">
              <value name="STRING1">
                <shadow type="text">
                  <field name="TEXT">apple</field>
                </shadow>
              </value>
              <value name="STRING2">
                <shadow type="text">
                  <field name="TEXT">a</field>
                </shadow>
              </value>
            </block>
            <block type="operator_textStartsOrEndsWith" id="operator_textStartsOrEndsWith_root_root_root">
              <value name="TEXT1">
                <shadow type="text">
                  <field name="TEXT">abcdef</field>
                </shadow>
              </value>
              <value name="TEXT2">
                <shadow type="text">
                  <field name="TEXT">abc</field>
                </shadow>
              </value>
            </block>
            <sep gap="36"/>
            <block type="operator_replaceAll" id="operator_replaceAll_root_root_root">
                <value name="text">
                    <shadow type="text">
                        <field name="TEXT">foo bar</field>
                    </shadow>
                </value>
                <value name="term">
                    <shadow type="text">
                        <field name="TEXT">foo</field>
                    </shadow>
                </value>
                <value name="res">
                    <shadow type="text">
                        <field name="TEXT">bar</field>
                    </shadow>
                </value>
            </block>
            <block type="operator_replaceFirst" id="operator_replaceFirst_root_root_root">
                <value name="text">
                    <shadow type="text">
                        <field name="TEXT">bar bar doo</field>
                    </shadow>
                </value>
                <value name="term">
                    <shadow type="text">
                        <field name="TEXT">bar</field>
                    </shadow>
                </value>
                <value name="res">
                    <shadow type="text">
                        <field name="TEXT">foo</field>
                    </shadow>
                </value>
            </block>
            <block type="operator_regexmatch" id="operator_regexmatch_root_root_root">
                <value name="text">
                    <shadow type="text">
                        <field name="TEXT">foo bar</field>
                    </shadow>
                </value>
                <value name="reg">
                    <shadow type="text">
                        <field name="TEXT">foo</field>
                    </shadow>
                </value>
                <value name="regrule">
                    <shadow type="text">
                        <field name="TEXT">g</field>
                    </shadow>
                </value>
            </block>
            <sep gap="36"/>
            <block type="operator_toUpperLowerCase" id="operator_toUpperLowerCase_root_root_root">
                <value name="TEXT">
                    <shadow type="text">
                        <field name="TEXT">ello</field>
                    </shadow>
                </value>
            </block>
        
        <sep gap="36"/>
        <block type="operator_mod" id="operator_mod_root_root_root">
            <value name="NUM1">
                <shadow type="math_number">
                    <field name="NUM"/>
                </shadow>
            </value>
            <value name="NUM2">
                <shadow type="math_number">
                    <field name="NUM"/>
                </shadow>
            </value>
        </block>
        <block type="operator_round" id="operator_round_root_root_root">
            <value name="NUM">
                <shadow type="math_number">
                    <field name="NUM"/>
                </shadow>
            </value>
        </block>
        <sep gap="36"/>
        <block type="operator_mathop" id="operator_mathop_root_root_root">
            <value name="NUM">
                <shadow type="math_number">
                    <field name="NUM"/>
                </shadow>
            </value>
        </block>
        <sep gap="36"/>
        <block type="operator_stringify" id="operator_stringify_root_root_root">
            <value name="ONE">
                <shadow type="text">
                    <field name="TEXT">foo</field>
                </shadow>
            </value>
        </block>
        <block type="operator_boolify" id="operator_boolify_root_root_root">
            <value name="ONE">
                <shadow type="text">
                    <field name="TEXT">true</field>
                </shadow>
            </value>
        </block>
        <sep gap="36"/>
    </category>
    
<sep gap="36"/>

    <category name="%{BKY_CATEGORY_VARIABLES}" id="variables" colour="#FF8C1A" secondaryColour="#DB6E00" custom="VARIABLE">
    </category>
    
<sep gap="36"/>

    <category name="Lists" id="lists" colour="#FF661A" secondaryColour="#FF5500" custom="LIST">
    </category>
    
<sep gap="36"/>

    <category name="%{BKY_CATEGORY_MYBLOCKS}" id="myBlocks" colour="#FF6680" secondaryColour="#FF4D6A" custom="PROCEDURE">
    </category>
    
<sep gap="36"/>
</xml>`;
