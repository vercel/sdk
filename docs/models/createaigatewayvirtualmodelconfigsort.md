# CreateAiGatewayVirtualModelConfigSort

Rank eligible providers by an attribute. `@default` ignores the value from the inference request.

## Example Usage

```typescript
import { CreateAiGatewayVirtualModelConfigSort } from "@vercel/sdk/models/createaigatewayvirtualmodelconfigop.js";

let value: CreateAiGatewayVirtualModelConfigSort = "tps";
```

## Values

```typescript
"@default" | "cost" | "ttft" | "tps" | "price" | "latency" | "throughput"
```