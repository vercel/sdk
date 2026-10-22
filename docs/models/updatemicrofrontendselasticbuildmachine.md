# UpdateMicrofrontendsElasticBuildMachine

Server-owned Elastic assignment; responses may fall back to the legacy label. Not accepted as input. Memory is measured in MiB.

## Example Usage

```typescript
import { UpdateMicrofrontendsElasticBuildMachine } from "@vercel/sdk/models/updatemicrofrontendsreadystate.js";

let value: UpdateMicrofrontendsElasticBuildMachine = {
  cores: 2168.42,
  label: "enhanced",
  memory: 5017.83,
};
```

## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `cores`                                                                                   | *number*                                                                                  | :heavy_check_mark:                                                                        | N/A                                                                                       |
| `label`                                                                                   | [models.UpdateMicrofrontendsLabel](../models/updatemicrofrontendslabel.md)                | :heavy_check_mark:                                                                        | Machine types elastic can assign. Widens when the elastic algorithm adds the 14 CPU tier. |
| `memory`                                                                                  | *number*                                                                                  | :heavy_check_mark:                                                                        | N/A                                                                                       |