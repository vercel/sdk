# Mounts

Key-value pairs of mount path and drive.

## Example Usage

```typescript
import { Mounts } from "@vercel/sdk/models/namedsandbox.js";

let value: Mounts = {
  drive: "<value>",
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `drive`                                                  | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `mode`                                                   | [models.NamedSandboxMode](../models/namedsandboxmode.md) | :heavy_minus_sign:                                       | N/A                                                      |