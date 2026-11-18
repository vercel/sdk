# UpdateAiGatewayVirtualModelConfigSort

Rank eligible providers by an attribute. `@default` ignores the value from the inference request. `null` removes the stored value.

## Example Usage

```typescript
import { UpdateAiGatewayVirtualModelConfigSort } from "@vercel/sdk/models/updateaigatewayvirtualmodelconfigop.js";

let value: UpdateAiGatewayVirtualModelConfigSort = "price";
```

## Values

```typescript
"@default" | "cost" | "ttft" | "tps" | "price" | "latency" | "throughput"
```