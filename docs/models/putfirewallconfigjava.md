# PutFirewallConfigJava

Java Attack - Mitigate risks of exploitation targeting Java-based applications or components.

## Example Usage

```typescript
import { PutFirewallConfigJava } from "@vercel/sdk/models/putfirewallconfigop.js";

let value: PutFirewallConfigJava = {
  action: "deny",
  active: true,
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `action`                                                                                                     | [models.PutFirewallConfigSecurityResponse200Action](../models/putfirewallconfigsecurityresponse200action.md) | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `active`                                                                                                     | *boolean*                                                                                                    | :heavy_check_mark:                                                                                           | N/A                                                                                                          |