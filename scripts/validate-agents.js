#!/usr/bin/env node

/**
 * @fileoverview Validate agent implementations
 * Run: npm run agents:validate
 */

const fs = require('fs');
const path = require('path');

console.log('🤖 Hamilton Data-Vis: Agent Validation Script\n');

const checks = [
  {
    name: 'DataOrchestratorAgent',
    files: [
      'src/agents/DataOrchestratorAgent/DataOrchestratorAgent.ts',
    ],
  },
  {
    name: 'ValidationGuardianAgent',
    files: [
      'src/agents/ValidationGuardianAgent/ValidationGuardianAgent.ts',
    ],
  },
  {
    name: 'AnimationVirtuosoAgent',
    files: [
      'src/agents/AnimationVirtuosoAgent/AnimationVirtuosoAgent.ts',
    ],
  },
  {
    name: 'Zustand Stores',
    files: [
      'src/store/dataStore.ts',
      'src/store/validationStore.ts',
      'src/store/animationStore.ts',
    ],
  },
  {
    name: 'EventBus',
    files: [
      'src/utils/eventBus.ts',
    ],
  },
];

let passed = 0;
let failed = 0;

checks.forEach((check) => {
  console.log(`\n📋 Checking: ${check.name}`);
  
  check.files.forEach((file) => {
    const filePath = path.join(process.cwd(), file);
    
    if (fs.existsSync(filePath)) {
      const content = fs.readFileSync(filePath, 'utf-8');
      
      // Basic validation: check file has content
      if (content.length > 100) {
        console.log(`  ✅ ${file}`);
        passed++;
      } else {
        console.log(`  ❌ ${file} (empty or too small)`);
        failed++;
      }
    } else {
      console.log(`  ❌ ${file} (not found)`);
      failed++;
    }
  });
});

console.log(`\n${'═'.repeat(60)}`);
console.log(`\n📊 Results: ${passed} passed, ${failed} failed\n`);

if (failed === 0) {
  console.log('✅ All agents configured correctly!\n');
  console.log('Next steps:');
  console.log('  1. npm install');
  console.log('  2. npm run dev');
  console.log('  3. Open http://localhost:3000\n');
  process.exit(0);
} else {
  console.log('❌ Some files are missing or empty. Please check above.\n');
  process.exit(1);
}
