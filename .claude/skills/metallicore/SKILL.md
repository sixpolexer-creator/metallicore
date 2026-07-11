```markdown
# metallicore Development Patterns

> Auto-generated skill from repository analysis

## Overview
This skill teaches the core development patterns and conventions used in the `metallicore` TypeScript codebase. You will learn how to structure files, write imports and exports, and follow best practices for testing and workflow execution. This guide is ideal for contributors seeking consistency and clarity in their code contributions.

## Coding Conventions

### File Naming
- Use **snake_case** for all file names.
  - Example:  
    ```
    user_service.ts
    data_processor.test.ts
    ```

### Import Style
- Use **alias imports** to bring in modules.
  - Example:
    ```typescript
    import * as utils from './utils';
    import { processData as pd } from './data_processor';
    ```

### Export Style
- Use **named exports** for all exported functions, classes, or constants.
  - Example:
    ```typescript
    // In user_service.ts
    export function getUser(id: string) { ... }
    export const USER_ROLE = 'admin';
    ```

### Commit Patterns
- Commit messages are **freeform**; no strict prefixing required.
- Typical commit message length: ~72 characters.

## Workflows

### Adding a New Module
**Trigger:** When creating a new feature or logical unit.
**Command:** `/add-module`

1. Create a new file using snake_case (e.g., `feature_name.ts`).
2. Implement your logic using named exports.
3. Import dependencies using alias imports as needed.
4. Write corresponding tests in a file named `feature_name.test.ts`.
5. Commit your changes with a descriptive message.

### Refactoring Existing Code
**Trigger:** When improving or restructuring existing modules.
**Command:** `/refactor-module`

1. Identify the target file(s) to refactor.
2. Ensure file names use snake_case.
3. Update imports to use alias style if not already.
4. Ensure all exports are named.
5. Run or write tests to confirm functionality.
6. Commit with a message describing the refactor.

### Writing Tests
**Trigger:** When adding or updating functionality.
**Command:** `/write-test`

1. Create a test file with the pattern `module_name.test.ts`.
2. Write tests using the project's preferred (currently unknown) testing framework.
3. Ensure tests cover all named exports.
4. Run tests to verify correctness.
5. Commit test files with a clear message.

## Testing Patterns

- Test files follow the pattern: `*.test.*` (e.g., `user_service.test.ts`).
- The specific testing framework is not detected; follow existing patterns in the repository.
- Place tests alongside or near the modules they test.

**Example:**
```typescript
// user_service.test.ts
import { getUser } from './user_service';

describe('getUser', () => {
  it('returns user by id', () => {
    // test implementation
  });
});
```

## Commands
| Command         | Purpose                                      |
|-----------------|----------------------------------------------|
| /add-module     | Scaffold and implement a new module          |
| /refactor-module| Refactor an existing module for consistency  |
| /write-test     | Add or update tests for a module             |
```
