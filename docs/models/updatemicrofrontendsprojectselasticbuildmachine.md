# UpdateMicrofrontendsProjectsElasticBuildMachine

Server-owned Elastic assignment; responses may fall back to the legacy label. Not accepted as input. Memory is measured in MiB.

## Example Usage

```typescript
import { UpdateMicrofrontendsProjectsElasticBuildMachine } from "@vercel/sdk/models/updatemicrofrontendsresponsebody.js";

let value: UpdateMicrofrontendsProjectsElasticBuildMachine = {
  cores: 1082.8,
  label: "standard",
  memory: 2523.92,
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `cores`                                                                                    | *number*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `label`                                                                                    | [models.UpdateMicrofrontendsProjectsLabel](../models/updatemicrofrontendsprojectslabel.md) | :heavy_check_mark:                                                                         | Machine types elastic can assign. Widens when the elastic algorithm adds the 14 CPU tier.  |
| `memory`                                                                                   | *number*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |