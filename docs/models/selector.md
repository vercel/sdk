# Selector

For kind=router: how to order candidates. Absent means declared order.

## Example Usage

```typescript
import { Selector } from "@vercel/sdk/models/aigatewayvirtualmodelconfig.js";

let value: Selector = "tps";
```

## Values

```typescript
"cost" | "tps" | "ttft"
```