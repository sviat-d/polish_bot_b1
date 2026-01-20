#!/usr/bin/env node
/**
 * Generate tasks.json from pdfTasks.js
 * This script reads the pdfTasks module and writes it as JSON
 */

const fs = require('fs');
const path = require('path');

// Import pdfTasks
const pdfTasks = require('../src/data/pdfTasks');

// Write to tasks.json
const outputPath = path.join(__dirname, '..', 'data', 'tasks.json');
const jsonContent = JSON.stringify(pdfTasks, null, 2);

fs.writeFileSync(outputPath, jsonContent, 'utf-8');

console.log(`✅ Generated ${outputPath}`);
console.log(`📊 Total tasks: ${pdfTasks.length}`);
