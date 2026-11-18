# CreateAiGatewayVirtualModelConfigServiceTier

The service tier for providers that support it. `@default` ignores the value from the inference request.

## Example Usage

```typescript
import { CreateAiGatewayVirtualModelConfigServiceTier } from "@vercel/sdk/models/createaigatewayvirtualmodelconfigop.js";

let value: CreateAiGatewayVirtualModelConfigServiceTier = "fast";
```

## Values

```typescript
"@default" | "flex" | "priority" | "fast"
```