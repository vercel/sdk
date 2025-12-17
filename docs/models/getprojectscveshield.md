# GetProjectsCveShield

## Example Usage

```typescript
import { GetProjectsCveShield } from "@vercel/sdk/models/getprojectsop.js";

let value: GetProjectsCveShield = {
  enabled: true,
};
```

## Fields

| Field                                                     | Type                                                      | Required                                                  | Description                                               |
| --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- |
| `enabled`                                                 | *boolean*                                                 | :heavy_check_mark:                                        | True if the CVE Shield has been enabled. Otherwise false. |
| `threshold`                                               | *number*                                                  | :heavy_minus_sign:                                        | CVE threshold. It can range between 1 and 10.             |
| `cveList`                                                 | *string*[]                                                | :heavy_minus_sign:                                        | List of CVE that we want to protect against.              |