# GenerateFirewallRuleRateLimit

## Example Usage

```typescript
import { GenerateFirewallRuleRateLimit } from "@vercel/sdk/models/generatefirewallruleop.js";

let value: GenerateFirewallRuleRateLimit = {
  algo: "<value>",
  window: 1211.16,
  limit: 5102.39,
  keys: [
    "<value 1>",
    "<value 2>",
  ],
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `algo`             | *string*           | :heavy_check_mark: | N/A                |
| `window`           | *number*           | :heavy_check_mark: | N/A                |
| `limit`            | *number*           | :heavy_check_mark: | N/A                |
| `keys`             | *string*[]         | :heavy_check_mark: | N/A                |
| `action`           | *string*           | :heavy_minus_sign: | N/A                |