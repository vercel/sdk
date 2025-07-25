# Gen

Generic Attack - Provide broad protection from various undefined or novel attack vectors.

## Example Usage

```typescript
import { Gen } from "@vercel/sdk/models/putfirewallconfigop.js";

let value: Gen = {
  active: true,
  action: "deny",
};
```

## Fields

| Field                                                                                                                                  | Type                                                                                                                                   | Required                                                                                                                               | Description                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `active`                                                                                                                               | *boolean*                                                                                                                              | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `action`                                                                                                                               | [models.PutFirewallConfigSecurityRequestRequestBodyCrsGenAction](../models/putfirewallconfigsecurityrequestrequestbodycrsgenaction.md) | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |