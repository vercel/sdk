# TeamLimitedSyncState

Controls whether directory sync events are processed. - 'SETUP': Directory connected but role mappings not yet configured. Events are acknowledged but not processed. - 'ACTIVE': Fully configured. Events are processed normally. - undefined: Legacy directory (pre-feature), treat as 'ACTIVE' for backwards compatibility.

## Example Usage

```typescript
import { TeamLimitedSyncState } from "@vercel/sdk/models/teamlimited.js";

let value: TeamLimitedSyncState = "ACTIVE";
```

## Values

```typescript
"SETUP" | "ACTIVE"
```