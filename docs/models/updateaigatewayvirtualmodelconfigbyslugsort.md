# UpdateAiGatewayVirtualModelConfigBySlugSort

Rank eligible providers by an attribute. `@default` ignores the value from the inference request. `null` removes the stored value.

## Example Usage

```typescript
import { UpdateAiGatewayVirtualModelConfigBySlugSort } from "@vercel/sdk/models/updateaigatewayvirtualmodelconfigbyslugop.js";

let value: UpdateAiGatewayVirtualModelConfigBySlugSort = "ttft";
```

## Values

```typescript
"@default" | "cost" | "ttft" | "tps" | "price" | "latency" | "throughput"
```