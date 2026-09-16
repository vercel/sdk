# GenerateFirewallRuleRateLimit

## Example Usage

```typescript
import { GenerateFirewallRuleRateLimit } from "@vercel/sdk/models/generatefirewallruleop.js";

let value: GenerateFirewallRuleRateLimit = {
  algo: "<value>",
  keys: [],
  limit: 5102.39,
  window: 6283.46,
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `action`           | *string*           | :heavy_minus_sign: | N/A                |
| `algo`             | *string*           | :heavy_check_mark: | N/A                |
| `keys`             | *string*[]         | :heavy_check_mark: | N/A                |
| `limit`            | *number*           | :heavy_check_mark: | N/A                |
| `window`           | *number*           | :heavy_check_mark: | N/A                |