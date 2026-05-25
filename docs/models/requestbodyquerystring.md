# RequestBodyQueryString

## Example Usage

```typescript
import { RequestBodyQueryString } from "@vercel/sdk/models/updatesessionnetworkpolicyop.js";

let value: RequestBodyQueryString = {};
```

## Fields

| Field                                                                                                                          | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `key`                                                                                                                          | [models.RequestBodyKey](../models/requestbodykey.md)                                                                           | :heavy_minus_sign:                                                                                                             | Matcher for the entry key (header name or query key).                                                                          |
| `value`                                                                                                                        | [models.UpdateSessionNetworkPolicyRequestBodySandboxesValue](../models/updatesessionnetworkpolicyrequestbodysandboxesvalue.md) | :heavy_minus_sign:                                                                                                             | Matcher for the entry value.                                                                                                   |