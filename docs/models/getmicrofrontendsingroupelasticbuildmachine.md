# GetMicrofrontendsInGroupElasticBuildMachine

Internal assignment, intentionally excluded from API input/output schemas.

## Example Usage

```typescript
import { GetMicrofrontendsInGroupElasticBuildMachine } from "@vercel/sdk/models/getmicrofrontendsingroupreadysubstate.js";

let value: GetMicrofrontendsInGroupElasticBuildMachine = {
  cores: 1463.02,
  label: "standard",
  memory: 7382.39,
};
```

## Fields

| Field                                                                                                                                                                                   | Type                                                                                                                                                                                    | Required                                                                                                                                                                                | Description                                                                                                                                                                             |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `cores`                                                                                                                                                                                 | *number*                                                                                                                                                                                | :heavy_check_mark:                                                                                                                                                                      | N/A                                                                                                                                                                                     |
| `label`                                                                                                                                                                                 | [models.GetMicrofrontendsInGroupLabel](../models/getmicrofrontendsingrouplabel.md)                                                                                                      | :heavy_check_mark:                                                                                                                                                                      | Machine types an elastic decision can effectively apply or persist. The algorithm may consider Basic, but Basic is normalized to standard before an elastic decision becomes effective. |
| `memory`                                                                                                                                                                                | *number*                                                                                                                                                                                | :heavy_check_mark:                                                                                                                                                                      | N/A                                                                                                                                                                                     |