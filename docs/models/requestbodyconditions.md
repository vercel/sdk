# RequestBodyConditions

## Example Usage

```typescript
import { RequestBodyConditions } from "@vercel/sdk/models/updatefirewallconfigop.js";

let value: RequestBodyConditions = {
  type: "protocol",
  op: "neq",
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `type`                                                                                         | [models.UpdateFirewallConfigRequestBodyType](../models/updatefirewallconfigrequestbodytype.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `op`                                                                                           | [models.RequestBodyOp](../models/requestbodyop.md)                                             | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `neg`                                                                                          | *boolean*                                                                                      | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `key`                                                                                          | *string*                                                                                       | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `value`                                                                                        | *models.UpdateFirewallConfigRequestBodySecurityRequest2Value*                                  | :heavy_minus_sign:                                                                             | N/A                                                                                            |