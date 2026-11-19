# UpdateAiGatewayVirtualModelConfigServiceTier

The service tier for providers that support it. `@default` ignores the value from the inference request. `null` removes the stored value.

## Example Usage

```typescript
import { UpdateAiGatewayVirtualModelConfigServiceTier } from "@vercel/sdk/models/updateaigatewayvirtualmodelconfigop.js";

let value: UpdateAiGatewayVirtualModelConfigServiceTier = "flex";
```

## Values

```typescript
"@default" | "flex" | "priority" | "fast"
```