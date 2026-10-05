# DefaultContinuousUsageKind

Default continuous-usage billing kind for projects under this team. Absent means projects stay unmetered.

## Example Usage

```typescript
import { DefaultContinuousUsageKind } from "@vercel/sdk/models/team.js";

let value: DefaultContinuousUsageKind = "metered";
```

## Values

```typescript
"metered" | "unmetered"
```