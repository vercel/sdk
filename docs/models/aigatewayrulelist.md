# AiGatewayRuleList

## Example Usage

```typescript
import { AiGatewayRuleList } from "@vercel/sdk/models/aigatewayrulelist.js";

let value: AiGatewayRuleList = {
  nextCursor: null,
  rules: [],
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `nextCursor`                                         | *string*                                             | :heavy_check_mark:                                   | N/A                                                  |
| `rules`                                              | [models.AiGatewayRule](../models/aigatewayrule.md)[] | :heavy_check_mark:                                   | N/A                                                  |