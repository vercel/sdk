# UpdateAiGatewayVirtualModelConfigBySlugServiceTier

The service tier for providers that support it. `@default` ignores the value from the inference request. `null` removes the stored value.

## Example Usage

```typescript
import { UpdateAiGatewayVirtualModelConfigBySlugServiceTier } from "@vercel/sdk/models/updateaigatewayvirtualmodelconfigbyslugop.js";

let value: UpdateAiGatewayVirtualModelConfigBySlugServiceTier = "priority";
```

## Values

```typescript
"@default" | "flex" | "priority" | "fast"
```