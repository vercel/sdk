# GetProjectElasticBuildMachine

Server-owned Elastic assignment; responses may fall back to the legacy label. Not accepted as input. Memory is measured in MiB.

## Example Usage

```typescript
import { GetProjectElasticBuildMachine } from "@vercel/sdk/models/getprojectprojectscreator.js";

let value: GetProjectElasticBuildMachine = {
  cores: 5999.91,
  label: "turbo",
  memory: 71.44,
};
```

## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `cores`                                                                                   | *number*                                                                                  | :heavy_check_mark:                                                                        | N/A                                                                                       |
| `label`                                                                                   | [models.GetProjectLabel](../models/getprojectlabel.md)                                    | :heavy_check_mark:                                                                        | Machine types elastic can assign. Widens when the elastic algorithm adds the 14 CPU tier. |
| `memory`                                                                                  | *number*                                                                                  | :heavy_check_mark:                                                                        | N/A                                                                                       |