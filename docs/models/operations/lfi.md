# Lfi

## Example Usage

```typescript
import { Lfi } from "@vercel/sdk/models/operations/putfirewallconfig.js";

let value: Lfi = {
  active: false,
  action: "log",
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `active`                                                                                                               | *boolean*                                                                                                              | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `action`                                                                                                               | [operations.PutFirewallConfigSecurityRequestAction](../../models/operations/putfirewallconfigsecurityrequestaction.md) | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |