# QueryString

## Example Usage

```typescript
import { QueryString } from "@vercel/sdk/models/updatenetworkpolicyop.js";

let value: QueryString = {};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `key`                                                                    | [models.Key](../models/key.md)                                           | :heavy_minus_sign:                                                       | Matcher for the entry key (header name or query key).                    |
| `value`                                                                  | [models.UpdateNetworkPolicyValue](../models/updatenetworkpolicyvalue.md) | :heavy_minus_sign:                                                       | Matcher for the entry value.                                             |