# RequestBodyHeaders

## Example Usage

```typescript
import { RequestBodyHeaders } from "@vercel/sdk/models/updatesessionnetworkpolicyop.js";

let value: RequestBodyHeaders = {};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `key`                                                                                                        | [models.UpdateSessionNetworkPolicyRequestBodyKey](../models/updatesessionnetworkpolicyrequestbodykey.md)     | :heavy_minus_sign:                                                                                           | Matcher for the entry key (header name or query key).                                                        |
| `value`                                                                                                      | [models.UpdateSessionNetworkPolicyRequestBodyValue](../models/updatesessionnetworkpolicyrequestbodyvalue.md) | :heavy_minus_sign:                                                                                           | Matcher for the entry value.                                                                                 |