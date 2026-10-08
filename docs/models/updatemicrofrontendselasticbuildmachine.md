# UpdateMicrofrontendsElasticBuildMachine

Internal assignment, intentionally excluded from API input/output schemas.

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

| Field                                                                                                                                                                                   | Type                                                                                                                                                                                    | Required                                                                                                                                                                                | Description                                                                                                                                                                             |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `cores`                                                                                                                                                                                 | *number*                                                                                                                                                                                | :heavy_check_mark:                                                                                                                                                                      | N/A                                                                                                                                                                                     |
| `label`                                                                                                                                                                                 | [models.UpdateMicrofrontendsLabel](../models/updatemicrofrontendslabel.md)                                                                                                              | :heavy_check_mark:                                                                                                                                                                      | Machine types an elastic decision can effectively apply or persist. The algorithm may consider Basic, but Basic is normalized to standard before an elastic decision becomes effective. |
| `memory`                                                                                                                                                                                | *number*                                                                                                                                                                                | :heavy_check_mark:                                                                                                                                                                      | N/A                                                                                                                                                                                     |