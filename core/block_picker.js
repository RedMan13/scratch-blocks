'use strict';

goog.provide('Blockly.BlockPicker');

// goog.require('Blockly.VerticalFlyout');
goog.require('Blockly.DropDownDiv');
goog.require('Blockly.Colours');

/**
 * @typedef {Object} InlineArgument
 * @prop {'input'|'field'} type
 * @prop {string} name
 * @prop {boolean?} configurable defaults to false
 * @prop {boolean?} stack defaults to false
 * @prop {string?} varType the type of variable to check and see it present
 * @prop {RegExp|[string,string]?} restrictor either a regexp or a dropdown list of valid values
 * @prop {string?} default what block type should go here normally
 */
/**
 * @typedef {Object} BlockIndex
 * @prop {string} type
 * @prop {{ [key: string]: string }} types
 * @prop {{ [key: string]: { type: string, field: string } }} shadows
 * @prop {(string|InlineArgument)[]} words
 * @prop {boolean} isReporter
 */
/**
 * @param {Blockly.Workspace} workspace 
 */
Blockly.BlockPicker = function(workspace) {
    this.workspace_ = workspace;
    this.flyout_ = new Blockly.VerticalFlyout({
        disabledPatternId: workspace.options.disabledPatternId,
        parentWorkspace: workspace,
        RTL: workspace.RTL,
        oneBasedIndex: workspace.options.oneBasedIndex,
        horizontalLayout: workspace.horizontalLayout,
        toolboxPosition: workspace.options.toolboxPosition,
        stackGlowFilterId: workspace.options.stackGlowFilterId
    });
    // the flyout must always be sized to the inner dimensions of the wrapper
    // this is especially important because width and height may change at any point in time
    const self = this;
    this.flyout_.getWidth = function() {
        if (!self.flyoutWrapper_) return Blockly.BlockPicker.width;
        const measures = self.flyoutWrapper_.getBoundingClientRect();
        return measures.width;
    }
    this.flyout_.getHeight = function() {
        if (!self.flyoutWrapper_) return Blockly.BlockPicker.height - 26;
        const measures = self.flyoutWrapper_.getBoundingClientRect();
        return measures.height;
    }
    this.flyout_.workspace_.injectionDiv_ = workspace.getInjectionDiv();
    this.flyout_.isDragTowardWorkspace = function() { return true; }
    this.flyout_.autoClose = true;
    /** @type {HTMLInputElement} */
    this.search_ = null;
    /** @type {HTMLDivElement} */
    this.flyoutWrapper_ = null;
    /** @type {HTMLDivElement} */
    this.content_ = null;
    /** @type {BlockIndex[]} */
    this.index_ = [];
    /** @type {HTMLElement[]} */
    this.baseList_ = [];
}
Blockly.BlockPicker.width = 175;
Blockly.BlockPicker.height = 300;
/**
 * @type {Blockly.Workspace}
 */
Blockly.BlockPicker.prototype.flyout_ = null;
/**
 * @type {Blockly.Workspace}
 */
Blockly.BlockPicker.prototype.flyout_ = null;
/**
 * @type {HTMLDivElement}
 */
Blockly.BlockPicker.prototype.content_ = null;
/**
 * @type {HTMLInputElement}
 */
Blockly.BlockPicker.prototype.search_ = null;
/**
 * @type {HTMLDivElement}
 */
Blockly.BlockPicker.prototype.flyoutWrapper_ = null;
/**
 * @type {BlockIndex[]}
 */
Blockly.BlockPicker.prototype.index_ = null;
/**
 * @type {HTMLElement[]}
 */
Blockly.BlockPicker.prototype.baseList_ = [];
/**
 * Extracts all blocks from a blockly language tree for the category space
 * @param {NodeList} nodes 
 */
