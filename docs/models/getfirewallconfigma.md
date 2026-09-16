# GetFirewallConfigMa

Multipart Attack - Block attempts to bypass security controls using multipart/form-data encoding.

## Example Usage

```typescript
import { GetFirewallConfigMa } from "@vercel/sdk/models/getfirewallconfigop.js";

let value: GetFirewallConfigMa = {
  action: "deny",
  active: false,
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `action`                                                                                                     | [models.GetFirewallConfigSecurityResponse200Action](../models/getfirewallconfigsecurityresponse200action.md) | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `active`                                                                                                     | *boolean*                                                                                                    | :heavy_check_mark:                                                                                           | N/A                                                                                                          |