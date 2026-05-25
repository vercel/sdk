# Mounts

Key-value pairs of mount path and volume.

## Example Usage

```typescript
import { Mounts } from "@vercel/sdk/models/namedsandbox.js";

let value: Mounts = {
  volume: "<value>",
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `volume`                                                 | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `mode`                                                   | [models.NamedSandboxMode](../models/namedsandboxmode.md) | :heavy_minus_sign:                                       | N/A                                                      |