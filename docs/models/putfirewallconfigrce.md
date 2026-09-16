# PutFirewallConfigRce

Remote Execution Attack - Prevent unauthorized execution of remote scripts or commands.

## Example Usage

```typescript
import { PutFirewallConfigRce } from "@vercel/sdk/models/putfirewallconfigop.js";

let value: PutFirewallConfigRce = {
  action: "deny",
  active: false,
};
```

## Fields

| Field                                                                                                                                                                                | Type                                                                                                                                                                                 | Required                                                                                                                                                                             | Description                                                                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `action`                                                                                                                                                                             | [models.PutFirewallConfigSecurityResponse200ApplicationJSONResponseBodyActiveCrsAction](../models/putfirewallconfigsecurityresponse200applicationjsonresponsebodyactivecrsaction.md) | :heavy_check_mark:                                                                                                                                                                   | N/A                                                                                                                                                                                  |
| `active`                                                                                                                                                                             | *boolean*                                                                                                                                                                            | :heavy_check_mark:                                                                                                                                                                   | N/A                                                                                                                                                                                  |