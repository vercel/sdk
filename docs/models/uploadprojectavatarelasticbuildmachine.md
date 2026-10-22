# UploadProjectAvatarElasticBuildMachine

Server-owned Elastic assignment; responses may fall back to the legacy label. Not accepted as input. Memory is measured in MiB.

## Example Usage

```typescript
import { UploadProjectAvatarElasticBuildMachine } from "@vercel/sdk/models/uploadprojectavatarreadysubstate.js";

let value: UploadProjectAvatarElasticBuildMachine = {
  cores: 1402.25,
  label: "enhanced",
  memory: 3505.97,
};
```

## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `cores`                                                                                   | *number*                                                                                  | :heavy_check_mark:                                                                        | N/A                                                                                       |
| `label`                                                                                   | [models.UploadProjectAvatarLabel](../models/uploadprojectavatarlabel.md)                  | :heavy_check_mark:                                                                        | Machine types elastic can assign. Widens when the elastic algorithm adds the 14 CPU tier. |
| `memory`                                                                                  | *number*                                                                                  | :heavy_check_mark:                                                                        | N/A                                                                                       |