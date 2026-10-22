# GetMicrofrontendsInGroupMicrofrontendsElasticBuildMachine

Server-owned Elastic assignment; responses may fall back to the legacy label. Not accepted as input. Memory is measured in MiB.

## Example Usage

```typescript
import { GetMicrofrontendsInGroupMicrofrontendsElasticBuildMachine } from "@vercel/sdk/models/getmicrofrontendsingroupreadysubstate.js";

let value: GetMicrofrontendsInGroupMicrofrontendsElasticBuildMachine = {
  cores: 9069.1,
  label: "standard",
  memory: 2782.78,
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `cores`                                                                                                        | *number*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `label`                                                                                                        | [models.GetMicrofrontendsInGroupMicrofrontendsLabel](../models/getmicrofrontendsingroupmicrofrontendslabel.md) | :heavy_check_mark:                                                                                             | Machine types elastic can assign. Widens when the elastic algorithm adds the 14 CPU tier.                      |
| `memory`                                                                                                       | *number*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |