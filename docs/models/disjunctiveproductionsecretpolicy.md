# DisjunctiveProductionSecretPolicy

Require production secrets to use a different value than preview or development.

## Example Usage

```typescript
import { DisjunctiveProductionSecretPolicy } from "@vercel/sdk/models/team.js";

let value: DisjunctiveProductionSecretPolicy = "default";
```

## Values

```typescript
"default" | "off" | "on"
```