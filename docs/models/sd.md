# Sd

Scanner Detection - Detect and prevent reconnaissance activities from network scanning tools.

## Example Usage

```typescript
import { Sd } from "@vercel/sdk/models/getfirewallconfigop.js";

let value: Sd = {
  active: false,
  action: "log",
};
```

## Fields

| Field                                                                                                                                                                        | Type                                                                                                                                                                         | Required                                                                                                                                                                     | Description                                                                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `active`                                                                                                                                                                     | *boolean*                                                                                                                                                                    | :heavy_check_mark:                                                                                                                                                           | N/A                                                                                                                                                                          |
| `action`                                                                                                                                                                     | [models.GetFirewallConfigSecurityResponse200ApplicationJSONResponseBodyCrsSdAction](../models/getfirewallconfigsecurityresponse200applicationjsonresponsebodycrssdaction.md) | :heavy_check_mark:                                                                                                                                                           | N/A                                                                                                                                                                          |