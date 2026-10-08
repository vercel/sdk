# UploadProjectAvatarElasticBuildMachine

Internal assignment, intentionally excluded from API input/output schemas.

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

| Field                                                                                                                                                                                   | Type                                                                                                                                                                                    | Required                                                                                                                                                                                | Description                                                                                                                                                                             |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `cores`                                                                                                                                                                                 | *number*                                                                                                                                                                                | :heavy_check_mark:                                                                                                                                                                      | N/A                                                                                                                                                                                     |
| `label`                                                                                                                                                                                 | [models.UploadProjectAvatarLabel](../models/uploadprojectavatarlabel.md)                                                                                                                | :heavy_check_mark:                                                                                                                                                                      | Machine types an elastic decision can effectively apply or persist. The algorithm may consider Basic, but Basic is normalized to standard before an elastic decision becomes effective. |
| `memory`                                                                                                                                                                                | *number*                                                                                                                                                                                | :heavy_check_mark:                                                                                                                                                                      | N/A                                                                                                                                                                                     |