"""
🤖 COPILOT AGENT #1: DATA ORCHESTRATOR
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

ROLE: Lead data flow orchestration and validation
WORKSPACE: @/agents/DataOrchestratorAgent

PRIMARY RESPONSIBILITIES:
  1. Load Hamilton dataset from /public/data/hamilton_data.json
  2. Validate schema against HamiltonDataPoint interface
  3. Orchestrate data through processing pipeline
  4. Emit validated data to event bus for other agents
  5. Handle caching and data refreshes
  6. Report validation errors to ValidationAgent

CORE METHODS TO IMPLEMENT:
  • loadRawData(): Promise<unknown>
  • validateSchema(data: unknown): ValidationResult
  • processData(raw: unknown): ProcessedData
  • enrichWithAnalytics(data: ProcessedData): Analytics
  • emitDataReady(data: ProcessedData): void
  • subscribeToFilterChanges(callback): void

COMMUNICATION PROTOCOL:
  - EMITS: 'data:loaded' | 'data:validated' | 'data:processed' | 'data:error'
  - LISTENS: 'filter:change' | 'validation:request' | 'analytics:compute'
  - STORE: src/store/dataStore.ts (Zustand with persist)

VALIDATION GATES (STRICT MODE):
  ✓ Schema validation - MUST pass or reject entirely
  ✓ Type checking - All fields typed correctly
  ✓ Data integrity - No null/undefined in critical fields
  ✓ Referential integrity - Characters exist, emotions valid
  ✓ Value ranges - Duration > 0, density > 0, verses > 0

ERROR HANDLING STRATEGY:
  - InvalidSchemaError → Log + Emit 'data:error' + Show user alert
  - ParseError → Attempt recovery, if fails → reject
  - ValidationError → Pass to ValidationAgent for strict/warning handling
  - NetworkError → Retry 3x with exponential backoff

PERFORMANCE TARGETS:
  - Initial load: < 500ms
  - Schema validation: < 100ms
  - Data processing: < 200ms
  - Total pipeline: < 800ms

CODE STRUCTURE:
  src/agents/DataOrchestratorAgent/
  ├── DataOrchestratorAgent.ts      ← Main class
  ├── dataOrchestrator.config.ts    ← Configuration
  ├── dataOrchestrator.types.ts     ← Local types
  ├── dataOrchestrator.store.ts     ← Zustand integration
  ├── dataOrchestrator.test.ts      ← Unit tests (80%+ coverage)
  ├── README.md                      ← Full documentation
  └── PROMPTS.md                     ← Copilot coordination

EXAMPLE FLOW:
  1. App mounts → DataOrchestratorAgent.initialize()
  2. Load /public/data/hamilton_data.json
  3. Validate against schema (strict mode enforced)
  4. Process data (group by character, emotion, etc.)
  5. Compute analytics (averages, distributions)
  6. Emit 'data:validated' + 'data:processed'
  7. Store in Zustand dataStore.ts
  8. Other agents listen and react

TESTS REQUIRED:
  - loadRawData() with valid JSON
  - loadRawData() with invalid JSON (error handling)
  - validateSchema() with valid data
  - validateSchema() with missing fields
  - validateSchema() with wrong types
  - processData() produces correct PersonajesSet
  - enrichWithAnalytics() calculates correct stats
  - Event emission on success/error
  - Caching behavior (no double-fetches)
  - Error recovery (retry logic)

INTEGRATION POINTS:
  ← ValidationAgent: Send validation requests
  ← AnimationAgent: Trigger animations on data load
  → Store: Persist processed data
  → EventBus: Broadcast data events

SUCCESS CRITERIA:
  ✅ Data loads within 800ms
  ✅ 100% schema validation pass/fail
  ✅ All characters extracted correctly
  ✅ Analytics computed accurately
  ✅ Zero memory leaks (subscription cleanup)
  ✅ Event emissions logged properly
  ✅ Tests pass with >80% coverage
  ✅ TypeScript strict mode compliant

NEXT STEPS:
  1. Read docs/AGENTS.md for architecture overview
  2. Review src/types/hamilton.ts for data structures
  3. Implement DataOrchestratorAgent class
  4. Create unit tests before writing implementation
  5. Integrate with eventBus (will be provided)
  6. Test with real data in /public/data/
  7. Emit 'agent:ready' when initialized

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
"""
