# CreateAiGatewayRuleType

`rewrite` sends requests for the matched model to another model. `deny` rejects them.

## Example Usage

```typescript
import { CreateAiGatewayRuleType } from "@vercel/sdk/models/createaigatewayruleop.js";

let value: CreateAiGatewayRuleType = "rewrite";
```

## Values

```typescript
"rewrite" | "deny"
```