Blockly.BlockPicker.processNodes = function(nodes) {
    const results = [];
    for (let i = 0, xml = nodes[0]; xml = nodes[i]; i++) {
        if (xml.tagName.toUpperCase() !== 'BLOCK') {
            const nodes = Blockly.BlockPicker.processNodes(xml.childNodes)
            results.push.apply(results, nodes);
            continue;
        }
        xml.setAttribute('id', (xml.getAttribute('id') || xml.getAttribute('type')) + '_root');
        results.push(xml);
    }
    return results;
}
Blockly.BlockPicker.deriveQualifiers = function(string) {
    const res = {
        words: [''],
        text: string,
        mapping: []
    }
    for (let i = 0; i < string.length; i++) {
        if (/^[^a-z+-/*&$#@0-9]/i.test(string[i])) {
            if (res.words.at(-1).length) res.words.push('');
            continue;
        }
        if (res.mapping.length < res.words.length) res.mapping.push(i);
        res.words[res.words.length -1] += string[i];
    }
    return res;
}
const debugFilter = false;
/**
 * Gets a list of the most likely matches for a given string of words
 * @param {string[]} words 
 * @param {BlockIndex[]} index 
 */
Blockly.BlockPicker.getBestMatches = function(words, index, string, mapping, workspace, indent) {
    const cache = {};
    // we need to find all block types that most closely match the structure
    // while also allowing for ambiguity, such as set x to y. this could be
    // `set [x v] to (y)`, `set x to (y)`, `set [x v] to [y]`, or `set x to [y]`
    // and all should be available in the search results.
    function traverseInputsDeep(words, subIndex, isInput) {
        if (cache[words]) {
            if (debugFilter) console.log(indent, 'using cached results for', words);
            return cache[words];
        }
        const matches = [];
        cache[words] = matches;
        if (debugFilter) console.log(indent, words);
        indent += '    ';
        for (let i = 0, block; block = index[i]; i++) {
            // reporters dont fit in stacks, and neither do stacks in inputs
            if (typeof isInput === 'boolean' && isInput && !block.isReporter) continue;
            if (typeof isInput === 'boolean' && !isInput && block.isReporter) continue;
            let offset = 0;
            let valid = true;
            const args = {};
            if (debugFilter) console.log(indent, block.type);
            indent += '    ';
            for (let j = 0, word = block.words[0]; j < words.length; word = block.words[++j]) {
                // if the words dont match than this option must be eliminated
                if (typeof word !== 'object' && word !== words[j + offset]) {
                    if (debugFilter) console.log(indent, words[j + offset], 'doesnt match', word);
                    valid = false;
                    break;
                }
                if (debugFilter) console.log(indent, 'checking word', word);
                // word matches, just keep rolling
                if (typeof word !== 'object' && word === words[j + offset]) continue;
                // last item, need to simply grab up the last of it as input words
                if (j === block.words.length -1) {
                    args[word.name] = [];
                    const start = j + offset;
                    // a block is a valid input, so check if that would be valid
                    if (word.type === 'input') {
                        const subVariants = traverseInputsDeep(words.slice(start, words.length), start + subIndex, !word.stack, indent);
                        // a block MUST go here, but no blocks were found
                        if (subVariants.length <= 0 && !word.configurable) {
                            if (debugFilter) console.log(indent, words.slice(start, words.length), 'has no valid blocks');
                            valid = false;
                            break;
                        }
                        args[word.name].push.apply(args[word.name], subVariants);
                    }
                    // those words cant be in it, the input is unconfigurable
                    if (!word.configurable) break;
                    const val = string.slice(mapping[start -1] || 0).trim();
                    if (word.restrictor instanceof RegExp && !word.restrictor.test(val)) {
                        if (word.type === 'input') break;
                        if (debugFilter) console.log(indent, val, 'isnt valid');
                        valid = false;
                        break;
                    }
                    if (word.restrictor instanceof Array && !word.restrictor.some(function(ent) { return ent[0] === val; })) {
                        if (word.type === 'input') break;
                        if (debugFilter) console.log(indent, val, 'isnt valid');
                        valid = false;
                        break;
                    }
                    if (typeof word.varType === 'string' && !workspace.getVariablesOfType(word.varType).some(function (variable) { return variable.name === val })) {
                        if (word.type === 'input') break;
                        if (debugFilter) console.log(indent, val, 'isnt valid');
                        valid = false;
                        break;
                    }
                    args[word.name].push({
                        type: word.default,
                        field: word.defaultName,
                        shadow: true,
                        value: val
                    });
                    break;
                }
                // otherwise, we need to find the ending match with a lazy search
                const start = j + offset;
                while (block.words[j +1] !== words[j + offset] && (j + (offset -1)) < words.length)
                    offset++;
                offset--;
                // first-argument matches invalidate if the next word isnt present
                // this way blocks like (() + ()), (() of ()), and (()) that dont
                // make any real sense wont flood the results
                if (j === 0 && (j + offset +1) >= words.length) {
                    if (debugFilter) console.log(indent, 'Ran out of usable words');
                    valid = false;
                    break;
                }
                args[word.name] = [];
                // a block is a valid input, so check if that would be valid
                if (word.type === 'input') {
                    const subVariants = traverseInputsDeep(words.slice(start, j + offset +1), start + subIndex, !word.stack, indent);
                    // a block MUST go here, but no blocks were found
                    if (subVariants.length <= 0 && !word.configurable) {
                        if (debugFilter) console.log(indent, words.slice(start, j + offset +1), 'has no valid blocks');
                        valid = false;
                        break;
                    }
                    args[word.name].push.apply(args[word.name], subVariants);
                }
                // those words cant be in it, the input is unconfigurable
                if (!word.configurable) continue;
                const val = string.slice(mapping[start || 0], mapping[j + offset +1]  || string.length).trim();
                if (word.restrictor instanceof RegExp && !word.restrictor.test(val)) {
                    if (word.type === 'input') continue;
                    if (debugFilter) console.log(indent, val, 'isnt valid for', word);
                    valid = false;
                    break;
                }
                if (word.restrictor instanceof Array && !word.restrictor.some(function(ent) { return ent[0] === val; })) {
                    if (word.type === 'input') continue;
                    if (debugFilter) console.log(indent, val, 'isnt valid for', word);
                    valid = false;
                    break;
                }
                if (word.varType && workspace.getVariablesOfType(word.varType).some(function (variable) { return variable.name === val })) {
                    if (word.type === 'input') continue;
                    if (debugFilter) console.log(indent, val, 'isnt valid for', word);
                    valid = false;
                    break;
                }
                args[word.name].push({
                    type: word.default,
                    field: word.defaultName,
                    shadow: true,
                    value: val
                });
            }
            indent = indent.slice(0, -4);
            if (!valid) continue;
            if (debugFilter) console.log(indent, 'Block was valid');
            // this can get out of hand really quickly, so in reality we will only do up to like 750 options
            const totalVarients = Object.values(args).reduce((c,v) => c * v.length, 1);
            const walkingLength = Math.max(totalVarients / 750, 1);
            if (debugFilter) console.log(indent, 'Unrolling', totalVarients, 'versions of this block');
            for (let i = 0; i < totalVarients; i += walkingLength) {
                // skip decimals, since they arent real
                if (Math.floor(i) !== i) continue;
                // derive the varient index for each argument
                const indicies = Object.values(args)
                    .reduce((c,v,j) => ({
                        mul: c.mul * v.length,
                        out: (c.out[j] = Math.floor(i / c.mul) % v.length, c.out)
                    }), { mul: 1, out: [] })
                    .out;
                
                if (debugFilter) console.log('Version of block with argument indices', indicies);
                matches.push({
                    type: block.type,
                    types: block.types,
                    shadows: block.shadows,
                    args: Object.fromEntries(Object.keys(args).map((k,i) => [k, args[k][indicies[i]]]))
                })
            }
        }
        indent = indent.slice(0, -4);
        if (debugFilter) console.log(indent, 'Total matches', matches);
        return matches
    }
    return traverseInputsDeep(words, 0, null);
}
Blockly.BlockPicker.generateFromMatch = function(match) {
    const block = document.createElement('block');
    block.setAttribute('type', match.type);
    for (const name in match.types) {
        const input = document.createElement(match.types[name] === 'input' ? 'value' : 'field');
        input.setAttribute('name', name);
        block.appendChild(input);
        if (match.types[name] === 'field') {
            input.textContent = match.args[name] ? match.args[name].value : '';
            continue;
        }
        if (match.args[name] ? match.args[name].shadow : match.shadows[name]) {
            const shadow = document.createElement('shadow');
            shadow.setAttribute('type', match.shadows[name].type);
            const field = document.createElement('field');
            field.setAttribute('name', match.shadows[name].field);
            field.textContent = match.args[name] ? match.args[name].value : '';
            shadow.appendChild(field);
            input.appendChild(shadow);
        }
        if (match.args[name])
            input.appendChild(Blockly.BlockPicker.generateFromMatch(match.args[name]));
    }
    return block;
}
/**
 * Initializes the block picker so it can be used
 */
Blockly.BlockPicker.prototype.init = function() {
    const body = document.createElement('div');
    body.style.width = `${Blockly.BlockPicker.width}px`;
    body.style.height = `${Blockly.BlockPicker.height}px`;
    body.style.maxHeight = `300px`;
    body.style.fontSize = '0.75rem';
    body.style.overflow = 'hidden';
    body.style.resize = 'both';
    const searchBox = document.createElement('input');
    body.appendChild(searchBox);
    searchBox.style.boxSizing = 'border-box';
    searchBox.style.width = '100%';
    searchBox.type = 'search';
    searchBox.onchange = this.search.bind(this);
    this.search_ = searchBox;
    const flyoutDiv = document.createElement('div');
    body.appendChild(flyoutDiv);
    flyoutDiv.style.width = '100%';
    flyoutDiv.style.marginTop = '4px';
    flyoutDiv.style.height = 'calc(calc(100% - 1rem) - 10px)';
    this.flyoutWrapper_ = flyoutDiv;
    this.flyout_.position();
    flyoutDiv.appendChild(this.flyout_.createDom('svg'));
    this.content_ = body;
    this.flyout_.init(this.workspace_);
    // need to inform the contained workspace to not clear this popup
    this.flyout_.workspace_.isBlockPicker = true;
}
Blockly.BlockPicker.prototype.search = function() {
    const search = this.search_.value;
    // strip out all none-spoken symbols when splitting, also only support english for now
    const parses = Blockly.BlockPicker.deriveQualifiers(search);
    const matches = Blockly.BlockPicker.getBestMatches(parses.words, this.index_, parses.text, parses.mapping, this.workspace_, '');
    const xmlList = [];
    for (let i = 0, match; match = matches[i]; i++) {
        xmlList.push(Blockly.BlockPicker.generateFromMatch(match));
    }
    // we explicitly do not want to reuse any blocks for or from this
    this.flyout_.emptyRecycleBlocks_();
    this.update(xmlList);
}

/**
 * Updates the block list for the picker
 * @param {NodeList} nodes
 */
Blockly.BlockPicker.prototype.update = function(nodes, fromToolbox) {
    this.flyout_.show(Blockly.BlockPicker.processNodes(nodes), true);
    if (fromToolbox) {
        this.baseList_ = nodes;
        const ids = Object.keys(this.flyout_.workspace_.blockDB_);
        this.index_ = [];
        const indexed = {};
        for (let f = 0, id = ids[0]; id = ids[f]; f++) {
            if (!id.endsWith('_root')) continue; // not a head block
            const block = this.flyout_.workspace_.getBlockById(id);
            if (indexed[block.type]) continue;
            const words = [];
            // the block MUST have a qualifier, qualifiers being fields
            // if they dont then it causes the search output to be overrun with irrelevant permuations
            if (block.inputList.length == 1 && block.inputList[0].fieldRow.length <= 0) continue;
            for (var i = 0, input; input = block.inputList[i]; i++) {
                for (var j = 0, field; field = input.fieldRow[j]; j++) {
                    if (!field.TEXT_INPUT) {
                        // strip out all none-spoken symbols when splitting, also only support english for now
                        words.push.apply(words, field.getText().split(/[^a-z+-/*&$#@0-9]+/gi).filter(Boolean));
                        continue;
                    }
                    // otherwise, it is editable and so should be allowed to be set arbitrarily
                    words.push({
                        type: 'field',
                        name: field.name,
                        configurable: true,
                        // variable type to restrict to
                        varType: field.variableType_,
                        // restrictor is either regexp or a dropdown list
                        restrictor: field.restrictor_ || ((field.getOptions && field.variableType_) && field.getOptions())
                    });
                }
                if (input.connection) {
                    var child = input.connection.targetBlock();
                    // configurable inputs will be treated as fields if sensible to do so
                    words.push({
                        type: 'input',
                        name: input.name,
                        configurable: !!child,
                        stack: input.type === Blockly.NEXT_STATEMENT,
                        // variable type to restrict to
                        varType: child && child.inputList[0] && child.inputList[0].fieldRow[0] && child.inputList[0].fieldRow[0].variableType_,
                        // restrictor is either regexp or a dropdown list
                        restrictor: child && child.inputList[0] && child.inputList[0].fieldRow[0] && (child.inputList[0].fieldRow[0].restrictor_ || (child.inputList[0].fieldRow[0].getOptions && child.inputList[0].fieldRow[0].getOptions())),
                        default: child && child.type,
                        defaultName: child && child.inputList[0] && child.inputList[0].fieldRow[0] && child.inputList[0].fieldRow[0].name
                    });
                }
            }
            this.index_.push({
                type: block.type,
                types: Object.fromEntries(words.reduce((c,v) => typeof v === 'object' ? (c.push([v.name, v.type]), c) : c, [])),
                shadows: Object.fromEntries(words.reduce((c,v) => typeof v.default === 'string' ? (c.push([v.name, { type: v.default, field: v.defaultName }]), c) : c, [])),
                words,
                isReporter: !!block.outputConnection
            });
            indexed[block.type] = true;
        }
    }
}
/**
 * Shows the block picker menu
 * @param {Blockly.Workspace} workspace 
 * @param {number} atX 
 * @param {number} atY 
 */
Blockly.BlockPicker.prototype.show = function(workspace, atX, atY) {
    Blockly.DropDownDiv.hideWithoutAnimation();
    Blockly.DropDownDiv.clearContent();
    const host = Blockly.DropDownDiv.getContentDiv();
    this.content_.style.width = `${Blockly.BlockPicker.width}px`;
    this.content_.style.height = `${Blockly.BlockPicker.height}px`;
    this.search_.value = '';
    if (this.content_.parentNode) this.content_.remove();
    host.appendChild(this.content_);
    this.update(this.baseList_);
    Blockly.DropDownDiv.setColour(
        document.body.getAttribute('theme') == 'dark' ? '#1e1e1e' : Blockly.Colours.valueReportBackground,
        Blockly.Colours.valueReportBorder
    );
    Blockly.DropDownDiv.setBoundsElement(workspace.getParentSvg().parentNode);
    Blockly.DropDownDiv.show(this, atX, atY, atX, atY, true);
    this.flyout_.position();
    this.flyout_.scrollToStart();
}